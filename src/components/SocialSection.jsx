import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Code, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './SocialSection.css';

export default function SocialSection() {
  const { personal, social } = portfolioData;

  return (
    <section className="section social-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Developer Network</span>
          </div>
          <h2 className="section-title">
            Find Me <span className="gradient-text">Online</span>
          </h2>
          <p className="section-subtitle">
            Explore my source code repositories on GitHub and connect with me professionally on LinkedIn.
          </p>
        </div>

        {/* 2 Modern Connect Cards */}
        <div className="social-cards-grid">
          {/* GitHub Card */}
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-card social-profile-card"
          >
            <div className="soc-card-header">
              <div className="soc-icon-box soc-icon-github">
                <Github size={26} />
              </div>
              <span className="soc-arrow-badge">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <div className="soc-card-body">
              <span className="soc-domain">github.com/siddhihirpara24</span>
              <h3 className="soc-title">GitHub Profile</h3>
              <p className="soc-desc">
                Review open-source codebases, Jenkins pipelines, Docker configurations, Terraform manifests, and Spring Boot REST microservices.
              </p>
            </div>

            <div className="soc-card-footer">
              <div className="soc-pill">
                <Code size={13} />
                <span>Verified Public Repositories</span>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-card social-profile-card"
          >
            <div className="soc-card-header">
              <div className="soc-icon-box soc-icon-linkedin">
                <Linkedin size={26} />
              </div>
              <span className="soc-arrow-badge">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <div className="soc-card-body">
              <span className="soc-domain">linkedin.com/in/siddhi-hirpara</span>
              <h3 className="soc-title">LinkedIn Profile</h3>
              <p className="soc-desc">
                Connect for backend engineering roles, DevOps opportunities, technical collaborations, and industry networking.
              </p>
            </div>

            <div className="soc-card-footer">
              <div className="soc-pill">
                <Users size={13} />
                <span>Professional Network</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
