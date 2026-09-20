import { H2, SECTION } from "./layout.js";

export default function Certifications({ items }) {
  return (
    <section id="certifications" className={SECTION}>
      <h2 className={`${H2} mb-6`}>Certifications</h2>
      <div>
        {items.map((c, i) => (
          <div
            key={c.id}
            className={`grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1.5 py-5 transition-[padding] hover:pl-1.5 ${i < items.length - 1 ? "border-b border-line" : ""}`}
          >
            <div className="min-w-0">
              <p className="font-serif-d text-[17px] font-medium">{c.title}</p>
              <p className="text-[13.5px] text-accent mt-0.5">{c.issuer}</p>
            </div>
            <div className="font-mono-d text-xs text-muted sm:text-right sm:pt-0.5 sm:whitespace-nowrap">{c.issued}</div>
            {c.credential_id && (
              <p className="font-mono-d text-[11px] text-muted sm:col-span-2 break-words">
                Credential ID {c.credential_id}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
