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
    <section className="demo">
      <iframe
        ref={iframeRef}
        title="Synbot Demo"
        scrolling="no"
        style={{
          width: '320px',
          height: '540px',
          border: 'none',
          display: 'block',
        }}
      />
    </section>
  )
}
