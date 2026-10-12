import React from 'react';
import { X, ExternalLink, Award, CheckCircle2, Download } from 'lucide-react';
import './CertificateModal.css';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div className="modal-content cert-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close certificate preview">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-badge-row">
            <span className="badge badge-accent">
              <Award size={13} />
              {cert.issuer}
            </span>
            <span className="badge badge-cyan">{cert.category}</span>
          </div>
          <h3 id="cert-modal-title" className="cert-modal-title">{cert.title}</h3>
          <p className="cert-modal-desc">{cert.desc}</p>
        </div>

        {/* Certificate Image Canvas */}
        <div className="cert-image-frame">
          <img
            src={cert.file}
            alt={`${cert.title} official certificate issued by ${cert.issuer}`}
            className="cert-full-image"
            loading="eager"
          />
        </div>

        {/* Footer Actions */}
        <div className="cert-modal-footer">
          <a
            href={cert.file}
            download={`${cert.id}-certificate.jpeg`}
            className="btn btn-secondary btn-sm"
          >
            <Download size={15} />
            <span>Download High-Res Image</span>
          </a>

          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>View Verified Document Link</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
