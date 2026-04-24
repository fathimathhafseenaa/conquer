import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const StatCounter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`stat-${end}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [end])

  useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return (
    <span id={`stat-${end}`}>
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed', color: '#1d4ed8' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', color: '#7c3aed' },
    { number: 50, suffix: '+', label: 'Team Members', color: '#db2777' },
    { number: 10, suffix: '+', label: 'Years Experience', color: '#10b981' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="section stats">
      {/* Stats Background Motion Graphics */}
      <div className="section-bg-effects">
        {/* Counting Number Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`stat-particle-${i}`}
            className="stat-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`glow-dot-${i}`}
            className="glow-dot"
            style={{
              left: `${i * 7}%`,
              top: `${50 + Math.sin(i) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="stat-number"
              style={{ color: stat.color }}
              whileHover={{ scale: 1.2 }}
            >
              <StatCounter end={stat.number} suffix={stat.suffix} duration={2000} />
            </motion.div>
            <div className="stat-label">{stat.label}</div>
            <motion.div
              className="stat-bar"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ background: stat.color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stats
