"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#matrix", label: "Skills" },
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
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-700">
          Shubham Bhatt
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/messaging/compose/"
            className="group hidden items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 md:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Connect
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-900 hover:text-slate-900 md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-0.5 w-4 bg-current" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mt-2 w-full max-w-6xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm transition ${
                  active === link.href ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/messaging/compose/"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Connect
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

