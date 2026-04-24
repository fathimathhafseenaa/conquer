import { motion } from 'framer-motion'
import { Send, MessageCircle, Code, Mail, Phone, MapPin, Camera } from 'lucide-react'
import logo from '../assets/logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Custom Software',
      'Cloud Solutions',
      'Mobile Apps',
      'Cybersecurity',
      'Data Analytics',
      'Web Development'
    ],
    company: [
      'About Us',
      'Careers',
      'Blog',
      'Press',
      'Partners',
      'Contact'
    ],
    resources: [
      'Documentation',
      'Help Center',
      'Case Studies',
      'White Papers',
      'API Reference',
      'Community'
    ]
  }

  const socialLinks = [
    { icon: Send, url: '#', label: 'LinkedIn' },
    { icon: MessageCircle, url: '#', label: 'Twitter' },
    { icon: Code, url: '#', label: 'GitHub' },
    { icon: Camera, url: '#', label: 'Instagram' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="footer-logo">
              <img src={logo} alt="Conquer Logo" className="footer-logo-image" />
            </h3>

            <p className="footer-description">
              Transforming businesses through innovative technology solutions.
            </p>

            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="footer-social-link"
                    whileHover={{ scale: 1.2, y: -3 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <div className="footer-links">
            <div>
              <h4>Services</h4>
              {footerLinks.services.map((link, i) => <p key={i}>{link}</p>)}
            </div>

            <div>
              <h4>Company</h4>
              {footerLinks.company.map((link, i) => <p key={i}>{link}</p>)}
            </div>

            <div>
              <h4>Resources</h4>
              {footerLinks.resources.map((link, i) => <p key={i}>{link}</p>)}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <div><Mail size={16} /> hello@conquer.com</div>
            <div><Phone size={16} />+971 054 343 3553</div>
            <div><MapPin size={16} /> Hor Al Anz - Deira - Dubai</div>
          </div>

          <p>© {currentYear} Conquer</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer