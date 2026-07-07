import { problems } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";

export function Problems() {
  return (
    <section style={{ background: "var(--paper)", padding: "clamp(72px,10vw,128px) 0" }}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div className="grid items-start gap-[clamp(32px,5vw,72px)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="sticky top-[100px]">
            <Eyebrow label="Challenges" />
            <h2
              className="font-jp m-0 font-extrabold"
              style={{
                fontSize: "clamp(26px,3.6vw,40px)",
                lineHeight: 1.32,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                textWrap: "balance",
              }}
            >
              AIを導入しただけでは、<br />
              事業は変わらない。
            </h2>
            <p className="mt-7 max-w-[380px] text-[15px]" style={{ lineHeight: 1.9, color: "#4B5563" }}>
              PulseWorksは、AIを
              <strong style={{ color: "var(--ink)", fontWeight: 700 }}>“試すだけ”で終わらせず</strong>
              、成果につながる業務・顧客体験・仕組みに変えます。
            </p>
          </div>
          <ol className="m-0 list-none p-0">
            {problems.map((p) => (
              <li
                key={p.n}
                className="flex items-baseline gap-[22px] border-t py-[22px]"
                style={{ borderColor: "var(--pw-border-subtle)" }}
              >
                <span className="flex-none pt-0.5 font-mono text-[13px] font-medium" style={{ color: "var(--ac-strong)" }}>
                  {p.n}
                </span>
                <p
                  className="m-0 font-medium"
                  style={{ fontSize: "clamp(16px,1.7vw,19px)", lineHeight: 1.6, color: "var(--pw-ink-800)", letterSpacing: "-0.01em" }}
                >
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
