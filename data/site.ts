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

export type ProductStatus = "live" | "beta" | "building";

export type Product = {
  slug: string;
  name: string;
  tagline: L;
  description: L;
  status: ProductStatus;
  url: string;
  image?: string; // path under /public
  tech: string[];
  role: L;
  intro: L; // opening paragraph on the detail page
  features: Array<{ title: L; description: L }>;
  operations: L[]; // how the product is built and run
};

export const products: Product[] = [
  {
    slug: "contgo",
    name: "ContGo",
    tagline: {
      en: "Fleet management for Vietnamese container trucking companies — trips, costs, fuel, and per-trip profit in one screen.",
      vi: "Quản lý đội xe container cho nhà xe Việt — chuyến, chi phí, nhiên liệu và lãi/lỗ từng chuyến gọn trong một màn hình.",
    },
    description: {
      en: "A SaaS platform that replaces Excel sheets and paper notebooks for fleet owners running 5–30 container trucks. Dispatchers manage trips and approvals on the web; drivers snap receipts and log fuel right inside a Zalo Mini App — no app install needed.",
      vi: "Nền tảng SaaS thay thế Excel và sổ tay cho chủ nhà xe vận hành 5–30 đầu container. Điều hành quản lý chuyến và duyệt chi trên web; tài xế chụp hóa đơn, ghi nhiên liệu ngay trong Zalo Mini App — không cần cài app.",
    },
    status: "live",
    url: "https://contgo.pages.dev/",
    image: "/products/contgo.png",
    tech: [
      "Spring Boot 3",
      "PostgreSQL",
      "Flyway",
      "JWT",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Zalo Mini App",
      "Docker",
      "Cloudflare Pages",
      "Railway",
    ],
    role: {
      en: "Founder · solo design, build & operations",
      vi: "Sáng lập · một mình thiết kế, xây dựng & vận hành",
    },
    intro: {
      en: "Fleet owners running container trucks usually track everything across Excel, paper notebooks, and phone calls: fuel in one place, tolls in a driver's memory, advances on paper. The question they can't answer is the one that matters — which trips actually make money. ContGo turns every trip into one number: revenue − costs − advances = profit or loss.",
      vi: "Chủ nhà xe container thường quản lý mọi thứ bằng Excel, sổ tay và những cuộc điện thoại: dầu ghi một nơi, cầu đường tài xế nhớ, tạm ứng ghi giấy. Câu hỏi họ không trả lời được lại là câu quan trọng nhất — chuyến nào thực sự có lời. ContGo biến mỗi chuyến xe thành một con số: doanh thu − chi phí − tạm ứng = lãi/lỗ.",
    },
    features: [
      {
        title: { en: "Trip orders", vi: "Lệnh xe" },
        description: {
          en: "Create trips, assign drivers, and track status in real time.",
          vi: "Tạo chuyến, giao tài xế, theo dõi trạng thái real-time.",
        },
      },
      {
        title: { en: "Expenses & advances", vi: "Chi phí & tạm ứng" },
        description: {
          en: "Drivers snap receipt photos on Zalo; dispatchers approve in one tap.",
          vi: "Tài xế chụp hóa đơn gửi ngay trên Zalo, điều hành duyệt 1 chạm.",
        },
      },
      {
        title: { en: "Fuel log", vi: "Nhật ký nhiên liệu" },
        description: {
          en: "Liters, cost, and station — price per liter computed automatically.",
          vi: "Ghi lít, số tiền, trạm xăng — tính đơn giá/lít tự động.",
        },
      },
      {
        title: { en: "Per-trip settlement", vi: "Quyết toán từng chuyến" },
        description: {
          en: "Revenue − costs − advances = profit or loss, clear for every trip.",
          vi: "Doanh thu − chi phí − tạm ứng = lãi/lỗ, rõ ràng cho từng chuyến.",
        },
      },
      {
        title: { en: "Expiry alerts", vi: "Cảnh báo hết hạn" },
        description: {
          en: "Inspection, insurance, and driver licenses flagged 15 days ahead.",
          vi: "Đăng kiểm, bảo hiểm, bằng lái được nhắc trước 15 ngày.",
        },
      },
      {
        title: { en: "Reports & Excel export", vi: "Báo cáo & xuất Excel" },
        description: {
          en: "Revenue, driver performance, and fuel consumption reports.",
          vi: "Báo cáo doanh thu, hiệu suất tài xế, tiêu hao nhiên liệu.",
        },
      },
    ],
    operations: [
      {
        en: "Spring Boot 3 API with JWT security and PostgreSQL, schema-managed with Flyway migrations, deployed on Railway.",
        vi: "API Spring Boot 3 với bảo mật JWT và PostgreSQL, quản lý schema bằng Flyway migration, triển khai trên Railway.",
      },
      {
        en: "React 18 + Vite + Tailwind frontend served as a static site on Cloudflare Pages.",
        vi: "Frontend React 18 + Vite + Tailwind chạy dạng static site trên Cloudflare Pages.",
      },
      {
        en: "Driver app built as a Zalo Mini App, so drivers use it inside Zalo with zero installation.",
        vi: "Ứng dụng cho tài xế xây dựng dạng Zalo Mini App — tài xế dùng ngay trong Zalo, không cần cài đặt.",
      },
      {
        en: "Dockerized local development with docker-compose mirroring the production topology.",
        vi: "Môi trường phát triển đóng gói Docker với docker-compose mô phỏng đúng cấu trúc production.",
      },
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
    slug: "ggi-tokio-marine-insurance-platform",
    title: {
      en: "GGI Tokio Marine Insurance Platform",
      vi: "Nền tảng Bảo hiểm GGI Tokio Marine",
    },
    subtitle: {
      en: "Lead Developer · Team of 3",
      vi: "Lead Developer · Nhóm 3 người",
    },
    description: {
      en: "A joint-venture insurance platform combining domestic and global expertise, focused on maintaining core application components, production stability, and feature delivery.",
      vi: "Nền tảng bảo hiểm liên doanh kết hợp chuyên môn nội địa và quốc tế, tập trung vào bảo trì các thành phần lõi, ổn định production và triển khai tính năng.",
    },
    tech: [
      "Spring MVC",
      "Hibernate / JPA",
      "Batch Jobs",
      "Quartz",
      "SQL Server",
      "JasperReports",
    ],
    caseStudy: {
      role: { en: "Lead Developer", vi: "Lead Developer" },
      team: { en: "3 engineers", vi: "3 kỹ sư" },
      context: {
        en: "GGI Tokio Marine is a joint-venture insurance platform that combines domestic and global insurance expertise. The project required steady production support while continuing to evolve core application features.",
        vi: "GGI Tokio Marine là nền tảng bảo hiểm liên doanh kết hợp chuyên môn bảo hiểm trong nước và quốc tế. Dự án cần vừa hỗ trợ production ổn định, vừa tiếp tục phát triển các tính năng lõi.",
      },
      problem: {
        en: "The platform needed reliable maintenance for critical insurance workflows, fast resolution of production issues, and safe feature updates without interrupting daily business operations.",
        vi: "Nền tảng cần được bảo trì ổn định cho các luồng nghiệp vụ bảo hiểm quan trọng, xử lý nhanh sự cố production và triển khai thay đổi an toàn mà không gián đoạn vận hành hằng ngày.",
      },
      solution: [
        {
          en: "Led development and maintenance of core application components using Spring MVC, Hibernate, JPA, SQL Server, Quartz, and JasperReports.",
          vi: "Dẫn dắt phát triển và bảo trì các thành phần lõi bằng Spring MVC, Hibernate, JPA, SQL Server, Quartz và JasperReports.",
        },
        {
          en: "Resolved production issues, debugged defects, and supported release updates for key insurance workflows.",
          vi: "Xử lý sự cố production, debug lỗi và hỗ trợ release cho các luồng nghiệp vụ bảo hiểm chính.",
        },
        {
          en: "Coordinated implementation work within a small team to keep maintenance and feature delivery moving in parallel.",
          vi: "Điều phối công việc trong nhóm nhỏ để vừa duy trì hệ thống vừa triển khai tính năng mới song song.",
        },
      ],
      results: [
        {
          en: "Maintained seamless production operation for a live insurance platform",
          vi: "Duy trì vận hành production ổn định cho nền tảng bảo hiểm đang hoạt động",
        },
        {
          en: "Delivered feature updates while resolving defects in critical workflows",
          vi: "Triển khai cập nhật tính năng song song với xử lý lỗi trong các luồng nghiệp vụ quan trọng",
        },
        {
          en: "Supported production stability through hands-on debugging and issue resolution",
          vi: "Hỗ trợ ổn định production thông qua debug và xử lý sự cố trực tiếp",
        },
      ],
    },
  },
  {
    slug: "msig-indonesia-insurance-platform",
    title: {
      en: "MSIG Indonesia Insurance Platform",
      vi: "Nền tảng Bảo hiểm MSIG Indonesia",
    },
    subtitle: {
      en: "Developer · Team of 11",
      vi: "Developer · Nhóm 11 người",
    },
    description: {
      en: "A comprehensive insurance platform for MSIG Indonesia, improving policy management and customer experience through new features, change requests, workflows, and scheduled processing.",
      vi: "Nền tảng bảo hiểm toàn diện cho MSIG Indonesia, cải thiện quản lý hợp đồng và trải nghiệm khách hàng thông qua tính năng mới, change request, workflow và xử lý định kỳ.",
    },
    tech: [
      "Spring Boot",
      "Hibernate / JPA",
      "RESTful API",
      "VPMS Model",
      "Batch Jobs",
      "Quartz",
      "SQL Server",
      "JasperReports",
    ],
    caseStudy: {
      role: { en: "Developer", vi: "Developer" },
      team: { en: "11 engineers", vi: "11 kỹ sư" },
      context: {
        en: "MSIG Indonesia needed a comprehensive insurance platform to support policy management and improve customer experience across business workflows.",
        vi: "MSIG Indonesia cần một nền tảng bảo hiểm toàn diện để hỗ trợ quản lý hợp đồng và cải thiện trải nghiệm khách hàng trên nhiều luồng nghiệp vụ.",
      },
      problem: {
        en: "The project had to continuously absorb client change requests while preserving reliability across microservices, workflows, scheduled jobs, and SQL Server-backed operations.",
        vi: "Dự án cần liên tục tiếp nhận change request từ khách hàng nhưng vẫn giữ độ tin cậy cho microservices, workflow, batch job và các nghiệp vụ sử dụng SQL Server.",
      },
      solution: [
        {
          en: "Implemented new features and change requests with Spring Boot, Hibernate, JPA, RESTful APIs, and the VPMS model.",
          vi: "Triển khai tính năng mới và change request bằng Spring Boot, Hibernate, JPA, RESTful API và VPMS model.",
        },
        {
          en: "Debugged and resolved software defects to maintain platform reliability across policy-management workflows.",
          vi: "Debug và xử lý lỗi phần mềm để duy trì độ tin cậy cho các workflow quản lý hợp đồng.",
        },
        {
          en: "Worked with microservices, workflows, Quartz batch jobs, SQL Server, and JasperReports for operational processing and reporting.",
          vi: "Làm việc với microservices, workflow, Quartz batch job, SQL Server và JasperReports cho xử lý vận hành và báo cáo.",
        },
      ],
      results: [
        {
          en: "Delivered client-requested enhancements for policy-management workflows",
          vi: "Triển khai các cải tiến theo yêu cầu khách hàng cho luồng quản lý hợp đồng",
        },
        {
          en: "Maintained reliability by debugging and resolving defects during active development",
          vi: "Duy trì độ tin cậy bằng việc debug và xử lý lỗi trong quá trình phát triển",
        },
        {
          en: "Supported scheduled processing and reporting through batch jobs and JasperReports",
          vi: "Hỗ trợ xử lý định kỳ và báo cáo thông qua batch job và JasperReports",
        },
      ],
    },
  },
  {
    slug: "pga-philippines-insurance-platform",
    title: {
      en: "PGA Philippines Insurance Platform",
      vi: "Nền tảng Bảo hiểm PGA Philippines",
    },
    subtitle: {
      en: "Developer · Team of 25",
      vi: "Developer · Nhóm 25 người",
    },
    description: {
      en: "An insurance platform for Prudential Guarantee and Assurance, Inc., a leading non-life insurance company in the Philippines, focused on feature delivery, workflow reliability, and scheduled processing.",
      vi: "Nền tảng bảo hiểm cho Prudential Guarantee and Assurance, Inc., công ty bảo hiểm phi nhân thọ hàng đầu tại Philippines, tập trung vào triển khai tính năng, độ tin cậy workflow và xử lý định kỳ.",
    },
    tech: [
      "Spring Boot",
      "Hibernate / JPA",
      "RESTful API",
      "Batch Jobs",
      "Quartz",
      "SQL Server",
      "JasperReports",
    ],
    caseStudy: {
      role: { en: "Developer", vi: "Developer" },
      team: { en: "25 engineers", vi: "25 kỹ sư" },
      context: {
        en: "PGA Philippines is tied to Prudential Guarantee and Assurance, Inc., a leading non-life insurance company in the Philippines. The platform supported ongoing insurance operations and client-driven enhancements.",
        vi: "PGA Philippines gắn với Prudential Guarantee and Assurance, Inc., công ty bảo hiểm phi nhân thọ hàng đầu tại Philippines. Nền tảng hỗ trợ vận hành bảo hiểm và các cải tiến theo yêu cầu khách hàng.",
      },
      problem: {
        en: "The platform required steady delivery of new features and change requests while keeping microservices, workflows, and scheduled batch jobs stable for business users.",
        vi: "Nền tảng cần triển khai đều đặn tính năng mới và change request trong khi vẫn giữ ổn định microservices, workflow và batch job cho người dùng nghiệp vụ.",
      },
      solution: [
        {
          en: "Implemented new features and change requests using Spring Boot, Hibernate, JPA, RESTful APIs, SQL Server, and JasperReports.",
          vi: "Triển khai tính năng mới và change request bằng Spring Boot, Hibernate, JPA, RESTful API, SQL Server và JasperReports.",
        },
        {
          en: "Debugged and resolved software defects to keep insurance workflows reliable during active delivery.",
          vi: "Debug và xử lý lỗi phần mềm để giữ độ tin cậy cho các workflow bảo hiểm trong quá trình phát triển.",
        },
        {
          en: "Worked with microservices, workflow logic, Quartz batch scheduling, and reporting flows for daily operations.",
          vi: "Làm việc với microservices, logic workflow, Quartz batch scheduling và luồng báo cáo cho vận hành hằng ngày.",
        },
      ],
      results: [
        {
          en: "Delivered feature updates and change requests for a large insurance delivery team",
          vi: "Triển khai cập nhật tính năng và change request trong một đội dự án bảo hiểm quy mô lớn",
        },
        {
          en: "Helped maintain workflow reliability through defect resolution and production-oriented debugging",
          vi: "Góp phần duy trì độ tin cậy workflow thông qua xử lý lỗi và debug theo hướng production",
        },
        {
          en: "Supported scheduled insurance processing with Quartz batch jobs and reporting workflows",
          vi: "Hỗ trợ xử lý bảo hiểm định kỳ bằng Quartz batch job và các luồng báo cáo",
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
