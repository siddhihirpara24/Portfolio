import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Server,
  Cloud,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import './About.css';

export default function About() {
  const { personal, about, education } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">Scalable Backends</span> & Automation
          </h2>
          <p className="section-subtitle">
            Bridging software engineering principles in Java with cloud infrastructure and continuous delivery pipelines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Pillars */}
          <div className="about-narrative">
            <div className="tech-card about-card-narrative">
              <h3 className="about-card-title">Who I Am</h3>
              <div className="about-paragraphs">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-p">
                    {p}
                  </p>
                ))}
              </div>

              {/* Verified Contact metadata */}
              <div className="about-meta-row">
                <div className="meta-pill">
                  <MapPin size={15} className="meta-icon" />
                  <span>{personal.location}</span>
                </div>
                <div className="meta-pill">
                  <Mail size={15} className="meta-icon" />
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
                <div className="meta-pill">
                  <Phone size={15} className="meta-icon" />
                  <span>{personal.phone}</span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="about-pillars-grid">
              {about.highlights.map((h, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-check">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="pillar-title">{h.title}</h4>
                    <p className="pillar-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Snapshot & Architectural Approach */}
          <div className="about-side-column">
            {/* Education Highlight Card */}
            <div className="tech-card about-edu-snapshot">
              <div className="snapshot-badge">
                <GraduationCap size={16} />
                <span>Academic Record</span>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="edu-snapshot-block">
                  <div className="edu-snapshot-header">
                    <div>
                      <h4 className="edu-snapshot-degree">{edu.degree}</h4>
                      <p className="edu-snapshot-school">{edu.institution}</p>
                    </div>
                    <span className="edu-snapshot-period">{edu.period}</span>
                  </div>

                  <div className="edu-score-tags">
                    {edu.scores.map((score, sIdx) => (
                      <span key={sIdx} className="score-tag">
                        <strong>{score.label}:</strong> {score.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Principles Card */}
            <div className="tech-card about-principles-card">
              <h4 className="principles-title">
                <Terminal size={17} className="text-highlight" />
                <span>My Core Engineering Principles</span>
              </h4>
              <ul className="principles-list">
                <li>
                  <span className="principle-bullet">01</span>
                  <div>
                    <strong>Idempotence & IaC:</strong>
                    <p>Managing cloud infrastructure through version-controlled Terraform code instead of manual console actions.</p>
                  </div>
                </li>
                <li>
                  <span className="principle-bullet">02</span>
                  <div>
                    <strong>Predictable Deployments:</strong>
                    <p>Containerizing backend microservices with Docker to eliminate "works on my machine" inconsistencies.</p>
                  </div>
                </li>
                <li>
                  <span className="principle-bullet">03</span>
                  <div>
                    <strong>Clean Layered Architecture:</strong>
                    <p>Separating Controller, Service, and Repository layers in Spring Boot with strict input validation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
