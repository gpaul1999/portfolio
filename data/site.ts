// ============================================================
// EDIT THIS FILE to customize your portfolio content.
// Every text field is bilingual: { en: "...", vi: "..." }.
// ============================================================

import type { L } from "@/lib/i18n";

export const site = {
  name: "Vo Tan Nguyen",
  role: {
    en: "Java Software Engineer",
    vi: "Kỹ sư phần mềm Java",
  } satisfies L,
  tagline: {
    en: "Backend engineer with 4+ years of experience building scalable microservices for banking and enterprise systems — designing transactional workflows, event-driven services, and resilient backends built for high concurrency.",
    vi: "Kỹ sư backend với hơn 4 năm kinh nghiệm xây dựng microservices cho hệ thống ngân hàng và doanh nghiệp — thiết kế luồng giao dịch, dịch vụ hướng sự kiện và backend chịu tải cao.",
  } satisfies L,
  location: {
    en: "Ho Chi Minh City, Vietnam",
    vi: "TP. Hồ Chí Minh, Việt Nam",
  } satisfies L,
  email: "votannguyen1599@gmail.com",
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

export const about: { paragraphs: L[] } = {
  paragraphs: [
    {
      en: "I'm a backend engineer specializing in Core Banking workflows, event-driven communication, and distributed backend services using Quarkus, Spring Boot, Apache Camel, Kafka, and Redis.",
      vi: "Tôi là kỹ sư backend chuyên về nghiệp vụ Core Banking, giao tiếp hướng sự kiện và các dịch vụ backend phân tán, sử dụng Quarkus, Spring Boot, Apache Camel, Kafka và Redis.",
    },
    {
      en: "I have hands-on experience designing transactional workflows, centralized error handling, dynamic route configuration, and secure message processing for systems that handle millions of requests per day.",
      vi: "Tôi có kinh nghiệm thực chiến trong thiết kế luồng giao dịch, xử lý lỗi tập trung, cấu hình route động và xử lý thông điệp bảo mật cho các hệ thống phục vụ hàng triệu request mỗi ngày.",
    },
    {
      en: "I'm passionate about building maintainable, resilient backend systems optimized for high concurrency and real-time processing, and I enjoy working in Agile environments where I can keep learning and improving.",
      vi: "Tôi đam mê xây dựng các hệ thống backend dễ bảo trì, có khả năng chịu lỗi, tối ưu cho xử lý đồng thời cao và thời gian thực, và thích làm việc trong môi trường Agile nơi tôi có thể liên tục học hỏi.",
    },
  ],
};

export type SkillGroup = {
  title: L;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Languages", vi: "Ngôn ngữ lập trình" },
    skills: ["Java (8+)", "JavaScript", "SQL", "HTML", "CSS", "XML"],
  },
  {
    title: { en: "Frameworks & Libraries", vi: "Framework & Thư viện" },
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
    title: { en: "Databases", vi: "Cơ sở dữ liệu" },
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
    title: { en: "Tools & Practices", vi: "Công cụ & Quy trình" },
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

export type CaseStudy = {
  context: L;
  problem: L;
  solution: L[];
  results: L[];
  role: L;
  team: L;
};

export type Project = {
  slug: string;
  title: L;
  subtitle: L;
  description: L;
  tech: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "core-banking-microservice-platform",
    title: {
      en: "Core Banking Microservice Platform",
      vi: "Nền tảng Microservice Core Banking",
    },
    subtitle: {
      en: "Lead Developer · Team of 3",
      vi: "Lead Developer · Nhóm 3 người",
    },
    description: {
      en: "Payment system for a domestic credit card issuing program — a modular microservice platform handling millions of transactional requests per day, with dynamic Camel routing, centralized error handling, and a secure transaction pipeline.",
      vi: "Hệ thống thanh toán cho chương trình phát hành thẻ tín dụng nội địa — nền tảng microservice mô-đun xử lý hàng triệu request giao dịch mỗi ngày, với Camel routing động, xử lý lỗi tập trung và pipeline giao dịch bảo mật.",
    },
    tech: [
      "Quarkus",
      "Apache Camel",
      "Redis",
      "Oracle",
      "JPA / Hibernate",
      "JasperReports",
    ],
    featured: true,
    caseStudy: {
      role: { en: "Lead Developer", vi: "Lead Developer" },
      team: { en: "3 engineers", vi: "3 kỹ sư" },
      context: {
        en: "BC Card Viet Nam is building a payment system for a domestic credit card that will be issued in the near future. The platform must process millions of transactional requests per day across internal banking services, with strict requirements on integrity, auditability, and response time.",
        vi: "BC Card Việt Nam xây dựng hệ thống thanh toán cho thẻ tín dụng nội địa sắp phát hành. Nền tảng phải xử lý hàng triệu request giao dịch mỗi ngày giữa các dịch vụ ngân hàng nội bộ, với yêu cầu khắt khe về tính toàn vẹn, khả năng kiểm toán và thời gian phản hồi.",
      },
      problem: {
        en: "Integrating many banking services traditionally means writing repetitive integration code for every new flow: duplicated business logic, scattered error handling, and slow turnaround whenever a route changes. At millions of requests per day, naive database access and synchronous service calls also become bottlenecks.",
        vi: "Tích hợp nhiều dịch vụ ngân hàng theo cách truyền thống đồng nghĩa với việc viết code tích hợp lặp đi lặp lại cho mỗi luồng mới: logic nghiệp vụ trùng lặp, xử lý lỗi rải rác, và mỗi lần thay đổi route đều mất nhiều thời gian. Ở quy mô hàng triệu request/ngày, truy cập database trực tiếp và gọi dịch vụ đồng bộ cũng trở thành nút thắt cổ chai.",
      },
      solution: [
        {
          en: "Designed dynamic Apache Camel integration flows configured via YAML + Java DSL, so new integration routes can be added or changed through configuration instead of code.",
          vi: "Thiết kế luồng tích hợp Apache Camel động, cấu hình qua YAML + Java DSL, cho phép thêm hoặc thay đổi route tích hợp bằng cấu hình thay vì viết code.",
        },
        {
          en: "Implemented a standardized processor architecture with centralized exception handling, eliminating duplicated business logic across services.",
          vi: "Xây dựng kiến trúc processor chuẩn hóa với xử lý ngoại lệ tập trung, loại bỏ logic nghiệp vụ trùng lặp giữa các dịch vụ.",
        },
        {
          en: "Added a Redis caching layer and used Redis Pub/Sub and Streams for asynchronous communication across distributed services.",
          vi: "Bổ sung lớp cache Redis và dùng Redis Pub/Sub, Streams cho giao tiếp bất đồng bộ giữa các dịch vụ phân tán.",
        },
        {
          en: "Designed a secure transaction pipeline using an Author-then-MAC mechanism to guarantee integrity and authenticity of sensitive payment data.",
          vi: "Thiết kế pipeline giao dịch bảo mật theo cơ chế Author-then-MAC để đảm bảo tính toàn vẹn và xác thực của dữ liệu thanh toán nhạy cảm.",
        },
        {
          en: "Built automated reporting workflows with file monitoring and real-time PDF generation using JasperReports, plus scheduled jobs for operational processes.",
          vi: "Xây dựng luồng báo cáo tự động với giám sát file và sinh PDF thời gian thực bằng JasperReports, cùng các scheduled job cho quy trình vận hành.",
        },
      ],
      results: [
        {
          en: "~60% less manual effort when adding or changing integration routes",
          vi: "Giảm ~60% công sức thủ công khi thêm hoặc thay đổi route tích hợp",
        },
        {
          en: "~70% reduction in duplicated logic and error-handling code",
          vi: "Giảm ~70% code trùng lặp và code xử lý lỗi",
        },
        {
          en: "30%+ faster API response times under high-load scenarios",
          vi: "Cải thiện hơn 30% thời gian phản hồi API ở kịch bản tải cao",
        },
        {
          en: "A transaction processing module supporting high-concurrency internal banking operations",
          vi: "Mô-đun xử lý giao dịch hỗ trợ nghiệp vụ ngân hàng nội bộ với độ đồng thời cao",
        },
      ],
    },
  },
  {
    slug: "vikki-bank-core-banking",
    title: {
      en: "Vikki Bank Core Banking",
      vi: "Core Banking Ngân hàng Vikki",
    },
    subtitle: {
      en: "Backend Developer · 50+ backend engineers, 150+ program",
      vi: "Backend Developer · 50+ kỹ sư backend, chương trình 150+ người",
    },
    description: {
      en: "Enterprise Core Banking system supporting customer onboarding, account lifecycle management, and transaction processing — event-driven services communicating over Kafka, with Redis caching for high-concurrency scenarios.",
      vi: "Hệ thống Core Banking doanh nghiệp hỗ trợ onboarding khách hàng, quản lý vòng đời tài khoản và xử lý giao dịch — các dịch vụ hướng sự kiện giao tiếp qua Kafka, dùng Redis cache cho kịch bản đồng thời cao.",
    },
    tech: ["Jmix", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker"],
    featured: true,
    caseStudy: {
      role: { en: "Backend Developer", vi: "Backend Developer" },
      team: {
        en: "150+ program · 50+ backend · 20 payment",
        vi: "Chương trình 150+ · 50+ backend · 20 payment",
      },
      context: {
        en: "A full enterprise Core Banking build-out covering customer onboarding, account lifecycle management, and transaction processing, developed by a program of 150+ people with a 50+ strong backend team.",
        vi: "Dự án xây dựng Core Banking doanh nghiệp hoàn chỉnh, bao phủ onboarding khách hàng, quản lý vòng đời tài khoản và xử lý giao dịch, với chương trình hơn 150 người và đội backend hơn 50 kỹ sư.",
      },
      problem: {
        en: "Core banking modules must stay consistent (ACID) while remaining responsive under high concurrency. Services need to react to each other's events reliably — a failed or lost message in account or transaction processing is unacceptable in banking.",
        vi: "Các mô-đun core banking phải đảm bảo nhất quán (ACID) trong khi vẫn phản hồi nhanh dưới tải đồng thời cao. Các dịch vụ cần phản ứng với sự kiện của nhau một cách tin cậy — mất hay lỗi một thông điệp trong xử lý tài khoản, giao dịch là điều không thể chấp nhận trong ngân hàng.",
      },
      solution: [
        {
          en: "Developed core banking modules supporting high-volume account and transaction processing on Jmix and Spring Boot.",
          vi: "Phát triển các mô-đun core banking hỗ trợ xử lý tài khoản và giao dịch khối lượng lớn trên Jmix và Spring Boot.",
        },
        {
          en: "Implemented Kafka-based event-driven communication for reliable inter-service transaction events.",
          vi: "Triển khai giao tiếp hướng sự kiện dựa trên Kafka cho các sự kiện giao dịch liên dịch vụ một cách tin cậy.",
        },
        {
          en: "Applied Redis caching to reduce repeated database reads and improve response latency in high-concurrency scenarios.",
          vi: "Áp dụng Redis cache để giảm đọc lặp lại từ database và cải thiện độ trễ phản hồi trong các kịch bản đồng thời cao.",
        },
        {
          en: "Designed RESTful APIs optimized for ACID-compliant transactional consistency.",
          vi: "Thiết kế RESTful API tối ưu cho tính nhất quán giao dịch chuẩn ACID.",
        },
        {
          en: "Participated in performance tuning, database optimization, and production deployment for containerized services, with monitoring via Prometheus and Grafana.",
          vi: "Tham gia tinh chỉnh hiệu năng, tối ưu database và triển khai production cho các dịch vụ container hóa, giám sát bằng Prometheus và Grafana.",
        },
      ],
      results: [
        {
          en: "Core banking modules serving high-volume account and transaction processing in production",
          vi: "Các mô-đun core banking phục vụ xử lý tài khoản và giao dịch khối lượng lớn trên môi trường production",
        },
        {
          en: "Reliable event-driven communication between services over Kafka",
          vi: "Giao tiếp hướng sự kiện tin cậy giữa các dịch vụ qua Kafka",
        },
        {
          en: "Reduced response latency in high-concurrency flows thanks to Redis caching",
          vi: "Giảm độ trễ phản hồi trong các luồng đồng thời cao nhờ Redis cache",
        },
      ],
    },
  },
  {
    slug: "insurance-enterprise-platforms",
    title: {
      en: "Insurance Enterprise Platforms",
      vi: "Nền tảng Bảo hiểm Doanh nghiệp",
    },
    subtitle: {
      en: "Developer / Lead Developer · GGI Tokio Marine, MSIG Indonesia, PGA Philippines",
      vi: "Developer / Lead Developer · GGI Tokio Marine, MSIG Indonesia, PGA Philippines",
    },
    description: {
      en: "Large-scale insurance systems for policy management, claims processing, and internal operational workflows, supporting large daily volumes of policy and claims transactions across three international clients.",
      vi: "Các hệ thống bảo hiểm quy mô lớn cho quản lý hợp đồng, xử lý bồi thường và quy trình vận hành nội bộ, phục vụ khối lượng giao dịch hợp đồng và bồi thường lớn mỗi ngày cho ba khách hàng quốc tế.",
    },
    tech: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate / JPA",
      "Batch Jobs",
      "Quartz",
      "SQL Server",
      "JasperReports",
    ],
    caseStudy: {
      role: { en: "Developer / Lead Developer", vi: "Developer / Lead Developer" },
      team: { en: "3–25 engineers per project", vi: "3–25 kỹ sư mỗi dự án" },
      context: {
        en: "At DXC Technology, I worked on enterprise insurance platforms for three international clients — GGI Tokio Marine, MSIG Indonesia, and PGA Philippines — covering policy management, claims processing, and internal operational workflows.",
        vi: "Tại DXC Technology, tôi làm việc trên các nền tảng bảo hiểm doanh nghiệp cho ba khách hàng quốc tế — GGI Tokio Marine, MSIG Indonesia và PGA Philippines — bao phủ quản lý hợp đồng, xử lý bồi thường và quy trình vận hành nội bộ.",
      },
      problem: {
        en: "Insurance platforms process large daily volumes of policy and claims transactions, with heavy nightly batch workloads. Slow queries and long batch windows directly delay business operations, and production uptime is contractual.",
        vi: "Nền tảng bảo hiểm xử lý khối lượng lớn giao dịch hợp đồng và bồi thường mỗi ngày, kèm các batch job nặng chạy ban đêm. Truy vấn chậm và cửa sổ batch kéo dài ảnh hưởng trực tiếp đến vận hành, trong khi uptime production là cam kết hợp đồng.",
      },
      solution: [
        {
          en: "Developed and maintained policy and claims modules on Spring Boot / Spring MVC with Hibernate and JPA.",
          vi: "Phát triển và bảo trì các mô-đun hợp đồng và bồi thường trên Spring Boot / Spring MVC với Hibernate và JPA.",
        },
        {
          en: "Tuned queries, indexing strategies, and transaction handling on SQL Server.",
          vi: "Tinh chỉnh truy vấn, chiến lược đánh index và xử lý giao dịch trên SQL Server.",
        },
        {
          en: "Optimized scheduled batch jobs (Quartz) that drive nightly policy and claims processing.",
          vi: "Tối ưu các batch job định kỳ (Quartz) phục vụ xử lý hợp đồng và bồi thường hằng đêm.",
        },
        {
          en: "Built operational reports with JasperReports for business teams.",
          vi: "Xây dựng báo cáo vận hành bằng JasperReports cho các bộ phận nghiệp vụ.",
        },
      ],
      results: [
        {
          en: "Backend performance improved by 20% through query tuning, indexing, and transaction optimization",
          vi: "Hiệu năng backend cải thiện 20% nhờ tinh chỉnh truy vấn, index và tối ưu giao dịch",
        },
        {
          en: "Batch job execution time reduced by 25%",
          vi: "Thời gian chạy batch job giảm 25%",
        },
        {
          en: "Contributed to maintaining 99%+ production uptime",
          vi: "Góp phần duy trì uptime production trên 99%",
        },
      ],
    },
  },
];

export type TimelineItem = {
  company: L;
  role: L;
  period: L;
  description: L;
  highlights?: L[];
  tech?: string[];
  type: "work" | "education";
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    company: { en: "BC Card Viet Nam", vi: "BC Card Việt Nam" },
    role: { en: "Java Software Engineer", vi: "Kỹ sư phần mềm Java" },
    period: { en: "Mar 2025 — Present", vi: "03/2025 — Hiện tại" },
    description: {
      en: "Designing and developing a microservices-based Core Banking system handling millions of requests per day across internal banking services.",
      vi: "Thiết kế và phát triển hệ thống Core Banking dạng microservices, xử lý hàng triệu request mỗi ngày giữa các dịch vụ ngân hàng nội bộ.",
    },
    highlights: [
      {
        en: "Built dynamic Camel integration flows using YAML + Java DSL, reducing manual integration effort by ~60%",
        vi: "Xây dựng luồng tích hợp Camel động bằng YAML + Java DSL, giảm ~60% công sức tích hợp thủ công",
      },
      {
        en: "Standardized processor architecture, eliminating duplicated business logic and reducing error-handling code by ~70%",
        vi: "Chuẩn hóa kiến trúc processor, loại bỏ logic nghiệp vụ trùng lặp và giảm ~70% code xử lý lỗi",
      },
      {
        en: "Implemented Redis caching layer, improving API response time by 30%+ under high-load scenarios",
        vi: "Triển khai lớp cache Redis, cải thiện hơn 30% thời gian phản hồi API ở kịch bản tải cao",
      },
      {
        en: "Leveraged Redis Pub/Sub and Streams for asynchronous communication across distributed services",
        vi: "Ứng dụng Redis Pub/Sub và Streams cho giao tiếp bất đồng bộ giữa các dịch vụ phân tán",
      },
      {
        en: "Applied Author-then-MAC security mechanism to ensure integrity and authenticity of transactional messages",
        vi: "Áp dụng cơ chế bảo mật Author-then-MAC đảm bảo tính toàn vẹn và xác thực của thông điệp giao dịch",
      },
    ],
    tech: ["Quarkus", "Apache Camel", "Redis", "Oracle", "JasperReports"],
  },
  {
    type: "work",
    company: {
      en: "DXC Technology Service Vietnam",
      vi: "DXC Technology Service Vietnam",
    },
    role: { en: "Analyst Software Engineering", vi: "Analyst Software Engineering" },
    period: { en: "Jan 2022 — Mar 2025", vi: "01/2022 — 03/2025" },
    description: {
      en: "Developed and maintained enterprise insurance platforms supporting large-scale daily policy and claims transactions.",
      vi: "Phát triển và bảo trì các nền tảng bảo hiểm doanh nghiệp phục vụ khối lượng lớn giao dịch hợp đồng và bồi thường mỗi ngày.",
    },
    highlights: [
      {
        en: "Improved backend performance by 20% through query tuning, indexing strategies, and transaction optimization",
        vi: "Cải thiện 20% hiệu năng backend nhờ tinh chỉnh truy vấn, chiến lược index và tối ưu giao dịch",
      },
      {
        en: "Reduced batch job execution time by 25%, improving operational efficiency",
        vi: "Giảm 25% thời gian chạy batch job, nâng cao hiệu quả vận hành",
      },
      {
        en: "Contributed to maintaining 99%+ system uptime in production environments",
        vi: "Góp phần duy trì uptime hệ thống trên 99% ở môi trường production",
      },
    ],
    tech: ["Spring Boot", "Hibernate", "SQL Server", "Batch Jobs", "Quartz"],
  },
  {
    type: "education",
    company: {
      en: "Industrial University of Ho Chi Minh City",
      vi: "Đại học Công nghiệp TP. Hồ Chí Minh",
    },
    role: { en: "Software Engineering", vi: "Kỹ thuật phần mềm" },
    period: { en: "2017 — 2022", vi: "2017 — 2022" },
    description: {
      en: "Studied software engineering — foundations in programming, databases, and system design.",
      vi: "Theo học ngành kỹ thuật phần mềm — nền tảng về lập trình, cơ sở dữ liệu và thiết kế hệ thống.",
    },
  },
];

export const certifications: L[] = [
  {
    en: "Agile Software Development: Scrum for Developers (2024)",
    vi: "Agile Software Development: Scrum for Developers (2024)",
  },
  { en: "TOEIC 635 (2024)", vi: "TOEIC 635 (2024)" },
];

export const awards: L[] = [
  {
    en: "Star Award — DXC Technology, Q4 2024",
    vi: "Star Award — DXC Technology, Q4 2024",
  },
  {
    en: "Best Team Award — DXC Technology, Q1 2024",
    vi: "Best Team Award — DXC Technology, Q1 2024",
  },
];
