import { ArrowUpRight, BarChart3, GraduationCap, LineChart, MapPin, Shield } from "lucide-react";
import BentoGrid from "../components/BentoGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import portfolioData from "../data/portfolio";

const buildStar = (project: { objective: string; impact: string; metrics: string; tools: string[] }) => ({
  situation: project.objective,
  task: "Elevate performance with measurable risk or revenue impact.",
  action: `Implemented with ${project.tools.join(", ")} plus governance and telemetry.`,
  result: `${project.impact} · ${project.metrics}`
});

const processSteps = ["Discover", "Design", "Deliver"];

function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-mesh opacity-90" aria-hidden />
      <div className="grid-overlay absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div className="data-stream absolute inset-0" aria-hidden />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-data/20 blur-3xl animate-orb drift-delay-1" aria-hidden />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-orb drift-delay-2" aria-hidden />
    </div>
  );
}

export default function Home() {
  const { personalInfo, education, projects, experience, volunteering, skills, certifications, achievements } = portfolioData;
  const heroExperience = experience[0]?.role ? `${experience[0].role} · ${experience[0].duration}` : undefined;

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-slate-100">
      <AnimatedBackdrop />
      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-5 pb-20 pt-24 sm:gap-20 sm:px-6 sm:pb-24 sm:pt-28">
        <Hero personalInfo={personalInfo} resumeHref={personalInfo.resumeUrl} experienceHighlight={heroExperience} />

        <section id="about" className="space-y-6" aria-labelledby="about-heading">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Chapter 1 · Strategy DNA</p>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">About</p>
              <h2 id="about-heading" className="font-display text-3xl text-white">
                Credentials & pedigree
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.institution}
                className="glass rounded-xl p-4 text-sm text-slate-200"
                aria-label={`Education: ${item.degree} at ${item.institution}`}
              >
                <p className="font-semibold text-white">{item.degree}</p>
                <p className="text-slate-300">{item.institution}</p>
                <p className="text-xs text-slate-400">{item.duration}</p>
                {item.location && <p className="text-xs text-slate-400">{item.location}</p>}
              </article>
            ))}
          </div>
        </section>

        <BentoGrid
          skills={skills}
          achievements={achievements}
          education={education}
          certifications={certifications}
        />

        <section id="projects" className="space-y-8" aria-labelledby="projects-heading">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Chapter 2 · Case Studies</p>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Projects</p>
              <h2 id="projects-heading" className="font-display text-3xl text-white">
                Impact case studies (STAR)
              </h2>
            </div>
            <BarChart3 className="h-8 w-8 text-gold" aria-hidden />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => {
              const star = buildStar(project);
              const isFraudCase = project.title === "Credit Card Fraud Detection";
              return (
                <article
                  key={project.title}
                  className="glass rounded-3xl border border-white/10 p-6 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01] focus-within:-translate-y-1 focus-within:scale-[1.01]"
                  aria-label={`Case study: ${project.title}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl text-white">{project.title}</h3>
                      <p className="text-sm text-slate-400">{project.objective}</p>
                    </div>
                    <span className="max-w-[11rem] self-start rounded-full bg-white/10 px-3 py-2 text-[11px] leading-snug text-gold break-words text-right">
                      {project.metrics}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{project.impact}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200" aria-label="Tools used">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-200" aria-label="Process">
                    {processSteps.map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 uppercase tracking-[0.12em]"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                  {isFraudCase && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-data/90 to-gold/90 px-3 py-2 text-xs font-semibold text-night shadow-glow">
                      <Shield className="h-4 w-4" />
                      <span>$108,636 savings · Recall 75%</span>
                    </div>
                  )}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-night/60 p-4 text-xs text-slate-200">
                    <p className="font-semibold text-white">STAR</p>
                    <p className="mt-1">
                      <strong>Situation:</strong> {star.situation}
                    </p>
                    <p className="mt-1">
                      <strong>Task:</strong> {star.task}
                    </p>
                    <p className="mt-1">
                      <strong>Action:</strong> {star.action}
                    </p>
                    <p className="mt-1">
                      <strong>Result:</strong> {star.result}
                    </p>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-data transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      View repo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="space-y-6" aria-labelledby="education-heading">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Chapter 3 · Foundations</p>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Education</p>
              <h2 id="education-heading" className="font-display text-3xl text-white">
                Strategy & data foundations
              </h2>
            </div>
            <GraduationCap className="h-8 w-8 text-data" aria-hidden />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="glass rounded-3xl p-5" aria-label={`Education detail: ${item.institution}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">{item.duration}</p>
                    <h3 className="font-display text-xl text-white">{item.institution}</h3>
                    <p className="text-sm text-slate-300">{item.degree}</p>
                    {item.location && (
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                {item.score && <p className="mt-2 text-sm text-slate-300">{item.score}</p>}
                {item.highlights && (
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-data" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6" aria-labelledby="experience-heading">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Chapter 4 · Leadership</p>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Experience</p>
              <h2 id="experience-heading" className="font-display text-3xl text-white">
                Leadership & community
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <article key={item.role} className="glass flex flex-col gap-3 rounded-3xl p-6" aria-label={`Experience: ${item.role}`}>
                <p className="text-sm text-slate-300">{item.duration}</p>
                <p className="text-xl font-display text-white">{item.role}</p>
                <p className="text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
            <article className="glass flex flex-col gap-3 rounded-3xl p-6" aria-label={`Volunteering at ${volunteering.organization}`}>
              <p className="text-sm text-slate-300">
                {volunteering.organization} — {volunteering.role}
              </p>
              <p className="text-xl font-display text-white">Community leadership & impact delivery</p>
              <p className="text-sm text-slate-300">{volunteering.description}</p>
              <LineChart className="h-10 w-10 text-gold" aria-hidden />
            </article>
          </div>
        </section>

        <footer id="contact" className="space-y-6 pb-6" aria-labelledby="contact-heading">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Start a Conversation</p>
            <h3 id="contact-heading" className="mt-3 font-display text-4xl text-white">
              Let's design the next strategic move
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Reach out for data-driven strategy, DataOps leadership, or executive analytics.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-slate-100 transition hover:border-data hover:text-data focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
                aria-label="Visit GitHub profile"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-slate-100 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Visit LinkedIn profile"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-slate-100 transition hover:border-data hover:text-data focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
                aria-label="Send an email"
              >
                Email
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </main>

      <nav className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-between rounded-2xl border border-white/10 bg-night/80 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur md:hidden">
        {[
          { href: "#hero", label: "Hero" },
          { href: "#matrix", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" }
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 font-semibold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-data"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
