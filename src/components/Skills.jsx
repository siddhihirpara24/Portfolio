import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Cloud,
  Cpu,
  Server,
  Database,
  Layout,
  Wrench,
  CheckCircle,
  Filter,
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'cloud':
        return <Cloud size={20} className="cat-icon cat-icon-cloud" />;
      case 'devops':
        return <Cpu size={20} className="cat-icon cat-icon-devops" />;
      case 'backend':
        return <Server size={20} className="cat-icon cat-icon-backend" />;
      case 'database':
        return <Database size={20} className="cat-icon cat-icon-db" />;
      case 'frontend':
        return <Layout size={20} className="cat-icon cat-icon-fe" />;
      case 'tools':
        return <Wrench size={20} className="cat-icon cat-icon-tools" />;
      default:
        return <Server size={20} className="cat-icon" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technologies &amp; <span className="gradient-text">Developer Stack</span>
          </h2>
          <p className="section-subtitle">
            Curated from my hands-on project work, academic coursework, and practical certifications. Strictly authentic tools and frameworks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-container">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'filter-btn-active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="tech-card skill-category-card">
              <div className="skill-cat-header">
                <div className="cat-icon-frame">{getCategoryIcon(cat.id)}</div>
                <div>
                  <h3 className="cat-title">{cat.name}</h3>
                  <p className="cat-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skill-items-grid">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-pill">
                    <span className="skill-pill-name">{item.name}</span>
                    <span className="skill-pill-type">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Authenticity Callout */}
        <div className="skills-authenticity-bar">
          <div className="auth-bar-left">
            <CheckCircle size={18} className="auth-icon" />
            <span>
              <strong>Verified Technical Competencies:</strong> Every technology listed above is actively demonstrated in my source repositories, coursework, and certifications.
            </span>
          </div>
          <a href="#devops" className="auth-bar-link">
            <span>Explore DevOps Pipeline</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
