import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, Zap, Code2, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'apps', label: 'Apps', icon: Code2 },
    { id: 'themes', label: 'Themes', icon: Zap }
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Fashion Store",
      description: "Custom Shopify theme for high-end fashion brand with advanced product filtering, AR try-on features, and seamless checkout experience.",
      image: "🛍️",
      category: "ecommerce",
      technologies: ["Liquid", "React", "SCSS", "Shopify CLI", "Figma"],
      features: ["AR Try-on", "Advanced Filtering", "Custom Checkout", "Mobile Optimized"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        conversion: "+180%",
        performance: "A+",
        mobile: "100%"
      }
    },
    {
      id: 2,
      title: "Tech Gadgets Hub",
      description: "Performance-optimized Shopify store with custom subscription management, real-time inventory sync, and advanced analytics dashboard.",
      image: "⚡",
      category: "ecommerce",
      technologies: ["Liquid", "JavaScript", "Shopify Apps", "Analytics", "GraphQL"],
      features: ["Subscription Management", "Real-time Sync", "Analytics Dashboard", "SEO Optimized"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        conversion: "+220%",
        performance: "A+",
        mobile: "100%"
      }
    },
    {
      id: 3,
      title: "Inventory Management App",
      description: "Custom Shopify app for automated inventory management with real-time sync, automated reporting, and multi-location support.",
      image: "📱",
      category: "apps",
      technologies: ["React", "Node.js", "GraphQL", "Shopify API", "PostgreSQL"],
      features: ["Real-time Sync", "Automated Reports", "Multi-location", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "500+",
        rating: "4.9/5",
        uptime: "99.9%"
      }
    },
    {
      id: 4,
      title: "Minimalist Theme",
      description: "Clean and modern Shopify theme focusing on performance, accessibility, and conversion optimization with customizable sections.",
      image: "🎨",
      category: "themes",
      technologies: ["Liquid", "CSS3", "JavaScript", "Webpack", "Babel"],
      features: ["Performance Optimized", "Accessibility", "Custom Sections", "SEO Ready"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        downloads: "2.5k+",
        rating: "4.8/5",
        performance: "A+"
      }
    },
    {
      id: 5,
      title: "Health & Wellness Store",
      description: "Specialized Shopify store for health products with subscription boxes, personalized recommendations, and wellness tracking features.",
      image: "💊",
      category: "ecommerce",
      technologies: ["Liquid", "React", "SCSS", "Shopify Plus", "Apps"],
      features: ["Subscription Boxes", "Personalized Recommendations", "Wellness Tracking", "Payment Plans"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        conversion: "+150%",
        performance: "A+",
        mobile: "100%"
      }
    },
    {
      id: 6,
      title: "Analytics Dashboard App",
      description: "Comprehensive analytics app for Shopify merchants with custom reports, data visualization, and actionable insights.",
      image: "📊",
      category: "apps",
      technologies: ["React", "D3.js", "Node.js", "Shopify API", "MongoDB"],
      features: ["Custom Reports", "Data Visualization", "Actionable Insights", "Real-time Data"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "1.2k+",
        rating: "4.7/5",
        uptime: "99.8%"
      }
    }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <div className="projects-page">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.section className="projects-header" variants={itemVariants}>
            <div className="header-content">
              <div className="header-icon">
                <Code2 size={48} />
              </div>
              <h1 className="page-title">My Projects</h1>
              <p className="page-description">
                A showcase of my best Shopify development work, including custom themes, 
                applications, and e-commerce solutions that drive real business results.
              </p>
            </div>
          </motion.section>

          {/* Filters */}
          <motion.section className="projects-filters" variants={itemVariants}>
            <div className="filters-container">
              {filters.map((filter) => {
                const Icon = filter.icon
                return (
                  <button
                    key={filter.id}
                    className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    <Icon size={18} />
                    <span>{filter.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.section>

          {/* Projects Grid */}
          <motion.section className="projects-grid-section" variants={containerVariants}>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-header">
                    <div className="project-image">
                      <div className="project-emoji">{project.image}</div>
                    </div>
                    <div className="project-category">{project.category}</div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-features">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="stat-item">
                        <div className="stat-value">{value}</div>
                        <div className="stat-label">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button className="project-btn primary">
                      <ExternalLink size={18} />
                      <span>View Project</span>
                    </button>
                    <button className="project-btn secondary">
                      <Github size={18} />
                      <span>Code</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section className="projects-stats" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Project Impact</h2>
              <p className="section-description">
                The measurable results of my development work
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <ShoppingCart size={32} />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Zap size={32} />
                </div>
                <div className="stat-number">2.5x</div>
                <div className="stat-label">Avg. Conversion Increase</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Code2 size={32} />
                </div>
                <div className="stat-number">A+</div>
                <div className="stat-label">Performance Score</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <ExternalLink size={32} />
                </div>
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
