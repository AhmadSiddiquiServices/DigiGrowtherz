"use client";

import {
  ArrowRight,
  Check,
  Layers3,
  Palette,
  Sparkles,
  BookOpen,
  FolderOpen,
  GitBranch,
  Layers,
  Lightbulb,
  Megaphone,
  MessageCircle,
  PenTool,
  Printer,
  Share2,
  Type,
  UsersRound,
  TrendingUp,
} from "lucide-react";
import { SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

export default function BrandingServicePage() {
  return (
    <>
      {/* BRANDING & DESIGN — HERO SECTION */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#0A1219] to-[#070B12]" />

          {/* Central Cyan Glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[190px]" />

          {/* Left Lime Glow */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right Cyan Glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-400/[0.05] blur-[170px]" />

          {/* Design Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "17%", top: "68%", size: 3, delay: 1.1 },
            { left: "81%", top: "18%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.6 },
            { left: "68%", top: "80%", size: 3, delay: 0.9 },
            { left: "46%", top: "10%", size: 3, delay: 1.4 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -12, 0],
                opacity: [0.2, 0.75, 0.2],
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            {/* LEFT — HERO CONTENT */}
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
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Branding & Design Services
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
                className="font-space-grotesk text-[36px] leading-[1.05] font-bold tracking-tight text-white sm:text-6xl xl:text-[52px]"
              >
                Branding & Design <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  That Builds Recognition.
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
                className="mt-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
              >
                DigiGrowtherz provides branding and graphic design services that
                help businesses build a distinctive brand identity. From logo
                design and brand guidelines to marketing creatives, print
                materials, and packaging design, we create visuals aligned with
                your audience and business goals.
              </motion.p>

              {/* CTA */}
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
                  Start Your Branding Project
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
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-lime-300/30 hover:bg-white/[0.08]"
                >
                  Explore Branding Services
                </motion.a>
              </motion.div>

              {/* Highlights */}
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
                className="mt-14 flex flex-wrap gap-8 md:gap-14"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Brand Identity
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Distinctive Visual Identity
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Logo Design</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Clear Brand Communication
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Consistency</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Across Every Touchpoint
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — BRANDING VISUAL */}
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
              className="relative flex min-h-[600px] items-center justify-center"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[520px] w-[520px] rounded-full bg-lime-400/[0.08] blur-[150px]" />
              </div>

              {/* Floating Brand Identity Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 -left-4 z-20 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/[0.12]">
                    <Palette className="h-5 w-5 text-lime-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                      Brand Identity
                    </p>

                    <h5 className="mt-1 font-semibold text-white">
                      Designed With Purpose
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* MAIN BRANDING BOARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[560px] rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              >
                {/* Creative Board */}
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1219]">
                  {/* Board Header */}
                  <div className="flex h-12 items-center justify-between border-b border-white/[0.07] bg-white/[0.025] px-5">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.18em] text-slate-600 uppercase">
                      Brand Studio
                    </span>
                  </div>

                  {/* BRAND CANVAS */}
                  <div className="relative min-h-[470px] overflow-hidden bg-gradient-to-br from-[#101B20] via-[#0B151B] to-[#081017] p-7 sm:p-9">
                    {/* Canvas Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
                  `,
                        backgroundSize: "34px 34px",
                      }}
                    />

                    {/* Brand Header */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/[0.08]">
                          <Sparkles className="h-4 w-4 text-lime-300" />
                        </div>

                        <div className="h-2.5 w-20 rounded-full bg-white/20" />
                      </div>

                      <div className="hidden items-center gap-3 sm:flex">
                        <div className="h-2 w-9 rounded-full bg-white/10" />
                        <div className="h-2 w-9 rounded-full bg-white/10" />
                        <div className="h-2 w-9 rounded-full bg-white/10" />
                      </div>
                    </div>

                    {/* Main Brand Composition */}
                    <div className="relative mt-12 grid items-center gap-10 sm:grid-cols-[1fr_0.9fr]">
                      {/* Typography */}
                      <div>
                        <div className="h-2.5 w-20 rounded-full bg-cyan-300/30" />

                        <div className="mt-6 space-y-3">
                          <div className="h-8 w-[90%] rounded-lg bg-white/[0.88]" />

                          <div className="h-8 w-[72%] rounded-lg bg-white/[0.62]" />

                          <div className="h-8 w-[55%] rounded-lg bg-lime-300/[0.7]" />
                        </div>

                        <div className="mt-7 max-w-[250px] space-y-2">
                          <div className="h-2 w-full rounded-full bg-white/10" />

                          <div className="h-2 w-[88%] rounded-full bg-white/10" />

                          <div className="h-2 w-[65%] rounded-full bg-white/10" />
                        </div>

                        {/* Brand Colors */}
                        <div className="mt-8 flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-lime-300/80" />

                          <div className="h-8 w-8 rounded-lg bg-cyan-300/70" />

                          <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/20" />

                          <div className="h-8 w-8 rounded-lg bg-white/[0.06]" />
                        </div>
                      </div>

                      {/* Brand Mark */}
                      <div className="relative hidden aspect-square sm:block">
                        {/* Outer Frame */}
                        <div className="absolute inset-2 rounded-[32px] border border-cyan-300/20 bg-cyan-300/[0.035]" />

                        {/* Inner Frame */}
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
                          className="absolute inset-8 rounded-[26px] border border-lime-300/20 bg-gradient-to-br from-lime-300/[0.08] to-cyan-300/[0.08]"
                        >
                          {/* Center Glow */}
                          <div className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.08] blur-2xl" />

                          {/* Abstract Brand Mark */}
                          <div className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04]">
                            <div className="h-10 w-10 rotate-45 rounded-xl border-2 border-lime-300/70" />
                          </div>
                        </motion.div>

                        {/* Decorative Nodes */}
                        <motion.div
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute top-3 right-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]"
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
                          className="absolute bottom-3 left-1 h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]"
                        />
                      </div>
                    </div>

                    {/* Creative Asset Blocks */}
                    <div className="relative mt-12 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-lime-300/[0.08] to-transparent" />

                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-cyan-300/[0.08] to-transparent" />

                      <div className="h-16 rounded-2xl border border-white/[0.07] bg-white/[0.025]" />
                    </div>
                  </div>
                </div>

                {/* Floating Creative Badge */}
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
                  className="absolute -right-3 -bottom-5 z-20 rounded-2xl border border-cyan-300/15 bg-white/[0.07] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:-right-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/[0.10]">
                      <Palette className="h-5 w-5 text-cyan-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Creative Direction
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Distinctive & Consistent
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Status Nodes */}
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
      <section
        id="overview"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#0A1119] to-[#070B12]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[10%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Left Cyan Glow */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.055] blur-[170px]" />

          {/* Right Lime Glow */}
          <div className="absolute right-[-220px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.05] blur-[170px]" />

          {/* Design Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#070B12_82%)]" />

          {/* Floating Design Particles */}
          {[
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "68%", size: 3, delay: 1.2 },
            { left: "82%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "78%", size: 3, delay: 0.9 },
            { left: "45%", top: "12%", size: 3, delay: 1.5 },
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
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
                  Branding & Design
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                A Strong Brand Is
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  More Than a Logo.
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
              Our branding and design services bring strategy and creativity
              together to give your business a clear, recognizable identity. We
              align logo design, brand colors, typography, and graphic design
              across your website, social media, marketing materials, and print
              touchpoints for a consistent customer experience.
            </motion.p>
          </div>

          {/* DIVIDER */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
            }}
            className="mx-auto mt-16 h-px w-56 origin-center bg-gradient-to-r from-transparent via-lime-300/60 to-transparent"
          />

          {/* OVERVIEW CONTENT */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* BRAND STRATEGY */}
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
                duration: 0.6,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  01
                </span>

                <span className="h-px w-12 bg-gradient-to-r from-lime-300/60 to-transparent" />
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                <Palette className="h-5 w-5 text-lime-300" />
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                  Build a Recognizable Brand Identity
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  We develop a clear brand identity system with logo design,
                  colors, typography, and visual elements that help customers
                  recognize your business across every channel.
                </p>
              </div>
            </motion.div>

            {/* VISUAL CONSISTENCY */}
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
                duration: 0.6,
                delay: 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  02
                </span>

                <span className="h-px w-12 bg-gradient-to-r from-cyan-300/60 to-transparent" />
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                  Consistent Design Across Channels
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Our graphic design keeps your visual identity aligned across
                  websites, social media, advertising, business stationery, and
                  printed materials so every interaction feels connected.
                </p>
              </div>
            </motion.div>

            {/* BUSINESS IMPACT */}
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
                duration: 0.6,
                delay: 0.2,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  03
                </span>

                <span className="h-px w-12 bg-gradient-to-r from-lime-300/60 to-transparent" />
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                <Sparkles className="h-5 w-5 text-lime-300" />
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                  Create Graphic Design With Purpose
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  From social media graphics to marketing and print design, each
                  creative asset is planned to communicate your message, support
                  campaign goals, and connect with your audience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM STATEMENT */}
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
              delay: 0.2,
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                Effective brand identity design combines a clear strategy with
                consistent visual execution. We bring both together to help your
                business communicate with clarity at every customer touchpoint.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Designed With Purpose
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Lime Glow */}
          <div className="absolute top-[-220px] left-[12%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[35%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[180px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.055] blur-[180px]" />

          {/* Design Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "7%", top: "18%", size: 4, delay: 0 },
            { left: "18%", top: "72%", size: 3, delay: 1.2 },
            { left: "83%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "47%", top: "12%", size: 3, delay: 1.5 },
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
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
                  Solutions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Branding Services
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  For Every Touchpoint.
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
              Explore branding and graphic design services for building your
              company identity, promoting products, and creating consistent
              visual communication across digital and print channels.
            </motion.p>
          </div>

          {/* DIVIDER */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
            }}
            className="mx-auto mt-16 h-px w-56 origin-center bg-gradient-to-r from-transparent via-lime-300/60 to-transparent"
          />

          {/* SOLUTIONS GRID */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* COMPANY BRANDING */}
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
                duration: 0.6,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.055] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative Circle */}
              <div className="absolute top-[-90px] right-[-90px] h-52 w-52 rounded-full border border-lime-300/[0.07] transition-transform duration-700 group-hover:scale-125" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    01 — Identity
                  </span>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Company Branding & Logo Design
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                  <Palette className="h-5 w-5 text-lime-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Build a professional brand identity with custom logo design, a
                considered color palette, typography, and supporting visual
                elements shaped around your business positioning.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Logo Design & Brand Identity",
                  "Brand Color Palette",
                  "Brand Typography",
                  "Brand Guidelines & Usage",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-lime-300/20 bg-lime-300/[0.06]">
                      <Check className="h-3 w-3 text-lime-300" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MARKETING CREATIVES */}
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
                duration: 0.6,
                delay: 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.055] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative Circle */}
              <div className="absolute top-[-90px] right-[-90px] h-52 w-52 rounded-full border border-cyan-300/[0.07] transition-transform duration-700 group-hover:scale-125" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    02 — Creative
                  </span>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Social Media & Marketing Design
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Get consistent graphic design for social media, digital ads,
                promotional campaigns, and marketing materials that present your
                message clearly and support your brand identity.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Social Media Post Design",
                  "Digital Ad Creatives",
                  "Campaign Graphic Design",
                  "Promotional Assets",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06]">
                      <Check className="h-3 w-3 text-cyan-300" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* PRINT & PACKAGING */}
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
                duration: 0.6,
                delay: 0.2,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative Circle */}
              <div className="absolute top-[-90px] right-[-90px] h-52 w-52 rounded-full border border-lime-300/[0.07] transition-transform duration-700 group-hover:scale-125" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    03 — Print
                  </span>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Print & Packaging Design
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                  <Layers3 className="h-5 w-5 text-lime-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Extend your visual identity to physical products with print
                design and packaging artwork for business stationery, brochures,
                flyers, and product presentation.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Business Card & Stationery Design",
                  "Brochure & Flyer Design",
                  "Product Packaging Design",
                  "Print-Ready Artwork",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-lime-300/20 bg-lime-300/[0.06]">
                      <Check className="h-3 w-3 text-lime-300" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DIGITAL DESIGN SYSTEMS */}
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
                duration: 0.6,
                delay: 0.3,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative Circle */}
              <div className="absolute top-[-90px] right-[-90px] h-52 w-52 rounded-full border border-cyan-300/[0.07] transition-transform duration-700 group-hover:scale-125" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                    04 — Digital
                  </span>

                  <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Digital Brand Design Systems
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                  <Layers3 className="h-5 w-5 text-cyan-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Build reusable digital brand assets and design systems that keep
                website visuals, social media templates, and marketing graphics
                aligned as your business and content needs grow.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Social Media Templates",
                  "Digital Branding Assets",
                  "Website & UI Visual Direction",
                  "Reusable Graphic Design Systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06]">
                      <Check className="h-3 w-3 text-cyan-300" />
                    </span>

                    {item}
                  </div>
                ))}
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
              delay: 0.2,
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                From logo design and brand guidelines to social media graphics
                and packaging artwork, every asset should strengthen recognition
                and keep your visual identity consistent.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Create / Connect / Grow
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
      </section>

      {/* OUR PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Lime Glow */}
          <div className="absolute top-[-220px] left-[8%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.07] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[35%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[180px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[5%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Design Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "18%", top: "76%", size: 3, delay: 1.2 },
            { left: "79%", top: "16%", size: 4, delay: 0.6 },
            { left: "91%", top: "58%", size: 3, delay: 1.8 },
            { left: "67%", top: "84%", size: 3, delay: 0.9 },
            { left: "46%", top: "12%", size: 3, delay: 1.5 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-lime-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* SECTION INTRO */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            {/* LEFT — INTRO */}
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
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                A Strategic Branding
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  & Design Process.
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
              Our branding process moves from discovery and brand positioning to
              creative direction, logo and identity design, feedback, and final
              asset delivery. Each stage keeps the visual direction aligned with
              your business and target audience.
            </motion.p>
          </div>

          {/* PROCESS SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* PROCESS GRID */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  label: "Discovery",
                  title: "Understand Your Brand",
                  description:
                    "We review your business, audience, market position, competitors, and goals to define what your brand needs to communicate.",
                },
                {
                  number: "02",
                  label: "Strategy",
                  title: "Define Your Brand Strategy",
                  description:
                    "We shape the creative direction, brand personality, messaging, and visual principles that guide the identity and design system.",
                },
                {
                  number: "03",
                  label: "Design",
                  title: "Design the Brand Identity",
                  description:
                    "We create the logo, color palette, typography, graphic elements, and supporting brand assets for digital and print use.",
                },
                {
                  number: "04",
                  label: "Refine & Deliver",
                  title: "Prepare and Deliver Brand Assets",
                  description:
                    "We refine approved designs and organize the agreed brand files and guidelines for practical use across your channels.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.045] sm:p-7"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.05] via-transparent to-cyan-300/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-lime-300">
                      {step.number}
                    </span>

                    <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                      {step.label}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="relative mt-5 h-px w-full bg-white/[0.07]" />

                  {/* Step Title */}
                  <h3 className="font-space-grotesk relative mt-7 text-xl leading-tight font-semibold text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.7)]" />

                    <span className="font-mono text-[9px] tracking-[0.18em] text-slate-600 uppercase">
                      Brand Identity Design
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PROCESS FLOW */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mt-10 hidden origin-left lg:block"
            >
              <div className="flex items-center">
                <div className="h-px flex-1 bg-gradient-to-r from-lime-300/50 via-lime-300/20 to-cyan-300/20" />

                <div className="mx-3 h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                <div className="h-px flex-1 bg-gradient-to-r from-lime-300/20 via-cyan-300/20 to-cyan-300/40" />

                <div className="mx-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

                <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/20 via-lime-300/20 to-lime-300/40" />

                <div className="mx-3 h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                <div className="h-px flex-1 bg-gradient-to-r from-lime-300/20 via-cyan-300/20 to-transparent" />
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
                Every stage of our branding and graphic design process is
                focused on clear communication, consistent visuals, and assets
                that are ready to use across your business.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Designed With Purpose
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
      </section>

      {/* TECHNOLOGIES */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Lime Glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.07] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[35%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[180px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Technology Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "7%", top: "18%", size: 4, delay: 0 },
            { left: "17%", top: "72%", size: 3, delay: 1.2 },
            { left: "82%", top: "17%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "44%", top: "12%", size: 3, delay: 1.5 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-lime-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Technologies
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[45px]">
                Design Tools for
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Consistent Brand Identity.
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
              We use Figma and established creative workflows to plan brand
              identity systems, refine graphic design, organize visual assets,
              and maintain consistency across digital and print deliverables.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* DESIGN & BRANDING */}
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
                    01 — Design
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Brand Identity & Graphic Design Tools
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Create / Refine
                </span>
              </div>

              {/* TECHNOLOGY GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Figma",
                    icon: SiFigma,
                  },
                  {
                    name: "Brand Strategy",
                    icon: Lightbulb,
                  },
                  {
                    name: "Visual Identity",
                    icon: Palette,
                  },
                  {
                    name: "Typography",
                    icon: Type,
                  },
                  {
                    name: "Illustration",
                    icon: PenTool,
                  },
                  {
                    name: "Creative Direction",
                    icon: Sparkles,
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
                      className="group relative flex min-h-[120px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-lime-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Logo */}
                      <Icon className="relative h-8 w-8 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />

                      {/* Name */}
                      <span className="relative mt-4 text-center text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* BRAND ASSETS */}
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
                    02 — Brand Assets
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Brand Assets & Design Deliverables
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Define / Express
                </span>
              </div>

              {/* ASSET GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Logo Systems",
                    icon: Layers,
                  },
                  {
                    name: "Color Systems",
                    icon: Palette,
                  },
                  {
                    name: "Brand Guidelines",
                    icon: BookOpen,
                  },
                  {
                    name: "Social Creatives",
                    icon: Share2,
                  },
                  {
                    name: "Print Design",
                    icon: Printer,
                  },
                  {
                    name: "Marketing Assets",
                    icon: Megaphone,
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
                      className="group relative flex min-h-[120px] items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Icon */}
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

            {/* WORKFLOW & COLLABORATION */}
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
                    03 — Workflow
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Design Collaboration & File Delivery
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Collaborate / Deliver
                </span>
              </div>

              {/* WORKFLOW GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    name: "Client Collaboration",
                    icon: UsersRound,
                  },
                  {
                    name: "Feedback",
                    icon: MessageCircle,
                  },
                  {
                    name: "Version Control",
                    icon: GitBranch,
                  },
                  {
                    name: "Asset Delivery",
                    icon: FolderOpen,
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
                      className="group relative flex min-h-[100px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-300/[0.035] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Icon */}
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
                Our branding and graphic design workflow connects strategy,
                creative tools, and organized file delivery to keep your visual
                identity recognizable and consistent as your business grows.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built With Intention
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
      </section>

      {/* WHY DIGIGROWTHERZ */}
      <section
        id="why-digigrowtherz"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Cyan Glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[35%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-400/[0.05] blur-[180px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Design Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "7%", top: "18%", size: 4, delay: 0 },
            { left: "17%", top: "72%", size: 3, delay: 1.2 },
            { left: "82%", top: "17%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "44%", top: "12%", size: 3, delay: 1.5 },
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
        <div className="relative z-10 mx-auto px-4">
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
                  Why DigiGrowtherz
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Branding & Design
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
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
              DigiGrowtherz approaches branding as a business foundation, not
              just a logo or a collection of graphics. We connect brand
              strategy, logo design, and graphic design into a visual identity
              that helps your business communicate consistently across every
              touchpoint.
            </motion.p>
          </div>

          {/* WHY CARDS */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Brand Strategy First",
                description:
                  "We understand your audience, market position, and business goals before shaping your brand identity and creative direction.",
                icon: Lightbulb,
                accent: "lime",
              },
              {
                number: "02",
                title: "Distinctive Brand Identity",
                description:
                  "We develop logo, color, and typography systems that give your business a recognizable visual presence in its market.",
                icon: Sparkles,
                accent: "cyan",
              },
              {
                number: "03",
                title: "Consistent Graphic Design",
                description:
                  "Your logo, brand guidelines, social media graphics, and marketing materials work together as one visual system.",
                icon: Layers,
                accent: "lime",
              },
              {
                number: "04",
                title: "Designed to Scale",
                description:
                  "We create flexible brand assets that can support new campaigns, products, platforms, and print applications over time.",
                icon: TrendingUp,
                accent: "cyan",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              const isLime = item.accent === "lime";

              return (
                <motion.div
                  key={item.number}
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 sm:p-7 ${
                    isLime
                      ? "hover:border-lime-300/20"
                      : "hover:border-cyan-300/20"
                  }`}
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      isLime
                        ? "bg-gradient-to-br from-lime-300/[0.05] via-transparent to-cyan-300/[0.02]"
                        : "bg-gradient-to-br from-cyan-300/[0.05] via-transparent to-lime-300/[0.02]"
                    }`}
                  />

                  {/* Top Row */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                        isLime
                          ? "border-lime-300/10 bg-lime-300/[0.06]"
                          : "border-cyan-300/10 bg-cyan-300/[0.06]"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isLime ? "text-lime-300" : "text-cyan-300"
                        }`}
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-space-grotesk relative mt-7 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="relative mt-7 flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isLime ? "bg-lime-300" : "bg-cyan-300"
                      } ${
                        isLime
                          ? "shadow-[0_0_10px_rgba(163,230,53,0.7)]"
                          : "shadow-[0_0_10px_rgba(103,232,249,0.7)]"
                      }`}
                    />

                    <span className="font-mono text-[9px] tracking-[0.18em] text-slate-600 uppercase">
                      DigiGrowtherz
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BRANDING PRINCIPLES */}
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
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">
              {/* LEFT */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  Our Approach
                </p>

                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Brand Identity With
                  <span className="text-lime-300"> Purpose.</span>
                </h3>
              </div>

              {/* RIGHT */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Recognizable",
                    text: "A visual identity people can recognize.",
                  },
                  {
                    title: "Consistent",
                    text: "One clear system across every channel.",
                  },
                  {
                    title: "Scalable",
                    text: "Flexible assets for future business needs.",
                  },
                ].map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5"
                  >
                    <p className="font-space-grotesk text-base font-semibold text-white">
                      {principle.title}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {principle.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

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
                Your visual identity helps shape how customers recognize your
                business. We bring strategy and graphic design together to make
                that identity clear, consistent, and memorable.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built To Be Remembered
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#0A1119] to-[#070B12]" />

          {/* Cyan Glow */}
          <div className="absolute top-[8%] -left-[180px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[170px]" />

          {/* Lime Glow */}
          <div className="absolute right-[-180px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "18%", top: "74%", size: 3, delay: 1.1 },
            { left: "84%", top: "18%", size: 4, delay: 0.6 },
            { left: "91%", top: "66%", size: 3, delay: 1.8 },
            { left: "68%", top: "84%", size: 3, delay: 0.9 },
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
        <div className="relative z-10 mx-auto px-4">
          {/* HEADER */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            {/* LEFT */}
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Branding & Design
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  FAQs.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT */}
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
              Find answers about our branding and graphic design services,
              including logo design, brand guidelines, marketing creatives,
              packaging design, project timelines, and deliverables.
            </motion.p>
          </div>

          {/* FAQ SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                {
                  number: "01",
                  question:
                    "What do your branding and design services include?",
                  answer:
                    "Our branding and design services can include brand strategy, logo design, visual identity, typography, color palettes, brand guidelines, social media graphics, marketing creatives, and print assets, depending on your project scope.",
                },
                {
                  number: "02",
                  question:
                    "Do you offer logo design and complete brand identity design?",
                  answer:
                    "Yes. We can develop a new brand identity from the ground up, including creative direction, logo design, colors, typography, and supporting visual elements tailored to your business and audience.",
                },
                {
                  number: "03",
                  question: "Can you redesign or refresh an existing brand?",
                  answer:
                    "Yes. We can update an existing logo and visual identity, retain recognizable brand elements where appropriate, and create a more consistent design system for your current business needs.",
                },
                {
                  number: "04",
                  question:
                    "How long does a brand identity design project take?",
                  answer:
                    "Project timelines depend on the scope, number of design deliverables, feedback rounds, and approval process. A focused logo project differs from a complete brand identity and guidelines package.",
                },
                {
                  number: "05",
                  question: "Will you provide brand guidelines?",
                  answer:
                    "Brand guidelines can be included in the agreed scope. They document logo usage, colors, typography, spacing, and other visual rules to help keep your brand consistent across platforms.",
                },
                {
                  number: "06",
                  question:
                    "Do you provide branding for startups and new businesses?",
                  answer:
                    "Yes. We help startups and new businesses establish a professional visual identity, including logo design and core brand assets for their website, social media, marketing, and future communications.",
                },
                {
                  number: "07",
                  question:
                    "Can you create branding and website visuals together?",
                  answer:
                    "Yes. We can align your brand identity with your website visuals so the logo, colors, typography, imagery, and interface direction create a cohesive digital experience.",
                },
                {
                  number: "08",
                  question:
                    "Do you design social media graphics, packaging, and print materials?",
                  answer:
                    "Yes. Our design solutions can include social media post graphics, advertising creatives, brochures, flyers, business stationery, and product packaging artwork, based on your requirements.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-7"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.035] via-transparent to-lime-300/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Top Row */}
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-cyan-300">
                          {faq.number}
                        </span>
                      </div>

                      {/* Question */}
                      <h3 className="pt-1 text-base leading-6 font-semibold text-white sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Answer */}
                    <p className="mt-5 pl-[52px] text-sm leading-7 text-slate-400 sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
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
                A consistent brand identity connects logo design, graphic
                design, and brand guidelines into a visual system customers can
                recognize across your business.
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09151A] to-[#070B12]" />

          {/* Main Cyan Glow */}
          <div className="absolute top-[-260px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[180px]" />

          {/* Lime Glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.07] blur-[180px]" />

          {/* Left Cyan Glow */}
          <div className="absolute bottom-[10%] -left-[220px] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-[160px]" />

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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "10%", top: "24%", size: 4, delay: 0 },
            { left: "19%", top: "72%", size: 3, delay: 1.1 },
            { left: "82%", top: "20%", size: 4, delay: 0.6 },
            { left: "90%", top: "68%", size: 3, delay: 1.7 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
          ].map((particle, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -12, 0],
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
                boxShadow: "0 0 18px rgba(163,230,53,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* CARD GLOW */}
            <div className="absolute top-[-180px] left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

            <div className="absolute right-[-100px] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-lime-400/[0.06] blur-[120px]" />

            {/* Decorative Grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
                backgroundSize: "56px 56px",
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10 text-center">
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
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                    Start Your Branding Project
                  </span>
                </div>
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
                className="font-space-grotesk mx-auto mt-7 max-w-4xl text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Ready for a Stronger Brand
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  & Better Design?
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
                className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
              >
                Tell us about your business and design goals. Let's build a
                distinctive brand identity with professional logo design and
                graphic design that stays consistent across every touchpoint.
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
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                {/* PRIMARY */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-[12px] font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] sm:w-auto md:px-8 md:text-sm"
                >
                  Discuss Your Branding Project
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* SECONDARY */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:w-auto"
                >
                  Talk to Our Team
                </motion.a>
              </motion.div>

              {/* TRUST POINTS */}
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
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Strategy-Led
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Distinctive Design
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Consistent Branding
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Memorable Identity
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

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
