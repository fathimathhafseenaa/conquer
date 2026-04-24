import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, Award } from 'lucide-react'

const About = () => {
  const features = [
    '10+ Years of Industry Experience',
    'Agile Development Methodology',
    '24/7 Dedicated Support',
    'Certified Professional Team',
    'Cutting-Edge Technology Stack',
    'Proven Track Record'
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and success.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse team of 50+ experts passionate about creating impactful digital solutions.'
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'To be the leading IT solutions provider, recognized for excellence and innovation globally.'
    }
  ]

  return (
    <section id="about" className="section about">
      {/* About Background Motion Graphics */}
      <div className="section-bg-effects">
        {/* Pulse Circles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`about-pulse-${i}`}
            className="pulse-circle"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
            animate={{
              scale: [0, 2],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Moving Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`about-line-${i}`}
            className="moving-line"
            style={{ top: `${i * 18}%` }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Conquer</h2>
        <p className="section-subtitle">
          We're a team of innovators, creators, and problem-solvers dedicated to transforming businesses through technology
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-story"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="about-heading">
            Why <span className="gradient-text">Conquer</span>?
          </h3>
          <p className="about-text">
            At Conquer, we don't just build software—we craft digital experiences that transform businesses. 
            With over a decade of experience, we've helped hundreds of companies achieve their digital goals 
            through innovative solutions and unwavering commitment to excellence.
          </p>
          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="about-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle size={20} color="#3b82f6" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-values"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="value-icon">
                  <Icon size={32} color="#3b82f6" />
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
