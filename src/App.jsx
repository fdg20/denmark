import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import WebDevBackground from './components/WebDevBackground'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <div className="nav-background-wrapper">
        <WebDevBackground />
      </div>
      <Navigation />
      <div className="global-background">
        <div className="gradient-mesh"></div>
        <div className="grid-overlay"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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