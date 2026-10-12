import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, ArrowRight, Code2, Server, Database, Box, Workflow, Cloud, Terminal } from 'lucide-react';
import './CareerJourney.css';

export default function CareerJourney() {
  const { careerJourney } = portfolioData;

  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <Code2 size={18} />;
      case 1: return <Server size={18} />;
      case 2: return <Database size={18} />;
      case 3: return <Box size={18} />;
      case 4: return <Workflow size={18} />;
      case 5: return <Cloud size={18} />;
      case 6: return <Terminal size={18} />;
      default: return <Compass size={18} />;
    }
  };

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Learning Roadmap &amp; Evolution</span>
          </div>
          <h2 className="section-title">
            Where I'm <span className="gradient-text">Heading</span>
          </h2>
          <p className="section-subtitle">
            My intentional progression from core object-oriented software engineering to enterprise backend architecture and automated cloud infrastructure.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="journey-timeline-wrapper">
          <div className="journey-track-line" />

          <div className="journey-cards-grid">
            {careerJourney.map((item, idx) => (
              <div key={item.step} className="journey-step-card">
                <div className="step-card-header">
                  <div className="step-icon-badge">
                    {getStepIcon(idx)}
                  </div>
                  <span className="step-number">STAGE {item.step}</span>
                </div>

                <div className="step-tech-tag">
                  <span>{item.tech}</span>
                </div>

                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.desc}</p>

                {idx < careerJourney.length - 1 && (
                  <div className="step-next-indicator">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Footer Banner */}
        <div className="journey-destination-banner">
          <div className="dest-icon-container">
            <Compass size={24} className="dest-icon" />
          </div>
          <div className="dest-content">
            <h4 className="dest-title">Current Objective: Production-Grade Software &amp; Cloud Engineering</h4>
            <p className="dest-desc">
              Committed to mastering resilient backend systems with Java and Spring Boot while building automated, zero-touch CI/CD deployment pipelines on AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
