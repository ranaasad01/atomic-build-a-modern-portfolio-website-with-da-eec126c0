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
import TiltCard from "@/components/TiltCard";

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
      'Performed API testing to validate request/response behavior, data integrity, and error handling using Postman.',
      'Conducted manual functional, regression, exploratory, usability, and compatibility testing across web, desktop, and admin panel modules.',
      'Executed cross-platform desktop app testing on macOS, Linux, and Windows.',
      'Tested Stripe payment flows, KYC verification, OTP authentication, and role-based access control.',
      'Validated real-time buyer-seller chat, large file uploads, and cloud imports (Google Drive, OneDrive).',
      'Implemented Playwright automation for critical user flows and regression suites.',
      'Tracked and reported bugs using ClickUp; collaborated in Agile/Scrum ceremonies.',
    ],
  },
  {
    role: 'BS Computer Science',
    company: 'University of Lahore',
    period: '2021 – 2025',
    location: 'Lahore, Pakistan',
    description: 'Graduated with a focus on software engineering, databases, and web technologies.',
    bullets: [
      'Studied core CS fundamentals: algorithms, data structures, OOP, and databases.',
      'Completed coursework in software engineering, web development, and network security.',
      'Final year project involved building and testing a full-stack web application.',
    ],
  },
];

// ─── Contact form state type ─────────────────────────────────────────────────
type FormState = { name: string; email: string; message: string };
type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-purple-500" />
      <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">{children}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">{children}</h2>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
  }

  return (
    <main className="relative overflow-x-hidden">
      {/* ── Background ambient glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {APP_NAME}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium text-white/60 mb-4"
          >
            {APP_TAGLINE} — Ensuring quality at every layer.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/40 leading-relaxed max-w-2xl mb-10"
          >
            {APP_DESCRIPTION}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
            <Link
              href={CTA_PRIMARY.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              {CTA_PRIMARY.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-purple-500/40 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-white/40 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
                aria-label={s.label}
              >
                {s.icon === 'Github' && <Github size={18} />}
                {s.icon === 'Linkedin' && <Linkedin size={18} />}
                {s.icon === 'Mail' && <Mail size={18} />}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <Section id="about">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div variants={slideInLeft}>
            <SectionLabel>About Me</SectionLabel>
            <SectionTitle>Passionate about quality-driven development</SectionTitle>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                I'm a Software Quality Assurance Engineer at <span className="text-purple-400 font-medium">DaticsAI</span>, where I ensure every release meets the highest standards of reliability and user experience.
              </p>
              <p>
                My expertise spans manual testing, API validation with Postman, test automation with Playwright, and performance testing with JMeter. I thrive in Agile environments and collaborate closely with developers and product teams.
              </p>
              <p>
                I hold a BS in Computer Science from the University of Lahore (2021–2025), which gave me a strong foundation in software engineering, databases, and web technologies.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Manual Testing', 'Playwright', 'Postman', 'JMeter', 'Agile/Scrum'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div variants={slideInRight} className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/5" />
              <div className="relative z-10 space-y-6">
                {[
                  { label: 'Current Role', value: 'SQA Engineer @ DaticsAI', icon: <Briefcase /> },
                  { label: 'Location', value: 'Lahore, Pakistan', icon: <Globe size={16} /> },
                  { label: 'Education', value: 'BS CS — University of Lahore', icon: <User size={16} /> },
                  { label: 'Focus', value: 'Web, Desktop & API Testing', icon: <Star size={16} /> },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-purple-400">{item.icon}</span>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-white/80 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ══════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════ */}
      <Section id="skills" className="border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <SectionLabel>Skills</SectionLabel>
            <SectionTitle>Tech stack & expertise</SectionTitle>
            <p className="text-white/40 max-w-xl">
              A comprehensive toolkit built through hands-on experience across diverse testing disciplines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={scaleIn}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400">{skill.icon}</span>
                  <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ══════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════ */}
      <Section id="projects" className="border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <SectionLabel>Projects</SectionLabel>
            <SectionTitle>QA work & case studies</SectionTitle>
            <p className="text-white/40 max-w-xl">
              A selection of projects where I've applied rigorous testing methodologies to ensure product quality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={scaleIn}>
                <TiltCard className="group rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    {project.featured && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white/70 transition-colors duration-200"
                      >
                        <Github size={13} /> View Details
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ══════════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════════ */}
      <Section id="experience" className="border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <SectionLabel>Experience</SectionLabel>
            <SectionTitle>Work & education</SectionTitle>
            <p className="text-white/40 max-w-xl">
              My professional journey in software quality assurance and academic background.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div key={exp.company} variants={fadeInUp}>
                <TiltCard className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/30">
                        <Globe size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-white/50 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-white/40">
                        <CheckCircle size={14} className="text-purple-500/60 mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <Section id="contact" className="border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Let's work together</SectionTitle>
            <p className="text-white/40 mb-10">
              Have a project that needs quality assurance? I'd love to hear about it. Drop me a message and I'll get back to you shortly.
            </p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && '✓ Message Sent!'}
              {status === 'error' && 'Try Again'}
            </button>

            {status === 'sent' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-purple-400"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

          {/* Direct contact */}
          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:raomali005@gmail.com"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-purple-400 transition-colors duration-200"
            >
              <Mail size={16} /> raomali005@gmail.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-purple-400 transition-colors duration-200"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  );
}

// Small helper used in About section
function Briefcase() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
