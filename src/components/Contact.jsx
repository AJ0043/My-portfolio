import { WRAP } from "./layout.js";

const ICONS = {
  email: (
    <>
      <path d="M2 6h20v12H2z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m22 6-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  ),
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.19-3.37-1.19-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.01 10.01 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
  ),
  kaggle: (
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
  ),
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </>
  ),
};

function Icon({ name, className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

function SocialTile({ href, label, icon }) {
  return (
  <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-page/60 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_14px_28px_-16px_rgba(255,138,61,0.6)]"
    >
      <span className="flex items-center gap-3 min-w-0">
        <span className="grid place-items-center w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-page">
          <Icon name={icon} />
        </span>
        <span className="font-mono-d text-sm truncate">{label}</span>
      </span>
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 shrink-0 text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </a>
  );
}

export default function Contact({ profile, socials }) {
  const visible = socials.filter((s) => s.url && ICONS[s.icon]);
  const email = visible.find((s) => s.icon === "email");
  const others = visible.filter((s) => s.icon !== "email");
  const emailAddress = email ? email.url.replace("mailto:", "") : "";

  return (
    <footer id="contact" className={`pt-14 sm:pt-20 pb-12 ${WRAP}`}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-6 sm:p-10 md:p-12">
        {/* soft orange glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_100%_0%,rgba(255,138,61,0.16),transparent_70%)]"
        />

        <div className="relative">
          {/* availability badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-page/60 px-3.5 py-1.5 font-mono-d text-xs text-muted mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to work
          </span>

          <h2 className="font-serif-d font-medium text-[clamp(34px,8vw,56px)] leading-[1.05] tracking-[-0.01em] mb-4">
            Let's talk <span className="text-accent">data.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[46ch] mb-8">{profile.contactBlurb}</p>

          {/* big email link */}
          {email && (
            <a
              href={email.url}
              className="group inline-flex items-center gap-3 font-mono-d text-[15px] sm:text-xl mb-9 max-w-full"
            >
              <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-accent text-page transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon name="email" />
              </span>
              <span className="border-b border-line pb-0.5 break-all transition-colors group-hover:border-accent group-hover:text-accent">
                {emailAddress}
              </span>
            </a>
          )}

          {/* social tiles */}
          {others.length > 0 && (
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {others.map((s) => (
                <SocialTile key={s.name} href={s.url} label={s.name} icon={s.icon} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap mt-8">
        <p className="font-mono-d text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#" className="font-mono-d text-xs text-muted transition-colors hover:text-accent">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}