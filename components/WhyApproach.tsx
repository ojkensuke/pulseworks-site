import { steps, whys } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";

export function WhyApproach() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-[76px] overflow-hidden"
      style={{ background: "#0B1220", color: "#fff", padding: "clamp(80px,11vw,144px) 0" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 78%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div className="mb-[clamp(48px,6vw,80px)] max-w-[640px]">
          <Eyebrow label="Why PulseWorks" tone="accent" />
          <h2
            className="font-jp m-0 font-extrabold text-white"
            style={{ fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.24, letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            ツールではなく、<br />
            成果から逆算する。
          </h2>
        </div>

        <div
          className="grid gap-px overflow-hidden rounded sm:grid-cols-[repeat(auto-fit,minmax(248px,1fr))]"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {whys.map((w) => (
            <div
              key={w.n}
              className="pw-why-cell flex min-h-[230px] flex-col px-[clamp(24px,2.6vw,34px)] py-[clamp(28px,3.2vw,40px)]"
              style={{ background: "#0B1220" }}
            >
              <span className="font-mono text-[28px] font-normal" style={{ color: "var(--ac)", letterSpacing: "-0.02em" }}>
                {w.n}
              </span>
              <h3 className="font-jp mt-6 font-bold text-white" style={{ fontSize: "19px", lineHeight: 1.45 }}>
                {w.title}
              </h3>
              <p className="mt-[14px] text-sm" style={{ lineHeight: 1.85, color: "#93A3BE" }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(64px,8vw,104px)]">
          <div className="mb-9 flex items-center gap-3">
            <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.16em]" style={{ color: "#7E8BA5" }}>
              How We Work
            </span>
            <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>
          <ol
            className="m-0 grid list-none gap-px p-0 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {steps.map((st) => (
              <li key={st.n} className="px-5 pb-[26px] pt-[22px]" style={{ background: "#0B1220" }}>
                <span className="font-mono text-xs" style={{ color: "var(--ac)" }}>
                  {st.n} / 05
                </span>
                <p className="font-jp mt-4 font-bold text-white" style={{ fontSize: "15px", lineHeight: 1.5 }}>
                  {st.title}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-7 text-[14.5px]" style={{ lineHeight: 1.8, color: "#93A3BE" }}>
            まずは、効果が出やすいテーマから小さく始めます。
          </p>
        </div>
      </div>
    </section>
  );
}
