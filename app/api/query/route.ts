import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";
import QueryModel from "@/lib/models/Query";

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { message, projectName } = body;

    if (!message || !projectName) {
      return new NextResponse("Query message and Project name are required", { status: 400 });
    }

    const userName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'A User';
    const userEmail = user.emailAddresses[0]?.emailAddress || 'No Email provided';

    // Connect to MongoDB
    await connectToDatabase();

    // Save query to DB
    await QueryModel.create({
      clerkUserId: user.id,
      name: userName,
      email: userEmail,
      projectName: projectName,
      query: message,
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
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #09090b; border: 1px solid #3b82f6; border-radius: 12px; overflow: hidden; margin: 0 auto;">
          <!-- Header -->
          <tr>
            <td style="background-color: #172554; padding: 40px 20px; text-align: center; border-bottom: 1px solid #1e3a8a;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto; margin-bottom: 20px;">
                <tr>
                  <td style="border: 2px solid #3b82f6; border-radius: 16px; width: 64px; height: 64px; text-align: center; vertical-align: middle; background-color: #000000;">
                    <span style="color: #3b82f6; font-size: 40px; font-weight: 900; line-height: 64px; display: block; font-family: sans-serif;">?</span>
                  </td>
                </tr>
              </table>
              <h2 style="color: #60a5fa; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 3px;">Project Query Received</h2>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="margin-bottom: 30px;">
                <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Target Project:</p>
                <p style="color: #3b82f6; margin: 0; font-size: 22px; font-weight: bold;">${projectName}</p>
              </div>

              <div style="margin-bottom: 30px;">
                <p style="color: #52525b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Sender Identity:</p>
                <p style="color: #ffffff; margin: 0; font-size: 18px; font-weight: bold;">${userName}</p>
                <p style="color: #60a5fa; margin: 5px 0 0 0; font-size: 14px;">&lt;${userEmail}&gt;</p>
              </div>
              
              <div>
                <p style="color: #52525b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Query Payload:</p>
                <div style="background-color: #000000; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6; color: #e4e4e7; line-height: 1.6; font-size: 15px;">
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
      subject: `Project Query: ${projectName} from ${userName}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[QUERY_API_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
