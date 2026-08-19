"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  image: string;
  btn_text: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    tag: "CUSTOM DEVELOPMENT",
    title: "A Dynamic Sports Platform Built for Athletes & Events",
    description:
      "A custom Next.js platform bringing athletes, events, upcoming shows, and sports content together in one immersive experience.",
    image: "/images/portfolio-1.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://www.wildersideofsports.com/",
  },
  {
    tag: "CUSTOM DEVELOPMENT",
    title: "A Purpose-Built Digital Platform for LifeCare Billing",
    description:
      "A custom web solution built to support the digital operations and professional presence of a billing-focused business.",
    image: "/images/portfolio-2.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://lifecarebilling.com/",
  },
  {
    tag: "CUSTOM DEVELOPMENT",
    title: "A Custom Digital Experience Built for Sync2Surge",
    description:
      "A tailored web experience designed around the brand, business goals, and digital presence of Sync2Surge.",
    image: "/images/portfolio-3.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://sync2surge.com/",
  },
  {
    tag: "WORDPRESS",
    title: "A Modern Digital Agency Platform for AfroSmile",
    description:
      "A professional WordPress website built to showcase AfroSmile's digital services, capabilities, and solutions through a modern, responsive, and conversion-focused experience.",
    image: "/images/portfolio-4.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://afrosmiletechhubug.com/",
  },
  {
    tag: "SHOPIFY",
    title: "Launching a Sweet New eCommerce Experience for GumJoy",
    description:
      "A Shopify store built for GumJoy's fruit sweets, with product merchandising, promotional offers, cart discounts, and a conversion-focused shopping experience.",
    image: "/images/portfolio-5.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://gumjoy.co.uk/",
  },
  {
    tag: "WORDPRESS",
    title: "A Modern WordPress Website for Voyager Center",
    description:
      "A tailored WordPress experience designed to present Voyager Center's services and information through a clean, responsive interface.",
    image: "/images/portfolio-6.webp",
    btn_text: "VIEW LIVE WEBSITE",
    link: "https://voyagerscenter.com/",
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
                width={1386}
                height={576}
                priority
                className="h-[192px] w-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <a
            href={activeCaseStudy.link}
            className="flex w-full items-center justify-center font-mono text-[12px] leading-3 font-medium tracking-[0.1em] text-white uppercase transition-opacity duration-300 hover:opacity-80"
          >
            {activeCaseStudy.btn_text}
          </a>
        </div>
      </div>
    </div>
  );
}
