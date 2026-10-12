import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, ExternalLink, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import './ResumeSection.css';

export default function ResumeSection() {
  const { personal } = portfolioData;
  const resumeUrl = personal.resume || personal.primaryResume;
  const resumeTitle = `${personal.name} - Software Engineer Resume`;
  const resumeFileName = 'Siddhi_Hirpara_Resume.pdf';

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Hands-on full-stack web application engineering, secure RESTful APIs, Spring Boot microservices, and modern DevOps cloud automation.
          </p>
        </div>

        {/* Resume Hub Box */}
        <div className="tech-card resume-hub-card">
          <div className="resume-hub-header">
            <div className="resume-meta-badge">
              <FileText size={18} className="doc-icon" />
              <div className="resume-meta-info">
                <span className="resume-meta-title">Software Engineer Resume</span>
                <span className="resume-meta-sub">Latest Verified Version</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="resume-action-buttons">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Eye size={15} />
                <span>View Fullscreen PDF</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={resumeUrl}
                download={resumeFileName}
                className="btn btn-primary btn-sm"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Resume Snapshot & Interactive Document Preview */}
          <div className="resume-preview-container">
            <div className="resume-preview-header">
              <div className="doc-indicator">
                <FileText size={16} className="doc-icon" />
                <span className="doc-filename">{resumeFileName}</span>
              </div>
              <span className="doc-auth-tag">
                <CheckCircle2 size={13} />
                Verified Source Document
              </span>
            </div>

            <div className="resume-iframe-wrapper">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                title={resumeTitle}
                className="resume-pdf-frame"
              />
            </div>
          </div>

          {/* Quick Summary Strip */}
          <div className="resume-footer-highlights">
            <div className="highlight-column">
              <span className="hl-label">Degree &amp; University:</span>
              <p className="hl-text">MCA, Sardar Vallabhbhai Global University (9.14 CGPA)</p>
            </div>
            <div className="highlight-column">
              <span className="hl-label">Target Roles:</span>
              <p className="hl-text">Software Engineer • Java / Spring Boot • Cloud &amp; DevOps</p>
            </div>
            <div className="highlight-column">
              <span className="hl-label">Contact Verification:</span>
              <p className="hl-text">Ahmedabad, Gujarat • +91 8320190035</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
