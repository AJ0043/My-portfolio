import { H2, SECTION } from "./layout.js";

export default function Timeline({ id, title, items }) {
  return (
    <section id={id} className={SECTION}>
      <h2 className={`${H2} mb-6`}>{title}</h2>
      <div className="grid gap-8 sm:gap-6">
        {items.map((it) => (
          <div key={it.id} className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1.5 sm:gap-5">
            <div className="font-mono-d text-[13px] sm:text-sm text-muted pt-0.5">{it.date_range}</div>
            <div className="min-w-0">
              <p className="font-serif-d text-lg font-medium mb-1">{it.title}</p>
              <p className="text-sm text-accent mb-1.5">{it.organization}</p>
              <p className="text-sm text-muted max-w-[60ch]">{it.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
