import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import { z } from "zod"

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100).optional(),
  enquiryType: z.enum(["general", "sales", "support", "partnership"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
})

const ses = new SESClient({
  region: process.env.AWS_SES_REGION || "eu-west-1",
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY!,
  },
})

const RECIPIENT = process.env.SES_RECIPIENT_EMAIL || "empower@luminai.co.uk"
const SENDER = process.env.SES_SENDER_EMAIL || "noreply@luminai.co.uk"

const enquiryTypeLabels: Record<string, string> = {
  general: "General Enquiry",
  sales: "Sales & Pricing",
  support: "Technical Support",
  partnership: "Partnership",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = enquirySchema.parse(body)

    const typeLabel = enquiryTypeLabels[data.enquiryType] || data.enquiryType

    const command = new SendEmailCommand({
      Source: SENDER,
      Destination: {
        ToAddresses: [RECIPIENT],
      },
      ReplyToAddresses: [data.email],
      Message: {
        Subject: {
          Data: `[Luminai Enquiry] ${typeLabel} from ${data.name}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
                <div style="border-bottom: 2px solid #0891b2; padding-bottom: 16px; margin-bottom: 24px;">
                  <h2 style="margin: 0; color: #0f172a; font-size: 20px;">New Enquiry — ${typeLabel}</h2>
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px; vertical-align: top;">Name</td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Email</td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${data.email}" style="color: #0891b2;">${data.email}</a></td>
                  </tr>
                  ${data.company ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Company</td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.company}</td>
                  </tr>
                  ` : ""}
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Type</td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${typeLabel}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                  <p style="margin: 0; color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `New Enquiry — ${typeLabel}\n\nName: ${data.name}\nEmail: ${data.email}${data.company ? `\nCompany: ${data.company}` : ""}\nType: ${typeLabel}\n\nMessage:\n${data.message}`,
            Charset: "UTF-8",
          },
        },
      },
    })

    await ses.send(command)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    console.error("SES send error:", error)
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    )
  }
}
