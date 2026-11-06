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
        "We learn about your business, target audience, goals, and challenges. We review your requirements, existing workflows, and project needs to identify opportunities and establish a clear project scope.",
      active: true,
    },
    {
      phase: "Phase 02",
      title: "Strategy",
      icon: "/images/phase-2.webp",
      description:
        "We create a project roadmap based on your requirements, selecting suitable technologies, software architecture, integrations, and development priorities for your website, application, or automation solution.",
    },
    {
      phase: "Phase 03",
      title: "Development",
      icon: "/images/phase-3.webp",
      description:
        "Our team designs and develops your digital solution, including AI automation workflows, custom websites, web applications, and mobile apps. We focus on functionality, usability, performance, and scalability.",
    },
    {
      phase: "Phase 04",
      title: "Deployment",
      icon: "/images/phase-4.webp",
      description:
        "Before launch, we test functionality, review performance, check integrations, and address identified issues. We then deploy your website, application, or automation system according to the agreed project requirements.",
    },
    {
      phase: "Phase 05",
      title: "Growth",
      icon: "/images/phase-5.webp",
      description:
        "After launch, we review solution performance, identify improvement opportunities, and help align future enhancements with your business goals through ongoing optimization and support where included in the project scope.",
    },
  ];

  const features = [
    {
      title: "Business-First Strategy",
      description:
        "We begin by understanding your business objectives, target audience, existing workflows, and technical requirements before recommending the right development or automation approach.",
    },
    {
      title: "Modern Software Development",
      description:
        "We develop AI automation systems, custom web applications, business websites, and mobile apps using technologies selected for your project's functionality, performance, and scalability requirements.",
    },
    {
      title: "Testing & Continuous Improvement",
      description:
        "We focus on testing, functionality, performance, and reliability before deployment. After launch, we identify opportunities to improve your digital solution as your business requirements evolve.",
    },
  ];

  const metrics = [
    {
      value: "GOAL-LED",
      label: "Business-Focused Planning",
      color: "#A0D14F",
    },
    {
      value: "AI",
      label: "Intelligent Automation",
      color: "#FFED00",
    },
    {
      value: "End-to-End",
      label: "Project Delivery",
      color: "#FFED00",
    },
    {
      value: "QUALITY",
      label: "Focused Development",
      color: "#A0D14F",
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
            <p className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal tracking-[1.6px] text-[#A0D14F] uppercase">
              OUR PROJECT DELIVERY PROCESS
            </p>

            {/* Heading */}
            <h2 className="mt-6 font-['Space_Grotesk'] text-[clamp(2.6rem,5vw,53px)] leading-[0.95] font-bold tracking-[-2.88px] text-[#DFE2ED]">
              From Business Requirements to{" "}
              <span className="text-[#A0D14F]">
                Intelligent Digital Solutions.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2ED99]">
              At DigiGrowtherz, every project follows a structured process
              designed around your business goals. From AI automation and custom
              software development to website development, mobile applications,
              and digital solutions, we move through discovery, strategy,
              development, testing, and deployment to deliver solutions aligned
              with your requirements.
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
                className="flex h-[58px] cursor-pointer items-center justify-center border border-[#FFED00] px-6 transition-all duration-300 hover:bg-[#FFED00]/10 active:scale-[0.98]"
              >
                <span className="font-['Inter'] text-[16px] leading-6 font-semibold tracking-[1.6px] text-[#FFED00] uppercase">
                  EXPLORE OUR SERVICES
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(160,209,79,0.12)_0%,_transparent_70%)] blur-3xl" />

            <Image
              src="/images/work-banner.webp"
              alt="DigiGrowtherz project planning and digital development process"
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
            <h2 className="font-['Space_Grotesk'] text-[clamp(2rem,4vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
              Our Digital Project <br className="hidden md:block" /> Development
              Process
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
              Our five-phase approach takes your project from initial business
              requirements to deployment and future improvements. Each stage
              focuses on clear objectives, organized development, and solutions
              that address your business needs.
            </p>
          </div>

          <div className="relative mt-24">
            {/* Grey Connecting Line */}
            <div className="absolute top-[48px] right-0 left-0 hidden h-[2px] bg-white/10 lg:block" />

            {/* Active Segment */}
            <div className="absolute top-[48px] left-2 hidden h-[2px] w-[45%] bg-[#A0D14F] shadow-[0_0_12px_rgba(160,209,79,0.6)] lg:block" />

            <div className="grid gap-12 lg:grid-cols-5">
              {phases.map((phase, index) => (
                <div key={phase.title} className="relative">
                  <Image
                    src={phase.icon}
                    alt={`${phase.title} phase in the DigiGrowtherz project delivery process`}
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
        <div className="mx-auto">
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

                <h2 className="mt-8 font-['Space_Grotesk'] text-[28px] leading-[40px] font-semibold tracking-[-0.96px] text-[#DFE2ED] md:text-[30px] lg:text-[44px] lg:leading-[57.6px]">
                  AI Automation & Digital <br className="hidden md:block" />
                  Development Built Around Your Goals
                </h2>

                <p className="mt-8 font-['Inter'] leading-[28.8px] text-[#DFE2ED]/70 md:text-[18px]">
                  Technology should address business challenges and make
                  everyday operations more effective. We combine AI automation,
                  custom software development, and modern web technologies to
                  create practical digital solutions based on your workflows,
                  technical requirements, and long-term business objectives.
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
                    src="/images/approach-banner.webp"
                    alt="DigiGrowtherz AI automation and software development approach"
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
            <h2 className="text-center font-['Space_Grotesk'] text-[clamp(2rem,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-black">
              Ready to Start Your Digital Project?
            </h2>

            {/* Description */}
            <p className="mt-[22px] text-center font-['Inter'] text-[18px] leading-[28.8px] text-[#070B12]/80">
              Whether you need AI workflow automation, a custom website, a
              mobile application, or business software, DigiGrowtherz can help
              you plan your next project. Tell us about your goals and let's
              discuss the right digital solution for your business.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              // type="button"
              className="mt-[40px] flex h-16 cursor-pointer items-center justify-center bg-[#070B12] px-6 transition-all duration-300 hover:brightness-110 active:scale-[0.98] md:min-w-[349px] md:px-10"
            >
              <span className="font-['Inter'] text-[14px] leading-6 font-bold tracking-[1.6px] text-[#A0D14F] uppercase md:text-[16px]">
                BOOK A CONSULTATION
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
