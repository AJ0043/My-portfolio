import { H2, SECTION } from "./layout.js";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.19-3.37-1.19-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.01 10.01 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className={SECTION}>
      <h2 className={`${H2} mb-2`}>Projects</h2>
      <p className="text-sm text-muted mb-7 max-w-[60ch]">
        End-to-end data projects — scraping, cleaning, EDA, feature engineering, SQL, and Tableau dashboards.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border border-line bg-panel rounded-md p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_32px_-18px_rgba(0,0,0,0.5)] hover:border-accent"
          >
            <svg viewBox="0 0 220 40" className="h-10 w-full" aria-hidden="true">
              <polyline points="4,32 40,20 80,26 120,10 160,16 210,4" fill="none" stroke={p.color} strokeWidth="2" />
            </svg>
            <h3 className="font-serif-d text-[19px] font-medium">{p.title}</h3>
            <p className="text-sm text-muted flex-grow">{p.description}</p>

            <div className="flex flex-wrap gap-x-1.5 gap-y-1">
              {p.tags.map((t, i) => (
                <span key={t} className="font-mono-d text-[11px] text-accent">
                  {t}{i < p.tags.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>

            {(p.github || p.demo) && (
              <div className="flex flex-wrap gap-2.5 pt-3 mt-1 border-t border-line">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono-d text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-page"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono-d text-xs text-accent border border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10"
                  >
                    {p.demoLabel || "Live demo"}
                    <ExternalIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}