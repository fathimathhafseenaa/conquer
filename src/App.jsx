import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return (
      <motion.div 
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.2 }}
      >
        <motion.div
          className="loader-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-logo">Conquer</div>
          <motion.div
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="app">
      <AnimatedBackground />
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App