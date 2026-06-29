"use client";

import { useState, useRef } from "react";
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
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: <Layers size={20} /> },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"], icon: <Terminal size={20} /> },
  { category: "Tooling", items: ["Git", "Docker", "Vercel", "Figma", "CI/CD"], icon: <Zap size={20} /> },
  { category: "Principles", items: ["Accessible UI", "Performance", "Clean Code", "System Design", "Agile"], icon: <Star size={20} /> },
];

const projects = [
  {
    title: "Orbit Dashboard",
    description: "A real-time analytics platform for SaaS teams. Built with Next.js, Recharts, and a Postgres backend. Handles 50k+ events per day with sub-100ms query times.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    image: "https://support.bostondynamics.com/servlet/rtaImage?eid=ka0US0000008SAP&feoid=00N6g00000RYCWq&refid=0EMUS00000MNQ5D",
    href: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Forma Design System",
    description: "An open-source component library with 40+ accessible, themeable components. Used by 200+ developers on GitHub.",
    tags: ["React", "Storybook", "Radix UI", "Tailwind"],
    image: "https://jf-mm.com/wp-content/webpc-passthru.php?src=https://jf-mm.com/wp-content/uploads/2020/03/FORMA-1200x858.png&nocache=1",
    href: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Pulse API Gateway",
    description: "A lightweight API gateway with rate limiting, JWT auth, and request logging. Deployed on Docker with zero-downtime rolling updates.",
    tags: ["Node.js", "Docker", "Redis", "JWT"],
    image: "https://cdn.chipkin.com/assets/uploads/2017/mar/10-13-04-59_CAS2700-53%20Pulse%20Gateway%20Connection%20Diagram.jpg",
    href: "https://github.com",
    live: null,
    featured: false,
  },
  {
    title: "Cartographer",
    description: "An interactive map-based travel journal. Users pin locations, attach photos, and share itineraries. Built with Mapbox GL and Supabase.",
    tags: ["React", "Mapbox", "Supabase", "Cloudinary"],
    image: "https://cdn.thecollector.com/wp-content/uploads/2024/06/famous-cartographers-know-about.jpg",
    href: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Vercel",
    period: "2022 — Present",
    description: "Lead the design system team, shipping accessible components used across vercel.com and the dashboard. Reduced bundle size by 34% through code-splitting and tree-shaking initiatives.",
    highlights: ["Design system ownership", "34% bundle reduction", "Mentored 4 junior engineers"],
  },
  {
    role: "Full-Stack Developer",
    company: "Linear",
    period: "2020 — 2022",
    description: "Built core product features including the notification system, keyboard shortcut engine, and real-time collaboration layer using CRDTs.",
    highlights: ["Real-time collaboration", "Keyboard shortcut engine", "CRDT implementation"],
  },
  {
    role: "Frontend Developer",
    company: "Framer",
    period: "2018 — 2020",
    description: "Developed interactive prototyping tools and contributed to the canvas rendering engine. Shipped the component variants feature used by 100k+ designers.",
    highlights: ["Canvas rendering", "Component variants", "100k+ users impacted"],
  },
];

const testimonials = [
  {
    quote: "Alex shipped our entire design system in 6 weeks. The quality and attention to accessibility was beyond what we expected.",
    author: "Sarah Chen",
    role: "Head of Product, Orbit",
    avatar: "https://cdn.tatlerasia.com/tatlerasia/i/2023/10/18163147-untitled-design-4_cover_1600x938.jpg",
  },
  {
    quote: "One of the sharpest engineers I've worked with. Alex has a rare ability to bridge design intent and technical execution perfectly.",
    author: "Marcus Webb",
    role: "CTO, Linear",
    avatar: "https://www.twincities.com/wp-content/uploads/2015/10/wpid-20130812__1-jmarcus-webb.jpg?w=1600&resize=1600,900",
  },
  {
    quote: "The API gateway Alex built handles our entire production traffic. Reliable, fast, and beautifully documented.",
    author: "Priya Nair",
    role: "Engineering Lead, Pulse",
    avatar: "https://images.ctfassets.net/vztl6s0hp3ro/26BxtJGxXUMSWAQfPZfbVC/3838688bab3369fc3e6ee9bf9629a427/The-entry-level-listing-asking-for_-3-plus-years-of-experience.jpg",
  },
];

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Open-source packages" },
  { value: "200k+", label: "Users reached" },
];

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

// ─── Contact form state type ─────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  message: string;
};

