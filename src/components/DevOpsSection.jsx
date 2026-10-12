import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Cpu,
  GitBranch,
  Box,
  Server,
  Cloud,
  Terminal,
  Workflow,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react';
import './DevOpsSection.css';

export default function DevOpsSection() {
  const { devopsPipeline } = portfolioData;
  const [activeStage, setActiveStage] = useState(0);

  const getStageIcon = (id) => {
    switch (id) {
      case 'code': return <Code2 size={20} />;
      case 'vcs': return <GitBranch size={20} />;
      case 'build': return <Workflow size={20} />;
      case 'container': return <Box size={20} />;
      case 'cicd': return <Workflow size={20} />;
      case 'iac': return <Terminal size={20} />;
      case 'cloud': return <Cloud size={20} />;
      default: return <Server size={20} />;
    }
  };

  const activeStageData = devopsPipeline[activeStage];

  return (
    <section id="devops" className="section devops-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot" />
            <span>Infrastructure &amp; Delivery</span>
          </div>
          <h2 className="section-title">
            Exploring <span className="gradient-text">DevOps &amp; Cloud</span>
          </h2>
          <p className="section-subtitle">
            Automating deployments, provisioning Infrastructure as Code, and building containerized CI/CD delivery pipelines on AWS.
          </p>
        </div>

        {/* Interactive CI/CD Pipeline Visualizer */}
        <div className="pipeline-visualizer-card">
          <div className="pipeline-card-header">
            <div className="pipeline-header-left">
              <span className="pipeline-tag">PIPELINE ARCHITECTURE</span>
              <h3 className="pipeline-main-title">End-to-End Continuous Delivery Workflow</h3>
            </div>
            <div className="pipeline-header-right">
              <span className="pipeline-status-badge">
                <span className="status-indicator-green" />
                Automated Workflow
              </span>
            </div>
          </div>

          {/* Stepper Bar */}
          <div className="pipeline-stepper">
            {devopsPipeline.map((step, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={step.id}
                  className={`pipeline-step-node ${isActive ? 'pipeline-step-active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  aria-label={`View stage ${step.phase}: ${step.tool}`}
                >
                  <div className="step-node-bubble">
                    {getStageIcon(step.id)}
                  </div>
                  <span className="step-node-phase">{step.phase}</span>
                  <span className="step-node-tool">{step.tool}</span>
                </button>
              );
            })}
          </div>

          {/* Detail Inspection Box for selected stage */}
          <div className="stage-detail-box">
            <div className="stage-detail-header">
              <div className="stage-icon-large">
                {getStageIcon(activeStageData.id)}
              </div>
              <div>
                <span className="stage-step-tag">STAGE 0{activeStage + 1} OF 0{devopsPipeline.length}</span>
                <h4 className="stage-detail-title">{activeStageData.phase} — {activeStageData.tool}</h4>
              </div>
            </div>
            <p className="stage-detail-desc">{activeStageData.desc}</p>
          </div>
        </div>

        {/* 3 Technical Capability Pillars */}
        <div className="devops-pillars-grid">
          {/* Pillar 1: Containerization */}
          <div className="tech-card devops-pillar-card">
            <div className="pillar-header-row">
              <div className="pillar-icon-box pillar-icon-box-blue">
                <Box size={22} />
              </div>
              <span className="pillar-badge">Docker &amp; Compose</span>
            </div>
            <h4 className="devops-pillar-title">Containerized Environments</h4>
            <p className="devops-pillar-text">
              Building modular multi-stage Dockerfiles for Spring Boot REST microservices and MySQL, enabling parity between development and production without environment drift.
            </p>
            <ul className="devops-feature-list">
              <li><CheckCircle2 size={15} /> Multi-stage JAR builds</li>
              <li><CheckCircle2 size={15} /> Docker Compose multi-service networks</li>
              <li><CheckCircle2 size={15} /> Lightweight Alpine container base images</li>
            </ul>
          </div>

          {/* Pillar 2: CI/CD Automation */}
          <div className="tech-card devops-pillar-card">
            <div className="pillar-header-row">
              <div className="pillar-icon-box pillar-icon-box-purple">
                <Workflow size={22} />
              </div>
              <span className="pillar-badge">Jenkins &amp; Actions</span>
            </div>
            <h4 className="devops-pillar-title">Continuous Integration &amp; Deployment</h4>
            <p className="devops-pillar-text">
              Authoring automated build and deployment pipelines that monitor Git repositories, validate builds with Maven, generate Docker images, and push updates straight to AWS EC2.
            </p>
            <ul className="devops-feature-list">
              <li><CheckCircle2 size={15} /> Webhook-triggered Jenkins builds</li>
              <li><CheckCircle2 size={15} /> Automated Maven test execution</li>
              <li><CheckCircle2 size={15} /> Zero-manual remote deployment scripts</li>
            </ul>
          </div>

          {/* Pillar 3: Infrastructure as Code */}
          <div className="tech-card devops-pillar-card">
            <div className="pillar-header-row">
              <div className="pillar-icon-box pillar-icon-box-cyan">
                <Cloud size={22} />
              </div>
              <span className="pillar-badge">AWS &amp; Terraform</span>
            </div>
            <h4 className="devops-pillar-title">Cloud Infrastructure as Code</h4>
            <p className="devops-pillar-text">
              Provisioning reproducible AWS cloud architecture declaratively with Terraform, establishing custom VPCs, subnets, route tables, security groups, and EC2 instances.
            </p>
            <ul className="devops-feature-list">
              <li><CheckCircle2 size={15} /> Custom VPC &amp; Subnet isolation</li>
              <li><CheckCircle2 size={15} /> Least-privilege Security Group firewalls</li>
              <li><CheckCircle2 size={15} /> Reusable Terraform modules &amp; variables</li>
            </ul>
          </div>
        </div>

        {/* Featured Pipeline Project Link */}
        <div className="devops-project-callout">
          <div className="callout-content">
            <h4 className="callout-title">Explore My Live CI/CD Project Repository</h4>
            <p className="callout-desc">
              Inspect the Jenkinsfile, Docker configuration, and AWS EC2 deployment setup in my open-source project.
            </p>
          </div>
          <a
            href="https://github.com/siddhihirpara24/Multi_Platform_CI-CD_Pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>View GitHub Repository</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
