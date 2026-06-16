import { useEffect, useRef, useState, useCallback } from 'react'
import '../styles/ScrollProgress.css'

const sectionIds = [
  'hero',
  'features-results',
  'cortex',
  'technology',
  'abilities',
  'setup-section',
  'about',
  'table',
  'pricing',
  'faq',
  'cta',
]

// Luotettavampi absTop: getBoundingClientRect + scrollY
function getAbsoluteTop(el) {
  const rect = el.getBoundingClientRect()
  return rect.top + window.scrollY
}

// Magneetti: jokainen hexagonien välinen segmentti jaetaan kahteen osaan:
//   0–90%   : bar liikkuu lineaarisesti (ei lukkoa alkuhexagoniin)
//   90–100% : bar lukittuna (imeytyy) seuraavaan hexagoniin
const LOCK_ZONE = 0.10 // osuus segmentin lopusta joka on "lukittu" seuraavaan hexagoniin

function applyMagnet(rawFill, checkpoints) {
  if (checkpoints.length === 0) return rawFill

  const sorted = [...checkpoints].sort((a, b) => a.railPct - b.railPct)

  // Ennen ensimmäistä hexagonia tai sen jälkeen viimeisestä: ei segmenttiä, lukitaan reunaan
  if (rawFill <= sorted[0].railPct) return sorted[0].railPct
  if (rawFill >= sorted[sorted.length - 1].railPct) {
    return sorted[sorted.length - 1].railPct
  }

  // Etsi segmentti, jossa rawFill sijaitsee
  let segStart = sorted[0]
  let segEnd = sorted[sorted.length - 1]
  for (let i = 0; i < sorted.length - 1; i++) {
    if (rawFill >= sorted[i].railPct && rawFill <= sorted[i + 1].railPct) {
      segStart = sorted[i]
      segEnd = sorted[i + 1]
      break
    }
  }

  const span = segEnd.railPct - segStart.railPct
  if (span <= 0) return segStart.railPct

  // t = 0..1 sijainti segmentin sisällä
  const t = (rawFill - segStart.railPct) / span

  if (t >= 1 - LOCK_ZONE) {
    // Imeytynyt loppuhexagoniin
    return segEnd.railPct
  }

  // Vapaa liike: skaalataan 0–90% väli takaisin 0–1, ja sovitetaan segmentin sisälle
  const travelT = t / (1 - LOCK_ZONE)
  return segStart.railPct + travelT * span
}

export default function ScrollProgress() {
  const [displayFill, setDisplayFill] = useState(0)
  const [checkpoints, setCheckpoints] = useState([])
  const [filledMap, setFilledMap] = useState({})
  const [poppingId, setPoppingId] = useState(null)

  const rafRef = useRef(null)
  const popTimeoutRef = useRef(null)
  const filledRef = useRef({})
  const checkpointsRef = useRef([])
  const rangeRef = useRef({ start: 0, end: 1 })

  const computeCheckpoints = useCallback(() => {
    const doc = document.documentElement
    const scrollHeight = doc.scrollHeight - doc.clientHeight
    if (scrollHeight <= 0) return

    const positions = sectionIds
      .map((id) => {
        const el = document.getElementById(id)
        if (!el) return null
        return { id, absTop: getAbsoluteTop(el) }
      })
      .filter(Boolean)

    if (positions.length === 0) return

    const startTop = positions[0].absTop
    const endTop = positions[positions.length - 1].absTop
    const span = endTop - startTop || 1

    rangeRef.current = { start: startTop, end: endTop }

    const next = positions.map(({ id, absTop }) => ({
      id,
      absTop,
      // railPct: 0% = hero, 100% = cta
      railPct: Math.min(100, Math.max(0, ((absTop - startTop) / span) * 100)),
    }))

    checkpointsRef.current = next
    setCheckpoints(next)
  }, [])

  useEffect(() => {
    computeCheckpoints()
    window.addEventListener('resize', computeCheckpoints)
    // Uudelleenlasku kun kuvat/fontit ovat ladanneet
    const t1 = window.setTimeout(computeCheckpoints, 400)
    const t2 = window.setTimeout(computeCheckpoints, 1200)
    return () => {
      window.removeEventListener('resize', computeCheckpoints)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [computeCheckpoints])

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const { start, end } = rangeRef.current
      const span = end - start || 1

      // Raw fill: lineaarinen scrollin mukaan
      const rawFill = Math.min(100, Math.max(0, ((scrollTop - start) / span) * 100))

      // Magneettinen fill UI:hin
      const magneticFill = applyMagnet(rawFill, checkpointsRef.current)
      setDisplayFill(magneticFill)

      // Hexagonien täyttö: käytetään MAGNEETTISTA filliä (ei raakaa),
      // jotta hexagon täyttyy juuri kun bar visuaalisesti saavuttaa sen
      // (estää tilanteen jossa bar on jo hexagonin kohdalla/ohi mutta
      // hexagon näyttää vielä tyhjältä)
      let changed = false
      const nextFilled = { ...filledRef.current }

      checkpointsRef.current.forEach(({ id, railPct }) => {
        // Hero (railPct===0) on aina täynnä heti
        const isPast = railPct === 0 ? true : magneticFill >= railPct - 0.01
        const wasFilled = !!filledRef.current[id]

        if (isPast && !wasFilled) {
          nextFilled[id] = true
          changed = true
          if (railPct > 0) {
            setPoppingId(id)
            if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
            popTimeoutRef.current = window.setTimeout(() => {
              setPoppingId((cur) => (cur === id ? null : cur))
            }, 400)
          }
        } else if (!isPast && wasFilled) {
          delete nextFilled[id]
          changed = true
        }
      })

      if (changed) {
        filledRef.current = nextFilled
        setFilledMap({ ...nextFilled })
      }

      rafRef.current = null
    }

    function onScroll() {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    // Aja heti kun checkpoints on laskettu
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__frame">
        <div className="scroll-progress__rail-line" />
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{ width: `${displayFill}%` }}
          />
        </div>
        <div className="scroll-progress__points">
          {checkpoints.map(({ id, railPct }) => {
            const isFilled = !!filledMap[id]
            const isPopping = poppingId === id
            return (
              <div
                key={id}
                className={[
                  'scroll-progress__point',
                  isFilled ? 'scroll-progress__point--filled' : '',
                  isPopping ? 'scroll-progress__point--pop' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${railPct}%` }}
              >
                <svg
                  className="scroll-progress__hex"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    className="scroll-progress__hex-outline"
                    points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <polygon
                    className="scroll-progress__hex-fill"
                    points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
