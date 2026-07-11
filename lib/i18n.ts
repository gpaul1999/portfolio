export type Lang = "en" | "vi";

export const langs: Lang[] = ["en", "vi"];

export function isLang(value: string): value is Lang {
  return langs.includes(value as Lang);
}

/** A value localized into every supported language. */
export type L<T = string> = Record<Lang, T>;

/** UI strings (labels, buttons, section titles). */
export const ui = {
  nav: {
    about: { en: "About", vi: "Giới thiệu" },
    skills: { en: "Skills", vi: "Kỹ năng" },
    products: { en: "Products", vi: "Sản phẩm" },
    projects: { en: "Projects", vi: "Dự án" },
    experience: { en: "Experience", vi: "Kinh nghiệm" },
    education: { en: "Education", vi: "Học vấn" },
    blog: { en: "Blog", vi: "Blog" },
    contact: { en: "Contact", vi: "Liên hệ" },
  },
  hero: {
    available: {
      en: "Available for new opportunities",
      vi: "Sẵn sàng cho cơ hội mới",
    },
    greeting: { en: "Hi, I'm", vi: "Xin chào, tôi là" },
    viewWork: { en: "View my work", vi: "Xem dự án" },
    getInTouch: { en: "Get in touch", vi: "Liên hệ ngay" },
    resume: { en: "Resume", vi: "CV" },
  },
  sections: {
    about: { en: "About", vi: "Giới thiệu" },
    skills: { en: "Skills", vi: "Kỹ năng" },
    products: { en: "Products", vi: "Sản phẩm" },
    projects: { en: "Projects", vi: "Dự án" },
    experience: { en: "Experience", vi: "Kinh nghiệm" },
    education: { en: "Education & Awards", vi: "Học vấn & Giải thưởng" },
    blog: { en: "Writing", vi: "Bài viết" },
    contact: { en: "Contact", vi: "Liên hệ" },
  },
  about: {
    basedIn: { en: "Based in", vi: "Đang sống tại" },
    currently: { en: "Currently", vi: "Hiện tại" },
  },
  projects: {
    caseStudy: { en: "Read case study", vi: "Xem chi tiết dự án" },
    liveDemo: { en: "Live demo", vi: "Bản demo" },
    sourceCode: { en: "Source code", vi: "Mã nguồn" },
    backToProjects: { en: "All projects", vi: "Tất cả dự án" },
    context: { en: "Context", vi: "Bối cảnh" },
    problem: { en: "The problem", vi: "Vấn đề" },
    solution: { en: "The solution", vi: "Giải pháp" },
    results: { en: "Results", vi: "Kết quả" },
    architecture: { en: "Architecture", vi: "Kiến trúc hệ thống" },
    techStack: { en: "Tech stack", vi: "Công nghệ sử dụng" },
    role: { en: "Role", vi: "Vai trò" },
    team: { en: "Team", vi: "Quy mô" },
  },
  products: {
    intro: {
      en: "Things I design, build, and operate myself — live and serving real users.",
      vi: "Những sản phẩm tôi tự thiết kế, xây dựng và vận hành — đang chạy và phục vụ người dùng thật.",
    },
    visit: { en: "Visit website", vi: "Truy cập website" },
    learnMore: { en: "Learn more", vi: "Tìm hiểu thêm" },
    statusLive: { en: "Live", vi: "Đang vận hành" },
    statusBeta: { en: "Beta", vi: "Bản beta" },
    statusBuilding: { en: "In development", vi: "Đang phát triển" },
    features: { en: "Key features", vi: "Tính năng chính" },
    operations: { en: "How I build & run it", vi: "Cách tôi xây dựng & vận hành" },
    techStack: { en: "Tech stack", vi: "Công nghệ sử dụng" },
    role: { en: "Role", vi: "Vai trò" },
    status: { en: "Status", vi: "Trạng thái" },
    backToHome: { en: "Back to products", vi: "Về mục sản phẩm" },
  },
  education: {
    education: { en: "Education", vi: "Học vấn" },
    certifications: { en: "Certifications", vi: "Chứng chỉ" },
    awards: { en: "Honors & Awards", vi: "Danh hiệu & Giải thưởng" },
  },
  blog: {
    title: { en: "Blog", vi: "Blog" },
    intro: {
      en: "Notes on backend engineering — things I've learned building banking and enterprise systems.",
      vi: "Ghi chép về backend — những điều tôi học được khi xây dựng hệ thống ngân hàng và doanh nghiệp.",
    },
    readMore: { en: "Read more", vi: "Đọc tiếp" },
    backToBlog: { en: "All posts", vi: "Tất cả bài viết" },
    latestPosts: { en: "Latest posts", vi: "Bài viết mới" },
    viewAll: { en: "View all posts", vi: "Xem tất cả bài viết" },
    minRead: { en: "min read", vi: "phút đọc" },
  },
  contact: {
    heading: {
      en: "Let's build something together.",
      vi: "Cùng nhau xây dựng điều gì đó nhé.",
    },
    body: {
      en: "I'm open to interesting projects and opportunities. The fastest way to reach me is by email — I usually reply within a day.",
      vi: "Tôi luôn cởi mở với các dự án và cơ hội thú vị. Cách nhanh nhất để liên hệ là qua email — tôi thường trả lời trong ngày.",
    },
  },
  footer: {
    builtWith: { en: "Built with", vi: "Xây dựng bằng" },
  },
} as const;

export function t(value: L, lang: Lang): string {
  return value[lang];
}
