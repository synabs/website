import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Evolve from './components/Evolve'
import Setup from './components/Setup'
import Prototype from './components/Prototype'
import Pricing from './components/Pricing'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Evolve />
      <Setup />
      <Prototype />
      <Pricing />
    </>
  )
}
