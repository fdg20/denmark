import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Github, Code2, ShoppingCart, Zap } from 'lucide-react'
import './ProjectsPreview.css'

const ProjectsPreview = () => {
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

  const projects = [
    {
      title: "Luxury Fashion Store",
      description: "Custom Shopify theme for high-end fashion brand with advanced product filtering and AR try-on features.",
      image: "🛍️",
      technologies: ["Liquid", "React", "SCSS", "Shopify CLI"],
      category: "E-commerce",
      icon: ShoppingCart,
      color: "#ec4899"
    },
    {
      title: "Tech Gadgets Hub",
      description: "Performance-optimized Shopify store with custom checkout process and subscription management.",
      image: "⚡",
      technologies: ["Liquid", "JavaScript", "Shopify Apps", "Analytics"],
      category: "Technology",
      icon: Zap,
      color: "#3b82f6"
    },
    {
      title: "Custom App Development",
      description: "Shopify app for inventory management with real-time sync and automated reporting features.",
      image: "📱",
      technologies: ["React", "Node.js", "GraphQL", "Shopify API"],
      category: "App Development",
      icon: Code2,
      color: "#8b5cf6"
    }
  ]

  return (
    <section className="projects-preview">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <div className="section-badge">
              <Code2 size={16} />
              <span>Featured Projects</span>
            </div>
            <h2 className="section-title">
              Showcasing my best Shopify development work
            </h2>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-header">
                    <div 
                      className="project-icon"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="project-category">{project.category}</div>
                  </div>

                  <div className="project-image">
                    <div className="project-emoji">{project.image}</div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
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
              )
            })}
          </motion.div>

          <motion.div className="projects-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5x</div>
              <div className="stat-label">Avg. Conversion Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">A+</div>
              <div className="stat-label">Performance Score</div>
            </div>
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <Link to="/projects" className="cta-button">
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsPreview
