import { useInView } from "../hooks.js";
import { H2, SECTION } from "./layout.js";

export default function Skills({ groups }) {
  const [ref, inView] = useInView(0.15);
  return (
    <section id="skills" ref={ref} className={SECTION}>
      <h2 className={`${H2} mb-6`}>Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="font-mono-d text-sm text-muted mb-4">{group.name}</h3>
            <div className="grid gap-4">
              {group.items.map(({ label, percent, color }) => (
                <div key={label}>
                  <div className="flex justify-between gap-3 text-[13.5px] mb-1.5">
                    <span>{label}</span>
                    <span className="font-mono-d text-xs text-muted">{percent}%</span>
                  </div>
                  <div className="h-1.5 rounded bg-track border border-line overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-[1100ms] ease-out"
                      style={{ width: inView ? `${percent}%` : "0%", background: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
