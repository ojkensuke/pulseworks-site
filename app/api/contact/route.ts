import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  message: string;
  interests?: string[];
  budget?: string;
  timing?: string;
  // Honeypot: real visitors never see or fill this field. Bots that
  // auto-fill every input in a form will populate it.
  website?: string;
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function validate(body: Partial<ContactPayload>): string[] {
  const errors: string[] = [];
  if (!body.name?.trim()) errors.push("name");
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) errors.push("email");
  if (!body.message?.trim()) errors.push("message");
  return errors;
}

function buildInquiryText(body: ContactPayload): string {
  return [
    `お名前: ${body.name}`,
    `会社名: ${body.company || "（未記入）"}`,
    `メールアドレス: ${body.email}`,
    `興味のある支援内容: ${body.interests?.length ? body.interests.join(" / ") : "（未選択）"}`,
    `予算感: ${body.budget || "（未記入）"}`,
    `希望時期: ${body.timing || "（未記入）"}`,
    "",
    "ご相談内容:",
    body.message,
  ].join("\n");
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body.website) {
    // Honeypot tripped — pretend success so the bot doesn't adapt, but send nothing.
    return NextResponse.json({ ok: true });
  }

  const errors = validate(body);
  if (errors.length) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const payload = body as ContactPayload;
  const toAdmin = process.env.CONTACT_NOTIFY_EMAIL || "contact@pulseworks.co.jp";
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "PulseWorks <onboarding@resend.dev>";
  const inquiryText = buildInquiryText(payload);
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const notify = await resend.emails.send({
      from: fromAddress,
      to: toAdmin,
      replyTo: payload.email,
      subject: `【無料相談のお問い合わせ】${payload.company ? payload.company + " / " : ""}${payload.name} 様`,
      text: inquiryText,
    });
    if (notify.error) throw notify.error;

    const autoReply = await resend.emails.send({
      from: fromAddress,
      to: payload.email,
      subject: "【PulseWorks】お問い合わせありがとうございます",
      text: [
        `${payload.name} 様`,
        "",
        "このたびはPulseWorksへお問い合わせいただき、誠にありがとうございます。",
        "内容を確認のうえ、営業日2〜3日以内に担当よりご連絡いたします。",
        "",
        "--- お問い合わせ内容 ---",
        inquiryText,
        "",
        "株式会社PulseWorks",
        "contact@pulseworks.co.jp",
      ].join("\n"),
    });
    if (autoReply.error) throw autoReply.error;
  } catch (err) {
    console.error("[contact] resend send failed", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
