import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import { Award, ExternalLink, ShieldCheck, Eye, CheckCircle2 } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Credentials &amp; Validations</span>
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Accredited certifications across cloud computing, secure software development, backend systems, and enterprise cybersecurity simulations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="tech-card cert-card"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(cert)}
              aria-label={`View certificate for ${cert.title}`}
            >
              {/* Thumbnail preview */}
              <div className="cert-thumbnail-container">
                <img
                  src={cert.file}
                  alt={`${cert.title} preview`}
                  className="cert-thumbnail"
                  loading="lazy"
                />
                <div className="cert-hover-overlay">
                  <span className="cert-inspect-badge">
                    <Eye size={15} />
                    Inspect Certificate
                  </span>
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="cert-card-content">
                <div className="cert-meta-row">
                  <span className="cert-issuer-badge">
                    <Award size={13} />
                    {cert.issuer}
                  </span>
                  <span className="badge badge-accent cert-cat-pill">{cert.category}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-desc">{cert.desc}</p>

                <div className="cert-card-actions">
                  <button
                    className="btn btn-sm btn-outline cert-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <Eye size={14} />
                    <span>View Certificate</span>
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-direct-link"
                      onClick={(e) => e.stopPropagation()}
                      title="Open source verification link"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
