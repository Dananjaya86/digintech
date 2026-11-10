import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, Globe2,
  Smartphone, Cloud, Gamepad2, Clapperboard, Box, Layers3, Sparkles,
  CheckCircle2, Phone, MapPin, Send, Zap, ShieldCheck, Workflow, Star, Eye, Target
} from 'lucide-react';
import './styles.css';

const services = [
  { icon: Code2, number: '01', title: 'Software Development', text: 'Purpose-built software that helps simplify operations, connect workflows and support the way your business works.' },
  { icon: Globe2, number: '02', title: 'Web Applications', text: 'Responsive web experiences and business platforms designed for clarity, performance and growth.' },
  { icon: Smartphone, number: '03', title: 'Mobile Apps', text: 'Intuitive mobile app experiences that bring useful services closer to the people who use them.' },
  { icon: Cloud, number: '04', title: 'Cloud Solutions', text: 'Practical cloud-ready solutions to help teams access systems and information more flexibly.' },
  { icon: Gamepad2, number: '05', title: 'Game Development', text: 'Interactive game concepts and digital experiences shaped around your creative vision.' },
  { icon: Clapperboard, number: '06', title: 'Animation', text: 'Motion and visual storytelling for ideas that deserve to be seen in a more engaging way.' },
  { icon: Box, number: '07', title: '3D Design', text: 'Three-dimensional visuals and models for product concepts, scenes and digital content.' },
];

const process = [
  ['01', 'Discover', 'We start by understanding your goals, users and the problem you want to solve.'],
  ['02', 'Plan', 'We shape the scope, priorities and a practical direction for the project.'],
  ['03', 'Create', 'We design and build with attention to usability, quality and maintainability.'],
  ['04', 'Refine', 'We review the result with you and identify the next improvements.'],
];

