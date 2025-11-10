import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Code2, Palette, Zap } from 'lucide-react'
import ShopifyCartLogo from './ShopifyCartLogo'
import ShopifyToolsLogo from './ShopifyToolsLogo'
import './SkillsPreview.css'

const SkillsPreview = () => {
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

  const skills = [
    {
      category: "Shopify Development",
      icon: Code2,
      skills: ["Liquid Templates", "Shopify CLI", "Theme Development", "App Development"],
      color: "#3b82f6"
    },
    {
      category: "Frontend Technologies",
      icon: Palette,
      skills: ["React", "JavaScript", "TypeScript", "CSS/SCSS"],
      color: "#8b5cf6"
    },
    {
      category: "E-commerce",
      icon: ShopifyCartLogo,
      skills: ["Conversion Optimization", "Analytics", "SEO", "Performance"],
      color: "#ec4899"
    },
    {
      category: "Tools & Platforms",
      icon: ShopifyToolsLogo,
      skills: ["Git", "Figma", "Shopify Plus", "Webpack"],
      color: "#f59e0b"
    }
  ]

  return (
    <section className="skills-preview">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <div className="section-badge">
              <Briefcase size={16} />
              <span>Skills & Expertise</span>
            </div>
            <h2 className="section-title">
              Specialized in Shopify development and modern web technologies
            </h2>
          </motion.div>

          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="skill-title">{skill.category}</h3>
                  <div className="skill-list">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skillItem}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="skills-highlights" variants={itemVariants}>
            <div className="highlight-item">
              <div className="highlight-number">5+</div>
              <div className="highlight-text">Years of Shopify Experience</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <div className="highlight-text">Custom Themes Built</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">100%</div>
              <div className="highlight-text">Mobile Responsive</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">A+</div>
              <div className="highlight-text">Performance Scores</div>
            </div>
          </motion.div>

          <motion.div className="skills-cta" variants={itemVariants}>
            <Link to="/skills" className="cta-button">
              <span>View All Skills</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsPreview
