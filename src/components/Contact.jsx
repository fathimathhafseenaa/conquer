import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@conquer.com', 'support@conquer.com']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['054 343 3553']
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Hor Al Anz - Deira - Dubai']
    }
  ]

  return (
    <section id="contact" className="section contact">
      {/* Contact Background Motion Graphics */}
      <div className="section-bg-effects">
        {/* Message Bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`contact-bubble-${i}`}
            className="message-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Connection Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`contact-line-${i}`}
            className="connection-line"
            style={{
              left: `${i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
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
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your next project? Let's talk about how we can help transform your business
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-heading">Let's Build Something Amazing Together</h3>
          <p className="contact-text">
            Whether you have a specific project in mind or just want to explore possibilities, 
            we're here to help. Our team of experts is ready to discuss your needs and provide 
            tailored solutions.
          </p>
          <div className="contact-details">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  className="contact-detail"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="contact-icon">
                    <Icon size={24} color="#3b82f6" />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="contact-detail-text">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="btn-primary submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
            <Send size={18} style={{ marginLeft: '8px' }} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
