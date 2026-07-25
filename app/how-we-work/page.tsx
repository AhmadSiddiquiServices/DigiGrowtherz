"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkPage() {
  const phases = [
    {
      phase: "Phase 01",
      title: "Discovery",
      icon: "/images/phase-1.webp",
      description:
        "Understanding your business, identifying opportunities, and defining project goals to create a clear roadmap for success.",
      active: true,
    },
    {
      phase: "Phase 02",
      title: "Strategy",
      icon: "/images/phase-2.webp",
      description:
        "Planning the right technology, architecture, workflows, and implementation approach based on your business objectives.",
    },
    {
      phase: "Phase 03",
      title: "Development",
      icon: "/images/phase-3.webp",
      description:
        "Designing, developing, and integrating scalable AI, web, mobile, and digital solutions using modern technologies.",
    },
    {
      phase: "Phase 04",
      title: "Deployment",
      icon: "/images/phase-4.webp",
      description:
        "Launching secure, high-performance solutions with testing, optimization, and seamless integration into your business.",
    },
    {
      phase: "Phase 05",
      title: "Growth",
      icon: "/images/phase-5.webp",
      description:
        "Monitoring performance, gathering insights, and continuously improving your digital ecosystem for long-term success.",
    },
  ];

  const features = [
    {
      title: "Business-First Strategy",
      description:
        "Every solution begins with understanding your goals, workflows, and opportunities before choosing the right technology.",
    },
    {
      title: "Modern Development",
      description:
        "From AI automation and custom platforms to websites and mobile applications, we build solutions designed for long-term performance.  ",
    },
    {
      title: "Continuous Improvement",
      description:
        "Launch is only the beginning. We optimize, monitor, and enhance every solution to maximize efficiency and business growth.",
    },
  ];

  const metrics = [
    {
      value: "100%",
      label: "Client-Focused Solutions",
      color: "#A0D14F",
    },
    {
      value: "AI",
      label: "Powered Innovation",
      color: "#0057FF",
    },
    {
      value: "End-to-End",
      label: "Project Delivery",
      color: "#FFED00",
    },
    {
      value: "ROI",
      label: "Driven Results",
      color: "#FFFFFF",
    },
  ];
  return (
    <>
      {/* How it Works - Hero Section */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        <div className="mx-auto grid items-center gap-12 lg:grid-cols-[minmax(0,800px)_minmax(0,650px)] lg:justify-between">
          {/* Left Content */}
          <div>
            {/* Sub Heading */}
            <p className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal tracking-[1.6px] text-[#0057FF] uppercase">
              HOW WE WORK
            </p>

            {/* Heading */}
            <h2 className="mt-6 font-['Space_Grotesk'] text-[clamp(2.6rem,5vw,60px)] leading-[0.95] font-bold tracking-[-2.88px] text-[#DFE2ED]">
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="text-[#A0D14F]">Intelligent Solutions.</span>
            </h2>

            {/* Description */}
            <p className="mt-8 font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2ED99]">
              Every successful project starts with understanding your business.
              From <span className="text-[#A0D14F]">AI automation</span> to
              custom software and digital growth, we follow a proven process
              that delivers scalable solutions and measurable business results.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                // type="button"
                className="flex h-[58px] cursor-pointer items-center justify-center bg-[#A0D14F] px-6 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
              >
                <span className="font-['Inter'] text-[16px] leading-6 font-semibold tracking-[1.6px] text-[#070B12] uppercase">
                  START YOUR PROJECT
                </span>
              </Link>

              <Link
                href="/services"
                // type="button"
                className="flex h-[58px] cursor-pointer items-center justify-center border border-[#0057FF] px-6 transition-all duration-300 hover:bg-[#0057FF]/10 active:scale-[0.98]"
              >
                <span className="font-['Inter'] text-[16px] leading-6 font-semibold tracking-[1.6px] text-[#0057FF] uppercase">
                  VIEW OUR SERVICES
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(160,209,79,0.12)_0%,_transparent_70%)] blur-3xl" />

            <Image
              src="/images/how-it-works-banner.webp"
              alt="The GenDD Framework"
              width={650}
              height={415}
              priority
            />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section
        className="relative overflow-hidden bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-24"
        style={{
          backgroundImage: "url('/images/grid-lines.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto">
          {/* Header */}
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-['Space_Grotesk'] text-[clamp(2.3rem,4vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
              Our Proven Process
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
              From discovery to continuous optimization, every phase is designed
              to reduce complexity, accelerate delivery, and create long-term
              business value.
            </p>
          </div>
          <div className="relative mt-24">
            {/* Grey Connecting Line */}
            <div className="absolute top-[48px] right-0 left-0 hidden h-[2px] bg-white/10 lg:block" />

            {/* Active Segment */}
            <div className="absolute top-[48px] left-0 hidden h-[2px] w-[45%] bg-[#A0D14F] shadow-[0_0_12px_rgba(160,209,79,0.6)] lg:block" />

            <div className="grid gap-12 lg:grid-cols-5">
              {phases.map((phase, index) => (
                <div key={phase.title} className="relative">
                  <Image
                    src={phase.icon}
                    alt={phase.title}
                    width={96}
                    height={96}
                  />
                  <p
                    className={`mt-8 font-['JetBrains_Mono'] text-[16px] leading-6 ${
                      phase.active ? "text-[#A0D14F]" : "text-[#DFE2ED66]"
                    }`}
                  >
                    {phase.phase}
                  </p>

                  <h3 className="mt-3 font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
                    {phase.title}
                  </h3>

                  <p className="mt-6 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED80]">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] px-4 py-6 backdrop-blur-[12px] md:p-12">
            {/* Green glow */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-[12px] bg-[#A0D14F]/5 blur-[120px]" />

            <div className="relative z-10 grid gap-12 xl:grid-cols-[1fr_495px]">
              {/* Left */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="rounded-[2px] bg-[#A0D14F]/10 px-3 py-1">
                    <span className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#A0D14F] uppercase">
                      OUR APPROACH
                    </span>
                  </div>

                  <div className="h-px flex-1 bg-white/20" />
                </div>
                <h2 className="mt-8 font-['Space_Grotesk'] text-[30px] leading-[40px] font-semibold tracking-[-0.96px] text-[#DFE2ED] lg:text-[48px] lg:leading-[57.6px]">
                  AI-Powered Innovation, Built
                  <br className="hidden md:block" />
                  Around Your Business
                </h2>
                <p className="mt-8 max-w-[700px] font-['Inter'] leading-[28.8px] text-[#DFE2ED]/70 md:text-[18px]">
                  Technology should solve business problems—not create new ones.
                  Our approach combines AI automation with modern software
                  engineering to build secure, scalable, and future-ready
                  digital solutions that grow with your business.
                </p>
                <div className="mt-12 space-y-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div>
                        <Image
                          src="/images/list-check.webp"
                          alt=""
                          width={20}
                          height={20}
                          className="mt-1 shrink-0"
                        />
                      </div>
                      <div>
                        <h3 className="font-['Inter'] text-[16px] leading-6 font-bold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED]/60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center justify-center">
                <div className="grid gap-6 md:grid-cols-2">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col items-center justify-center rounded-[4px] border border-white/10 bg-[rgba(25,25,25,0.6)] px-6 py-4 backdrop-blur-[12px]"
                    >
                      <h3
                        className="text-center font-['Inter'] text-[24px] leading-10 font-bold md:text-[28px]"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </h3>

                      <p className="mt-2 text-center font-['JetBrains_Mono'] text-[16px] leading-6 text-[#DFE2ED]/60">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 overflow-hidden rounded-[4px] border border-white/10">
                  <Image
                    src="/images/method.webp"
                    alt="GenDD Dashboard"
                    width={495}
                    height={192}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] pb-10">
        <div className="mx-auto rounded-[8px] bg-[#A0D14F] px-6 py-12 sm:px-12">
          <div className="mx-auto flex max-w-[850px] flex-col items-center">
            {/* Heading */}
            <h2 className="text-center font-['Space_Grotesk'] text-[clamp(2.2rem,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-black">
              Ready to Build Smarter Solutions?
            </h2>

            {/* Description */}
            <p className="mt-[22px] text-center font-['Inter'] text-[18px] leading-[28.8px] text-[#070B12]/80">
              Whether you're looking to automate workflows, launch a custom
              website, develop a mobile application, or accelerate business
              growth, our team is ready to turn your vision into reality.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              // type="button"
              className="mt-[40px] flex h-16 cursor-pointer items-center justify-center bg-[#070B12] px-6 transition-all duration-300 hover:brightness-110 active:scale-[0.98] md:min-w-[349px] md:px-10"
            >
              <span className="font-['Inter'] text-[14px] leading-6 font-bold tracking-[1.6px] text-[#A0D14F] uppercase md:text-[16px]">
                BOOK A FREE CONSULTATION
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
