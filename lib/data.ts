export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const APP_NAME = "Rao Muhammad Ali";
export const APP_TAGLINE = "SQA Engineer";
export const APP_DESCRIPTION =
  "Software Quality Assurance Engineer at DaticsAI, Lahore — applying modern testing techniques across web, mobile, desktop, and API platforms to deliver smooth, reliable releases.";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const CTA_PRIMARY = {
  label: "View My Work",
  href: "#projects",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Email", href: "mailto:raomali005@gmail.com", icon: "Mail" },
];

export const CONTACT_INFO = {
  email: 'raomali005@gmail.com',
  phone: '(+92) 300-7228384',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com',
};

export const ABOUT_BIO = "Software Quality Assurance Engineer at DaticsAI, applying modern testing techniques with a clear understanding of the software development lifecycle. Experienced in functional, regression, usability, compatibility, and exploratory testing, using tools like Postman and JMeter to validate performance and quality. Takes a hands-on approach to testing, aiming to spot issues early and help deliver smooth, reliable releases.";

export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'COMSATS University of Islamabad',
    period: 'Feb 2021 – Mar 2025',
    awards: [
      'Junior Vice President – Skill Development Society, CUI: Awarded for successfully organizing the E-commerce & Financial Literacy Session (Oct 25, 2023) in collaboration with Subtle Commerce. Recognized for leadership, coordination, and event management skills.',
      'Joint Secretary – CUI Sports Society: Recognized for outstanding contributions in planning, organizing, and managing university-level sports events and promoting physical wellness and student engagement.',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'English Works Program',
    issuer: 'U.S. Embassy, Pakistan',
    description: '6-Month English Language & Professional Skills Course',
  },
];

export const EXPERIENCE = [
  {
    role: 'Software Quality Assurance Engineer',
    company: 'DaticsAI',
    location: 'Lahore, Pakistan',
    period: 'Oct 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Performed API testing to validate request/response behavior, data integrity, and error handling.',
      'Conducted extensive testing on Desktop applications across macOS, Linux, and Windows, ensuring platform compatibility and stability.',
      'Executed manual testing for Web and Mobile applications, covering functional, UI, and usability scenarios.',
      'Implemented test automation using Playwright, focusing on critical user flows, regression coverage, and UI validation.',
      'Actively contributed as a core QA contributor, collaborating with developers and product stakeholders throughout the development lifecycle.',
    ],
    projects: [
      {
        name: 'Veridat — Data Marketplace Platform',
        url: 'https://veridat-demo.daticsai.com/',
        highlights: [
          'Performed end-to-end testing of a data marketplace platform including Web, Desktop, and Admin Panel modules.',
          'Tested complex dataset workflows: large file uploads, folder handling, cloud imports (Google Drive, OneDrive), and download integrity.',
          'Validated malware scanning, encryption/decryption flows, and error handling during dataset processing.',
          'Tested Stripe payment and KYC flows for buyers and sellers, including onboarding, verification status updates, and admin-side validation.',
          'Verified authentication and security flows: OTP verification, session handling, and role-based access control.',
          'Tested real-time chat functionality between buyers and sellers, ensuring correct message ordering and persistence.',
          'Reviewed transactional emails, branding elements, and notification workflows for accuracy and consistency.',
          'Reported and tracked issues in ClickUp with clear reproduction steps, expected vs actual results, and fix validation.',
        ],
      },
    ],
  },
  {
    role: 'Software Quality Assurance Engineer Intern',
    company: 'DaticsAI',
    location: 'Lahore, Pakistan',
    period: 'Prior to Oct 2025',
    type: 'Internship',
    bullets: [
      'Conducted manual testing of web/mobile applications.',
      'Practiced API testing using Postman on dummy endpoints.',
      'Wrote test cases and bug reports.',
      'Assisted in QA tasks for mock or academic projects.',
    ],
    projects: [],
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Tech Hero',
    location: '',
    period: 'Jun 2024 – Jun 2025',
    type: 'Internship',
    bullets: [
      'Designed and developed responsive and user-friendly websites using HTML, CSS, JavaScript, and jQuery.',
      'Collaborated with clients to understand project requirements and deliver customized front-end solutions.',
    ],
    projects: [],
  },
];

export const SKILLS = [
  {
    category: 'Test Automation',
    items: ['Playwright', 'Selenium WebDriver', 'Cypress', 'Appium'],
    icon: 'Terminal',
  },
  {
    category: 'Manual & Functional',
    items: ['Functional Testing', 'Regression Testing', 'Exploratory Testing', 'Usability Testing', 'Compatibility Testing'],
    icon: 'CheckCircle',
  },
  {
    category: 'API & Performance',
    items: ['Postman', 'JMeter', 'REST API Testing', 'Performance Testing'],
    icon: 'Activity',
  },
  {
    category: 'Tools & Practices',
    items: ['Jira', 'ClickUp', 'Git', 'Agile/Scrum', 'SDLC', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB'],
    icon: 'Zap',
  },
];
