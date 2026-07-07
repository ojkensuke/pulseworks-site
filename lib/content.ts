export const problems = [
  { n: "01", text: "AIを導入したが、現場で使われていない" },
  { n: "02", text: "Webサイトや採用ページを改善したいが、時間も人手も足りない" },
  { n: "03", text: "社内業務が属人化し、確認・転記・資料作成に時間がかかる" },
  { n: "04", text: "AIを使いたいが、何から始めるべきか分からない" },
  { n: "05", text: "企画や構想はあるが、実装まで進まない" },
];

export const services = [
  {
    n: "01",
    eyebrow: "Web & Recruiting",
    title: "AI Web・採用支援",
    desc: "事業理解、ターゲット設計、コピー、デザイン、実装まで。AIを活用しながら、伝わるWebサイトと採用導線を高速に形にします。",
    items: [
      { k: "a", label: "コーポレートサイト・サービスサイト" },
      { k: "b", label: "新規事業LP・採用LP" },
      { k: "c", label: "Web導線・CV改善" },
      { k: "d", label: "AI検索時代を見据えたWeb・コンテンツ診断" },
      { k: "e", label: "営業資料・提案資料制作" },
    ],
  },
  {
    n: "02",
    eyebrow: "Workflow & Chatbot",
    title: "AI業務改善・チャットボット",
    desc: "手作業、情報探索、問い合わせ対応、資料作成などを見直し、AIで回る業務フローを設計・実装します。",
    items: [
      { k: "a", label: "社内ナレッジ検索" },
      { k: "b", label: "AIチャットボット" },
      { k: "c", label: "営業・提案書作成支援" },
      { k: "d", label: "議事録・タスク整理" },
      { k: "e", label: "小規模PoC・業務自動化" },
    ],
  },
  {
    n: "03",
    eyebrow: "Training & Enablement",
    title: "AI研修・実践支援",
    desc: "AIを使える人が一部だけ、という状態から脱却。現場で使えるスキル・テンプレート・運用ルールを整えます。",
    items: [
      { k: "a", label: "ChatGPT・Claude・Claude Code・Cursor活用" },
      { k: "b", label: "経営者・管理職向けAI活用設計" },
      { k: "c", label: "部門別ワークショップ" },
      { k: "d", label: "プロンプト・業務テンプレート作成" },
      { k: "e", label: "導入後の定着支援" },
    ],
  },
];

export const whys = [
  { n: "01", title: "課題から考える", desc: "ツールありきではなく、事業・顧客・現場の課題から設計します。" },
  { n: "02", title: "構想で終わらせない", desc: "戦略や資料だけで終わらず、実装・検証・改善まで進めます。" },
  { n: "03", title: "小さく速く試す", desc: "大きな導入前に、効果が出やすい領域からPoCを設計します。" },
  { n: "04", title: "仕組みとして定着させる", desc: "納品で終わらせず、テンプレート・運用ルール・研修を通じて組織に残します。" },
];

export const steps = [
  { n: "01", title: "ヒアリング" },
  { n: "02", title: "課題整理・優先順位設計" },
  { n: "03", title: "企画・設計" },
  { n: "04", title: "制作・実装・検証" },
  { n: "05", title: "改善・運用・定着支援" },
];

export const labs = [
  { n: "01", title: "AI活用コーポレートサイト", desc: "事業理解からデザイン・実装までAIを取り入れた制作プロセスを検証。", tag: "Web" },
  { n: "02", title: "採用LPデモプロジェクト", desc: "ターゲット設計とコピー生成を組み合わせた採用導線の試作。", tag: "Recruiting" },
  { n: "03", title: "AIチャットボット試作", desc: "社内ナレッジ検索と一次対応を想定した会話設計の検証。", tag: "Chatbot" },
  { n: "04", title: "AIO診断レポート", desc: "AI検索時代を見据えたWeb・コンテンツの診断フォーマットを試作。", tag: "Diagnosis" },
  { n: "05", title: "営業資料・提案書生成ワークフロー", desc: "提案資料作成をAIで支援する業務フローの設計と検証。", tag: "Workflow" },
  { n: "06", title: "SNS投稿テンプレート・制作フロー", desc: "発信コンテンツの企画から制作までを型にする実験。", tag: "Content" },
];

export const contactPoints = [
  { k: "01", text: "初回相談は無料です。オンラインで対応します。" },
  { k: "02", text: "営業日2〜3日以内にご返信します。" },
  { k: "03", text: "構想段階・情報収集のみのご相談も歓迎します。" },
];

export const interestLabels = [
  "AI Web・採用支援",
  "AI業務改善・チャットボット",
  "AI研修・実践支援",
  "その他",
] as const;

export const companyRows = [
  { label: "会社名", value: "株式会社PulseWorks（PulseWorks Inc.）" },
  { label: "代表者", value: "代表取締役 小塩 健介" },
  { label: "所在地", value: "〒150-0044 東京都渋谷区円山町5番5号 Navi渋谷V 3階" },
  { label: "設立", value: "2026年4月14日" },
  { label: "資本金", value: "300万円" },
  {
    label: "事業内容",
    items: [
      "生成AI活用研修・コンサルティング",
      "AI導入・業務改善支援",
      "AIチャットボット・業務自動化の企画・開発",
      "Webサイト・LP・採用導線の企画・制作",
      "ITプロダクトの企画・開発・販売",
      "海外市場調査・事業開発支援",
    ],
  },
  { label: "お問い合わせ", email: "contact@pulseworks.co.jp" },
];
