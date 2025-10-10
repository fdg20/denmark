import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Farm View Market",
      description: "Fresh produce marketplace with local farm integration, seasonal products, and community-focused e-commerce experience.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      features: [
        "Local farm integration",
        "Seasonal product management",
        "Community marketplace",
        "Fresh produce focus",
        "Mobile optimization"
      ],
      results: [
        "Enhanced local shopping",
        "Better product visibility",
        "Community engagement",
        "Mobile-first design"
      ],
      link: "https://www.farmviewmarket.com/",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "SW Hacker",
      description: "Tech-focused e-commerce platform with developer tools, software products, and technical solutions for professionals.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Custom themes", "Performance", "Analytics"],
      features: [
        "Developer-focused design",
        "Technical product showcase",
        "Performance optimization",
        "Professional UX",
        "Code integration"
      ],
      results: [
        "Enhanced developer experience",
        "Better product presentation",
        "Improved performance",
        "Professional appearance"
      ],
      link: "https://swhacker.com/",
      category: "Tech"
    },
    {
      id: 3,
      title: "Flavor & Fettle",
      description: "Culinary and wellness e-commerce with recipe integration, meal planning, and health-focused product curation.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify Plus", "Liquid", "JavaScript", "CSS3"],
      features: [
        "Recipe integration",
        "Meal planning tools",
        "Health-focused curation",
        "Culinary experience",
        "Wellness products"
      ],
      results: [
        "Enhanced culinary experience",
        "Better meal planning",
        "Health-focused shopping",
        "Recipe integration"
      ],
      link: "https://flavorandfettle.com/",
      category: "Food & Wellness"
    },
    {
      id: 4,
      title: "Rock House Farm",
      description: "Agricultural e-commerce platform with farm-fresh products, seasonal offerings, and sustainable farming focus.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
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
      category: "Home Decor"
    },
    {
      id: 5,
      title: "Allbirds - Sustainable Footwear",
      description: "Sustainable footwear store with custom product pages, subscription model, and AR visualization features.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
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
      category: "Fashion"
    },
    {
      id: 6,
      title: "Earth Beer Company",
      description: "Craft beer e-commerce with brewery integration, seasonal brews, and sustainable brewing practices showcase.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Brewery Integration", "Liquid", "JavaScript"],
      features: [
        "Craft beer showcase",
        "Brewery integration",
        "Seasonal brews",
        "Sustainable brewing",
        "Beer education"
      ],
      results: [
        "Enhanced beer experience",
        "Better brewery showcase",
        "Sustainable brewing focus",
        "Craft beer education"
      ],
      link: "https://www.earthbeercompany.com.au/",
      category: "Beverage"
    },
    {
      id: 7,
      title: "Brini Wines",
      description: "Premium wine e-commerce with vineyard integration, wine education, and sophisticated wine shopping experience.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Wine Integration", "Liquid", "JavaScript"],
      features: [
        "Premium wine showcase",
        "Vineyard integration",
        "Wine education",
        "Sophisticated shopping",
        "Wine pairing guides"
      ],
      results: [
        "Enhanced wine experience",
        "Better vineyard showcase",
        "Wine education focus",
        "Premium shopping experience"
      ],
      link: "https://briniwines.com.au/",
      category: "Wine & Spirits"
    },
    {
      id: 8,
      title: "Boss Outdoor",
      description: "Outdoor gear and adventure equipment with adventure focus, gear reviews, and outdoor lifestyle products.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Outdoor Integration", "Liquid", "JavaScript"],
      features: [
        "Outdoor gear showcase",
        "Adventure equipment",
        "Gear reviews",
        "Outdoor lifestyle",
        "Adventure focus"
      ],
      results: [
        "Enhanced outdoor experience",
        "Better gear presentation",
        "Adventure lifestyle",
        "Outdoor equipment focus"
      ],
      link: "https://www.bossoutdoor.com.au/",
      category: "Outdoor"
    },
    {
      id: 10,
      title: "Kendamil - Baby Formula",
      description: "Premium baby nutrition with 100+ stores managed, custom themes, and specialized baby product e-commerce.",
      image: "/api/placeholder/400/300",
      gif: "/api/placeholder/400/300",
      tech: ["Shopify", "Baby Products", "Liquid", "JavaScript"],
      features: [
        "100+ stores managed",
        "Baby nutrition focus",
        "Custom themes",
        "Specialized products",
        "Parent education"
      ],
      results: [
        "Enhanced baby nutrition",
        "Better parent experience",
        "Specialized products",
        "Nutrition education"
      ],
      link: "https://kendamil.com/",
      category: "Baby & Family"
    }
  ]

  const categories = ["All", "E-commerce", "Tech", "Food & Wellness", "Agriculture", "Technology", "Beverage", "Wine & Spirits", "Outdoor", "Baby & Family"]

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