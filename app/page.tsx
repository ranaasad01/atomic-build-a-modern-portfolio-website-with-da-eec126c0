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
      'Performed API testing using Postman to validate endpoints, data integrity, and error handling',
      'Conducted manual functional, regression, and exploratory testing across web and desktop platforms',
      'Executed cross-browser and cross-platform compatibility testing (macOS, Linux, Windows)',
      'Implemented Playwright automation scripts for critical user flows and regression coverage',
      'Tracked and documented bugs in ClickUp with detailed reproduction steps and severity ratings',
      'Collaborated in Agile/Scrum sprints, participating in daily standups and sprint reviews',
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

// ─── SQA Test Logs ──────────────────────────────────────────────────────────

const TEST_LOGS = [
  '[INIT]  Launching SQA Automation Suite v2.4.1...',
  '[PASS]  UI Responsiveness verified across breakpoints',
  '[PASS]  API endpoint integrity checks passed (12/12)',
  '[PASS]  Cross-browser compatibility confirmed',
  '[PASS]  Accessibility audit score: 98/100',
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // SQA test run state
  const [testRunning, setTestRunning] = useState(false);
  const [testLines, setTestLines] = useState<string[]>([]);
  const [testDone, setTestDone] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);

  async function handleTestRun() {
    if (testRunning || testDone) {
      // Reset
      setTestRunning(false);
      setTestDone(false);
      setTestLines([]);
      setConsoleOpen(false);
      return;
    }
    setTestRunning(true);
    setConsoleOpen(true);
    setTestLines([]);
    setTestDone(false);

    for (let i = 0; i < TEST_LOGS.length; i++) {
      await new Promise<void>((resolve) => setTimeout(resolve, i === 0 ? 300 : 480));
      setTestLines((prev) => [...prev, TEST_LOGS[i]]);
    }

    await new Promise<void>((resolve) => setTimeout(resolve, 400));
    setTestRunning(false);
    setTestDone(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus('sending');
    await new Promise((r) => setTimeout(r, 1400));
    setFormStatus('sent');
  }

  const motionProps = (variants: Variants) =>
    prefersReducedMotion ? {} : { variants };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">{APP_NAME}</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300 bg-clip-text text-transparent">
                {APP_TAGLINE}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl"
            >
              {APP_DESCRIPTION}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-start gap-4 mb-12">
              {/* ── SQA Test Run CTA ── */}
              <div className="flex flex-col items-start gap-0">
                <button
                  onClick={handleTestRun}
                  disabled={testRunning}
                  className={`group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
                    testDone
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/10'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03]'
                  } disabled:opacity-80 disabled:cursor-not-allowed disabled:scale-100`}
                >
                  {testRunning ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Running Tests...
                    </>
                  ) : testDone ? (
                    <>
                      <CheckCircle size={16} className="text-green-400" />
                      Run Again
                    </>
                  ) : (
                    <>
                      <Terminal size={16} className="transition-transform duration-200 group-hover:rotate-6" />
                      Run Test Suite
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Terminal Console */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={consoleOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden w-full max-w-sm mt-3"
                >
                  <div className="bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl shadow-black/60 font-mono text-xs">
                    {/* Terminal title bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-2 text-white/30 text-[10px] tracking-widest uppercase">sqa-runner</span>
                    </div>
                    {/* Log lines */}
                    <div className="px-4 py-3 space-y-1.5 min-h-[60px]">
                      {testLines.map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25 }}
                          className={`leading-relaxed ${
                            line.startsWith('[PASS]')
                              ? 'text-green-400'
                              : line.startsWith('[INIT]')
                              ? 'text-purple-400'
                              : line.startsWith('[FAIL]')
                              ? 'text-red-400'
                              : 'text-white/60'
                          }`}
                        >
                          {line}
                        </motion.p>
                      ))}
                      {testRunning && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-2 h-3.5 bg-purple-400 rounded-sm align-middle"
                        />
                      )}
                    </div>
                    {/* SUCCESS badge */}
                    {testDone && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="mx-4 mb-4 mt-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30"
                        style={{ boxShadow: '0 0 16px 2px rgba(34,197,94,0.18)' }}
                      >
                        <CheckCircle size={14} className="text-green-400" />
                        <span className="text-green-400 font-semibold tracking-widest uppercase text-[11px]">All Tests Passed — SUCCESS</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Secondary CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={16} />
                Get In Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-purple-400 transition-colors duration-200 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {iconMap[social.icon]}
                  </span>
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-0 flex items-center gap-2 text-white/20 text-xs tracking-widest uppercase"
          >
            <ArrowDown size={14} className="animate-bounce" />
            Scroll
          </motion.div>
        </div>
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
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">About Me</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Quality is not an act,<br />
                <span className="text-white/40">it's a habit.</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Rao Muhammad Ali</span>, a Software Quality Assurance Engineer at DaticsAI with hands-on experience across the full testing spectrum — from manual exploratory testing to automated regression suites.
                </p>
                <p>
                  My toolkit spans <span className="text-purple-400">Playwright</span>, <span className="text-purple-400">Postman</span>, <span className="text-purple-400">JMeter</span>, and <span className="text-purple-400">Selenium</span>, with a strong foundation in Agile/Scrum workflows and cross-functional collaboration.
                </p>
                <p>
                  I believe great software is built on a culture of quality — catching bugs early, communicating clearly, and continuously improving processes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <User size={14} className="text-purple-400" />
                  Lahore, Pakistan
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Briefcase size={14} className="text-purple-400" />
                  DaticsAI
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar size={14} className="text-purple-400" />
                  Since Oct 2025
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/5 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Test Cases Written', value: '500+', icon: <CheckCircle size={20} className="text-purple-400" /> },
                    { label: 'Bugs Reported', value: '200+', icon: <Activity size={20} className="text-indigo-400" /> },
                    { label: 'Automation Scripts', value: '50+', icon: <Terminal size={20} className="text-purple-400" /> },
                    { label: 'Projects Tested', value: '10+', icon: <Layers size={20} className="text-indigo-400" /> },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Skills & Stack</p>
              <h2 className="text-4xl font-bold tracking-tight">Tools of the Trade</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <TiltCard key={skill.category}>
                  <motion.div
                    variants={scaleIn}
                    className="h-full bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300"
                  >
                    <div className="text-purple-400 mb-4">{skill.icon}</div>
                    <h3 className="font-semibold text-white mb-3 text-sm">{skill.category}</h3>
                    <ul className="space-y-1.5">
                      {skill.items.map((item) => (
                        <li key={item} className="text-xs text-white/50 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-purple-400/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Projects</p>
              <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <TiltCard key={project.title}>
                  <motion.div
                    variants={fadeInUp}
                    className="group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                      {project.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-medium">
                          <Star size={10} />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/50 text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-purple-400 transition-colors duration-200"
                        >
                          <Github size={13} />
                          Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-purple-400 transition-colors duration-200"
                          >
                            <ExternalLink size={13} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Experience</p>
              <h2 className="text-4xl font-bold tracking-tight">Work History</h2>
            </motion.div>

            <div className="space-y-6">
              {experience.map((exp) => (
                <TiltCard key={exp.company}>
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-purple-500/30 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-white/40 mt-1">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/40 shrink-0">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-white/60 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Contact</p>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Work Together</h2>
              <p className="text-white/50">Have a project that needs quality assurance? I'd love to hear about it.</p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending' || formStatus === 'sent'}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

// ─── Missing icon alias ──────────────────────────────────────────────────────
function Briefcase({ size }: { size: number }) {
  return <Linkedin size={size} />;
}
