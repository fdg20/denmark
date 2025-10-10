import { motion } from 'framer-motion'
import { User, Calendar, MapPin, Award, Code2, Heart } from 'lucide-react'
import './About.css'

const About = () => {
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

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Shopify Developer",
      company: "Freelance",
      description: "Working with clients worldwide to create custom Shopify solutions, apps, and themes that drive business growth."
    },
    {
      year: "2021 - 2023",
      title: "Full-Stack Developer",
      company: "E-commerce Agency",
      description: "Developed and maintained multiple Shopify stores, focusing on performance optimization and conversion rate improvement."
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Started specializing in Shopify theme development and Liquid templating, building responsive e-commerce experiences."
    },
    {
      year: "2018 - 2019",
      title: "Web Developer",
      company: "Tech Startup",
      description: "Began my journey in web development, learning modern frameworks and e-commerce platforms."
    }
  ]

  const values = [
    {
      icon: Code2,
      title: "Quality Code",
      description: "Writing clean, maintainable, and scalable code that stands the test of time."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Every project is approached with the client's business goals and success in mind."
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Staying up-to-date with the latest technologies and best practices in e-commerce."
    }
  ]

  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.section className="about-hero" variants={itemVariants}>
            <div className="hero-content">
              <div className="hero-image">
                <div className="image-placeholder">
                  <div className="developer-avatar">
                    <span>👨‍💻</span>
                  </div>
                  <div className="floating-elements">
                    <div className="element element-1">💻</div>
                    <div className="element element-2">🛒</div>
                    <div className="element element-3">⚡</div>
                    <div className="element element-4">🎨</div>
                  </div>
                </div>
              </div>
              <div className="hero-text">
                <h1 className="page-title">About Me</h1>
                <p className="hero-description">
                  I'm a passionate Shopify developer with over 5 years of experience creating 
                  exceptional e-commerce experiences. My journey began with a curiosity for 
                  web development and has evolved into a specialization in the Shopify ecosystem.
                </p>
                <div className="hero-info">
                  <div className="info-item">
                    <Calendar size={20} />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="info-item">
                    <MapPin size={20} />
                    <span>Remote Worldwide</span>
                  </div>
                  <div className="info-item">
                    <Award size={20} />
                    <span>50+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Story Section */}
          <motion.section className="story-section" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">My Story</h2>
              <p className="section-description">
                From curiosity to expertise - how I became a Shopify development specialist
              </p>
            </div>
            <div className="story-content">
              <p>
                My journey into Shopify development started with a simple question: "How can I create 
                better online shopping experiences?" This curiosity led me down a path of continuous 
                learning and growth in the e-commerce space.
              </p>
              <p>
                Over the years, I've had the privilege of working with businesses of all sizes, from 
                startups launching their first online store to established brands looking to optimize 
                their existing Shopify presence. Each project has taught me something new and reinforced 
                my passion for creating solutions that drive real business results.
              </p>
              <p>
                Today, I specialize in custom Shopify theme development, app creation, and performance 
                optimization. I believe that great e-commerce experiences come from understanding both 
                the technical possibilities and the business goals behind every project.
              </p>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section className="timeline-section" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Professional Journey</h2>
              <p className="section-description">
                Key milestones in my development career
              </p>
            </div>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section className="values-section" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">What Drives Me</h2>
              <p className="section-description">
                The principles that guide my work and approach to development
              </p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    className="value-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="value-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default About
