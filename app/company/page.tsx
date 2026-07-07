import type { Metadata } from "next";
import Link from "next/link";
import { companyRows } from "@/lib/content";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社PulseWorks",
  description: "株式会社PulseWorksの会社概要。所在地、代表者、設立、資本金、事業内容などの企業情報を掲載しています。",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PulseWorks",
    title: "会社概要 | 株式会社PulseWorks",
    description: "株式会社PulseWorksの企業情報(所在地・代表者・設立・資本金・事業内容)。",
    images: ["/assets/pulse-icon-primary.svg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社PulseWorks",
  alternateName: "PulseWorks Inc.",
  url: "https://pulseworks.co.jp",
  logo: "/assets/pulseworks-logo-horizontal.svg",
  email: "contact@pulseworks.co.jp",
  foundingDate: "2026-04-14",
  founder: { "@type": "Person", name: "小塩 健介" },
  address: {
    "@type": "PostalAddress",
    postalCode: "150-0044",
    addressRegion: "東京都",
    addressLocality: "渋谷区",
    streetAddress: "円山町5番5号 Navi渋谷V 3階",
    addressCountry: "JP",
  },
};

export default function CompanyPage() {
  return (
    <div style={{ background: "var(--paper)", color: "#1F2937" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <header
        className="sticky top-0 z-[60] border-b border-white/[0.08] backdrop-blur-[14px]"
        style={{ background: "rgba(11,18,32,0.72)" }}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-4">
          <Link href="/" aria-label="PulseWorks ホーム" className="flex items-center gap-[11px] no-underline">
            <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M5 32H17C19 32 20 31 21 29L25 19L32 47L39 12L45 30C46 31.5 47 32 49 32H59" stroke="var(--ac)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-lg font-bold tracking-[-0.01em] text-white">PulseWorks</span>
          </Link>
          <Link
            href="/"
            className="pw-nav-link inline-flex items-center gap-2 font-mono text-[12.5px] font-medium no-underline"
            style={{ color: "rgba(255,255,255,0.74)" }}
          >
            <span aria-hidden="true">←</span> トップへ戻る
          </Link>
        </div>
      </header>

      <section style={{ background: "#0B1220", color: "#fff", padding: "clamp(56px,8vw,104px) 0 clamp(48px,6vw,80px)" }}>
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-6" style={{ background: "var(--ac)" }} />
            <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.16em]" style={{ color: "var(--ac)" }}>
              Company
            </span>
          </div>
          <h1
            className="font-jp m-0 font-extrabold text-white"
            style={{ fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.24, letterSpacing: "-0.025em" }}
          >
            会社概要
          </h1>
          <p className="mt-[22px] max-w-[560px] text-[clamp(15px,1.6vw,17px)]" style={{ lineHeight: 1.9, color: "#93A3BE" }}>
            PulseWorksは、生成AIを活用して企業や個人の「次の一歩」を形にする会社です。構想から実装、改善まで横断して伴走します。
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "clamp(56px,8vw,104px) 0" }}>
        <div className="mx-auto max-w-[920px] px-[clamp(20px,5vw,56px)]">
          <dl className="m-0 border-t" style={{ borderColor: "var(--pw-border-subtle)" }}>
            {companyRows.map((r) => (
              <div
                key={r.label}
                className="grid gap-[6px] border-b py-6 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]"
                style={{ columnGap: 40, borderColor: "var(--pw-border-subtle)" }}
              >
                <dt className="font-jp text-sm font-bold tracking-[0.01em]" style={{ color: "var(--ink)" }}>
                  {r.label}
                </dt>
                <dd className="m-0 text-[15px]" style={{ lineHeight: 1.85, color: "#374151" }}>
                  {r.items ? (
                    <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="h-[6px] w-[6px] flex-none -translate-y-0.5 rounded-full"
                            style={{ background: "var(--ac-strong)" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : r.email ? (
                    <a href={`mailto:${r.email}`} className="pw-mailto-link font-medium no-underline" style={{ color: "var(--ac-strong)" }}>
                      {r.email}
                    </a>
                  ) : (
                    <span>{r.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="mt-[clamp(40px,5vw,64px)] flex flex-wrap items-center justify-between gap-5 rounded-[14px] p-[clamp(28px,4vw,44px)]"
            style={{ border: "1px solid var(--pw-border-subtle)", background: "#fff" }}
          >
            <div>
              <h2
                className="font-jp m-0 font-bold"
                style={{ fontSize: "clamp(18px,2.2vw,24px)", lineHeight: 1.4, letterSpacing: "-0.02em", color: "var(--ink)" }}
              >
                お問い合わせ・ご相談はこちら
              </h2>
              <p className="mt-[10px] text-sm" style={{ lineHeight: 1.8, color: "#4B5563" }}>
                Web制作、採用、業務改善、AI研修まで。まずは状況をお聞かせください。
              </p>
            </div>
            <Link
              href="/#contact"
              className="pw-service-cta inline-flex flex-none items-center gap-[9px] rounded-[var(--r-btn)] px-[26px] py-[14px] text-[15px] font-semibold no-underline"
              style={{ color: "var(--ac-ink)", background: "var(--ac-strong)" }}
            >
              無料相談をする <span aria-hidden="true" className="font-mono">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0B1220", color: "#fff", padding: "clamp(48px,7vw,72px) 0 36px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
          <div className="grid gap-11 md:grid-cols-[minmax(0,1.4fr)_repeat(auto-fit,minmax(140px,1fr))]">
            <div className="max-w-[320px]">
              <div className="flex items-center gap-[11px]">
                <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <path d="M5 32H17C19 32 20 31 21 29L25 19L32 47L39 12L45 30C46 31.5 47 32 49 32H59" stroke="var(--ac)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <Link href="/#services" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>Services</Link>
              <Link href="/#about" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>About</Link>
              <Link href="/#contact" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>Contact</Link>
            </nav>
            <nav aria-label="法務" className="flex flex-col gap-[14px]">
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em]" style={{ color: "#6B7A95" }}>
                Legal
              </span>
              <Link href="/company" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>会社概要</Link>
              <Link href="/privacy" className="pw-footer-link text-sm no-underline" style={{ color: "#C7D2E5" }}>プライバシーポリシー</Link>
            </nav>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span className="font-mono text-xs" style={{ color: "#6B7A95" }}>© PulseWorks Inc.</span>
            <span className="font-mono text-xs" style={{ color: "#6B7A95" }}>株式会社PulseWorks</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
