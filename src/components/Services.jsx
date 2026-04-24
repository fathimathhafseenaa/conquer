import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Cloud, Smartphone, Shield, Database, Globe } from 'lucide-react'
import '../assets/css/service.css';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet your unique business requirements and drive efficiency.',
    color: '#3b82f6',
    points: ['Scalable Solutions', 'Secure & Reliable', 'High Performance']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
    color: '#8b5cf6',
    points: ['Cloud Migration', 'Infrastructure', 'Cost Optimization']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    color: '#ec4899',
    points: ['iOS & Android', 'Cross Platform', 'User Focused']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your data, systems, and digital assets from threats.',
    color: '#10b981',
    points: ['Threat Detection', 'Data Protection', '24/7 Monitoring']
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description:
      'Transform raw data into actionable insights with our advanced analytics and AI solutions.',
    color: '#f59e0b',
    points: ['AI Insights', 'Smart Reports', 'Automation']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications that engage users and drive conversions.',
    color: '#06b6d4',
    points: ['Responsive UI', 'SEO Friendly', 'Fast Loading']
  }
]

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive IT solutions tailored to accelerate your digital
          transformation journey
        </p>
      </div>

      <div className="services-showcase-list">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const Icon = service.icon

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Strong 3D rotate like video
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [85, 0, -10])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-35, 0, 18])
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 6])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.05, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.1, 1, 1])

  return (
    <motion.div
      ref={ref}
      className="service-showcase-card"
      style={{ '--accent': service.color }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-120px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="service-text">
        <span className="service-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="service-icon-box">
          <Icon size={36} />
        </div>

        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>

      <motion.div
        className="laptop-area"
        style={{
          rotateX,
          rotateY,
          rotateZ,
          scale,
          opacity
        }}
      >
        <div className="laptop-mockup">
          <div className="laptop-screen">
            <div className="screen-camera" />

            <div className="screen-content">
              <div className="screen-left">
                <h4>{service.title}</h4>
                <p>
                  We build scalable, secure and high-performance solutions for
                  modern businesses.
                </p>

                <div className="screen-points">
                  {service.points.map((point) => (
                    <div className="screen-point" key={point}>
                      <span>✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-title">{service.title}</div>

                <div className="phone-card">
                  <strong>Dashboard</strong>
                  <span>+42%</span>
                </div>

                <div className="phone-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>

          <div className="laptop-base">
            <div className="trackpad" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services