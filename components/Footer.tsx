"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowUp } from 'lucide-react';
import { navLinks, APP_NAME, APP_TAGLINE, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

export default function Footer() {
  const pathname = usePathname();

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function getHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <div className="mb-4">
              <p className="text-lg font-semibold tracking-tight text-white">
                {APP_NAME}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/30 mt-0.5">
                {APP_TAGLINE}
              </p>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Building thoughtful digital products with clean code and sharp design sensibility.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + contact */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    <span className="text-white/30 group-hover:text-purple-400 transition-colors duration-200">
                      {iconMap[social.icon]}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {APP_NAME}. Crafted with care.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-purple-400 transition-colors duration-200 group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <span className="p-1 rounded border border-white/10 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all duration-200">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}