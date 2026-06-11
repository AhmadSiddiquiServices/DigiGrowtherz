"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  image: string;
  badge: string;
};

const caseStudies: CaseStudy[] = [
  {
    tag: "FEATURED SUCCESS",
    title: "99% Faster Client Onboarding for Specialty Pharmacy",
    description:
      "Using our agentic AI framework, we automated the entire patient intake process, reducing manual labor from 20 days to under 5.",
    image: "/images/gradient.webp",
    badge: "IMPACT",
  },
  {
    tag: "CASE STUDY",
    title: "Automated Lead Qualification for Healthcare Providers",
    description:
      "AI agents screened and prioritized incoming inquiries, reducing sales response time by 83%.",
    image: "/images/gradient.webp",
    badge: "83%",
  },
  {
    tag: "SUCCESS STORY",
    title: "AI Workflow Automation for Financial Services",
    description:
      "Reduced repetitive tasks by 74%, allowing teams to focus on high-value work.",
    image: "/images/gradient.webp",
    badge: "74%",
  },
];

export default function CaseStudySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCaseStudy = caseStudies[activeIndex];

  return (
    <div
      className="h-fit overflow-hidden rounded-[8px] border border-white/10 bg-[#070B12] p-1 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="rounded-[6px] bg-[#191919] p-[clamp(24px,3vw,40px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <span className="font-mono text-[12px] leading-3 font-medium tracking-[0.1em] text-[#A0D14F] uppercase">
                {activeCaseStudy.tag}
              </span>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to case study ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-[#A0D14F]" : "bg-white/20"
                    } `}
                  />
                ))}
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-10 font-['Space_Grotesk'] text-[clamp(1.75rem,2vw,2rem)] leading-[1.3] font-normal text-[#DFE2ED]">
              {activeCaseStudy.title}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.625] text-[#DFE2ED99]">
              {activeCaseStudy.description}
            </p>

            {/* Image */}
            <div className="relative mt-10 overflow-hidden rounded-[2px]">
              <Image
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                width={462}
                height={192}
                priority
                className="h-[192px] w-full object-cover"
              />

              {/* Badge */}
              {/* <div className="absolute top-6 right-6 rounded-[2px] bg-[#A0D14F] px-4 py-3">
                <span className="font-['Space_Grotesk'] text-[clamp(0.875rem,1vw,1.125rem)] leading-none font-semibold text-[#070B12]">
                  {activeCaseStudy.badge}
                </span>
              </div> */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <button
            type="button"
            className="w-full font-mono text-[12px] leading-3 font-medium tracking-[0.1em] text-white uppercase transition-opacity duration-300 hover:opacity-80"
          >
            View All Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}
