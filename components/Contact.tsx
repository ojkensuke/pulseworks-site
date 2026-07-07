"use client";

import { useState } from "react";
import Link from "next/link";
import { contactPoints, interestLabels } from "@/lib/content";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
  interests: string[];
  budget: string;
  timing: string;
};

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;
type Status = { type: "error" | "success" | "info"; text: string } | null;

const emptyForm: FormState = { name: "", company: "", email: "", message: "", interests: [], budget: "", timing: "" };

function contactEmail() {
  if (typeof window !== "undefined") {
    const w = window as unknown as { NEXT_PUBLIC_CONTACT_EMAIL?: string };
    if (w.NEXT_PUBLIC_CONTACT_EMAIL) return w.NEXT_PUBLIC_CONTACT_EMAIL;
  }
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@pulseworks.co.jp";
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (label: string) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(label) ? f.interests.filter((i) => i !== label) : [...f.interests, label],
    }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "お名前をご入力ください。";
    if (!form.email.trim()) e.email = "メールアドレスをご入力ください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "メールアドレスの形式をご確認ください。";
    if (!form.message.trim()) e.message = "ご相談内容をご入力ください。";
    if (!consent) e.consent = "プライバシーポリシーへの同意が必要です。";
    return e;
  };

  const openMailtoFallback = () => {
    const email = contactEmail();
    const lines = [
      "お名前: " + form.name,
      "会社名: " + (form.company || "（未記入）"),
      "メールアドレス: " + form.email,
      "興味のある支援内容: " + (form.interests.length ? form.interests.join(" / ") : "（未選択）"),
      "予算感: " + (form.budget || "（未記入）"),
      "希望時期: " + (form.timing || "（未記入）"),
      "",
      "ご相談内容:",
      form.message,
    ];
    const subject = "【無料相談のお問い合わせ】" + (form.company ? form.company + " / " : "") + form.name + " 様";
    const href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
    try {
      const a = document.createElement("a");
      a.href = href;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // no-op — completion UI still shows
    }
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (submitting) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus({ type: "error", text: "未入力の項目、または未同意の項目があります。ご確認ください。" });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // Email backend not configured / send failed — fall back to the visitor's own mail client
        // rather than blocking the submission entirely.
        openMailtoFallback();
      }
      setSubmitted(true);
    } catch {
      // Network error reaching our own API — still fall back to mailto so the visitor isn't stuck.
      openMailtoFallback();
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const onReset = () => {
    setForm(emptyForm);
    setConsent(false);
    setErrors({});
    setStatus(null);
    setSubmitting(false);
    setSubmitted(false);
  };

  const statusStyle =
    status?.type === "error"
      ? { bg: "#FEF2F2", color: "#B91C1C", border: "#FECACA" }
      : status?.type === "success"
        ? { bg: "#ECFDF5", color: "#047857", border: "#A7F3D0" }
        : { bg: "#EFF4FF", color: "#1D4ED8", border: "#BFD2FE" };

  return (
    <section id="contact" className="scroll-mt-[76px]" style={{ background: "#fff", padding: "clamp(80px,11vw,144px) 0" }}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)]">
        <div className="grid items-start gap-[clamp(40px,5vw,88px)] md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div className="sticky top-[100px]">
            <div className="mb-[22px] flex items-center gap-3">
              <span className="h-px w-6" style={{ background: "var(--ink)" }} />
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.16em]" style={{ color: "var(--ink)" }}>
                Contact
              </span>
            </div>
            <h2
              className="font-jp m-0 font-extrabold"
              style={{ fontSize: "clamp(30px,4.4vw,50px)", lineHeight: 1.24, letterSpacing: "-0.025em", color: "var(--ink)", textWrap: "balance" }}
            >
              AI活用を、<br />
              次の一手に。
            </h2>
            <p className="mt-[26px] max-w-[360px] text-[15px]" style={{ lineHeight: 1.92, color: "#4B5563" }}>
              課題がまだ曖昧でも大丈夫です。Web制作、採用、業務改善、AI研修について、まずは状況をお聞かせください。
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t pt-6" style={{ borderColor: "var(--pw-border-subtle)" }}>
              {contactPoints.map((cp) => (
                <div key={cp.k} className="flex items-baseline gap-3 text-[13.5px]" style={{ color: "var(--pw-ink-600)" }}>
                  <span aria-hidden="true" className="font-mono text-[11px]" style={{ color: "var(--ac-strong)" }}>
                    {cp.k}
                  </span>
                  <span>{cp.text}</span>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-[14px] p-[clamp(32px,4vw,48px)]"
              style={{ border: "1px solid var(--pw-border-subtle)", background: "#F7FAFF" }}
            >
              <div
                aria-hidden="true"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full"
                style={{ background: "var(--ac-strong)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5L10 17.5L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="font-jp mt-[22px] font-bold"
                style={{ fontSize: "clamp(20px,2.4vw,26px)", lineHeight: 1.4, letterSpacing: "-0.02em", color: "var(--ink)" }}
              >
                お問い合わせありがとうございます。
              </h3>
              <p className="mt-[14px] max-w-[440px] text-[15px]" style={{ lineHeight: 1.9, color: "#4B5563" }}>
                内容を確認のうえ、営業日2〜3日以内にご返信します。メールソフトが起動しない場合は、お手数ですが{" "}
                <a href="mailto:contact@pulseworks.co.jp" className="pw-mailto-link no-underline" style={{ color: "var(--ac-strong)" }}>
                  contact@pulseworks.co.jp
                </a>{" "}
                まで直接ご連絡ください。
              </p>
              <button
                type="button"
                onClick={onReset}
                className="pw-reset-btn mt-[26px] rounded-[var(--r-btn)] border px-5 py-[11px] text-sm font-semibold"
                style={{ color: "var(--ac-strong)", background: "transparent", borderColor: "var(--pw-border-strong)" }}
              >
                別の内容で再度相談する
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="v2-name" className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                    お名前 <span className="font-mono text-[11px]" style={{ color: "var(--ac-strong)" }}>required</span>
                  </label>
                  <input
                    id="v2-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    placeholder="山田 太郎"
                    className="pw-field border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                    style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)" }}
                  />
                  {errors.name && (
                    <span role="alert" className="text-xs" style={{ color: "var(--pw-danger)" }}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="v2-company" className="text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                    会社名
                  </label>
                  <input
                    id="v2-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    autoComplete="organization"
                    placeholder="株式会社〇〇"
                    className="pw-field border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                    style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[9px]">
                <label htmlFor="v2-email" className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                  メールアドレス <span className="font-mono text-[11px]" style={{ color: "var(--ac-strong)" }}>required</span>
                </label>
                <input
                  id="v2-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  placeholder="you@example.com"
                  className="pw-field border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                  style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)" }}
                />
                {errors.email && (
                  <span role="alert" className="text-xs" style={{ color: "var(--pw-danger)" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[9px]">
                <label htmlFor="v2-message" className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                  ご相談内容 <span className="font-mono text-[11px]" style={{ color: "var(--ac-strong)" }}>required</span>
                </label>
                <textarea
                  id="v2-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  placeholder="現在の課題や、相談したい内容をご記入ください。"
                  className="pw-field min-h-[96px] resize-y border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                  style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)", lineHeight: 1.7 }}
                />
                {errors.message && (
                  <span role="alert" className="text-xs" style={{ color: "var(--pw-danger)" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <fieldset className="m-0 flex flex-col gap-[14px] border-none p-0">
                <legend className="p-0 text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                  興味のある支援内容 <span className="font-medium" style={{ color: "var(--pw-ink-400)" }}>（複数選択可）</span>
                </legend>
                <div className="flex flex-wrap gap-[10px]">
                  {interestLabels.map((label) => {
                    const checked = form.interests.includes(label);
                    return (
                      <label
                        key={label}
                        className="inline-flex cursor-pointer items-center gap-[9px] rounded-[var(--r-pill)] border px-4 py-[9px] text-[13.5px] font-medium transition-all duration-150"
                        style={{
                          borderColor: checked ? "var(--ac-strong)" : "var(--pw-border-strong)",
                          color: checked ? "#1D4ED8" : "var(--pw-ink-700)",
                          background: checked ? "var(--pw-blue-50, #EFF4FF)" : "#fff",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleInterest(label)}
                          className="absolute h-0 w-0 opacity-0"
                        />
                        <span
                          aria-hidden="true"
                          className="h-[7px] w-[7px] rounded-full"
                          style={{ background: checked ? "var(--ac-strong)" : "var(--pw-border-strong)" }}
                        />
                        {label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="v2-budget" className="text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                    予算感 <span className="font-medium" style={{ color: "var(--pw-ink-400)" }}>（任意）</span>
                  </label>
                  <input
                    id="v2-budget"
                    type="text"
                    value={form.budget}
                    onChange={(e) => setField("budget", e.target.value)}
                    placeholder="例：30〜50万円 / 未定"
                    className="pw-field border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                    style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)" }}
                  />
                </div>
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="v2-timing" className="text-[13px] font-semibold" style={{ color: "var(--pw-ink-800)" }}>
                    希望時期 <span className="font-medium" style={{ color: "var(--pw-ink-400)" }}>（任意）</span>
                  </label>
                  <input
                    id="v2-timing"
                    type="text"
                    value={form.timing}
                    onChange={(e) => setField("timing", e.target.value)}
                    placeholder="例：今四半期中 / 未定"
                    className="pw-field border-0 border-b-[1.5px] bg-transparent py-[13px] text-[15px] outline-none"
                    style={{ color: "var(--ink)", borderColor: "var(--pw-border-strong)" }}
                  />
                </div>
              </div>

              {status && (
                <div
                  role="alert"
                  className="rounded-[var(--r-btn)] border px-4 py-[14px] text-sm"
                  style={{ lineHeight: 1.7, borderColor: statusStyle.border, background: statusStyle.bg, color: statusStyle.color }}
                >
                  {status.text}
                </div>
              )}

              <label className="flex cursor-pointer items-start gap-3 py-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setErrors((er) => ({ ...er, consent: undefined }));
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.consent}
                  className="mt-px h-5 w-5 min-w-[20px] cursor-pointer"
                  style={{ accentColor: "var(--ac-strong)" }}
                />
                <span className="text-[13.5px]" style={{ lineHeight: 1.7, color: "var(--pw-ink-700)" }}>
                  <Link href="/privacy" target="_blank" rel="noopener" className="pw-mailto-link no-underline" style={{ color: "var(--ac-strong)" }}>
                    プライバシーポリシー
                  </Link>
                  に同意する
                </span>
              </label>
              {errors.consent && (
                <span role="alert" className="-mt-[14px] text-xs" style={{ color: "var(--pw-danger)" }}>
                  {errors.consent}
                </span>
              )}

              <div className="mt-1 flex flex-wrap items-center gap-[18px]">
                <button
                  type="submit"
                  disabled={submitting}
                  className="pw-submit-btn inline-flex items-center gap-[10px] rounded-[var(--r-btn)] border-none px-8 py-4 text-base font-semibold"
                  style={{
                    color: "var(--ac-ink)",
                    background: submitting ? "var(--pw-ink-400)" : "var(--ac-strong)",
                    cursor: submitting ? "not-allowed" : "pointer",
                  }}
                >
                  {submitting ? "送信中…" : "無料相談を申し込む"}{" "}
                  <span aria-hidden="true" className="font-mono">
                    {submitting ? "" : "→"}
                  </span>
                </button>
                <p className="m-0 max-w-[260px] text-xs" style={{ lineHeight: 1.7, color: "var(--pw-ink-400)" }}>
                  ご相談は無料です。営業日2〜3日以内にご返信します。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
