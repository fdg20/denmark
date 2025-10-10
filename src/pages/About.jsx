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
                I'm Denmark Dano, a passionate Shopify developer with over 3 years of experience 
                in creating exceptional e-commerce solutions. My journey began with a fascination 
                for how technology can transform businesses, and I've dedicated my career to 
                helping merchants succeed in the digital marketplace.
              </p>
              <p>
                What started as curiosity about online stores has evolved into a deep expertise 
                in Shopify development, performance optimization, and conversion rate optimization. 
                I believe that every business deserves a digital presence that not only looks 
                great but also drives real results.
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
                <h3>Senior Shopify Developer</h3>
                <span className="experience-period">2021 - Present</span>
              </div>
              <p className="experience-company">Freelance & Agency Work</p>
              <ul className="experience-achievements">
                <li>Led development of 50+ Shopify stores across various industries</li>
                <li>Specialized in custom theme development and performance optimization</li>
                <li>Maintained 100% client satisfaction rate with repeat business</li>
                <li>Mentored junior developers and conducted technical workshops</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>E-commerce Developer</h3>
                <span className="experience-period">2020 - 2021</span>
              </div>
              <p className="experience-company">Digital Marketing Agency</p>
              <ul className="experience-achievements">
                <li>Developed and maintained 15+ Shopify stores for clients</li>
                <li>Implemented conversion rate optimization strategies</li>
                <li>Collaborated with marketing teams on technical requirements</li>
                <li>Reduced average page load times by 40% across all projects</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Frontend Developer</h3>
                <span className="experience-period">2019 - 2020</span>
              </div>
              <p className="experience-company">Web Development Agency</p>
              <ul className="experience-achievements">
                <li>Built responsive websites using modern web technologies</li>
                <li>Learned e-commerce fundamentals and Shopify ecosystem</li>
                <li>Developed strong foundation in JavaScript and React</li>
                <li>Contributed to open-source projects and community</li>
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
                <h3>Bachelor's in Computer Science</h3>
                <p>University of Technology</p>
                <span className="education-year">2015 - 2019</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🏆</div>
              <div className="education-content">
                <h3>Shopify Partner Certification</h3>
                <p>Shopify Partner Program</p>
                <span className="education-year">2023</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">📈</div>
              <div className="education-content">
                <h3>Performance Optimization Specialist</h3>
                <p>Google Web Fundamentals</p>
                <span className="education-year">2023</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🎯</div>
              <div className="education-content">
                <h3>Conversion Rate Optimization</h3>
                <p>CRO Institute</p>
                <span className="education-year">2022</span>
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