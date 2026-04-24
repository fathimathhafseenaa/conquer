import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    y: ['-10px', '10px', '-10px'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <motion.div
          className="hero-gradient-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hero-gradient-orb orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hero-gradient-orb orb-3"
          animate={floatingAnimation}
        />
        
        {/* Additional Hero Motion Graphics */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`hero-particle-${i}`}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Hexagon Grid */}
        <motion.div
          className="hexagon-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="hexagon"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="hero-grid" />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="badge-dot" />
          <span>Next-Gen IT Solutions</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Transforming Ideas Into
          <br />
          <span className="gradient-text">Digital Excellence</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-description">
          We build cutting-edge software solutions, cloud infrastructure, and 
          digital experiences that drive business growth and innovation in the 
          modern digital landscape.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="hero-stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Expert Engineers</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <motion.div
            className="scroll-wheel"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
