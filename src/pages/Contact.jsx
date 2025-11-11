import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'New Contact Form Submission')
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `)
      
      const mailtoLink = `mailto:kramdano@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="hero-background">
        <div className="gradient-mesh"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
        <div className="gradient-orb orb-5"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className="grid-overlay"></div>
      </div>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Ready to start your next Shopify project? Let's discuss how I can help your business grow.
          </p>
        </div>

        <div className="contact-content-detailed">
          {/* Contact Information */}
          <div className="contact-info-detailed">
            <h2>Let's Connect</h2>
            <p>
              I'm always excited to work on new projects and help businesses succeed 
              through exceptional e-commerce solutions. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-content">
                  <h3>Email</h3>
                  <p>kramdano@gmail.com</p>
                  <a href="mailto:kramdano@gmail.com" className="contact-link">
                    Send me an email
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📱</div>
                <div className="contact-method-content">
                  <h3>WhatsApp</h3>
                  <p>+639096161671</p>
                  <a href="tel:+639096161671" className="contact-link">
                    Call me directly
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-content">
                  <h3>Location</h3>
                  <p>Negros Occidental, Philippines</p>
                  <span className="contact-link">Available for remote work worldwide</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">🐙</div>
                <div className="contact-method-content">
                  <h3>GitHub</h3>
                  <p>View my code and projects</p>
                  <a href="https://github.com/fdg20" className="contact-link" target="_blank" rel="noopener noreferrer">
                    Check out my GitHub
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-content">
                  <h3>Location</h3>
                  <p>Available for remote work</p>
                  <span className="contact-link">Worldwide</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="response-time">
              <h3>Response Time</h3>
              <p>I typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-detailed">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="form-detailed">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  ✅ Your message has been prepared! Your email client should open with the message ready to send.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  ❌ There was an error preparing your message. Please try again.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Preparing Message...' : 'Send Message'}
              </button>
            </form>

            <div className="form-note">
              <p>
                <strong>Note:</strong> Clicking "Send Message" will open your email client 
                with a pre-filled message to kramdano@gmail.com. You can review and send 
                the email directly from there.
              </p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <section className="services-offered">
          <h2 className="section-title">Services I Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🛍️</div>
              <h3>Shopify Store Development</h3>
              <p>Complete store setup, custom themes, and optimization</p>
            </div>
            <div className="service-item">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Speed optimization, SEO, and Core Web Vitals improvement</p>
            </div>
            <div className="service-item">
              <div className="service-icon">📱</div>
              <h3>Mobile Optimization</h3>
              <p>Mobile-first design and responsive development</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>API integrations, custom apps, and functionality</p>
            </div>
            <div className="service-item">
              <div className="service-icon">📈</div>
              <h3>Conversion Optimization</h3>
              <p>CRO strategies, A/B testing, and analytics</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🛠️</div>
              <h3>Maintenance & Support</h3>
              <p>Ongoing support, updates, and technical maintenance</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your typical project timeline?</h3>
              <p>Most Shopify projects take 2-6 weeks depending on complexity. I provide detailed timelines during our initial consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with existing stores?</h3>
              <p>Yes! I work with both new stores and existing ones that need optimization, redesign, or new features.</p>
            </div>
            <div className="faq-item">
              <h3>What's included in your services?</h3>
              <p>Development, testing, deployment, documentation, and 30 days of post-launch support are included in all projects.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Absolutely! I offer maintenance packages and ongoing support to keep your store running smoothly.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact