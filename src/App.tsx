import './App.css';

const logoUrl = 'https://raw.githubusercontent.com/jumaabdulrazaq7-tech/vutalead.com/main/images/logo.png';

const services = [
  {
    title: 'Website Development',
    text: 'High-trust websites for businesses, schools, NGOs, and professional brands.',
    tag: 'Core offer',
    metric: '3-10+ pages',
  },
  {
    title: 'Website Maintenance',
    text: 'Security checks, content updates, uptime care, and technical support after launch.',
    tag: 'Ongoing care',
    metric: 'Monthly support',
  },
  {
    title: 'AI Automation',
    text: 'WhatsApp replies, lead capture, customer support flows, and appointment automation.',
    tag: 'Growth systems',
    metric: 'Save hours',
  },
  {
    title: 'Social Media Management',
    text: 'Content planning, captions, posting rhythm, and audience engagement for visibility.',
    tag: 'Coming soon',
    metric: 'Brand growth',
  },
];

const packages = [
  {
    name: 'Starter',
    price: 'TZS 340,000',
    support: 'TZS 150,000 / month',
    text: 'For personal brands and small businesses that need a credible digital presence.',
    features: ['3-5 pages', 'Mobile responsive', 'WhatsApp integration', 'Contact form', 'Basic SEO'],
  },
  {
    name: 'Business / School',
    price: 'TZS 460,000',
    support: 'TZS 200,000 / month',
    text: 'For organizations that need richer content, stronger trust, and room to grow.',
    features: ['6-10 pages', 'Custom sections', 'News or blog', 'Gallery', 'Advanced SEO', '3 months support'],
    featured: true,
  },
  {
    name: 'Premium / Corporate',
    price: 'TZS 790,000',
    support: 'TZS 260,000 / month',
    text: 'For established teams that need a polished website with custom functionality.',
    features: ['10+ pages', 'CMS-ready structure', 'Analytics setup', 'Custom features', 'Training included'],
  },
];

