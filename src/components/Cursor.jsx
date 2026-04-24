import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for hoverable elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"], .portfolio-card, .service-card, .stat-card, .testimonial-card')

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', updateMousePosition)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 35,
          mass: 0.6
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 1
        }}
      />
    </>
  )
}

export default Cursor