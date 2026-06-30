"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, Mail, ExternalLink, Zap, Star, CheckCircle, Terminal, Globe, ArrowDown, Calendar, Activity, MapPin, Phone, GraduationCap, Shield, ChevronRight, Clock, Award, User } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  CTA_PRIMARY,
  socialLinks,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
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
    href: "https://veridat.io",
    github: "",
  },
  {
    title: "Lingo — Language Learning App",
    description:
      "QA for a Duolingo-style mobile and web language learning platform. Covered lesson flows, streak/gamification logic, push notifications, in-app purchases, and cross-platform compatibility across iOS and Android.",
    tags: ["Appium", "Mobile Testing", "Exploratory Testing", "Jira"],
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop",
    href: "",
    github: "",
  },
  {
    title: "DaticsAI Internal Dashboard",
    description:
      "Functional and regression testing for an internal analytics dashboard used by the DaticsAI team. Validated data visualizations, role-based access control, export features, and real-time data refresh.",
    tags: ["Manual Testing", "Regression", "API Testing", "Postman"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    href: "",
    github: "",
  },
];

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus("sent");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <main className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
          >
            {APP_NAME}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mt-2">
              {APP_TAGLINE}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {APP_DESCRIPTION}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={CTA_PRIMARY.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              {CTA_PRIMARY.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              About Me
              <User size={16} />
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mt-10">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                aria-label={s.label}
              >
                <Globe size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text content */}
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Quality-first mindset,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> every release.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">{ABOUT_BIO}</p>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Mail size={15} className="text-purple-400 shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-purple-400 transition-colors">{CONTACT_INFO.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Phone size={15} className="text-purple-400 shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin size={15} className="text-purple-400 shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Globe size={15} className="text-purple-400 shrink-0" />
                  <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-purple-500/40 text-white/50 hover:text-purple-400 text-sm transition-all duration-200"
                  >
                    <Globe size={14} />
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Profile photo */}
            <motion.div
              variants={slideInRight}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Decorative glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/40 to-indigo-500/40 blur-xl" />
                {/* Photo frame */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Rao Muhammad Ali"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 rounded-xl px-4 py-2 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-white/70">Available for work</span>
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
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Skills</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack & Expertise</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={scaleIn}
                  className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/25 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                        <ChevronRight size={12} className="text-purple-400/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">QA Work & Case Studies</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <TiltCard className="h-full">
                    <div className="group relative h-full flex flex-col rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        {/* Links overlay */}
                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {project.href && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-purple-400 transition-colors"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-purple-400 transition-colors"
                            >
                              <Code2 size={14} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5">
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

              <div className="flex flex-col gap-10">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(168,85,247,0.6)]" />

                    <div className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/20 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1">
                            <span className="text-purple-400 font-medium text-sm">{exp.company}</span>
                            <span className="flex items-center gap-1 text-xs text-white/40">
                              <MapPin size={11} />{exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="flex items-center gap-1.5 text-xs text-white/40">
                            <Calendar size={11} />{exp.period}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-2 mb-4">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-sm text-white/55">
                            <CheckCircle size={13} className="text-purple-400/70 shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {exp.projects && exp.projects.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Projects</p>
                          <div className="flex flex-col gap-3">
                            {exp.projects.map((proj, pi) => (
                              <div key={pi} className="p-3 rounded-xl bg-white/3 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                  <Star size={12} className="text-purple-400" />
                                  {proj.url ? (
                                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-purple-400 transition-colors flex items-center gap-1">
                                      {proj.name} <ExternalLink size={11} />
                                    </a>
                                  ) : (
                                    <span className="text-sm font-medium text-white">{proj.name}</span>
                                  )}
                                </div>
                                <ul className="flex flex-col gap-1">
                                  {proj.highlights.map((h, hi) => (
                                    <li key={hi} className="flex items-start gap-2 text-xs text-white/45">
                                      <ChevronRight size={11} className="text-purple-400/50 shrink-0 mt-0.5" />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="mt-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-6">Education</p>
              <div className="flex flex-col gap-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/8 bg-white/3">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                          <GraduationCap size={18} />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                          <p className="text-sm text-purple-400">{edu.institution}</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <Calendar size={11} />{edu.period}
                      </span>
                    </div>
                    {edu.awards && edu.awards.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">Awards & Roles</p>
                        <ul className="flex flex-col gap-2">
                          {edu.awards.map((award, ai) => (
                            <li key={ai} className="flex items-start gap-2 text-xs text-white/50">
                              <Award size={12} className="text-purple-400/70 shrink-0 mt-0.5" />
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            {CERTIFICATIONS.length > 0 && (
              <motion.div variants={fadeInUp} className="mt-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-6">Certifications</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/3">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                        <Shield size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                        <p className="text-xs text-purple-400 mt-0.5">{cert.issuer}</p>
                        <p className="text-xs text-white/45 mt-1">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-white/50 max-w-lg mx-auto">
                Have a project that needs quality assurance? I'd love to hear about it.
              </p>
            </motion.div>

            <motion.form
              ref={formRef}
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-500/20"
              >
                {formStatus === "sending" ? (
                  <>
                    <Clock size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : formStatus === "sent" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Mail size={16} />
                    Send Message
                  </>
                )}
              </button>

              {formStatus === "sent" && (
                <p className="text-center text-sm text-green-400/80">
                  Thanks! I'll get back to you soon.
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
