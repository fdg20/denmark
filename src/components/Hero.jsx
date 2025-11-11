import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import './Hero.css'

const Hero = () => {
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

  const scrollToNext = () => {
    const nextSection = document.querySelector('.about-preview')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text">Shopify Developer</span>
            <br />
            Building Amazing E-commerce Experiences
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I specialize in creating custom Shopify stores, apps, and themes that drive conversions and deliver exceptional user experiences. With expertise in Liquid, React, and modern web technologies.
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('.projects-preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink size={18} />
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('.contact-preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail size={18} />
              Get In Touch
            </motion.button>
          </motion.div>
          
          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="code-block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">shopify-theme.liquid</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">{'{% for'}</span> product in collections.featured.products <span className="code-keyword">{'%}'}</span>
              </div>
              <div className="code-line">
                <span className="code-indent">  </span>
                <span className="code-tag">&lt;div</span> <span className="code-attr">class=</span><span className="code-string">"product-card"</span><span className="code-tag">&gt;</span>
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-tag">&lt;img</span> <span className="code-attr">src=</span><span className="code-string">{"{{ product.featured_image }}"}</span><span className="code-tag">/&gt;</span>
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-tag">&lt;h3&gt;</span>{"{{ product.title }}"}<span className="code-tag">&lt;/h3&gt;</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">{'{% endfor %}'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        className="scroll-indicator"
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
