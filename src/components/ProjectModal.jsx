import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Terminal,
  Server,
  Database,
  ShieldCheck,
  Maximize2,
} from 'lucide-react';
import { Github } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!project) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div className="modal-content project-modal-box" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="project-modal-header">
            <div className="project-modal-badge-row">
              <span className="badge badge-accent">{project.badge}</span>
              {project.featured && <span className="badge badge-cyan">Featured Architecture</span>}
            </div>
            <h2 id="project-modal-title" className="project-modal-title">{project.title}</h2>
            <p className="project-modal-tagline">{project.tagline}</p>

            {/* Links Bar */}
            <div className="project-modal-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  <Github size={16} />
                  <span>View Repository on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.secondaryGithub && (
                <a
                  href={project.secondaryGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-secondary"
                >
                  <Github size={16} />
                  <span>Portal Client Repo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Screenshot / Media Display */}
          {project.screenshot ? (
            <div className="project-modal-media-wrapper">
              <div
                className="project-modal-media-card"
                onClick={() => setLightboxImg(project.screenshot)}
                title="Click to view high-resolution image"
              >
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="project-modal-img"
                  loading="lazy"
                />
                <div className="media-expand-overlay">
                  <Maximize2 size={24} />
                  <span>Click to Enlarge</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="project-modal-tech-banner">
              <Terminal size={28} className="banner-icon" />
              <div>
                <h4 className="banner-title">
                  {project.modalBannerTitle || 'Technical Architecture & Source Code'}
                </h4>
                <p className="banner-desc">
                  {project.modalBannerDesc || 'Declarative configuration, source code, and deployment scripts available in the GitHub repository.'}
                </p>
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="project-modal-body">
            {/* Problem & Solution Grid */}
            <div className="modal-two-col">
              <div className="modal-info-block">
                <h4 className="block-title block-title-problem">The Challenge / Problem</h4>
                <p className="block-text">{project.problem}</p>
              </div>
              <div className="modal-info-block">
                <h4 className="block-title block-title-solution">The Solution</h4>
                <p className="block-text">{project.solution}</p>
              </div>
            </div>

            {/* My Verified Contribution */}
            <div className="modal-section-block">
              <h4 className="block-title">
                <CheckCircle2 size={18} className="text-highlight" />
                <span>My Verified Contributions</span>
              </h4>
              <ul className="modal-contributions-list">
                {project.contributions.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="item-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Details if present */}
            {project.architecture && (
              <div className="modal-section-block modal-arch-block">
                <h4 className="block-title">
                  <Layers size={18} className="text-highlight-cyan" />
                  <span>System Architecture Breakdown</span>
                </h4>
                <div className="arch-specs-grid">
                  {Object.entries(project.architecture).map(([key, val]) => (
                    <div key={key} className="arch-spec-item">
                      <span className="arch-spec-key">{key.toUpperCase()}</span>
                      <p className="arch-spec-val">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Stack Tags */}
            <div className="modal-section-block">
              <h4 className="block-title">
                <Database size={17} className="text-highlight" />
                <span>Technologies &amp; Tools Employed</span>
              </h4>
              <div className="modal-tech-pills">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for full-size screenshot preview */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)} aria-label="Close Lightbox">
            <X size={24} />
          </button>
          <img src={lightboxImg} alt="Enlarged Project Preview" className="lightbox-image" />
        </div>
      )}
    </>
  );
}
