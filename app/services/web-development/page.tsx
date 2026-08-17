"use client";

import {
  ArrowRight,
  Building2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MousePointerClick,
  Palette,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Rocket,
  Target,
  Search,
  ArrowUpRight,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiWordpress,
  SiShopify,
  SiSquarespace,
  SiWebflow,
  SiWix,
  SiFigma,
  SiFramer,
  SiVercel,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function WebDevelopmentServicePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#08151A] to-[#071018]" />

          {/* Central cyan glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Lime glow */}
          <div className="absolute top-[30%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[160px]" />

          {/* Right glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />

          {/* Development grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071018_78%)]" />

          {/* Small decorative particles */}
          {[
            { left: "8%", top: "24%", size: 5, delay: 0 },
            { left: "18%", top: "68%", size: 4, delay: 1.2 },
            { left: "79%", top: "20%", size: 4, delay: 0.6 },
            { left: "90%", top: "62%", size: 5, delay: 1.8 },
            { left: "68%", top: "76%", size: 3, delay: 0.9 },
            { left: "42%", top: "12%", size: 3, delay: 1.5 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -12, 0],
                opacity: [0.25, 0.8, 0.25],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-lime-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 18px rgba(163,230,53,0.55)",
              }}
            />
          ))}
        </div>

        {/* Small top glow */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* HERO CONTAINER */}
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2"
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-xs tracking-[0.28em] text-cyan-300 uppercase">
                  Website Development
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="font-space-grotesk max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl xl:text-7xl"
              >
                Websites Built to <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Grow Your Business
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
              >
                We design and develop fast, modern, and conversion-focused
                websites that turn your digital presence into a powerful
                business asset.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-12 flex flex-col gap-4 sm:flex-row"
              >
                {/* Primary CTA */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="#solutions"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  Explore Our Services
                </motion.a>
              </motion.div>

              {/* Bottom Highlights */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="mt-14 flex flex-wrap gap-8 md:gap-16"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">Fast</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Performance Focused
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">UX</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Conversion Focused
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">∞</h4>

                  <p className="mt-1 text-sm text-slate-400">Built to Scale</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — PREMIUM WEBSITE VISUAL */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative flex min-h-[620px] items-center justify-center"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[140px]" />
              </div>

              {/* Floating Code Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 -left-4 z-20 hidden w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/15">
                    <Code2 className="h-5 w-5 text-lime-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                      Development
                    </p>

                    <h5 className="mt-1 font-semibold text-white">
                      Clean Architecture
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* MAIN BROWSER */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[560px] rounded-[36px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              >
                {/* Browser */}
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0A121A]">
                  {/* Browser Header */}
                  <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <div className="ml-4 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#A3E635]" />

                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        yourbusiness.com
                      </span>
                    </div>
                  </div>

                  {/* WEBSITE PREVIEW */}
                  <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-[#101C23] via-[#0B151B] to-[#081017] p-6 sm:p-8">
                    {/* Website grid */}
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
                  `,
                        backgroundSize: "36px 36px",
                      }}
                    />

                    {/* Website Navbar */}
                    <div className="relative flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-white/20" />

                      <div className="hidden items-center gap-4 sm:flex">
                        <div className="h-2 w-10 rounded-full bg-white/10" />
                        <div className="h-2 w-10 rounded-full bg-white/10" />
                        <div className="h-2 w-10 rounded-full bg-white/10" />

                        <div className="h-7 w-20 rounded-full bg-lime-300/80" />
                      </div>
                    </div>

                    {/* Website Hero Preview */}
                    <div className="relative mt-14 grid items-center gap-8 sm:grid-cols-[1fr_0.8fr]">
                      {/* Left */}
                      <div>
                        <div className="h-3 w-24 rounded-full bg-cyan-300/30" />

                        <div className="mt-5 space-y-3">
                          <div className="h-7 w-[85%] rounded-lg bg-white/90" />

                          <div className="h-7 w-[68%] rounded-lg bg-white/70" />
                        </div>

                        <div className="mt-6 max-w-[270px] space-y-2">
                          <div className="h-2 w-full rounded-full bg-white/10" />

                          <div className="h-2 w-[85%] rounded-full bg-white/10" />

                          <div className="h-2 w-[65%] rounded-full bg-white/10" />
                        </div>

                        <div className="mt-7 h-9 w-28 rounded-full bg-gradient-to-r from-lime-300 to-cyan-300" />
                      </div>

                      {/* Right Visual */}
                      <div className="relative hidden aspect-square sm:block">
                        <div className="absolute inset-4 rounded-[28px] border border-cyan-300/20 bg-cyan-400/[0.05] backdrop-blur-xl" />

                        <motion.div
                          animate={{
                            rotate: [0, 3, 0, -3, 0],
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-10 rounded-[22px] border border-lime-300/20 bg-gradient-to-br from-lime-300/10 to-cyan-300/10"
                        >
                          <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-xl" />

                          <Sparkles className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-lime-300" />
                        </motion.div>

                        {/* Floating nodes */}
                        <motion.div
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute top-8 right-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]"
                        />

                        <motion.div
                          animate={{
                            y: [0, 8, 0],
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute bottom-8 left-4 h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]"
                        />
                      </div>
                    </div>

                    {/* Bottom Content Blocks */}
                    <div className="relative mt-12 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-white/[0.03]" />

                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-white/[0.03]" />

                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-white/[0.03]" />
                    </div>
                  </div>
                </div>

                {/* Floating Performance Badge */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -right-3 -bottom-5 z-20 rounded-2xl border border-lime-300/15 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:-right-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                      <Sparkles className="h-5 w-5 text-lime-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Performance
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Fast & Responsive
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating status node */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-10 right-14 h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_20px_#A3E635]"
                />

                <motion.div
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-24 left-16 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22D3EE]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#081119] to-[#070B12]" />

          {/* Central cyan glow */}
          <div className="absolute top-20 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-1/3 -left-48 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[160px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-[160px]" />

          {/* Development grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Grid fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B12_78%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
            >
              <Globe2 className="h-4 w-4 text-cyan-300" />

              <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                Website Development
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              More Than a Website.
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                A Digital Business Asset.
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
            >
              We build modern websites that combine thoughtful design, seamless
              user experiences, strong performance, and conversion-focused
              architecture to help your business attract, engage, and convert
              more customers.
            </motion.p>
          </div>

          {/* OVERVIEW — CORE WEBSITE DEVELOPMENT PILLARS */}
          <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
            {/* Feature Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
              {/* CARD 1 — DESIGN & UX */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.055] md:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px] transition-all duration-500 group-hover:bg-cyan-400/20" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10">
                  <Palette className="h-6 w-6 text-cyan-300" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    01 — Experience
                  </p>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Design & UX
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    We create intuitive digital experiences that make it easy
                    for visitors to understand your brand, navigate your
                    website, and take meaningful action.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "User Experience",
                      "Responsive Design",
                      "Clear Navigation",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

              {/* CARD 2 — PERFORMANCE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/20 hover:bg-white/[0.055] md:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-lime-400/10 blur-[90px] transition-all duration-500 group-hover:bg-lime-400/20" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-400/10">
                  <Gauge className="h-6 w-6 text-lime-300" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    02 — Performance
                  </p>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Built for Speed
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    Your website should feel fast from the first interaction. We
                    prioritize clean architecture, optimized assets, and
                    performance-focused development from the ground up.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Fast Loading",
                      "Optimized Assets",
                      "Clean Architecture",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-lime-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

              {/* CARD 3 — CONVERSION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.055] md:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px] transition-all duration-500 group-hover:bg-cyan-400/20" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10">
                  <MousePointerClick className="h-6 w-6 text-cyan-300" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    03 — Growth
                  </p>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Designed to Convert
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    A beautiful website is only part of the equation. We
                    structure content, calls-to-action, and user journeys around
                    the actions that matter most to your business.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Clear CTAs",
                      "Strategic Layouts",
                      "Conversion Paths",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

              {/* CARD 4 — SCALABILITY */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/20 hover:bg-white/[0.055] md:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-lime-400/10 blur-[90px] transition-all duration-500 group-hover:bg-lime-400/20" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-400/10">
                  <Layers3 className="h-6 w-6 text-lime-300" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    04 — Foundation
                  </p>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Ready to Scale
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    We build with the future in mind, creating flexible
                    foundations that can evolve as your business grows, your
                    audience expands, and your digital needs become more
                    advanced.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Modular Structure",
                      "Future Ready",
                      "Easy to Extend",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-lime-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-16 sm:py-20 lg:py-28 xl:py-32"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#08151A] to-[#071018]" />

          {/* Central cyan glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Lime glow */}
          <div className="absolute top-[30%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[160px]" />

          {/* Right glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />

          {/* Development grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071018_78%)]" />

          {/* Small decorative particles */}
          {[
            { left: "8%", top: "24%", size: 5, delay: 0 },
            { left: "18%", top: "68%", size: 4, delay: 1.2 },
            { left: "79%", top: "20%", size: 4, delay: 0.6 },
            { left: "90%", top: "62%", size: 5, delay: 1.8 },
            { left: "68%", top: "76%", size: 3, delay: 0.9 },
            { left: "42%", top: "12%", size: 3, delay: 1.5 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -12, 0],
                opacity: [0.25, 0.8, 0.25],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-lime-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 18px rgba(163,230,53,0.55)",
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 backdrop-blur-xl sm:px-5"
            >
              <Layers3 className="h-3.5 w-3.5 text-lime-300 sm:h-4 sm:w-4" />

              <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase sm:text-[11px] sm:tracking-[0.28em]">
                What We Build
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="font-space-grotesk mt-6 text-3xl leading-[1.08] font-bold tracking-tight text-white sm:mt-7 sm:text-4xl md:text-5xl lg:mt-8 lg:text-6xl"
            >
              Digital Experiences Built
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Around Your Business.
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:mt-7 lg:max-w-3xl lg:text-lg"
            >
              From high-converting business websites to powerful eCommerce
              platforms and custom web applications, we create digital
              experiences designed to solve real business problems and support
              long-term growth.
            </motion.p>
          </div>

          {/* SOLUTIONS — PREMIUM SERVICE CARDS */}
          <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:mt-18 lg:grid-cols-2 lg:gap-5">
            {/* FEATURED — BUSINESS WEBSITES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-lime-300/15 bg-gradient-to-br from-lime-300/[0.08] via-white/[0.035] to-cyan-300/[0.04] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/30 sm:rounded-[30px] sm:p-8 lg:rounded-[32px] lg:p-10"
            >
              {/* Featured Glow */}
              <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-lime-400/15 blur-[110px] transition-all duration-700 group-hover:bg-lime-400/25" />

              <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

              {/* Featured Label */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-400/10 sm:h-14 sm:w-14">
                  <Globe2 className="h-5 w-5 text-lime-300 sm:h-6 sm:w-6" />
                </div>

                <span className="rounded-full border border-lime-300/20 bg-lime-300/10 px-2.5 py-1.5 text-center font-mono text-[8px] tracking-[0.18em] text-lime-300 uppercase sm:px-3 sm:text-[9px] sm:tracking-[0.2em]">
                  Featured Solution
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-7 sm:mt-8">
                <p className="font-mono text-[9px] tracking-[0.22em] text-lime-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  01 — Core Website
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                  Business Websites
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
                  Professional websites built around your brand, audience, and
                  business goals — designed to establish credibility,
                  communicate your value, and turn visitors into customers.
                </p>

                {/* Capabilities */}
                <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                  {[
                    "Custom Design",
                    "Responsive Experience",
                    "Conversion-Focused",
                    "Performance Optimized",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 sm:px-4 sm:py-3"
                    >
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.7)]" />

                      <span className="text-xs text-slate-300 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute right-8 bottom-0 left-8 h-px bg-gradient-to-r from-transparent via-lime-300/40 to-transparent sm:right-10 sm:left-10" />
            </motion.div>

            {/* 02 — ECOMMERCE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.05] sm:rounded-[30px] sm:p-8 lg:rounded-[32px]"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 sm:h-14 sm:w-14">
                <ShoppingBag className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="font-mono text-[9px] tracking-[0.22em] text-cyan-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  02 — Commerce
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  eCommerce Websites
                </h3>

                <p className="mt-3.5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Online stores designed around usability, trust, and
                  conversions, giving customers a smooth path from discovery to
                  purchase.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Product Experience",
                    "Secure Checkout",
                    "Conversion Focus",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 03 — LANDING PAGES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/20 hover:bg-white/[0.05] sm:rounded-[30px] sm:p-8 lg:rounded-[32px]"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-lime-400/10 blur-[100px] transition-all duration-500 group-hover:bg-lime-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-400/10 sm:h-14 sm:w-14">
                <MousePointerClick className="h-5 w-5 text-lime-300 sm:h-6 sm:w-6" />
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="font-mono text-[9px] tracking-[0.22em] text-lime-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  03 — Campaigns
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  Landing Pages
                </h3>

                <p className="mt-3.5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Focused landing pages built for campaigns, products, services,
                  and lead generation with a clear path toward conversion.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {["Lead Generation", "Campaign Ready", "Clear CTAs"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* 04 — CORPORATE WEBSITES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.05] sm:rounded-[30px] sm:p-8 lg:rounded-[32px]"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 sm:h-14 sm:w-14">
                <Building2 className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="font-mono text-[9px] tracking-[0.22em] text-cyan-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  04 — Enterprise
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  Corporate Websites
                </h3>

                <p className="mt-3.5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Scalable digital platforms for established businesses that
                  need a polished presence, structured content, and room to
                  evolve.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Professional Presence",
                    "Structured Content",
                    "Scalable Foundation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 05 — CUSTOM WEB APPLICATIONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/20 hover:bg-white/[0.05] sm:rounded-[30px] sm:p-8 lg:rounded-[32px]"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-lime-400/10 blur-[100px] transition-all duration-500 group-hover:bg-lime-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-400/10 sm:h-14 sm:w-14">
                <Code2 className="h-5 w-5 text-lime-300 sm:h-6 sm:w-6" />
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="font-mono text-[9px] tracking-[0.22em] text-lime-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  05 — Custom Development
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  Custom Web Applications
                </h3>

                <p className="mt-3.5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Functional web applications built around your specific
                  workflows, users, data, and operational requirements.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {["Custom Workflows", "Modern Stack", "Business Logic"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* 06 — REDESIGN & MODERNIZATION */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.05] sm:rounded-[30px] sm:p-8 lg:rounded-[32px]"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 sm:h-14 sm:w-14">
                <RefreshCw className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="font-mono text-[9px] tracking-[0.22em] text-cyan-300 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                  06 — Modernization
                </p>

                <h3 className="font-space-grotesk mt-2.5 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  Website Redesign & Modernization
                </h3>

                <p className="mt-3.5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Transform outdated websites into modern, faster, and more
                  effective digital experiences without losing what already
                  works.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {["Modern UI", "Performance Improvements", "Better UX"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070D14] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070D14] via-[#09131A] to-[#070D14]" />

          {/* Top cyan atmosphere */}
          <div className="absolute top-[-180px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[180px]" />

          {/* Left lime atmosphere */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[170px]" />

          {/* Bottom cyan atmosphere */}
          <div className="absolute right-[-200px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[170px]" />

          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Center fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#070D14_82%)]" />

          {/* Ambient particles */}
          {[
            { left: "9%", top: "22%", size: 3, delay: 0 },
            { left: "22%", top: "78%", size: 4, delay: 1.2 },
            { left: "76%", top: "18%", size: 3, delay: 0.8 },
            { left: "91%", top: "66%", size: 4, delay: 1.8 },
            { left: "56%", top: "12%", size: 2, delay: 1.5 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.15, 0.55, 0.15],
              }}
              transition={{
                duration: 4 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-cyan-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 14px rgba(103,232,249,0.5)",
              }}
            />
          ))}
        </div>

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 mx-auto px-4">
          {/* SECTION INTRO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

              <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                Our Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-space-grotesk mx-auto max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              From Idea to
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Digital Experience
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A structured process keeps every project focused, transparent, and
              aligned with your business goals — from the first conversation to
              launch and beyond.
            </p>
          </motion.div>

          {/* DESKTOP PROCESS TIMELINE */}
          <div className="relative mt-20 hidden lg:block">
            {/* Timeline base line */}
            <div className="absolute top-6 right-0 left-0 h-px bg-white/[0.08]" />

            {/* Animated progress line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute top-6 right-0 left-0 h-px origin-left bg-gradient-to-r from-lime-400 via-cyan-300 to-lime-300 shadow-[0_0_14px_rgba(103,232,249,0.25)]"
            />

            {/* Timeline glow */}
            <div className="absolute top-[17px] right-[8%] left-[8%] h-[20px] rounded-full bg-cyan-400/[0.04] blur-xl" />

            {/* Step nodes */}
            <div className="relative grid grid-cols-5 gap-6">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, audience, goals, and technical requirements.",
                  detail: "Understand",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We define the website structure, user journey, content direction, and technical approach.",
                  detail: "Plan",
                  icon: Target,
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "We create a modern interface that reflects your brand while keeping usability and conversion at the center.",
                  detail: "Create",
                  icon: Palette,
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "We turn the approved design into a fast, responsive, and scalable website using the right technology.",
                  detail: "Build",
                  icon: Code2,
                },
                {
                  number: "05",
                  title: "Launch",
                  description:
                    "We test, refine, deploy, and make sure your website is ready to perform in the real world.",
                  detail: "Deliver",
                  icon: Rocket,
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-100px",
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.35 + index * 0.15,
                    }}
                    className="group relative pt-12"
                  >
                    {/* Step number */}
                    <div className="mb-5 font-mono text-[11px] tracking-[0.25em] text-cyan-300/60 uppercase">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-colors duration-300 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[0.06]"
                    >
                      <Icon className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-300" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-space-grotesk text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 max-w-[220px] text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>

                    {/* Bottom detail */}
                    <div className="mt-7 flex items-center gap-2">
                      <span className="h-px w-6 bg-gradient-to-r from-lime-300/70 to-cyan-300/70" />

                      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-300">
                        {step.detail}
                      </span>
                    </div>

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -top-2 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-300/[0.035] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE PROCESS TIMELINE */}
          <div className="relative mt-16 lg:hidden">
            {/* Vertical base line */}
            <div className="absolute top-0 bottom-0 left-[23px] w-px bg-white/[0.08]" />

            {/* Animated vertical progress */}
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="absolute top-0 bottom-0 left-[23px] w-px origin-top bg-gradient-to-b from-lime-400 via-cyan-300 to-lime-300 shadow-[0_0_10px_rgba(103,232,249,0.2)]"
            />

            {/* Mobile Process Steps */}
            <div className="relative space-y-14">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, audience, goals, and technical requirements.",
                  detail: "Understand",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We define the website structure, user journey, content direction, and technical approach.",
                  detail: "Plan",
                  icon: Target,
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "We create a modern interface that reflects your brand while keeping usability and conversion at the center.",
                  detail: "Create",
                  icon: Palette,
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "We turn the approved design into a fast, responsive, and scalable website using the right technology.",
                  detail: "Build",
                  icon: Code2,
                },
                {
                  number: "05",
                  title: "Launch",
                  description:
                    "We test, refine, deploy, and make sure your website is ready to perform in the real world.",
                  detail: "Deliver",
                  icon: Rocket,
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="relative flex gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09131A] shadow-[0_0_0_8px_rgba(7,13,20,0.95)]">
                      <motion.div
                        initial={{
                          scale: 0.7,
                          opacity: 0.5,
                        }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.15 + index * 0.12,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-lime-300 to-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.7)]"
                      />
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0 flex-1 pb-2">
                      {/* Number + Icon */}
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300/60 uppercase">
                          {step.number}
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
                          <Icon className="h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-space-grotesk text-2xl font-semibold text-white">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {step.description}
                      </p>

                      {/* Detail */}
                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-px w-6 bg-gradient-to-r from-lime-300/70 to-cyan-300/70" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top cyan glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Bottom lime glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Development grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating particles */}
          {[
            { left: "7%", top: "18%", size: 4, delay: 0 },
            { left: "17%", top: "72%", size: 3, delay: 1.2 },
            { left: "82%", top: "17%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-lime-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(163,230,53,0.5)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* INTRO */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            {/* LEFT — SECTION INTRO */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  Technologies
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                The Right Stack
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  For the Right Job.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT — INTRO COPY */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              We work across modern frameworks, content platforms, commerce
              solutions, and design tools — selecting the technology that best
              fits your project, business goals, and long-term needs.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* DEVELOPMENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="border-t border-white/10 pt-6"
            >
              {/* CATEGORY HEADER */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    01 — Development
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Modern Web Technologies
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Build / Scale
                </span>
              </div>

              {/* TECHNOLOGY GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Next.js",
                    icon: SiNextdotjs,
                  },
                  {
                    name: "React",
                    icon: SiReact,
                  },
                  {
                    name: "TypeScript",
                    icon: SiTypescript,
                  },
                  {
                    name: "Tailwind CSS",
                    icon: SiTailwindcss,
                  },
                  {
                    name: "Node.js",
                    icon: SiNodedotjs,
                  },
                  {
                    name: "MongoDB",
                    icon: SiMongodb,
                  },
                ].map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group relative flex min-h-[120px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Logo */}
                      <Icon className="relative h-8 w-8 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />

                      {/* Name */}
                      <span className="relative mt-4 text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CMS & COMMERCE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-14 border-t border-white/10 pt-6 lg:mt-16"
            >
              {/* CATEGORY HEADER */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    02 — Platforms
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    CMS & Commerce
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Manage / Sell
                </span>
              </div>

              {/* PLATFORM GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "WordPress",
                    icon: SiWordpress,
                  },
                  {
                    name: "Shopify",
                    icon: SiShopify,
                  },
                  {
                    name: "Squarespace",
                    icon: SiSquarespace,
                  },
                  {
                    name: "Webflow",
                    icon: SiWebflow,
                  },
                  {
                    name: "Wix",
                    icon: SiWix,
                  },
                  {
                    name: "Vercel",
                    icon: SiVercel,
                  },
                ].map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group relative flex min-h-[120px] items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Logo */}
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                        <Icon className="h-6 w-6 text-slate-300 transition-colors duration-300 group-hover:text-white" />
                      </div>

                      {/* Name */}
                      <span className="relative text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* DESIGN & TOOLING */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-14 border-t border-white/10 pt-6 lg:mt-16"
            >
              {/* CATEGORY HEADER */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    03 — Design & Workflow
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Design, Deployment & Collaboration
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Design / Ship
                </span>
              </div>

              {/* TOOLING GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  {
                    name: "Figma",
                    icon: SiFigma,
                  },
                  {
                    name: "Framer",
                    icon: SiFramer,
                  },
                  {
                    name: "GitHub",
                    icon: SiGithub,
                  },
                  {
                    name: "Git",
                    icon: SiGit,
                  },
                  {
                    name: "Vercel",
                    icon: SiVercel,
                  },
                ].map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group relative flex min-h-[100px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/[0.035] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Logo */}
                      <Icon className="relative h-6 w-6 text-slate-400 transition-colors duration-300 group-hover:text-white" />

                      {/* Name */}
                      <span className="relative text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* CLOSING STATEMENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Technology is a means to an outcome. We choose the tools that
                make your website faster, easier to manage, and better equipped
                for what&apos;s next.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built With Purpose
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* WHY DIGIGROWTHERZ */}
      <section
        id="why-digigrowtherz"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Center cyan glow */}
          <div className="absolute top-[10%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.05] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating particles */}
          {[
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "20%", top: "76%", size: 3, delay: 1.1 },
            { left: "78%", top: "18%", size: 4, delay: 0.7 },
            { left: "90%", top: "68%", size: 3, delay: 1.7 },
            { left: "62%", top: "82%", size: 3, delay: 0.9 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-lime-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(163,230,53,0.5)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-lime-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* INTRO */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            {/* LEFT — SECTION INTRO */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Why DigiGrowtherz
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                More Than
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Just Development.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT — INTRO COPY */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              We combine strategy, design, development, and technology to create
              digital experiences that are built around your business — not just
              another website that looks good.
            </motion.p>
          </div>

          {/* VALUE SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* MAIN VALUE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="grid overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] lg:grid-cols-[1.05fr_0.95fr]"
            >
              {/* LEFT */}
              <div className="relative overflow-hidden border-b border-white/[0.08] p-7 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
                {/* Glow */}
                <div className="absolute top-[-100px] left-[-100px] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.07] blur-[100px]" />

                <div className="relative z-10">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    01 — Business First
                  </p>

                  <h3 className="font-space-grotesk mt-4 max-w-xl text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    We build with your business goals in mind.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    Every design decision, technology choice, and development
                    decision has a purpose — helping your business attract,
                    engage, convert, and grow.
                  </p>

                  {/* Mini metrics */}
                  <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        01
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Clear Strategy
                      </p>
                    </div>

                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        02
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Smart Technology
                      </p>
                    </div>

                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        03
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Measurable Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex min-h-[320px] items-center justify-center p-7 sm:p-10 lg:p-12">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.04] via-transparent to-cyan-300/[0.04]" />

                {/* Connection lines */}
                <div className="absolute top-1/2 right-8 left-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="relative z-10 flex w-full max-w-md items-center justify-between gap-4">
                  {/* Strategy */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                      <span className="font-space-grotesk text-lg font-bold text-cyan-300">
                        01
                      </span>
                    </div>

                    <span className="mt-3 text-xs font-medium text-slate-400">
                      Strategy
                    </span>
                  </motion.div>

                  {/* Arrow */}
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/20 to-lime-300/20 sm:block" />

                  {/* Build */}
                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-lime-300/25 bg-lime-300/[0.08] shadow-[0_0_45px_rgba(163,230,53,0.1)]">
                      <span className="font-space-grotesk text-xl font-bold text-lime-300">
                        02
                      </span>
                    </div>

                    <span className="mt-3 text-xs font-medium text-slate-300">
                      Build
                    </span>
                  </motion.div>

                  {/* Arrow */}
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-lime-300/20 to-cyan-300/20 sm:block" />

                  {/* Growth */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                      <span className="font-space-grotesk text-lg font-bold text-cyan-300">
                        03
                      </span>
                    </div>

                    <span className="mt-3 text-xs font-medium text-slate-400">
                      Growth
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* DIFFERENTIATORS */}
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Strategic Thinking",
                  description:
                    "We understand the problem before choosing the technology.",
                  accent: "cyan",
                },
                {
                  number: "02",
                  title: "Premium Execution",
                  description:
                    "Clean design and quality development come together in every build.",
                  accent: "lime",
                },
                {
                  number: "03",
                  title: "Modern Technology",
                  description:
                    "We use proven tools and frameworks that keep your project ready for what's next.",
                  accent: "cyan",
                },
                {
                  number: "04",
                  title: "Long-Term Value",
                  description:
                    "We build digital products that are easier to manage, improve, and scale.",
                  accent: "lime",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045]"
                >
                  {/* Accent */}
                  <div
                    className={`absolute top-0 left-0 h-px w-20 ${
                      item.accent === "cyan"
                        ? "bg-gradient-to-r from-cyan-300/70 to-transparent"
                        : "bg-gradient-to-r from-lime-300/70 to-transparent"
                    }`}
                  />

                  <span
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
                      item.accent === "cyan" ? "text-cyan-300" : "text-lime-300"
                    }`}
                  >
                    {item.number}
                  </span>

                  <h4 className="font-space-grotesk mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Great digital work is not just about what you build. It is about
                creating something that continues to create value for your
                business.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built To Grow
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top cyan glow */}
          <div className="absolute top-[-220px] left-[20%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Right lime glow */}
          <div className="absolute top-[35%] right-[-220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Bottom cyan glow */}
          <div className="absolute bottom-[-220px] left-[10%] h-[480px] w-[480px] rounded-full bg-cyan-400/[0.05] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,#070B12_82%)]" />

          {/* Floating particles */}
          {[
            { left: "9%", top: "18%", size: 4, delay: 0 },
            { left: "24%", top: "76%", size: 3, delay: 1.1 },
            { left: "78%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "66%", size: 3, delay: 1.7 },
            { left: "61%", top: "84%", size: 3, delay: 0.9 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-cyan-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(103,232,249,0.5)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-lime-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* INTRO */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            {/* LEFT — SECTION INTRO */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  FAQ
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Questions?
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  We Have Answers.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT — INTRO COPY */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              From project timelines and technology choices to pricing and
              ongoing support, here are some of the questions we hear most
              often.
            </motion.p>
          </div>

          {/* FAQ AREA */}
          <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT — FAQ CONTEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative h-fit overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8 lg:sticky lg:top-24"
            >
              {/* Glow */}
              <div className="absolute top-[-100px] right-[-100px] h-[240px] w-[240px] rounded-full bg-cyan-400/[0.07] blur-[100px]" />

              <div className="relative">
                {/* Label */}
                <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  Need More Clarity?
                </p>

                {/* Heading */}
                <h3 className="font-space-grotesk mt-4 text-2xl leading-tight font-semibold text-white sm:text-3xl">
                  Let's Talk About Your Project.
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Every project is different. If you don't see your question
                  here, we're happy to discuss your requirements and recommend
                  the right approach.
                </p>

                {/* CTA */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.12]"
                >
                  Start a Conversation
                  <span className="text-cyan-300">→</span>
                </motion.a>

                {/* Mini Status */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                  <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    Let's Build Something
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — QUESTIONS */}
            <div className="space-y-3">
              {[
                {
                  question: "How long does a typical website project take?",
                  answer:
                    "Project timelines depend on the scope, features, content, and level of customization. A straightforward website can move relatively quickly, while larger projects require more planning, development, and testing.",
                },
                {
                  question:
                    "Do you build custom websites or use existing platforms?",
                  answer:
                    "Both. We work with modern frameworks such as Next.js and React as well as platforms including WordPress, Shopify, Squarespace, Webflow, and Wix. We choose the platform based on what makes the most sense for your project.",
                },
                {
                  question: "Can you redesign or improve an existing website?",
                  answer:
                    "Yes. We can work with an existing website and improve its design, user experience, performance, responsiveness, structure, or technology depending on what needs to be addressed.",
                },
                {
                  question: "Will my website be mobile responsive?",
                  answer:
                    "Yes. Responsive behavior is considered throughout the design and development process so your website works smoothly across mobile devices, tablets, laptops, and larger screens.",
                },
                {
                  question:
                    "Can you help with website maintenance after launch?",
                  answer:
                    "Yes. We can continue supporting your website after launch with updates, improvements, technical fixes, performance work, and additional features as your business evolves.",
                },
                {
                  question:
                    "How do you choose the right technology for a project?",
                  answer:
                    "We look at your business goals, functionality, content needs, scalability, budget, maintenance requirements, and long-term plans before recommending a technology or platform.",
                },
                {
                  question:
                    "Do you work with businesses outside your local area?",
                  answer:
                    "Yes. Digital projects can be handled remotely, allowing us to work with businesses regardless of their location.",
                },
              ].map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 open:border-cyan-300/20 open:bg-white/[0.04]"
                >
                  {/* Question */}
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-space-grotesk text-base font-medium text-white sm:text-lg">
                        {faq.question}
                      </span>
                    </span>

                    {/* Plus Icon */}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                      <span className="absolute h-px w-3 bg-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:bg-cyan-300" />

                      <span className="absolute h-3 w-px bg-slate-400 transition-transform duration-300 group-open:rotate-90 group-open:bg-cyan-300" />
                    </span>
                  </summary>

                  {/* Answer */}
                  <div className="px-6 pb-6 sm:px-7">
                    <div className="ml-8 border-l border-cyan-300/10 pl-5">
                      <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Still have questions? The best way to find the right answer is
                to start a conversation about what you're trying to build.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Ask Anything
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09151A] to-[#070B12]" />

          {/* Central cyan glow */}
          <div className="absolute top-[10%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[35%] -left-[220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.07] blur-[170px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B12_78%)]" />

          {/* Floating particles */}
          {[
            { left: "8%", top: "24%", size: 4, delay: 0 },
            { left: "18%", top: "72%", size: 3, delay: 1.1 },
            { left: "82%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "64%", size: 3, delay: 1.7 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "42%", top: "12%", size: 3, delay: 1.4 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="absolute rounded-full bg-lime-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(163,230,53,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[240px] w-[360px] -translate-x-1/2 rounded-full bg-lime-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-14 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* CARD GLOWS */}
            <div className="absolute top-[-180px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px]" />

            <div className="absolute right-[-160px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-lime-400/[0.06] blur-[120px]" />

            {/* CARD GRID */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* LEFT */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                    Start Something Great
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className="font-space-grotesk mt-7 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Ready to Build
                  <br />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Something Better?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                  className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
                >
                  Whether you need a new website, a better digital experience,
                  or a scalable platform for your business, we can help turn
                  your idea into something built to perform.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  {/* PRIMARY CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)]"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>

                  {/* SECONDARY CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                  >
                    Let&apos;s Talk
                  </motion.a>
                </motion.div>
              </div>

              {/* RIGHT — PROJECT SIGNAL */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="relative flex min-h-[360px] items-center justify-center lg:min-h-[430px]"
              >
                {/* Ambient glow */}
                <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/[0.08] blur-[120px]" />

                {/* Main visual */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full max-w-[420px] rounded-[32px] border border-white/[0.08] bg-white/[0.04] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                >
                  {/* Visual Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.22em] text-slate-500 uppercase">
                        Your Next Project
                      </p>

                      <h3 className="font-space-grotesk mt-1 text-lg font-semibold text-white">
                        Ready to Launch
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/[0.08]">
                      <ArrowUpRight className="h-5 w-5 text-lime-300" />
                    </div>
                  </div>

                  {/* Signal Visual */}
                  <div className="relative mt-6 h-[190px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#081219]">
                    {/* Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
                  `,
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* Central glow */}
                    <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                    {/* Connection lines */}
                    <div className="absolute top-1/2 right-[18%] left-[18%] h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

                    <div className="absolute top-[30%] bottom-[30%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-lime-300/40 to-transparent" />

                    {/* Center node */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.08] shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                    >
                      <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                    </motion.div>

                    {/* Nodes */}
                    {[
                      {
                        className: "top-8 left-8",
                        color: "bg-lime-300",
                      },
                      {
                        className: "top-8 right-8",
                        color: "bg-cyan-300",
                      },
                      {
                        className: "bottom-8 left-8",
                        color: "bg-cyan-300",
                      },
                      {
                        className: "right-8 bottom-8",
                        color: "bg-lime-300",
                      },
                    ].map((node, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          opacity: [0.35, 1, 0.35],
                          scale: [1, 1.25, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.45,
                        }}
                        className={`absolute h-2.5 w-2.5 rounded-full ${node.color}`}
                        style={{
                          boxShadow:
                            node.color === "bg-lime-300"
                              ? "0 0 16px rgba(163,230,53,0.8)"
                              : "0 0 16px rgba(103,232,249,0.8)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom stats */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center">
                      <p className="text-lg font-bold text-white">Fast</p>
                      <p className="mt-1 font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                        Performance
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center">
                      <p className="text-lg font-bold text-white">UX</p>
                      <p className="mt-1 font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                        Experience
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center">
                      <p className="text-lg font-bold text-white">∞</p>
                      <p className="mt-1 font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                        Scalable
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* BOTTOM LINE */}
            <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row">
              <p className="text-center text-sm text-slate-500 sm:text-left">
                Let&apos;s turn your next idea into a digital experience that
                works.
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[9px] tracking-[0.22em] text-slate-600 uppercase">
                  Built To Perform
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />

        {/* Footer Transition */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="relative mt-32 overflow-hidden"
        >
          {/* Top Divider */}
          <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Center Vertical Line */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="mx-auto mt-10 h-24 w-px origin-top bg-gradient-to-b from-cyan-300/70 via-lime-300/50 to-transparent"
          />

          {/* Animated Energy Node */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto -mt-3 flex h-6 w-6 items-center justify-center"
          >
            {/* Outer Pulse */}
            <motion.div
              animate={{
                scale: [1, 2.4],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border border-cyan-300/40"
            />

            {/* Middle Glow */}
            <div className="absolute h-6 w-6 rounded-full bg-cyan-400/20 blur-md" />

            {/* Core */}
            <div className="relative h-3 w-3 rounded-full bg-gradient-to-r from-cyan-300 to-lime-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
          </motion.div>

          {/* Bottom Fade */}
          <div className="mt-8 bg-gradient-to-b from-transparent to-[#050B13]" />
        </motion.div>
      </section>
    </>
  );
}
