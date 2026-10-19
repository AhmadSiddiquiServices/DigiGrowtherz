import { contactInquiryEmail } from "@/templates/contact-inquiry";
import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { Resend } from "resend";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const serviceOptions = [
  "ai-automation",
  "web-development",
  "mobile-development",
  "digital-marketing",
  "seo",
  "branding",
  "ecommerce",
  "b2b-exports",
  "other",
] as const;

type ServiceValue = (typeof serviceOptions)[number];

const serviceLabels: Record<ServiceValue, string> = {
  "ai-automation": "AI Automation",
  "web-development": "Website Development",
  "mobile-development": "Mobile Development",
  "digital-marketing": "Digital Marketing",
  seo: "SEO Services",
  branding: "Branding & Design",
  ecommerce: "eCommerce Solutions",
  "b2b-exports": "B2B Exports",
  other: "Other / Custom Solution",
};

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
    .max(254, "Email address is too long."),

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
    .refine(
      (value) => serviceOptions.includes(value as ServiceValue),
      "Please select a valid service."
    ),

  message: z
    .string()
    .trim()
    .min(10, "Please provide some project details.")
    .max(5000, "Project details are too long."),
});

type ContactInput = z.infer<typeof contactSchema>;

function getStringField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

/**
 * Prefer the platform-provided client IP header.
 * Use the forwarded IP chain as a fallback.
 */
function getClientIp(request: Request): string {
  const realIp = request.headers.get("x-real-ip")?.trim();

  if (realIp) {
    return realIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const forwardedIps = forwardedFor
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    const lastForwardedIp = forwardedIps[forwardedIps.length - 1];

    if (lastForwardedIp) {
      return lastForwardedIp;
    }
  }

  return "unknown";
}

/**
 * Create a shared Upstash rate limiter.
 *
 * Limit: 5 requests per IP over 10 minutes.
 * The IP is hashed before being used as the rate-limit identifier.
 */
function createContactRateLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Ratelimit({
    redis: new Redis({
      url,
      token,
    }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    prefix: "digigrowtherz:contact",
  });
}

let contactRateLimiter: ReturnType<typeof createContactRateLimiter> | undefined;

function getContactRateLimiter() {
  if (contactRateLimiter === undefined) {
    contactRateLimiter = createContactRateLimiter();
  }

  return contactRateLimiter;
}

/**
 * Verify Cloudflare Turnstile with the secret key.
 *
 * A token is only accepted when:
 * - Cloudflare confirms success.
 * - The verified hostname is allowed.
 * - The action equals "contact".
 */
async function verifyContactTurnstile(
  token: string,
  ip: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret || !token) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (ip !== "unknown") {
    body.set("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    }
  );

  if (!response.ok) {
    throw new Error("Cloudflare Turnstile verification service failed.");
  }

  const result = (await response.json()) as {
    success?: boolean;
    hostname?: string;
    action?: string;
    "error-codes"?: string[];
  };

  const allowedHostnames = (
    process.env.TURNSTILE_ALLOWED_HOSTNAMES ||
    "digigrowtherz.com,www.digigrowtherz.com,localhost,127.0.0.1"
  )
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);

  const hostname = result.hostname?.trim().toLowerCase();

  return Boolean(
    result.success &&
    hostname &&
    allowedHostnames.includes(hostname) &&
    result.action === "contact"
  );
}

export async function POST(request: Request) {
  try {
    // 1. Rate limiting: fail closed if Upstash is not configured.
    const rateLimiter = getContactRateLimiter();

    if (!rateLimiter) {
      console.error(
        "[Contact API] Upstash Redis environment variables are missing."
      );

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    const clientIp = getClientIp(request);

    const ipHash = createHash("sha256").update(clientIp).digest("hex");

    let rateLimitResult: Awaited<ReturnType<typeof rateLimiter.limit>>;

    try {
      rateLimitResult = await rateLimiter.limit(ipHash);
    } catch (error) {
      console.error("[Contact API] Rate limiter request failed:", error);

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many messages have been submitted. Please try again in a few minutes.",
        },
        { status: 429 }
      );
    }

    // 2. The contact form now submits multipart FormData.
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.toLowerCase().includes("multipart/form-data")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        { status: 400 }
      );
    }

    let formData: FormData;

    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        { status: 400 }
      );
    }

    // 3. Validate the expected form type.
    if (getStringField(formData, "formType") !== "contact") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form type.",
        },
        { status: 400 }
      );
    }

    // 4. Honeypot check.
    //
    // Real visitors should leave contactFax empty.
    // Do not email filled honeypot submissions.
    // Return generic success to avoid revealing the honeypot to basic bots.
    if (getStringField(formData, "contactFax").trim()) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been submitted successfully.",
      });
    }

    // 5. Validate all actual form fields on the server.
    const validation = contactSchema.safeParse({
      name: getStringField(formData, "name"),
      email: getStringField(formData, "email"),
      company: getStringField(formData, "company"),
      service: getStringField(formData, "service"),
      message: getStringField(formData, "message"),
    });

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the form details and try again.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const input: ContactInput = validation.data;

    // 6. Verify Cloudflare Turnstile on the server.
    const turnstileToken = getStringField(formData, "turnstileToken");

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the security verification.",
        },
        { status: 400 }
      );
    }

    let turnstileValid = false;

    try {
      turnstileValid = await verifyContactTurnstile(turnstileToken, clientIp);
    } catch (error) {
      console.error(
        "[Contact API] Turnstile verification request failed:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Security verification is temporarily unavailable. Please try again.",
        },
        { status: 503 }
      );
    }

    if (!turnstileValid) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Security verification failed. Please verify again and retry.",
        },
        { status: 400 }
      );
    }

    // 7. Verify email environment variables.
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error(
        "[Contact API] Required Resend environment variables are missing."
      );

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    // 8. Generate the email using the existing DigiGrowtherz template.
    const subjectName = input.name.replace(/[\r\n]+/g, " ").slice(0, 100);

    const html = contactInquiryEmail({
      name: input.name,
      email: input.email,
      company: input.company ?? "",
      service: serviceLabels[input.service as ServiceValue],
      message: input.message,
    });

    // 9. Send the business notification through Resend.
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `DigiGrowtherz Website <${from}>`,
      to: [to],
      replyTo: input.email,
      subject: `New Project Inquiry — ${subjectName}`,
      html,
    });

    if (error) {
      console.error("[Contact API] Resend notification failed:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your inquiry right now. Please try again later.",
        },
        { status: 502 }
      );
    }

    // 10. Report success only after Resend accepts the notification.
    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been sent successfully. We'll get back to you soon.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Request failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
