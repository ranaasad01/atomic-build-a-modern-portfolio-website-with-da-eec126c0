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

// ─── Experience (local fallback, prefer lib/data) ─────────────────────────────
const LOCAL_EXPERIENCE = [
  {
    role: "Software Quality Assurance Engineer",
    company: "DaticsAI",
    location: "Lahore, Pakistan",
    period: "Oct 2025 – Present",
    type: "Full-time",
    bullets: [
      "Performed API testing to validate request/response behavior, data integrity, and error handling.",
      "Conducted extensive testing on Desktop applications across macOS, Linux, and Windows.",
      "Executed manual test cases for Web applications covering functional, regression, and exploratory testing.",
      "Used Playwright for test automation of critical user flows.",
      "Collaborated with developers in Agile/Scrum sprints using Jira and ClickUp.",
    ],
  },
];

const experienceData = (EXPERIENCE && EXPERIENCE.length > 0) ? EXPERIENCE : LOCAL_EXPERIENCE;

export default function HomePage() {
  const contactRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value ?? "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="relative z-10">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
          >
            {APP_NAME ?? "Portfolio"}
          </motion.h1>

          {/* Tagline */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {APP_TAGLINE ?? ""}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {APP_DESCRIPTION ?? ""}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href={CTA_PRIMARY?.href ?? "#projects"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              {CTA_PRIMARY?.label ?? "View My Work"}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get in Touch
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            {(socialLinks ?? []).map((s) => (
              <a
                key={s?.label ?? s?.href}
                href={s?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
                aria-label={s?.label ?? ""}
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text */}
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                About Me
              </p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Ensuring quality at{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  every layer
                </span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">{ABOUT_BIO ?? ""}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Location", value: CONTACT_INFO?.location ?? "", icon: <MapPin size={14} /> },
                  { label: "Email", value: CONTACT_INFO?.email ?? "", icon: <Mail size={14} /> },
                  { label: "Phone", value: CONTACT_INFO?.phone ?? "", icon: <Phone size={14} /> },
                  { label: "Status", value: "Open to Work", icon: <Star size={14} /> },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-white/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Let's connect <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Visual card */}
            <motion.div variants={slideInRight} className="flex justify-center">
              <TiltCard className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-purple-500/30">
                    {(APP_NAME ?? "R").charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{APP_NAME ?? ""}</p>
                    <p className="text-sm text-purple-400">{APP_TAGLINE ?? ""}</p>
                  </div>
                  <div className="w-full border-t border-white/10 pt-4 grid grid-cols-3 gap-2 text-center">
                    {[
                      { label: "Projects", value: (projects?.length ?? 0).toString() },
                      { label: "Tools", value: "10+" },
                      { label: "Certs", value: (CERTIFICATIONS?.length ?? 0).toString() },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-white/40">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
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
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Expertise
              </p>
              <h2 className="text-4xl font-bold text-white">
                Skills &{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Tech Stack
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(SKILLS ?? []).map((skill) => (
                <motion.div key={skill?.category ?? ""} variants={scaleIn}>
                  <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-purple-400">{skill?.icon}</span>
                      <h3 className="text-sm font-semibold text-white">{skill?.category ?? ""}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {(skill?.items ?? []).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                          <ChevronRight size={12} className="text-purple-500 flex-shrink-0" />
                          {item ?? ""}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
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
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Portfolio
              </p>
              <h2 className="text-4xl font-bold text-white">
                Featured{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(projects ?? []).map((project) => (
                <motion.div key={project?.title ?? ""} variants={fadeInUp}>
                  <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition-colors duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project?.image ?? ""}
                        alt={project?.title ?? ""}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-semibold text-white mb-2">{project?.title ?? ""}</h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{project?.description ?? ""}</p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(project?.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs"
                          >
                            {tag ?? ""}
                          </span>
                        ))}
                      </div>
                      {/* Links */}
                      <div className="flex gap-3">
                        {project?.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <ExternalLink size={12} /> Live
                          </a>
                        ) : null}
                        {project?.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white/70 transition-colors"
                          >
                            <Code2 size={12} /> GitHub
                          </a>
                        ) : null}
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Career
              </p>
              <h2 className="text-4xl font-bold text-white">
                Work{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-transparent" />

              <div className="flex flex-col gap-10">
                {(experienceData ?? []).map((exp, idx) => (
                  <motion.div key={`${exp?.company ?? ""}-${idx}`} variants={fadeInUp} className="relative pl-16">
                    {/* Dot */}
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 border-2 border-[#0a0a0a] shadow-lg shadow-purple-500/40" />

                    <TiltCard className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-base font-semibold text-white">{exp?.role ?? ""}</h3>
                          <p className="text-sm text-purple-400 font-medium">{exp?.company ?? ""}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                            <Calendar size={11} /> {exp?.period ?? ""}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                            <MapPin size={11} /> {exp?.location ?? ""}
                          </span>
                          {exp?.type ? (
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs">
                              {exp.type}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {(exp?.bullets ?? []).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-sm text-white/60">
                            <ChevronRight size={13} className="text-purple-500 flex-shrink-0 mt-0.5" />
                            {bullet ?? ""}
                          </li>
                        ))}
                      </ul>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-purple-400" /> Education
              </h3>
              <div className="flex flex-col gap-6">
                {(EDUCATION ?? []).map((edu, idx) => (
                  <TiltCard key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-colors duration-300">
                    <div className="flex flex-wrap justify-between gap-3 mb-3">
                      <div>
                        <p className="text-base font-semibold text-white">{edu?.degree ?? ""}</p>
                        <p className="text-sm text-purple-400">{edu?.institution ?? ""}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                        <Calendar size={11} /> {edu?.period ?? ""}
                      </span>
                    </div>
                    {(edu?.awards ?? []).length > 0 && (
                      <div className="mt-3 border-t border-white/10 pt-3">
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Awards & Roles</p>
                        <ul className="flex flex-col gap-2">
                          {(edu?.awards ?? []).map((award, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-sm text-white/60">
                              <Award size={12} className="text-purple-500 flex-shrink-0 mt-0.5" />
                              {award ?? ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </TiltCard>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            {(CERTIFICATIONS ?? []).length > 0 && (
              <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-purple-400" /> Certifications
                </h3>
                <div className="flex flex-col gap-4">
                  {(CERTIFICATIONS ?? []).map((cert, idx) => (
                    <TiltCard key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-purple-500/30 transition-colors duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Shield size={14} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{cert?.title ?? ""}</p>
                          <p className="text-xs text-purple-400">{cert?.issuer ?? ""}</p>
                          {cert?.description ? (
                            <p className="text-xs text-white/50 mt-1">{cert.description}</p>
                          ) : null}
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                Get In Touch
              </p>
              <h2 className="text-4xl font-bold text-white">
                Let's{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>
              <p className="text-white/50 mt-4 max-w-lg mx-auto">
                Have a project in mind or want to discuss QA opportunities? I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact info */}
              <motion.div variants={slideInLeft} className="lg:col-span-2 flex flex-col gap-5">
                {[
                  { icon: <Mail size={18} />, label: "Email", value: CONTACT_INFO?.email ?? "", href: `mailto:${CONTACT_INFO?.email ?? ""}` },
                  { icon: <Phone size={18} />, label: "Phone", value: CONTACT_INFO?.phone ?? "", href: `tel:${(CONTACT_INFO?.phone ?? "").replace(/[^+\d]/g, "")}` },
                  { icon: <MapPin size={18} />, label: "Location", value: CONTACT_INFO?.location ?? "", href: "" },
                  { icon: <Briefcase size={18} />, label: "LinkedIn", value: "linkedin.com/in/raomuhammadali", href: CONTACT_INFO?.linkedin ?? "" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-purple-400 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-white/70 hover:text-purple-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/70">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Form */}
              <motion.div variants={slideInRight} className="lg:col-span-3">
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <p className="text-lg font-semibold text-white">Message sent!</p>
                    <p className="text-sm text-white/50">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form ref={contactRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-400">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <Clock size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Mail size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
