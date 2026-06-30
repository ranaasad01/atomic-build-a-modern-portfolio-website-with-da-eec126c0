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
  { category: "Test Automation", items: ["Selenium WebDriver", "Cypress", "Playwright", "Appium", "TestNG"], icon: <Terminal size={20} /> },
  { category: "Manual Testing", items: ["Test Case Design", "Exploratory Testing", "Regression Testing", "UAT", "Bug Reporting"], icon: <CheckCircle size={20} /> },
  { category: "API & Performance", items: ["Postman", "REST Assured", "JMeter", "k6", "Swagger"], icon: <Activity size={20} /> },
  { category: "Tools & Practices", items: ["JIRA", "Git", "Jenkins", "Docker", "Agile/Scrum"], icon: <Zap size={20} /> },
];

const projects = [
  {
    title: "E-Commerce Test Suite",
    description: "End-to-end automation framework for a large e-commerce platform using Cypress. Covers 300+ test cases including checkout flows, payment gateways, and user authentication with 95% coverage.",
    tags: ["Cypress", "JavaScript", "CI/CD", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: true,
  },
  {
    title: "API Automation Framework",
    description: "Comprehensive REST API testing framework built with Postman and Newman. Includes 150+ test scenarios, automated reporting, and integration with Jenkins for continuous testing.",
    tags: ["Postman", "Newman", "Jenkins", "REST APIs"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: true,
  },
  {
    title: "Mobile App QA Pipeline",
    description: "Automated mobile testing pipeline for Android and iOS apps using Appium. Integrated with BrowserStack for cross-device testing and real-time reporting dashboards.",
    tags: ["Appium", "BrowserStack", "Python", "Pytest"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: false,
  },
  {
    title: "Performance Testing Suite",
    description: "Load and stress testing framework using JMeter and k6 for a high-traffic SaaS platform. Identified critical bottlenecks that improved response times by 40%.",
    tags: ["JMeter", "k6", "Performance", "Grafana"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    href: "https://github.com",
    live: null,
    featured: false,
  },
];

const experience = [
  {
    role: "Senior SQA Engineer",
    company: "TechCorp Solutions",
    period: "2022 — Present",
    description: "Lead QA efforts for a suite of enterprise SaaS products. Built and maintained Cypress automation framework from scratch, reducing regression testing time by 60%. Mentored junior QA engineers and established QA best practices across 3 product teams.",
    tags: ["Cypress", "CI/CD", "Team Lead", "Agile"],
  },
  {
    role: "SQA Engineer",
    company: "Digital Ventures Ltd.",
    period: "2021 — 2022",
    description: "Performed manual and automated testing for web and mobile applications. Developed API test suites using Postman and REST Assured. Collaborated with developers to integrate automated tests into the CI/CD pipeline using Jenkins.",
    tags: ["Selenium", "Postman", "Jenkins", "Mobile Testing"],
  },
  {
    role: "Junior QA Analyst",
    company: "Startup Hub",
    period: "2020 — 2021",
    description: "Executed manual test cases for web applications, reported and tracked bugs in JIRA. Assisted in writing test plans and test strategies. Gained hands-on experience with exploratory testing and UAT coordination.",
    tags: ["Manual Testing", "JIRA", "UAT", "Test Planning"],
  },
];

// ─── Animated words ──────────────────────────────────────────────────────────
const ANIMATED_WORDS = ["Quality", "Reliability", "Precision", "Excellence", "Confidence"];

function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  useState(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ANIMATED_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  if (shouldReduce) {
    return <span className="text-purple-400">{ANIMATED_WORDS[0]}</span>;
  }

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-purple-400 inline-block"
    >
      {ANIMATED_WORDS[index]}
    </motion.span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
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
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              <Sparkles size={14} />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ color: "#d946ef", backgroundColor: "#3b82f6", fontSize: "64px", padding: "64px", margin: "24px", borderRadius: "24px" }}
          >
            Rao Ali
            <br />
            <span className="text-white/20">—</span>{" "}
            <AnimatedWord />
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-purple-300 font-medium tracking-wide mb-6"
          >
            SQA Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I ensure software works flawlessly — from manual exploratory testing to full automation frameworks. I bridge the gap between development and delivery with rigorous QA practices.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-purple-900/30"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 text-white/70 hover:text-white font-semibold transition-all duration-200"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "200+", label: "Test Cases" },
              { value: "15+", label: "Projects" },
              { value: "3+", label: "Years Exp" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
                About Me
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  I'm Rao Ali, a passionate Software Quality Assurance Engineer with 3+ years of experience in manual and automated testing across web and mobile platforms.
                </p>
                <p>
                  I specialize in building robust test automation frameworks using Selenium, Cypress, and Playwright. I work closely with development teams to integrate QA into CI/CD pipelines and ensure every release meets the highest quality standards.
                </p>
                <p>
                  When I'm not writing test scripts, I'm exploring new testing methodologies, contributing to QA communities, and staying up-to-date with the latest tools in the testing ecosystem.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Selenium & Cypress Automation",
                  "API Testing with Postman",
                  "CI/CD Integration",
                  "Agile & Scrum Workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <CheckCircle size={15} className="text-purple-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual card */}
            <motion.div variants={slideInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] p-8">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-3xl font-bold">
                    RA
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Rao Ali</h3>
                    <p className="text-purple-400 text-sm mt-1">SQA Engineer</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Experience", value: "3+ Years" },
                      { label: "Projects", value: "15+" },
                      { label: "Test Cases", value: "200+" },
                      { label: "Frameworks", value: "5+" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-xl p-4">
                        <p className="text-lg font-bold text-white">{s.value}</p>
                        <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                Expertise
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Skills & Tools
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
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{skill.category}</h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-white/50 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-purple-500/60 shrink-0" />
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
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                Portfolio
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Selected Projects
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeInUp}
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    {project.featured && (
                      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 text-white/50 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-purple-400 transition-colors duration-200"
                      >
                        <Github size={15} />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-purple-400 transition-colors duration-200"
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
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
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                Career
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Experience
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent ml-[7px] hidden sm:block" />

              <div className="flex flex-col gap-12">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    variants={fadeInUp}
                    className="relative sm:pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-purple-500 bg-[#0a0a0a] hidden sm:block" />

                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-purple-500/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="text-purple-400 text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-white/30 font-mono shrink-0 mt-0.5">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-white/50 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Let's Work Together
              </h2>
              <p className="text-white/50 leading-relaxed">
                Have a project that needs quality assurance? Looking for a dedicated SQA engineer to join your team? I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Tell me about your project..."
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-purple-900/30"
                  >
                    Send Message
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
