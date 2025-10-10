import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">Denmark Dano</span>
          </div>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Shopify Expert & Developer
            </h1>
            <p className="hero-subtitle">
              Building exceptional e-commerce experiences that drive sales and growth
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🛒</div>
              <h3>Shopify Development</h3>
              <p>Custom themes, apps, and store optimization</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Frontend Development</h3>
              <p>React, JavaScript, HTML/CSS, responsive design</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Speed optimization, SEO, and conversion rate optimization</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>API integrations, custom functionality, and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Previous Work</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🛍️</div>
              </div>
              <div className="project-content">
                <h3>E-commerce Store Redesign</h3>
                <p>Complete Shopify store redesign resulting in 40% increase in conversion rates</p>
                <div className="project-tech">
                  <span>Shopify</span>
                  <span>Liquid</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">📱</div>
              </div>
              <div className="project-content">
                <h3>Mobile-First Theme</h3>
                <p>Custom mobile-optimized theme with advanced filtering and search</p>
                <div className="project-tech">
                  <span>Shopify</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">⚡</div>
              </div>
              <div className="project-content">
                <h3>Performance Optimization</h3>
                <p>Store speed optimization achieving 95+ PageSpeed score</p>
                <div className="project-tech">
                  <span>Shopify</span>
                  <span>Performance</span>
                  <span>SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I'm a passionate Shopify developer with 3+ years of experience helping businesses 
                build and optimize their e-commerce presence. I specialize in creating custom 
                solutions that drive sales and improve user experience.
              </p>
              <p>
                My expertise includes custom theme development, app integrations, performance 
                optimization, and conversion rate optimization. I work closely with clients to 
                understand their business goals and deliver solutions that exceed expectations.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>denmark.dano@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/denmark-dano</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/denmark-dano</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Denmark Dano. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App