import { motion } from 'framer-motion'
import { Code2, Palette, Briefcase, Zap, Star, CheckCircle } from 'lucide-react'
import './Skills.css'

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Shopify Development",
      icon: Code2,
      color: "#3b82f6",
      skills: [
        { name: "Liquid Templates", level: 95 },
        { name: "Shopify CLI", level: 90 },
        { name: "Theme Development", level: 95 },
        { name: "App Development", level: 85 },
        { name: "Shopify Plus", level: 90 },
        { name: "Storefront API", level: 88 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      color: "#8b5cf6",
      skills: [
        { name: "React", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 88 },
        { name: "CSS/SCSS", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      title: "E-commerce & Business",
      icon: Briefcase,
      color: "#ec4899",
      skills: [
        { name: "Conversion Optimization", level: 90 },
        { name: "Analytics & Tracking", level: 85 },
        { name: "SEO", level: 88 },
        { name: "Performance Optimization", level: 92 },
        { name: "UX/UI Design", level: 85 },
        { name: "A/B Testing", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Zap,
      color: "#f59e0b",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 82 },
        { name: "Docker", level: 75 }
      ]
    }
  ]

  const certifications = [
    {
      title: "Shopify Partner Academy",
      issuer: "Shopify",
      year: "2023",
      description: "Advanced Shopify development and app creation"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      description: "Professional React development and best practices"
    },
    {
      title: "E-commerce Optimization",
      issuer: "Google",
      year: "2022",
      description: "Conversion rate optimization and analytics"
    }
  ]

  const achievements = [
    "Built 50+ custom Shopify themes",
    "Increased average conversion rates by 2.5x",
    "Achieved A+ performance scores on all projects",
    "100% client satisfaction rate",
    "Expert-level Liquid templating skills",
    "Mobile-first responsive design approach"
  ]

  return (
    <div className="skills-page">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.section className="skills-header" variants={itemVariants}>
            <div className="header-content">
              <div className="header-icon">
                <Code2 size={48} />
              </div>
              <h1 className="page-title">Skills & Expertise</h1>
              <p className="page-description">
                A comprehensive overview of my technical skills, certifications, and achievements 
                in Shopify development and modern web technologies.
              </p>
            </div>
          </motion.section>

          {/* Skills Categories */}
          <motion.section className="skills-categories" variants={containerVariants}>
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-description">
                Proficient in a wide range of technologies and frameworks
              </p>
            </div>
            <div className="categories-grid">
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.title}
                    className="skill-category"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="category-header">
                      <div 
                        className="category-icon"
                        style={{ backgroundColor: `${category.color}20`, color: category.color }}
                      >
                        <Icon size={32} />
                      </div>
                      <h3 className="category-title">{category.title}</h3>
                    </div>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div
                              className="skill-progress"
                              style={{ 
                                backgroundColor: category.color,
                                width: `${skill.level}%`
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.1) + (skillIndex * 0.05) }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section className="certifications-section" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Certifications & Training</h2>
              <p className="section-description">
                Professional certifications and continuous learning
              </p>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-header">
                    <div className="cert-icon">
                      <Star size={24} />
                    </div>
                    <div className="cert-year">{cert.year}</div>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <p className="cert-description">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section className="achievements-section" variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Key Achievements</h2>
              <p className="section-description">
                Notable accomplishments and milestones in my career
              </p>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="achievement-icon">
                    <CheckCircle size={24} />
                  </div>
                  <span className="achievement-text">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
