import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // destructuring the form fields from the request data
    const { name, email, message } = data;

    // validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
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

    // set up the email options
    const mailOptions = {
      from: email, // Sender's email (from the form data)
      to: process.env.MAILTRAP_USER_EMAIL, // Receiver's email (mailtrap inbox)
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    }

    // send the email using nodemailer
    await transporter.sendMail(mailOptions);

    // return a success message if the email was sent successfully
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Log and return error if sending the email fails
    console.error(`Error sending email: ${error}`);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
