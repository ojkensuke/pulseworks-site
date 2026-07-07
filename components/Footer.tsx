import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#0B1220", color: "#fff", padding: "clamp(56px,7vw,88px) 0 36px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div className="grid gap-11 md:grid-cols-[minmax(0,1.4fr)_repeat(auto-fit,minmax(140px,1fr))]">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-[11px]">
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path
                  d="M5 32H17C19 32 20 31 21 29L25 19L32 47L39 12L45 30C46 31.5 47 32 49 32H59"
                  stroke="var(--ac)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[19px] font-bold text-white">PulseWorks</span>
            </div>
            <p className="font-jp mt-[18px] text-sm" style={{ color: "#93A3BE", lineHeight: 1.7 }}>
              AIを、事業を動かす仕組みに。
            </p>
            <p className="mt-[10px] font-mono text-xs tracking-[0.02em]" style={{ color: "#6B7A95" }}>
              株式会社PulseWorks
            </p>
          </div>
          <nav aria-label="サイト" className="flex flex-col gap-[14px]">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em]" style={{ color: "#6B7A95" }}>
              Site
            </span>
            {[
              { href: "#services", label: "Services" },
              { href: "#approach", label: "Approach" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>
                {l.label}
              </a>
            ))}
          </nav>
          <nav aria-label="法務" className="flex flex-col gap-[14px]">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em]" style={{ color: "#6B7A95" }}>
              Legal
            </span>
            <Link href="/company" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>
              会社概要
            </Link>
            <Link href="/privacy" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t pt-6"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="font-mono text-xs" style={{ color: "#6B7A95" }}>
            © PulseWorks Inc.
          </span>
          <span className="font-mono text-xs" style={{ color: "#6B7A95" }}>
            Turn AI into operating systems for business.
          </span>
        </div>
      </div>
    </footer>
  );
}
