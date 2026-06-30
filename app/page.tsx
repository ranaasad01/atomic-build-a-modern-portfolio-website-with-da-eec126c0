"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, Mail, ExternalLink, Zap, Star, CheckCircle, Terminal, Globe, ArrowDown, Calendar, Activity, MapPin, Phone, GraduationCap, Shield, ChevronRight, Clock, Award, User } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  CTA_PRIMARY,
  socialLinks,
} from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import TiltCard from "@/components/TiltCard";

// ─── Contact Info ────────────────────────────────────────────────────────────
const CONTACT_INFO = {
  email: "raomali005@gmail.com",
  phone: "(+92) 300-7228384",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/raomuhammadali",
};

// ─── About Bio ───────────────────────────────────────────────────────────────
const ABOUT_BIO =
  "Software Quality Assurance Engineer applying modern testing techniques with a clear understanding of the software development lifecycle. Experienced in functional, regression, usability, compatibility, and exploratory testing, using tools like Postman and JMeter to validate performance and quality. Takes a hands-on approach to testing, aiming to spot issues early and help deliver smooth, reliable releases.";

// ─── Skills ──────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    category: "Test Automation",
    items: ["Playwright", "Selenium WebDriver", "Cypress", "Appium"],
    icon: <Terminal size={20} />,
  },
  {
    category: "Manual & Functional",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Usability Testing",
      "Compatibility Testing",
    ],
    icon: <CheckCircle size={20} />,
  },
  {
    category: "API & Performance",
    items: ["Postman", "JMeter", "REST API Testing", "Performance Testing"],
    icon: <Activity size={20} />,
  },
  {
    category: "Tools & Practices",
    items: [
      "Jira",
      "ClickUp",
      "Git",
      "Agile/Scrum",
      "SDLC",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "MongoDB",
    ],
    icon: <Zap size={20} />,
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Veridat — Data Marketplace Platform",
    description:
      "End-to-end QA for a full-stack data marketplace including Web, Desktop, and Admin Panel modules. Tested dataset workflows (large file uploads, cloud imports from Google Drive & OneDrive), Stripe payment & KYC flows, OTP/session/role-based access, real-time buyer-seller chat, and malware scanning/encryption flows.",
    tags: ["Playwright", "Manual Testing", "API Testing", "Stripe", "ClickUp"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    href: "https://veridat-demo.daticsai.com/",
    live: "https://veridat-demo.daticsai.com/",
    featured: true,
  },
  {
    title: "Desktop App Cross-Platform Testing",
    description:
      "Conducted extensive compatibility and stability testing of a desktop application across macOS, Linux, and Windows environments. Identified platform-specific bugs and ensured consistent UX across all operating systems.",
    tags: ["Desktop Testing", "Compatibility", "macOS", "Linux", "Windows"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: false,
  },
  {
    title: "API Testing & Validation Suite",
    description:
      "Performed comprehensive API testing using Postman to validate request/response behavior, data integrity, and error handling across multiple endpoints. Documented test cases and tracked issues in ClickUp.",
    tags: ["Postman", "API Testing", "REST", "Bug Reporting"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: "Software Quality Assurance Engineer",
    company: "DaticsAI",
    period: "Oct 2025 – Present",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description:
      "Core QA contributor collaborating with developers and product stakeholders throughout the SDLC.",
    bullets: [
      "Performed API testing to validate request/response behavior, data integrity, and error handling.",
      "Conducted extensive testing on Desktop applications across macOS, Linux, and Windows, ensuring platform compatibility and stability.",
      "Executed manual testing for Web and Mobile applications, covering functional, UI, and usability scenarios.",
      "Implemented test automation using Playwright, focusing on critical user flows, regression coverage and UI validation.",
      "Actively contributed to the project as a core QA contributor, collaborating with developers and product stakeholders throughout the development lifecycle.",
    ],
    project: {
      name: "Veridat — Data Marketplace Platform",
      url: "https://veridat-demo.daticsai.com/",
      highlights: [
        "Performed end-to-end testing of a data marketplace platform including Web, Desktop, and Admin Panel modules.",
        "Tested complex dataset workflows such as large file uploads, folder handling, cloud imports (Google Drive, OneDrive), and download integrity.",
        "Validated malware scanning, encryption/decryption flows, and error handling during dataset processing.",
        "Tested Stripe payment and KYC flows for buyers and sellers, including onboarding, verification status updates, and admin-side validation.",
        "Verified authentication and security flows, including OTP verification, session handling, and role-based access control.",
        "Tested real-time chat functionality between buyers and sellers, ensuring correct message ordering and persistence.",
        "Reviewed transactional emails, branding elements, and notification workflows for accuracy and consistency.",
        "Reported and tracked issues in ClickUp, providing clear reproduction steps, expected vs actual results, and validation after fixes.",
      ],
    },
  },
  {
    role: "Software Quality Assurance Engineer Intern",
    company: "DaticsAI",
    period: "Internship",
    location: "Lahore, Pakistan",
    type: "Internship",
    description: "Hands-on QA internship focused on manual testing and bug reporting.",
    bullets: [
      "Conducted manual testing of web/mobile applications.",
      "Practiced API testing using Postman on dummy endpoints.",
      "Wrote test cases and bug reports.",
      "Assisted in QA tasks for mock or academic projects.",
    ],
    project: null,
  },
  {
    role: "Front-end Developer Intern",
    company: "Tech Hero",
    period: "Nov 2024 – Jun 2025 / Jun 2024 – Dec 2024",
    location: "Pakistan",
    type: "Internship",
    description:
      "Designed and developed responsive websites and collaborated with clients on front-end solutions.",
    bullets: [
      "Designed and developed responsive and user-friendly websites using HTML, CSS, JavaScript, and jQuery.",
      "Collaborated with clients to understand project requirements and deliver customized front-end solutions.",
    ],
    project: null,
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS University of Islamabad",
    period: "Feb 2021 – Mar 2025",
    awards: [
      {
        title: "Junior Vice President – Skill Development Society, CUI",
        description:
          "Awarded for successfully organizing the E-commerce & Financial Literacy Session held on October 25, 2023, in collaboration with Subtle Commerce. Recognized for leadership, coordination, and event management skills in promoting entrepreneurship and digital financial awareness among students.",
      },
      {
        title: "Joint Secretary – CUI Sports Society",
        description:
          "Recognized for outstanding contributions as Joint Secretary of the Sports Society. Played a key role in planning, organizing, and managing university-level sports events, coordinating with teams, and ensuring smooth execution of activities that promoted physical wellness and student engagement on campus.",
      },
    ],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
const CERTIFICATIONS = [
  {
    title: "English Works Program",
    issuer: "U.S. Embassy, Pakistan",
    description:
      "6-Month English Language & Professional Skills Course focused on communication, professional development, and language proficiency.",
  },
];

// ─── Icon map for social links ────────────────────────────────────────────────
const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Code2 size={18} />,
  Linkedin: <Briefcase size={18} />,
  Mail: <Mail size={18} />,
};

// ─── Contact form state type ──────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function HomePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Presentational only
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              🛡️ Available for QA Roles
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Rao Muhammad{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ali
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium text-white/70"
          >
            {APP_TAGLINE}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            {APP_DESCRIPTION}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)]"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white font-semibold transition-all duration-200 hover:scale-105"
            >
              Get In Touch <Mail size={16} />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-white/50 hover:text-purple-400 transition-all duration-200"
                aria-label={social.label}
              >
                {socialIconMap[social.icon]}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. ABOUT SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Section label */}
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              About Me
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Bio */}
              <motion.div variants={slideInLeft} className="space-y-6">
                <p className="text-white/70 leading-relaxed text-lg">{ABOUT_BIO}</p>

                {/* Highlighted tools */}
                <div className="flex flex-wrap gap-2">
                  {["Playwright", "Postman", "JMeter", "ClickUp", "Agile/Scrum"].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Contact info row */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-white/60 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Mail size={16} className="text-purple-400" />
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/60">
                    <Phone size={16} className="text-purple-400" />
                    <span className="text-sm">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <MapPin size={16} className="text-purple-400" />
                    <span className="text-sm">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Stats cards */}
              <motion.div variants={slideInRight} className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "1+", icon: <Clock size={20} /> },
                  { label: "Test Cases Written", value: "50+", icon: <CheckCircle size={20} /> },
                  { label: "Platforms Tested", value: "3", sub: "Web · Desktop · Mobile", icon: <Globe size={20} /> },
                  { label: "Methodology", value: "Agile", sub: "Scrum", icon: <Zap size={20} /> },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2 hover:border-purple-500/30 transition-colors duration-200"
                  >
                    <div className="text-purple-400">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    {stat.sub && <div className="text-xs text-white/40">{stat.sub}</div>}
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. SKILLS SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="skills" className="py-24 md:py-32 px-6 relative">
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Expertise
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Skills &amp; Tools
            </motion.h2>

            {/* Core Competencies */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
              {[
                "Manual Testing",
                "API Testing",
                "Test Automation",
                "Performance Testing",
                "Agile/Scrum",
                "Bug Reporting",
                "SDLC",
              ].map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
                >
                  {comp}
                </span>
              ))}
            </motion.div>

            {/* Skill category cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={scaleIn}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-200 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">{skill.icon}</div>
                    <h3 className="font-semibold text-white text-sm">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. PROJECTS SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Work
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Featured Projects
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, i) => (
                <motion.div key={project.title} variants={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col group">
                      {/* Image */}
                      <div className="relative overflow-hidden h-44">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        {project.featured && (
                          <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-purple-600/90 text-white text-xs font-semibold flex items-center gap-1">
                            <Star size={10} /> Featured
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <h3 className="font-bold text-white text-base leading-snug">{project.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed flex-1">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 pt-1">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                            >
                              <ExternalLink size={14} /> Live Demo
                            </a>
                          )}
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 font-medium transition-colors duration-200"
                          >
                            <Code2 size={14} /> View
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. EXPERIENCE SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="experience" className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Career
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Work Experience
            </motion.h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

              <div className="space-y-10">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={`${exp.company}-${i}`}
                    variants={fadeInUp}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors duration-200">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="flex items-center gap-1.5 text-white/40 text-sm">
                            <Calendar size={13} /> {exp.period}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              exp.type === "Full-time"
                                ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                : "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-white/40 text-sm mb-4">
                        <MapPin size={13} /> {exp.location}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-white/60 text-sm">
                            <ChevronRight size={14} className="text-purple-400 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Veridat sub-card */}
                      {exp.project && (
                        <div className="mt-5 border-t border-white/5 pt-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Globe size={14} className="text-purple-400" />
                            <span className="text-sm font-semibold text-purple-300">
                              Recent Project:{" "}
                              <a
                                href={exp.project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-200 underline underline-offset-2 transition-colors"
                              >
                                {exp.project.name}
                              </a>
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {exp.project.highlights.map((h, hi) => (
                              <li key={hi} className="flex items-start gap-2 text-white/50 text-sm">
                                <CheckCircle size={12} className="text-indigo-400 mt-0.5 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. EDUCATION SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="education" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Background
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Education
            </motion.h2>

            {EDUCATION.map((edu) => (
              <motion.div key={edu.institution} variants={fadeInUp}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 hover:border-purple-500/20 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={22} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium mt-0.5">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-white/40 text-sm mt-2">
                        <Calendar size={13} /> {edu.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards */}
                {edu.awards.length > 0 && (
                  <div className="ml-4">
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                      Awards &amp; Achievements
                    </p>
                    <div className="space-y-4">
                      {edu.awards.map((award) => (
                        <motion.div
                          key={award.title}
                          variants={fadeInUp}
                          className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-purple-500/20 transition-colors duration-200"
                        >
                          <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                            <Award size={16} className="text-yellow-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{award.title}</h4>
                            <p className="text-white/50 text-sm mt-1 leading-relaxed">{award.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          7. CERTIFICATIONS SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="certifications" className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Credentials
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Certifications
            </motion.h2>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:border-purple-500/30 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Shield size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                    <p className="text-indigo-400 font-medium text-sm mt-0.5">{cert.issuer}</p>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          8. CONTACT SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Contact info */}
              <motion.div variants={slideInLeft} className="space-y-4">
                <p className="text-white/60 leading-relaxed mb-6">
                  I&apos;m currently open to new QA opportunities. Whether you have a project, a question, or just want to connect — feel free to reach out!
                </p>

                {[
                  {
                    icon: <Mail size={18} className="text-purple-400" />,
                    label: "Email",
                    value: CONTACT_INFO.email,
                    href: `mailto:${CONTACT_INFO.email}`,
                  },
                  {
                    icon: <Phone size={18} className="text-purple-400" />,
                    label: "Phone",
                    value: CONTACT_INFO.phone,
                    href: `tel:${CONTACT_INFO.phone}`,
                  },
                  {
                    icon: <MapPin size={18} className="text-purple-400" />,
                    label: "Location",
                    value: CONTACT_INFO.location,
                    href: null,
                  },
                  {
                    icon: <Briefcase size={18} className="text-purple-400" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/raomuhammadali",
                    href: CONTACT_INFO.linkedin,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/20 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white/80 text-sm hover:text-purple-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Right: Contact form */}
              <motion.div variants={slideInRight}>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
