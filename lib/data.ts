export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const APP_NAME = "Rao Ali";
export const APP_TAGLINE = "Creative Developer";
export const APP_DESCRIPTION =
  "Full-stack developer crafting digital experiences at the intersection of design and engineering.";

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
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];