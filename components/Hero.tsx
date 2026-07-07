const whatWeBuild = [
  { n: "01", label: "AI Web・採用支援" },
  { n: "02", label: "AI業務改善・チャットボット" },
  { n: "03", label: "AI研修・実践支援" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.06]"
      style={{ background: "#0B1220", color: "#fff" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(64% 88% at 100% 0%, #17253F 0%, rgba(11,18,32,0) 58%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)] pb-[clamp(68px,10vw,124px)] pt-[clamp(64px,10vw,132px)]">
        <div className="flex flex-wrap items-center gap-[clamp(40px,5vw,72px)]">
          <div className="max-w-[760px] flex-[1_1_480px]">
            <div className="mb-[clamp(26px,3vw,36px)] flex items-center gap-[14px]">
              <span className="h-px w-10" style={{ background: "var(--ac)" }} />
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.2em]" style={{ color: "#8FB2FF" }}>
                Est. 2026 — Tokyo
              </span>
            </div>
            <h1
              className="font-jp m-0 font-extrabold text-white"
              style={{ fontSize: "clamp(38px,6.6vw,68px)", lineHeight: 1.14, letterSpacing: "-0.03em", textWrap: "balance" }}
            >
              AIを、事業を<br />
              動かす<span style={{ color: "var(--ac)" }}>仕組み</span>に。
            </h1>
            <p
              className="mt-[clamp(24px,3vw,32px)] max-w-[480px] font-normal"
              style={{ fontSize: "clamp(16px,1.7vw,19px)", lineHeight: 1.85, color: "#B7C3D8" }}
            >
              Web制作、顧客獲得、採用、業務改善、AI研修まで。PulseWorksは、生成AIを現場で使える成果へ変えます。
            </p>
            <p className="mt-4 max-w-[460px] text-[15px]" style={{ lineHeight: 1.9, color: "#7E8BA5" }}>
              構想だけで終わらせず、課題整理から設計・実装・改善・定着まで伴走します。
            </p>
            <div className="mt-[clamp(32px,4vw,42px)] flex flex-wrap gap-[14px]">
              <a
                href="#contact"
                className="pw-btn-primary inline-flex items-center gap-[10px] rounded-[var(--r-btn)] px-[30px] py-4 text-base font-semibold no-underline"
                style={{ color: "var(--ac-ink)", background: "var(--ac)" }}
              >
                無料相談をする <span aria-hidden="true" className="font-mono">→</span>
              </a>
              <a
                href="#services"
                className="pw-btn-secondary inline-flex items-center rounded-[var(--r-btn)] border px-[30px] py-4 text-base font-semibold text-white no-underline"
                style={{ borderColor: "rgba(255,255,255,0.2)", background: "transparent" }}
              >
                サービスを見る
              </a>
            </div>
          </div>

          <div className="max-w-[360px] flex-[1_1_280px]">
            <span
              className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#6B7A95" }}
            >
              What we build
            </span>
            {whatWeBuild.map((item, i) => (
              <a
                key={item.n}
                href="#services"
                className="pw-hero-list-link flex items-baseline gap-4 border-t py-[18px] no-underline"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  borderBottomWidth: i === whatWeBuild.length - 1 ? 1 : 0,
                  borderBottomStyle: i === whatWeBuild.length - 1 ? "solid" : undefined,
                }}
              >
                <span className="flex-none font-mono text-xs" style={{ color: "var(--ac)" }}>
                  {item.n}
                </span>
                <span className="font-jp text-base font-semibold text-white">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
