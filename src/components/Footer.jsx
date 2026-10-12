import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Footer.css';

export default function Footer() {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'DevOps', href: '#devops' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Top Row: Brand & Back to Top */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo-badge">
              <span className="brand-tag">&lt;</span>
              <span className="brand-initials">SH</span>
              <span className="brand-tag">/&gt;</span>
            </div>
            <div>
              <h3 className="footer-brand-name">{personal.name}</h3>
              <p className="footer-brand-title">MCA Candidate • Java &amp; DevOps Specialist</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Middle Navigation Grid */}
        <div className="footer-nav-row">
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Credentials</span>
            <ul className="footer-links-list">
              {navLinks.slice(5).map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col footer-contact-col">
            <span className="footer-col-title">Get in Touch</span>
            <p className="footer-contact-item">
              <strong>Location:</strong> {personal.location}
            </p>
            <p className="footer-contact-item">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </p>
            <p className="footer-contact-item">
              <strong>Phone:</strong> {personal.phone}
            </p>

            <div className="footer-social-strip">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-soc-link"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-soc-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-soc-link"
                aria-label="Email Siddhi"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified status */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; 2026 <strong>{personal.name}</strong>. All rights reserved.
          </p>

          <div className="footer-status-pill">
            <span className="footer-status-dot" />
            <span>Built with React &amp; Vite • Zero Fake Metrics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
