"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroVisual from "../layout/HeroVisual";

export default function Hero() {
  const [showBlend, setShowBlend] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlend(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(270deg,#171717_0%,#15212A_100%)]">
      {/* Background Color */}
      <div className="pointer-events-none absolute top-[96px] left-[-74px] z-0 h-[205px] w-[205px] rounded-full bg-[#A0D14F]/30 blur-[80px]" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center gap-16 px-[clamp(1rem,4vw,5rem)] py-[clamp(4rem,8vw,7rem)] lg:flex-row lg:justify-between">
        {/* Left */}
        <motion.div
          className="max-w-[720px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#FFFFFF1A] bg-[#FFFFFF0D] px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#A0D14F]" />

            <span className="font-jetbrains text-[clamp(10px,2vw,12px)] leading-3 font-medium tracking-[1.2px] text-[#DFE2ED99] uppercase">
              AI AUTOMATION & DIGITAL SOLUTIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-space text-[clamp(2rem,7vw,3rem)] leading-[1.1] font-bold tracking-[-0.04em] text-[#DFE2ED]">
            AI Automation & Digital
            <br />
            <span className="text-[#A0D14F]">
              Solutions for Business Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="font-inter mt-8 max-w-[650px] text-[clamp(1rem,2vw,1.125rem)] leading-[29.25px] text-[#DFE2EDB2]">
            DigiGrowtherz helps startups, small businesses, and growing
            companies transform their operations with{" "}
            <span className="font-semibold text-[#A0D14F]">AI automation</span>,
            custom website development, and mobile app development. We also
            provide SEO, digital marketing, and eCommerce solutions to
            strengthen your online presence, streamline business processes, and
            support sustainable growth.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex h-[53px] items-center justify-center gap-3 bg-[#A0D14F] px-8 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-[#070B12] uppercase">
                Get In Touch
              </span>

              <ArrowRight className="h-5 w-5 text-[#070B12] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#portfolios"
              className="flex h-[53px] items-center justify-center border border-[#FFFFFF33] px-8 transition-colors duration-300 hover:border-[#A0D14F]"
            >
              <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-white uppercase">
                View Case Studies
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="relative w-full max-w-[720px] lg:-mr-8 xl:-mr-12"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
