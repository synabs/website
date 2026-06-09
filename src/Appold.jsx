import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturesResults from "./FeaturesResults";
import Demo from './components/Demo'
import Setup from './components/Setup'
import Evolve from './components/Evolve'
import Prototype from './components/Prototype'
import About from './components/About'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Setup />
      <Evolve />
      <Prototype />
      <About />
      <Pricing />
      <CTA />
    </>
  )
}
