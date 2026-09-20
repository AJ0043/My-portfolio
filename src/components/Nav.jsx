import { useEffect, useState } from "react";
import { WRAP } from "./layout.js";

const NAV_LINKS = [
  ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["experience", "Experience"], ["education", "Education"],
  ["certifications", "Certifications"], ["contact", "Contact"],
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -50% 0px" });
    NAV_LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // close the mobile menu if the window grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className="sticky z-20 backdrop-blur bg-page/90 border-b border-line"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className={`${WRAP} flex items-center justify-between py-3.5 sm:py-4`}>
        <a href="#" className="font-mono-d text-sm">AJ / data science</a>

        <nav className="hidden md:flex gap-5 text-sm" aria-label="Primary">
          {NAV_LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${active === id ? "text-accent" : "text-muted hover:text-fg"}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>
            ) : (
              <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="md:hidden border-t border-line bg-page" aria-label="Mobile">
          <div className={`${WRAP} py-2 grid`}>
            {NAV_LINKS.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`py-3 text-[15px] border-b border-line/60 last:border-b-0 ${active === id ? "text-accent" : "text-muted"}`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
