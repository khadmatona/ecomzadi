import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: `Contact form is not yet configured. Please email us directly at ${SITE.email}.`,
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Ecomzadi Website <onboarding@resend.dev>`,
      to: SITE.email,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please try again." },
      { status: 500 },
    );
  }
}
