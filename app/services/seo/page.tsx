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
                className="font-space-grotesk text-5xl leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-[60px]"
              >
                SEO Services.
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Built to Grow.
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
                className="mt-8 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
              >
                DigiGrowtherz provides strategic SEO services that help
                businesses improve Google search visibility, attract relevant
                organic traffic, and reach customers actively searching for
                their products or services.
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
                  Get an SEO Consultation
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
                    Sustainable Organic Traffic
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-cyan-300" />

                    <h4 className="text-xl font-bold text-white">Visible</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Relevant Search Visibility
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-300" />

                    <h4 className="text-xl font-bold text-white">Data</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Search Performance Insights
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
                          Sample Data
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                SEO Strategy
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Built for Growth.
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
              Our search engine optimization services bring together keyword
              research, technical SEO, on-page optimization, local SEO, and
              useful content to help the right people discover your website and
              take action.
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
                Keyword Research & Search Intent
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                We research the search terms your potential customers use,
                review competitor visibility, and map relevant keywords to the
                pages and topics that support your business goals.
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
                Strengthen Your Website SEO
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                We improve important on-page and technical elements, including
                page titles, metadata, headings, internal links, site structure,
                crawlability, and indexability where needed.
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
                Attract Qualified Organic Traffic
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                We align search visibility with relevant landing pages and clear
                calls to action, helping organic visitors find useful
                information and move toward an enquiry, purchase, or next step.
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
                Effective SEO connects the technical health of your website with
                search intent and helpful content. We prioritize improvements
                based on your market, website condition, and the opportunities
                that matter.
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
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
              Our SEO services cover the key areas of organic search growth:
              technical SEO, on-page optimization, local search, content
              strategy, competitor research, and performance analytics.
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
                Technical SEO helps search engines discover, crawl, render, and
                index your important pages. We review site structure,
                indexability, page performance, and technical issues that can
                affect visibility.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Site Architecture & Internal Links",
                  "Crawlability & Indexing",
                  "Page Performance",
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
                On-page SEO aligns each important page with its target search
                intent. We refine page titles, meta descriptions, headings,
                content, image context, and internal links to make pages clearer
                and more useful.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Keyword Mapping & Search Intent",
                  "Content & Heading Optimization",
                  "Title Tags & Meta Descriptions",
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
                Local SEO helps your business appear for relevant location-based
                searches. We improve local search signals and business profile
                information so nearby customers can discover your services.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Google Business Profile Optimization",
                  "Local Keywords & Location Pages",
                  "Business Information Consistency",
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
                SEO content strategy turns customer questions and keyword
                opportunities into useful website pages and articles. We plan
                content around search intent, topical relevance, and the needs
                of your audience.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Search Intent & Topic Research",
                  "SEO Content Planning",
                  "Content Refresh Opportunities",
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
                Competitor SEO analysis reviews the keywords, pages, content
                themes, and search visibility of businesses in your market to
                uncover realistic gaps and opportunities for your website.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Competitor Keyword Research",
                  "Content & Keyword Gap Analysis",
                  "Search Market Opportunities",
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
                SEO analytics and reporting help you understand how your website
                performs in organic search. We review visibility, impressions,
                clicks, traffic, and agreed conversion indicators to guide
                ongoing improvements.
              </p>

              {/* Features */}
              <div className="relative mt-6 space-y-2">
                {[
                  "Organic Traffic & Visibility Tracking",
                  "Google Search Console & Analytics Insights",
                  "Performance Reporting & Next Steps",
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
                Strong SEO comes from coordinated improvements. We connect
                technical website health, on-page optimization, local search,
                helpful content, competitor insights, and ongoing measurement.
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                A Clear SEO Process
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  From Audit to Action.
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
              Every SEO campaign starts with understanding your current website
              and business priorities. We then plan and implement technical,
              on-page, local, and content improvements, measuring progress
              against agreed goals.
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
                  "We review crawlability, indexation, site structure, page content, keyword visibility, backlinks, and analytics to identify technical issues and organic search opportunities.",
                accent: "blue",
              },
              {
                number: "02",
                title: "Keyword & SEO Strategy",
                description:
                  "We map relevant keywords to search intent, review competitors, prioritize important pages, and create an SEO roadmap aligned with your target audience and business goals.",
                accent: "cyan",
              },
              {
                number: "03",
                title: "On-Page & Technical SEO",
                description:
                  "We implement agreed improvements to page titles, metadata, headings, content, internal links, site structure, technical health, and local search signals.",
                accent: "lime",
              },
              {
                number: "04",
                title: "Monitor & Improve",
                description:
                  "We review keyword visibility, organic clicks, impressions, traffic, and relevant conversions, then use the findings to prioritize the next SEO improvements.",
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
                <h3 className="font-space-grotesk relative mt-7 text-xl font-semibold text-white sm:text-[22px]">
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
                SEO requires consistent work as search results, competitors, and
                customer behavior change. We use ongoing performance data to
                refine priorities and keep your optimization plan aligned with
                business goals.
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Tools for SEO
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Research & Insights.
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
              We work with SEO research platforms, Google measurement tools, and
              modern website technologies to review keyword opportunities,
              monitor organic search performance, and investigate technical SEO
              issues.
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
                    Keyword Research & Competitor Analysis
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
                    Organic Search Analytics & Reporting
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
                    Website Platforms & Technical SEO
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
                The right SEO tools help us research search demand, monitor
                website performance, identify technical issues, and prioritize
                improvements using evidence rather than guesswork.
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                An SEO Partner
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Focused on Growth.
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
              DigiGrowtherz approaches search engine optimization as an ongoing
              business growth activity. We connect technical SEO, keyword
              strategy, useful content, local visibility, and transparent
              reporting to focus on the organic search opportunities that matter
              to your business.
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
                    "We begin with your business goals, audience, website, and competitors, then prioritize keyword and search opportunities that are relevant to the customers you want to reach.",
                  accent: "cyan",
                },
                {
                  number: "02",
                  title: "Technical Expertise",
                  description:
                    "We review crawlability, indexability, site structure, page performance, and mobile usability to identify technical barriers that may limit search visibility.",
                  accent: "lime",
                },
                {
                  number: "03",
                  title: "Data Driven Decisions",
                  description:
                    "Keyword data, Google Search Console, analytics, and competitor research help us prioritize SEO tasks and evaluate whether organic search activity supports your business objectives.",
                  accent: "cyan",
                },
                {
                  number: "04",
                  title: "Quality Over Shortcuts",
                  description:
                    "We focus on useful content, sound technical foundations, and relevant optimization rather than keyword stuffing, manipulative link schemes, or ranking guarantees.",
                  accent: "lime",
                },
                {
                  number: "05",
                  title: "Transparent Progress",
                  description:
                    "We explain completed work, findings, performance changes, and recommended next steps so you can understand how your SEO activity is progressing.",
                  accent: "cyan",
                },
                {
                  number: "06",
                  title: "Built for Long-Term Growth",
                  description:
                    "We build an SEO foundation that can be improved over time as your website, content, product or service offering, and target market develop.",
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
                Rankings are one part of SEO performance. We aim to connect
                relevant search visibility with useful landing pages, qualified
                organic visits, enquiries, and other outcomes that matter to
                your business.
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
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                SEO FAQs,
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
              Learn more about SEO services, technical and on-page optimization,
              local search, content strategy, timelines, and how we measure
              organic search performance for your business.
            </motion.p>
          </div>

          {/* FAQ CONTENT */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                {
                  number: "01",
                  question: "What do SEO services include?",
                  answer:
                    "SEO services can include website audits, keyword research, technical SEO, on-page optimization, content planning, local SEO, competitor analysis, and performance reporting. The right mix depends on your website, market, current search visibility, and business goals.",
                },
                {
                  number: "02",
                  question: "Can you guarantee first-page rankings?",
                  answer:
                    "No reputable SEO agency can guarantee specific rankings because search engines control their algorithms and ranking systems. We focus instead on the technical, content, authority, and strategic factors that create sustainable opportunities for better visibility.",
                },
                {
                  number: "03",
                  question: "Can you improve SEO on an existing website?",
                  answer:
                    "Yes. We can review an existing website to identify indexing or technical issues, keyword gaps, content improvements, and opportunities across important pages. Recommendations are prioritized according to the site's current condition and your goals.",
                },
                {
                  number: "04",
                  question: "What is included in technical SEO?",
                  answer:
                    "Technical SEO focuses on how search engines access and understand your website. Depending on the audit, work may include crawlability, indexability, site architecture, redirects, metadata, internal linking, page performance, and mobile usability.",
                },
                {
                  number: "05",
                  question: "Will you create SEO content?",
                  answer:
                    "Yes. Content can be included as part of an SEO strategy when it supports genuine search demand and business goals. We focus on useful, search-focused content rather than producing content simply for volume.",
                },
                {
                  number: "06",
                  question: "Do you provide local SEO services?",
                  answer:
                    "Yes. Local SEO can help eligible businesses improve visibility for location-based searches. Depending on the project, work may include Google Business Profile improvements, local keyword research, location-page optimization, and consistent business information across relevant listings.",
                },
                {
                  number: "07",
                  question: "How do you measure and report SEO performance?",
                  answer:
                    "We can report on indicators such as organic clicks, impressions, search visibility, keyword trends, website traffic, and agreed conversion events. Reporting uses available analytics and search data to explain progress, findings, and recommended next steps.",
                },
                {
                  number: "08",
                  question: "Can SEO help my business generate more leads?",
                  answer:
                    "SEO can support lead generation by helping people with relevant needs discover your website. Results depend on search demand, competition, your offer, and the quality of your website experience. We focus on attracting relevant visitors and making the next step clear.",
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
                Have questions about your website's organic search visibility or
                which SEO improvements to prioritize? Share your goals and we
                can discuss a practical starting point for your SEO strategy.
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
                className="font-space-grotesk mt-7 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Get Found in Search.
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Grow Organically.
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
                Help the right customers discover your business through search.
                Let&apos;s discuss SEO services that connect keyword research,
                technical improvements, useful content, and organic performance
                with your business goals.
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
                  Discuss Your SEO Project
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
                  Request an SEO Consultation
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
