import { useCountUp, useInView } from "../hooks.js";
import { H2, SECTION } from "./layout.js";

const DEFAULT_FOCUS = ["Python", "SQL", "Pandas", "Tableau", "Machine Learning", "React"];

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function StatTile({ value, label, inView }) {
  const isNumber = /^\d+$/.test(value);
  const counted = useCountUp(isNumber ? Number(value) : 0, inView);
  return (
    <div className="rounded-xl border border-line bg-page/60 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <p className="font-serif-d text-[34px] leading-none text-accent mb-2">
        {isNumber ? counted : value}
      </p>
      <p className="font-mono-d text-[11px] leading-snug text-muted">
        {label.map((line, i) => (
          <span key={i}>{i > 0 && <br />}{line}</span>
        ))}
      </p>
    </div>
  );
}

export default function About({ profile, stats }) {
  const [ref, inView] = useInView(0.15);
  const focus = profile.focus && profile.focus.length ? profile.focus : DEFAULT_FOCUS;
  const [lead, ...rest] = profile.about;

  return (
    <section id="about" ref={ref} className={SECTION}>
      <div
        className={`grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* left: text */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-d text-xs text-accent">// about me</span>
            <span className="h-px flex-1 max-w-[120px] bg-line" />
          </div>
          <h2 className={`${H2} mb-6`}>
            From building apps to <span className="text-accent">understanding data.</span>
          </h2>

          {lead && <p className="text-base sm:text-lg text-fg/90 max-w-[58ch] mb-4">{lead}</p>}
          {rest.map((p, i) => (
            <p key={i} className="text-muted max-w-[58ch] mb-4">{p}</p>
          ))}

          <div className="mt-7">
            <p className="font-mono-d text-xs text-muted mb-3">Currently focused on</p>
            <div className="flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="font-mono-d text-xs rounded-full border border-line bg-panel px-3.5 py-1.5 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* right: profile card + stats */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-5 sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(255,138,61,0.16),transparent_70%)]"
          />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="grid place-items-center w-14 h-14 shrink-0 rounded-full border-2 border-accent bg-accent/10 font-serif-d text-xl text-accent">
                {initials(profile.name)}
              </div>
              <div className="min-w-0">
                <p className="font-serif-d text-lg font-medium truncate">{profile.name}</p>
                <p className="font-mono-d text-xs text-muted">Data Scientist in the making</p>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <StatTile key={i} {...s} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}