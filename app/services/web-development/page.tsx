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
                className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2"
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase md:text-xs">
                  Website Development Services
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
                className="font-space-grotesk text-[38px] leading-[1.05] font-bold tracking-tight text-white md:text-6xl xl:text-[52px]"
              >
                Website Development <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Services Built for Business Growth
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
                className="mt-8 text-lg leading-8 text-slate-300"
              >
                DigiGrowtherz provides website development services for
                businesses that need a professional online presence. We build
                responsive WordPress websites, Shopify stores, and custom web
                applications with thoughtful design, clear user journeys, and
                performance-conscious development.
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
                  Discuss Your Website Project
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
                  Explore Website Solutions
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
                      Web Development
                    </p>

                    <h5 className="mt-1 font-semibold text-white">
                      Scalable Website Architecture
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
              className="font-space-grotesk mt-6 text-[34px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Website Development That Goes <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Beyond an Online Presence.
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
              Our website development process brings together user-focused
              design, responsive layouts, accessible navigation, and reliable
              technology. Whether you need a business website, an eCommerce
              store, or a custom web application, we plan each build around your
              audience, content, and business goals.
            </motion.p>
          </div>

          {/* OVERVIEW — CORE WEBSITE DEVELOPMENT PILLARS */}
          <div className="mx-auto mt-16 lg:mt-20">
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
                    01 — Website Design
                  </p>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Website Design & User Experience
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    We design clear, user-friendly website experiences that
                    communicate your value, organize information, and help
                    visitors find the products, services, or details they need
                    across desktop, tablet, and mobile devices.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "User Experience Design",
                      "Mobile-Responsive Layouts",
                      "Clear Site Navigation",
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
                    Website Performance Optimization
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    We build with performance in mind by using maintainable
                    code, appropriately optimized images and assets, and
                    efficient page structures. The implementation is reviewed to
                    help pages load smoothly and work reliably across common
                    devices.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Fast Loading",
                      "Optimized Assets",
                      "Scalable Website Architecture",
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
                    Conversion-Focused Website Design
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    A website should guide visitors toward useful next steps. We
                    organize page content, service and product information,
                    navigation, and calls to action around the actions that
                    matter to your business, such as making an enquiry or
                    completing a purchase.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Clear Calls to Action",
                      "Purposeful Page Layouts",
                      "User Journey Planning",
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
                    Scalable Website Architecture
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    We plan website structure and technology around your current
                    requirements while allowing room for future content,
                    features, integrations, and business changes. The right
                    platform and architecture depend on the scope and long-term
                    needs of each project.
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Flexible Architecture",
                      "Expandable Features",
                      "Maintainable Structure",
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
              className="font-space-grotesk mt-6 text-[36px] leading-[1.08] font-bold tracking-tight text-white sm:mt-7 sm:text-4xl md:text-5xl lg:mt-8 lg:text-6xl"
            >
              Website Solutions for Different
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Business Requirements.
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
              Explore website development for business websites, eCommerce
              stores, landing pages, corporate websites, custom web
              applications, and existing website redesigns. We match the
              structure, platform, and functionality to your content, customers,
              and project objectives.
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

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
                  We develop professional business websites that present your
                  company, services, and expertise clearly. Each site is planned
                  around your brand, target audience, and business goals, with
                  responsive layouts and clear enquiry paths.
                </p>

                {/* Capabilities */}
                <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                  {[
                    "Custom Website Design",
                    "Responsive Development",
                    "Service & About Pages",
                    "Clear Enquiry Paths",
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
                  We build eCommerce websites and Shopify stores with organized
                  product pages, clear category navigation, helpful product
                  information, and a straightforward shopping journey from
                  browsing to checkout.
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
                  We create focused landing pages for specific services,
                  products, and marketing campaigns. Clear messaging, relevant
                  content, and prominent calls to action help visitors
                  understand the offer and take the intended next step.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Lead Generation Pages",
                    "Campaign Landing Pages",
                    "Clear Calls to Action",
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
                  We develop corporate websites for established organizations
                  that need to present company information, services, teams, and
                  resources in a consistent structure. Content sections can be
                  planned to support future updates and expansion.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Professional Company Presence",
                    "Structured Company Content",
                    "Expandable Website Structure",
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
                  We develop custom web applications for business processes that
                  require functionality beyond a standard website. Project scope
                  can include user roles, data-driven interfaces, integrations,
                  and workflows based on your requirements.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Custom Business Workflows",
                    "Next.js & React",
                    "Application Features",
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
                  We redesign and modernize existing websites by reviewing their
                  layout, content structure, mobile experience, usability, and
                  technical needs. The work focuses on improving the areas that
                  matter while retaining useful existing content and
                  functionality where appropriate.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {[
                    "Modern Website Design",
                    "Mobile Usability",
                    "Performance Improvements",
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

              <span className="font-mono text-[9px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                Website Design & Development Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-space-grotesk mx-auto max-w-4xl text-[35px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              From Initial Brief to <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Website Launch
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Our website design and development process moves from discovery
              and planning through design, development, testing, and launch.
              Each stage keeps the project aligned with your requirements,
              content, and agreed scope.
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
                    "We review your business, audience, website goals, content, existing platform, and technical requirements to define the project scope.",
                  detail: "Understand",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We plan the sitemap, page hierarchy, user journeys, content needs, platform, and technical approach for the website.",
                  detail: "Plan",
                  icon: Target,
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "We create the website interface and page layouts to reflect your brand, support clear navigation, and make important actions easy to find.",
                  detail: "Create",
                  icon: Palette,
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "We develop the approved designs using the selected platform or framework, then implement responsive layouts, required functionality, and agreed integrations.",
                  detail: "Build",
                  icon: Code2,
                },
                {
                  number: "05",
                  title: "Launch",
                  description:
                    "We review the website across devices, check key links and forms, address identified issues, and deploy the approved website to its hosting environment.",
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
                    "We review your business, audience, website goals, content, existing platform, and technical requirements to define the project scope.",
                  detail: "Understand",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We plan the sitemap, page hierarchy, user journeys, content needs, platform, and technical approach for the website.",
                  detail: "Plan",
                  icon: Target,
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "We create the website interface and page layouts to reflect your brand, support clear navigation, and make important actions easy to find.",
                  detail: "Create",
                  icon: Palette,
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "We develop the approved designs using the selected platform or framework, then implement responsive layouts, required functionality, and agreed integrations.",
                  detail: "Build",
                  icon: Code2,
                },
                {
                  number: "05",
                  title: "Launch",
                  description:
                    "We review the website across devices, check key links and forms, address identified issues, and deploy the approved website to its hosting environment.",
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
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
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
                  Website Development Technologies
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[35px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[44px]">
                Modern Website Technologies <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Chosen for Your Project.
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
              Our website development stack includes Next.js, React, TypeScript,
              Node.js, WordPress, Shopify, and supporting design and deployment
              tools. We select the platform and technologies according to your
              website requirements, content management needs, integrations, and
              future plans.
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
                    01 — Web Development
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Development Frameworks & Languages
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
                    02 — CMS & eCommerce Platforms
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Content Management & eCommerce
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
                      className="group relative flex min-h-[120px] items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.05]"
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
                    03 — Design & Deployment Tools
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Website Design, Deployment & Collaboration
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
                Technology should serve the website and the business behind it.
                We choose frameworks, content platforms, and deployment tools
                based on functionality, maintainability, content management, and
                the needs of the project.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Technology Chosen for Your Needs
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
                  Why Choose DigiGrowtherz
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[29px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[44px]">
                A Website Partner <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Focused on Your Goals.
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
              DigiGrowtherz brings website strategy, user-focused design,
              development, and technology together. We consider your business
              objectives, audience, content, and day-to-day needs when planning
              a business website, Shopify store, or custom web application.
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
                  <p className="font-mono text-[9px] tracking-[0.25em] text-cyan-300 uppercase md:text-[10px]">
                    01 — Business Requirements First
                  </p>

                  <h3 className="font-space-grotesk mt-4 text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    Website Development Aligned With Your Business Goals.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    We consider your audience, services, content, and desired
                    customer actions before making design and technology
                    decisions. This helps create a website structure that
                    communicates your offer and supports the goals of the
                    project.
                  </p>

                  {/* Mini metrics */}
                  <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        01
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Clear Project Scope
                      </p>
                    </div>

                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        02
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Suitable Technology
                      </p>
                    </div>

                    <div>
                      <p className="font-space-grotesk text-2xl font-bold text-white">
                        03
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Defined Website Goals
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
                    "We clarify the business need, audience, and requirements before selecting a platform or framework.",
                  accent: "cyan",
                },
                {
                  number: "02",
                  title: "Premium Execution",
                  description:
                    "We bring together consistent visual design, responsive layouts, and careful implementation.",
                  accent: "lime",
                },
                {
                  number: "03",
                  title: "Modern Technology",
                  description:
                    "We select established frameworks and platforms that match the project's functionality and maintenance needs.",
                  accent: "cyan",
                },
                {
                  number: "04",
                  title: "Long-Term Value",
                  description:
                    "We plan content and website structures that can be maintained and expanded as requirements change.",
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
                A useful website is more than its visual design. It should
                clearly explain your business, help visitors find information,
                and provide a reliable foundation for future updates.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built Around Your Business
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Website <br className="hidden md:block" /> Development{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  FAQs.
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
              Find answers about website development timelines, WordPress and
              Shopify, custom web applications, responsive design, SEO-ready
              website structure, maintenance, and working with our team.
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
                  Need Help Planning Your Website?
                </p>

                {/* Heading */}
                <h3 className="font-space-grotesk mt-4 text-2xl leading-tight font-semibold text-white sm:text-3xl">
                  Discuss Your Website Requirements.
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Every website project has different goals and requirements.
                  Contact our team to discuss your business, content, preferred
                  platform, and the functionality you need.
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
                  Discuss Your Website Project
                  <span className="text-cyan-300">→</span>
                </motion.a>

                {/* Mini Status */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                  <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    Website Project Enquiries
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — QUESTIONS */}
            <div className="space-y-3">
              {[
                {
                  question: "How long does a website development project take?",
                  answer:
                    "The timeline depends on the website's size, required features, content readiness, integrations, and level of customization. A focused business website usually requires less work than a large eCommerce store or custom web application. We define the scope and proposed timeline during project planning.",
                },
                {
                  question:
                    "Do you build websites with WordPress, Shopify, and Next.js?",
                  answer:
                    "Yes. We work with WordPress and Shopify for content-managed and eCommerce websites, and Next.js and React for custom web development. Our broader toolkit also includes platforms such as Squarespace, Webflow, and Wix, plus supporting technologies for deployment and integrations. We recommend an approach based on your functionality, content management, and long-term requirements.",
                },
                {
                  question: "Can you redesign or improve my existing website?",
                  answer:
                    "Yes. Website redesign and modernization can address visual design, page structure, mobile usability, navigation, content presentation, and technical requirements. We first review what is working and what needs improvement so the proposed changes fit your goals.",
                },
                {
                  question:
                    "Will my website work on mobile phones and tablets?",
                  answer:
                    "Responsive design is part of the website planning and development process. We build page layouts intended to adapt to mobile phones, tablets, laptops, and desktop screens, and review key pages and interactions across different screen sizes.",
                },
                {
                  question: "Can you build an SEO-friendly website?",
                  answer:
                    "We can consider SEO fundamentals during website development, including a crawlable page structure, logical heading hierarchy, descriptive page URLs, editable titles and meta descriptions, responsive layouts, and image optimization. These foundations do not guarantee rankings; search performance also depends on content quality, competition, authority, and ongoing SEO work.",
                },
                {
                  question: "Do you provide website maintenance after launch?",
                  answer:
                    "Post-launch maintenance and ongoing improvements can be discussed as part of your project requirements. Depending on the agreed scope, support may include content or feature updates, technical fixes, platform updates, and further development.",
                },
                {
                  question: "How do you choose the right website platform?",
                  answer:
                    "We consider your business goals, content management needs, required features, integrations, budget, expected maintenance, and plans for future growth. This helps us assess whether a platform such as WordPress or Shopify, or a custom framework such as Next.js and React, is more suitable.",
                },
                {
                  question: "Do you work with businesses outside Pakistan?",
                  answer:
                    "Yes. Website projects can be planned and coordinated remotely. We use project discussions and agreed communication methods to understand requirements, review progress, and coordinate design, development, and delivery with clients in different locations.",
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
                Have another question about website design, development, or
                platform selection? Contact DigiGrowtherz to discuss your
                website requirements and the next steps.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Ask About Website Development
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

                  <span className="font-mono text-[9px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px] md:text-[10px]">
                    Start Your Website Project
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
                  className="font-space-grotesk mt-7 max-w-3xl text-[28px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Ready to Build Your <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    New Website?
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
                  Whether you need a business website, a Shopify store, a
                  WordPress website, a landing page, or a custom web
                  application, tell us about your goals. DigiGrowtherz can help
                  you plan the right website development approach for your
                  business.
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
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)] md:px-8"
                  >
                    Discuss Your Website Project
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
                Let&apos;s turn your website requirements into a clear project
                plan.
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[9px] tracking-[0.22em] text-slate-600 uppercase">
                  Website Development by DigiGrowtherz
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
