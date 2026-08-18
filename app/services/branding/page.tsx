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
                  Branding & Design
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
                className="font-space-grotesk max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl xl:text-7xl"
              >
                Build a Brand
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  People Remember.
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
                className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
              >
                We create distinctive brand identities, compelling visuals, and
                high-impact creative assets that help businesses stand out,
                communicate clearly, and build lasting recognition.
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
                  Start Your Brand
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
                  Explore Our Services
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
                  <h4 className="text-2xl font-bold text-white">Identity</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Built to Stand Out
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Visuals</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Designed to Connect
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Impact</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Made to Be Remembered
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                More Than a
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Visual Identity.
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
              We create distinctive brands and purposeful visual experiences
              that help businesses communicate clearly, build recognition, and
              stand out in competitive markets. From company branding to
              marketing creatives, every design is created with consistency and
              impact in mind.
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
                  Build a Strong Identity
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  We establish a visual foundation that gives your business a
                  recognizable and consistent identity across every touchpoint.
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
                  Stay Consistent Everywhere
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  From digital platforms to printed materials, we keep your
                  brand language unified so customers experience the same
                  identity wherever they interact with you.
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
                  Design With Purpose
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Every creative decision is made to support your business
                  goals, strengthen your message, and create a memorable
                  experience for your audience.
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
                Great branding creates recognition. Great design turns that
                recognition into trust. We bring both together to create visual
                experiences built for your business.
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Design That
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Moves Your Brand.
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
              From defining your visual identity to creating everyday marketing
              assets, we provide branding and design solutions that keep your
              business recognizable, consistent, and visually compelling.
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
                    Company Branding
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                  <Palette className="h-5 w-5 text-lime-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Build a memorable brand identity with a clear visual language,
                including logos, colors, typography, and supporting brand
                elements designed around your business.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Logo & Visual Identity",
                  "Brand Color Systems",
                  "Typography Systems",
                  "Brand Guidelines",
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
                    Marketing Creatives
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Create high-impact visuals for campaigns, social media,
                advertising, and digital channels that communicate your message
                and capture attention.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Social Media Graphics",
                  "Advertising Creatives",
                  "Campaign Visuals",
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
                    Print & Packaging
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.07]">
                  <Layers3 className="h-5 w-5 text-lime-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Extend your brand beyond the screen with polished print
                materials and packaging designs that maintain the same
                professional identity.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Business Stationery",
                  "Brochures & Flyers",
                  "Product Packaging",
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
                    Digital Design Systems
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                  <Layers3 className="h-5 w-5 text-cyan-300" />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Create reusable visual systems that make your digital presence
                easier to scale while keeping every interface and creative
                aligned with your brand.
              </p>

              {/* Feature List */}
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Social Templates",
                  "Digital Brand Assets",
                  "UI Visual Direction",
                  "Reusable Design Systems",
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
                From the first sketch to the final creative, every design
                decision should strengthen your brand and make your business
                easier to recognize.
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                From Idea
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  To Brand Identity.
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
              We turn ideas into distinctive visual identities through a
              structured creative process — combining strategy, design,
              refinement, and real-world application to create brands built for
              recognition.
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
                  title: "Understand the Brand",
                  description:
                    "We learn about your business, audience, positioning, goals, and the personality your brand needs to communicate.",
                },
                {
                  number: "02",
                  label: "Strategy",
                  title: "Define the Direction",
                  description:
                    "We establish the visual direction, creative concepts, messaging style, and design principles that shape the identity.",
                },
                {
                  number: "03",
                  label: "Design",
                  title: "Build the Identity",
                  description:
                    "We develop the core visual system including logos, typography, colors, graphics, and creative assets.",
                },
                {
                  number: "04",
                  label: "Refine & Deliver",
                  title: "Make It Ready",
                  description:
                    "We refine the final direction and prepare polished, practical brand assets ready for digital and print use.",
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
                      Brand Development
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
                Every stage is designed to keep the creative direction focused,
                purposeful, and aligned with the brand you want to build.
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Tools That Bring
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Ideas to Life.
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
              We use modern design, creative, and collaboration tools to
              transform brand ideas into polished visual systems that remain
              consistent, flexible, and ready for real-world use.
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
                    Creative Design Tools
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
                    Identity & Creative Systems
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
                    Collaboration & Delivery
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
                Great branding is more than aesthetics. We combine the right
                tools and creative systems to make your identity consistent,
                recognizable, and ready to grow with your business.
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Your Brand
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Deserves More.
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
              We don't treat branding as simply making things look good. We
              build thoughtful visual identities that communicate who you are,
              create recognition, and give your business a consistent presence
              everywhere your audience sees you.
            </motion.p>
          </div>

          {/* WHY CARDS */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Strategy First",
                description:
                  "We understand your business, audience, positioning, and goals before designing the visual identity.",
                icon: Lightbulb,
                accent: "lime",
              },
              {
                number: "02",
                title: "Distinctive Identity",
                description:
                  "We create visual systems designed to make your brand recognizable instead of blending into the competition.",
                icon: Sparkles,
                accent: "cyan",
              },
              {
                number: "03",
                title: "Built for Consistency",
                description:
                  "Your logo, colors, typography, and creative assets work together as one cohesive brand system.",
                icon: Layers,
                accent: "lime",
              },
              {
                number: "04",
                title: "Ready to Grow",
                description:
                  "We create flexible brand foundations that can evolve with your business across digital and physical touchpoints.",
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
                  Design With
                  <span className="text-lime-300"> Meaning.</span>
                </h3>
              </div>

              {/* RIGHT */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Recognizable",
                    text: "Built to stand apart.",
                  },
                  {
                    title: "Consistent",
                    text: "Designed to work everywhere.",
                  },
                  {
                    title: "Scalable",
                    text: "Ready for what's next.",
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
                Your brand is often the first impression people have of your
                business. We make sure that impression is intentional,
                memorable, and built to last.
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
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Questions About
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Branding?
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
              Everything you need to know about our branding process,
              deliverables, timelines, and how we build identities that make
              businesses recognizable and memorable.
            </motion.p>
          </div>

          {/* FAQ SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                {
                  number: "01",
                  question: "What does your branding service include?",
                  answer:
                    "Our branding service can include brand strategy, visual identity, logo design, typography, color systems, brand guidelines, and supporting visual assets — depending on the needs of your business.",
                },
                {
                  number: "02",
                  question: "Can you create a completely new brand identity?",
                  answer:
                    "Yes. We can build a brand identity from the ground up, starting with positioning and visual direction and developing a consistent identity that reflects your business and audience.",
                },
                {
                  number: "03",
                  question: "Can you also refresh an existing brand?",
                  answer:
                    "Absolutely. We can refine or modernize an existing identity while preserving the elements that already have value and introducing a more consistent and contemporary visual direction.",
                },
                {
                  number: "04",
                  question: "How long does a branding project take?",
                  answer:
                    "The timeline depends on the scope and number of deliverables. A focused identity project can move quickly, while a complete brand system requires more strategy, exploration, revisions, and documentation.",
                },
                {
                  number: "05",
                  question: "Will I receive brand guidelines?",
                  answer:
                    "Brand guidelines can be included to document how your identity should be used across colors, typography, logos, spacing, imagery, and other important brand elements.",
                },
                {
                  number: "06",
                  question: "Can you create branding for a new business?",
                  answer:
                    "Yes. We work with new businesses to establish a clear and professional identity from the beginning, giving them a strong foundation for websites, marketing, social media, and future growth.",
                },
                {
                  number: "07",
                  question: "Can branding and website design be done together?",
                  answer:
                    "Yes. Combining branding with website design allows us to carry the same visual language across your digital presence, creating a more cohesive and recognizable customer experience.",
                },
                {
                  number: "08",
                  question:
                    "How do you make sure the branding fits our business?",
                  answer:
                    "We start by understanding your business, audience, positioning, competitors, and goals. These insights guide the creative direction so the final identity is purposeful rather than simply decorative.",
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
                A strong brand gives your business more than a logo — it creates
                a clear identity people can recognize, remember, and trust.
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
                    Start Your Brand
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
                className="font-space-grotesk mx-auto mt-7 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Ready to Build a Brand
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  People Remember?
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
                Let's create a distinctive brand identity that gives your
                business clarity, consistency, and a stronger presence across
                every touchpoint.
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
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] sm:w-auto"
                >
                  Start Your Project
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
                    Strategic
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Distinctive
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Consistent
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
                    Memorable
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
