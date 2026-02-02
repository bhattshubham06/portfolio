"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { BarChart3, Award, ShieldCheck, Target, Trophy } from "lucide-react";
import type { PortfolioData } from "../data/portfolio";

const skillIconMap: Record<string, JSX.Element> = {
  Python: (
    <svg viewBox="0 0 32 32" aria-hidden className="h-6 w-6">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.016 2C10.819 2 9.038 3.725 9.038 5.852v2.667h6.885v.74H5.978C3.781 9.259 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.259c0-2.127 1.781-3.852 3.978-3.852h7.344c1.859 0 3.366-1.459 3.366-3.259V5.852C22.962 3.725 21.181 2 18.984 2zm-.918 4.741a1.377 1.377 0 1 1 0-2.667 1.377 1.377 0 0 1 0 2.667z"
        fill="url(#py-a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.983 30c2.197 0 3.978-1.724 3.978-3.852v-2.667h-6.885v-.74h10.946c2.197 0 3.978-1.725 3.978-3.852v-5.778c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.259c0 2.127-1.781 3.852-3.978 3.852h-7.344c-1.859 0-3.366 1.459-3.366 3.259v6.519C9.038 28.275 10.819 30 13.016 30zm.918-4.741a1.377 1.377 0 1 1 0 2.667 1.377 1.377 0 0 1 0-2.667z"
        fill="url(#py-b)"
      />
      <defs>
        <linearGradient id="py-a" x1="12.48" y1="2" x2="12.48" y2="22.741" gradientUnits="userSpaceOnUse">
          <stop stopColor="#327EBD" />
          <stop offset="1" stopColor="#1565A7" />
        </linearGradient>
        <linearGradient id="py-b" x1="19.519" y1="9.259" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFDA4B" />
          <stop offset="1" stopColor="#F9C600" />
        </linearGradient>
      </defs>
    </svg>
  ),
  SQL: (
    <svg viewBox="-8.78 0 70 70" aria-hidden className="h-6 w-6">
      <path
        d="M22.06 69.955c-6.55-.472-13.03-2.122-17-4.33-2.26-1.258-3.99-2.803-4.66-4.18l-.4-.82V34.917V9.21l.32-.646c1.42-2.89 5.96-5.494 12.3-7.056 2.15-.531 5.26-1.059 7.79-1.325 2.59-.272 9.45-.231 12.03.073 6.86.806 12.7 2.61 16.3 5.038 1.39.935 2.81 2.433 3.29 3.464l.42.884-.04 25.63-.03 25.63-.33.674c-.18.371-.74 1.101-1.23 1.622-2.99 3.172-9.41 5.518-17.83 6.517-1.72.204-9.17.369-10.93.242Z"
        fill="#00bcf2"
      />
    </svg>
  ),
  Tableau: (
    <svg viewBox="0 -201.5 512 512" aria-hidden className="h-6 w-6">
      <path
        d="M53.643 5.018v5.039h-9.012v3.277h9.012v10.036h3.523V13.334h9.238v-3.277h-9.238V0h-3.523zm-29.454 12.781v7.312H10.548v4.588h13.641v14.85h5.059v-14.85h13.846v-4.588H29.248V10.487h-5.059zm57.166 0v7.312H67.715v4.813h13.641v14.624h5.264V29.924h13.642v-4.813H86.62V10.487h-5.264zm-29.024 24.906v8.193H37.155v6.104h15.177v16.386h6.145V57.003h15.177v-6.104H58.477V34.513h-6.145zm43.75 4.138v5.141h-9.238v4.158h9.238v10.262h4.608V51.983h9.238V46.842h-9.238V41.723h-4.608zm-87.951.45v4.916H0v3.482h9.012v9.831h3.523v-9.831l9.238-.328v-3.154h-9.238v-9.832H9.012zm15.178 23.145v7.312H10.548v4.814h13.641v14.624h5.264V82.565h13.641v-4.814H29.454V63.127h-5.264zm57.166 0v7.312H67.715v4.588h13.641v14.85h5.264v-14.85h13.642v-4.588H86.62V63.127h-5.264zm-28.143 18.578v5.121H43.976v4.158h9.237v10.262h4.609V98.295h9.237v-5.121h-9.237V83.875h-4.609z"
        fill="#7099A6"
      />
      <path
        d="M337.263 21.834v62.267h-7.025V21.834zm-174.571 8.746v19.868h18.905v6.554h-18.905v21.404h-7.025V56.002h-18.905v-6.554h18.905V30.58z"
        fill="#1F447E"
      />
    </svg>
  ),
  Pandas: (
    <svg viewBox="0 0 128 128" aria-hidden className="h-6 w-6">
      <path d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z" fill="#130754" />
      <path d="M48.697 48.037h12.25v12.001h-12.25z" fill="#ffca00" />
      <path d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z" fill="#130754" />
      <path d="M67.97 68.983h12.25v12.001H67.97z" fill="#e70488" />
      <path d="M87.238 8.55h12.25v84.552h-12.25z" fill="#130754" />
    </svg>
  ),
  "Scikit-learn": (
    <svg viewBox="0 0 128 128" aria-hidden className="h-6 w-6">
      <path
        fill="#f89939"
        d="M98.18 88.13c15.63-15.62 18.23-38.36 5.8-50.78-12.43-12.42-35.17-9.82-50.8 5.8-15.63 15.62-11.11 45.48-5.8 50.78 4.29 4.29 35.17 9.82 50.8-5.8Z"
      />
      <path
        fill="#3499cd"
        d="M34.04 65.56c-9.07-9.06-22.27-10.57-29.48-3.37-7.21 7.21-5.7 20.4 3.37 29.46 9.07 9.07 26.4 6.44 29.48 3.37 2.49-2.49 5.71-20.4-3.37-29.46Z"
      />
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 32 32" aria-hidden className="h-6 w-6">
      <path
        d="M28.781 4.405H18.651V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095Z"
        fill="#20744a"
      />
      <path d="M22.487 7.439h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323z" fill="#20744a" />
      <path
        d="m6.347 10.673 2.146-.123 1.349 3.709 1.594-3.862 2.146-.123-2.606 5.266 2.606 5.279-2.269-.153-1.532-4.024-1.533 3.871-2.085-.184 2.422-4.663z"
        fill="#fff"
      />
    </svg>
  ),
  "Data Mining": (
    <svg viewBox="0 0 448 512" aria-hidden className="h-6 w-6">
      <path
        fill="#00bcf2"
        d="M198.15 257.89c21.93 7.32 52.45 11.85 86.37 11.85 33.91 0 64.43-4.53 86.36-11.85 19.25-6.42 31.16-14.2 31.16-21.82 0-7.6-11.91-15.38-31.16-21.81-2.74-.91-5.63-1.79-8.64-2.61l26.54-8.28c16.76 7.57 27.46 17.37 29.58 28.57.31.87.48 1.82.48 2.8v230.3c0 15.96-30.5 30.09-42.67 34.15-23.63 7.89-56.05 12.77-91.65 12.77-35.62 0-68.04-4.88-91.66-12.77-12.45-4.16-42.41-17.82-42.41-34.15v-5.35c0-74.54-.17-149.09-.17-223.62 0-5 1.68-9.77 4.83-14.22l11.64-11.01c6.87-4.73 15.71-8.9 26.11-12.37 17.68-5.91 40.3-10.13 65.49-11.87a409.098 409.098 0 0 1 9.98 16.16c-27.38 1.19-51.8 5.37-70.18 11.5-40.85 13.63-41.97 29.62 0 43.63z"
      />
    </svg>
  )
};

