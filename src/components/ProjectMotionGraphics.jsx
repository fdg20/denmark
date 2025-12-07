import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectMotionGraphics.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProjectMotionGraphics = () => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const gridRef = useRef(null)
  const particlesRef = useRef(null)
  const neonLinesRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create animated grid pattern
    const gridLines = []
    const gridContainer = gridRef.current

    // Create horizontal grid lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', '0')
      line.setAttribute('y1', `${i * 5}%`)
      line.setAttribute('x2', '100%')
      line.setAttribute('y2', `${i * 5}%`)
      line.setAttribute('class', 'grid-line')
      gridContainer.appendChild(line)
      gridLines.push(line)
    }

    // Create vertical grid lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', `${i * 5}%`)
      line.setAttribute('y1', '0')
      line.setAttribute('x2', `${i * 5}%`)
      line.setAttribute('y2', '100%')
      line.setAttribute('class', 'grid-line')
      gridContainer.appendChild(line)
      gridLines.push(line)
    }

    // Create floating particles
    const particles = []
    const particlesContainer = particlesRef.current

    for (let i = 0; i < 30; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      const size = Math.random() * 3 + 1
      const x = Math.random() * 100
      const y = Math.random() * 100
      
      circle.setAttribute('cx', `${x}%`)
      circle.setAttribute('cy', `${y}%`)
      circle.setAttribute('r', size.toString())
      circle.setAttribute('class', 'particle')
      circle.setAttribute('opacity', (Math.random() * 0.5 + 0.3).toString())
      particlesContainer.appendChild(circle)
      particles.push(circle)
    }

    // Create neon connecting lines
    const neonLines = []
    const linesContainer = neonLinesRef.current

    for (let i = 0; i < 15; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      const x1 = Math.random() * 100
      const y1 = Math.random() * 100
      const x2 = x1 + (Math.random() * 20 - 10)
      const y2 = y1 + (Math.random() * 20 - 10)
      
      line.setAttribute('x1', `${x1}%`)
      line.setAttribute('y1', `${y1}%`)
      line.setAttribute('x2', `${x2}%`)
      line.setAttribute('y2', `${y2}%`)
      line.setAttribute('class', 'neon-line')
      line.setAttribute('opacity', (Math.random() * 0.3 + 0.1).toString())
      linesContainer.appendChild(line)
      neonLines.push(line)
    }

    // Animate particles with GSAP
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: 10 + Math.random() * 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.1
      })
    })

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress

        // Scale and fade grid based on scroll
        gsap.to(gridLines, {
          opacity: 0.1 + progress * 0.4,
          scale: 0.8 + progress * 0.4,
          duration: 0.1
        })

        // Animate neon lines
        gsap.to(neonLines, {
          opacity: 0.1 + progress * 0.5,
          scale: 0.9 + progress * 0.3,
          duration: 0.1
        })

        // Parallax effect on particles
        particles.forEach((particle, index) => {
          const speed = (index % 3 + 1) * 0.5
          gsap.to(particle, {
            y: `+=${progress * 100 * speed}`,
            duration: 0.1
          })
        })

        // Rotate entire SVG slightly
        gsap.to(svgRef.current, {
          rotation: progress * 5,
          scale: 1 + progress * 0.1,
          duration: 0.1
        })
      }
    })

    // Continuous subtle animations
    gsap.to(gridLines, {
      opacity: '+=0.1',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    gsap.to(neonLines, {
      strokeDashoffset: -100,
      duration: 3,
      repeat: -1,
      ease: 'none'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gridLines.forEach(line => line.remove())
      particles.forEach(particle => particle.remove())
      neonLines.forEach(line => line.remove())
    }
  }, [])

  return (
    <div ref={containerRef} className="project-motion-graphics">
      <svg
        ref={svgRef}
        className="motion-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Neon gradient for light mode */}
          <linearGradient id="neon-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
          </linearGradient>

          {/* Neon gradient for dark mode */}
          <linearGradient id="neon-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
          </linearGradient>

          {/* Particle gradient */}
          <radialGradient id="particle-gradient-light">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
          </radialGradient>

          <radialGradient id="particle-gradient-dark">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 1)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated dash pattern */}
          <pattern id="dashPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Grid pattern */}
        <g ref={gridRef} className="grid-container" />

        {/* Neon connecting lines */}
        <g ref={neonLinesRef} className="neon-lines-container" />

        {/* Floating particles */}
        <g ref={particlesRef} className="particles-container" />
      </svg>
    </div>
  )
}

export default ProjectMotionGraphics

