"use client";

import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, LineChart, Mail, MapPin, Phone } from "lucide-react";
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
    <section id="hero" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">MBA Strategy & Consulting</span>
          <span className="chip">Analytics + AI</span>
          <span className="chip">Business-Technology Bridge</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-display leading-tight text-slate-900 sm:text-5xl">
            {personalInfo.headline}
          </h1>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            {personalInfo.aboutMe}
          </p>
          <p className="text-sm font-medium text-slate-500">{personalInfo.title}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn-primary group"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="surface-muted flex items-center gap-3 text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-data" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="surface-muted flex items-center gap-3 text-sm text-slate-700">
            <Mail className="h-4 w-4 text-data" />
            <a className="hover:text-slate-900 focus-visible:outline-none" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
          </div>
          <div className="surface-muted flex items-center gap-3 text-sm text-slate-700">
            <Phone className="h-4 w-4 text-data" />
            <a className="hover:text-slate-900 focus-visible:outline-none" href={`tel:${personalInfo.phone}`}>
              {personalInfo.phone}
            </a>
          </div>
          <div className="surface-muted flex items-center gap-3 text-sm text-slate-700">
            <LineChart className="h-4 w-4 text-data" />
            <span>{experienceHighlight ?? "MBA Strategy & Consulting candidate"}</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="section-shell relative z-10 w-full p-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
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
            <div className="surface-muted">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Positioning</p>
              <p className="text-base font-semibold text-slate-900">Business + Analytics + AI</p>
            </div>
            <div className="surface-muted">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Current Focus</p>
              <p className="text-sm text-slate-700">Consulting-style problem solving with measurable business outcomes</p>
            </div>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-slate-500">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Open to consulting, analytics, and business-tech internship opportunities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

