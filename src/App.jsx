import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import VSCodePortfolio from './pages/VSCodePortfolio'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isPortfolioPage = location.pathname === '/portfolio'

  return (
    <>
      {!isPortfolioPage && <ScrollToTop />}
      {!isPortfolioPage && <Navigation />}
      {!isPortfolioPage && (
        <div className="global-background">
          <div className="gradient-mesh"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="gradient-orb orb-4"></div>
          <div className="gradient-orb orb-5"></div>
          <div className="particles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          <div className="grid-overlay"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<VSCodePortfolio />} />
      </Routes>
    </>
  )
}

function App() {
  // Dark mode always on
  const [darkMode] = useState(true)

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  }, [])

  return (
    <div className="app dark">
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App