const workflow = [
  ['01', 'Discover', 'We map your goals, audience, offer, and strongest conversion path.'],
  ['02', 'Design', 'We craft a premium interface that feels modern, credible, and easy to scan.'],
  ['03', 'Build', 'We develop a responsive site with fast sections, strong CTAs, and clean structure.'],
  ['04', 'Support', 'We help you maintain, improve, and scale your digital foundation.'],
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoMark() {
  return <img className="vl-brand-mark" src={logoUrl} alt="Vutalead logo" style={{ objectFit: 'contain', background: '#fff', padding: 2 }} />;
}

function App() {
  return (
    <div className="vl-page">
      <header className="vl-nav">
        <a className="vl-brand" href="#top" aria-label="Vutalead home">
          <LogoMark />
          <span>Vutalead</span>
        </a>
        <nav className="vl-nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#workflow">How it works</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="vl-nav-cta" href="https://wa.me/255758277637">WhatsApp Us</a>
      </header>

      <main id="top">
        <section className="vl-hero">
          <div className="vl-hero-copy">
            <div className="vl-pill"><span /> Premium digital systems for Tanzania</div>
            <h1>Build a website that feels like your business is already leading.</h1>
            <p>
              Vutalead designs modern websites, maintenance systems, AI automation, and digital growth foundations for
              ambitious businesses, schools, NGOs, and organizations.
            </p>
            <div className="vl-actions">
              <a className="vl-btn vl-btn-primary" href="#packages">View Packages</a>
              <a className="vl-btn vl-btn-secondary" href="#services">Explore Services</a>
            </div>
            <div className="vl-proof-row" aria-label="Vutalead highlights">
              <div><strong>50+</strong><span>Projects delivered</span></div>
              <div><strong>30+</strong><span>Clients served</span></div>
              <div><strong>98%</strong><span>Satisfaction</span></div>
            </div>
          </div>

          <div className="vl-hero-stage" aria-label="Vutalead digital dashboard preview">
            <div className="vl-orbit vl-orbit-one" />
            <div className="vl-orbit vl-orbit-two" />
            <div className="vl-dashboard-card vl-main-dashboard">
              <div className="vl-window-bar">
                <span /><span /><span />
                <small>Growth Dashboard</small>
              </div>
              <div className="vl-dashboard-grid">
                <div className="vl-score-card">
                  <span>Website Leads</span>
                  <strong>284</strong>
                  <em>+42% this month</em>
                </div>
                <div className="vl-score-card vl-score-dark">
                  <span>Automation</span>
                  <strong>24/7</strong>
                  <em>Always active</em>
                </div>
                <div className="vl-chart-card">
                  <div className="vl-chart-head"><span>Traffic quality</span><strong>High</strong></div>
                  <div className="vl-bars">
                    {[48, 70, 56, 86, 74, 95, 82].map((height) => <i key={height} style={{ height: `${height}%` }} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="vl-floating-card vl-floating-top">
              <span className="vl-mini-icon">AI</span>
              <div><strong>WhatsApp reply sent</strong><small>New lead captured</small></div>
            </div>
            <div className="vl-floating-card vl-floating-bottom">
              <span className="vl-mini-icon">SEO</span>
              <div><strong>Credibility score</strong><small>Ready to convert</small></div>
            </div>
          </div>
        </section>

        <section className="vl-strip" aria-label="Trusted service categories">
          <span>Website Design</span>
          <span>Maintenance</span>
          <span>AI Automation</span>
          <span>Lead Capture</span>
          <span>Social Growth</span>
        </section>

        <section className="vl-section" id="services">
          <div className="vl-section-head">
            <span className="vl-kicker">Core services</span>
            <h2>A premium digital stack for businesses that want to be taken seriously.</h2>
            <p>Inspired by modern SaaS dashboard design: clear hierarchy, premium motion feel, and product-like trust.</p>
          </div>
          <div className="vl-service-grid">
            {services.map((service, index) => (
              <article className="vl-service-card" key={service.title}>
                <div className="vl-card-index">0{index + 1}</div>
                <div className="vl-service-tag">{service.tag}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="vl-service-metric">{service.metric}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="vl-section vl-workflow" id="workflow">
          <div className="vl-section-head vl-light-head">
            <span className="vl-kicker">How it works</span>
            <h2>From idea to launch with a clean, guided process.</h2>
          </div>
          <div className="vl-workflow-grid">
            {workflow.map(([number, title, text]) => (
              <article className="vl-workflow-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vl-section" id="packages">
          <div className="vl-section-head">
            <span className="vl-kicker">Packages</span>
            <h2>Simple pricing with a premium presentation.</h2>
            <p>Choose the package that matches your current stage, then scale with maintenance and automation.</p>
          </div>
          <div className="vl-package-grid">
            {packages.map((pack) => (
              <article className={`vl-package-card ${pack.featured ? 'vl-featured' : ''}`} key={pack.name}>
                {pack.featured && <div className="vl-best">Best value</div>}
                <h3>{pack.name}</h3>
                <p>{pack.text}</p>
                <div className="vl-price">{pack.price}</div>
                <div className="vl-support">Maintenance: {pack.support}</div>
                <ul>
                  {pack.features.map((feature) => (
                    <li key={feature}><CheckIcon />{feature}</li>
                  ))}
                </ul>
                <a className={pack.featured ? 'vl-btn vl-btn-primary' : 'vl-btn vl-btn-secondary'} href="#contact">
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="vl-section vl-proof">
          <div className="vl-proof-panel">
            <span className="vl-kicker">Why Vutalead</span>
            <h2>International taste, local market understanding.</h2>
            <p>
              We combine Dubai-level polish with practical Tanzanian business needs: clear pricing, clean communication,
              fast delivery, and support after launch.
            </p>
          </div>
          <div className="vl-proof-list">
            <div><strong>01</strong><span>Transparent service with no hidden surprises.</span></div>
            <div><strong>02</strong><span>Modern interfaces designed to convert visitors into leads.</span></div>
            <div><strong>03</strong><span>Ongoing care for updates, security, and improvements.</span></div>
          </div>
        </section>

        <section className="vl-contact" id="contact">
          <div>
            <span className="vl-kicker">Contact</span>
            <h2>Ready to upgrade your digital presence?</h2>
            <p>Tell us what you need. We will help you choose the right website, maintenance, or automation solution.</p>
            <div className="vl-contact-actions">
              <a className="vl-btn vl-btn-primary" href="https://wa.me/255758277637">Start on WhatsApp</a>
              <a className="vl-btn vl-btn-secondary" href="mailto:info@vutalead.com">Email Us</a>
            </div>
          </div>
          <form className="vl-contact-form">
            <input placeholder="Your name" aria-label="Your name" />
            <input placeholder="Email or phone" aria-label="Email or phone" />
            <select aria-label="Service needed" defaultValue="">
              <option value="" disabled>Service needed</option>
              <option>Website Development</option>
              <option>Website Maintenance</option>
              <option>AI Automation</option>
              <option>Social Media Management</option>
            </select>
            <textarea placeholder="Tell us about your project" aria-label="Project details" />
            <button className="vl-btn vl-btn-primary" type="button">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="vl-footer">
        <div className="vl-brand"><LogoMark /><span>Vutalead</span></div>
        <span>Digital Solutions for Growing Businesses.</span>
      </footer>
    </div>
  );
}

export default App;
