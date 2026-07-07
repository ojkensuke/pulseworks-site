import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社PulseWorks",
  description:
    "株式会社PulseWorksのプライバシーポリシー。取得する個人情報、利用目的、第三者提供、安全管理措置、開示等の請求、Cookieの取り扱いについて記載しています。",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PulseWorks",
    title: "プライバシーポリシー | 株式会社PulseWorks",
    description: "株式会社PulseWorksの個人情報の取り扱い方針。",
  },
};

const sections = [
  {
    heading: "1. 取得する情報",
    body: ["当社は、お問い合わせフォームへのご入力等を通じて、以下の情報を取得する場合があります。"],
    items: [
      "氏名",
      "会社名・所属",
      "メールアドレス",
      "お問い合わせ内容",
      "興味のある支援内容",
      "予算感・希望時期など、利用者が任意で入力する情報",
      "Cookie等を通じて取得される、サイトの閲覧・利用状況に関する情報",
    ],
  },
  {
    heading: "2. 利用目的",
    body: ["当社は、取得した個人情報を以下の目的の範囲内で利用します。"],
    items: [
      "お問い合わせへの回答、ご連絡、ご提案、お見積りのため",
      "当社サービスの提供、改善、品質向上のため",
      "不正利用やセキュリティ上の問題への対応のため",
      "法令または行政機関等の要請への対応のため",
      "利用者の同意がある場合の、各種案内・情報提供のため",
    ],
    footer: "営業やご案内を目的とした連絡は、お問い合わせ内容に関連する範囲、または利用者の同意がある場合に限って行います。",
  },
  {
    heading: "3. 第三者提供・委託",
    body: [
      "当社は、法令に基づく場合を除き、あらかじめ本人の同意を得ることなく、個人情報を第三者に提供することはありません。",
      "お問い合わせ対応、サイト運営、メールの送受信等にあたり、外部サービスや委託先を利用する場合があります。この場合、当社は委託先に対して、必要かつ適切な監督を行います。",
    ],
  },
  {
    heading: "4. 安全管理措置",
    body: ["当社は、取り扱う個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、概要として以下の措置を講じます。"],
    items: [
      "個人情報へのアクセス権限の管理",
      "業務で使用するアカウント・端末の適切な管理",
      "委託先の選定および管理",
      "不正アクセスや漏えい等が発生した場合の対応体制の整備",
      "取り扱い状況の把握と、必要に応じた見直し・改善",
    ],
  },
  {
    heading: "5. 開示等の請求",
    body: [
      "当社が保有する個人データについて、利用目的の通知、開示、訂正、追加、削除、利用停止等をご希望の場合は、上記のお問い合わせ窓口までご連絡ください。",
      "ご請求の際には、ご本人であることの確認を行う場合があります。開示等のご請求に際して、原則として手数料は申し受けません。",
    ],
  },
  {
    heading: "6. Cookie・アクセス解析について",
    body: [
      "当社のWebサイトでは、利用状況の把握とサイト改善のために、Cookie等を利用する場合があります。Cookieによって個人を直接特定できる情報を取得することはありません。",
      "Cookieの利用は、ブラウザの設定により無効化することができます。無効化した場合、サイトの一部の機能がご利用いただけない場合があります。",
    ],
  },
  {
    heading: "7. 本ポリシーの改定",
    body: [
      "当社は、法令の改正や事業内容の変更等に応じて、本ポリシーを必要に応じて改定することがあります。重要な変更を行う場合は、本サイト上で告知します。変更後の内容は、本ページに掲載した時点から適用されます。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--paper)", color: "#374151" }}>
      <header
        className="sticky top-0 z-[60] border-b border-white/[0.08] backdrop-blur-[14px]"
        style={{ background: "rgba(11,18,32,0.72)" }}
      >
        <div className="mx-auto flex max-w-[920px] items-center justify-between gap-6 px-[clamp(20px,5vw,48px)] py-4">
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

      <section style={{ background: "#0B1220", color: "#fff", padding: "clamp(52px,7vw,88px) 0 clamp(40px,5vw,64px)" }}>
        <div className="mx-auto max-w-[920px] px-[clamp(20px,5vw,48px)]">
          <div className="mb-[22px] flex items-center gap-3">
            <span className="h-px w-6" style={{ background: "var(--ac)" }} />
            <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.16em]" style={{ color: "var(--ac)" }}>
              Privacy Policy
            </span>
          </div>
          <h1
            className="font-jp m-0 font-extrabold text-white"
            style={{ fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.28, letterSpacing: "-0.025em" }}
          >
            プライバシーポリシー
          </h1>
          <p className="mt-5 max-w-[620px] text-[15px]" style={{ lineHeight: 1.9, color: "#93A3BE" }}>
            株式会社PulseWorks(以下「当社」といいます)は、個人情報の保護に関する法令等を遵守し、お客さまの個人情報を適切に取り扱うため、以下のとおりプライバシーポリシー(以下「本ポリシー」といいます)を定めます。
          </p>
        </div>
      </section>

      <main
        className="mx-auto max-w-[920px] px-[clamp(20px,5vw,48px)]"
        style={{ padding: "clamp(48px,7vw,80px) clamp(20px,5vw,48px) clamp(56px,8vw,104px)" }}
      >
        <section
          className="mb-[clamp(40px,5vw,60px)] rounded-[14px] p-[clamp(24px,3.5vw,36px)]"
          style={{ border: "1px solid var(--pw-border-subtle)", background: "#fff" }}
        >
          <h2 className="m-0 font-jp font-bold" style={{ fontSize: "clamp(17px,2vw,20px)", color: "#0B1220" }}>
            事業者情報
          </h2>
          <dl className="mt-4 flex flex-col gap-0">
            {[
              ["事業者名", "株式会社PulseWorks"],
              ["所在地", "〒150-0044 東京都渋谷区円山町5番5号 Navi渋谷V 3階"],
              ["代表者", "代表取締役 小塩 健介"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-[4px] border-t py-3 sm:grid-cols-[minmax(0,160px)_minmax(0,1fr)]"
                style={{ columnGap: 32, borderColor: "var(--pw-border-subtle)" }}
              >
                <dt className="text-[13.5px] font-bold" style={{ color: "#0B1220" }}>{label}</dt>
                <dd className="m-0 text-[14.5px]" style={{ lineHeight: 1.7, color: "#374151" }}>{value}</dd>
              </div>
            ))}
            <div
              className="grid gap-[4px] border-y py-3 sm:grid-cols-[minmax(0,160px)_minmax(0,1fr)]"
              style={{ columnGap: 32, borderColor: "var(--pw-border-subtle)" }}
            >
              <dt className="text-[13.5px] font-bold" style={{ color: "#0B1220" }}>
                個人情報に関する
                <br />
                お問い合わせ窓口
              </dt>
              <dd className="m-0 text-[14.5px]">
                <a href="mailto:contact@pulseworks.co.jp" className="pw-mailto-link font-medium no-underline" style={{ color: "var(--ac-strong)" }}>
                  contact@pulseworks.co.jp
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <div className="flex flex-col gap-9">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2
                className="font-jp m-0 border-b pb-3 font-bold"
                style={{ fontSize: "clamp(18px,2.2vw,23px)", color: "#0B1220", letterSpacing: "-0.01em", borderColor: "var(--pw-border-subtle)" }}
              >
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 text-[15px]" style={{ lineHeight: 1.95, color: "#374151" }}>
                  {p}
                </p>
              ))}
              {s.items && (
                <ul className="mt-[14px] flex list-none flex-col gap-[10px] p-0">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 text-[15px]" style={{ lineHeight: 1.8, color: "#374151" }}>
                      <span
                        aria-hidden="true"
                        className="h-[6px] w-[6px] flex-none -translate-y-[3px] rounded-full"
                        style={{ background: "#3B6BF5" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.footer && (
                <p className="mt-4 text-[15px]" style={{ lineHeight: 1.95, color: "#374151" }}>
                  {s.footer}
                </p>
              )}
            </section>
          ))}
        </div>

        <div
          className="mt-[clamp(40px,5vw,60px)] flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t pt-6"
          style={{ borderColor: "var(--pw-border-subtle)" }}
        >
          <p className="m-0 text-[13.5px]" style={{ color: "#6B7280" }}>
            株式会社PulseWorks(PulseWorks Inc.)
          </p>
          <p className="m-0 font-mono text-[12.5px]" style={{ color: "#6B7280" }}>
            最終改定日:2026年7月7日
          </p>
        </div>
      </main>

      <footer style={{ background: "#0B1220", color: "#fff", padding: "clamp(40px,6vw,64px) 0 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-[920px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,5vw,48px)]">
          <div className="flex items-center gap-[10px]">
            <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M5 32H17C19 32 20 31 21 29L25 19L32 47L39 12L45 30C46 31.5 47 32 49 32H59" stroke="var(--ac)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[17px] font-bold text-white">PulseWorks</span>
          </div>
          <nav aria-label="法務" className="flex items-center gap-6">
            <Link href="/company" className="pw-footer-link text-[13.5px] no-underline" style={{ color: "#C7D2E5" }}>会社概要</Link>
            <Link href="/privacy" className="pw-footer-link text-[13.5px] no-underline" style={{ color: "#C7D2E5" }}>プライバシーポリシー</Link>
            <span className="font-mono text-xs" style={{ color: "#6B7A95" }}>© PulseWorks Inc.</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
