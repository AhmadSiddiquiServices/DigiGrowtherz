"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, ChevronDown, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { toast } from "react-toastify";
import { sendGAEvent } from "@next/third-parties/google";

type FormStatus = "idle" | "loading";

interface InquiryApiResponse {
  success?: boolean;
  message?: string;
  id?: string;
  errors?: Record<string, string[] | undefined>;
}

export default function ContactForm() {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    if (!turnstileSiteKey) {
      toast.error(
        "Security verification is not configured. Please contact us directly.",
        { position: "top-right" }
      );
      return;
    }

    if (!turnstileToken) {
      toast.error(
        "Please complete the security verification before submitting.",
        { position: "top-right" }
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Identify the intended form to the API.
    formData.set("formType", "contact");

    // The server validates this token with Cloudflare.
    formData.set("turnstileToken", turnstileToken);

    // The hidden contactFax field remains in FormData.
    // The server checks it independently of client-side validation.

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      let result: InquiryApiResponse | null = null;

      try {
        result = (await response.json()) as InquiryApiResponse;
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        const firstFieldError = result?.errors
          ? Object.values(result.errors).flat().find(Boolean)
          : undefined;

        toast.error(
          firstFieldError ||
            result?.message ||
            "Unable to send your inquiry. Please try again.",
          { position: "top-right" }
        );

        return;
      }

      toast.success(
        result.message || "Your inquiry has been sent successfully.",
        { position: "top-right" }
      );

      // Track only successfully submitted inquiries.
      sendGAEvent("event", "generate_lead", {
        form_name: "contact_form",
        lead_source: "website_contact_form",
      });

      // Reset the form only after the API confirms success.
      form.reset();
    } catch (error) {
      console.error("[ContactForm] Submission failed:", error);

      toast.error(
        "Unable to connect to the server. Please check your connection and try again.",
        { position: "top-right" }
      );
    } finally {
      // Turnstile tokens are single-use. Request a fresh token next time.
      setTurnstileToken("");
      turnstileRef.current?.reset();

      setStatus("idle");
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A1017]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8 md:mt-0 lg:p-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#A0D14F]/[0.05] blur-[130px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#FFED00]/[0.025] blur-[130px]" />

        <div className="absolute top-0 right-[12%] left-[12%] h-px bg-gradient-to-r from-transparent via-[#A0D14F]/30 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A0D14F] shadow-[0_0_10px_rgba(160,209,79,0.7)]" />

            <span className="font-jetbrains text-[10px] tracking-[0.2em] text-[#A0D14F] uppercase">
              Project Inquiry
            </span>
          </div>

          <h2 className="font-space-grotesk mt-5 text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.025em] text-[#DFE2ED]">
            Tell Us About Your Project.
          </h2>

          <p className="font-inter mt-4 text-[14px] leading-6 text-[#DFE2ED80]">
            Share a few details and our team will review your requirements and
            get back to you.
          </p>
        </div>

        <div className="mt-7 h-px bg-white/[0.07]" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7 space-y-6">
          {/* HONEYPOT — hidden from real visitors */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-auto -left-[10000px] h-px w-px overflow-hidden"
          >
            <label htmlFor="contact-fax">Leave this field empty</label>

            <input
              id="contact-fax"
              type="text"
              name="contactFax"
              tabIndex={-1}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              defaultValue=""
              aria-hidden="true"
            />
          </div>

          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                disabled={isLoading}
                className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase"
              >
                Business Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                maxLength={254}
                required
                disabled={isLoading}
                className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase"
            >
              Company / Business
            </label>

            <input
              id="company"
              type="text"
              name="company"
              placeholder="Your company or business name"
              autoComplete="organization"
              maxLength={120}
              disabled={isLoading}
              className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase"
            >
              Service Required
            </label>

            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                disabled={isLoading}
                className="font-inter h-12 w-full cursor-pointer appearance-none rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 pr-10 text-[14px] text-[#DFE2ED80] transition-all duration-300 outline-none focus:border-[#A0D14F]/35 focus:bg-[#070B12] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="ai-automation">AI Automation</option>
                <option value="web-development">Website Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="seo">SEO Services</option>
                <option value="branding">Branding &amp; Design</option>
                <option value="ecommerce">eCommerce Solutions</option>
                <option value="b2b-exports">B2B Exports</option>
                <option value="other">Other / Custom Solution</option>
              </select>

              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-[#DFE2ED50]"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="message"
              className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase"
            >
              Project Details
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              minLength={10}
              maxLength={5000}
              required
              disabled={isLoading}
              placeholder="Tell us about your goals, current challenges, or what you'd like to build..."
              className="font-inter min-h-[155px] w-full resize-y rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 py-3.5 text-[14px] leading-6 text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {/* CLOUDFLARE TURNSTILE */}
          <div>
            <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
              Security Verification
              <span className="text-[#A0D14F]"> *</span>
            </label>

            {turnstileSiteKey ? (
              <div className="min-h-[65px] overflow-hidden">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={turnstileSiteKey}
                  options={{
                    theme: "dark",
                    size: "flexible",
                    action: "contact",
                  }}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                  }}
                  onExpire={() => {
                    setTurnstileToken("");

                    toast.info(
                      "Your security check expired. Please verify again.",
                      { position: "top-right" }
                    );
                  }}
                  onError={() => {
                    setTurnstileToken("");

                    toast.error(
                      "The security check could not load. Please refresh and try again.",
                      { position: "top-right" }
                    );
                  }}
                />
              </div>
            ) : (
              <p
                role="alert"
                className="font-inter rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300"
              >
                Security verification is not configured. Please contact the
                website administrator.
              </p>
            )}

            <p className="font-inter mt-2 text-[10px] leading-5 text-[#DFE2ED40]">
              Complete the security check before sending your inquiry.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || !turnstileSiteKey}
            aria-busy={isLoading}
            className="group flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-[4px] bg-[#A0D14F] px-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(160,209,79,0.14)] hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none"
          >
            {isLoading ? (
              <>
                <Loader2
                  className="h-4 w-4 animate-spin text-[#070B12]"
                  strokeWidth={2}
                />

                <span className="font-jetbrains text-[11px] font-bold tracking-[0.18em] text-[#070B12] uppercase">
                  Sending Inquiry
                </span>
              </>
            ) : (
              <>
                <span className="font-jetbrains text-[11px] font-bold tracking-[0.18em] text-[#070B12] uppercase">
                  Send Project Inquiry
                </span>

                <ArrowUpRight
                  className="h-4 w-4 text-[#070B12] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </>
            )}
          </button>

          {/* Privacy */}
          <p className="font-inter text-center text-[10px] leading-5 text-[#DFE2ED40]">
            We&apos;ll only use your information to understand your project and
            respond to your inquiry.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
