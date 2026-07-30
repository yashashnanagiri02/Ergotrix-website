import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      service,
      message,
    } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Please fill all the required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ERGOTRIX Website" <${process.env.EMAIL_USER}>`,
      to: "yashashnanagiri02@gmail.com",
      subject: "New Enquiry from ERGOTRIX Website",

      html: `
        <h2>New Enquiry Received</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>

        <p><strong>Company Name:</strong> ${companyName}</p>

        <p><strong>Email Address:</strong> ${email}</p>

        <p><strong>Phone Number:</strong> ${phone}</p>

        <p><strong>Required Service:</strong> ${service}</p>

        <p><strong>Project Requirements:</strong></p>

        <p>${message}</p>

        <hr/>

        <p>
        Sent automatically from the ERGOTRIX Engineering Solutions website.
        </p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    return NextResponse.json(
      { message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { message: "Failed to send enquiry." },
      { status: 500 }
    );
  }
}