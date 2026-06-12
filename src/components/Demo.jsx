import { useEffect, useRef } from 'react'
import '../styles/Demo.css'

export default function Demo() {
  const iframeRef = useRef(null)

  useEffect(() => {
    let blobUrl = null

    fetch('/api/demo')
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized')
        return res.text()
      })
      .then((html) => {
        const blob = new Blob([html], { type: 'text/html' })
        blobUrl = URL.createObjectURL(blob)
        if (iframeRef.current) {
          iframeRef.current.src = blobUrl
        }
      })
      .catch((err) => console.error('Demo load failed:', err))

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl)
    }
  }, [])

  return (
    <section className="demo" id="demo">
      <div className="device-frame">
        {/* Notch / top bar */}
        <div className="device-frame__topbar">
          <div className="device-frame__camera" />
        </div>

        {/* Screen */}
        <div className="device-frame__screen">
          <iframe
            ref={iframeRef}
            title="Synbot Demo"
            scrolling="no"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="device-frame__bottombar">
          <div className="device-frame__pill" />
        </div>
      </div>
    </section>
  )
}
