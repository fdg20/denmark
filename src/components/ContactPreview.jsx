import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MessageCircle, Calendar, MapPin } from 'lucide-react'
import './ContactPreview.css'

const ContactPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get in touch for project inquiries",
      action: "your.email@example.com",
      color: "#3b82f6"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Discuss your project requirements",
      action: "Schedule a Call",
      color: "#8b5cf6"
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      description: "Reserve a consultation slot",
      action: "Book Now",
      color: "#ec4899"
    }
  ]

  return (
    <section className="contact-preview">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <div className="section-badge">
              <Mail size={16} />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">
              Ready to build something amazing together?
            </h2>
            <p className="section-description">
              I'm always excited to work on new Shopify projects. Whether you need a custom theme, 
              app development, or consultation, let's discuss how I can help grow your business.
            </p>
          </motion.div>

          <motion.div className="contact-methods" variants={containerVariants}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="method-icon"
                    style={{ backgroundColor: `${method.color}20`, color: method.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">{method.title}</h3>
                    <p className="method-description">{method.description}</p>
                    <div className="method-action">{method.action}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-item">
              <MapPin size={20} />
              <span>Available for remote work worldwide</span>
            </div>
            <div className="info-item">
              <Calendar size={20} />
              <span>Response time: Within 24 hours</span>
            </div>
            <div className="info-item">
              <MessageCircle size={20} />
              <span>Free initial consultation</span>
            </div>
          </motion.div>

          <motion.div className="contact-cta" variants={itemVariants}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPreview
