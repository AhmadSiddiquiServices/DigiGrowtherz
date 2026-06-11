import CaseStudySlider from "@/components/sections/CaseStudySlider";
import CoreServices from "@/components/sections/CoreServices";
import Hero from "@/components/sections/Hero";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import Image from "next/image";

export default function Home() {
  const TRUSTED_COMPANIES = [
    "Anthropic",
    "Databricks",
    "Google Cloud",
    "COX",
    "Aero Star",
  ];

  return (
    <>
      {/* Banner */}
      <Hero />

      {/* Companies Names */}
      <section className="border-y border-[#FFFFFF0D] bg-[#070B12]">
        <div className="container-wrapper py-[clamp(4rem,6vw,5rem)]">
          {/* Heading */}
          <p className="font-jetbrains text-center text-[12px] leading-3 font-medium tracking-[1.2px] text-[#DFE2ED66] uppercase">
            Trusted by industry leaders
          </p>

          {/* Companies */}
          <div className="mt-[clamp(3rem,5vw,4rem)] grid grid-cols-2 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-5">
            {TRUSTED_COMPANIES.map((company) => (
              <div
                key={company}
                className="font-space text-[clamp(1.5rem,2vw,2rem)] leading-8 font-bold tracking-[-1.2px] text-[#DFE2ED] transition-all duration-300 hover:text-[#A0D14F]"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <CoreServices />

      {/* Case Studies */}
      <section className="relative overflow-hidden bg-[#181C23] px-[clamp(1rem,4vw,5rem)] py-[clamp(48px,6vw,80px)]">
        {/* Green Glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[426px] bg-[#A0D14F0D] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <div className="grid gap-[clamp(48px,6vw,96px)] xl:grid-cols-[minmax(0,1fr)_536px]">
            {/* ===== LEFT SIDE ===== */}
            <div className="max-w-[620px]">
              {/* Heading */}
              <div className="relative">
                {/* Yellow Glow */}
                <div className="absolute z-0 h-16 w-16 rounded-xl bg-[#FFED0030] blur-[40px]" />

                <h2 className="relative z-10 font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,3rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#DFE2ED]">
                  Everyone is talking <br className="hidden md:block" />
                  about AI.
                  <span className="text-[#A0D14F]">
                    {" "}
                    Few are <br className="hidden md:block" />
                    delivering results.
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="mt-10 font-sans text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.8] font-normal text-[#DFE2EDB2]">
                Most organizations get stuck in pilots, demos, and disconnected
                initiatives, burning budget without moving the needle.
              </p>

              {/* Feature Points */}
              <div className="mt-16 space-y-12">
                {/* Feature 1 */}
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/result-1.webp"
                    alt="AI Expertise"
                    width={48}
                    height={48}
                    priority
                    className="shrink-0"
                  />

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-[20px] leading-7 font-normal text-[#DFE2ED]">
                      AI Is All We Do
                    </h3>

                    <p className="mt-3 max-w-[430px] font-sans text-[16px] leading-6 font-normal text-[#DFE2ED99]">
                      When AI is your entire business, you build deeper
                      expertise and eliminate the learning curve your team would
                      pay for elsewhere.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/result-2.webp"
                    alt="Outcome Driven"
                    width={48}
                    height={48}
                    priority
                    className="shrink-0"
                  />

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-[20px] leading-7 font-normal text-[#DFE2ED]">
                      Outcome-Driven by Design
                    </h3>

                    <p className="mt-3 max-w-[430px] font-sans text-[16px] leading-6 font-normal text-[#DFE2ED99]">
                      We measure success in business impact—with accountability
                      for ROI, not just technical deliverables.
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
            <h2 className="font-['Space_Grotesk'] text-[clamp(36px,5vw,48px)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#070B12]">
              Talk to an AI expert
            </h2>

            <p className="mt-8 max-w-[760px] font-['Inter'] text-[18px] leading-[1.6] font-normal text-[rgba(7,11,18,0.8)]">
              We know what works in AI and what doesn't. Let's talk about what's
              possible for your business. No fluff, just technical strategy.
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
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
          </button>
        </div>
      </section>
    </>
  );
}
