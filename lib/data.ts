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
  "Software Quality Assurance Engineer at DaticsAI, applying modern testing techniques across web, mobile, desktop, and API platforms to deliver smooth, reliable releases.";

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
