import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ darkMode, setDarkMode }) => {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-container">
            <div className="logo-icon">
              <span className="logo-letter">D</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">Denmark L. Dano</span>
              <span className="logo-title">Shopify Expert</span>
            </div>
          </div>
        </Link>
        
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/skills" 
            className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navigation