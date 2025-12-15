import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
// In production, consider using Redis or a dedicated rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute

// Email validation regex (same as client-side for consistency)
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Simple XSS sanitization - escapes HTML entities to prevent script injection
function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired - create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true; // Rate limited
  }

  // Increment count
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();

    // destructuring the form fields from the request data
    const { name, email, message } = data;

    // validation - required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // validation - email format (server-side security layer)
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // create a nodemailer transporter with Mailtrap SMPT credentials
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT || "2525"),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      }
    });

    // Sanitize inputs to prevent XSS (name and message user input)
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);

    // set up the email options
    const mailOptions = {
      from: email, // Sender's email (from the form data)
      to: process.env.MAILTRAP_USER_EMAIL, // Receiver's email (mailtrap inbox)
      subject: `New message from ${sanitizedName}`,
      text: `You have received a new message from ${sanitizedName} (${email}):\n\n${sanitizedMessage}`,
    }

    // send the email using nodemailer
    await transporter.sendMail(mailOptions);

    // return a success message if the email was sent successfully
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Log error only in development environment
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }

    // Return generic error message to client (don't expose internal details)
    return NextResponse.json(
      { message: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}
