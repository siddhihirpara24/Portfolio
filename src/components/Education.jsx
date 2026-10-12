import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Academic Background</span>
          </h2>
          <p className="section-subtitle">
            Formal university education establishing foundations in software systems, data structures, cloud architectures, and computer applications.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-timeline">
          {education.map((item, idx) => (
            <div key={idx} className="tech-card education-card">
              <div className="edu-card-top">
                <div className="edu-icon-container">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-status-pill">
                  <span>{item.status}</span>
                </div>
              </div>

              <div className="edu-main-info">
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>

                <div className="edu-meta-strip">
                  <span className="edu-meta-item">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className="edu-meta-item">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* CGPA / Grades Breakdown */}
              <div className="edu-grades-wrapper">
                <div className="grades-label">
                  <Award size={15} />
                  <span>Academic Standing</span>
                </div>
                <div className="grades-pill-row">
                  {item.scores.map((sc, scIdx) => (
                    <div key={scIdx} className="grade-badge">
                      <span className="grade-label">{sc.label}</span>
                      <span className="grade-value">{sc.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="edu-summary-text">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
