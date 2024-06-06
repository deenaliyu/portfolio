import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Services from './components/Services/services'
import Works from './components/Works/work'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

