import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './AmbientBackground.css'

const AmbientBackground = () => {
  const containerRef = useRef(null)
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)
  const blob4Ref = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    // Animate blob 1 - slow drift
    gsap.to(blob1Ref.current, {
      x: '+=50',
      y: '+=30',
      rotation: 15,
      duration: 20,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Animate blob 2 - opposite direction
    gsap.to(blob2Ref.current, {
      x: '-=40',
      y: '+=50',
      rotation: -20,
      duration: 25,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Animate blob 3 - vertical movement
    gsap.to(blob3Ref.current, {
      x: '+=30',
      y: '-=40',
      rotation: 10,
      duration: 18,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Animate blob 4 - diagonal movement
    gsap.to(blob4Ref.current, {
      x: '-=60',
      y: '+=40',
      rotation: -15,
      duration: 22,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY
      const speed1 = scrollY * 0.1
      const speed2 = scrollY * 0.15
      const speed3 = scrollY * 0.08
      const speed4 = scrollY * 0.12

      gsap.to(blob1Ref.current, {
        y: speed1,
        duration: 0.5,
        ease: 'power2.out'
      })

      gsap.to(blob2Ref.current, {
        y: speed2,
        duration: 0.5,
        ease: 'power2.out'
      })

      gsap.to(blob3Ref.current, {
        y: speed3,
        duration: 0.5,
        ease: 'power2.out'
      })

      gsap.to(blob4Ref.current, {
        y: speed4,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="ambient-background">
      <svg className="ambient-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Gradient definitions for light mode */}
          <linearGradient id="gradient1-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.08)" />
          </linearGradient>
          
          <linearGradient id="gradient2-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.12)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.1)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.08)" />
          </linearGradient>
          
          <linearGradient id="gradient3-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.12)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.1)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
          </linearGradient>
          
          <linearGradient id="gradient4-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.12)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.1)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.08)" />
          </linearGradient>

          {/* Gradient definitions for dark mode */}
          <linearGradient id="gradient1-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.25)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
          </linearGradient>
          
          <linearGradient id="gradient2-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.22)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.15)" />
          </linearGradient>
          
          <linearGradient id="gradient3-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.22)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
          </linearGradient>
          
          <linearGradient id="gradient4-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.22)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.15)" />
          </linearGradient>

          {/* Blur filter for soft edges */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
        </defs>

        {/* Animated blob shapes */}
        <g ref={blob1Ref} className="blob blob-1">
          <path
            d="M200,300 Q250,200 350,250 T500,300 Q450,400 350,450 T200,400 Q150,350 200,300 Z"
            fill="url(#gradient1-light)"
            className="blob-path light-mode"
            filter="url(#blur)"
          />
          <path
            d="M200,300 Q250,200 350,250 T500,300 Q450,400 350,450 T200,400 Q150,350 200,300 Z"
            fill="url(#gradient1-dark)"
            className="blob-path dark-mode"
            filter="url(#blur)"
          />
        </g>

        <g ref={blob2Ref} className="blob blob-2">
          <path
            d="M800,200 Q900,150 1000,200 T1100,300 Q1000,400 900,350 T800,250 Q750,200 800,200 Z"
            fill="url(#gradient2-light)"
            className="blob-path light-mode"
            filter="url(#blur)"
          />
          <path
            d="M800,200 Q900,150 1000,200 T1100,300 Q1000,400 900,350 T800,250 Q750,200 800,200 Z"
            fill="url(#gradient2-dark)"
            className="blob-path dark-mode"
            filter="url(#blur)"
          />
        </g>

        <g ref={blob3Ref} className="blob blob-3">
          <path
            d="M100,600 Q150,550 250,600 T400,650 Q350,750 250,700 T100,650 Q50,600 100,600 Z"
            fill="url(#gradient3-light)"
            className="blob-path light-mode"
            filter="url(#blur)"
          />
          <path
            d="M100,600 Q150,550 250,600 T400,650 Q350,750 250,700 T100,650 Q50,600 100,600 Z"
            fill="url(#gradient3-dark)"
            className="blob-path dark-mode"
            filter="url(#blur)"
          />
        </g>

        <g ref={blob4Ref} className="blob blob-4">
          <path
            d="M700,500 Q800,450 900,500 T1000,600 Q900,700 800,650 T700,550 Q650,500 700,500 Z"
            fill="url(#gradient4-light)"
            className="blob-path light-mode"
            filter="url(#blur)"
          />
          <path
            d="M700,500 Q800,450 900,500 T1000,600 Q900,700 800,650 T700,550 Q650,500 700,500 Z"
            fill="url(#gradient4-dark)"
            className="blob-path dark-mode"
            filter="url(#blur)"
          />
        </g>
      </svg>
    </div>
  )
}

export default AmbientBackground

