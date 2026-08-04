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

      // COMPANY EMAIL
      to: "info@ergotrix.com",

      subject: "New Enquiry from ERGOTRIX Website",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color: #1e3a8a;">
            New Enquiry Received
          </h2>

          <hr />

          <p>
            <strong>Full Name:</strong><br />
            ${fullName}
          </p>

          <p>
            <strong>Company Name:</strong><br />
            ${companyName || "Not provided"}
          </p>

          <p>
            <strong>Email Address:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Phone Number:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Required Service:</strong><br />
            ${service || "Not specified"}
          </p>

          <p>
            <strong>Project Requirements:</strong>
          </p>

          <div
            style="
              background: #f1f5f9;
              padding: 15px;
              border-radius: 8px;
            "
          >
            ${message}
          </div>

          <hr />

          <p style="color: #64748b; font-size: 13px;">
            Sent automatically from the ERGOTRIX Engineering Solutions website.
          </p>

        </div>
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