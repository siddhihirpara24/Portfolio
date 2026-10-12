# Siddhi Hirpara — Developer Portfolio Website

A modern, high-performance, dark-themed personal developer portfolio built for **Siddhi Hirpara** (MCA Student, Aspiring Java / Spring Boot Developer, and DevOps & Cloud Enthusiast).

---

## 🚀 Key Highlights & Architectural Features

- **Strict Source of Truth**: 100% authentic personal details, education marks (SVGU MCA Sem 1: 9.02, Sem 2: 9.14 CGPA; BCA: 7.79 CGPA), genuine certificates, real project screenshots, and verified GitHub/LinkedIn URLs. **Zero invented metrics, fake testimonials, or boilerplate claims.**
- **Distinctive Dark Tech Aesthetic**: Obsidian deep background (`#08090B`), subtle neon-indigo glow accents (`#8B7CFF`), sleek typography (*Plus Jakarta Sans* & *JetBrains Mono*), and glassmorphism.
- **Interactive Visual Pipelines**:
  - **Career Learning Roadmap**: Visual 7-stage evolution path from Java OOP to AWS Terraform IaC.
  - **DevOps Continuous Delivery Pipeline**: Interactive 7-phase stepper (Code -> Git -> Maven Build -> Docker -> Jenkins -> Terraform -> AWS EC2).
- **Comprehensive Project Case Studies**:
  - **Smart Internship Portal (InternHub)** with full-stack Spring Boot REST APIs, PostgreSQL persistence, and student/faculty modules.
  - **Multi-Platform CI/CD Pipeline** with Jenkins, Docker, and AWS EC2 hosting.
  - **Infrastructure Automation using Terraform** with custom VPC, multi-subnet networking, and security groups.
  - **DocuVault – Personal Document Organizer** (Python 3, Flask, FastAPI, SQLAlchemy ORM, MySQL) & **TaskFlow**.
  - Modal with challenge, solution, verified contributions, architecture breakdown, and full-resolution lightbox screenshot view.
- **Accredited Certifications Hub**: Interactive high-resolution certificate modal viewer for:
  - *The Linux Foundation – Developing Secure Software*
  - *AWS Cloud Practitioner Essential*
  - *Cybersecurity Analyst Job Simulation (TATA)*
  - *Launch an Auto-Scaling AWS EC2 VM (Coursera)*
  - *Spring Boot Course (Scaler)*
- **Dual Resume Hub**: Integrated PDF preview and direct download buttons for both **DevOps & Cloud Resume** and **Full Stack & Java Resume**.
- **SEO & Social Share Ready**: Complete Open Graph, Twitter cards, canonical tags, `sitemap.xml`, `robots.txt`, and Schema.org `Person` & `ProfilePage` JSON-LD structured data.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Modern Vanilla CSS architecture with custom CSS design tokens
- **Icons**: Lucide Icons + Custom SVG vectors for developer brands
- **Fonts**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)

---

## 📁 Project Directory Structure

```text
Portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   └── siddhi_hirpara.jpg        # Authentic profile portrait
│   │   ├── resume/
│   │   │   └── Siddhi_Hirpara_Resume.pdf     # Official Software Engineer Resume
│   │   ├── certificates/                 # Real certificate images
│   │   │   ├── AWS_Cloud_Practitioner_Essential.jpeg
│   │   │   ├── Cybersecurity_Analyst_Job_Simulation.jpeg
│   │   │   ├── Launch_an_auto-scaling_AWS_EC2_virtual_machine.jpeg
│   │   │   ├── Sprring_Boot.jpeg
│   │   │   └── The_Linux_Foundation.jpeg
│   │   └── projects/                     # Real project screenshots
│   │       ├── student_internhub.png
│   │       ├── hero_internhub.png
│   │       └── hero_cicd.png
│   ├── favicon.svg                       # Custom geometric SH badge
│   ├── robots.txt                        # Search engine crawler directives
│   └── sitemap.xml                       # SEO sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── CareerJourney.jsx / .css
│   │   ├── DevOpsSection.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── ProjectModal.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Certifications.jsx / .css
│   │   ├── CertificateModal.jsx / .css
│   │   ├── ResumeSection.jsx / .css
│   │   ├── SocialSection.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── Icons.jsx
│   ├── data/
│   │   └── portfolioData.js              # Central source of truth
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── dist/                                 # Production build output
├── package.json
└── vite.config.js
```

---

## 🏃 Running the Application

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` folder ready for deployment to Vercel, Netlify, or GitHub Pages.

### 3. Preview Production Bundle
```bash
npm run preview
```