const fallbackAbbrev = (skill: string) => {
  const cleaned = skill.replace(/[^A-Za-z]/g, "");
  return cleaned.slice(0, 3).toUpperCase() || "•";
};

const certificationCards = [
  { label: "Machine Learning Specialization", src: "/Machine Learning.jpeg" },
  { label: "Google Data Analytics Professional Certificate", src: "/Google Data Analytics.jpeg" },
  { label: "Gen AI with LLMs", src: "/GEN AI with LLMs.jpeg" },
  { label: "Data Science", src: "/Data Science.png" },
  {
    label: "Commonwealth Bank Introduction to Data Science Job Simulation",
    src: "/Commonwealth Bank Introduction to Data Science Job Simulation.png"
  },
  { label: "BCG Introduction to Strategy Consulting", src: "/BCG Introduction to Strategy Consulting Job.png" },
  {
    label: "Accenture Data Analytics & Visualization Job Simulation",
    src: "/Accenture Data Analytics and Visualization Jobs Simulation.png"
  }
];

const computeBasePath = () => {
  const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
  if (envBase) return envBase;
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (parts.length > 0) return `/${parts[0]}`;
  }
  return "";
};

type BentoProps = {
  skills: PortfolioData["skills"];
  achievements: PortfolioData["achievements"];
  education: PortfolioData["education"];
  certifications: PortfolioData["certifications"];
};

