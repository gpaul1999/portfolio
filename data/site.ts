// ============================================================
// EDIT THIS FILE to customize your portfolio content.
// Everything on the site (name, bio, skills, projects, links)
// is driven by the data below — no need to touch components.
// ============================================================

export const site = {
  name: "Vo Tan Nguyen",
  role: "Software Developer",
  tagline:
    "I build clean, reliable web applications with a focus on user experience and maintainable code.",
  location: "Ho Chi Minh City, Vietnam",
  email: "votannguyen1599@gmail.com",
  // Used for <title> and social previews
  metaTitle: "Vo Tan Nguyen — Software Developer",
  metaDescription:
    "Portfolio of Vo Tan Nguyen, a software developer building modern web applications.",
  resumeUrl: "", // e.g. "/resume.pdf" — drop the file into /public and set the path here
  socials: {
    github: "https://github.com/gpaul1999",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    x: "", // e.g. "https://x.com/your-handle"
  },
};

export const about = {
  paragraphs: [
    "I'm a software developer who enjoys turning ideas into products. My main focus is building web applications that are fast, accessible, and pleasant to use.",
    "I care about clean architecture and readable code, and I'm always learning — whether it's a new framework, a better testing strategy, or a deeper understanding of the platforms I build on.",
    "Outside of coding, I enjoy exploring new technologies, contributing to side projects, and sharing what I learn with others.",
  ],
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string; // live demo URL
  repo?: string; // source code URL
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "This very site — a minimal, fast portfolio built with Next.js and Tailwind CSS, with dark mode and a single-file content config.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/gpaul1999/portfolio",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Replace this with a real project: what it does, the problem it solves, and what you learned building it. Two sentences is plenty.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "Another placeholder project. Keep descriptions outcome-focused — what the project achieves, not just the tech it uses.",
    tech: ["Python", "FastAPI"],
    link: "",
    repo: "",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
};

export const experience: Experience[] = [
  {
    company: "Company Name",
    role: "Software Developer",
    period: "2023 — Present",
    description:
      "Replace with your real experience: what you built, the impact it had, and the scale you worked at.",
    tech: ["TypeScript", "React", "Node.js"],
  },
  {
    company: "Previous Company",
    role: "Junior Developer",
    period: "2021 — 2023",
    description:
      "Earlier role. Focus on growth and concrete contributions — features shipped, bugs squashed, processes improved.",
    tech: ["JavaScript", "Express"],
  },
];
