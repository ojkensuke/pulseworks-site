import { services } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[76px] border-t"
      style={{ background: "#fff", padding: "clamp(80px,11vw,144px) 0", borderColor: "var(--pw-border-subtle)" }}
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div
          className="mb-[clamp(48px,6vw,80px)] grid items-end sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
          style={{ gap: "24px 56px" }}
        >
          <div>
            <Eyebrow label="Services" />
            <h2
              className="font-jp m-0 font-extrabold"
              style={{ fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.2, letterSpacing: "-0.025em", color: "var(--ink)" }}
            >
              3つの実装領域
            </h2>
          </div>
          <p className="m-0 max-w-[420px] text-[clamp(15px,1.6vw,17px)]" style={{ lineHeight: 1.9, color: "#4B5563" }}>
            事業の前進を妨げるボトルネックを、AIと実装力で解消します。戦略から制作・運用まで、領域を横断して伴走します。
          </p>
        </div>

        <div>
          {services.map((s) => (
            <article
              key={s.n}
              className="pw-service-row grid rounded-[14px] border-t px-[clamp(20px,2.4vw,32px)] py-[clamp(34px,4vw,52px)] transition-[background,box-shadow] duration-[280ms] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
              style={{ borderColor: "var(--pw-border-subtle)", transitionTimingFunction: "var(--ease-out)", gap: "28px 56px" }}
            >
              <div>
                <div className="flex items-baseline gap-[18px]">
                  <span
                    className="font-mono font-normal"
                    style={{ fontSize: "clamp(28px,3.4vw,40px)", color: "var(--ac-strong)", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {s.n}
                  </span>
                  <span
                    className="font-mono text-[11px] font-medium uppercase tracking-[0.14em]"
                    style={{ color: "var(--pw-ink-400)" }}
                  >
                    {s.eyebrow}
                  </span>
                </div>
                <h3
                  className="font-jp mt-[18px] font-bold"
                  style={{ fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.38, letterSpacing: "-0.02em", color: "var(--ink)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-[18px] max-w-[380px] text-[15px]" style={{ lineHeight: 1.88, color: "#4B5563" }}>
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="pw-service-cta mt-7 inline-flex items-center gap-2 rounded-[var(--r-btn)] px-5 py-[11px] text-sm font-semibold text-white no-underline"
                  style={{ background: "var(--ac-strong)" }}
                >
                  詳しく相談する <span aria-hidden="true" className="font-mono">→</span>
                </a>
              </div>
              <ul className="m-0 grid content-start gap-0 p-0">
                {s.items.map((it) => (
                  <li
                    key={it.k}
                    className="flex items-baseline gap-4 border-b py-[14px] text-[15px]"
                    style={{ borderColor: "var(--pw-border-soft)", lineHeight: 1.55, color: "var(--pw-ink-700)" }}
                  >
                    <span aria-hidden="true" className="flex-none font-mono text-[11px]" style={{ color: "var(--ac-strong)" }}>
                      {it.k}
                    </span>
                    <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
