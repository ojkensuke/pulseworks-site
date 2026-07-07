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
- `pulseworks.co.jp` は Resend でドメイン認証済み(2026-07-07)。`RESEND_API_KEY` / `CONTACT_FROM_EMAIL` も Vercel の Production 環境変数に設定済みで、Resend 経由の送信が本番で稼働中。
- 万一 Resend 側で障害が発生した場合(APIキー未設定 / 送信失敗 / ネットワークエラー等)は、自動的に visitor 自身のメールソフトを起動する `mailto:` 方式にフォールバックする(フォームが完全に壊れることはない)。

### 必要な環境変数(Vercel の Environment Variables に設定済み)

| 変数名 | 必須 | 内容 |
| --- | --- | --- |
| `RESEND_API_KEY` | ○ | [resend.com](https://resend.com) で発行したAPIキー。設定済み。未設定/失敗時は自動的に `mailto:` フォールバックで動作する。 |
| `CONTACT_NOTIFY_EMAIL` | - | 管理者への通知メール送信先。未設定時は `contact@pulseworks.co.jp`。 |
| `CONTACT_FROM_EMAIL` | - | 送信元アドレス。`PulseWorks <contact@pulseworks.co.jp>` を設定済み。 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | - | フォールバックの `mailto:` 送信先を上書きしたい場合のみ設定。 |

## コード外で必要な作業

- **`contact@pulseworks.co.jp` の受信設定**: Google Workspace 側でメールボックスまたはエイリアスを作成する(サイト側は表示・リンク・送信のみ)。
- Resend のドメイン認証・APIキー発行・DNS設定(DKIM/SPF/MX/DMARC)は完了済み。

## 今後差し替えるべき箇所

- Cookie・アクセス解析: 現状 GA / GTM / Clarity 等の計測タグは未導入。導入時はプライバシーポリシー第6項に具体ツール名とオプトアウト導線を追記する。
- PulseWorks Lab の各カード(公開可能になり次第、実プロジェクトへ差し替え)
- 本番 OGP 画像(現状はロゴアイコンを流用)

## 捏造していない項目

顧客実績・導入社数・売上・ロゴ・口コミ・受賞歴・数値成果は一切記載していません。PulseWorks Lab は「自主制作・実証プロジェクト」と明記しています。