export function BentoGrid({ skills, achievements, education, certifications }: BentoProps) {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const selectedCert = certificationCards.find((c) => c.label === expandedCert);
  const basePath = computeBasePath();

  const toggleCert = useCallback((label: string) => {
    setExpandedCert((prev) => (prev === label ? null : label));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedCert(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="matrix" className="space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Strategic Matrix</p>
          <h2 className="font-display text-3xl text-white">Professional Toolkit</h2>
        </div>
        <Target className="h-8 w-8 text-data" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <div
          className="glass relative overflow-hidden rounded-3xl p-5 md:col-span-2 lg:col-span-2 md:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
          tabIndex={0}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl text-white">Technical Excellence</h3>
            <BarChart3 className="h-6 w-6 text-data" />
          </div>
          <p className="mt-2 text-sm text-slate-300">
            Python, SQL, Pandas, and Scikit-learn for reliable analytics that support strategic decision making.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {skills.technical.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-data">
                  {skillIconMap[item] ?? fallbackAbbrev(item)}
                </span>
                <span className="align-middle">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="glass flex h-full flex-col justify-between rounded-3xl p-5 md:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
          tabIndex={0}
        >
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-white">Strategic Leadership</h3>
              <ShieldCheck className="h-6 w-6 text-gold" />
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Strategy & consulting focus shaped through competitive wins and structured project delivery.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {achievements.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-sm text-slate-200">{item}</span>
                <Trophy className="h-4 w-4 text-data" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="glass overflow-hidden rounded-3xl p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
          tabIndex={0}
        >
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={`${basePath}/Shubham_photo_2.jpeg`}
              alt="Shubham Bhatt portrait"
              width={900}
              height={1100}
              className="h-60 w-full object-cover sm:h-64 md:h-80"
            />
          </div>
          <div className="p-5 space-y-2">E
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400">xecutive Profile</p>
            <p className="font-display text-xl text-white">Strategy & Analytics Problem Solver</p>
            <p className="text-sm text-slate-300">
              Blending analytical rigor with business thinking to turn data into clear, decision ready insights.
            </p>
          </div>
        </div>

        <div
          className="glass rounded-3xl p-5 md:col-span-2 lg:col-span-2 md:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
          tabIndex={0}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl text-white">Certifications &amp; Job Simulations</h3>
            <Award className="h-6 w-6 text-gold" />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {certificationCards.map((item) => {
              const expanded = expandedCert === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => toggleCert(item.label)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCert(item.label);
                    }
                  }}
                  className={`flex min-h-[220px] flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left text-sm text-slate-200 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data ${
                    expanded ? "border-data/60 shadow-[0_12px_40px_rgba(59,130,246,0.25)]" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src={`${basePath}${encodeURI(item.src)}`}
                      alt={item.label}
                      width={600}
                      height={360}
                      className={`w-full transition-all duration-200 ${expanded ? "h-32 object-cover" : "h-28 object-cover"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white leading-snug">{item.label}</p>
                    <p className="text-xs text-slate-400">{expanded ? "Tap again to collapse" : "Tap to expand"}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.label}
            onClick={() => setExpandedCert(null)}
          >
            <div
              className="relative w-full max-w-5xl rounded-2xl bg-night/95 p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedCert(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
              >
                Close
              </button>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-display text-white">{selectedCert.label}</p>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/70">
                  <Image
                    src={`${basePath}${encodeURI(selectedCert.src)}`}
                    alt={selectedCert.label}
                    width={1400}
                    height={900}
                    className="max-h-[75vh] w-full object-contain bg-black"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className="glass rounded-3xl p-5 md:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
          tabIndex={0}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl text-white">Recent Education</h3>
            <ShieldCheck className="h-6 w-6 text-data" />
          </div>
          <div className="mt-4 space-y-3">
            {education.slice(0, 2).map((item) => (
              <div key={item.institution} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                <p className="font-semibold text-white">{item.degree}</p>
                <p className="text-slate-300">{item.institution}</p>
                <p className="text-xs text-slate-400">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;

