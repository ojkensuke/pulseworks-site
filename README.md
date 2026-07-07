# PulseWorks コーポレートサイト

株式会社PulseWorks(PulseWorks Inc.)の公式サイト。Next.js (App Router) + TypeScript + Tailwind CSS。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップページ(ヘッダー / ヒーロー / 課題提起 / Services / Why / How We Work / PulseWorks Lab / About / お問い合わせフォーム / フッター) |
| `/company` | 会社概要 |
| `/privacy` | プライバシーポリシー |

## 開発

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # 本番ビルド
npm run lint     # ESLint
npx tsc --noEmit # 型チェック
```

## お問い合わせフォームの送信の仕組み

`components/Contact.tsx` → `app/api/contact/route.ts` (Resend 経由でサーバーサイド送信)。

- フロントエンドバリデーション(必須項目・メール形式・同意チェック)に加え、APIルート側でも同じ内容をサーバーサイドで再検証する。
- `RESEND_API_KEY` が未設定の場合は `503` を返し、フロントエンドは自動的に `mailto:` リンクを開く方式にフォールバックする(送信できないまま壊れることはない)。
- 送信成功時は「管理者宛の通知メール」と「送信者宛の自動返信メール」の2通を送る。
- `RESEND_API_KEY` は設定済みだが **ドメイン未認証(2026-07-07時点)** の間、Resend はサンドボックスモードで、アカウント登録メールアドレス以外には送信できない。そのため現状は API 送信が失敗し、自動的に `mailto:` フォールバックへ切り替わる(送信自体は失敗しても、フォームは壊れずに動作する)。下記の手順でドメイン認証すれば Resend 経由の確実な送信に切り替わる。

### 必要な環境変数(Vercel の Environment Variables に設定)

| 変数名 | 必須 | 内容 |
| --- | --- | --- |
| `RESEND_API_KEY` | ○ | [resend.com](https://resend.com) で発行するAPIキー。未設定の間は自動的に `mailto:` フォールバックで動作する。 |
| `CONTACT_NOTIFY_EMAIL` | - | 管理者への通知メール送信先。未設定時は `contact@pulseworks.co.jp`。 |
| `CONTACT_FROM_EMAIL` | - | 送信元アドレス(例: `PulseWorks <contact@pulseworks.co.jp>`)。ドメイン未認証の間は Resend のサンドボックスアドレス(`onboarding@resend.dev`)を使う。 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | - | フォールバックの `mailto:` 送信先を上書きしたい場合のみ設定。 |

## コード外で必要な作業

- **`contact@pulseworks.co.jp` の受信設定**: Google Workspace 側でメールボックスまたはエイリアスを作成してください(サイト側は表示・リンク・送信のみ)。
- **Resend でのメール送信を有効化する手順**:
  1. [resend.com](https://resend.com) でアカウント作成。
  2. Resend の管理画面で `pulseworks.co.jp` ドメインを追加し、指示される TXT / CNAME / DKIM レコードをDNS(現在の登録事業者側)に追加してドメイン認証を完了する。
  3. API キーを発行し、Vercel プロジェクトの Environment Variables に `RESEND_API_KEY` として設定する。
  4. ドメイン認証が済んだら `CONTACT_FROM_EMAIL` を `PulseWorks <contact@pulseworks.co.jp>` などに設定する。
- 上記が未設定の間は、フォームは自動的に visitor 自身のメールソフトを起動する `mailto:` 方式で動作し続けるため、サイトが壊れることはない。

## 今後差し替えるべき箇所

- Cookie・アクセス解析: 現状 GA / GTM / Clarity 等の計測タグは未導入。導入時はプライバシーポリシー第6項に具体ツール名とオプトアウト導線を追記する。
- PulseWorks Lab の各カード(公開可能になり次第、実プロジェクトへ差し替え)
- 本番 OGP 画像(現状はロゴアイコンを流用)

## 捏造していない項目

顧客実績・導入社数・売上・ロゴ・口コミ・受賞歴・数値成果は一切記載していません。PulseWorks Lab は「自主制作・実証プロジェクト」と明記しています。
