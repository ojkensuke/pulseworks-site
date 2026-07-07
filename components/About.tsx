import { Eyebrow } from "./Eyebrow";

export function About() {
  return (
    <section id="about" className="scroll-mt-[76px]" style={{ background: "#0B1220", color: "#fff", padding: "clamp(80px,11vw,144px) 0" }}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div className="grid items-start gap-[clamp(40px,5vw,80px)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <div>
            <Eyebrow label="About" tone="accent" />
            <h2
              className="font-jp m-0 font-extrabold text-white"
              style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.3, letterSpacing: "-0.025em", textWrap: "balance" }}
            >
              構想から実装、改善まで。<br />
              横断して伴走する。
            </h2>
            <div className="mt-[30px] flex max-w-[560px] flex-col gap-5">
              <p className="m-0 text-[clamp(15px,1.5vw,17px)]" style={{ lineHeight: 1.95, color: "#C7D2E5" }}>
                PulseWorksは、生成AIを活用して、企業や個人の「次の一歩」を形にする会社です。
              </p>
              <p className="m-0 text-[clamp(15px,1.5vw,17px)]" style={{ lineHeight: 1.95, color: "#93A3BE" }}>
                AIは、導入するだけでは成果につながりません。事業の課題を整理し、業務や顧客体験に落とし込み、現場で使われ続ける仕組みにして初めて価値になります。私たちは、戦略・クリエイティブ・テクノロジーを横断しながら、構想から実装、改善まで伴走します。
              </p>
            </div>
          </div>

          <div
            className="rounded-lg p-[clamp(28px,3vw,40px)]"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#0E1729" }}
          >
            <div className="flex items-center gap-5">
              <div
                aria-hidden="true"
                className="flex h-16 w-16 flex-none items-center justify-center rounded-full"
                style={{ background: "#14213B", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                <span className="font-jp text-2xl font-bold text-white">小塩</span>
              </div>
              <div>
                <p className="m-0 text-[13px] font-medium" style={{ color: "#93A3BE" }}>
                  代表取締役
                </p>
                <p className="font-jp mt-[6px] text-[22px] font-bold text-white">小塩 健介</p>
              </div>
            </div>
            <p
              className="mt-6 border-t pt-6 text-[14.5px]"
              style={{ borderColor: "rgba(255,255,255,0.08)", lineHeight: 1.95, color: "#B7C3D8" }}
            >
              経営コンサルティング領域での経験を基盤に、生成AIを活用した事業開発、Web制作、業務改善に取り組んでいます。構想を資料で終わらせず、顧客に届く形・現場で動く形まで落とし込むことを重視しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
