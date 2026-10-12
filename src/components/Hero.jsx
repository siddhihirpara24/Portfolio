import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowDown,
  FileText,
  Mail,
  Layers,
  Terminal,
  Server,
  Cloud,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Hero.css';

export default function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section id="home" className="hero-section">
      {/* Background glow effects */}
      <div className="glow-blob glow-blob-purple hero-blob-1" />
      <div className="glow-blob glow-blob-cyan hero-blob-2" />

      <div className="container hero-container">
        {/* Left / Main text column */}
        <div className="hero-content">
          {/* Status badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>{personal.statusBadge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{personal.name}</span>
          </h1>

          <h2 className="hero-headline">
            Building Backend Systems with <span className="text-highlight">Java, Spring Boot &amp; Python</span>, Powered by <span className="text-highlight-cyan">Cloud &amp; DevOps</span>.
          </h2>

          <p className="hero-description">
            Software Engineer postgraduate at <strong>Sardar Vallabhbhai Global University</strong> focused on engineering scalable RESTful microservices with <strong>Java, Spring Boot &amp; Python (FastAPI/Flask)</strong>, containerizing workloads with <strong>Docker</strong>, building automated CI/CD pipelines with <strong>Jenkins</strong>, and managing cloud infrastructure on <strong>AWS</strong> with <strong>Terraform</strong>.
          </p>

          {/* Core Tech Pill Bar */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">CORE FOCUS:</span>
            <div className="tech-strip-items">
              <span className="tech-strip-badge">Java</span>
              <span className="tech-strip-badge">Spring Boot</span>
              <span className="tech-strip-badge">Python</span>
              <span className="tech-strip-badge">FastAPI</span>
              <span className="tech-strip-badge">REST APIs</span>
              <span className="tech-strip-badge">Docker</span>
              <span className="tech-strip-badge">AWS</span>
              <span className="tech-strip-badge">Terraform</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn-main">
              <Layers size={18} />
              <span>View My Projects</span>
            </a>

            <a
              href={personal.primaryResume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-secondary"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={19} />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-secondary"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={19} />
            </a>

            <a
              href="#contact"
              className="btn btn-icon btn-secondary"
              aria-label="Contact Siddhi"
              title="Contact Me"
            >
              <Mail size={19} />
            </a>
          </div>

          {/* Verified Fast Facts (100% Real from Resume) */}
          <div className="hero-facts-row">
            <div className="hero-fact-card">
              <div className="fact-header">
                <Server size={16} className="fact-icon" />
                <span className="fact-title">Education</span>
              </div>
              <p className="fact-text">MCA Candidate (9.14 CGPA)</p>
              <span className="fact-subtext">SVGU Ahmedabad</span>
            </div>

            <div className="hero-fact-card">
              <div className="fact-header">
                <Cloud size={16} className="fact-icon fact-icon-cyan" />
                <span className="fact-title">Cloud & Automation</span>
              </div>
              <p className="fact-text">AWS & Terraform IaC</p>
              <span className="fact-subtext">VPC, EC2, S3, Docker, Jenkins</span>
            </div>

            <div className="hero-fact-card">
              <div className="fact-header">
                <Terminal size={16} className="fact-icon fact-icon-accent" />
                <span className="fact-title">Backend Architecture</span>
              </div>
              <p className="fact-text">Spring Boot & RESTful APIs</p>
              <span className="fact-subtext">PostgreSQL & MySQL Services</span>
            </div>
          </div>
        </div>

        {/* Right / Photo Column */}
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <div className="hero-image-border" />
            <div className="hero-image-container">
              <img
                src={personal.photo}
                alt="Siddhi Hirpara - MCA Student & Backend / DevOps Developer"
                className="hero-real-photo"
                loading="eager"
              />
            </div>



            {/* Floating status card */}
            <div className="hero-floating-card hero-floating-right">
              <div className="floating-card-dot" />
              <div className="floating-card-info">
                <span className="floating-card-title">Available for Hire</span>
                <span className="floating-card-sub">Backend & DevOps Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span>Explore Portfolio</span>
        <ArrowDown size={14} className="bounce-arrow" />
      </a>
    </section>
  );
}
