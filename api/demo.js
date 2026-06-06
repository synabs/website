export default async function handler(req, res) {
  const response = await fetch('https://website-backend-amber-tau.vercel.app/api/demo', {
    headers: {
      'x-demo-key': process.env.DEMO_API_KEY,
    },
  })

  if (!response.ok) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const html = await response.text()
  res.setHeader('Content-Type', 'text/html')
  res.send(html)
}