function Logo({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="DIGINTECH home">
    <span className="brand-mark" aria-hidden="true">
      <img src="/digintech-rotating-rings-logo.gif" alt="" />
    </span>
    <span className="brand-copy">
      <span className="brand-name">DIGIN<span>TECH</span></span>
      <span className="brand-legal">TECHNOLOGIES (PVT) LTD</span>
      {!compact && <span className="brand-tagline">Innovating Your Digital Future</span>}
    </span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Services', '#services'], ['About', '#about'], ['Approach', '#approach'], ['Feedback', '#feedback'],  ['Contact', '#contact']];
  return <header className="site-header">
    <div className="container nav-wrap">
      <Logo compact />
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={16} /></a>
      </nav>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero section" id="home">
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> DIGITAL PRODUCTS. BUILT WITH PURPOSE.</div>
        <h1>Innovating Your<br /><span className="gradient-text">Digital Future.</span></h1>
        <p className="hero-lede">We turn ideas into thoughtful digital experiences — from business software and web applications to mobile apps, games and 3D design.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Let’s talk about your project <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#services">Explore our services <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-note"><span className="note-line" /> A technology partner for your next idea.</div>
      </div>
      <div className="hero-art hero-art-gif" aria-label="DIGINTECH animated rotating rings logo">
        <img
          className="hero-logo-gif"
          src="/digintech-rotating-rings-logo.gif"
          alt="DIGINTECH Technologies animated logo"
          fetchPriority="high"
        />
      </div>
    </div>
    <div className="hero-bottom container">
      <span>WHAT WE DO</span><div className="hero-bottom-line" />
      <span className="hero-bottom-services">Software <i /> Web <i /> Mobile <i /> Cloud <i /> Creative</span>
    </div>
  </section>;
}

const serviceProjects = {
  'Software Development': [
    { title: 'Milkee Foods Management Information System', type: 'Business software · React · Node.js · SQL Server', description: 'A business management system covering sales, stock, production, GRN, expenses, payments and reports.', tags: ['Inventory & stock', 'Sales management', 'Reports'] },
  ],
  'Web Applications': [
    { title: 'DIGINTECH Corporate Website', type: 'Company website · React · Responsive UI', description: 'The DIGINTECH company website with service showcases, enquiry-to-WhatsApp flow, feedback section and location map.', tags: ['Responsive design', 'Project enquiries', 'Service showcase'] },
    { title: 'Milkee Foods MIS — Web System', type: 'Web application · React', description: 'A browser-based operations interface built to manage day-to-day business activities in one place.', tags: ['Dashboard', 'Business workflows', 'Data management'] },
  ],
  'Mobile Apps': [
    { title: 'Milkee Foods MIS Mobile App', type: 'Mobile application · Flutter', description: 'A mobile companion for key MIS workflows, including dashboard figures, customers, stock and sales-related screens.', tags: ['Mobile dashboard', 'Customer access', 'Stock overview'] },
  ],
  'Cloud Solutions': [
    { title: 'Milkee Foods Azure Deployment', type: 'Cloud deployment · Azure SQL · Azure Web App', description: 'Cloud hosting and database deployment work to make the MIS backend and data available beyond a local development setup.', tags: ['Azure SQL', 'Web API hosting', 'Cloud database'] },
  ],
  'Game Development': [],
  'Animation': [],
  '3D Design': [],
};

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [columns, setColumns] = useState(() => window.innerWidth <= 420 ? 1 : window.innerWidth <= 760 ? 2 : 3);
  const showcaseRef = React.useRef(null);
  useEffect(() => {
    const updateColumns = () => setColumns(window.innerWidth <= 420 ? 1 : window.innerWidth <= 760 ? 2 : 3);
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  const selectedIndex = services.findIndex((service) => service.title === selectedService);
  const showcaseAfterIndex = selectedIndex < 0 ? -1 : Math.min(services.length - 1, Math.floor(selectedIndex / columns) * columns + columns - 1);
  const selectService = (title) => {
    setSelectedService((current) => current === title ? null : title);
    if (selectedService !== title) window.setTimeout(() => showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
  };

  return <section className="section services-section" id="services">
    <div className="container">
      <div className="section-heading">
        <div><div className="eyebrow">OUR CAPABILITIES</div><h2>Technology for what’s <span className="gradient-text">next.</span></h2></div>
        <p>From a focused first release to a more ambitious digital product, we help bring the right ideas into focus.</p>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, number, title, text }, index) => <React.Fragment key={title}>
          <article
            className={`service-card ${selectedService === title ? 'service-card-selected' : ''}`}
            role="button" tabIndex={0} aria-expanded={selectedService === title}
            onClick={() => selectService(title)}
            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectService(title); } }}>
            <div className="service-top"><span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span><span className="service-number">{number}</span></div>
            <h3>{title}</h3><p>{text}</p>
            <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            <span className="service-card-hint">{selectedService === title ? 'Hide projects' : 'View projects'} <ArrowDownRight size={13} /></span>
          </article>
          {selectedService && index === showcaseAfterIndex && <div className="service-showcase-row" key={`showcase-${selectedService}`}>
            <div className="service-showcase" ref={showcaseRef} aria-live="polite">
        <div className="showcase-heading">
          <div><div className="eyebrow">SELECTED WORK</div><h3>{selectedService}<span className="gradient-text"> projects.</span></h3></div>
          <button className="showcase-close" onClick={() => setSelectedService(null)} aria-label="Close project showcase"><X size={18} /></button>
        </div>
        {serviceProjects[selectedService]?.length ? <div className="showcase-grid">
          {serviceProjects[selectedService].map((project) => <article className="showcase-card" key={project.title}>
            <div className="showcase-project-icon"><Layers3 size={22} /></div>
            <span className="showcase-type">{project.type}</span>
            <h4>{project.title}</h4><p>{project.description}</p>
            <div className="showcase-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a href="#contact" className="showcase-link">Discuss a similar project <ArrowUpRight size={15} /></a>
          </article>)}
            </div> : <div className="showcase-empty"><Sparkles size={20} /><div><h4>New creative projects are on the way.</h4><p>We’re building this portfolio category. Contact us to discuss your idea or a project concept.</p><a href="#contact" className="showcase-link">Discuss a project <ArrowUpRight size={15} /></a></div></div>}
            </div>
          </div>}
        </React.Fragment>)}
      </div>
    </div>
  </section>;
}