// ─── Page component ──────────────────────────────────────────────────────────

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const motionProps = shouldReduceMotion
    ? {}
    : { variants: fadeInUp, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-24 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase">
                  <Sparkles size={12} />
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
              >
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  {APP_NAME}
                </span>
              </motion.h1>

              <motion.p
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg text-pretty"
              >
                {APP_DESCRIPTION} I care deeply about performance, accessibility, and the craft of building things that last.
              </motion.p>

              <motion.div
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  href={CTA_PRIMARY.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(147,51,234,0.3)] hover:shadow-[0_0_32px_rgba(147,51,234,0.5)] hover:-translate-y-0.5"
                >
                  {CTA_PRIMARY.label}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get in touch
                </a>
              </motion.div>

              <motion.div
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="flex items-center gap-4 pt-2"
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/30 hover:text-purple-400 transition-colors duration-200"
                  >
                    {iconMap[s.icon]}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: avatar + stats */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInRight}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {/* Avatar card */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/30 to-indigo-500/20 blur-sm" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGu9lpcArTPyg/profile-displayphoto-scale_200_200/B4EZtrngOMKkAY-/0/1767037076807?e=2147483647&v=beta&t=g55DujymyuQdQJW6k4Inxt2b3VY0pX_lyKk3Y3x8Aq4"
                    alt="Alex Rivera, Creative Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-white/70 font-medium">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.03] border border-white/8 rounded-xl p-4 text-center hover:bg-white/[0.06] transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-white/40 mt-0.5 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <ArrowDown size={14} className="animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image / visual */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
                <img
                  src="https://img.a.transfermarkt.technology/portrait/big/27523-1763050290.jpg?lm=1"
                  alt="Alex's workspace"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#161616] border border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2.5">
                  <Code size={16} className="text-purple-400" />
                  <div>
                    <p className="text-xs font-semibold text-white">6+ years</p>
                    <p className="text-[10px] text-white/40">building for the web</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                About me
              </motion.p>
              <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                I build software that feels as good as it works
              </motion.h2>
              <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-white/60 leading-relaxed text-pretty">
                I&apos;m a full-stack developer based in San Francisco with a background in both engineering and visual design. I started writing code at 16, building small tools for my school&apos;s robotics team, and never stopped.
              </motion.p>
              <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-white/60 leading-relaxed text-pretty">
                Today I specialize in React ecosystems and Node.js backends, with a strong focus on developer experience and product quality. I&apos;ve worked at companies like Vercel, Linear, and Framer, shipping features used by hundreds of thousands of people.
              </motion.p>
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="flex flex-wrap gap-2 pt-2">
                {["San Francisco, CA", "Open to remote", "Full-time or contract"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 font-medium">
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200 group"
                >
                  Download resume
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 mb-16 max-w-xl"
          >
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
              Skills
            </motion.p>
            <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
              Tools I reach for every day
            </motion.h2>
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-white/50 leading-relaxed">
              A curated set of technologies I&apos;ve used in production, chosen for reliability, developer experience, and long-term maintainability.
            </motion.p>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-purple-400 group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </span>
                  <p className="text-sm font-semibold text-white">{skill.category}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle size={12} className="text-purple-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 mb-16 max-w-xl"
          >
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
              Projects
            </motion.p>
            <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
              Things I&apos;ve built
            </motion.h2>
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-white/50 leading-relaxed">
              A selection of projects ranging from open-source libraries to production SaaS products.
            </motion.p>
          </motion.div>

          {/* Featured projects — large */}
          <div className="flex flex-col gap-6 mb-6">
            {projects.filter((p) => p.featured).map((project, i) => (
              <motion.div
                key={project.title}
                variants={shouldReduceMotion ? undefined : (i % 2 === 0 ? slideInLeft : slideInRight)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] hover:border-purple-500/20 transition-all duration-300 group ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className="relative h-56 lg:h-auto overflow-hidden lg:[direction:ltr]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/60 to-transparent" />
                </div>
                {/* Copy */}
                <div className="p-8 flex flex-col justify-center gap-4 lg:[direction:ltr]">
                  <p className="text-xs font-semibold tracking-widest uppercase text-purple-400">Featured project</p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200">
                      <Github size={15} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/50 hover:text-purple-400 transition-colors duration-200">
                        <ExternalLink size={15} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other projects — smaller grid */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {projects.filter((p) => !p.featured).map((project) => (
              <motion.div
                key={project.title}
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-purple-500/20 transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-200">
                      <Github size={13} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-purple-400 transition-colors duration-200">
                        <ExternalLink size={13} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 mb-16 max-w-xl"
          >
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
              Experience
            </motion.p>
            <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
              Where I&apos;ve worked
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent ml-[7px] hidden md:block" />

            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-10"
            >
              {experience.map((job, i) => (
                <motion.div
                  key={job.company}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="md:pl-10 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-[#0a0a0a] shadow-[0_0_12px_rgba(147,51,234,0.6)] hidden md:block" />

                  <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-purple-500/15 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-white">{job.role}</h3>
                        <p className="text-purple-400 text-sm font-medium">{job.company}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-white/35 font-medium shrink-0">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((h) => (
                        <span key={h} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-white/50">
                          <Activity size={10} className="text-purple-500/60" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 mb-16 max-w-xl"
          >
            <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
              Testimonials
            </motion.p>
            <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
              What people say
            </motion.h2>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className={`bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col gap-5 hover:border-purple-500/20 transition-all duration-300 ${i === 1 ? "md:mt-6" : ""}`}
              >
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={13} className="text-purple-400 fill-purple-400" />
                  ))}
                </div>
                <p className="text-white/65 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-purple-500/20 border border-white/10 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                Contact
              </motion.p>
              <motion.h2 variants={shouldReduceMotion ? undefined : fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
                Let&apos;s build something together
              </motion.h2>
              <motion.p variants={shouldReduceMotion ? undefined : fadeInUp} className="text-white/55 leading-relaxed text-pretty">
                I&apos;m currently open to full-time roles and select freelance projects. Whether you have a product idea, need a technical partner, or just want to say hello, my inbox is open.
              </motion.p>
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="flex flex-col gap-3 pt-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/30 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-200">
                      {iconMap[s.icon]}
                    </span>
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {submitted ? (
                <div className="bg-white/[0.03] border border-purple-500/20 rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    <CheckCircle size={22} className="text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message sent</h3>
                  <p className="text-white/50 text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-white/40 uppercase tracking-wider">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.25)] hover:shadow-[0_0_28px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2"
                  >
                    Send message
                    <ArrowRight size={15} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}