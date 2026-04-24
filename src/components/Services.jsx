import { motion } from 'framer-motion'
import { Code, Cloud, Smartphone, Shield, Database, Globe } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and drive efficiency.',
      color: '#3b82f6'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
      color: '#8b5cf6'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: '#ec4899'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data, systems, and digital assets from threats.',
      color: '#10b981'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform raw data into actionable insights with our advanced analytics and AI solutions.',
      color: '#f59e0b'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that engage users and drive conversions.',
      color: '#06b6d4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="services" className="section services">
      {/* Services Background Motion Graphics */}
      <div className="section-bg-effects">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`service-dot-${i}`}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`service-ring-${i}`}
            className="expanding-ring"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [0, 1.5],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
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
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive IT solutions tailored to accelerate your digital transformation journey
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px ${service.color}20`
              }}
            >
              <motion.div
                className="service-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={40} color={service.color} />
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <motion.div
                className="service-link"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Services
