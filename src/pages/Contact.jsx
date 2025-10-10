import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get in touch for project inquiries",
      value: "your.email@example.com",
      action: "mailto:your.email@example.com",
      color: "#3b82f6"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Discuss your project requirements",
      value: "Schedule a Call",
      action: "#",
      color: "#8b5cf6"
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      description: "Reserve a consultation slot",
      value: "Book Now",
      action: "#",
      color: "#ec4899"
    }
  ]

  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" }
  ]

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.section className="contact-header" variants={itemVariants}>
            <div className="header-content">
              <div className="header-icon">
                <Mail size={48} />
              </div>
              <h1 className="page-title">Get In Touch</h1>
              <p className="page-description">
                Ready to start your next Shopify project? I'd love to hear about your ideas 
                and discuss how we can bring them to life. Let's create something amazing together!
              </p>
            </div>
          </motion.section>

          <div className="contact-grid">
            {/* Contact Form */}
            <motion.section className="contact-form-section" variants={itemVariants}>
              <div className="form-container">
                <h2 className="form-title">Send a Message</h2>
                <p className="form-description">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
                
                {isSubmitted ? (
                  <motion.div 
                    className="success-message"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={48} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.section>

            {/* Contact Info */}
            <motion.section className="contact-info-section" variants={itemVariants}>
              <div className="info-container">
                <h2 className="info-title">Other Ways to Reach Me</h2>
                <p className="info-description">
                  Prefer a different way to get in touch? Here are some alternatives.
                </p>

                <div className="contact-methods">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.a
                        key={method.title}
                        href={method.action}
                        className="contact-method"
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
                          <div className="method-value">{method.value}</div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                <div className="social-section">
                  <h3 className="social-title">Follow Me</h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={24} />
                          <span>{social.label}</span>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                <div className="contact-details">
                  <div className="detail-item">
                    <MapPin size={20} />
                    <span>Available for remote work worldwide</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={20} />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="detail-item">
                    <MessageCircle size={20} />
                    <span>Free initial consultation</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
