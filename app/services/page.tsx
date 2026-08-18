"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const metrics = [
    {
      icon: "/images/ser-stat-1.webp",
      title: "AI Automation",
      description: "Intelligent Workflow Solutions",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-stat-2.webp",
      title: "Website Development",
      description: "WordPress • Shopify • Custom",
      color: "#FFED00",
    },
    {
      icon: "/images/ser-stat-3.webp",
      title: "Digital Growth",
      description: "Marketing • SEO • eCommerce",
      color: "#0057FF",
    },
  ];

  const services = [
    {
      icon: "/images/ser-1.webp",
      bgIcon: "/images/ser-bg-1.webp",
      title: "AI Automation",
      features: [
        "Workflow Automation",
        "AI Chatbots & Assistants",
        "Business Process Optimization",
      ],
      cta: "EXPLORE AI",
      link: "/services/ai-automation",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-2.webp",
      bgIcon: "/images/ser-bg-2.webp",
      title: "Website Development",
      features: [
        "WordPress Development",
        "Shopify Stores",
        "Custom Web Applications",
      ],
      cta: "Explore Web Development",
      link: "/services/web-development",
      color: "#0057FF",
    },
    {
      icon: "/images/ser-3.webp",
      bgIcon: "/images/ser-bg-3.webp",
      title: "Mobile Development",
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Solutions",
      ],
      cta: "Explore Mobile Development",
      link: "/services/mobile-development",
      color: "#FFED00",
    },
    {
      icon: "/images/ser-4.webp",
      bgIcon: "/images/ser-bg-4.webp",
      title: "Digital Marketing",
      features: [
        "Facebook Marketing",
        "Instagram Marketing",
        "Google Ads Campaigns",
      ],
      cta: "Explore Digital Marketing",
      link: "/services/digital-marketing",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-4.webp",
      bgIcon: "/images/ser-bg-4.webp",
      title: "SEO Services",
      features: ["Technical SEO", "On-Page Optimization", "Local SEO Strategy"],
      cta: "Explore SEO Services",
      link: "#",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-4.webp",
      bgIcon: "/images/ser-bg-4.webp",
      title: "Branding & Design",
      features: [
        "Company Branding",
        "Print-on-Demand Design",
        "Marketing Creatives",
      ],
      cta: "Explore Branding",
      link: "#",
      color: "#A0D14F",
    },
    {
      icon: "/images/ser-4.webp",
      bgIcon: "/images/ser-bg-4.webp",
      title: "eCommerce Solutions",
      features: ["Amazon Marketplace", "eBay & Etsy", "Walmart & Alibaba"],
      cta: "Explore eCommerce Services",
      link: "#",
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
                  DIGITAL SOLUTIONS & AI AUTOMATION
                </span>
              </div>
              <h1 className="mt-8 font-['Space_Grotesk'] text-[clamp(3rem,6vw,64px)] leading-[1.1] font-bold tracking-[-2.88px] text-[#DFE2ED]">
                Technology That Solves <br className="hidden md:block" />
                <span className="text-[#A0D14F]">Business Problems.</span>
              </h1>
              <p className="mt-8 max-w-[720px] font-['Inter'] text-[18px] leading-[28.8px] text-[#DFE2ED]/80">
                From AI automation and custom software to websites, mobile
                applications, digital marketing, branding, and eCommerce, we
                build scalable solutions that help businesses operate smarter
                and grow faster.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/how-we-work"
                  // type="button"
                  className="flex h-12 min-w-[245px] cursor-pointer items-center justify-center gap-3 bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#070B12] uppercase">
                    How We Work
                  </span>

                  <span className="text-[#070B12]">→</span>
                </Link>
                <Link
                  href="/contact"
                  // type="button"
                  className="flex h-12 min-w-[208px] cursor-pointer items-center justify-center border border-[#0057FF] px-8 transition-all duration-300 hover:bg-[#0057FF]/10 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#0057FF] uppercase">
                    GET IN TOUCH
                  </span>
                </Link>
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
                Our Core Services
              </h2>

              <p className="mt-6 max-w-[580px] font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
                Comprehensive digital solutions designed to automate workflows,
                strengthen your online presence, and accelerate business growth.
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
                    <Link
                      href={service.link}
                      className="font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] uppercase transition-colors hover:text-white"
                      style={{ color: service.color }}
                    >
                      {service.cta} →
                    </Link>
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
            Why Businesses Choose DigiGrowtherz
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
                  AI-First Approach
                  {/* <br />
                  Approach */}
                </h3>

                {/* Description */}
                <p className="mt-8 max-w-[720px] font-['Inter'] text-[16px] leading-6 text-[#DFE2EDB2]">
                  We combine intelligent automation with modern software
                  engineering to build digital solutions that improve
                  efficiency, reduce manual work, and support long-term business
                  growth.
                </p>

                {/* Stats */}
                <div className="mt-12 grid gap-8 md:grid-cols-4">
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#A0D14F]">
                      AI
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Automation Ready
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#FFED00]">
                      Web
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Modern Platforms
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#A0D14F]">
                      Mobile
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Cross-Platform Apps
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#FFED00]">
                      Growth
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      ROI Focused
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
                    Delivery
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  End-to-End Delivery
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  From strategy and design to development, deployment, and
                  ongoing support, we provide everything your business needs to
                  grow digitally.
                </p>

                {/* Divider */}
                <div className="mt-8 h-px bg-white/[0.05]" />

                {/* Link */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/how-we-work"
                    className="font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#FFED00] uppercase transition-opacity hover:opacity-80"
                  >
                    OUR PROCESS
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
                    Case-Studies
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  Website Development
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  Fast, secure, and scalable websites built with WordPress,
                  Shopify, and modern custom technologies.
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-white/[0.05] pt-6">
                  <Link
                    href="/case-studies"
                    type="button"
                    className="cursor-pointer font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#0057FF] uppercase transition-opacity hover:opacity-80"
                  >
                    VIEW WEBSITES
                  </Link>
                </div>
              </div>
            </div>

            {/* AI Readiness Assessment */}
            <div className="relative overflow-hidden rounded-[8px] border border-[#A0D14F1A] bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="grid h-full min-h-[307px] items-center gap-10 lg:grid-cols-[1fr_190px]">
                {/* Content */}
                <div className="max-w-[460px]">
                  <h3 className="font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                    Business Growth Strategy
                  </h3>

                  <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                    Whether you're launching a startup or scaling an established
                    company, we combine AI, marketing, SEO, and digital strategy
                    to help you achieve measurable growth.
                  </p>

                  <Link
                    href="/contact"
                    // type="button"
                    className="mt-10 inline-flex h-[34px] cursor-pointer items-center justify-center border border-[#A0D14F4D] px-6"
                  >
                    <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#A0D14F] uppercase">
                      START YOUR PROJECT
                    </span>
                  </Link>
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
                Ready to Grow with AI & <br className="hidden md:block" />
                <span className="text-[#A0D14F]">Digital Innovation?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-[760px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2EDB2]">
                Whether you're looking to automate business processes, launch a
                custom website, develop a mobile application, or expand your
                digital presence, DigiGrowtherz is ready to help you achieve
                measurable results.
              </p>

              {/* Buttons */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                {/* Primary Button */}
                <Link
                  href="/case-studies"
                  // type="button"
                  className="flex h-[62px] w-full cursor-pointer items-center justify-center bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98] md:max-w-[213px]"
                >
                  <span className="font-['Inter'] text-[14px] leading-5 font-bold tracking-[1.4px] text-[#070B12] uppercase">
                    Our Portfolio
                  </span>
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/contact"
                  // type="button"
                  className="flex h-[62px] w-full cursor-pointer items-center justify-center border border-white/20 px-8 transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-[0.98] md:max-w-[270px]"
                >
                  <span className="font-['Inter'] text-[14px] leading-5 font-bold tracking-[1.4px] text-white uppercase">
                    BOOK A CONSULTATION
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
