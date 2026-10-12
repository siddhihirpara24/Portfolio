/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * Strictly based on Siddhi Hirpara's authentic resume, project documentation,
 * uploaded certificates, and verified GitHub & LinkedIn profiles.
 * NO FAKE METRICS, COMPANIES, OR INVENTED CREDENTIALS.
 */

export const portfolioData = {
  personal: {
    name: "Siddhi Hirpara",
    title: "Software Engineer",
    subtitle: "Full-Stack Web Applications & Cloud / DevOps",
    focus: "Java • Spring Boot • React.js • Python • Cloud & DevOps",
    statusBadge: "Software Engineer • Full-Stack & DevOps",
    headline: "Engineering Scalable Web Applications & Resilient Cloud Architectures",
    summary:
      "Computer Applications postgraduate with hands-on experience engineering full-stack web applications using Java, Spring Boot, React.js, Python, and relational databases (PostgreSQL/MySQL). Skilled in designing responsive user interfaces, secure RESTful APIs, backend microservices, and database-driven architectures. Familiar with AWS (EC2, S3, IAM), Docker, Git, CI/CD automation, containerization, and modern DevOps practices. Passionate about writing clean, maintainable code and delivering scalable software solutions.",
    location: "Ahmedabad, Gujarat, India",
    email: "siddhihirpara24@gmail.com",
    phone: "+91 8320190035",
    photo: "/assets/images/siddhi_hirpara.jpg",
    resume: "/assets/resume/Siddhi_Hirpara_Resume.pdf",
    primaryResume: "/assets/resume/Siddhi_Hirpara_Resume.pdf",
  },

  social: {
    github: "https://github.com/siddhihirpara24",
    linkedin: "https://www.linkedin.com/in/siddhi-hirpara",
    email: "mailto:siddhihirpara24@gmail.com",
  },

  about: {
    paragraphs: [
      "I am an MCA student at Sardar Vallabhbhai Global University, Ahmedabad, with a strong focus on Java backend engineering, Spring Boot microservices, and modern DevOps practices.",
      "My development journey combines robust object-oriented programming in Java with practical cloud automation. I build secure RESTful APIs, containerize applications with Docker, and construct automated CI/CD pipelines using Jenkins to streamline deployment to AWS EC2.",
      "In addition to backend application design, I explore Infrastructure as Code (IaC) using Terraform to provision consistent, reproducible cloud infrastructure. I thrive on solving architectural and automation challenges with clean, maintainable solutions.",
    ],
    highlights: [
      {
        title: "Backend Focus",
        desc: "Java, Spring Boot, REST APIs, and relational persistence with PostgreSQL & MySQL.",
      },
      {
        title: "DevOps & Cloud",
        desc: "Docker containerization, Jenkins automation, AWS cloud hosting, and Terraform IaC.",
      },
      {
        title: "Academic Excellence",
        desc: "MCA at SVGU (Sem 1: 9.02 CGPA, Sem 2: 9.14 CGPA) & BCA from SMT. K.S.N. Kansagra Mahila College (7.79 CGPA).",
      },
      {
        title: "Engineering Mindset",
        desc: "Focused on repeatable deployments, modular architectures, and secure coding practices.",
      },
    ],
  },

  skills: {
    categories: [
      {
        id: "cloud",
        name: "Cloud & Infrastructure",
        description: "Core cloud architecture, networking, compute, and scalability",
        items: [
          { name: "AWS EC2", type: "Compute" },
          { name: "AWS S3", type: "Storage" },
          { name: "AWS IAM", type: "Security" },
          { name: "AWS VPC", type: "Networking" },
          { name: "Security Groups", type: "Firewall" },
          { name: "AWS RDS", type: "Managed DB" },
          { name: "Application Load Balancer", type: "Traffic Routing" },
          { name: "Auto Scaling", type: "Resilience" },
        ],
      },
      {
        id: "devops",
        name: "DevOps & Automation",
        description: "Containerization, continuous integration, and infrastructure provisioning",
        items: [
          { name: "Docker", type: "Containers" },
          { name: "Docker Compose", type: "Multi-container" },
          { name: "Jenkins", type: "CI/CD Automation" },
          { name: "CI/CD Pipelines", type: "Release Automation" },
          { name: "Terraform", type: "Infrastructure as Code" },
          { name: "GitHub Actions", type: "Workflow Automation" },
          { name: "Linux (Ubuntu)", type: "Server OS" },
          { name: "Shell Scripting", type: "Automation" },
        ],
      },
      {
        id: "backend",
        name: "Backend & Programming",
        description: "Enterprise application development and object-oriented architectures",
        items: [
          { name: "Java", type: "Core Language" },
          { name: "Spring Boot", type: "Backend Framework" },
          { name: "Python 3", type: "Core Language" },
          { name: "FastAPI", type: "Python REST Framework" },
          { name: "Flask", type: "Python Web Framework" },
          { name: "REST APIs", type: "Web Services" },
          { name: "SQLAlchemy ORM", type: "Python ORM" },
          { name: "Nginx", type: "Web Server / Reverse Proxy" },
        ],
      },
      {
        id: "database",
        name: "Databases",
        description: "Relational data modeling, querying, and transactional integrity",
        items: [
          { name: "MySQL", type: "Relational Database" },
          { name: "PostgreSQL", type: "Relational Database" },
          { name: "SQLite", type: "Embedded Database" },
          { name: "CRUD Operations", type: "Data Management" },
          { name: "Database Connectivity", type: "JPA / JDBC / ORM" },
        ],
      },
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Responsive web client integration and component design",
        items: [
          { name: "React.js", type: "Frontend Library" },
          { name: "JavaScript (ES6+)", type: "Scripting" },
          { name: "HTML5", type: "Markup" },
          { name: "CSS3", type: "Styling" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Workflow",
        description: "Version control, API testing, build systems, and IDEs",
        items: [
          { name: "Git", type: "Version Control" },
          { name: "GitHub", type: "Repository Hosting" },
          { name: "Maven", type: "Build Automation" },
          { name: "Postman", type: "API Testing" },
          { name: "IntelliJ IDEA", type: "IDE" },
          { name: "VS Code", type: "Editor" },
        ],
      },
    ],
  },

  careerJourney: [
    {
      step: "01",
      title: "Core Programming & OOP",
      tech: "Java & Python",
      desc: "Deepening knowledge of Object-Oriented principles, collections, data structures, and algorithmic problem-solving.",
    },
    {
      step: "02",
      title: "Enterprise Backend Development",
      tech: "Spring Boot & REST APIs",
      desc: "Building modular RESTful web services, dependency injection, service-layer business logic, and request validation.",
    },
    {
      step: "03",
      title: "Relational Persistence",
      tech: "PostgreSQL & MySQL",
      desc: "Designing normalized schemas, relational entity mappings, CRUD operations, and transactional database connectivity.",
    },
    {
      step: "04",
      title: "Containerization",
      tech: "Docker & Docker Compose",
      desc: "Packaging microservices into isolated, lightweight, production-consistent containers with multi-stage builds.",
    },
    {
      step: "05",
      title: "CI/CD Automation",
      tech: "Jenkins & GitHub Actions",
      desc: "Configuring automated test runs, artifact compilation, image pushing, and zero-touch server deployments.",
    },
    {
      step: "06",
      title: "Cloud Infrastructure",
      tech: "AWS (EC2, S3, VPC, IAM, RDS)",
      desc: "Hosting backend applications in secure cloud networks with isolated subnets, security groups, and auto-scaling.",
    },
    {
      step: "07",
      title: "Infrastructure as Code",
      tech: "Terraform (IaC)",
      desc: "Defining declarative cloud topology, automated resource provisioning, modular templates, and state management.",
    },
  ],

  devopsPipeline: [
    {
      id: "code",
      phase: "Development",
      tool: "Java / Spring Boot",
      desc: "Develop feature code and REST endpoints adhering to clean OOP and test-driven principles.",
    },
    {
      id: "vcs",
      phase: "Version Control",
      tool: "Git & GitHub",
      desc: "Commit tracking, branch isolation, and pull requests triggering automated webhook events.",
    },
    {
      id: "build",
      phase: "Build & Verification",
      tool: "Maven",
      desc: "Automated dependency resolution, static compilation checks, and unit test execution.",
    },
    {
      id: "container",
      phase: "Containerization",
      tool: "Docker",
      desc: "Package application binaries into standard, portable container images.",
    },
    {
      id: "cicd",
      phase: "Continuous Delivery",
      tool: "Jenkins / Actions",
      desc: "Automate build, test, and container packaging triggers across stages.",
    },
    {
      id: "iac",
      phase: "Infrastructure as Code",
      tool: "Terraform",
      desc: "Declaratively provision AWS VPC, subnets, EC2 instances, and security group firewalls.",
    },
    {
      id: "cloud",
      phase: "Cloud Hosting",
      tool: "AWS EC2 & Linux",
      desc: "Live runtime on Ubuntu server with reverse proxying, monitoring, and reliable uptime.",
    },
  ],

  projects: [
    {
      id: "smart-internship-portal",
      title: "Smart Internship Portal (InternHub)",
      badge: "Full Stack & Backend",
      featured: true,
      tagline: "Role-based campus internship portal with automated application flows and live applicant tracking.",
      github: "https://github.com/siddhihirpara24/Internhub",
      secondaryGithub: "https://github.com/siddhihirpara24/Smart_Internship_portal",
      screenshot: "/assets/projects/student_internhub.png",
      heroScreenshot: "/assets/projects/hero_internhub.png",
      technologies: ["React.js", "Java", "Spring Boot", "REST APIs", "PostgreSQL", "Maven", "Git", "Postman"],
      problem:
        "Campus internship coordination typically suffers from decentralized communication, manual status updates, and lack of transparency for students applying to multiple companies.",
      solution:
        "Built a comprehensive full-stack web application that allows students to discover active internship opportunities, submit applications directly, and track their selection lifecycle in real time. Provides administrators and faculty with tools to review applications and update recruitment stages.",
      contributions: [
        "Implemented the core Student 'Apply to Internship' workflow and integrated it with backend Spring Boot endpoints.",
        "Created an Admin application review module with status transition capabilities (Applied, Under Review, Selected, Rejected).",
        "Developed RESTful controller endpoints (/apply, /applications) with clean service-layer abstractions and exception handling.",
        "Designed PostgreSQL schema for academic details, student profiles, internship listings, and application states.",
        "Built responsive client components in React ensuring fast load times and clean UI state feedback.",
      ],
      highlights: [
        "15+ REST API endpoints for students & applications",
        "Real-time applicant tracking pipeline",
        "PostgreSQL relational data persistence",
        "Role-based Student & Faculty/Admin access",
      ],
      architecture: {
        client: "React.js SPA with client-side routing, responsive cards, and dynamic state updates.",
        server: "Spring Boot application with layered architecture (Controller, Service, Repository, DTO).",
        database: "PostgreSQL relational database storing students, companies, listings, and applications.",
        security: "Role-aware endpoint authorization and CORS configuration for safe frontend communication.",
      },
    },
    {
      id: "multi-platform-cicd",
      title: "Multi-Platform CI/CD Pipeline",
      badge: "Spring Boot & DevOps",
      featured: true,
      tagline: "Automated containerized delivery pipeline deploying Spring Boot REST services to AWS EC2 via Jenkins.",
      github: "https://github.com/siddhihirpara24/Multi_Platform_CI-CD_Pipeline",
      screenshot: null,
      heroScreenshot: null,
      bannerText: "Spring Boot • Docker • Jenkins CI/CD • AWS EC2",
      modalBannerTitle: "Spring Boot REST Architecture & Automated CI/CD Pipeline",
      modalBannerDesc: "Production-ready Spring Boot microservice, Dockerfiles, Jenkins automation, and AWS EC2 deployment scripts available on GitHub.",
      technologies: ["Spring Boot", "Java", "REST APIs", "Docker", "Jenkins", "AWS EC2", "MySQL", "Git"],
      problem:
        "Deploying backend releases manually to remote cloud instances causes configuration inconsistencies, downtime risk, and slow feedback loops between code pushes and production verification.",
      solution:
        "Engineered an automated continuous delivery pipeline that pulls commits from GitHub, compiles and tests the Spring Boot application using Maven, packages a Docker container image, and deploys it automatically onto an AWS EC2 instance.",
      contributions: [
        "Developed a Spring Boot and MySQL REST API application featuring 15+ CRUD endpoints.",
        "Containerized the backend application using Docker, ensuring environment parity between local development and cloud hosting.",
        "Configured a Jenkins CI/CD pipeline automating build, test validation, Docker packaging, and deployment scripts.",
        "Deployed and maintained the containerized microservice on an AWS EC2 virtual machine running Ubuntu Linux.",
        "Implemented structured Git version control workflows for continuous integration triggers.",
      ],
      highlights: [
        "Spring Boot RESTful service with 15+ CRUD endpoints",
        "Automated Jenkins build & CI/CD deployment to AWS EC2",
        "Docker containerization for environment consistency",
        "MySQL relational persistence & Maven build automation",
      ],
      architecture: {
        vcs: "GitHub repository with automated webhook notifications triggering Jenkins builds.",
        ci: "Jenkins agent executing Maven builds, dependency downloads, and unit tests.",
        cd: "Docker image generation and automated container replacement on remote AWS EC2.",
        runtime: "AWS EC2 Linux server running containerized Spring Boot linked to MySQL.",
      },
    },
    {
      id: "terraform-infrastructure",
      title: "Infrastructure Automation using Terraform",
      badge: "Cloud & IaC",
      featured: true,
      tagline: "Declarative Infrastructure as Code (IaC) provisioning isolated AWS VPC, subnets, and EC2 instances.",
      github: "https://github.com/siddhihirpara24/Infrastructure_using_Terraform",
      screenshot: null, // Technical architecture schematic card rendered in component
      technologies: ["Terraform", "AWS (EC2, VPC, S3)", "Subnets", "Internet Gateway", "Security Groups", "Linux"],
      problem:
        "Manual creation of cloud networking and compute resources through web consoles is error-prone, untracked in version control, and difficult to reproduce reliably across staging and production.",
      solution:
        "Implemented Infrastructure as Code principles using Terraform to declaratively provision complete, isolated AWS cloud infrastructure, enabling single-command provisioning, repeatability, and state tracking.",
      contributions: [
        "Provisioned core AWS infrastructure including custom VPC, public/private subnets, Internet Gateway, and Route Tables.",
        "Configured granular AWS Security Groups strictly enforcing inbound/outbound rules for HTTP and SSH access.",
        "Constructed reusable Terraform modules and parameterized variable files to support consistent multi-tier deployments.",
        "Managed remote Terraform state to guarantee reliable drift management and reproducible provisioning.",
      ],
      highlights: [
        "Complete declarative AWS cloud architecture",
        "Custom isolated VPC with multi-subnet routing",
        "Principle of least privilege security group rules",
        "Modular, reusable Terraform configuration files",
      ],
      architecture: {
        tool: "Terraform CLI with declarative HCL (HashiCorp Configuration Language).",
        network: "AWS VPC with configured CIDR blocks, subnets, and Internet Gateway.",
        security: "Stateful Security Groups allowing strictly audited ingress ports.",
        compute: "AWS EC2 compute instances provisioned with automated initialization scripts.",
      },
    },
    {
      id: "taskflow",
      title: "TaskFlow – Task Management Application",
      badge: "Full Stack & Backend",
      featured: false,
      tagline: "Full-stack productivity web app for task scheduling, status classification, and workflow tracking.",
      github: "https://github.com/siddhihirpara24/TaskFlow",
      screenshot: null,
      technologies: ["React.js", "Java", "Spring Boot", "REST APIs", "MySQL", "Maven", "Git"],
      problem:
        "Managing daily development tasks across multiple priorities requires an intuitive, fast interface with reliable backend persistence and zero clutter.",
      solution:
        "Developed a responsive full-stack task management application leveraging React for an interactive frontend and Spring Boot REST APIs for structured backend operations, backed by MySQL.",
      contributions: [
        "Built responsive React user interface allowing dynamic task creation, edits, deletion, and quick status toggles.",
        "Implemented Spring Boot REST controller endpoints for CRUD operations and task category filtering.",
        "Integrated MySQL database with relational schema tracking task titles, descriptions, due timestamps, and completion states.",
      ],
      highlights: [
        "Full CRUD operations with RESTful architecture",
        "Pending and Completed task status tracking",
        "Responsive, modern React user interface",
        "Relational MySQL persistence with JPA",
      ],
    },
    {
      id: "docuvault-organizer",
      title: "DocuVault – Personal Document Organizer",
      badge: "Python & Dual-Backend",
      featured: true,
      tagline: "Dual-backend personal document manager with Flask dashboards, FastAPI REST endpoints, and RBAC security.",
      github: "https://github.com/siddhihirpara24/DocuVault.git",
      screenshot: null,
      bannerText: "Python 3 • Flask • FastAPI • SQLAlchemy • MySQL",
      modalBannerTitle: "Python Dual-Backend Architecture (Flask + FastAPI)",
      modalBannerDesc: "Full-stack Python web application featuring modular Flask views, asynchronous FastAPI REST endpoints with interactive Swagger UI docs, and SQLAlchemy ORM persistence.",
      technologies: ["Python 3", "Flask", "FastAPI", "SQLAlchemy ORM", "MySQL", "SQLite", "Swagger UI", "REST APIs", "Git"],
      problem:
        "Managing sensitive personal documents across scattered directories lacks unified categorization, granular role-based privacy, automated file validation, and cross-platform API accessibility.",
      solution:
        "Engineered an end-to-end Python web application combining Flask for full server-rendered user/admin dashboards with FastAPI for high-performance RESTful APIs documented automatically via Swagger UI.",
      contributions: [
        "Dual-Backend: Built a web application using Flask for user and admin dashboards, and added FastAPI to create REST API endpoints with interactive Swagger UI documentation.",
        "Security & Access Control: Created secure login, password hashing, and role-based permissions, ensuring regular users can only see their own files while admins can manage the whole system.",
        "File Uploads & Previews: Handled file uploads for PDF, image, and Word documents with size validation (up to 10 MB), unique filenames to avoid duplicates, and in-browser previews for PDFs and images.",
        "Database Management: Designed relational database tables using MySQL and SQLAlchemy ORM (with SQLite support) to cleanly organize users, categories, and document details.",
      ],
      highlights: [
        "Dual-Backend with Flask web UI & FastAPI REST APIs",
        "Role-Based Access Control (RBAC) & password hashing",
        "Multi-format file upload (up to 10MB) & in-browser preview",
        "SQLAlchemy ORM relational schema with MySQL & SQLite",
      ],
      architecture: {
        backend: "Dual-Backend: Flask for template-rendered admin & user portals; FastAPI for high-speed RESTful JSON services with OpenAPI docs.",
        database: "MySQL and SQLite persistence managed via SQLAlchemy ORM with normalized entity models for users, documents, and categories.",
        security: "Session and token-based authentication, BCrypt password hashing, and strict role-based access control (RBAC).",
        docs: "Interactive Swagger UI and ReDoc endpoints automatically generated by FastAPI for direct endpoint testing.",
      },
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sardar Vallabhbhai Global University",
      location: "Ahmedabad, Gujarat",
      period: "2025 - 2027",
      status: "Currently Pursuing",
      scores: [
        { label: "Semester 1", value: "9.02 CGPA" },
        { label: "Semester 2", value: "9.14 CGPA" },
      ],
      summary:
        "Advanced graduate studies focusing on enterprise software architecture, cloud computing, distributed systems, advanced database management, and DevOps engineering principles.",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "SMT. K. S. N. Kansagra Mahila College",
      location: "Rajkot, Gujarat",
      period: "2022 - 2025",
      status: "Graduated",
      scores: [{ label: "Overall CGPA", value: "7.79 CGPA" }],
      summary:
        "Core foundational degree in computer science, Object-Oriented Programming, Data Structures & Algorithms, Web Technologies, Database Systems, and Software Engineering methodologies.",
    },
  ],

  certifications: [
    {
      id: "linux-foundation-secure-software",
      title: "Developing Secure Software (LFD121)",
      issuer: "The Linux Foundation & OpenSSF",
      category: "Software Security",
      file: "/assets/certificates/The_Linux_Foundation.jpeg",
      verifyUrl: "https://raw.githubusercontent.com/siddhihirpara24/Certificate/main/The_Linux_Foundation.jpeg",
      desc: "Accredited certification in foundational secure software development practices, threat modeling, vulnerability mitigation, and defensive coding verified by The Linux Foundation and OpenSSF.",
    },
    {
      id: "aws-cloud-practitioner",
      title: "AWS Cloud Practitioner Essential",
      issuer: "Amazon Web Services (AWS)",
      category: "Cloud Computing",
      file: "/assets/certificates/AWS_Cloud_Practitioner_Essential.jpeg",
      verifyUrl: "https://raw.githubusercontent.com/siddhihirpara24/Certificate/main/AWS_Cloud_Practitioner_Essential.jpeg",
      desc: "Fundamental mastery of AWS Cloud infrastructure, security concepts, compute (EC2), storage (S3), databases (RDS), networking (VPC), and architecture.",
    },
    {
      id: "cybersecurity-tata",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "TATA / Forage",
      category: "Cybersecurity",
      file: "/assets/certificates/Cybersecurity_Analyst_Job_Simulation.jpeg",
      verifyUrl: "https://raw.githubusercontent.com/siddhihirpara24/Certificate/main/Cybersecurity_Analyst_Job_Simulation.jpeg",
      desc: "Simulated real-world corporate cybersecurity workflows including IAM policy review, vulnerability remediation analysis, and security governance.",
    },
    {
      id: "aws-autoscaling-coursera",
      title: "Launch an Auto-Scaling AWS EC2 Virtual Machine",
      issuer: "Coursera / Guided Project Network",
      category: "AWS & Automation",
      file: "/assets/certificates/Launch_an_auto-scaling_AWS_EC2_virtual_machine.jpeg",
      verifyUrl: "https://raw.githubusercontent.com/siddhihirpara24/Certificate/main/Launch_an_auto-scaling_AWS_EC2_virtual_machine.jpeg",
      desc: "Practical hands-on configuration of Amazon EC2 auto-scaling groups, target groups, Application Load Balancers, and CloudWatch alarm triggers.",
    },
    {
      id: "spring-boot-scaler",
      title: "Spring Boot Course",
      issuer: "Scaler Academy",
      category: "Backend Development",
      file: "/assets/certificates/Sprring_Boot.jpeg",
      verifyUrl: "https://github.com/siddhihirpara24/Certificate/blob/main/Sprring_Boot.jpeg",
      desc: "Comprehensive course covering Spring Boot fundamentals, RESTful API architecture, Spring Data JPA, Hibernate, and enterprise backend engineering.",
    },
  ],
};
