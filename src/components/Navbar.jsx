import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Navbar.css';

export default function Navbar() {
  const { personal, social } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'skills',
        'journey',
        'devops',
        'projects',
        'education',
        'certifications',
        'resume',
        'contact',
      ];

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'DevOps', href: '#devops' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" aria-label="Siddhi Hirpara - Home">
          <div className="brand-logo-badge">
            <span className="brand-tag">&lt;</span>
            <span className="brand-initials">SH</span>
            <span className="brand-tag">/&gt;</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{personal.name}</span>
            <span className="brand-role">Java • Python • DevOps</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          {/* GitHub link */}
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn link */}
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Direct Resume Download */}
          <a
            href={personal.primaryResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary nav-resume-btn"
            title="View Official Resume PDF"
          >
            <FileText size={15} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="btn-arrow" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <nav className="mobile-nav-content" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            <li>
              <a href="#home" onClick={handleLinkClick} className="mobile-nav-link">
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="mobile-nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <div className="mobile-social-row">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-social-btn"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-social-btn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href={personal.primaryResume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleLinkClick}
            >
              <FileText size={16} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
