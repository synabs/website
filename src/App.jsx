import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Evolve from './components/Evolve'
import Pricing from './components/Pricing'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Demo />
      <Evolve />
      <Pricing />
    </>
  )
}
