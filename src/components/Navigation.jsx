import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navigation = ({ darkMode, setDarkMode }) => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.burger-menu')) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
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
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/skills" 
            className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="burger-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`burger-line ${isMenuOpen ? 'burger-line-1' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'burger-line-2' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'burger-line-3' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation