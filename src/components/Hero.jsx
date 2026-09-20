import { useEffect, useState } from "react";
import { WRAP } from "./layout.js";

const POINTS = [
  [46, 118, "#e2725b"], [78, 96, "#3ddc84"], [104, 128, "#e0a83b"], [136, 70, "#3ddc84"],
  [168, 88, "#e2725b"], [196, 52, "#e0a83b"], [228, 66, "#3ddc84"], [258, 34, "#e2725b"], [282, 44, "#e0a83b"],
];

// PDF public/ folder mein rakho. Chaho to data.js ke profile mein
// resume: "/Anvesh_Jain_Resume.pdf" bhi daal sakte ho, warna ye default chalega.
const DEFAULT_RESUME = "/Anvesh_Jain_Resume.pdf";

export default function Hero({ profile }) {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`pt-12 pb-16 sm:pt-20 sm:pb-24 ${WRAP}`}>
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-center">
        <div>
          <p className="font-mono-d text-[13px] sm:text-sm text-accent mb-4">{profile.eyebrow}</p>
          <h1 className="font-serif-d font-medium text-[clamp(38px,9vw,64px)] leading-[1.05] mb-5 tracking-[-0.01em]">
            {profile.name}
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-[46ch] mb-7">{profile.intro}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="group relative isolate overflow-hidden font-mono-d text-sm px-5 py-3 rounded bg-fg text-page inline-block text-center flex-1 sm:flex-none transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(61,220,132,0.5)]"
            >
              <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10" />
              See projects
            </a>
            <a
              href="#contact"
              className="font-mono-d text-sm px-5 py-3 rounded border border-line inline-block text-center flex-1 sm:flex-none transition-all hover:-translate-y-0.5 hover:border-fg"
            >
              Get in touch
            </a>
            <a
              href={profile.resume || DEFAULT_RESUME}
              download="Anvesh_Jain_Resume.pdf"
              className="font-mono-d text-sm px-5 py-3 rounded border border-accent text-accent inline-flex items-center justify-center gap-2 flex-1 sm:flex-none transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-page"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download resume
            </a>
          </div>
        </div>

        <div className="max-w-[420px] w-full mx-auto md:mx-0">
          <svg viewBox="0 0 320 180" className="w-full h-auto" role="img" aria-label="Scatter plot with a rising trend line">
            <line x1="20" y1="150" x2="300" y2="150" stroke="#203028" strokeWidth="1" />
            <line x1="20" y1="20" x2="20" y2="150" stroke="#203028" strokeWidth="1" />
            {POINTS.map(([cx, cy, c], i) => (
              <circle
                key={i} cx={cx} cy={drawn ? cy : 150} r="5" fill={c} opacity="0.85"
                style={{ transition: `cy 0.6s cubic-bezier(.2,.8,.2,1) ${i * 60}ms` }}
              />
            ))}
            <path
              d="M40 128 C 90 118, 140 84, 190 66 S 270 40, 296 38"
              fill="none" stroke="#e9f2ec" strokeWidth="1.6" strokeDasharray="3 4"
              style={{ opacity: drawn ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
            />
          </svg>
          <p className="font-mono-d text-xs text-muted mt-2">fig. 01 — trend fit over sampled observations</p>
        </div>
      </div>
    </section>
  );
}