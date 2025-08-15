import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message, name } = body;

    // Input validation
    if (!email || !message || !name) {
      console.error("❌ Missing required fields:", { email, message, name });
      return NextResponse.json(
        { error: "All fields (email, message, name) are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("❌ Invalid email format:", email);
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    console.log("📧 Sending contact form submission:", { name, email });

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@timtb.dev>",
      to: process.env.CONTACT_EMAIL || "timtb.dev@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend API error:", error);
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: error.message,
        },
        { status: 500 },
      );
    }

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    console.error("❌ Unexpected error in contact form:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
