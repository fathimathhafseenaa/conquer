import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anushiya S',
      role: '3 reviews • 5 months ago',
      content: 'Conquer Computers LLC did an excellent job with their cloud solution service. They helped us migrate our data safely and set up everything so we can access our files anytime without issues. The team was professional, responsive, and explained things in a way that was easy to understand. Our workflow is much smoother now thanks to them. Definitely recommend their cloud solution services!',
      rating: 5,
      avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Mohamed Naser m',
      role: '2 reviews • 7 months ago',
      content: 'Conquer Computer LLC is an outstanding company to work with. Their service is fast, professional, and consistently reliable. They resolved my computer and IT needs smoothly and without any hassle. The team is friendly, knowledgeable, and always ready to support. I highly recommend them to anyone looking for honest, high-quality IT services.',
      rating: 5,
      avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Yshath Safha',
      role: '2 reviews • 7 months ago',
      content: 'Conquer Computers LLC is an excellent company to work with. We are highly satisfied with their services, as they consistently provide reliable solutions and outstanding support. Their team goes the extra mile to ensure customer satisfaction, and we truly appreciate their professionalism and commitment. They are reliable and highly recommended.',
      rating: 5,
      avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'Marius Marver',
      role: '1 review • 6 months ago',
      content: 'We\'ve been using Conquer Computers in Dubai for all our IT support and managed services. The team is professional, quick to respond, and always reliable. They recently helped us with network cabling and cybersecurity setup. Honestly, one of the most efficient IT companies in Dubai we\'ve worked with.',
      rating: 5,
      avatar: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="section testimonials">
      {/* Testimonials Background Motion Graphics */}
      <div className="section-bg-effects">
        {/* Quote Marks Floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`testimonial-quote-${i}`}
            className="floating-quote"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        
        {/* Star Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-particle-${i}`}
            className="star-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
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
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from the businesses we've helped transform
        </p>
      </motion.div>

      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <Quote className="testimonial-quote-icon" />
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: testimonial.avatar }}
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonials
