import { ArrowUpRight, BriefcaseBusiness, GraduationCap, LineChart } from "lucide-react";
import BentoGrid from "../components/BentoGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import portfolioData from "../data/portfolio";

const sections = [
  { id: "about", label: "About" },
  { id: "matrix", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export default function Home() {
  const { personalInfo, education, projects, experience, volunteering, skills, certifications, achievements } = portfolioData;
  const heroExperience = experience[0]?.role ? `${experience[0].role} · ${experience[0].duration}` : undefined;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-20 pt-28 sm:gap-16 sm:px-6 sm:pt-32">
        <Hero personalInfo={personalInfo} resumeHref={personalInfo.resumeUrl} experienceHighlight={heroExperience} />

        <section id="about" className="section-shell space-y-5" aria-labelledby="about-heading">
          <p className="section-kicker">About</p>
          <h2 id="about-heading" className="section-title">
            Business-first, analytics-backed problem solving
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-slate-600">
            I bring together structured business thinking and technical execution. My work focuses on framing decisions
            clearly, validating assumptions with data, and helping teams move from analysis to action. I am currently
            pursuing an MBA in Strategy & Consulting while building depth in analytics and applied AI.
          </p>
        </section>

        <BentoGrid skills={skills} achievements={achievements} certifications={certifications} />

        <section id="projects" className="space-y-5" aria-labelledby="projects-heading">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Projects</p>
              <h2 id="projects-heading" className="section-title">
                Case studies
              </h2>
            </div>
            <LineChart className="hidden h-7 w-7 text-data sm:block" aria-hidden />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="section-shell card-interactive" aria-label={`Case study: ${project.title}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{project.objective}</p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">{project.metrics}</span>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Problem</p>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Approach</p>
                    <p>{project.approach}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Outcome</p>
                    <p>{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {project.impact}
                </p>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    View project repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="space-y-5" aria-labelledby="education-heading">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Education</p>
              <h2 id="education-heading" className="section-title">
                Academic foundation
              </h2>
            </div>
            <GraduationCap className="hidden h-7 w-7 text-data sm:block" aria-hidden />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="section-shell card-interactive">
                <p className="text-sm text-slate-500">{item.duration}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.institution}</h3>
                <p className="text-sm text-slate-700">{item.degree}</p>
                {item.location && <p className="mt-1 text-xs text-slate-500">{item.location}</p>}
                {item.score && <p className="mt-2 text-sm text-slate-600">{item.score}</p>}
                {item.highlights && (
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {item.highlights.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-5" aria-labelledby="experience-heading">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Experience</p>
              <h2 id="experience-heading" className="section-title">
                Professional and leadership experience
              </h2>
            </div>
            <BriefcaseBusiness className="hidden h-7 w-7 text-data sm:block" aria-hidden />
          </div>
          <div className={`grid gap-4 ${experience.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
            {experience.map((item) => (
              <article key={item.role} className="section-shell card-interactive">
                <p className="text-sm text-slate-500">{item.duration}</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">{item.role}</p>
                <p className="mt-2 text-sm text-slate-700">{item.description}</p>
              </article>
            ))}
            <article className="section-shell card-interactive">
              <p className="text-sm text-slate-500">
                {volunteering.organization} · {volunteering.role}
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-900">Community impact and mentoring</p>
              <p className="mt-2 text-sm text-slate-700">{volunteering.description}</p>
            </article>
          </div>
        </section>

        <section className="section-shell space-y-4 text-center">
          <p className="section-kicker">Next Step</p>
          <h3 className="section-title">Looking for consulting and analytics opportunities</h3>
          <p className="mx-auto max-w-3xl text-sm text-slate-600">
            If you are hiring for strategy, analytics, AI consulting, or business-tech roles, I would be glad to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer id="contact" className="section-shell space-y-4 text-center" aria-labelledby="contact-heading">
          <p className="section-kicker">Contact</p>
          <h3 id="contact-heading" className="section-title">
            Let&apos;s start a conversation
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Open to internships and projects across consulting, strategy, analytics, and applied AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              aria-label="Visit GitHub profile"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary" aria-label="Send an email">
              Email
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </main>

      <nav className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-sm md:hidden">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-lg px-2 py-2 font-semibold transition hover:text-slate-900"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
