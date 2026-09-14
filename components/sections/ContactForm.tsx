"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
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
      {/* ======================================================== */}
      {/* FORM BACKGROUND */}
      {/* ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top Green Glow */}
        <div className="absolute top-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#A0D14F]/[0.05] blur-[130px]" />

        {/* Bottom Cyan Glow */}
        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

        {/* Top Highlight */}
        <div className="absolute top-0 right-[12%] left-[12%] h-px bg-gradient-to-r from-transparent via-[#A0D14F]/30 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A0D14F] shadow-[0_0_10px_rgba(160,209,79,0.7)]" />

            <span className="font-jetbrains text-[10px] tracking-[0.2em] text-[#A0D14F] uppercase">
              Project Inquiry
            </span>
          </div>

          <h2 className="font-space-grotesk mt-5 text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.025em] text-[#DFE2ED]">
            Tell Us About Your Project.
            {/* <br /> */}
          </h2>

          <p className="font-inter mt-4 text-[14px] leading-6 text-[#DFE2ED80]">
            Share a few details and our team will review your requirements and
            get back to you.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-7 h-px bg-white/[0.07]" />

        {/* ====================================================== */}
        {/* FORM */}
        {/* ====================================================== */}

        <form className="mt-7 space-y-6">
          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
                Business Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12]"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
              Company / Business
            </label>

            <input
              type="text"
              name="company"
              placeholder="Your company or business name"
              className="font-inter h-12 w-full rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 text-[14px] text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12]"
            />
          </div>

          {/* Service */}
          <div>
            <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
              Service Required
            </label>

            <div className="relative">
              <select
                name="service"
                defaultValue=""
                className="font-inter h-12 w-full appearance-none rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 pr-10 text-[14px] text-[#DFE2ED80] transition-all duration-300 outline-none focus:border-[#A0D14F]/35 focus:bg-[#070B12]"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="ai-automation">AI Automation</option>

                <option value="web-development">Website Development</option>

                <option value="mobile-development">Mobile Development</option>

                <option value="digital-marketing">Digital Marketing</option>

                <option value="seo">SEO Services</option>

                <option value="branding">Branding & Design</option>

                <option value="ecommerce">eCommerce Solutions</option>

                <option value="other">Other / Custom Solution</option>
              </select>

              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-[#DFE2ED50]"
                strokeWidth={1.7}
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="font-jetbrains mb-2.5 block text-[10px] font-medium tracking-[0.16em] text-[#DFE2ED66] uppercase">
              Project Details
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your goals, current challenges, or what you'd like to build..."
              className="font-inter min-h-[155px] w-full resize-y rounded-[4px] border border-white/[0.09] bg-[#070B12]/70 px-4 py-3.5 text-[14px] leading-6 text-[#DFE2ED] transition-all duration-300 outline-none placeholder:text-[#DFE2ED35] focus:border-[#A0D14F]/35 focus:bg-[#070B12]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-[4px] bg-[#A0D14F] px-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(160,209,79,0.14)] hover:brightness-105 active:scale-[0.99]"
          >
            <span className="font-jetbrains text-[11px] font-bold tracking-[0.18em] text-[#070B12] uppercase">
              Send Project Inquiry
            </span>

            <ArrowUpRight
              className="h-4 w-4 text-[#070B12] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
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
