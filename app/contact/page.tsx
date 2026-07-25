"use client";

import ContactForm from "@/components/sections/ContactForm";
import ContactSidebar from "@/components/sections/ContactSidebar";
import dynamic from "next/dynamic";

export default function ContactPage() {
  const OfficeMap = dynamic(() => import("@/components/sections/OfficeMap"), {
    ssr: false,
  });
  return (
    <>
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] pt-10 lg:pt-28">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-[45%]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(160, 209, 79, 0.12) 0%, rgba(160, 209, 79, 0.06) 25%, rgba(160, 209, 79, 0) 70%)",
          }}
        />

        <div className="relative mx-auto">
          <div className="max-w-[920px]">
            {/* Subheading */}
            <p className="font-['JetBrains_Mono'] text-[16px] leading-6 font-normal tracking-[1.6px] text-[#A0D14F] uppercase">
              CONNECT WITH DIGIGROWTHTERZ
            </p>

            {/* Heading */}
            <h1 className="mt-6 font-['Space_Grotesk'] text-[clamp(48px,7vw,72px)] leading-[1.1] font-bold tracking-[-0.04em] text-[#DFE2ED]">
              Let's Build Smarter{" "}
              <span className="text-[#A0D14F]">Digital Solutions.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[860px] font-['Inter'] text-[18px] leading-[28.8px] font-normal text-[#C3C9B3]">
              Whether you're exploring AI automation, a custom website, a mobile
              application, digital marketing, or eCommerce growth, our team is
              ready to help turn your ideas into measurable business results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-20">
        <div className="mx-auto grid items-stretch gap-6 lg:grid-cols-[60%_38%]">
          {/* Left side */}
          <ContactForm />

          {/* Right side */}
          <ContactSidebar />
        </div>
      </section>

      <section>
        <OfficeMap />
      </section>
    </>
  );
}
