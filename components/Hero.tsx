"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, MapPin, Mail, Phone } from "lucide-react";
import type { PortfolioData } from "../data/portfolio";

const computeBasePath = () => {
  const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
  if (envBase) return envBase;
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (parts.length > 0) return `/${parts[0]}`;
  }
  return "";
};

const kineticHeadlines = ["Business Analytics", "Data-Driven Strategy", "Consulting & Problem Solving","Business Insights",
  "Strategic Thinking",
  "Structured Thinking"];

type HeroProps = {
  personalInfo: PortfolioData["personalInfo"];
  resumeHref?: string;
  experienceHighlight?: string;
};

export function Hero({ personalInfo, resumeHref, experienceHighlight }: HeroProps) {
  const basePath = computeBasePath();
  const withBase = (path: string) => `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
  const resumeLink = withBase(resumeHref ?? personalInfo.resumeUrl ?? "/Shubham_Bhatt_resume.pdf");
  const { heroImage } = personalInfo;
  const heroSrc = withBase(heroImage.src);

  return (
    <section id="hero" className="grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Strategic Thinker & Problem Solver</span>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <LineChart className="h-4 w-4 text-data" />
            Bridging Analytics & Business Strategy
          </span>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl font-display leading-tight text-white sm:text-5xl"
            >
              {personalInfo.headline.includes("DataOps") ? (
                <>
                  Bridging <span className="text-data">DataOps Engineering</span> &{" "}
                  <span className="text-gold">Business Strategy</span>
                </>
              ) : (
                personalInfo.headline
              )}
            </motion.h1>
            <p className="mt-3 text-lg text-slate-300">
              {personalInfo.title} · {personalInfo.subTitle}
            </p>
            <div className="kinetic-stack mt-4 flex flex-wrap gap-2">
              {kineticHeadlines.map((text, idx) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.14 + 0.25, duration: 0.9, ease: "easeOut" }}
                  className="kinetic-pill"
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </div>
          <p className="max-w-2xl text-lg text-slate-300">
            
            Shubham Bhatt works at the intersection of analytics and business strategy. He focuses on turning complex data into clear insights that help leaders make better, more informed decisions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-data to-gold px-5 py-3 text-sm font-semibold text-night shadow-glow transition"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-data hover:text-data"
          >
            Let's Connect
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
            <MapPin className="h-4 w-4 text-gold" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
            <Mail className="h-4 w-4 text-data" />
            <a className="hover:text-white focus-visible:outline-none" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
            <Phone className="h-4 w-4 text-gold" />
            <a className="hover:text-white focus-visible:outline-none" href={`tel:${personalInfo.phone}`}>
              {personalInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
            <LineChart className="h-4 w-4 text-data" />
            <span>{experienceHighlight ?? "DataOps Engineer · 2 years"}</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-3xl bg-white/5 blur-3xl" />
        <motion.div
          whileHover={{ rotate: -0.5, scale: 1.01 }}
          className="glass relative z-10 w-full rounded-3xl p-6 shadow-card"
        >
          <div className="overflow-hidden rounded-2xl border border-gold/60 bg-white/5 shadow-[0_15px_60px_rgba(245,158,11,0.25)]">
            <Image
              src={heroSrc}
              alt={heroImage.alt}
              width={960}
              height={1280}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Dual Persona</p>
              <p className="text-lg font-display text-white">Tech × Strategy</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Credentials</p>
              <p className="text-sm text-slate-200">MBA (Strategy & Consulting) · Exe PGP in Data Science (IIIT Bangalore)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

