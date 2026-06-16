"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const metrics = [
    {
      icon: "/images/ser-stat-1.webp",
      title: "300% Velocity",
      description: "Improvement for COX",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-stat-2.webp",
      title: "20 Days to 5",
      description: "Workload Reduction",
      color: "#FFED00",
    },
    {
      icon: "/images/ser-stat-3.webp",
      title: "99% Faster",
      description: "Client Onboarding",
      color: "#0057FF",
    },
  ];

  const services = [
    {
      icon: "/images/ser-1.webp",
      bgIcon: "/images/ser-bg-1.webp",
      title: "AI Strategy & Roadmap",
      features: [
        "AI Transformation Strategy",
        "MLOps & AI Governance",
        "ROI Workshop & Planning",
      ],
      cta: "Define Strategy",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-2.webp",
      bgIcon: "/images/ser-bg-2.webp",
      title: "AI-Powered Development",
      features: [
        "AI-Native Product UX",
        "Agentic Application Modernization",
        "Generative Driven Dev™",
      ],
      cta: "Explore Development",
      color: "#0057FF",
    },
    {
      icon: "/images/ser-3.webp",
      bgIcon: "/images/ser-bg-3.webp",
      title: "Data Engineering",
      features: [
        "Data Readiness Assessment",
        "Databricks Implementation",
        "RAG Architecture & Pipeline",
      ],
      cta: "Modernize Data",
      color: "#FFED00",
    },
    {
      icon: "/images/ser-4.webp",
      bgIcon: "/images/ser-bg-4.webp",
      title: "AI Engineering Teams",
      features: [
        "Elite AI Talent Scaling",
        "US & Nearshore Synergy",
        "Agile Team Integration",
      ],
      cta: "Hire AI Talent",
      color: "#A0D14F",
    },
  ];
  return (
    <>
      {/* Services Hero */}
      <section className="overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        <div className="mx-auto">
          <div className="grid items-center gap-16 xl:grid-cols-[minmax(0,720px)_500px] xl:justify-between">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A0D14F]/20 bg-[#A0D14F]/10 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-[#A0D14F]" />

                <span className="font-['JetBrains_Mono'] text-[12px] leading-3 font-medium tracking-[1.2px] text-[#A0D14F] uppercase">
                  Enterprise AI Solutions
                </span>
              </div>
              <h1 className="mt-8 font-['Space_Grotesk'] text-[clamp(3.5rem,6vw,72px)] leading-[1.1] font-bold tracking-[-2.88px] text-[#DFE2ED]">
                Less AI Hype.
                <br />
                <span className="text-[#A0D14F]">More Results.</span>
              </h1>
              <p className="mt-8 max-w-[720px] font-['Inter'] text-[18px] leading-[28.8px] text-[#DFE2ED]/80">
                We help enterprises turn AI into ROI by automating high-impact
                work and building AI native products grounded in your data.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="flex h-12 min-w-[245px] cursor-pointer items-center justify-center gap-3 bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#070B12] uppercase">
                    Talk To An AI Expert
                  </span>

                  <span className="text-[#070B12]">→</span>
                </button>
                <button
                  type="button"
                  className="flex h-[52px] min-w-[208px] cursor-pointer items-center justify-center border border-[#0057FF] px-8 transition-all duration-300 hover:bg-[#0057FF]/10 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#0057FF] uppercase">
                    Our Methodology
                  </span>
                </button>
              </div>
            </div>
            {/* Right */}
            <div className="relative overflow-hidden rounded-[8px] border border-[#A0D14F]/30 bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,209,79,0.08),transparent_70%)]" />

              <div className="relative z-10">
                <div className="space-y-8">
                  {metrics.map((metric, index) => (
                    <div key={metric.title}>
                      <div className="flex items-center gap-6">
                        <Image
                          src={metric.icon}
                          alt={metric.title}
                          width={48}
                          height={48}
                          className="rounded-[2px]"
                        />

                        <div>
                          <h3
                            className="font-['Inter'] text-[16px] leading-6 font-bold"
                            style={{ color: metric.color }}
                          >
                            {metric.title}
                          </h3>

                          <p className="font-['Inter'] text-[12px] leading-4 text-[#DFE2ED]">
                            {metric.description}
                          </p>
                        </div>
                      </div>

                      {index < metrics.length - 1 && (
                        <div className="mt-8 border-b border-white/[0.05]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] pb-10 lg:pb-20">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
                Core AI Services
              </h2>

              <p className="mt-6 max-w-[580px] font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
                End-to-end expertise to design, build, and scale your AI
                transformation journey.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED] uppercase">
                Clutch Rating
              </span>

              <Image
                src="/images/stars.webp"
                alt="Clutch Rating"
                width={100}
                height={19}
                className="mt-3 h-auto w-auto"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]"
              >
                {/* Background Icon */}
                <Image
                  src={service.bgIcon}
                  alt=""
                  width={service.bgIcon === "/images/ser-bg-4.webp" ? 120 : 60}
                  height={180}
                  className="pointer-events-none absolute top-4 right-4 opacity-[0.05]"
                />

                <div className="relative z-10 flex min-h-[370px] flex-col">
                  {/* Top Icon */}
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={56}
                    height={56}
                    className="h-[56px] w-[56px]"
                  />

                  {/* Title */}
                  <h3 className="mt-10 font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <div className="mt-8 space-y-5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Image
                          src="/images/list-check.webp"
                          alt=""
                          width={14}
                          height={14}
                          className="mt-[2px] h-[14px] w-[14px] shrink-0"
                        />

                        <p className="font-['Inter'] text-[14px] leading-5 text-[#DFE2EDB2]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-12">
                    <button
                      type="button"
                      className="font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] uppercase transition-colors hover:text-white"
                      style={{ color: service.color }}
                    >
                      {service.cta} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietary AI Accelerators */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-14">
        <div className="mx-auto">
          {/* Heading */}
          <h2 className="text-center font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
            Proprietary AI Accelerators
          </h2>

          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,70%)_30%] lg:justify-between">
            {/* Left Card */}
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px] lg:p-11">
              {/* Green Gradient */}
              <div
                className="pointer-events-none absolute inset-0 opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(160,209,79,0.2) 0%, rgba(160,209,79,0) 100%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Label */}
                <div className="inline-flex w-fit rounded-[2px] bg-[#A0D14F33] px-3 py-1">
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#A0D14F] uppercase">
                    Exclusive Method
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-10 font-['Space_Grotesk'] text-[clamp(2rem,4vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
                  Generative-Driven
                  <br />
                  Development™
                </h3>

                {/* Description */}
                <p className="mt-8 max-w-[620px] font-['Inter'] text-[16px] leading-6 text-[#DFE2EDB2]">
                  Our proprietary operating model for building software in the
                  AI era. We blend AI agents and elite engineering to ship
                  products 3x faster with near-zero defects.
                </p>

                {/* Stats */}
                <div className="mt-12 grid max-w-[520px] grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#A0D14F]">
                      47%
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Avg. Velocity Boost
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#FFED00]">
                      -60%
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Reduced Maintenance
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-14">
                  <Link
                    href="/how-we-work"
                    className="inline-flex h-10 items-center justify-center bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105"
                  >
                    <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#070B12] uppercase">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-[8px] border border-[#FFED0033] bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="flex h-full flex-col">
                {/* Label */}
                <div className="inline-flex w-fit rounded-[2px] bg-[#FFED0033] px-3 py-1">
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#FFED00] uppercase">
                    Data Engine
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  GenIQ
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  The first AI-driven process intelligence platform that
                  monitors and optimizes software development lifecycles in
                  real-time.
                </p>

                {/* Divider */}
                <div className="mt-8 h-px bg-white/[0.05]" />

                {/* Link */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#FFED00] uppercase transition-opacity hover:opacity-80"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,30%)_70%] lg:justify-between">
            {/* RAG Framework */}
            <div className="rounded-[8px] border border-[#0057FF33] bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="flex h-full min-h-[307px] flex-col">
                {/* Label */}
                <div className="inline-flex w-fit rounded-[2px] bg-[#0057FF33] px-3 py-1">
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#0057FF] uppercase">
                    Architecture
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  RAG Framework
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  Connect your proprietary data safely to LLMs. Our RAG
                  accelerator ensures accuracy, security, and context-aware
                  responses.
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-white/[0.05] pt-6">
                  <button
                    type="button"
                    className="cursor-pointer font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#0057FF] uppercase transition-opacity hover:opacity-80"
                  >
                    Get Blueprint
                  </button>
                </div>
              </div>
            </div>

            {/* AI Readiness Assessment */}
            <div className="relative overflow-hidden rounded-[8px] border border-[#A0D14F1A] bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="grid h-full min-h-[307px] items-center gap-10 lg:grid-cols-[1fr_190px]">
                {/* Content */}
                <div className="max-w-[460px]">
                  <h3 className="font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                    AI Readiness Assessment
                  </h3>

                  <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                    Discover gaps, identify ROI-positive opportunities, and get
                    a clear path to prepare your data architecture for AI scale.
                  </p>

                  <button
                    type="button"
                    className="mt-10 inline-flex h-[34px] cursor-pointer items-center justify-center border border-[#A0D14F4D] px-6"
                  >
                    <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#A0D14F] uppercase">
                      Start Assessment
                    </span>
                  </button>
                </div>

                {/* Decorative Image */}
                <div className="hidden justify-center md:flex lg:justify-end">
                  <Image
                    src="/images/readiness.webp"
                    alt="AI Readiness"
                    width={190}
                    height={176}
                    className="opacity-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-16">
        <div className="mx-auto">
          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.4)] px-6 py-16 backdrop-blur-[20px] sm:px-10 lg:px-16 lg:py-16">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#A0D14F] via-[#FFED00] to-[#0057FF]" />

            <div className="mx-auto max-w-[860px] text-center">
              {/* Heading */}
              <h2 className="font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
                Ready to turn AI into{" "}
                <span className="text-[#A0D14F]">ROI?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-[760px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2EDB2]">
                We know what works in AI and what doesn't. Let's talk about
                what's possible for your business.
              </p>

              {/* Buttons */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                {/* Primary Button */}
                <button
                  type="button"
                  className="flex h-[62px] w-full cursor-pointer items-center justify-center bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98] md:max-w-[213px]"
                >
                  <span className="font-['Inter'] text-[14px] leading-5 font-bold tracking-[1.4px] text-[#070B12] uppercase">
                    Get In Touch
                  </span>
                </button>

                {/* Secondary Button */}
                <button
                  type="button"
                  className="flex h-[62px] w-full cursor-pointer items-center justify-center border border-white/20 px-8 transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-[0.98] md:max-w-[254px]"
                >
                  <span className="font-['Inter'] text-[14px] leading-5 font-bold tracking-[1.4px] text-white uppercase">
                    Schedule A Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
