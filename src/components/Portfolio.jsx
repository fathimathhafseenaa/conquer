import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'  // ✅ safe icon

const Portfolio = () => {
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
    },
    {
      title: 'FinTech Dashboard',
      category: 'Data Analytics',
      description: 'Real-time financial analytics and reporting dashboard',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['Python', 'D3.js', 'PostgreSQL']
    },
    {
      title: 'Smart Home IoT',
      category: 'IoT Solutions',
      description: 'Connected home automation system with mobile control',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      tags: ['IoT', 'MQTT', 'React']
    },
    {
      title: 'AI Chatbot Platform',
      category: 'Artificial Intelligence',
      description: 'Intelligent customer service automation with NLP',
      image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      tags: ['Python', 'TensorFlow', 'NLP']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="portfolio" className="section portfolio">
      
      {/* Portfolio Background Motion Graphics */}
      <div className="section-bg-effects">
        {/* Sparkle Effects */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`portfolio-sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Corner Accents */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`corner-${i}`}
            className={`corner-accent corner-${i + 1}`}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our latest projects that showcase our expertise and innovation
        </p>
      </motion.div>

      <motion.div
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
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
                <GitBranch size={24} /> {/* ✅ replaced Github */}
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
        ))}
      </motion.div>

    </section>
  )
}

export default Portfolio