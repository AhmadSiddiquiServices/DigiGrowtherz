"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseStudiesPage() {
  const testimonials = [
    {
      quote:
        "Their AI capabilities, combined with their Nearshore delivery model, has been a game-changer for our software development practice.",
      name: "Taryn Owen",
      role: "President & CEO, TrueBlue",
      image: "/images/avatar-1.webp",
    },
    {
      quote:
        "With DigiGrowtherz AI, we improved our velocity by almost 300% while reducing bugs to near zero.",
      name: "AJ Alix",
      role: "Head of Product, COX",
      image: "/images/avatar-2.webp",
    },
    {
      quote:
        "DigiGrowtherz AI didn't just drop in a chatbot. They took the time to map our workflows and build an assistant our team actually trusts.",
      name: "Christopher Grinnell",
      role: "President, Aero Star Aviation",
      image: "/images/avatar-3.webp",
    },
    {
      quote:
        "The implementation quality exceeded our expectations and accelerated our AI initiatives significantly.",
      name: "Sarah Mitchell",
      role: "VP Innovation, HealthTech",
      image: "/images/avatar-1.webp",
    },
    {
      quote:
        "Their GenDD methodology transformed how our engineering teams approach delivery.",
      name: "David Kim",
      role: "CTO, FinCore",
      image: "/images/avatar-2.webp",
    },
    {
      quote:
        "We finally moved from AI experimentation to measurable business outcomes.",
      name: "Jessica Parker",
      role: "Director of Operations, Nexa",
      image: "/images/avatar-3.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];
  return (
    <>
      {/* Case Study Hero */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex h-[22px] items-center border border-[#A0D14F4D] bg-[#A0D14F1A] px-3">
            <span className="font-['JetBrains_Mono'] text-[12px] leading-[12px] font-medium tracking-[1.2px] text-[#A0D14F] uppercase">
              Proven ROI & Performance
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 font-['Space_Grotesk'] text-[72px] leading-[72px] font-bold tracking-[-2.88px] text-[#DFE2ED] max-[1024px]:text-[60px] max-[1024px]:leading-[60px] max-[768px]:text-[48px] max-[768px]:leading-[48px] max-[640px]:text-[40px] max-[640px]:leading-[40px]">
            Less AI Hype.
            <br />
            <span className="text-[#A0D14F]">More Results.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[700px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2ED99] max-[768px]:text-[16px] max-[768px]:leading-[26px]">
            We help enterprises turn AI into ROI by automating high-impact work
            and building AI native products grounded in your data.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-14">
        <div className="mx-auto">
          <div className="grid gap-6 xl:grid-cols-[70%_30%] xl:justify-center">
            {/* Featured Case Study */}
            <div className="relative flex min-h-[449px] flex-col justify-between overflow-hidden border border-white/10 bg-[rgba(25,25,25,0.6)] p-10 backdrop-blur-[12px]">
              {/* Top Right Glow */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-[12px] bg-[#A0D14F]/5 blur-[64px]" />

              <div className="relative z-10">
                {/* Sub Heading */}
                <p className="font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#A0D14F] uppercase">
                  Specialty Pharmacy Optimization
                </p>

                {/* Heading */}
                <h3 className="mt-6 max-w-[500px] font-['Space_Grotesk'] text-[48px] leading-[57.6px] font-semibold tracking-[-0.96px] text-[#DFE2ED] max-md:text-[40px] max-md:leading-[48px]">
                  99% Faster Client Onboarding
                </h3>

                {/* Description */}
                <p className="mt-6 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99] md:max-w-[540px]">
                  Our proprietary patient system integration reduced a 20-day
                  manual cycle to under 5 hours using automated data
                  orchestration.
                </p>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-wrap gap-4">
                  {/* Stat 1 */}
                  <div className="w-full border border-white/5 bg-[#191919] px-4 pt-[15px] pb-4 md:w-auto">
                    <h4 className="font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#A0D14F]">
                      20 Days
                    </h4>

                    <p className="mt-1 font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#DFE2ED66] uppercase">
                      Previous Cycle
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="w-full border border-[#A0D14F33] bg-[#A0D14F1A] px-4 pt-[15px] pb-4 md:w-auto">
                    <h4 className="font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#A0D14F]">
                      &lt; 5 Hours
                    </h4>

                    <p className="mt-1 font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#DFE2ED66] uppercase">
                      Current AI Cycle
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="group flex cursor-pointer items-center gap-3 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-['Inter'] text-[12px] leading-3 font-semibold tracking-[1.2px] text-[#A0D14F] uppercase">
                    View Study
                  </span>

                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                      stroke="#A0D14F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Secondary Case Study */}
            <div className="flex min-h-[449px] flex-col justify-center border border-white/10 bg-[linear-gradient(135deg,#191919_0%,#070B12_100%)] px-8 py-[102px] backdrop-blur-[12px]">
              {/* Sub Heading */}
              <p className="font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#0057FF] uppercase">
                Sales Intelligence
              </p>

              {/* Number */}
              <div className="mt-4 font-['Space_Grotesk'] text-[72px] leading-[79.2px] font-bold tracking-[-2.88px] text-white">
                47%
              </div>

              {/* Heading */}
              <h3 className="mt-4 font-['Space_Grotesk'] text-[32px] leading-10 font-medium text-[#DFE2ED]">
                Sales Emails
                <br />
                Handled by AI
              </h3>

              {/* Description */}
              <p className="mt-6 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                Automated lead qualification and response drafting, allowing
                teams to focus on closing.
              </p>
            </div>
          </div>
          {/* Bottom Case Studies */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[30%_70%] xl:justify-center">
            {/* Fleet Operations Card */}
            <div className="relative overflow-hidden border border-white/10 bg-[#191919] p-8 backdrop-blur-[12px]">
              {/* Corner Illustration */}
              <Image
                src="/images/maintenance.webp"
                alt=""
                width={90}
                height={93}
                className="absolute right-0 bottom-0 opacity-10"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Subheading */}
                <p className="font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#FFED00] uppercase">
                  Fleet Operations
                </p>

                {/* Metric */}
                <h3 className="mt-6 font-['Space_Grotesk'] text-[48px] leading-[57.6px] font-semibold tracking-[-0.96px] text-[#FFED00]">
                  30%
                </h3>

                {/* Heading */}
                <h4 className="mt-2 font-['Space_Grotesk'] text-[32px] leading-10 font-medium text-[#DFE2ED]">
                  Fewer
                  <br />
                  Maintenance
                  <br />
                  Issues
                </h4>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  AI-powered insights predicting hardware failure before
                  downtime occurs.
                </p>
              </div>
            </div>

            {/* Enterprise Search Card */}
            <div className="border border-white/10 bg-[linear-gradient(0deg,rgba(25,25,25,0.6),rgba(25,25,25,0.6)),linear-gradient(90deg,rgba(160,209,79,0.2)_0%,rgba(160,209,79,0)_100%)] p-1 backdrop-blur-[12px]">
              <div className="flex h-full flex-col gap-8 bg-[#070B12]/80 p-8 lg:flex-row lg:items-center">
                {/* Left Image */}
                <div className="shrink-0">
                  <Image
                    src="/images/stats.webp"
                    alt="Enterprise Search Dashboard"
                    width={229}
                    height={129}
                    // className="h-auto w-full max-w-[229px]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Subheading */}
                  <p className="font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#A0D14F] uppercase">
                    Enterprise Search
                  </p>

                  {/* Heading */}
                  <h3 className="mt-4 max-w-[480px] font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
                    From Complex Fleet Data to Instant Answers
                  </h3>

                  {/* Description */}
                  <p className="mt-6 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
                    Implementing RAG architecture to connect proprietary data
                    with natural language interfaces.
                  </p>

                  {/* Link */}
                  <button
                    type="button"
                    className="group mt-10 flex cursor-pointer items-center gap-3"
                  >
                    <span className="font-['Inter'] text-[12px] leading-3 font-semibold tracking-[1.2px] text-[#A0D14F] uppercase">
                      Read Full Case Study
                    </span>

                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                        stroke="#A0D14F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/5 bg-[#181C23] px-[clamp(1rem,4vw,5rem)] py-20 lg:py-28">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[40px] leading-[45px] font-semibold tracking-[-0.96px] text-[#DFE2ED] md:text-[48px] md:leading-[57.6px]">
                Trusted by Industry Leaders
              </h2>

              <p className="mt-4 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
                Real feedback from the leaders driving global AI adoption.
              </p>
            </div>

            {/* Controls */}
            <div className="hidden gap-4 md:flex">
              <button onClick={handlePrev} className="cursor-pointer">
                <Image
                  src="/images/left-arrow-casestudy.webp"
                  alt="Previous"
                  width={48}
                  height={48}
                />
              </button>

              <button onClick={handleNext} className="cursor-pointer">
                <Image
                  src="/images/right-arrow-casestudy.webp"
                  alt="Next"
                  width={48}
                  height={48}
                />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${activeIndex}-${index}`}
                className={`flex min-h-[354px] flex-col justify-between border bg-[rgba(25,25,25,0.6)] p-8 backdrop-blur-[12px] transition-all duration-500`}
              >
                <div>
                  {/* Quote Icon */}
                  <div className="font-serif text-[36px] leading-10 text-[#A0D14F]">
                    "
                  </div>

                  {/* Comment */}
                  <p className="mt-10 font-['Inter'] text-[18px] leading-[28.8px] text-[#DFE2ED] italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-10 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-['Inter'] text-[16px] leading-6 font-semibold text-[#DFE2ED]">
                      {testimonial.name}
                    </h3>

                    <p className="font-['Inter'] text-[12px] leading-4 tracking-[1.2px] text-[#DFE2ED66] uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-16">
        <div className="mx-auto flex flex-col items-center">
          {/* Heading */}
          <h2 className="max-w-[1200px] text-center font-['Space_Grotesk'] text-[clamp(2.5rem,4vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
            Ready to turn AI into{" "}
            <span className="text-[#A0D14F]">measurable ROI?</span>
          </h2>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {/* Primary Button */}
            <button
              type="button"
              className="flex h-[46px] min-w-[256px] items-center justify-center bg-[#A0D14F] px-12 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
            >
              <span className="font-['Inter'] text-[12px] leading-3 font-semibold tracking-[1.2px] text-[#070B12] uppercase">
                Talk to an AI Expert
              </span>
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="flex h-[46px] min-w-[248px] items-center justify-center border border-[#0057FF] px-12 transition-all duration-300 hover:bg-[#0057FF]/10 active:scale-[0.98]"
            >
              <span className="font-['Inter'] text-[12px] leading-3 font-semibold tracking-[1.2px] text-[#0057FF] uppercase">
                Browse More Work
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
