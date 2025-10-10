const Skills = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">
            Comprehensive technical skills and professional expertise in e-commerce development
          </p>
        </div>

        {/* Core Skills */}
        <section className="skills-section">
          <h2 className="section-title">Core Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card detailed">
              <div className="skill-icon">🛒</div>
              <h3>Shopify Development</h3>
              <p>5 years experience with 100+ stores managed</p>
              <ul className="skill-list">
                <li>Custom theme development from scratch</li>
                <li>Liquid templating & custom sectioning</li>
                <li>API integration & app development</li>
                <li>Store migration (1.0 to 2.0)</li>
                <li>Performance optimization</li>
              </ul>
              <div className="skill-level">
                <span>Expert</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card detailed">
              <div className="skill-icon">⚙️</div>
              <h3>Section Store App Development</h3>
              <p>Lead developer for Shopify app with 1,000+ active merchants</p>
              <ul className="skill-list">
                <li>Lead developer for Section Store Shopify app</li>
                <li>Support for 1,000+ active merchants</li>
                <li>Technical troubleshooting and issue resolution</li>
                <li>App feature development and maintenance</li>
                <li>Team leadership and project management</li>
              </ul>
              <div className="skill-level">
                <span>Expert</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card detailed">
              <div className="skill-icon">💻</div>
              <h3>WordPress Development</h3>
              <p>4 years experience with custom themes and plugins</p>
              <ul className="skill-list">
                <li>Custom theme development</li>
                <li>Plugin development & customization</li>
                <li>PHP & MySQL integration</li>
                <li>Responsive design</li>
                <li>Performance optimization</li>
              </ul>
              <div className="skill-level">
                <span>Expert</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card detailed">
              <div className="skill-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Speed and conversion optimization expertise</p>
              <ul className="skill-list">
                <li>Page speed optimization</li>
                <li>SEO best practices</li>
                <li>Conversion rate optimization</li>
                <li>Core Web Vitals</li>
                <li>Analytics & tracking</li>
              </ul>
              <div className="skill-level">
                <span>Expert</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card detailed">
              <div className="skill-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>API integrations and custom functionality</p>
              <ul className="skill-list">
                <li>Third-party API integrations</li>
                <li>Custom app development</li>
                <li>Database design</li>
                <li>Automation workflows</li>
                <li>Payment gateway integration</li>
              </ul>
              <div className="skill-level">
                <span>Advanced</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="skills-section">
          <h2 className="section-title">Additional Skills</h2>
          <div className="additional-skills">
            <div className="skill-category">
              <h3>Design & UX</h3>
              <div className="skill-tags">
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe Creative Suite</span>
                <span className="skill-tag">Wireframing</span>
                <span className="skill-tag">Prototyping</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend & Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Shopify CLI</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>E-commerce Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">Shopify Plus</span>
                <span className="skill-tag">WooCommerce</span>
                <span className="skill-tag">Magento</span>
                <span className="skill-tag">BigCommerce</span>
                <span className="skill-tag">Shopify Markets</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="skills-section">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="certifications">
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <div className="cert-content">
                <h3>Shopify Partner Certification</h3>
                <p>Certified Shopify Partner with proven track record</p>
                <span className="cert-date">2023</span>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">📈</div>
              <div className="cert-content">
                <h3>Performance Optimization Specialist</h3>
                <p>Expert in Core Web Vitals and page speed optimization</p>
                <span className="cert-date">2023</span>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎯</div>
              <div className="cert-content">
                <h3>Conversion Rate Optimization</h3>
                <p>Certified in CRO strategies and A/B testing</p>
                <span className="cert-date">2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="skills-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Shopify Developer</h3>
                <p className="timeline-company">Freelance & Agency Work</p>
                <p className="timeline-date">2021 - Present</p>
                <p>Leading complex Shopify projects for enterprise clients, specializing in custom theme development and performance optimization.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>E-commerce Developer</h3>
                <p className="timeline-company">Digital Agency</p>
                <p className="timeline-date">2020 - 2021</p>
                <p>Developed and maintained multiple Shopify stores, focusing on conversion optimization and user experience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="timeline-company">Web Development Agency</p>
                <p className="timeline-date">2019 - 2020</p>
                <p>Started career in web development, building responsive websites and learning e-commerce fundamentals.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills