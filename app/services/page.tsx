"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Bot,
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Palette,
  ShoppingCart,
  CheckCircle2,
  ShieldCheck,
  Truck,
  FileText,
  Handshake,
} from "lucide-react";

export default function ServicesPage() {
  const metrics = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "AI Workflows • Assistants • Integrations",
      color: "#A0D14F",
    },
    {
      icon: Globe,
      title: "Digital Development",
      description: "Websites • Mobile Apps • Software",
      color: "#FFED00",
    },
    {
      icon: TrendingUp,
      title: "Business & Growth Support",
      description: "SEO • eCommerce • B2B & Operations",
      color: "#A0D14F",
    },
  ];

  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      features: [
        "AI Workflow & Business Process Automation",
        "AI Chatbots & Virtual Assistants",
        "CRM & Business System Integrations",
      ],
      cta: "EXPLORE AI AUTOMATION",
      link: "/services/ai-automation",
      color: "#A0D14F",
    },
    {
      icon: Globe,
      title: "Website Development",
      features: [
        "WordPress Website Development",
        "Shopify Store Development",
        "Custom Websites & Web Applications",
      ],
      cta: "EXPLORE WEB DEVELOPMENT",
      link: "/services/web-development",
      color: "#FFED00",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      features: [
        "Android Application Development",
        "iOS Application Development",
        "Cross-Platform Mobile Apps",
      ],
      cta: "EXPLORE MOBILE DEVELOPMENT",
      link: "/services/mobile-development",
      color: "#A0D14F",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      features: [
        "Social Media Marketing",
        "Google & Paid Advertising Campaigns",
        "Content & Campaign Management",
      ],
      cta: "EXPLORE DIGITAL MARKETING",
      link: "/services/digital-marketing",
      color: "#FFED00",
    },
    {
      icon: Search,
      title: "SEO Services",
      features: [
        "Technical SEO & Website Audits",
        "On-Page SEO & Content Optimization",
        "Local SEO & Search Visibility",
      ],
      cta: "EXPLORE SEO SERVICES",
      link: "/services/seo",
      color: "#FFED00",
    },
    {
      icon: Palette,
      title: "Branding & Design",
      features: [
        "Logo Design & Brand Identity",
        "Marketing & Social Media Creatives",
        "Print & Packaging Design",
      ],
      cta: "EXPLORE BRANDING",
      link: "/services/branding",
      color: "#A0D14F",
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Solutions",
      features: [
        "Amazon Marketplace Management",
        "eBay, Etsy & Walmart Support",
        "Alibaba & Product Listing Optimization",
      ],
      cta: "EXPLORE ECOMMERCE SERVICES",
      link: "/services/ecommerce",
      color: "#FFED00",
    },
    {
      icon: Handshake,
      title: "B2B Export Support",
      features: [
        "International Buyer & Supplier Research",
        "B2B Lead Generation & Coordination",
        "Alibaba & Export Marketplace Support",
      ],
      cta: "DISCUSS EXPORT SERVICES",
      link: "/services/b2b-export",
      color: "#A0D14F",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Services",
      features: [
        "Security Assessments",
        "Vulnerability & Risk Reviews",
        "Security Recommendations & Hardening",
      ],
      cta: "DISCUSS CYBERSECURITY",
      link: "/services/cybersecurity",
      color: "#FFED00",
    },
    {
      icon: Truck,
      title: "Truck Dispatching",
      features: [
        "Load Sourcing & Booking",
        "Broker & Driver Coordination",
        "Dispatch & Delivery Coordination",
      ],
      cta: "DISCUSS DISPATCH SERVICES",
      link: "/services/truck-dispatching",
      color: "#A0D14F",
    },
    {
      icon: FileText,
      title: "Medical Billing Services",
      features: [
        "Medical Billing & Claims Processing",
        "Payment Posting & Follow-Up",
        "Claims Denial Management Support",
      ],
      cta: "DISCUSS MEDICAL BILLING",
      link: "/services/medical-billing",
      color: "#FFED00",
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
                  BUSINESS, TECHNOLOGY & DIGITAL SERVICES
                </span>
              </div>

              <h1 className="mt-8 font-['Space_Grotesk'] text-[clamp(3rem,6vw,52px)] leading-[1.1] font-bold tracking-[-2.88px] text-[#DFE2ED]">
                AI Automation & Digital Services
                <br className="hidden md:block" />
                <span className="text-[#A0D14F]">
                  Built Around Your Business.
                </span>
              </h1>

              <p className="mt-8 max-w-[720px] font-['Inter'] text-[18px] leading-[28.8px] text-[#DFE2ED]/80">
                DigiGrowtherz provides AI automation, website development,
                mobile applications, SEO, digital marketing, branding, and
                eCommerce solutions for growing businesses. We also support
                businesses with cybersecurity, B2B export services, truck
                dispatching, and medical billing to address their technology,
                operational, and business needs.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/how-we-work"
                  // type="button"
                  className="flex h-12 min-w-[245px] cursor-pointer items-center justify-center gap-3 bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#070B12] uppercase">
                    HOW WE WORK
                  </span>

                  <span className="text-[#070B12]">→</span>
                </Link>

                <Link
                  href="/contact"
                  // type="button"
                  className="flex h-12 min-w-[208px] cursor-pointer items-center justify-center border border-[#FFED00] px-8 transition-all duration-300 hover:bg-[#FFED00]/10 active:scale-[0.98]"
                >
                  <span className="font-['Inter'] text-[12px] leading-4 font-bold tracking-[1.2px] text-[#FFED00] uppercase">
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
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;

                    return (
                      <div key={metric.title}>
                        <div className="flex items-center gap-6">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[2px]"
                            style={{
                              backgroundColor: `${metric.color}12`,
                            }}
                          >
                            <Icon
                              className="h-6 w-6"
                              style={{ color: metric.color }}
                              strokeWidth={1.8}
                            />
                          </div>

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
                    );
                  })}
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
                Our Core Business & Digital Services
              </h2>

              <p className="mt-6 max-w-[950px] font-['Inter'] text-[16px] leading-6 text-[#DFE2ED99]">
                Explore our AI automation, software development, digital
                marketing, and eCommerce services, alongside specialized
                business support in cybersecurity, B2B exports, truck
                dispatching, and medical billing. Our solutions address
                different business requirements across technology, digital
                growth, and operations.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED] uppercase">
                Clutch Rating
              </span>

              <Image
                src="/images/stars.webp"
                alt="Clutch review rating stars"
                width={100}
                height={19}
                className="mt-3 h-auto w-auto"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="relative h-full overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]"
                >
                  {/* Background Icon */}
                  <div
                    className="pointer-events-none absolute top-4 right-4 opacity-[0.05]"
                    style={{ color: service.color }}
                  >
                    <Icon className="h-28 w-28" strokeWidth={1.2} />
                  </div>

                  <div className="relative z-10 flex h-full min-h-[370px] flex-col">
                    {/* Top Icon */}
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-[3px]"
                      style={{
                        backgroundColor: `${service.color}12`,
                      }}
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{ color: service.color }}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-10 font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
                      {service.title}
                    </h3>

                    {/* Features */}
                    <div className="mt-8 space-y-5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-[2px] h-[14px] w-[14px] shrink-0"
                            style={{ color: service.color }}
                            strokeWidth={2}
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
              );
            })}
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
                    OUR APPROACH
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-10 font-['Space_Grotesk'] text-[clamp(2rem,4vw,48px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
                  AI-First Digital Solutions
                  {/* <br />
                  Approach */}
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[16px] leading-6 text-[#DFE2EDB2]">
                  We combine AI automation, modern software development, and
                  digital expertise to help businesses simplify workflows,
                  improve online experiences, and address operational challenges
                  with practical technology solutions.
                </p>

                {/* Stats */}
                <div className="mt-12 grid gap-8 md:grid-cols-4">
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#A0D14F]">
                      AI
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Intelligent Automation
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#FFED00]">
                      Web
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Website Development
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#A0D14F]">
                      Mobile
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Mobile App Solutions
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk'] text-[36px] leading-10 font-bold text-[#FFED00]">
                      Growth
                    </h4>

                    <p className="mt-2 font-['JetBrains_Mono'] text-[12px] leading-4 text-[#DFE2ED]">
                      Business Growth Solutions
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
                      LEARN MORE
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
                    PROJECT DELIVERY
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  End-to-End Project Support
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  From initial planning and strategy to design, development,
                  testing, and deployment, we organize each project around its
                  requirements and agreed scope of work.
                </p>

                {/* Divider */}
                <div className="mt-8 h-px bg-white/[0.05]" />

                {/* Link */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/how-we-work"
                    className="font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#FFED00] uppercase transition-opacity hover:opacity-80"
                  >
                    EXPLORE OUR PROCESS
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
                <div className="inline-flex w-fit rounded-[2px] bg-[#FFED0033] px-3 py-1">
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#FFED00] uppercase">
                    SELECTED PROJECTS
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-12 font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                  Website Development
                </h3>

                {/* Description */}
                <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                  Explore our website development work, including business
                  websites, eCommerce stores, and custom digital platforms built
                  with modern technologies.
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-white/[0.05] pt-6">
                  <Link
                    href="/#portfolios"
                    type="button"
                    className="cursor-pointer font-['JetBrains_Mono'] text-[12px] leading-4 tracking-[1.2px] text-[#FFED00] uppercase transition-opacity hover:opacity-80"
                  >
                    VIEW OUR PROJECTS
                  </Link>
                </div>
              </div>
            </div>

            {/* AI Readiness Assessment */}
            <div className="relative overflow-hidden rounded-[8px] border border-[#A0D14F1A] bg-[rgba(25,25,25,0.4)] p-8 backdrop-blur-[20px]">
              <div className="grid h-full min-h-[307px] items-center gap-10 lg:grid-cols-[1fr_190px]">
                {/* Content */}
                <div className="">
                  <h3 className="font-['Space_Grotesk'] text-[24px] leading-8 font-normal text-[#DFE2ED]">
                    Business & Operational Support
                  </h3>

                  <p className="mt-8 font-['Inter'] text-[14px] leading-5 text-[#DFE2ED99]">
                    Beyond digital development, we support business operations
                    through B2B export assistance, cybersecurity services, truck
                    dispatching, and medical billing solutions.
                  </p>

                  <Link
                    href="/contact"
                    // type="button"
                    className="mt-10 inline-flex h-[34px] cursor-pointer items-center justify-center border border-[#A0D14F4D] px-6"
                  >
                    <span className="font-['JetBrains_Mono'] text-[12px] leading-4 text-[#A0D14F] uppercase">
                      DISCUSS YOUR REQUIREMENTS
                    </span>
                  </Link>
                </div>

                {/* Decorative Image */}
                <div className="hidden justify-center md:flex lg:justify-end">
                  <Image
                    src="/images/growth.webp"
                    alt="Business growth and operational support solutions"
                    width={192}
                    height={178}
                    className="opacity-70"
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
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#A0D14F] to-[#FFED00]" />

            <div className="mx-auto max-w-[860px] text-center">
              {/* Heading */}
              <h2 className="font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,44px)] leading-[1.2] font-semibold tracking-[-0.96px] text-[#DFE2ED]">
                Looking for the Right Business Solutions?
                <br className="hidden md:block" />
                <span className="text-[#A0D14F]">
                  Let's Discuss Your Project.
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-[800px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#DFE2EDB2]">
                From AI automation and custom software development to SEO,
                eCommerce, B2B export support, cybersecurity, truck dispatching,
                and medical billing, DigiGrowtherz offers solutions for
                different business needs. Contact our team to discuss your
                requirements and explore the right service for your business.
              </p>

              {/* Buttons */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                {/* Primary Button */}
                <Link
                  href="/#portfolios"
                  // type="button"
                  className="flex h-[62px] w-full cursor-pointer items-center justify-center bg-[#A0D14F] px-8 transition-all duration-300 hover:brightness-105 active:scale-[0.98] md:max-w-[213px]"
                >
                  <span className="font-['Inter'] text-[14px] leading-5 font-bold tracking-[1.4px] text-[#070B12] uppercase">
                    OUR PORTFOLIO
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
