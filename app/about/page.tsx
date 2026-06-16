"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    {
      label: "LATENCY",
      value: "-40%",
      description: "DEV-CYCLE COMPRESSION",
      color: "#0057FF",
    },
    {
      label: "ACCURACY",
      value: "100%",
      description: "DETERMINISTIC OUTPUTS",
      color: "#A0D14F",
    },
    {
      label: "SCALABILITY",
      value: "INF",
      description: "GLOBAL INFRASTRUCTURE",
      color: "#FFED00",
    },
  ];

  const locations = [
    {
      title: "NORTH AMERICA HQ",
      cities: ["SAN FRANCISCO", "AUSTIN", "NEW YORK"],
      borderColor: "#A0D14F",
    },
    {
      title: "LATAM HUB",
      cities: ["SÃO PAULO", "MEDELLÍN", "MEXICO CITY"],
      borderColor: "#FFED00",
    },
  ];

  const protocols = [
    {
      icon: "/images/protocol-1.webp",
      title: "PRIVACY FIRST",
      description:
        "Every GenDD instance is sandboxed. We prioritize zero-trust architecture to ensure your proprietary data never leaks into public models.",
    },
    {
      icon: "/images/protocol-2.webp",
      title: "RADICAL SPEED",
      description:
        "We iterate in days, not months. Our automated toolchain removes the friction of traditional enterprise software cycles.",
    },
    {
      icon: "/images/protocol-3.webp",
      title: "AI TRANSPARENCY",
      description:
        'Explainability is built-in. We provide the "Why" behind every AI decision, ensuring human-in-the-loop oversight at every stage.',
    },
  ];
  return (
    <>
      {/* About Hero */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-8">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#A0D14F]/10 blur-[180px]" />

        <div className="relative mx-auto flex flex-col items-center gap-10 md:gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-[620px]">
            {/* Label */}
            <span className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal tracking-[3.2px] text-[#A0D14F] uppercase">
              Mission Critical
            </span>

            {/* Heading */}
            <h1 className="mt-6 font-['Space_Grotesk'] text-[clamp(36px,7vw,72px)] leading-[1.1] font-bold tracking-[-0.04em] text-[#DFE2ED]">
              TURNING AI INTO <br className="hidden md:block" />
              <span className="text-[#A0D14F]">ROI</span>.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[560px] font-['Inter'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
              We transcend the hype. DigiGrowtherz is a global engineering
              powerhouse dedicated to operationalizing artificial intelligence
              for high-velocity enterprise growth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="flex h-[42px] cursor-pointer items-center justify-center gap-3 rounded-[4px] border border-white/[0.05] bg-[#262A32] px-4 py-2 transition-all duration-300 hover:border-[#A0D14F]/30 hover:bg-[#2C313A]"
              >
                <Image
                  src="/images/about-btn-1.webp"
                  alt="Velocity First"
                  width={20}
                  height={16}
                  className="h-4 w-5"
                />

                <span className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#DFE2ED] uppercase">
                  Velocity First
                </span>
              </button>

              <button
                type="button"
                className="flex h-[42px] cursor-pointer items-center justify-center gap-3 rounded-[4px] border border-white/[0.05] bg-[#262A32] px-4 py-2 transition-all duration-300 hover:border-[#A0D14F]/30 hover:bg-[#2C313A]"
              >
                <Image
                  src="/images/about-btn-2.webp"
                  alt="GENDD Framework"
                  width={20}
                  height={16}
                  className="h-4 w-5"
                />

                <span className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#DFE2ED] uppercase">
                  GENDD Framework
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative shrink-0">
            {/* <div className="absolute inset-0 rounded-[8px] bg-[#A0D14F]/10 blur-[80px]" /> */}

            <Image
              src="/images/about-banner.webp"
              alt="AI Infrastructure"
              width={552}
              height={552}
              priority
              className="hidden md:block"
            />
            <Image
              src="/images/about-banner-mobile.webp"
              alt="AI Infrastructure"
              width={308}
              height={174}
              priority
              className="block md:hidden"
            />
          </div>
        </div>
      </section>

      {/* Core Engine */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-16 lg:py-20">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <p className="font-['Space_Grotesk'] text-[16px] leading-6 font-normal text-[#A0D14F]">
              GenDD METHODOLOGY
            </p>

            <h2 className="mt-2 font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
              Generative-Driven Development: Our Core Engine
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Large Card */}
            <div className="flex min-h-[400px] flex-col justify-between rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-6 backdrop-blur-[20px] lg:col-span-2">
              <div>
                <p className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#A0D14F]">
                  01 / ARCHITECTURE
                </p>

                <h3 className="mt-6 font-['Space_Grotesk'] text-[16px] leading-6 font-normal text-[#DFE2ED]">
                  Autonomous Pipeline Integration
                </h3>

                <p className="mt-6 max-w-[680px] font-['Inter'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
                  Our GenDD model integrates LLMs directly into the software
                  lifecycle, automating the translation from business intent to
                  production-grade code with 99.9% semantic accuracy.
                </p>
              </div>

              <div>
                {/* Gradient Line */}
                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(160,209,79,0) 0%, #A0D14F 50%, rgba(160,209,79,0) 100%)",
                  }}
                />

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-[10px] leading-[15px] font-normal text-white/40 uppercase">
                    System Status: Operational
                  </span>

                  <span className="font-['JetBrains_Mono'] text-[10px] leading-[15px] font-normal text-white/40 uppercase">
                    Uploading Data_Core...
                  </span>
                </div>
              </div>
            </div>

            {/* ROI Card */}
            <div className="rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-6 backdrop-blur-[20px]">
              <Image
                src="/images/roi.webp"
                alt="ROI Precision"
                width={27}
                height={30}
              />

              <h3 className="mt-8 font-['Space_Grotesk'] text-[16px] leading-6 font-normal text-[#DFE2ED]">
                ROI Precision
              </h3>

              <p className="mt-6 font-['Inter'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
                We don't build toys. Every GenDD deployment is mapped to a
                specific financial KPI, ensuring that every token spent
                generates measurable enterprise value.
              </p>
            </div>

            {/* Stats Cards */}
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-6 backdrop-blur-[20px]"
              >
                <p
                  className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal"
                  style={{ color: stat.color }}
                >
                  {stat.label}
                </p>

                <h3 className="mt-6 font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#C3C9B3] uppercase">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-[#181C23] px-[clamp(1rem,4vw,5rem)] py-6 lg:py-14">
        <div className="mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-[552px_552px]">
          {/* Left Image */}
          <div className="shrink-0">
            <Image
              src="/images/areas.webp"
              alt="Global Presence"
              width={552}
              height={552}
              className="object-cover opacity-80"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full max-w-[552px]">
            {/* Heading */}
            <h2 className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#DFE2ED]">
              GLOBAL <span className="text-[#0057FF]">VELOCITY.</span> LOCAL
              CONTEXT.
            </h2>

            {/* Description */}
            <p className="mt-8 font-['Inter'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
              Operating at the intersection of Silicon Valley innovation and
              Latin American engineering talent. Our bicultural presence ensures
              we deliver cost-effective, high-tier AI solutions that scale
              across borders.
            </p>

            {/* Locations */}
            <div className="mt-12 space-y-6">
              {locations.map((location) => (
                <div
                  key={location.title}
                  className="border-l-2 py-2 pl-6"
                  style={{
                    borderLeftColor: location.borderColor,
                  }}
                >
                  <h3 className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-white">
                    {location.title}
                  </h3>

                  <p className="mt-2 font-['JetBrains_Mono'] text-[16px] leading-6 font-normal text-[#C3C9B3] uppercase">
                    {location.cities.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-16 lg:py-20">
        <div className="mx-auto">
          {/* Header */}
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="font-['Space_Grotesk'] text-[16px] leading-6 font-normal text-[#DFE2ED] uppercase">
              THE DIGIGROWTHERZ PROTOCOL
            </h2>

            <p className="mx-auto mt-4 max-w-[780px] font-['Inter'] text-[16px] leading-6 font-normal text-[#C3C9B3]">
              Our engineering culture is built on three immutable pillars that
              ensure we stay ahead of the curve while maintaining absolute
              integrity.
            </p>
          </div>

          {/* Protocol Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {protocols.map((protocol) => (
              <div
                key={protocol.title}
                className="border border-white/[0.05] p-6"
              >
                {/* Icon */}
                <Image
                  src={protocol.icon}
                  alt={protocol.title}
                  width={39}
                  height={40}
                />

                {/* Title */}
                <h3 className="mt-8 font-['Space_Grotesk'] text-[18px] leading-[28.8px] font-bold text-[#DFE2ED] uppercase">
                  {protocol.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-['Inter'] text-[14px] leading-5 font-normal text-[#C3C9B3]">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-20 lg:py-28">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[356px] w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(51.9% 186.41% at 50% 50%, rgba(160, 209, 79, 0.2) 0%, rgba(160, 209, 79, 0) 50%, rgba(160, 209, 79, 0) 100%)",
          }}
        />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center">
          {/* Heading */}
          <h2 className="text-center font-['Space_Grotesk'] text-[clamp(48px,7vw,72px)] leading-[1.1] font-bold tracking-[-0.04em] text-[#DFE2ED] uppercase">
            Ready to Automate
            <br />
            <span className="text-[#A0D14F]">Your Growth?</span>
          </h2>

          {/* Buttons */}
          <div className="mt-12 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="flex h-[68px] w-full items-center justify-center bg-[#A0D14F] px-6 py-5 transition-all duration-300 hover:brightness-110 md:max-w-[370px]"
            >
              <span className="font-['JetBrains_Mono'] text-[16px] leading-7 font-bold tracking-[1.8px] text-[#070B12] uppercase md:text-[18px]">
                Initialize Consultation
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/documentation"
              className="flex h-[70px] w-full items-center justify-center border border-[#0057FF] bg-transparent px-6 py-5 transition-all duration-300 hover:bg-[#0057FF]/10 md:max-w-[309px]"
            >
              <span className="font-['JetBrains_Mono'] text-[16px] leading-7 font-bold tracking-[1.8px] text-[#0057FF] uppercase md:text-[18px]">
                View Documentation
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
