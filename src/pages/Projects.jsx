import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Luxfurni - Luxury Furniture Store",
      description: "Built Shopify store from scratch with custom sectioning, Amazon product integration, and custom pages for UGC and product comparison.",
      image: "/images/projects/luxfurni-screenshot.jpg",
      gif: "/images/projects/luxfurni-screenshot.jpg",
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
      image: "/images/projects/kendamil-screenshot.jpg",
      gif: "/images/projects/kendamil-screenshot.jpg",
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
      title: "Everlane - Fashion Retail",
      description: "High-end fashion e-commerce with custom checkout and advanced product filtering for sustainable fashion brand.",
      image: "/images/projects/everlane-screenshot.jpg",
      gif: "/images/projects/everlane-screenshot.jpg",
      tech: ["Shopify Plus", "Liquid", "JavaScript", "CSS3"],
      features: [
        "Custom checkout experience",
        "Advanced product filtering",
        "Mobile-first design",
        "Performance optimization",
        "SEO optimization"
      ],
      results: [
        "Enhanced user experience",
        "Improved conversion rates",
        "Mobile optimization",
        "Better product discovery"
      ],
      link: "https://www.everlane.com/",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Allbirds - Sustainable Footwear",
      description: "Sustainable footwear store with custom product pages, subscription model, and AR visualization features.",
      image: "/images/projects/allbirds-screenshot.jpg",
      gif: "/images/projects/allbirds-screenshot.jpg",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      features: [
        "Custom product pages",
        "Subscription model",
        "AR visualization",
        "Sustainability focus",
        "Mobile-first design"
      ],
      results: [
        "Enhanced user experience",
        "Improved product visualization",
        "Better conversion rates",
        "Mobile optimization"
      ],
      link: "https://www.allbirds.com/",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Ruggable - Home Decor",
      description: "Home decor store with AR visualization, custom product configurator, and room planner functionality.",
      image: "/images/projects/ruggable-screenshot.jpg",
      gif: "/images/projects/ruggable-screenshot.jpg",
      tech: ["Shopify", "AR Integration", "Liquid", "JavaScript"],
      features: [
        "AR visualization",
        "Product configurator",
        "Room planner",
        "Custom sections",
        "Mobile optimization"
      ],
      results: [
        "Enhanced product visualization",
        "Better customer experience",
        "Improved conversion rates",
        "Mobile-first design"
      ],
      link: "https://ruggable.com/",
      category: "E-commerce"
    },
    {
      id: 6,
      title: "Brilliant.org - Education Platform",
      description: "Educational platform with course management, subscription billing, and progress tracking for online learning.",
      image: "/images/projects/brilliant-screenshot.jpg",
      gif: "/images/projects/brilliant-screenshot.jpg",
      tech: ["Shopify", "Course Management", "Subscription", "Analytics"],
      features: [
        "Course management system",
        "Subscription billing",
        "Progress tracking",
        "User analytics",
        "Mobile optimization"
      ],
      results: [
        "Enhanced learning experience",
        "Better course management",
        "Improved user engagement",
        "Mobile-first design"
      ],
      link: "https://brilliant.org/",
      category: "E-commerce"
    }
  ]

  const categories = ["All", "E-commerce", "Management", "Performance", "Apps", "Enterprise", "CRO"]

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