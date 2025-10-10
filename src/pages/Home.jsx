import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Denmark L. Dano
            </h1>
            <p className="hero-subtitle">
              Lead Shopify Developer & App Developer
            </p>
            <p className="hero-description">
              Building exceptional e-commerce experiences that drive sales and growth. 
              Supporting 1,000+ merchants with custom solutions and technical expertise.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🛒</div>
              <h3>Shopify Development</h3>
              <p>5 years experience with custom themes, apps, and store optimization</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>WordPress Development</h3>
              <p>4 years experience with custom themes and plugin development</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>App Development</h3>
              <p>Lead developer for Section Store app with 1,000+ active merchants</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Handling 1,000+ merchant requests and troubleshooting</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/skills" className="btn btn-primary">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
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
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I'm a seasoned web developer with 9 years of experience specializing in WordPress 
                and Shopify development. Currently serving as Lead Developer for Section Store 
                Shopify app, supporting 1,000+ merchants with custom solutions and technical support.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Stores Managed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">9+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1K+</span>
                  <span className="stat-label">Merchants Supported</span>
                </div>
              </div>
              <div className="text-center" style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2017 Denmark Dano. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home