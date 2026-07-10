// ============================================================
// EDIT THIS FILE to customize your portfolio content.
// Everything on the site (name, bio, skills, projects, links)
// is driven by the data below — no need to touch components.
// ============================================================

export const site = {
  name: "Vo Tan Nguyen",
  role: "Java Software Engineer",
  tagline:
    "Backend engineer with 4+ years of experience building scalable microservices for banking and enterprise systems — designing transactional workflows, event-driven services, and resilient backends built for high concurrency.",
  location: "Ho Chi Minh City, Vietnam",
  email: "votannguyen1599@gmail.com",
  // Used for <title> and social previews
  metaTitle: "Vo Tan Nguyen — Java Software Engineer",
  metaDescription:
    "Portfolio of Vo Tan Nguyen, a Java software engineer building scalable microservices for banking and enterprise systems.",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/gpaul1999",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    x: "",
  },
};

export const about = {
  paragraphs: [
    "I'm a backend engineer specializing in Core Banking workflows, event-driven communication, and distributed backend services using Quarkus, Spring Boot, Apache Camel, Kafka, and Redis.",
    "I have hands-on experience designing transactional workflows, centralized error handling, dynamic route configuration, and secure message processing for systems that handle millions of requests per day.",
    "I'm passionate about building maintainable, resilient backend systems optimized for high concurrency and real-time processing, and I enjoy working in Agile environments where I can keep learning and improving.",
  ],
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java (8+)", "JavaScript", "SQL", "HTML", "CSS", "XML"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Quarkus",
      "Apache Camel",
      "Kafka",
      "Redis",
      "Hibernate / JPA",
      "Jmix",
      "JasperReports",
      "Maven",
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "Schema design",
      "Indexing",
      "Query optimization",
      "Stored procedures",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Docker",
      "Git",
      "Jira",
      "Prometheus",
      "Grafana",
      "Postman",
      "SonarLint",
      "Agile",
      "CI/CD",
      "RESTful APIs",
    ],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  link?: string; // live demo URL
  repo?: string; // source code URL
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Core Banking Microservice Platform",
    subtitle: "Lead Developer · Team of 3",
    description:
      "Payment system for a domestic credit card issuing program. Designed key components of a modular microservice platform handling millions of transactional requests per day — dynamic Camel route configuration via YAML (~60% less integration change effort), a standardized processing framework with centralized exception handling (~70% less duplicated logic), Redis caching and async messaging (30%+ faster responses under peak load), and a secure Author-then-MAC transaction pipeline for sensitive payment data.",
    tech: [
      "Quarkus",
      "Apache Camel",
      "Redis",
      "Oracle",
      "JPA / Hibernate",
      "JasperReports",
    ],
    featured: true,
  },
  {
    title: "Vikki Bank Core Banking",
    subtitle: "Backend Developer · 50+ backend engineers, 150+ program",
    description:
      "Enterprise Core Banking system supporting customer onboarding, account lifecycle management, and transaction processing. Built core banking modules for high-volume account and transaction processing, Kafka-based event-driven communication between services, Redis caching for high-concurrency scenarios, and RESTful APIs optimized for ACID-compliant transactional consistency.",
    tech: [
      "Jmix",
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    featured: true,
  },
  {
    title: "Insurance Enterprise Platforms",
    subtitle: "Developer / Lead Developer · GGI Tokio Marine, MSIG Indonesia, PGA Philippines",
    description:
      "Large-scale insurance systems for policy management, claims processing, and internal operational workflows, supporting large daily volumes of policy and claims transactions across three international clients.",
    tech: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate / JPA",
      "Batch Jobs",
      "Quartz",
      "SQL Server",
      "JasperReports",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    company: "BC Card Viet Nam",
    role: "Java Software Engineer",
    period: "Mar 2025 — Present",
    description:
      "Designing and developing a microservices-based Core Banking system handling millions of requests per day across internal banking services.",
    highlights: [
      "Built dynamic Camel integration flows using YAML + Java DSL, reducing manual integration effort by ~60%",
      "Standardized processor architecture, eliminating duplicated business logic and reducing error-handling code by ~70%",
      "Implemented Redis caching layer, improving API response time by 30%+ under high-load scenarios",
      "Leveraged Redis Pub/Sub and Streams for asynchronous communication across distributed services",
      "Applied Author-then-MAC security mechanism to ensure integrity and authenticity of transactional messages",
      "Implemented scheduled jobs and automated reporting workflows for operational processes",
    ],
    tech: ["Quarkus", "Apache Camel", "Redis", "Oracle", "JasperReports"],
  },
  {
    company: "DXC Technology Service Vietnam",
    role: "Analyst Software Engineering",
    period: "Jan 2022 — Mar 2025",
    description:
      "Developed and maintained enterprise insurance platforms supporting large-scale daily policy and claims transactions.",
    highlights: [
      "Improved backend performance by 20% through query tuning, indexing strategies, and transaction optimization",
      "Reduced batch job execution time by 25%, improving operational efficiency",
      "Contributed to maintaining 99%+ system uptime in production environments",
    ],
    tech: ["Spring Boot", "Hibernate", "SQL Server", "Batch Jobs", "Quartz"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Industrial University of Ho Chi Minh City",
    degree: "Software Engineering",
    period: "2017 — 2022",
  },
];

export const certifications: string[] = [
  "Agile Software Development: Scrum for Developers (2024)",
  "TOEIC 635 (2024)",
];

export const awards: string[] = [
  "Star Award — DXC Technology, Q4 2024",
  "Best Team Award — DXC Technology, Q1 2024",
];