function FeatureBand() {
  return <section className="feature-band founder-about" id="about">
    <div className="container founder-about-layout">
      <div className="founder-portrait-wrap">
        <div className="founder-photo-glow" />
        <img className="founder-portrait" src="/founder-dananjaya.png" alt="Dananjaya Dasanayake, Founder and Director of DIGINTECH Technologies (Pvt) Ltd" />
        <div className="founder-identity">
          <span className="founder-name">Dananjaya Dasanayake</span>
          <span>Founder &amp; Director</span>
          <small>DIGINTECH Technologies (Pvt) Ltd</small>
        </div>
      </div>
      <div className="founder-message-card">
        <div className="eyebrow">ABOUT DIGINTECH</div>
        <h2>Founder and Director <span className="gradient-text">Message</span></h2>
        <p>At DIGINTECH Technologies (Pvt) Ltd, our vision is to empower businesses through innovative, reliable, and affordable digital solutions. We believe that the right technology can transform ideas into real opportunities, and we are committed to helping our clients achieve their goals with high-quality software, web and mobile applications, and creative digital solutions.</p>
        <p>Our focus is always on understanding your unique needs and delivering tailored solutions that create real value for your business. With a dedicated team, modern technologies, and a strong commitment to customer satisfaction, we strive to be a long-term technology partner for your growth.</p>
        <p>Thank you for your trust and support. We look forward to working with you and building a smarter, more connected future together.</p>
        <div className="founder-signoff">Your Vision. Our Technology.</div>
        <div className="founder-message-footer">
          <div><strong>Dananjaya Dasanayake</strong><span>Founder &amp; Director</span><span>DIGINTECH Technologies (Pvt) Ltd</span></div>
          <span className="founder-script">Let’s Build Something Amazing Together!</span>
        </div>
      </div>
    </div>
    <div className="container vision-mission-grid">
      <article className="vision-mission-card">
        <div className="vision-mission-icon"><Eye size={25} /></div>
        <div className="eyebrow">OUR VISION</div>
        <h3>Empowering a Smarter Digital Future</h3>
        <p>To become a trusted technology partner for businesses locally and internationally, helping them grow through accessible, innovative, and dependable digital solutions.</p>
      </article>
      <article className="vision-mission-card">
        <div className="vision-mission-icon"><Target size={25} /></div>
        <div className="eyebrow">OUR MISSION</div>
        <h3>Turning Ideas into Real Results</h3>
        <p>To deliver high-quality software, web and mobile applications, cloud solutions, and creative digital services tailored to each client’s needs—with integrity, collaboration, and ongoing support.</p>
      </article>
    </div>
  </section>;
}

function Approach() {
  return <section className="section approach-section" id="approach">
    <div className="container">
      <div className="section-heading">
        <div><div className="eyebrow">HOW WE WORK</div><h2>From first thought to <span className="gradient-text">real progress.</span></h2></div>
        <p>A straightforward process keeps the work aligned, collaborative and focused on the outcome.</p>
      </div>
      <div className="process-grid">
        {process.map(([number, title, text]) => <div className="process-item" key={number}>
          <span className="process-number">{number}</span><div className="process-rule" /><h3>{title}</h3><p>{text}</p>
        </div>)}
      </div>
    </div>
  </section>;
}


