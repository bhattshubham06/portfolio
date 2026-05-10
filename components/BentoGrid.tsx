"use client";

import Image from "next/image";
import { Award, BriefcaseBusiness, Lightbulb, Wrench } from "lucide-react";
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

type BentoProps = {
  skills: PortfolioData["skills"];
  achievements: PortfolioData["achievements"];
  certifications: PortfolioData["certifications"];
};

const certificationImageMap: Record<string, string> = {
  "BCG Introduction to Strategy Consulting Job Simulation": "/BCG Introduction to Strategy Consulting Job.png",
  "Google Data Analytics Professional Certificate": "/Google Data Analytics.jpeg",
  "Machine Learning Specialization": "/Machine Learning.jpeg"
};

export function BentoGrid({ skills, achievements, certifications }: BentoProps) {
  const basePath = computeBasePath();

  return (
    <section id="matrix" className="space-y-6" aria-labelledby="matrix-heading">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 id="matrix-heading" className="section-title">
            Skills, tools, and credentials
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="section-shell card-interactive lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Analytics toolkit</h3>
            <Wrench className="h-5 w-5 text-data" />
          </div>
          <p className="text-sm text-slate-600">
            Core analytical stack used for business analysis, modeling, and insight communication.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="section-shell card-interactive">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Professional profile</h3>
            <BriefcaseBusiness className="h-5 w-5 text-data" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src={`${basePath}/Shubham_photo_2.jpeg`}
              alt="Shubham Bhatt portrait"
              width={900}
              height={1100}
              className="h-56 w-full object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Building a business-tech profile grounded in structured thinking, clear communication, and measurable outcomes.
          </p>
        </article>

        <article className="section-shell card-interactive">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Strategic strengths</h3>
            <Lightbulb className="h-5 w-5 text-data" />
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {skills.strategic.map((item) => (
              <li key={item} className="surface-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell card-interactive">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Business tools</h3>
            <Wrench className="h-5 w-5 text-data" />
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.applications.map((tool) => (
              <span key={tool} className="chip">
                {tool}
              </span>
            ))}
          </div>
        </article>

        <article className="section-shell card-interactive">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Certifications</h3>
            <Award className="h-5 w-5 text-data" />
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {certifications.map((item) => (
              <li key={item} className="surface-muted">
                <div className="space-y-2">
                  <div className="font-medium text-slate-800">{item}</div>
                  {certificationImageMap[item] ? (
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <Image
                        src={`${basePath}${encodeURI(certificationImageMap[item])}`}
                        alt={`${item} certificate`}
                        width={900}
                        height={600}
                        className="h-36 w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell card-interactive lg:col-span-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Achievements</h3>
            <div className="space-y-2">
              {achievements.map((item) => (
                <div key={item} className="surface-muted text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BentoGrid;
