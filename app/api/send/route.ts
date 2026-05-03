import { NextRequest, NextResponse } from "next/server";
import createTransporter from "../../../lib/mailer";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const { name, email, message } = formData;
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "bryanonyen@gmail.com",
    replyTo: email,
    subject: `Portfolio enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };
  try {
    const data = await createTransporter.sendMail(mailOptions);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
