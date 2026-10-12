import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Server,
} from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    if (filter === 'devops') return p.badge.includes('DevOps') || p.badge.includes('Cloud');
    if (filter === 'backend') return p.badge.includes('Backend') || p.badge.includes('Full Stack') || p.badge.includes('Spring Boot') || p.badge.includes('Python') || p.technologies.includes('Spring Boot') || p.technologies.includes('Python') || p.technologies.includes('Python 3') || p.technologies.includes('FastAPI');
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Real-World <span className="gradient-text">Projects &amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            Authentic software architectures, cloud deployment automation, and full-stack web applications developed with verified GitHub repositories.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="projects-filter-bar">
          <button
            className={`proj-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`proj-filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            <Sparkles size={14} />
            Featured Architectures
          </button>
          <button
            className={`proj-filter-btn ${filter === 'devops' ? 'active' : ''}`}
            onClick={() => setFilter('devops')}
          >
            <Cpu size={14} />
            DevOps &amp; Cloud
          </button>
          <button
            className={`proj-filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            <Server size={14} />
            Backend &amp; Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="tech-card project-card">
              {/* Media banner if screenshot exists, or clean code banner */}
              <div
                className="project-card-media"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                aria-label={`Open details for ${project.title}`}
              >
                {project.screenshot ? (
                  <div className="project-img-container">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className="project-card-img"
                      loading="lazy"
                    />
                    <div className="project-card-overlay">
                      <span className="overlay-inspect-btn">
                        <Layers size={16} />
                        View Full Case Study
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="project-code-banner">
                    <div className="code-banner-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="code-banner-content">
                      <Terminal size={22} className="code-banner-icon" />
                      <span className="code-banner-text">
                        {project.bannerText ||
                          (project.badge.includes('Cloud')
                            ? 'AWS VPC • Terraform Modules • EC2'
                            : 'Spring Boot • REST APIs • MySQL')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="project-card-category-badge">
                  <span>{project.badge}</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="project-card-body">
                <h3 className="project-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Key Highlights list */}
                <ul className="project-highlights-list">
                  {project.highlights.slice(0, 3).map((hl, hIdx) => (
                    <li key={hIdx}>
                      <span className="hl-bullet">&bull;</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="badge badge-accent">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="project-card-footer">
                  <button
                    className="btn btn-sm btn-secondary card-case-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Case Study</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="card-social-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-icon btn-sm btn-outline card-icon-btn"
                        aria-label={`GitHub repository for ${project.title}`}
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
