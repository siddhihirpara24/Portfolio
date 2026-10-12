import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Contact.css';

export default function Contact() {
  const { personal, social } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Safe mailto fallback as required: opens client mail composer with pre-filled message
    const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Siddhi,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to software engineering, Java backend developer, and DevOps engineering opportunities. Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="contact-info-col">
            <div className="tech-card contact-details-card">
              <h3 className="contact-card-title">Contact Channels</h3>
              <p className="contact-card-intro">
                Direct, verified communication channels for recruiters, hiring managers, and developer collaborations.
              </p>

              {/* Email Block */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Email Address</span>
                  <a href={`mailto:${personal.email}`} className="contact-value">
                    {personal.email}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Phone &amp; WhatsApp</span>
                  <a href={`tel:${personal.phone}`} className="contact-value">
                    {personal.phone}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyPhone}
                  aria-label="Copy Phone Number"
                  title="Copy to clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Block */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{personal.location}</span>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="response-time-pill">
                <Clock size={15} />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Quick Social Direct Links */}
            <div className="contact-quick-socials">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-soc-btn"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-soc-btn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="tech-card contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">
              Fill out the form below to launch your default mail client with a structured email draft.
            </p>

            {submitted && (
              <div className="form-success-banner">
                <Check size={18} />
                <span>Email client opened! You can also email directly to {personal.email}.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Java Backend Role"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe the opportunity, technical challenge, or inquiry..."
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={16} />
                <span>Compose &amp; Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
