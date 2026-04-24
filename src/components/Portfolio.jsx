import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import '../assets/css/portfolio.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with AI-powered recommendations',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    description: 'Telemedicine platform connecting patients with healthcare providers',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React Native', 'Firebase', 'HIPAA']
  },
  {
    title: 'Cloud Infrastructure',
    category: 'Cloud Solutions',
    description: 'Scalable cloud architecture for enterprise SaaS platform',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['AWS', 'Docker', 'Kubernetes']
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our latest projects
        </p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>

    </section>
  )
}

const PortfolioCard = ({ project }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // 🔥 FRONT → BACK FLIP
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -90])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 1, 0.4])

  return (
    <div ref={ref} className="portfolio-card-wrap">

      <motion.div
        className="portfolio-card"
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: 'preserve-3d'
        }}
      >

        <div
          className="portfolio-image"
          style={{ background: project.image }}
        >
          <motion.div
            className="portfolio-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <ExternalLink size={24} />
            <GitBranch size={24} />
          </motion.div>
        </div>

        <div className="portfolio-content">
          <span className="portfolio-category">
            {project.category}
          </span>

          <h3 className="portfolio-title">
            {project.title}
          </h3>

          <p className="portfolio-description">
            {project.description}
          </p>

          <div className="portfolio-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="portfolio-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default Portfolio