import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";
import Message from "@/lib/models/Message";

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name: providedName, message } = body;

    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }

    const userName = providedName?.trim() || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'A User';
    const userEmail = user.emailAddresses[0]?.emailAddress || 'No Email';

    // Connect to MongoDB Atlas
    await connectToDatabase();

    // Save transmission explicitly to the database
    await Message.create({
      clerkUserId: user.id,
      name: userName,
      email: userEmail,
      message: message,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = `
      <div style="font-family: 'Courier New', Courier, monospace, sans-serif; background-color: #000000; padding: 40px 20px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #09090b; border: 1px solid #064e3b; border-radius: 12px; overflow: hidden; margin: 0 auto;">
          <!-- Header -->
          <tr>
            <td style="background-color: #022c22; padding: 40px 20px; text-align: center; border-bottom: 1px solid #064e3b;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto; margin-bottom: 20px;">
                <tr>
                  <td style="border: 2px solid #10b981; border-radius: 16px; width: 64px; height: 64px; text-align: center; vertical-align: middle; background-color: #000000;">
                    <span style="color: #10b981; font-size: 40px; font-weight: 900; line-height: 64px; display: block; font-family: sans-serif;">D</span>
                  </td>
                </tr>
              </table>
              <h2 style="color: #10b981; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 3px;">Incoming Transmission</h2>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="margin-bottom: 30px;">
                <p style="color: #52525b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Sender Identity:</p>
                <p style="color: #ffffff; margin: 0; font-size: 18px; font-weight: bold;">${userName}</p>
                <p style="color: #10b981; margin: 5px 0 0 0; font-size: 14px;">&lt;${userEmail}&gt;</p>
              </div>
              
              <div>
                <p style="color: #52525b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Decrypted Payload:</p>
                <div style="background-color: #000000; padding: 25px; border-radius: 8px; border-left: 4px solid #10b981; color: #e4e4e7; line-height: 1.6; font-size: 15px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #000000; padding: 25px 20px; text-align: center; border-top: 1px solid #27272a;">
              <p style="color: #52525b; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Secured by Daksh Srivastava | Portfolio Uplink</p>
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "dakshshrivastav56@gmail.com",
      subject: `New Portfolio Message from ${userName}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
