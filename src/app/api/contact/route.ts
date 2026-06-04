import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
    }

    // Basic validation
    if (!body.name || !body.email || !body.purpose || !body.consent) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Here you would integrate with Resend or EmailJS
    // For now, we return success so the UI works
    // Example Resend integration:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: "...", to: "...", subject: "...", text: "..." });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
