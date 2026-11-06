import CaseStudySlider from "@/components/sections/CaseStudySlider";
import CoreServices from "@/components/sections/CoreServices";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import Image from "next/image";
import Link from "next/link";
import ClientSlider from "@/components/sections/ClientSlider";

export default function Home() {
  const TRUSTED_COMPANIES = [
    "AI Automation",
    "Custom Web Development",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "eCommerce Solutions",
    "B2B Export Support",
    "CyberSecurity",
    "Truck Dispatching",
    "Medical Billing",
  ];

  return (
    <>
      {/* Banner */}
      <Hero />

      {/* Services Names */}
      <section className="border-y border-[#FFFFFF0D] bg-[#0F141B]">
        <div className="container-wrapper py-10 sm:py-12 lg:py-[clamp(4rem,6vw,5rem)]">
          {/* Heading */}
          <p className="font-jetbrains mx-auto max-w-[320px] text-center text-[11px] leading-5 font-medium tracking-[1.2px] text-[#DFE2ED66] uppercase sm:max-w-none sm:text-[12px] lg:leading-3">
            AI Automation, Development & Digital Growth Services
          </p>

          {/* Services */}
          <div className="mt-8 grid grid-cols-2 gap-3 px-2 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:px-0 lg:mt-[clamp(3rem,5vw,4rem)] lg:grid-cols-10 lg:gap-x-4 lg:gap-y-8">
            {TRUSTED_COMPANIES.map((company, index) => (
              <div
                key={company}
                className={`group flex min-h-[76px] items-center justify-start gap-3 rounded-xl border border-[#FFFFFF0D] bg-[#151B24] px-3 py-3 transition-all duration-300 last:col-span-2 last:mx-auto last:w-1/2 hover:border-[#A0D14F55] hover:bg-[#1A222B] sm:last:col-span-1 sm:last:mx-0 sm:last:w-full lg:col-span-2 lg:min-h-0 lg:w-full lg:justify-center lg:gap-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-2 lg:py-0 lg:hover:border-0 lg:hover:bg-transparent ${
                  index === 5 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Mobile Green Indicator */}
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#A0D14F] shadow-[0_0_12px_#A0D14F66] transition-transform duration-300 group-hover:scale-125 lg:hidden" />

                {/* Service Name */}
                <span className="font-space text-[clamp(0.85rem,1.2vw,2rem)] leading-[1.45] font-semibold tracking-[-0.6px] text-[#DFE2ED] transition-colors duration-300 group-hover:text-[#A0D14F] sm:text-[clamp(0.95rem,1.5vw,1.15rem)] lg:text-center lg:leading-7 lg:font-bold lg:tracking-[-0.6px] lg:whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <CoreServices />

      {/* Client Slider */}
      <ClientSlider />

      {/* Case Studies */}
      <section
        id="portfolios"
        className="relative overflow-hidden bg-[#181C23] px-[clamp(1rem,4vw,5rem)] py-[clamp(48px,6vw,80px)]"
      >
        {/* Green Glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[426px] bg-[#A0D14F0D] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full">
          <div className="grid gap-[clamp(48px,6vw,96px)] xl:grid-cols-[minmax(0,1fr)_610px]">
            {/* ===== LEFT SIDE ===== */}
            <div className="max-w-[700px]">
              {/* Heading */}
              <div className="relative">
                {/* Yellow Glow */}
                <div className="absolute z-0 h-16 w-16 rounded-xl bg-[#FFED0030] blur-[40px]" />

                <h2 className="relative z-10 font-['Space_Grotesk'] text-[clamp(2.2rem,5vw,2.8rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#DFE2ED]">
                  Digital Solutions Built Around Real Business Goals.
                  {/* <br className="block md:hidden" /> */}
                  <span className="text-[#A0D14F]">
                    {" "}
                    Technology That Delivers Meaningful Results.
                    {/* <br className="hidden md:block" /> */}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="mt-10 font-sans text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.8] font-normal text-[#DFE2EDB2]">
                At DigiGrowtherz, we help startups, small businesses,
                manufacturers, and growing companies solve business challenges
                through AI automation, custom web development, mobile
                applications, SEO, and digital marketing. Our solutions focus on
                improving operational efficiency, strengthening online presence,
                and creating better digital experiences.
              </p>

              {/* Feature Points */}
              <div className="mt-16 space-y-12">
                {/* Feature 1 */}
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/ai-sol.webp"
                    alt="AI automation and intelligent business solutions"
                    width={48}
                    height={48}
                    priority
                    className="shrink-0"
                  />

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-[20px] leading-7 font-normal text-[#DFE2ED]">
                      AI Automation & Modern Digital Solutions
                    </h3>

                    <p className="mt-3 max-w-[700px] font-sans text-[16px] leading-6 font-normal text-[#DFE2ED99]">
                      From AI-powered business workflows and intelligent
                      automation to custom websites and mobile applications, we
                      build digital solutions that simplify processes, connect
                      business systems, and help organizations operate more
                      efficiently.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/results.webp"
                    alt="Business growth and digital project outcomes"
                    width={48}
                    height={48}
                    priority
                    className="shrink-0"
                  />

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-[20px] leading-7 font-normal text-[#DFE2ED]">
                      Technology Focused on Business Growth
                    </h3>

                    <p className="mt-3 max-w-[700px] font-sans text-[16px] leading-6 font-normal text-[#DFE2ED99]">
                      We align every project with your business objectives,
                      combining thoughtful strategy, reliable development,
                      search engine optimization, and digital growth solutions
                      to help you reach customers, improve workflows, and build
                      a stronger online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT SIDE PLACEHOLDER ===== */}
            <CaseStudySlider />
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* CTA */}
      <section
        className="overflow-hidden px-[clamp(1rem,4vw,5rem)] py-16 lg:py-20"
        style={{
          background: `
          radial-gradient(
            129.64% 129.64% at -4116.67% -4116.67%,
            #000000 1.61%,
            rgba(0, 0, 0, 0) 1.61%
          ),
          #A0D14F
        `,
        }}
      >
        <div className="mx-auto flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Content */}
          <div className="max-w-[760px]">
            <h2 className="font-['Space_Grotesk'] text-[clamp(30px,5vw,40px)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#070B12]">
              Ready to Grow Your Business with the Right Digital Solutions?
            </h2>

            <p className="mt-8 max-w-[760px] font-['Inter'] text-[18px] leading-[1.6] font-normal text-[rgba(7,11,18,0.8)]">
              Whether you need AI automation, a custom website, mobile app
              development, SEO, eCommerce solutions, or digital marketing,
              DigiGrowtherz can help you plan and build the right solution for
              your business. Let's discuss your goals and turn your ideas into
              practical digital solutions.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group flex h-[66px] w-full max-w-[290px] cursor-pointer items-center justify-center gap-4 bg-[#070B12] px-12 py-6 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="font-['JetBrains_Mono'] text-[12px] font-bold tracking-[1.2px] text-white uppercase">
              Book a Consultation
            </span>

            <Image
              src="/images/phone.webp"
              alt="Phone"
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
