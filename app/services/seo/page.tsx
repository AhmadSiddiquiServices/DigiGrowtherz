"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  BarChart3,
  Search,
  TrendingUp,
} from "lucide-react";
import {
  SiGithub,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiGoogleads,
  SiGoogle,
  SiHotjar,
  SiMeta,
  SiNextdotjs,
  SiReact,
  SiSemrush,
  SiShopify,
  SiVercel,
  SiWordpress,
  SiGooglesearchconsole,
} from "react-icons/si";

export default function SeoServicePage() {
  return (
    <>
      {/* SEO — HERO SECTION */}
      <section
        id="seo-hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#08131D] to-[#070B12]" />

          {/* Main Blue Glow */}
          <div className="absolute top-[-180px] left-[18%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.08] blur-[190px]" />

          {/* Cyan Glow */}
          <div className="absolute top-[35%] right-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[170px]" />

          {/* Lime Accent Glow */}
          <div className="absolute bottom-[-220px] left-[8%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[180px]" />

          {/* SEO Grid */}
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
            {
              left: "8%",
              top: "20%",
              size: 4,
              delay: 0,
            },
            {
              left: "18%",
              top: "72%",
              size: 3,
              delay: 1.1,
            },
            {
              left: "78%",
              top: "16%",
              size: 4,
              delay: 0.5,
            },
            {
              left: "91%",
              top: "58%",
              size: 3,
              delay: 1.7,
            },
            {
              left: "68%",
              top: "82%",
              size: 3,
              delay: 0.8,
            },
            {
              left: "46%",
              top: "10%",
              size: 3,
              delay: 1.4,
            },
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
                boxShadow: "0 0 16px rgba(103,232,249,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-blue-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT — HERO CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-5 py-2 backdrop-blur-xl"
              >
                <Search className="h-4 w-4 text-blue-300" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-blue-300 uppercase sm:text-[11px]">
                  Search Engine Optimization
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
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
                  delay: 0.1,
                }}
                className="font-space-grotesk max-w-3xl text-5xl leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-7xl"
              >
                Get Found.
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Get Chosen.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
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
                  delay: 0.2,
                }}
                className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
              >
                We build search strategies that improve your visibility, attract
                qualified traffic, and help your business compete for the
                searches that matter most.
              </motion.p>

              {/* CTA */}
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
                  delay: 0.3,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                {/* Primary */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-lime-300 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.16)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.3)]"
                >
                  Improve Your Rankings
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* Secondary */}
                <motion.a
                  href="#overview"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  Explore SEO Services
                </motion.a>
              </motion.div>

              {/* HERO HIGHLIGHTS */}
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
                className="mt-12 flex flex-wrap gap-8 md:gap-14"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-lime-300" />

                    <h4 className="text-xl font-bold text-white">Organic</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Sustainable Growth
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-cyan-300" />

                    <h4 className="text-xl font-bold text-white">Visible</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Better Search Presence
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-300" />

                    <h4 className="text-xl font-bold text-white">Data</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Measurable Results
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — SEO VISUAL */}
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.97,
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
              className="relative flex min-h-[560px] items-center justify-center"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[480px] w-[480px] rounded-full bg-blue-400/[0.07] blur-[150px]" />
              </div>

              {/* FLOATING KEYWORD CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 -left-2 z-20 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10">
                    <Search className="h-5 w-5 text-blue-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Search Visibility
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Keywords Optimized
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* MAIN SEO DASHBOARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[560px] rounded-[34px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              >
                {/* Dashboard */}
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0A121A]">
                  {/* Header */}
                  <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <div className="ml-4 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <Search className="h-3 w-3 text-cyan-300" />

                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        search-performance.com
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-[#0D1822] via-[#0A141C] to-[#081017] p-6 sm:p-8">
                    {/* Dashboard Grid */}
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

                    {/* Dashboard Header */}
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="h-2.5 w-28 rounded-full bg-white/20" />

                        <div className="mt-3 h-2 w-20 rounded-full bg-white/[0.08]" />
                      </div>

                      <div className="flex h-8 items-center gap-2 rounded-lg border border-lime-300/10 bg-lime-300/[0.05] px-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#A3E635]" />

                        <span className="font-mono text-[8px] tracking-[0.15em] text-lime-300 uppercase">
                          Growing
                        </span>
                      </div>
                    </div>

                    {/* Ranking Overview */}
                    <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                          Visibility
                        </p>

                        <div className="mt-3 flex items-end gap-2">
                          <span className="text-2xl font-bold text-white">
                            84%
                          </span>

                          <span className="mb-1 text-[10px] text-lime-300">
                            +18%
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                          Keywords
                        </p>

                        <div className="mt-3 flex items-end gap-2">
                          <span className="text-2xl font-bold text-white">
                            126
                          </span>

                          <span className="mb-1 text-[10px] text-cyan-300">
                            Ranking
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-600 uppercase">
                          Traffic
                        </p>

                        <div className="mt-3 flex items-end gap-2">
                          <span className="text-2xl font-bold text-white">
                            +42%
                          </span>

                          <span className="mb-1 text-[10px] text-lime-300">
                            Organic
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SEARCH GRAPH */}
                    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.18em] text-slate-600 uppercase">
                            Organic Performance
                          </p>

                          <p className="mt-1 text-sm font-medium text-white">
                            Search Growth
                          </p>
                        </div>

                        <TrendingUp className="h-4 w-4 text-lime-300" />
                      </div>

                      {/* Graph */}
                      <div className="relative mt-5 h-28">
                        {/* Horizontal Lines */}
                        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

                        <div className="absolute inset-x-0 top-1/3 h-px bg-white/[0.05]" />

                        <div className="absolute inset-x-0 top-2/3 h-px bg-white/[0.05]" />

                        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]" />

                        {/* Graph Line */}
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 500 120"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="seoGraphGradient"
                              x1="0"
                              x2="1"
                              y1="0"
                              y2="0"
                            >
                              <stop offset="0%" stopColor="#60A5FA" />
                              <stop offset="55%" stopColor="#22D3EE" />
                              <stop offset="100%" stopColor="#A3E635" />
                            </linearGradient>

                            <linearGradient
                              id="seoAreaGradient"
                              x1="0"
                              x2="0"
                              y1="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#22D3EE"
                                stopOpacity="0.18"
                              />

                              <stop
                                offset="100%"
                                stopColor="#22D3EE"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>

                          {/* Area */}
                          <path
                            d="M0 100 C45 94 60 90 90 82 C120 74 130 88 160 72 C190 56 205 66 230 58 C260 48 270 60 300 45 C330 30 350 42 375 34 C405 25 420 30 445 18 C470 8 485 12 500 4 L500 120 L0 120 Z"
                            fill="url(#seoAreaGradient)"
                          />

                          {/* Line */}
                          <path
                            d="M0 100 C45 94 60 90 90 82 C120 74 130 88 160 72 C190 56 205 66 230 58 C260 48 270 60 300 45 C330 30 350 42 375 34 C405 25 420 30 445 18 C470 8 485 12 500 4"
                            fill="none"
                            stroke="url(#seoGraphGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Graph Nodes */}
                        <div className="absolute top-[68%] left-[18%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

                        <div className="absolute top-[48%] left-[45%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                        <motion.div
                          animate={{
                            scale: [1, 1.35, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute top-[8%] right-[4%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.9)]"
                        />
                      </div>
                    </div>

                    {/* Bottom Keywords */}
                    <div className="relative mt-5 grid grid-cols-3 gap-3">
                      <div className="h-10 rounded-xl border border-blue-300/10 bg-blue-300/[0.035]" />

                      <div className="h-10 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.035]" />

                      <div className="h-10 rounded-xl border border-lime-300/10 bg-lime-300/[0.035]" />
                    </div>
                  </div>
                </div>

                {/* FLOATING PERFORMANCE BADGE */}
                <motion.div
                  animate={{
                    y: [0, 9, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -right-3 -bottom-5 z-20 rounded-2xl border border-lime-300/15 bg-white/[0.07] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:-right-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                      <TrendingUp className="h-5 w-5 text-lime-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Organic Growth
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        More Visibility
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING STATUS NODE */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-8 right-12 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22D3EE]"
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
                  className="absolute bottom-24 left-12 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_#60A5FA]"
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
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top cyan glow */}
          <div className="absolute top-[-220px] left-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Center lime glow */}
          <div className="absolute top-[30%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-lime-400/[0.055] blur-[190px]" />

          {/* Bottom cyan glow */}
          <div className="absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.05] blur-[180px]" />

          {/* SEO grid */}
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
            { left: "7%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "76%", size: 3, delay: 1.1 },
            { left: "83%", top: "18%", size: 4, delay: 0.5 },
            { left: "91%", top: "65%", size: 3, delay: 1.7 },
            { left: "69%", top: "82%", size: 3, delay: 0.8 },
            { left: "44%", top: "12%", size: 3, delay: 1.4 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* SECTION INTRO */}
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  SEO Services
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Visibility That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Drives Growth.
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
              We build strategic SEO systems that help your business get
              discovered by the right audience, improve search visibility, and
              turn organic traffic into meaningful business opportunities.
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
              duration: 1,
              delay: 0.2,
            }}
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-cyan-300/30 via-lime-300/20 to-transparent"
          />

          {/* OVERVIEW CONTENT */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* CARD 01 */}
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
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  01 — Discover
                </span>

                <span className="font-space-grotesk text-3xl font-bold text-white/[0.06]">
                  01
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space-grotesk relative mt-8 text-2xl font-semibold text-white">
                Understand Your Search Landscape
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                We analyze your website, industry, competitors, keywords, and
                search opportunities to understand where your business currently
                stands and where it can grow.
              </p>

              {/* Bottom Line */}
              <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-300 group-hover:w-24" />
            </motion.div>

            {/* CARD 02 */}
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
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  02 — Optimize
                </span>

                <span className="font-space-grotesk text-3xl font-bold text-white/[0.06]">
                  02
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space-grotesk relative mt-8 text-2xl font-semibold text-white">
                Build a Stronger Search Foundation
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                From technical improvements to on-page optimization, we
                strengthen the elements that help search engines understand,
                crawl, and rank your website.
              </p>

              {/* Bottom Line */}
              <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-lime-300 to-transparent transition-all duration-300 group-hover:w-24" />
            </motion.div>

            {/* CARD 03 */}
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
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  03 — Grow
                </span>

                <span className="font-space-grotesk text-3xl font-bold text-white/[0.06]">
                  03
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space-grotesk relative mt-8 text-2xl font-semibold text-white">
                Turn Rankings Into Opportunities
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                We focus on sustainable visibility and qualified organic traffic
                that supports your broader business goals — not rankings for the
                sake of rankings.
              </p>

              {/* Bottom Line */}
              <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-300 group-hover:w-24" />
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
              delay: 0.15,
            }}
            className="mt-16 border-t border-white/[0.08] pt-6 lg:mt-20"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                SEO is a long-term growth channel. Our approach combines
                technical foundations, relevant content, strategic optimization,
                and ongoing improvements to create visibility that compounds
                over time.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built For Visibility
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top lime glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Center cyan glow */}
          <div className="absolute top-[35%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[190px]" />

          {/* Bottom lime glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.05] blur-[180px]" />

          {/* SEO grid */}
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
            { left: "17%", top: "70%", size: 3, delay: 1.2 },
            { left: "82%", top: "18%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "69%", top: "84%", size: 3, delay: 0.9 },
            { left: "46%", top: "11%", size: 3, delay: 1.4 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

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
                  SEO Solutions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Search Strategies
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Built Around Growth.
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
              Our SEO solutions cover the technical, content, local, and
              strategic elements required to build stronger search visibility
              and attract qualified users to your business.
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
              duration: 1,
              delay: 0.2,
            }}
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-lime-300/30 via-cyan-300/20 to-transparent"
          />

          {/* SOLUTIONS GRID */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* TECHNICAL SEO */}
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
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  01 — Technical
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  01
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                Technical SEO
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Improve the technical foundation of your website so search
                engines can efficiently crawl, understand, and index your pages.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {["Site Architecture", "Crawlability", "Page Performance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan-300" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* ON-PAGE SEO */}
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
                delay: 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  02 — On-Page
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  02
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                On-Page Optimization
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Optimize the content and structure of your pages around relevant
                search intent, helping both users and search engines understand
                your value.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {["Keyword Strategy", "Content Optimization", "Metadata"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-lime-300" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* LOCAL SEO */}
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
                delay: 0.16,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  03 — Local
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  03
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                Local SEO Strategy
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Strengthen your local search presence so nearby customers can
                find your business when they are actively looking for your
                services.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Local Visibility",
                  "Business Profiles",
                  "Location Signals",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CONTENT SEO */}
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
                delay: 0.24,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  04 — Content
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  04
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                SEO Content Strategy
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Create useful, search-focused content that answers real
                questions, matches user intent, and gives your business more
                opportunities to be discovered.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Search Intent",
                  "Content Planning",
                  "Topic Opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* COMPETITOR SEO */}
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
                delay: 0.32,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  05 — Research
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  05
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                Competitor Analysis
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Identify what competing businesses are doing successfully in
                search and uncover opportunities to build a stronger position.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Competitor Research",
                  "Keyword Gaps",
                  "Market Opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SEO ANALYTICS */}
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
                delay: 0.4,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.04] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime-300/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  06 — Measure
                </span>

                <span className="font-space-grotesk text-4xl font-bold text-white/[0.05]">
                  06
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.06]">
                <span className="h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.7)]" />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold text-white">
                SEO Analytics & Reporting
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Track meaningful search performance and use data to identify
                what is working, what needs improvement, and where the next
                opportunity lies.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Performance Tracking",
                  "Search Insights",
                  "Ongoing Improvements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-300" />
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
              delay: 0.15,
            }}
            className="mt-16 border-t border-white/[0.08] pt-6 lg:mt-20"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                No single SEO tactic works in isolation. We combine technical
                optimization, content, local strategy, research, and measurement
                to create a complete search growth system.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Search With Purpose
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
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

          {/* Top Blue Glow */}
          <div className="absolute top-[-220px] left-[12%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.07] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[35%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[190px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[5%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.05] blur-[180px]" />

          {/* Development Grid */}
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
            { left: "8%", top: "18%", size: 4, delay: 0 },
            { left: "20%", top: "76%", size: 3, delay: 1.1 },
            { left: "78%", top: "20%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.7 },
            { left: "67%", top: "84%", size: 3, delay: 0.9 },
            { left: "47%", top: "12%", size: 3, delay: 1.4 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* SECTION INTRO */}
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
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-blue-300 uppercase sm:text-[11px]">
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                A Smarter Way
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  To Grow Your Rankings.
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
              Our SEO process combines technical analysis, strategic
              optimization, quality content, and continuous measurement to build
              sustainable search visibility and long-term organic growth.
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
              duration: 1,
              delay: 0.25,
            }}
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-blue-300/50 via-cyan-300/30 to-transparent"
          />

          {/* PROCESS STEPS */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "SEO Audit",
                description:
                  "We analyze your website, technical structure, content, keywords, backlinks, and current search performance to identify opportunities and weaknesses.",
                accent: "blue",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We build a focused SEO roadmap around your business goals, target audience, search intent, competitive landscape, and highest-value opportunities.",
                accent: "cyan",
              },
              {
                number: "03",
                title: "Optimization",
                description:
                  "We improve technical SEO, on-page elements, content structure, internal linking, local signals, and other ranking factors across your website.",
                accent: "lime",
              },
              {
                number: "04",
                title: "Measure & Grow",
                description:
                  "We continuously monitor rankings, traffic, conversions, and search visibility to refine the strategy and create sustainable organic growth.",
                accent: "blue",
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
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-7"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.035] via-transparent to-blue-400/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Step Number */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-slate-600">
                    STEP
                  </span>

                  <span className="font-space-grotesk text-4xl font-bold text-white/[0.07] transition-colors duration-300 group-hover:text-cyan-300/[0.15]">
                    {step.number}
                  </span>
                </div>

                {/* Icon / Indicator */}
                <div className="relative mt-8 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.05]">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk relative mt-7 text-xl font-semibold text-white sm:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-7 text-slate-500 sm:text-[15px]">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-cyan-300/50 to-transparent transition-all duration-300 group-hover:w-24" />
              </motion.div>
            ))}
          </div>

          {/* PROCESS FLOW */}
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
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                SEO is not a one-time task. We continuously refine every part of
                the strategy based on data, search behavior, and your business
                goals.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Analyze / Optimize / Grow
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
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

          {/* Top Blue Glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.07] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[35%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[190px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Development Grid */}
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-blue-400/[0.08] blur-[130px]" />

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
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-blue-300 uppercase sm:text-[11px]">
                  SEO Technology Stack
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                The Tools Behind
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Better Search Results.
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
              We use proven SEO platforms, analytics systems, research tools,
              and modern web technologies to uncover opportunities, measure
              performance, and make smarter optimization decisions.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* SEO & RESEARCH */}
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
                  <p className="font-mono text-[10px] tracking-[0.25em] text-blue-300 uppercase">
                    01 — SEO & Research
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Search Intelligence & Research
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Research / Discover
                </span>
              </div>

              {/* TECHNOLOGY GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Semrush",
                    icon: SiSemrush,
                  },
                  {
                    name: "Ahrefs",
                    icon: Anchor,
                  },
                  {
                    name: "Google",
                    icon: SiGoogle,
                  },
                  {
                    name: "Google Ads",
                    icon: SiGoogleads,
                  },
                  {
                    name: "Google Analytics",
                    icon: SiGoogleanalytics,
                  },
                  {
                    name: "Search Console",
                    icon: SiGooglesearchconsole,
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
                      className="group relative flex min-h-[120px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 transition-all duration-300 hover:border-blue-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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

            {/* ANALYTICS & TRACKING */}
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
                    02 — Analytics & Tracking
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Performance & Search Tracking
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Measure / Improve
                </span>
              </div>

              {/* PLATFORM GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Google Analytics",
                    icon: SiGoogleanalytics,
                  },
                  {
                    name: "Google Tag Manager",
                    icon: SiGoogletagmanager,
                  },
                  {
                    name: "Hotjar",
                    icon: SiHotjar,
                  },
                  {
                    name: "Meta",
                    icon: SiMeta,
                  },
                  {
                    name: "Google",
                    icon: SiGoogle,
                  },
                  {
                    name: "Semrush",
                    icon: SiSemrush,
                  },
                ].map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={`${tech.name}-${index}`}
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

            {/* WEB & TECHNICAL SEO */}
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
                    03 — Technical SEO
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Web Technologies & Optimization
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Optimize / Scale
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
                    name: "WordPress",
                    icon: SiWordpress,
                  },
                  {
                    name: "Shopify",
                    icon: SiShopify,
                  },
                  {
                    name: "GitHub",
                    icon: SiGithub,
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
                The right SEO technology helps us turn search data into
                actionable insights, technical improvements, and measurable
                organic growth.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Data / Strategy / Growth
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
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081019] via-[#09141A] to-[#070B12]" />

          {/* Top Cyan Glow */}
          <div className="absolute top-[-180px] left-[12%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[35%] right-[-180px] h-[560px] w-[560px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Bottom Blue Glow */}
          <div className="absolute bottom-[-220px] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[170px]" />

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
            { left: "20%", top: "72%", size: 3, delay: 1.1 },
            { left: "78%", top: "18%", size: 4, delay: 0.5 },
            { left: "91%", top: "64%", size: 3, delay: 1.7 },
            { left: "62%", top: "82%", size: 3, delay: 0.8 },
            { left: "46%", top: "12%", size: 3, delay: 1.4 },
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Why DigiGrowtherz
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                SEO Built Around
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Real Business Growth.
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
              We don't treat SEO as a collection of isolated tactics. We combine
              technical optimization, search strategy, content, data, and
              continuous improvement to build sustainable visibility that
              supports your business goals.
            </motion.p>
          </div>

          {/* REASONS */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Strategy First",
                  description:
                    "Every SEO campaign starts with understanding your business, audience, competitors, and search opportunities before we decide what to optimize.",
                  accent: "cyan",
                },
                {
                  number: "02",
                  title: "Technical Expertise",
                  description:
                    "We identify and resolve technical issues that can limit crawling, indexing, performance, user experience, and your ability to compete in search.",
                  accent: "lime",
                },
                {
                  number: "03",
                  title: "Data Driven Decisions",
                  description:
                    "We use search data, analytics, rankings, and user behavior to prioritize work based on opportunities that can create meaningful business impact.",
                  accent: "cyan",
                },
                {
                  number: "04",
                  title: "Quality Over Shortcuts",
                  description:
                    "Our approach focuses on sustainable SEO practices rather than risky shortcuts that can create temporary gains and long-term problems.",
                  accent: "lime",
                },
                {
                  number: "05",
                  title: "Transparent Progress",
                  description:
                    "You get clear visibility into what we're working on, why it matters, and how your organic search performance is evolving over time.",
                  accent: "cyan",
                },
                {
                  number: "06",
                  title: "Built for Long-Term Growth",
                  description:
                    "SEO compounds over time. We build a strong foundation that can continue generating visibility, traffic, leads, and opportunities as your business grows.",
                  accent: "lime",
                },
              ].map((reason, index) => (
                <motion.div
                  key={reason.number}
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
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 sm:p-7 ${
                    reason.accent === "lime"
                      ? "hover:border-lime-300/20"
                      : "hover:border-cyan-300/20"
                  }`}
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      reason.accent === "lime"
                        ? "bg-gradient-to-br from-lime-300/[0.05] via-transparent to-transparent"
                        : "bg-gradient-to-br from-cyan-300/[0.05] via-transparent to-transparent"
                    }`}
                  />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] tracking-[0.22em] ${
                        reason.accent === "lime"
                          ? "text-lime-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {reason.number}
                    </span>

                    <span
                      className={`h-px w-10 ${
                        reason.accent === "lime"
                          ? "bg-lime-300/30"
                          : "bg-cyan-300/30"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                      {reason.description}
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
                Better rankings are only part of the equation. Our goal is to
                turn organic search visibility into meaningful traffic,
                qualified opportunities, and sustainable business growth.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Strategy / Execution / Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Cyan Glow */}
          <div className="absolute top-[-200px] left-[8%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Right Lime Glow */}
          <div className="absolute top-[35%] right-[-220px] h-[550px] w-[550px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* Bottom Blue Glow */}
          <div className="absolute bottom-[-220px] left-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[170px]" />

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
            { left: "7%", top: "18%", size: 4, delay: 0 },
            { left: "18%", top: "72%", size: 3, delay: 1.2 },
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
                  Frequently Asked
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                SEO Questions,
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Answered Clearly.
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
              SEO is a long-term investment, and you should know exactly what
              you're getting into. Here are answers to some of the most common
              questions about our approach.
            </motion.p>
          </div>

          {/* FAQ CONTENT */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                {
                  number: "01",
                  question: "How long does SEO take to show results?",
                  answer:
                    "SEO is a long-term strategy, so results vary depending on your website, competition, industry, and current authority. Initial improvements can appear within a few months, while stronger organic growth typically develops through consistent optimization over time.",
                },
                {
                  number: "02",
                  question: "Can you guarantee first-page rankings?",
                  answer:
                    "No reputable SEO agency can guarantee specific rankings because search engines control their algorithms and ranking systems. We focus instead on the technical, content, authority, and strategic factors that create sustainable opportunities for better visibility.",
                },
                {
                  number: "03",
                  question: "Do you work with existing websites?",
                  answer:
                    "Yes. We can work with existing websites by first identifying technical issues, search opportunities, content gaps, and areas where the current site can be improved before building a prioritized SEO strategy.",
                },
                {
                  number: "04",
                  question: "Do you also handle technical SEO?",
                  answer:
                    "Yes. Technical SEO is an important part of our process. We can work on areas such as crawlability, indexing, site structure, metadata, performance, mobile experience, internal linking, and other technical factors that affect search visibility.",
                },
                {
                  number: "05",
                  question: "Will you create SEO content?",
                  answer:
                    "Yes. Content can be included as part of an SEO strategy when it supports genuine search demand and business goals. We focus on useful, search-focused content rather than producing content simply for volume.",
                },
                {
                  number: "06",
                  question: "How do you measure SEO success?",
                  answer:
                    "We look beyond rankings alone. Depending on your goals, we can track organic traffic, keyword visibility, search impressions, clicks, conversions, leads, and other meaningful indicators of business growth.",
                },
                {
                  number: "07",
                  question: "Do you provide SEO reports?",
                  answer:
                    "Yes. We provide clear performance reporting so you can understand what has been improved, what is changing, and where the next opportunities are. Reporting can be aligned with the goals and scope of your SEO campaign.",
                },
                {
                  number: "08",
                  question: "Can SEO help generate more leads?",
                  answer:
                    "Yes. When SEO is aligned with the right search intent and conversion experience, it can bring more qualified visitors to your website. Our goal is not simply more traffic, but traffic that has a meaningful chance of becoming a customer.",
                },
              ].map((faq, index) => (
                <motion.details
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
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]"
                >
                  {/* QUESTION */}
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                    {/* Number */}
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-cyan-300">
                      {faq.number}
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-sm leading-6 font-medium text-white sm:text-base">
                      {faq.question}
                    </span>

                    {/* Plus */}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                      <span className="absolute h-px w-3 bg-slate-400 transition-transform duration-300 group-open:rotate-180 group-hover:bg-cyan-300" />

                      <span className="absolute h-3 w-px bg-slate-400 transition-transform duration-300 group-open:rotate-90 group-hover:bg-cyan-300" />
                    </span>
                  </summary>

                  {/* ANSWER */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.06] px-5 pt-4 pb-6 sm:px-6">
                        <p className="max-w-2xl text-sm leading-7 text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.details>
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
                Still have questions about your SEO goals, website, or current
                search performance? Let's talk through your situation and
                identify the right next step.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Ask / Learn / Grow
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Central Cyan Glow */}
          <div className="absolute top-[-180px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Left Lime Glow */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right Cyan Glow */}
          <div className="absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "24%", size: 4, delay: 0 },
            { left: "18%", top: "70%", size: 3, delay: 1.2 },
            { left: "80%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "64%", size: 3, delay: 1.8 },
            { left: "68%", top: "80%", size: 3, delay: 0.9 },
            { left: "44%", top: "14%", size: 3, delay: 1.5 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

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
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* CARD GLOW */}
            <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[130px]" />

            {/* Decorative Rings */}
            <div className="absolute top-[-100px] right-[-100px] h-[260px] w-[260px] rounded-full border border-cyan-300/[0.08]" />

            <div className="absolute top-[-70px] right-[-70px] h-[200px] w-[200px] rounded-full border border-lime-300/[0.06]" />

            <div className="absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full border border-lime-300/[0.06]" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* BADGE */}
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
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                    Ready To Grow
                  </span>
                </div>
              </motion.div>

              {/* HEADING */}
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
                className="font-space-grotesk mt-7 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Get Found.
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Get Growing.
                </span>
              </motion.h2>

              {/* DESCRIPTION */}
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
                Your customers are already searching. Let&apos;s build an SEO
                strategy that helps your business get discovered, earn trust,
                and turn organic traffic into measurable growth.
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
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.35)] sm:w-auto"
                >
                  Start Your SEO Journey
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* SECONDARY CTA */}
                <motion.a
                  href="#overview"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:w-auto"
                >
                  Explore Our SEO Services
                </motion.a>
              </motion.div>

              {/* TRUST POINTS */}
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
                  delay: 0.4,
                }}
                className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    Strategy Driven
                  </span>
                </div>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    Data Informed
                  </span>
                </div>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    Built For Growth
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
