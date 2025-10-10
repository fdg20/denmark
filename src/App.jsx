import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
