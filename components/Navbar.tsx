"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#matrix", label: "Bento" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" }
];

export function Navbar() {
  const [active, setActive] = useState<string>("#hero");
  const [isOpen, setIsOpen] = useState(false);

  const linkIds = useMemo(() => navLinks.map((link) => link.href.replace("#", "")), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    linkIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [linkIds]);

  useEffect(() => {
    const handler = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass accent-border flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 backdrop-saturate-150"
      >
        <div className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-slate-200">
          <Sparkles className="h-4 w-4 text-gold" />
          Shubham Bhatt
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-slate-200 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/messaging/compose/"
            className="group hidden items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 shadow-glow transition hover:bg-white/10 md:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-data hover:text-data md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-0.5 w-4 bg-current" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="glass mt-2 w-full max-w-6xl rounded-2xl border border-white/10 p-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm transition ${
                  active === link.href ? "bg-white/10 text-white" : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/messaging/compose/"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-data to-gold px-3 py-3 text-sm font-semibold text-night shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;

