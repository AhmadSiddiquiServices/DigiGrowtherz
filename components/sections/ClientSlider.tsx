"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTS = [
  {
    name: "WilderSideOfSports",
    src: "/images/client-1.webp",
  },
  {
    name: "LifeCareBilling",
    src: "/images/client-2.webp",
  },
  {
    name: "Sync2Surge",
    src: "/images/client-3.png",
  },
  {
    name: "PurelyYours",
    src: "/images/client-4.webp",
  },
  {
    name: "Jexmoo",
    src: "/images/client-5.png",
  },
  {
    name: "AfrosmileTechHub",
    src: "/images/client-6.png",
  },
  {
    name: "GumJoy",
    src: "/images/client-7.png",
  },
  {
    name: "Homechoice",
    src: "/images/client-8.webp",
  },
  {
    name: "NetZeroConsult",
    src: "/images/client-9.png",
  },
  {
    name: "TangerUSA",
    src: "/images/client-10.webp",
  },
  {
    name: "Eastern Kitchenware",
    src: "/images/client-11.webp",
  },
];

export default function ClientSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F141B] py-[clamp(4.5rem,7vw,6.5rem)]">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-[-180px] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#A0D14F]/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute top-1/2 right-[-180px] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#FFED00]/[0.025] blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(223,226,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(223,226,237,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Top Border */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-white/[0.06]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <div className="mx-auto mb-[clamp(2.5rem,4vw,4rem)] max-w-[800px] px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#A0D14F]" />

            <span className="font-jetbrains text-[10px] font-medium tracking-[0.22em] text-[#A0D14F] uppercase">
              Our Clients & Projects
            </span>

            <span className="h-px w-8 bg-[#A0D14F]" />
          </div>

          <h2 className="font-space-grotesk text-[clamp(1.7rem,4vw,3.5rem)] leading-[1.05] font-medium tracking-[-0.04em] text-[#DFE2ED]">
            Businesses & Digital Projects{" "}
            <span className="text-[#A0D14F]">We&apos;ve Worked With.</span>
          </h2>

          <p className="font-inter mx-auto mt-5 max-w-[680px] text-[14px] leading-7 text-[#DFE2ED70] sm:text-[15px]">
            Explore a selection of client brands and digital projects across
            different industries, showcasing our experience in website
            development, eCommerce solutions, custom digital platforms, and
            business technology.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full">
          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0F141B] to-transparent sm:w-32 lg:w-48" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0F141B] to-transparent sm:w-32 lg:w-48" />

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {/* First Copy */}
              <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
                {CLIENTS.map((client, index) => (
                  <ClientCard key={index} client={client} />
                ))}
              </div>

              {/* Second Copy */}
              <div
                aria-hidden="true"
                className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
              >
                {CLIENTS.map((client, index) => (
                  <ClientCard key={index} client={client} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-white/[0.06]" />
    </section>
  );
}

function ClientCard({
  client,
}: {
  client: {
    name: string;
    src: string;
  };
}) {
  return (
    <div className="group relative flex h-[105px] w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-white/[0.07] bg-[#0A1017]/80 px-7 backdrop-blur-xl transition-all duration-500 hover:border-[#A0D14F]/25 hover:bg-[#0C131B] sm:h-[115px] sm:w-[235px] lg:h-[125px] lg:w-[255px]">
      {/* Hover Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A0D14F]/[0.08] blur-[45px]" />
      </div>

      {/* Top Accent */}
      <div className="absolute top-0 right-[20%] left-[20%] h-px bg-gradient-to-r from-transparent via-[#A0D14F]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Logo */}
      <div className="relative h-[48px] w-[155px] transition-transform duration-500 group-hover:scale-[1.03] sm:h-[54px] sm:w-[175px] lg:h-[58px] lg:w-[190px]">
        <Image
          src={client.src}
          alt={client.name}
          fill
          sizes="190px"
          className="object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}
