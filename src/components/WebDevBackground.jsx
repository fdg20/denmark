import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './WebDevBackground.css'

const WebDevBackground = () => {
  const containerRef = useRef(null)
  const codeSnippetsRef = useRef([])

  const codeSnippets = [
    { code: 'const developer = {', color: '#3b82f6' },
    { code: '  skills: ["Shopify",', color: '#8b5cf6' },
    { code: '            "React",', color: '#ec4899' },
    { code: '            "JavaScript"]', color: '#10b981' },
    { code: '};', color: '#3b82f6' },
    { code: '<ShopifyStore>', color: '#6366f1' },
    { code: '  <Theme custom />', color: '#8b5cf6' },
    { code: '</ShopifyStore>', color: '#6366f1' },
    { code: 'function build() {', color: '#3b82f6' },
    { code: '  return success;', color: '#10b981' },
    { code: '}', color: '#3b82f6' }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const allElements = []

    // Create floating code snippets
    const snippets = []
    codeSnippets.forEach((snippet, index) => {
      const element = document.createElement('div')
      element.className = 'code-snippet-float'
      element.textContent = snippet.code
      element.style.color = snippet.color
      element.style.left = `${10 + Math.random() * 80}%`
      element.style.top = `${10 + Math.random() * 80}%`
      element.style.opacity = '0'
      element.style.fontSize = `${0.7 + Math.random() * 0.4}rem`
      containerRef.current.appendChild(element)
      snippets.push(element)
      allElements.push(element)
    })

    // Animate code snippets
    snippets.forEach((snippet, index) => {
      const duration = 15 + Math.random() * 10
      const delay = index * 0.5
      const targetOpacity = 0.3 + Math.random() * 0.2
      
      // Fade in first
      gsap.to(snippet, {
        opacity: targetOpacity,
        duration: 2,
        delay: delay
      })

      // Then animate movement
      gsap.to(snippet, {
        y: `+=${100 + Math.random() * 200}`,
        x: `+=${-50 + Math.random() * 100}`,
        rotation: -10 + Math.random() * 20,
        duration: duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: delay + 2
      })
    })

    // Create animated brackets and symbols
    const symbols = ['{', '}', '<', '>', '()', '[]', '/', '*']
    const symbolElements = []
    symbols.forEach((symbol, index) => {
      const element = document.createElement('div')
      element.className = 'code-symbol'
      element.textContent = symbol
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      element.style.opacity = '0'
      containerRef.current.appendChild(element)
      symbolElements.push(element)
      allElements.push(element)

      gsap.to(element, {
        opacity: 0.25 + Math.random() * 0.15,
        scale: 1 + Math.random() * 0.5,
        rotation: 360,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        ease: 'none',
        delay: index * 0.3
      })
    })

    // Create connection lines (like code dependencies)
    const lines = []
    for (let i = 0; i < 8; i++) {
      const line = document.createElement('div')
      line.className = 'code-connection'
      const x1 = Math.random() * 100
      const y1 = Math.random() * 100
      const x2 = x1 + (Math.random() * 20 - 10)
      const y2 = y1 + (Math.random() * 20 - 10)
      
      line.style.left = `${Math.min(x1, x2)}%`
      line.style.top = `${Math.min(y1, y2)}%`
      line.style.width = `${Math.abs(x2 - x1)}%`
      line.style.height = `${Math.abs(y2 - y1)}%`
      line.style.opacity = '0'
      containerRef.current.appendChild(line)
      lines.push(line)
      allElements.push(line)

      gsap.to(line, {
        opacity: 0.08 + Math.random() * 0.05,
        scale: 1 + Math.random() * 0.3,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        delay: i * 0.2
      })
    }

    return () => {
      allElements.forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="webdev-background">
      {/* Animated code grid pattern */}
      <div className="code-grid"></div>
    </div>
  )
}

export default WebDevBackground

