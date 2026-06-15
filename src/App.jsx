import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Abilities from './components/Abilities'
import FeaturesResults from './components/FeaturesResults'
import SetupSection from './components/SetupSection'
import Demo from './components/Demo'
import Setup from './components/Setup'
import Evolve from './components/Evolve'
import Prototype from './components/Prototype'
import About from './components/About'
import Cortex from './components/Cortex'
import Table from './components/Table'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesResults />
      <Cortex />
      <Abilities />
      <SetupSection />
      <About />
      <Table />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