function Feedback() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackList, setFeedbackList] = useState(() => {
    try {
      const saved = localStorage.getItem('digintech_feedbacks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [notice, setNotice] = useState('');
  const [page, setPage] = useState(0);
  const cardsPerPage = 5;
  const pageCount = Math.max(1, Math.ceil(feedbackList.length / cardsPerPage));
  const visibleFeedback = feedbackList.slice(page * cardsPerPage, (page + 1) * cardsPerPage);
  const ratedFeedback = feedbackList.filter((item) => Number(item.rating) > 0);
  const averageRating = ratedFeedback.length
    ? (ratedFeedback.reduce((sum, item) => sum + Number(item.rating), 0) / ratedFeedback.length).toFixed(1)
    : '—';

  useEffect(() => {
    try {
      localStorage.setItem('digintech_feedbacks', JSON.stringify(feedbackList));
    } catch (error) {
      console.warn('Could not save feedback in this browser.', error);
    }
  }, [feedbackList]);

  const submitFeedback = (event) => {
    event.preventDefault();
    if (!name.trim() || !comment.trim() || rating < 1) {
      setNotice('Please enter your name, select a star rating and write your comment.');
      return;
    }
    const newFeedback = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      comment: comment.trim(),
      rating,
      date: new Date().toISOString(),
    };
    setFeedbackList((current) => [newFeedback, ...current]);
    setPage(0);
    setName('');
    setComment('');
    setRating(0);
    setNotice('Thank you! Your feedback has been saved in this browser.');
  };

  const goToPage = (nextPage) => {
    setPage(Math.min(pageCount - 1, Math.max(0, nextPage)));
  };

  return <section className="section feedback-section" id="feedback">
    <div className="container">
      <div className="section-heading feedback-heading">
        <div><div className="eyebrow">YOUR VOICE MATTERS</div><h2>Share your <span className="gradient-text">feedback.</span></h2></div>
        <p>Have a question, suggestion or experience to share? Add your comment below.</p>
      </div>
      <form className="feedback-form" onSubmit={submitFeedback}>
        <label>Your name
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" maxLength={80} required />
        </label>
        <label>Your comment
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Write your feedback..." rows="3" maxLength={600} required />
        </label>
        <label className="feedback-rating-field">Your rating
          <div className="feedback-rating-picker" role="radiogroup" aria-label="Choose a star rating">
            {[1, 2, 3, 4, 5].map((value) => <button
              key={value}
              type="button"
              className={`feedback-star-button ${rating >= value ? 'is-selected' : ''}`}
              onClick={() => setRating(value)}
              role="radio"
              aria-checked={rating === value}
              aria-label={`${value} star${value === 1 ? '' : 's'}`}
            ><Star size={23} fill={rating >= value ? 'currentColor' : 'none'} /></button>)}
            <span className="feedback-rating-label">{rating ? `${rating} / 5` : 'Select stars'}</span>
          </div>
        </label>
        <button className="button button-primary" type="submit">Submit feedback <Send size={16} /></button>
        {notice && <p className="feedback-notice" role="status">{notice}</p>}
      </form>
      <div className="feedback-list-heading">
        <div className="feedback-title-group"><h3>Community feedback</h3><span className="feedback-count">{feedbackList.length}</span></div>
        <div className="feedback-summary" aria-label="Feedback summary">
          <span className="feedback-average"><Star size={14} fill="currentColor" /> <strong>{averageRating}</strong> / 5</span>
          <span>{ratedFeedback.length} {ratedFeedback.length === 1 ? 'rating' : 'ratings'}</span>
          <span>{feedbackList.length === 1 ? '1 message' : `${feedbackList.length} messages`}</span>
        </div>
      </div>
      {feedbackList.length === 0
        ? <div className="feedback-empty"><Sparkles size={19} /><span>Be the first to share feedback.</span></div>
        : <>
          <div className="feedback-list">
            {visibleFeedback.map((item) => <article className="feedback-card" key={item.id}>
              <div className="feedback-avatar" aria-hidden="true">{item.name.slice(0, 1).toUpperCase()}</div>
              <div className="feedback-content">
                <div className="feedback-card-top"><h4>{item.name}</h4><span className="feedback-quote-mark" aria-hidden="true">“</span></div>
                {Number(item.rating) > 0 && <div className="feedback-card-rating" aria-label={`${item.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((value) => <Star key={value} size={14} fill={Number(item.rating) >= value ? 'currentColor' : 'none'} className={Number(item.rating) >= value ? 'is-filled' : ''} />)}
                  <span>{item.rating}.0</span>
                </div>}
                <p>{item.comment}</p>
                {item.date && <time dateTime={item.date}>{new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</time>}
              </div>
            </article>)}
          </div>
          {feedbackList.length > cardsPerPage && <div className="feedback-pagination" aria-label="Feedback pages">
            <button className="feedback-page-arrow" type="button" onClick={() => goToPage(page - 1)} disabled={page === 0} aria-label="Previous feedback cards"><ArrowRight className="arrow-previous" size={17} /></button>
            <span>Page <strong>{page + 1}</strong> of <strong>{pageCount}</strong></span>
            <button className="feedback-page-arrow" type="button" onClick={() => goToPage(page + 1)} disabled={page >= pageCount - 1} aria-label="Next feedback cards"><ArrowRight size={17} /></button>
          </div>}
        </>}
      <p className="feedback-disclaimer">Feedback is saved in this browser and remains after refresh. It is not shared with other visitors or devices unless a backend/database is connected.</p>
    </div>
  </section>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Software Development', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sending, setSending] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Please enter your name, email, phone number and project description.');
      return;
    }
    setError('');
    setSuccess('');
    setSending(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/dahamdv@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Project Enquiry — DIGINTECH Technologies',
          _template: 'table',
          _captcha: 'true',
          Name: form.name.trim(),
          'Client Email': form.email.trim(),
          'Phone Number': form.phone.trim(),
          Service: form.service,
          'Project Overview': form.message.trim(),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'The enquiry could not be sent. Please try again.');
      }
      setSuccess('Thank you! Your project enquiry has been submitted. We will contact you soon.');
      setForm({ name: '', email: '', phone: '', service: 'Software Development', message: '' });
    } catch (err) {
      setError('Unable to send the enquiry right now. Please try again or contact us on WhatsApp: +94 77 860 8207.');
    } finally {
      setSending(false);
    }
  };
  return <section className="section contact-section" id="contact">
    <div className="container contact-layout">
      <div className="contact-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> HAVE AN IDEA?</div>
        <h2>Let’s make something <span className="gradient-text">meaningful.</span></h2>
        <p>Tell us what you’re planning. Share a little about your project and start a conversation with DIGINTECH.</p>
        <div className="contact-details">
          <a href="tel:+94778608207" className="contact-detail"><span className="detail-icon"><Phone size={18} /></span><span><small>CALL US</small><b>+94 77 860 8207</b></span><ArrowUpRight size={16} /></a>
          <div className="contact-detail"><span className="detail-icon"><MapPin size={18} /></span><span><small>LOCATION</small><b>Sri Lanka</b></span><a className="location-open" href="https://www.google.com/maps/search/?api=1&query=6.7883889%2C79.9742222" target="_blank" rel="noreferrer" aria-label="Open DIGINTECH location in Google Maps"><ArrowUpRight size={16} /></a></div>
          <a className="location-map" href="https://www.google.com/maps/search/?api=1&query=6.7883889%2C79.9742222" target="_blank" rel="noreferrer" aria-label="Open this location in Google Maps">
            <iframe title="DIGINTECH location map" src="https://maps.google.com/maps?q=6.7883889%2C79.9742222&z=14&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <span className="location-map-caption"><MapPin size={14} /> View on Google Maps <ArrowUpRight size={14} /></span>
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-head"><span>PROJECT ENQUIRY</span><span className="form-status"><i /> Ready to connect</span></div>
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="How should we address you?" autoComplete="name" required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" required /></label>
        <label>Phone number<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="Your contact number" autoComplete="tel" required /></label>
        <label>What do you need?
          <select name="service" value={form.service} onChange={update}>
            {services.map((service) => <option key={service.title}>{service.title}</option>)}
            <option>Other / Not sure yet</option>
          </select>
        </label>
        <label>Project overview<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little about your idea..." rows="4" required /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        {success && <p className="form-success" role="status">{success}</p>}
        <button type="submit" className="button button-primary form-submit" disabled={sending}>{sending ? 'Sending enquiry…' : 'Submit Project Enquiry'} <Send size={17} /></button>
        <p className="form-footnote">Your enquiry will be sent to our email inbox. Your details are used only to respond to your project request.</p>
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><Logo /><p className="footer-tagline">Innovating Your Digital Future.</p></div>
      <div className="footer-nav"><span>EXPLORE</span><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#feedback">Feedback</a><a href="#about">About us</a><a href="#contact">Contact</a></div>
      <div className="footer-nav"><span>GET IN TOUCH</span><a href="tel:+94778608207">+94 77 860 8207</a><span className="footer-location"><MapPin size={14} /> Sri Lanka</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} DIGINTECH Technologies (Pvt) Ltd.</span><span>Built around ideas. Driven by technology.</span><a href="#home">Back to top ↑</a></div>
  </footer>;
}


function useRevealAnimations() {
  React.useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const elements = document.querySelectorAll('.section-heading, .service-card, .feature-symbol, .feature-copy, .feature-points, .process-item, .feedback-card, .feedback-form, .contact-copy, .contact-form');
    elements.forEach((element) => element.classList.add('reveal-ready'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}


function DigiBuddy() {
  const [message, setMessage] = useState('Hi! Welcome to DIGINTECH. Let’s build your digital future!');
  const [mood, setMood] = useState('home');
  const [dismissed, setDismissed] = useState(false);

  React.useEffect(() => {
    const messages = {
      home: 'Hi! Welcome to DIGINTECH. Let’s build your digital future!',
      services: 'Looking for a digital solution? Let’s explore what we can create.',
      approach: 'Great ideas start with a clear plan. I’ll guide you along the way!',
      feedback: 'Your ideas matter! Share your feedback with our team.',
      about: 'We bring software and creativity together to shape digital experiences.',
      contact: 'Have a project in mind? Let’s talk about it!'
    };
    const sections = ['home', 'services', 'approach', 'feedback', 'about', 'contact'];
    const updateMessage = () => {
      let current = 'home';
      const marker = window.scrollY + window.innerHeight * 0.33;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setMood(current);
      setMessage(messages[current] || messages.home);
    };
    updateMessage();
    window.addEventListener('scroll', updateMessage, { passive: true });
    return () => window.removeEventListener('scroll', updateMessage);
  }, []);

  if (dismissed) return <button className="buddy-reopen" onClick={() => setDismissed(false)} aria-label="Open DIGINTECH assistant"><Sparkles size={20} /></button>;

  return <aside className={`digi-buddy buddy-${mood}`} aria-label="DIGINTECH animated guide">
    <div className="buddy-speech" role="status">{message}<span className="speech-tail" /></div>
    <button className="buddy-close" onClick={() => setDismissed(true)} aria-label="Hide assistant"><X size={13} /></button>
    <div className="buddy-character" aria-hidden="true">
      <div className="buddy-shadow" />
      <div className="buddy-antenna"><i /></div>
      <div className="buddy-head">
        <div className="buddy-ear ear-left" /><div className="buddy-ear ear-right" />
        <div className="buddy-face">
          <div className="buddy-eye eye-left"><i /></div><div className="buddy-eye eye-right"><i /></div>
          <div className="buddy-cheek cheek-left" /><div className="buddy-cheek cheek-right" />
          <div className="buddy-smile" />
        </div>
        <div className="buddy-head-highlight" />
      </div>
      <div className="buddy-body"><span className="buddy-emblem">D</span><i className="buddy-arm arm-left" /><i className="buddy-arm arm-right" /></div>
      <div className="buddy-foot foot-left" /><div className="buddy-foot foot-right" />
      <span className="buddy-spark spark-one">✦</span><span className="buddy-spark spark-two">✧</span>
    </div>
    <div className="buddy-caption">Digi Buddy <span>● ONLINE</span></div>
  </aside>;
}

function App() {
  useRevealAnimations();
  return <><Header /><main><Hero /><Services /><FeatureBand /><Approach /><Feedback /><Contact /></main><Footer /><DigiBuddy /><a className="floating-contact" href="https://wa.me/94778608207" target="_blank" rel="noreferrer" aria-label="Contact DIGINTECH on WhatsApp"><Send size={19} /></a></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);