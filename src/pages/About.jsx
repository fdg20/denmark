const About = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Passionate Shopify developer dedicated to creating exceptional e-commerce experiences
          </p>
        </div>

        {/* Personal Introduction */}
        <section className="about-section">
          <div className="about-content-detailed">
            <div className="about-text-detailed">
              <h2>My Story</h2>
              <p>
                I'm Denmark L. Dano, a seasoned web developer with 9 years of experience specializing 
                in WordPress and Shopify development. My journey spans 4 years with WordPress and 
                5 years with Shopify, complemented by a strong background as a Desktop and System 
                Support Engineer.
              </p>
              <p>
                Based in Negros Occidental, Philippines, I've dedicated my career to creating 
                exceptional digital solutions that drive business growth. My expertise includes 
                HTML, CSS, C++, JavaScript, JSON, and Liquid templating, with particular strength 
                in network, desktop, and system analysis.
              </p>
              <p>
                I'm fully committed to meeting project deadlines and can dedicate full-time efforts 
                when needed. My main strengths lie in providing virtual support and delivering 
                high-quality solutions that exceed client expectations.
              </p>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                <span className="profile-icon">👨‍💻</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="about-section">
          <h2 className="section-title">Professional Journey</h2>
          <div className="experience-detailed">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Frontend / Backend Web Developer</h3>
                <span className="experience-period">2016 - Present</span>
              </div>
              <p className="experience-company">OnlineJobs.ph (Freelance)</p>
              <ul className="experience-achievements">
                <li>Successfully developed and launched numerous websites for diverse clients</li>
                <li>Specialized in WordPress and Shopify custom theme development</li>
                <li>Developed custom software solutions using C++, JavaScript, and other languages</li>
                <li>Managed multiple freelance projects with tight deadlines</li>
                <li>Provided expert guidance and delivered high-quality solutions</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Senior WordPress Developer / Software Developer</h3>
                <span className="experience-period">June 2023 - Present</span>
              </div>
              <p className="experience-company">Stratedia</p>
              <ul className="experience-achievements">
                <li>Developed and maintained websites using WordPress with full project lifecycles</li>
                <li>Specialized in responsive, user-friendly websites with performance optimization</li>
                <li>Developed desktop applications using PHP and Laravel 9</li>
                <li>Engaged in troubleshooting, debugging, and code optimization</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Shopify Expert</h3>
                <span className="experience-period">January 2024 - May 2024</span>
              </div>
              <p className="experience-company">Kereni Ventures</p>
              <ul className="experience-achievements">
                <li>Managed Shopify stores of around 100+</li>
                <li>Optimized stores for better User Experience</li>
                <li>Created custom themes from scratch</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Shopify Developer</h3>
                <span className="experience-period">February 2023 - August 2023</span>
              </div>
              <p className="experience-company">Twlv20</p>
              <ul className="experience-achievements">
                <li>Handled website retainers for daily changes (Shopify, WordPress)</li>
                <li>Created duplicate landing pages for A/B testing</li>
                <li>Created forms for Clickbank Affiliate Program</li>
                <li>Created Metafields to manipulate PDP</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Shopify Expert</h3>
                <span className="experience-period">July 2022 - February 2023</span>
              </div>
              <p className="experience-company">Worthview Marketing</p>
              <ul className="experience-achievements">
                <li>Handled website retainers for daily changes (Shopify, Squarespace, WordPress)</li>
                <li>Created duplicate themes for events to be published and unpublished</li>
                <li>Integrated apps for Quick Order, Local Finder, and Inventory Management</li>
                <li>Manipulated shipping rates for specific radius</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Shopify Web Developer</h3>
                <span className="experience-period">September 2021 - July 2022</span>
              </div>
              <p className="experience-company">wearetraction.io</p>
              <ul className="experience-achievements">
                <li>Created custom themes and sectioning in Shopify</li>
                <li>Built websites from scratch (Front-End, Back-End functionality)</li>
                <li>Handled API integration and SEO optimization</li>
                <li>Migrated web pages (Click Funnels to WordPress and Shopify 1.0 to 2.0)</li>
                <li>Managed DevOps and CPanel troubleshooting</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>System Support Engineer</h3>
                <span className="experience-period">March 2016 - January 2020</span>
              </div>
              <p className="experience-company">Focus Inc Group of Companies</p>
              <ul className="experience-achievements">
                <li>Workstation and Network Administrator</li>
                <li>Server Management and Maintenance</li>
                <li>Firewall Maintenance and System Backup</li>
                <li>Hardware and Software Installations</li>
                <li>Network Troubleshooting and IT Equipment Maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="about-section">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-grid">
            <div className="education-item">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h3>Bachelor of Science Major in Information Technology</h3>
                <p>University of St. Lasalle</p>
                <span className="education-year">2012 - 2014</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h3>Bachelor of Science in Nursing</h3>
                <p>Riverside College</p>
                <span className="education-year">2003 - 2005</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🏆</div>
              <div className="education-content">
                <h3>9 Years Web Development Experience</h3>
                <p>WordPress & Shopify Specialist</p>
                <span className="education-year">2016 - Present</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">📈</div>
              <div className="education-content">
                <h3>System Support Engineer</h3>
                <p>4 Years BPO Experience</p>
                <span className="education-year">2016 - 2020</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🎯</div>
              <div className="education-content">
                <h3>Technical Skills</h3>
                <p>HTML, CSS, PHP, JavaScript, JSON, Liquid</p>
                <span className="education-year">Ongoing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="about-section">
          <h2 className="section-title">Core Competencies</h2>
          <div className="competencies">
            <div className="competency-category">
              <h3>Technical Skills</h3>
              <div className="competency-items">
                <span className="competency-item">Shopify Development</span>
                <span className="competency-item">Liquid Templating</span>
                <span className="competency-item">JavaScript (ES6+)</span>
                <span className="competency-item">React & Vue.js</span>
                <span className="competency-item">HTML5 & CSS3</span>
                <span className="competency-item">SCSS & Sass</span>
                <span className="competency-item">Node.js</span>
                <span className="competency-item">PHP</span>
              </div>
            </div>
            <div className="competency-category">
              <h3>E-commerce Expertise</h3>
              <div className="competency-items">
                <span className="competency-item">Shopify Plus</span>
                <span className="competency-item">Multi-store Management</span>
                <span className="competency-item">Payment Integration</span>
                <span className="competency-item">Inventory Management</span>
                <span className="competency-item">Order Processing</span>
                <span className="competency-item">Customer Experience</span>
                <span className="competency-item">Analytics & Tracking</span>
                <span className="competency-item">SEO Optimization</span>
              </div>
            </div>
            <div className="competency-category">
              <h3>Business Skills</h3>
              <div className="competency-items">
                <span className="competency-item">Project Management</span>
                <span className="competency-item">Client Communication</span>
                <span className="competency-item">Technical Consulting</span>
                <span className="competency-item">Problem Solving</span>
                <span className="competency-item">Team Collaboration</span>
                <span className="competency-item">Mentoring</span>
                <span className="competency-item">Documentation</span>
                <span className="competency-item">Quality Assurance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="about-section">
          <h2 className="section-title">Beyond Work</h2>
          <div className="personal-interests">
            <div className="interest-item">
              <div className="interest-icon">🚀</div>
              <h3>Continuous Learning</h3>
              <p>Always exploring new technologies and staying updated with the latest in e-commerce and web development.</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🌱</div>
              <h3>Community Involvement</h3>
              <p>Active in developer communities, contributing to open-source projects and helping fellow developers.</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">📚</div>
              <h3>Knowledge Sharing</h3>
              <p>Writing technical articles and conducting workshops to share knowledge with the developer community.</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🎯</div>
              <h3>Problem Solving</h3>
              <p>Passionate about finding innovative solutions to complex e-commerce challenges and business problems.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always excited to take on new challenges and help businesses grow through 
              exceptional e-commerce solutions. Whether you need a complete store redesign, 
              performance optimization, or custom functionality, I'm here to help.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About