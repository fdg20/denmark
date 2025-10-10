import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Luxfurni - Luxury Furniture Store",
      description: "Built Shopify store from scratch with custom sectioning, Amazon product integration, and custom pages for UGC and product comparison.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      features: [
        "Custom theme from scratch",
        "Amazon product integration",
        "UGC pages",
        "Compare pages",
        "Bundle pages",
        "SEO optimization"
      ],
      results: [
        "Complete store setup",
        "Custom functionality",
        "Product integration",
        "Performance optimized"
      ],
      link: "https://www.luxfurni.com/",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Kendamil - Baby Formula Store",
      description: "Managed 100+ Shopify stores with custom themes, performance optimization, and UX improvements for better user experience.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Custom themes", "Performance", "Analytics"],
      features: [
        "100+ stores managed",
        "Custom theme development",
        "Performance optimization",
        "UX improvements",
        "Store management"
      ],
      results: [
        "100+ stores optimized",
        "Improved user experience",
        "Better performance",
        "Enhanced conversions"
      ],
      link: "https://kendamil.com/",
      category: "Management"
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Comprehensive speed optimization for a high-traffic Shopify store, achieving 95+ PageSpeed score and significant SEO improvements.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Performance", "SEO", "Analytics"],
      features: [
        "Image optimization",
        "Code splitting",
        "Lazy loading",
        "CDN implementation",
        "Core Web Vitals optimization"
      ],
      results: [
        "95+ PageSpeed score",
        "70% faster load times",
        "40% improvement in SEO rankings",
        "25% increase in organic traffic"
      ],
      link: "#",
      category: "Performance"
    },
    {
      id: 4,
      title: "Custom Shopify App",
      description: "Built a custom Shopify app for inventory management with real-time sync, automated reordering, and advanced analytics.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify Apps", "Node.js", "React", "MongoDB"],
      features: [
        "Real-time inventory sync",
        "Automated reordering",
        "Advanced analytics dashboard",
        "Multi-location support",
        "API integrations"
      ],
      results: [
        "50% reduction in stockouts",
        "30% improvement in inventory accuracy",
        "20% increase in sales",
        "100+ active users"
      ],
      link: "#",
      category: "Apps"
    },
    {
      id: 5,
      title: "Multi-Store Management",
      description: "Developed a centralized management system for a client with 5+ Shopify stores, including unified analytics and inventory management.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify Plus", "Liquid", "JavaScript", "Analytics"],
      features: [
        "Unified dashboard",
        "Cross-store analytics",
        "Centralized inventory",
        "Automated reporting",
        "Multi-currency support"
      ],
      results: [
        "60% reduction in management time",
        "35% increase in cross-store sales",
        "Unified reporting system",
        "50% cost savings"
      ],
      link: "#",
      category: "Enterprise"
    },
    {
      id: 6,
      title: "Conversion Rate Optimization",
      description: "Implemented comprehensive CRO strategies including A/B testing, checkout optimization, and personalized product recommendations.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Analytics", "A/B Testing", "Personalization"],
      features: [
        "A/B testing framework",
        "Checkout optimization",
        "Personalized recommendations",
        "Exit-intent popups",
        "Customer journey mapping"
      ],
      results: [
        "45% increase in conversion rates",
        "25% reduction in cart abandonment",
        "30% increase in average order value",
        "20% improvement in customer retention"
      ],
      link: "#",
      category: "CRO"
    }
  ]

  const categories = ["All", "E-commerce", "Mobile", "Performance", "Apps", "Enterprise", "CRO"]

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Showcasing successful Shopify projects and e-commerce solutions
          </p>
        </div>

        {/* Project Categories */}
        <div className="project-filters">
          {categories.map(category => (
            <button 
              key={category}
              className="filter-btn"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-detailed">
          {projects.map(project => (
            <div key={project.id} className="project-card-detailed">
              <div className="project-image-detailed">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="project-placeholder-detailed" style={{ display: 'none' }}>
                  {project.category === 'E-commerce' && '🛍️'}
                  {project.category === 'Mobile' && '📱'}
                  {project.category === 'Performance' && '⚡'}
                  {project.category === 'Apps' && '🔧'}
                  {project.category === 'Enterprise' && '🏢'}
                  {project.category === 'CRO' && '📈'}
                </div>
                <div className="project-overlay">
                  <button 
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-content-detailed">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-detailed">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <div className="modal-category">{selectedProject.category}</div>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img 
                    src={selectedProject.gif || selectedProject.image} 
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="modal-placeholder" style={{ display: 'none' }}>
                    {selectedProject.category === 'E-commerce' && '🛍️'}
                    {selectedProject.category === 'Mobile' && '📱'}
                    {selectedProject.category === 'Performance' && '⚡'}
                    {selectedProject.category === 'Apps' && '🔧'}
                    {selectedProject.category === 'Enterprise' && '🏢'}
                    {selectedProject.category === 'CRO' && '📈'}
                  </div>
                </div>

                <div className="modal-details">
                  <div className="modal-section">
                    <h3>Key Features</h3>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Results Achieved</h3>
                    <ul>
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Technologies Used</h3>
                    <div className="modal-tech">
                      {selectedProject.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a href={selectedProject.link} className="btn btn-primary">
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects