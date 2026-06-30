"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ExternalLink, Code, Layers, Zap, Star, CheckCircle, Terminal, Globe, Sparkles, ArrowDown, User, Calendar, Activity } from 'lucide-react';
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

// ─── Inline data ────────────────────────────────────────────────────────────

const skills = [
  { category: 'Test Automation', items: ['Playwright', 'Selenium WebDriver', 'Cypress', 'Appium'], icon: <Terminal size={20} /> },
  { category: 'Manual & Functional', items: ['Functional Testing', 'Regression Testing', 'Exploratory Testing', 'Usability Testing', 'Compatibility Testing'], icon: <CheckCircle size={20} /> },
  { category: 'API & Performance', items: ['Postman', 'JMeter', 'REST API Testing', 'Performance Testing'], icon: <Activity size={20} /> },
  { category: 'Tools & Practices', items: ['Jira', 'ClickUp', 'Git', 'Agile/Scrum', 'SDLC', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB'], icon: <Zap size={20} /> },
];

const projects = [
  {
    title: 'Veridat — Data Marketplace Platform',
    description: 'End-to-end QA for a full-stack data marketplace including Web, Desktop, and Admin Panel modules. Tested dataset workflows (large file uploads, cloud imports from Google Drive & OneDrive), Stripe payment & KYC flows, OTP/session/role-based access, real-time buyer-seller chat, and malware scanning/encryption flows.',
    tags: ['Playwright', 'Manual Testing', 'API Testing', 'Stripe', 'ClickUp'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    href: 'https://veridat-demo.daticsai.com/',
    live: 'https://veridat-demo.daticsai.com/',
    featured: true,
  },
  {
    title: 'Desktop App Cross-Platform Testing',
    description: 'Conducted extensive compatibility and stability testing of a desktop application across macOS, Linux, and Windows environments. Identified platform-specific bugs and ensured consistent UX across all operating systems.',
    tags: ['Desktop Testing', 'Compatibility', 'macOS', 'Linux', 'Windows'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
    href: 'https://github.com',
    live: null,
    featured: true,
  },
  {
    title: 'API Testing & Validation Suite',
    description: 'Performed comprehensive API testing using Postman to validate request/response behavior, data integrity, and error handling across multiple endpoints. Documented test cases and tracked issues in ClickUp.',
    tags: ['Postman', 'API Testing', 'REST', 'Bug Reporting'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop',
    href: 'https://github.com',
    live: null,
    featured: false,
  },
  {
    title: 'Playwright Automation Framework',
    description: 'Implemented test automation using Playwright focused on critical user flows, regression coverage, and UI validation. Integrated into the CI pipeline to catch regressions early across web application releases.',
    tags: ['Playwright', 'Automation', 'Regression', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
    href: 'https://github.com',
    live: null,
    featured: false,
  },
];

const experience = [
  {
    role: 'Software Quality Assurance Engineer',
    company: 'DaticsAI',
    period: 'Oct 2025 – Present',
    location: 'Lahore, Pakistan',
    description: 'Core QA contributor collaborating with developers and product stakeholders throughout the SDLC.',
    bullets: [
      'Performed API testing to validate request/response behavior, data integrity, and error handling.',
      'Conducted extensive testing on Desktop applications across macOS, Linux, and Windows for platform compatibility.',
      'Executed manual testing for Web and Mobile applications covering functional, UI, and usability scenarios.',
      'Implemented test automation using Playwright for critical user flows, regression coverage, and UI validation.',
      'Reported and tracked issues in ClickUp with clear reproduction steps, expected vs actual results, and fix validation.',
    ],
  },
  {
    role: 'Software Quality Assurance Engineer Intern',
    company: 'Tech Hero',
    period: 'Jun 2024 – Dec 2024',
    location: 'Pakistan',
    description: 'Gained hands-on QA experience through manual testing, API testing practice, and test documentation.',
    bullets: [
      'Conducted manual testing of web and mobile applications.',
      'Practiced API testing using Postman on dummy endpoints.',
      'Wrote test cases and bug reports for mock and academic projects.',
      'Assisted in QA tasks and contributed to team workflows.',
    ],
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Tech Hero',
    period: 'Nov 2024 – Jun 2025',
    location: 'Pakistan',
    description: 'Designed and developed responsive websites while collaborating with clients on front-end solutions.',
    bullets: [
      'Designed and developed responsive, user-friendly websites using HTML, CSS, JavaScript, and jQuery.',
      'Collaborated with clients to understand project requirements and deliver customized front-end solutions.',
    ],
  },
];

const educationAwards = [
  {
    type: 'education',
    title: 'Bachelor of Science in Software Engineering',
    institution: 'COMSATS University of Islamabad',
    period: 'Feb 2021 – Mar 2025',
    detail: '',
  },
  {
    type: 'certification',
    title: 'English Works Program',
    institution: 'U.S. Embassy, Pakistan',
    period: '2023',
    detail: '6-Month English Language & Professional Skills Course',
  },
  {
    type: 'award',
    title: 'Junior Vice President – Skill Development Society',
    institution: 'COMSATS University of Islamabad',
    period: 'Oct 2023',
    detail: 'Organized the E-commerce & Financial Literacy Session in collaboration with Subtle Commerce. Recognized for leadership, coordination, and event management.',
  },
  {
    type: 'award',
    title: 'Joint Secretary – CUI Sports Society',
    institution: 'COMSATS University of Islamabad',
    period: '',
    detail: 'Key role in planning, organizing, and managing university-level sports events, promoting physical wellness and student engagement.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const motionProps = (variants: Variants) =>
    shouldReduceMotion ? {} : { variants };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus("sent");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
            <Sparkles size={14} />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="block text-white">Rao Muhammad</span>
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Ali
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/50 font-medium tracking-widest uppercase mb-4"
          >
            Software Quality Assurance Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Ensuring quality at every layer —{" "}
            <span className="text-purple-400 font-semibold">from API to UI.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-purple-500/40 text-white/70 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get In Touch
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center gap-2 text-white/20"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text */}
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                About Me
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Quality-driven{" "}
                <span className="text-white/30">engineer</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                Software Quality Assurance Engineer at DaticsAI, Lahore. I apply modern testing techniques with a clear understanding of the software development lifecycle. Experienced in functional, regression, usability, compatibility, and exploratory testing, using tools like Postman and JMeter to validate performance and quality. I take a hands-on approach to testing — spotting issues early and helping deliver smooth, reliable releases.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Playwright", "Postman", "JMeter", "Agile/Scrum", "ClickUp"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats / info card */}
            <motion.div variants={slideInRight} className="space-y-4">
              {[
                { label: "Current Role", value: "SQA Engineer @ DaticsAI" },
                { label: "Location", value: "Lahore, Pakistan" },
                { label: "Education", value: "BS Software Engineering, COMSATS" },
                { label: "Email", value: "raomali005@gmail.com" },
                { label: "Phone", value: "+92 300-7228384" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-colors duration-200"
                >
                  <div className="w-1 h-full min-h-[20px] rounded-full bg-gradient-to-b from-purple-500 to-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white/80 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Skills & Tools
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Tech Stack
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={scaleIn}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-200">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-white text-sm">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                        <div className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Portfolio
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
                        <Star size={10} />
                        Featured
                      </div>
                    )}
                    {/* Links overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#0a0a0a]/80 border border-white/10 text-white/70 hover:text-purple-400 transition-colors duration-200"
                          aria-label="Live site"
                        >
                          <Globe size={14} />
                        </a>
                      )}
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0a0a0a]/80 border border-white/10 text-white/70 hover:text-purple-400 transition-colors duration-200"
                        aria-label="View project"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Career
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Experience
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-transparent ml-[7px] hidden sm:block" />

              <div className="space-y-10">
                {experience.map((exp, i) => (
                  <motion.div
                    key={`${exp.company}-${exp.role}`}
                    variants={fadeInUp}
                    className="relative sm:pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-[#0a0a0a] shadow-[0_0_12px_rgba(168,85,247,0.5)] hidden sm:block" />

                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm text-white/40 font-mono">{exp.period}</p>
                          {exp.location && (
                            <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{exp.description}</p>
                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {exp.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm text-white/50">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0 mt-1.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION & AWARDS ───────────────────────────────────────────── */}
      <section id="education" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Background
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Education & Awards
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {educationAwards.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        item.type === 'education'
                          ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20'
                          : item.type === 'certification'
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20'
                          : 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20'
                      }`}
                    >
                      {item.type}
                    </span>
                    {item.period && (
                      <span className="text-xs text-white/30 font-mono">{item.period}</span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-purple-400 font-medium mb-2">{item.institution}</p>
                  {item.detail && (
                    <p className="text-sm text-white/40 leading-relaxed">{item.detail}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-white/50 leading-relaxed">
                Have a project in mind or want to discuss QA opportunities? I'd love to hear from you.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40">
                <a href="mailto:raomali005@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail size={14} />
                  raomali005@gmail.com
                </a>
                <span className="hidden sm:block text-white/20">·</span>
                <span className="flex items-center gap-2">
                  <Globe size={14} />
                  +92 300-7228384
                </span>
              </div>
            </motion.div>

            <motion.form
              ref={formRef}
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {formStatus === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : formStatus === "sent" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
              {formStatus === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
