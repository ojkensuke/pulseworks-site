import { labs } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[76px]" style={{ background: "var(--paper)", padding: "clamp(80px,11vw,144px) 0" }}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div
          className="mb-[clamp(40px,5vw,64px)] grid items-end sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
          style={{ gap: "24px 56px" }}
        >
          <div>
            <Eyebrow label="PulseWorks Lab" />
            <h2
              className="font-jp m-0 font-extrabold"
              style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.24, letterSpacing: "-0.025em", color: "var(--ink)" }}
            >
              自らを実験場に。
            </h2>
          </div>
          <div>
            <p className="m-0 max-w-[440px] text-[clamp(15px,1.6vw,17px)]" style={{ lineHeight: 1.9, color: "#4B5563" }}>
              PulseWorks自身を実験場に、AIを活用した制作・業務改善・発信のベストプラクティスを検証しています。
            </p>
            <div
              className="mt-[18px] inline-flex items-center gap-2 rounded-[var(--r-pill)] border px-[13px] py-[7px] font-mono text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{ borderColor: "var(--pw-border-strong)", color: "var(--pw-ink-600)" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ac-strong)" }} />
              自主制作・実証プロジェクト
            </div>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "var(--pw-border-subtle)" }}>
          {labs.map((l) => (
            <a
              key={l.n}
              href="#contact"
              className="pw-lab-row grid items-center gap-2 border-b py-[22px] px-2 no-underline"
              style={{ gridTemplateColumns: "56px minmax(0,1fr) minmax(0,1.1fr) auto", columnGap: 40, borderColor: "var(--pw-border-subtle)" }}
            >
              <span className="font-mono text-xs" style={{ color: "var(--pw-ink-400)" }}>
                {l.n}
              </span>
              <span
                className="font-jp font-bold"
                style={{ fontSize: "clamp(16px,1.7vw,19px)", color: "var(--ink)", letterSpacing: "-0.01em" }}
              >
                {l.title}
              </span>
              <span className="text-[13.5px]" style={{ lineHeight: 1.6, color: "#6B7280" }}>
                {l.desc}
              </span>
              <span
                className="justify-self-end font-mono text-[10.5px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--ac-strong)" }}
              >
                {l.tag}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-[26px] text-[13.5px]" style={{ lineHeight: 1.8, color: "var(--pw-ink-400)" }}>
          公開可能なプロジェクトは順次追加予定です。
        </p>
      </div>
    </section>
  );
}
