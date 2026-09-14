"use client";

import ContactForm from "@/components/sections/ContactForm";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const OfficeMap = dynamic(() => import("@/components/sections/OfficeMap"), {
    ssr: false,
  });
  return (
    <>
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] pt-10 lg:pt-28">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-[45%]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(160, 209, 79, 0.12) 0%, rgba(160, 209, 79, 0.06) 25%, rgba(160, 209, 79, 0) 70%)",
          }}
        />

        <div className="relative mx-auto">
          <div className="max-w-[920px]">
            {/* Subheading */}
            <p className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal tracking-[1.6px] text-[#A0D14F] uppercase">
              CONNECT WITH DIGIGROWTHTERZ
            </p>

            {/* Heading */}
            <h1 className="mt-6 font-['Space_Grotesk'] text-[clamp(48px,7vw,72px)] leading-[1.1] font-bold tracking-[-0.04em] text-[#DFE2ED]">
              Let's Build Smarter{" "}
              <span className="text-[#A0D14F]">Digital Solutions.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[860px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#C3C9B3]">
              Whether you're exploring AI automation, a custom website, a mobile
              application, digital marketing, or eCommerce growth, our team is
              ready to help turn your ideas into measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-[clamp(5rem,8vw,8rem)]"
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(160,209,79,0.055),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(34,211,238,0.045),transparent_30%)]" />

          {/* Green Glow */}
          <div className="absolute top-[15%] -left-[280px] h-[600px] w-[600px] rounded-full bg-[#A0D14F]/[0.035] blur-[180px]" />

          {/* Cyan Glow */}
          <div className="absolute right-[-250px] bottom-[5%] h-[550px] w-[550px] rounded-full bg-cyan-400/[0.035] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto">
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#A0D14F]" />

                <span className="font-jetbrains text-[10px] font-medium tracking-[0.22em] text-[#A0D14F] uppercase sm:text-[11px]">
                  Start A Conversation
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-8 text-[clamp(2.75rem,4.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.04em] text-[#DFE2ED]">
                Let&apos;s Build
                <br />
                Something{" "}
                <span className="bg-gradient-to-r from-[#A0D14F] via-[#C3F56B] to-cyan-300 bg-clip-text text-transparent">
                  Smarter.
                </span>
              </h2>

              {/* Description */}
              <p className="font-inter mt-8 max-w-[590px] text-[15px] leading-7 text-[#DFE2ED99] sm:text-[16px] sm:leading-8">
                Tell us about your business, your goals, or the challenges
                you&apos;re trying to solve. From intelligent automation to
                digital experiences, we&apos;ll help you identify the right
                solution and turn it into something that works.
              </p>

              {/* Contact Information */}
              <div className="mt-10 space-y-6">
                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-[#A0D14F]/10 bg-[#A0D14F]/[0.06] transition-all duration-300 group-hover:border-[#A0D14F]/25 group-hover:bg-[#A0D14F]/[0.09]">
                    <Phone
                      className="h-5 w-5 text-[#A0D14F]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <h3 className="font-space-grotesk text-[16px] font-semibold text-[#DFE2ED]">
                      Phone
                    </h3>

                    <a
                      href="tel:+923036083548"
                      className="font-inter mt-1 block text-[14px] leading-6 text-[#DFE2ED80] transition-colors duration-300 hover:text-[#A0D14F]"
                    >
                      +92 303 6083548
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-cyan-300/10 bg-cyan-300/[0.05] transition-all duration-300 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[0.08]">
                    <Mail className="h-5 w-5 text-cyan-300" strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="font-space-grotesk text-[16px] font-semibold text-[#DFE2ED]">
                      Email us
                    </h3>

                    <a
                      href="mailto:info@digigrowtherz.com"
                      className="font-inter mt-1 block text-[14px] leading-6 text-[#DFE2ED80] transition-colors duration-300 hover:text-cyan-300"
                    >
                      info@digigrowtherz.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-[#FFED00]/10 bg-[#FFED00]/[0.04] transition-all duration-300 group-hover:border-[#FFED00]/25 group-hover:bg-[#FFED00]/[0.07]">
                    <MapPin
                      className="h-5 w-5 text-[#FFED00]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <h3 className="font-space-grotesk text-[16px] font-semibold text-[#DFE2ED]">
                      Address
                    </h3>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Street+No.+3%2C+Mohallah+Jinnah+Colony%2C+Wazirabad%2C+52000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter mt-1 block max-w-[430px] text-[14px] leading-6 text-[#DFE2ED80] transition-colors duration-300 hover:text-[#FFED00]"
                    >
                      Street No. 3, Mohallah Jinnah Colony, Wazirabad, 52000
                    </a>
                  </div>
                </div>
              </div>

              {/* BOTTOM INFO CARD */}
              <div className="mt-12 hidden rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-7 md:block">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] border border-[#A0D14F]/15 bg-[#A0D14F]/[0.06]">
                    <div className="h-2 w-2 rounded-full bg-[#A0D14F] shadow-[0_0_12px_rgba(160,209,79,0.8)]" />
                  </div>

                  <div>
                    <h3 className="font-space-grotesk text-[16px] font-semibold text-[#DFE2ED]">
                      Built Around Your Business
                    </h3>

                    <p className="font-inter mt-2 text-[13px] leading-6 text-[#DFE2ED80]">
                      No unnecessary complexity. We focus on understanding your
                      business first, then build the technology, automation, or
                      growth solution that actually fits.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — FORM */}
            <ContactForm />
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A0D14F]/20 to-transparent" />
      </section>

      <section>
        <OfficeMap />
      </section>
    </>
  );
}
