import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, User } from 'lucide-react'
import './AboutPreview.css'

const AboutPreview = () => {
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

  return (
    <section className="about-preview">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <div className="section-badge">
              <User size={16} />
              <span>About Me</span>
            </div>
            <h2 className="section-title">
              Passionate about creating exceptional e-commerce experiences
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                With over 5 years of experience in Shopify development, I've helped numerous businesses 
                transform their online presence through custom themes, apps, and integrations. I believe 
                in creating solutions that not only look great but also drive real business results.
              </p>
              <p>
                My expertise spans across the entire Shopify ecosystem, from theme customization and 
                app development to performance optimization and conversion rate optimization. I'm 
                passionate about staying up-to-date with the latest e-commerce trends and technologies.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-placeholder">
                <div className="floating-elements">
                  <div className="element element-1">💻</div>
                  <div className="element element-2">🛒</div>
                  <div className="element element-3">⚡</div>
                  <div className="element element-4">🎨</div>
                </div>
                <div className="image-content">
                  <div className="developer-avatar">
                    <div className="avatar-circle">
                      <span>👨‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-cta" variants={itemVariants}>
            <Link to="/about" className="cta-button">
              <span>Learn More About Me</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
