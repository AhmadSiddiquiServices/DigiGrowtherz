import { contactInquiryEmail } from "@/templates/contact-inquiry";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid business email.")
    .max(160, "Email is too long."),

  company: z
    .string()
    .trim()
    .max(120, "Company name is too long.")
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .trim()
    .min(1, "Please select a service.")
    .max(80, "Invalid service."),

  message: z
    .string()
    .trim()
    .min(10, "Please provide some project details.")
    .max(5000, "Project details are too long."),

  website: z.string().trim().max(200).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (typeof body?.website === "string" && body.website.trim()) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been submitted successfully.",
      });
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message || "Invalid form data.",
        },
        {
          status: 400,
        }
      );
    }

    const { name, email, company, service, message } = result.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("Missing CONTACT_TO_EMAIL.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact recipient is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.CONTACT_FROM_EMAIL) {
      console.error("Missing CONTACT_FROM_EMAIL.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact sender is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const html = contactInquiryEmail({
      name,
      email,
      company,
      service,
      message,
    });

    const { data, error } = await resend.emails.send({
      from: `DigiGrowtherz Website <${process.env.CONTACT_FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New Project Inquiry — ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your inquiry right now. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been sent successfully. We'll get back to you soon.",
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your inquiry. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}
