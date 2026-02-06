import { Download, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../data/profile";
import { cn } from "../lib/cn";
import { useActiveSection } from "../hooks/useActiveSection";
import LinkButton from "./LinkButton";
import ThemeToggle from "./ThemeToggle";

type NavItem = { id: string; label: string };

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const { active, setActive } = useActiveSection([
    "home",
    ...items.map((i) => i.id),
  ]);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--border)_/_0.7)] bg-[rgba(var(--bg)_/_0.75)] backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Go to top"
        >
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="group inline-flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Go to top"
          >
            <img
              src="/profile-pic.JPG"
              alt={profile.name}
              className="inline-block h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-[rgba(var(--border)_/_0.5)]"
              style={{ objectPosition: "center 30%" }}
            />
          </button>

          <span className="hidden sm:inline">
            {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => scrollTo(it.id)}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgba(var(--card)_/_0.6)]",
                active === it.id &&
                  "text-[rgb(var(--text))] bg-[rgba(var(--card)_/_0.75)]",
              )}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LinkButton
            variant="secondary"
            href="/cv.pdf"
            className="hidden sm:inline-flex"
            leftIcon={<Download size={16} />}
          >
            Download CV
          </LinkButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] hover:bg-[rgba(var(--card)_/_0.9)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="container-pad pb-4">
          <div className="card-muted overflow-hidden">
            <div className="flex flex-col p-2">
              {items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => scrollTo(it.id)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-left text-sm font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgba(var(--card)_/_0.6)]",
                    active === it.id &&
                      "text-[rgb(var(--text))] bg-[rgba(var(--card)_/_0.75)]",
                  )}
                >
                  {it.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] px-3 py-3 text-sm font-semibold hover:bg-[rgba(var(--card)_/_0.9)]"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
