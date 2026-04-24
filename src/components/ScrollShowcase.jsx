import { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../assets/logo.png'

const ScrollShowcase = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Enhanced transform values for premium Apple-like animation
  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 15, -15, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1.1, 1.3, 1.1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [50, -20, 20, -10, -50])
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, -15, 15, -30])

  // Text opacity transforms for fade in/out effects
  const title1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [1, 1, 0, 0])
  const title2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0])
  const title3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0])
  const title4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])

  const subtitle1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0.8, 0.8, 0, 0])
  const subtitle2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 0.8, 0.8, 0])
  const subtitle3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 0.8, 0.8, 0])
  const subtitle4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 0.8, 0.8])

  const showcaseItems = [
    {
      id: 1,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "IT Infrastructure",
      description: "Scalable cloud solutions and robust network architecture",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Client Dashboard",
      description: "Intuitive analytics and management platforms",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ]

  return (
    <section ref={containerRef} className="scroll-showcase">
      <div className="showcase-container">
        {/* Full Screen Sticky Container */}
        <div className="showcase-sticky">
          <div className="showcase-content">
            {/* Main Animated Logo */}
            <motion.div
              className="showcase-main-image"
              style={{
                rotate,
                scale,
                y,
                x
              }}
            >
              <img
                src={logo}
                alt="Conquer Logo"
                className="logo-image-main"
              />
            </motion.div>

            {/* Animated Text Overlay */}
            <div className="showcase-text-overlay">
              {/* Title 1 */}
              <motion.div
                className="text-section"
                style={{ opacity: title1Opacity }}
              >
                <motion.h1 className="showcase-title">
                  Innovation
                </motion.h1>
                <motion.p className="showcase-subtitle" style={{ opacity: subtitle1Opacity }}>
                  Pushing boundaries with cutting-edge technology
                </motion.p>
              </motion.div>

              {/* Title 2 */}
              <motion.div
                className="text-section"
                style={{ opacity: title2Opacity }}
              >
                <motion.h1 className="showcase-title">
                  Excellence
                </motion.h1>
                <motion.p className="showcase-subtitle" style={{ opacity: subtitle2Opacity }}>
                  Delivering premium solutions that exceed expectations
                </motion.p>
              </motion.div>

              {/* Title 3 */}
              <motion.div
                className="text-section"
                style={{ opacity: title3Opacity }}
              >
                <motion.h1 className="showcase-title">
                  Performance
                </motion.h1>
                <motion.p className="showcase-subtitle" style={{ opacity: subtitle3Opacity }}>
                  Optimized for speed, reliability, and scalability
                </motion.p>
              </motion.div>

              {/* Title 4 */}
              <motion.div
                className="text-section"
                style={{ opacity: title4Opacity }}
              >
                <motion.h1 className="showcase-title">
                  Future-Ready
                </motion.h1>
                <motion.p className="showcase-subtitle" style={{ opacity: subtitle4Opacity }}>
                  Building tomorrow's technology today
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Showcase Items */}
        <div className="showcase-items">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="showcase-item"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="item-image"
                style={{ background: item.gradient }}
              >
                <div className="item-icon">
                  {index === 0 && "💻"}
                  {index === 1 && "☁️"}
                  {index === 2 && "📊"}
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollShowcase