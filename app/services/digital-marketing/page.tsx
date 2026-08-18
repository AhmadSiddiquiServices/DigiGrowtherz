"use client";

import {
  Anchor,
  ArrowRight,
  BarChart3,
  Layers,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  Palette,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiFacebook,
  SiFigma,
  SiGoogle,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiHotjar,
  SiInstagram,
  SiMailchimp,
  SiMeta,
  SiSemrush,
  SiTiktok,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function DigitalMarketingServicePage() {
  return (
    <>
      {/* DIGITAL MARKETING — HERO SECTION */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#08151A] to-[#071018]" />

          {/* Central Cyan Glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Lime Glow */}
          <div className="absolute top-[30%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[160px]" />

          {/* Right Glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />

          {/* Marketing Grid */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071018_78%)]" />

          {/* Floating Particles */}
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

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

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
                <Megaphone className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-xs tracking-[0.28em] text-cyan-300 uppercase">
                  Digital Marketing
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
                Marketing That
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Drives Real Growth
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
                We create data-driven digital marketing strategies that increase
                visibility, attract the right audience, and turn attention into
                measurable business growth.
              </motion.p>

              {/* CTA BUTTONS */}
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
                  Start Your Campaign
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

              {/* BOTTOM HIGHLIGHTS */}
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
                  <h4 className="text-2xl font-bold text-white">Reach</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Targeted Audiences
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">ROI</h4>

                  <p className="mt-1 text-sm text-slate-400">Data Driven</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">∞</h4>

                  <p className="mt-1 text-sm text-slate-400">Built to Scale</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — PREMIUM MARKETING VISUAL */}
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
              {/* AMBIENT GLOW */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[140px]" />
              </div>

              {/* FLOATING ANALYTICS BADGE */}
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
                    <TrendingUp className="h-5 w-5 text-lime-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                      Growth
                    </p>

                    <h5 className="mt-1 font-semibold text-white">
                      Performance Driven
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* MAIN ANALYTICS DASHBOARD */}
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
                {/* Dashboard */}
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0A121A]">
                  {/* Dashboard Header */}
                  <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <div className="ml-4 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#A3E635]" />

                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        analytics.yourbusiness.com
                      </span>
                    </div>
                  </div>

                  {/* DASHBOARD CONTENT */}
                  <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-[#101C23] via-[#0B151B] to-[#081017] p-6 sm:p-8">
                    {/* Dashboard Grid */}
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

                    {/* Dashboard Header */}
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="h-2.5 w-24 rounded-full bg-white/20" />

                        <div className="mt-3 h-2 w-36 rounded-full bg-white/10" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300/10">
                        <BarChart3 className="h-4 w-4 text-lime-300" />
                      </div>
                    </div>

                    {/* STAT CARDS */}
                    <div className="relative mt-8 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-500 uppercase">
                          Reach
                        </p>

                        <p className="mt-2 text-xl font-semibold text-white">
                          84.6K
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-lime-300" />

                          <span className="text-[9px] text-lime-300">
                            +24.8%
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-500 uppercase">
                          Leads
                        </p>

                        <p className="mt-2 text-xl font-semibold text-white">
                          2.8K
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-cyan-300" />

                          <span className="text-[9px] text-cyan-300">
                            +18.4%
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <p className="font-mono text-[8px] tracking-[0.15em] text-slate-500 uppercase">
                          ROI
                        </p>

                        <p className="mt-2 text-xl font-semibold text-white">
                          4.8x
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-lime-300" />

                          <span className="text-[9px] text-lime-300">
                            +31.2%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ANALYTICS GRAPH */}
                    <div className="relative mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                            Campaign Performance
                          </p>

                          <p className="mt-1 text-sm font-medium text-white">
                            Growth Overview
                          </p>
                        </div>

                        <span className="rounded-full border border-lime-300/10 bg-lime-300/[0.06] px-2 py-1 font-mono text-[8px] text-lime-300">
                          +32.4%
                        </span>
                      </div>

                      {/* Graph */}
                      <div className="relative mt-6 h-32">
                        {/* Horizontal Lines */}
                        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
                        <div className="absolute inset-x-0 top-1/3 h-px bg-white/[0.06]" />
                        <div className="absolute inset-x-0 top-2/3 h-px bg-white/[0.06]" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]" />

                        {/* Graph Area */}
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 500 130"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="marketingGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#A3E635"
                                stopOpacity="0.25"
                              />

                              <stop
                                offset="100%"
                                stopColor="#A3E635"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>

                          <path
                            d="M0,105 C50,98 70,92 110,95 C150,98 170,76 210,82 C250,88 270,62 310,68 C350,74 370,42 410,48 C445,53 465,28 500,18 L500,130 L0,130 Z"
                            fill="url(#marketingGradient)"
                          />

                          <path
                            d="M0,105 C50,98 70,92 110,95 C150,98 170,76 210,82 C250,88 270,62 310,68 C350,74 370,42 410,48 C445,53 465,28 500,18"
                            fill="none"
                            stroke="#A3E635"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Animated Graph Point */}
                        <motion.div
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute top-[8%] right-[3%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_#A3E635]"
                        />
                      </div>
                    </div>

                    {/* CAMPAIGN CHANNELS */}
                    <div className="relative mt-4 grid grid-cols-3 gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-3">
                        <div className="h-2 w-2 rounded-full bg-cyan-300" />

                        <span className="font-mono text-[8px] text-slate-400">
                          Social
                        </span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-3">
                        <div className="h-2 w-2 rounded-full bg-lime-300" />

                        <span className="font-mono text-[8px] text-slate-400">
                          Search
                        </span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-3">
                        <div className="h-2 w-2 rounded-full bg-cyan-300" />

                        <span className="font-mono text-[8px] text-slate-400">
                          Ads
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING PERFORMANCE BADGE */}
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
                      <TrendingUp className="h-5 w-5 text-lime-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Performance
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Growing Every Day
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING AUDIENCE BADGE */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute right-6 bottom-24 z-20 hidden rounded-2xl border border-cyan-300/10 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.3)] backdrop-blur-2xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                      <UsersRound className="h-5 w-5 text-cyan-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Audience
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Right People
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

      {/* DIGITAL MARKETING — OVERVIEW */}
      <section
        id="overview"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[10%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Left Lime Glow */}
          <div className="absolute top-[35%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right Cyan Glow */}
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

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#070B12_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "18%", size: 4, delay: 0 },
            { left: "19%", top: "70%", size: 3, delay: 1.1 },
            { left: "81%", top: "22%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.7 },
            { left: "66%", top: "82%", size: 3, delay: 0.9 },
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
          <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
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
                  Overview
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Marketing Built
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Around Growth.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT COPY */}
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
              Digital marketing is more than posting content or running ads. We
              combine strategy, creative execution, audience targeting, and
              performance data to build campaigns that attract the right people
              and turn attention into meaningful business results.
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
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent lg:mt-20"
          />

          {/* MAIN OVERVIEW */}
          <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            {/* LEFT — MAIN STATEMENT */}
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
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:p-10"
            >
              {/* Card Glow */}
              <div className="absolute top-[-100px] right-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.07] blur-[100px]" />

              <div className="relative z-10">
                {/* Small Label */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                  <span className="font-mono text-[10px] tracking-[0.24em] text-lime-300 uppercase">
                    Strategy First
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-space-grotesk mt-7 max-w-2xl text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl">
                  Every campaign starts with
                  <span className="text-cyan-300">
                    {" "}
                    understanding your audience.
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
                  Before we launch campaigns, we understand your business,
                  target audience, market position, competitors, and growth
                  objectives. This allows us to build a marketing strategy
                  around real opportunities instead of relying on guesswork.
                </p>

                {/* Highlights */}
                <div className="mt-10 grid gap-5 sm:grid-cols-3">
                  {/* Item */}
                  <div className="border-l border-lime-300/20 pl-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-lime-300" />

                      <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">
                        Target
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-white">
                      Right Audience
                    </p>
                  </div>

                  {/* Item */}
                  <div className="border-l border-cyan-300/20 pl-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-cyan-300" />

                      <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">
                        Measure
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-white">
                      Real Performance
                    </p>
                  </div>

                  {/* Item */}
                  <div className="border-l border-lime-300/20 pl-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-lime-300" />

                      <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">
                        Grow
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-white">
                      Sustainable Results
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — MARKETING FLOW */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
                duration: 0.7,
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
            >
              {/* Card Glow */}
              <div className="absolute bottom-[-100px] left-[-80px] h-[260px] w-[260px] rounded-full bg-lime-400/[0.06] blur-[100px]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                      01 — Growth Framework
                    </p>

                    <h3 className="font-space-grotesk mt-2 text-2xl font-semibold text-white">
                      From Attention to Action
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.05] sm:flex">
                    <TrendingUp className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                {/* FLOW */}
                <div className="mt-10 space-y-0">
                  {/* Step 1 */}
                  <div className="relative flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                        <UsersRound className="h-4 w-4 text-cyan-300" />
                      </div>

                      <div className="h-12 w-px bg-gradient-to-b from-cyan-300/30 to-white/[0.06]" />
                    </div>

                    <div className="pb-8">
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                        01
                      </p>

                      <h4 className="mt-1 text-sm font-semibold text-white">
                        Reach the Right People
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Identify and reach audiences that are most likely to
                        engage with your business.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/[0.06]">
                        <MousePointerClick className="h-4 w-4 text-lime-300" />
                      </div>

                      <div className="h-12 w-px bg-gradient-to-b from-lime-300/30 to-white/[0.06]" />
                    </div>

                    <div className="pb-8">
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                        02
                      </p>

                      <h4 className="mt-1 text-sm font-semibold text-white">
                        Turn Interest Into Action
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Use compelling creative, messaging, and offers to move
                        potential customers forward.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                      <BarChart3 className="h-4 w-4 text-cyan-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                        03
                      </p>

                      <h4 className="mt-1 text-sm font-semibold text-white">
                        Measure & Improve
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Track performance and continuously optimize campaigns
                        for stronger results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM VALUE CARDS */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {[
              {
                icon: Target,
                label: "Audience",
                title: "Precise Targeting",
                description: "Reach people who matter most to your business.",
              },
              {
                icon: Lightbulb,
                label: "Creative",
                title: "Strategic Content",
                description: "Build messaging designed to capture attention.",
              },
              {
                icon: BarChart3,
                label: "Analytics",
                title: "Data Driven",
                description: "Use performance data to guide every decision.",
              },
              {
                icon: TrendingUp,
                label: "Growth",
                title: "Continuous Optimization",
                description: "Improve campaigns as your business grows.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/[0.035] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                      <Icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300" />
                    </div>

                    <p className="mt-5 font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                      {item.label}
                    </p>

                    <h4 className="mt-1 text-sm font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
                Great marketing connects the right message with the right
                audience at the right time. We build that connection around your
                business goals.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Growth With Purpose
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
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Cyan Glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[35%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-400/[0.045] blur-[180px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute right-[5%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

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
            { left: "8%", top: "18%", size: 4, delay: 0 },
            { left: "19%", top: "72%", size: 3, delay: 1.1 },
            { left: "81%", top: "20%", size: 4, delay: 0.7 },
            { left: "91%", top: "65%", size: 3, delay: 1.7 },
            { left: "67%", top: "84%", size: 3, delay: 0.9 },
            { left: "45%", top: "12%", size: 3, delay: 1.4 },
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
        <div className="mx-autov relative z-10 px-4">
          {/* INTRO */}
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
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Solutions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Marketing That
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Drives Results.
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
              From social media and paid advertising to search and content, we
              build digital marketing strategies designed to increase
              visibility, attract the right audience, and turn attention into
              measurable business growth.
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
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-lime-300/40 via-cyan-300/20 to-transparent lg:mt-20"
          />

          {/* SOLUTIONS GRID */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Social Media Marketing",
                description:
                  "Build a stronger social presence with engaging content and campaigns that connect your brand with the right audience.",
                tag: "Engage / Grow",
                accent: "lime",
              },
              {
                number: "02",
                title: "Paid Advertising",
                description:
                  "Launch targeted advertising campaigns across major platforms to generate qualified traffic, leads, and conversions.",
                tag: "Reach / Convert",
                accent: "cyan",
              },
              {
                number: "03",
                title: "Search Engine Optimization",
                description:
                  "Improve your search visibility with SEO strategies that help your business attract consistent organic traffic over time.",
                tag: "Rank / Discover",
                accent: "lime",
              },
              {
                number: "04",
                title: "Content Marketing",
                description:
                  "Create valuable, strategic content that builds authority, educates your audience, and supports your wider marketing goals.",
                tag: "Create / Educate",
                accent: "cyan",
              },
              {
                number: "05",
                title: "Email Marketing",
                description:
                  "Turn prospects into customers and customers into repeat buyers with targeted email campaigns and automated communication.",
                tag: "Nurture / Retain",
                accent: "lime",
              },
              {
                number: "06",
                title: "Analytics & Reporting",
                description:
                  "Track performance with meaningful data and insights so every campaign can be refined around what actually drives results.",
                tag: "Measure / Improve",
                accent: "cyan",
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative min-h-[270px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 ${
                  solution.accent === "lime"
                    ? "hover:border-lime-300/20"
                    : "hover:border-cyan-300/20"
                }`}
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    solution.accent === "lime"
                      ? "bg-gradient-to-br from-lime-300/[0.06] via-transparent to-transparent"
                      : "bg-gradient-to-br from-cyan-300/[0.06] via-transparent to-transparent"
                  }`}
                />

                {/* Top Number */}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] tracking-[0.25em] uppercase ${
                      solution.accent === "lime"
                        ? "text-lime-300"
                        : "text-cyan-300"
                    }`}
                  >
                    {solution.number}
                  </span>

                  <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                    Solution
                  </span>
                </div>

                {/* Icon / Accent */}
                <div
                  className={`relative mt-8 h-px w-12 ${
                    solution.accent === "lime"
                      ? "bg-gradient-to-r from-lime-300 to-transparent"
                      : "bg-gradient-to-r from-cyan-300 to-transparent"
                  }`}
                />

                {/* Title */}
                <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold tracking-tight text-white">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {solution.description}
                </p>

                {/* Bottom Tag */}
                <div className="absolute right-7 bottom-7 left-7 flex items-center gap-3">
                  <span
                    className={`h-px w-8 ${
                      solution.accent === "lime"
                        ? "bg-lime-300/60"
                        : "bg-cyan-300/60"
                    }`}
                  />

                  <span
                    className={`font-mono text-[9px] tracking-[0.22em] uppercase ${
                      solution.accent === "lime"
                        ? "text-lime-300/70"
                        : "text-cyan-300/70"
                    }`}
                  >
                    {solution.tag}
                  </span>
                </div>

                {/* Corner Glow */}
                <div
                  className={`absolute -right-20 -bottom-20 h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${
                    solution.accent === "lime"
                      ? "bg-lime-300/[0.08]"
                      : "bg-cyan-300/[0.08]"
                  }`}
                />
              </motion.div>
            ))}
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
                Every campaign is built around your goals, your audience, and
                the metrics that matter — combining strategy, creativity, and
                data to create sustainable growth.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Strategy / Growth
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

          {/* Top Cyan Glow */}
          <div className="absolute top-[-220px] left-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[35%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-400/[0.045] blur-[180px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

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
            { left: "19%", top: "70%", size: 3, delay: 1.1 },
            { left: "83%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "64%", size: 3, delay: 1.7 },
            { left: "69%", top: "82%", size: 3, delay: 0.9 },
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
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                From Strategy
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  To Real Growth.
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
              We follow a structured, data-driven process that connects
              strategy, creative execution, campaign management, and continuous
              optimization to turn your marketing investment into measurable
              business results.
            </motion.p>
          </div>

          {/* PROCESS LINE */}
          <div className="relative mt-16 lg:mt-20">
            {/* Connecting Line */}
            <div className="absolute top-[34px] right-0 left-0 hidden h-px bg-gradient-to-r from-lime-300/30 via-cyan-300/20 to-lime-300/30 lg:block" />

            {/* Process Steps */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  number: "01",
                  title: "Discover",
                  description:
                    "We learn about your business, audience, competitors, goals, and current digital presence.",
                  label: "Understand",
                  accent: "lime",
                },
                {
                  number: "02",
                  title: "Strategize",
                  description:
                    "We build a focused marketing strategy based on your objectives, audience, channels, and opportunities.",
                  label: "Plan",
                  accent: "cyan",
                },
                {
                  number: "03",
                  title: "Create",
                  description:
                    "We develop campaign concepts, content, creatives, messaging, and assets designed to capture attention.",
                  label: "Build",
                  accent: "lime",
                },
                {
                  number: "04",
                  title: "Launch",
                  description:
                    "We deploy campaigns across the right channels, targeting the audiences most likely to take action.",
                  label: "Execute",
                  accent: "cyan",
                },
                {
                  number: "05",
                  title: "Optimize",
                  description:
                    "We monitor performance, analyze the data, refine campaigns, and continuously improve results.",
                  label: "Improve",
                  accent: "lime",
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
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex items-center justify-between lg:justify-start">
                    <div
                      className={`flex h-[68px] w-[68px] items-center justify-center rounded-2xl border bg-[#091017] ${
                        step.accent === "lime"
                          ? "border-lime-300/20"
                          : "border-cyan-300/20"
                      }`}
                    >
                      <span
                        className={`font-mono text-sm tracking-[0.15em] ${
                          step.accent === "lime"
                            ? "text-lime-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Mobile Label */}
                    <span
                      className={`font-mono text-[9px] tracking-[0.22em] uppercase sm:hidden ${
                        step.accent === "lime"
                          ? "text-lime-300/70"
                          : "text-cyan-300/70"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className={`relative mt-5 min-h-[280px] overflow-hidden rounded-3xl border bg-white/[0.025] p-6 transition-all duration-300 ${
                      step.accent === "lime"
                        ? "border-white/[0.08] hover:border-lime-300/20"
                        : "border-white/[0.08] hover:border-cyan-300/20"
                    }`}
                  >
                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                        step.accent === "lime"
                          ? "bg-gradient-to-b from-lime-300/[0.055] via-transparent to-transparent"
                          : "bg-gradient-to-b from-cyan-300/[0.055] via-transparent to-transparent"
                      }`}
                    />

                    {/* Small Accent */}
                    <div
                      className={`relative h-px w-10 ${
                        step.accent === "lime"
                          ? "bg-gradient-to-r from-lime-300 to-transparent"
                          : "bg-gradient-to-r from-cyan-300 to-transparent"
                      }`}
                    />

                    {/* Title */}
                    <h3 className="font-space-grotesk relative mt-6 text-2xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-4 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>

                    {/* Bottom Label */}
                    <div className="absolute right-6 bottom-6 left-6 flex items-center gap-3">
                      <span
                        className={`h-px w-7 ${
                          step.accent === "lime"
                            ? "bg-lime-300/60"
                            : "bg-cyan-300/60"
                        }`}
                      />

                      <span
                        className={`font-mono text-[9px] tracking-[0.22em] uppercase ${
                          step.accent === "lime"
                            ? "text-lime-300/70"
                            : "text-cyan-300/70"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* Corner Glow */}
                    <div
                      className={`absolute -right-16 -bottom-16 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100 ${
                        step.accent === "lime"
                          ? "bg-lime-300/[0.08]"
                          : "bg-cyan-300/[0.08]"
                      }`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PROCESS STATEMENT */}
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
                Great marketing is never a one-time campaign. We continuously
                learn from the data, improve what works, and adapt the strategy
                as your business grows.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-lime-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Learn / Adapt / Grow
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

          {/* Top Cyan Glow */}
          <div className="absolute top-[-220px] right-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center Lime Glow */}
          <div className="absolute top-[35%] left-[15%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.055] blur-[180px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

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
            { left: "18%", top: "72%", size: 3, delay: 1.2 },
            { left: "82%", top: "17%", size: 4, delay: 0.6 },
            { left: "91%", top: "62%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* INTRO */}
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
                  Technologies
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Tools That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Drive Performance.
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
              We use proven marketing platforms, analytics systems, advertising
              networks, content tools, and creative technologies to build
              campaigns that reach the right audience and generate measurable
              results.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* MARKETING & ADVERTISING */}
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
                    01 — Marketing
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Advertising & Social Platforms
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Reach / Convert
                </span>
              </div>

              {/* PLATFORM GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Meta Ads",
                    icon: SiMeta,
                  },
                  {
                    name: "Google Ads",
                    icon: SiGoogleads,
                  },
                  {
                    name: "Instagram",
                    icon: SiInstagram,
                  },
                  {
                    name: "Facebook",
                    icon: SiFacebook,
                  },
                  {
                    name: "LinkedIn",
                    icon: FaLinkedinIn,
                  },
                  {
                    name: "TikTok",
                    icon: SiTiktok,
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

            {/* ANALYTICS & SEO */}
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
                    02 — Analytics
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Data, Analytics & SEO
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Measure / Improve
                </span>
              </div>

              {/* ANALYTICS GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Google Analytics",
                    icon: SiGoogleanalytics,
                  },
                  {
                    name: "Google Search",
                    icon: SiGoogle,
                  },
                  {
                    name: "Google Tag Manager",
                    icon: SiGoogletagmanager,
                  },
                  {
                    name: "Semrush",
                    icon: SiSemrush,
                  },
                  {
                    name: "Ahrefs",
                    icon: Anchor,
                  },
                  {
                    name: "Hotjar",
                    icon: SiHotjar,
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

            {/* CONTENT & CREATIVE */}
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
                    03 — Creative & Content
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Content, Design & Workflow
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Create / Engage
                </span>
              </div>

              {/* CREATIVE GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    name: "Canva",
                    icon: Palette,
                  },
                  {
                    name: "Figma",
                    icon: SiFigma,
                  },
                  {
                    name: "Adobe",
                    icon: Layers,
                  },
                  {
                    name: "Mailchimp",
                    icon: SiMailchimp,
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
                Technology gives us the data, reach, and creative power to make
                smarter marketing decisions and continuously improve campaign
                performance.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Data / Creativity / Growth
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
          <div className="absolute top-[15%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[45%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-[170px]" />

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
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "76%", size: 3, delay: 1.1 },
            { left: "84%", top: "20%", size: 4, delay: 0.7 },
            { left: "92%", top: "68%", size: 3, delay: 1.8 },
            { left: "66%", top: "84%", size: 3, delay: 1.3 },
            { left: "48%", top: "12%", size: 3, delay: 0.5 },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Why DigiGrowtherz
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Marketing That
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Moves Your Business.
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
              We combine strategy, creative execution, data, and technology to
              build digital marketing systems that attract the right audience,
              strengthen your brand, and turn attention into measurable business
              growth.
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
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-lime-300/40 via-cyan-300/30 to-transparent lg:mt-20"
          />

          {/* VALUE GRID */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
            {[
              {
                number: "01",
                title: "Strategy First",
                description:
                  "Every campaign starts with a clear understanding of your audience, goals, market, and competitive landscape.",
                accent: "lime",
              },
              {
                number: "02",
                title: "Data Driven",
                description:
                  "We use performance data and meaningful insights to continuously improve campaigns and make smarter decisions.",
                accent: "cyan",
              },
              {
                number: "03",
                title: "Creative That Converts",
                description:
                  "From messaging to visual content, we create experiences designed to capture attention and encourage action.",
                accent: "lime",
              },
              {
                number: "04",
                title: "Built for Growth",
                description:
                  "Our approach focuses on sustainable digital growth instead of short-term activity without measurable outcomes.",
                accent: "cyan",
              },
            ].map((item, index) => (
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] lg:p-7"
              >
                {/* Accent glow */}
                <div
                  className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[70px] transition-opacity duration-300 group-hover:opacity-100 ${
                    item.accent === "lime"
                      ? "bg-lime-400/[0.08]"
                      : "bg-cyan-400/[0.08]"
                  }`}
                />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
                      item.accent === "lime" ? "text-lime-300" : "text-cyan-300"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`h-px w-10 ${
                      item.accent === "lime"
                        ? "bg-lime-300/30"
                        : "bg-cyan-300/30"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="relative mt-10">
                  <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div
                  className={`relative mt-8 h-px w-12 transition-all duration-300 group-hover:w-20 ${
                    item.accent === "lime"
                      ? "bg-gradient-to-r from-lime-300 to-transparent"
                      : "bg-gradient-to-r from-cyan-300 to-transparent"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* RESULTS STRIP */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] lg:mt-16"
          >
            <div className="grid md:grid-cols-3">
              {/* Result 1 */}
              <div className="relative border-b border-white/[0.08] p-6 md:border-r md:border-b-0 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                    Focus
                  </span>
                </div>

                <h4 className="font-space-grotesk mt-5 text-xl font-semibold text-white">
                  The Right Audience
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Reach people who are genuinely relevant to your products,
                  services, and business goals.
                </p>
              </div>

              {/* Result 2 */}
              <div className="relative border-b border-white/[0.08] p-6 md:border-r md:border-b-0 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                    Growth
                  </span>
                </div>

                <h4 className="font-space-grotesk mt-5 text-xl font-semibold text-white">
                  Measurable Progress
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Track meaningful performance indicators instead of relying on
                  vanity metrics alone.
                </p>
              </div>

              {/* Result 3 */}
              <div className="relative p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                    Partnership
                  </span>
                </div>

                <h4 className="font-space-grotesk mt-5 text-xl font-semibold text-white">
                  Long-Term Thinking
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  We build marketing foundations that can evolve as your
                  business grows and your goals change.
                </p>
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
                Digital marketing should do more than generate activity. It
                should create momentum, strengthen your brand, and contribute to
                real business growth.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Growth With Purpose
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
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Cyan glow */}
          <div className="absolute top-[-180px] left-[12%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Lime glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

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
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "74%", size: 3, delay: 1.1 },
            { left: "84%", top: "20%", size: 4, delay: 0.6 },
            { left: "92%", top: "68%", size: 3, delay: 1.7 },
            { left: "70%", top: "84%", size: 3, delay: 0.9 },
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
                  Digital Marketing?
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
              Everything you need to know about our digital marketing approach,
              strategy, reporting, and how we help businesses build stronger
              visibility and generate consistent growth.
            </motion.p>
          </div>

          {/* FAQ SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              {/* LEFT — SUPPORT PANEL */}
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
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10"
              >
                {/* Panel Glow */}
                <div className="absolute top-[-100px] right-[-100px] h-[240px] w-[240px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />

                <div className="relative">
                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                    01 — Need Help?
                  </span>

                  <h3 className="font-space-grotesk mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    Let&apos;s Make Your
                    <br />
                    Marketing Clear.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    Every business has different goals, audiences, and
                    challenges. Our strategies are built around your specific
                    needs rather than forcing your business into a predefined
                    marketing package.
                  </p>

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-white/[0.08]" />

                  {/* Highlights */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                      <div>
                        <p className="text-sm font-medium text-white">
                          Strategy First
                        </p>

                        <p className="mt-1 text-xs leading-6 text-slate-500">
                          We build campaigns around measurable business
                          objectives.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]" />

                      <div>
                        <p className="text-sm font-medium text-white">
                          Data Driven
                        </p>

                        <p className="mt-1 text-xs leading-6 text-slate-500">
                          Decisions are guided by performance data and real
                          results.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                      <div>
                        <p className="text-sm font-medium text-white">
                          Long-Term Growth
                        </p>

                        <p className="mt-1 text-xs leading-6 text-slate-500">
                          We focus on sustainable visibility instead of
                          short-term vanity metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT — FAQ LIST */}
              <div className="space-y-3">
                {[
                  {
                    question: "What digital marketing services do you provide?",
                    answer:
                      "We provide a range of digital marketing services including SEO, social media marketing, paid advertising, content strategy, analytics, and conversion-focused optimization. The exact combination depends on your business goals and target audience.",
                  },
                  {
                    question: "How do you create a digital marketing strategy?",
                    answer:
                      "We start by understanding your business, audience, competitors, current digital presence, and growth objectives. From there, we identify opportunities and build a strategy around the channels that can create the strongest measurable impact.",
                  },
                  {
                    question: "How long does it take to see results?",
                    answer:
                      "The timeline depends on the marketing channels involved. Paid campaigns can generate data and traffic relatively quickly, while SEO and organic growth generally require more time to build authority and momentum. We focus on measurable progress throughout the process.",
                  },
                  {
                    question: "Do you provide SEO services?",
                    answer:
                      "Yes. SEO can include technical optimization, on-page improvements, content strategy, keyword targeting, site structure, performance optimization, and ongoing analysis depending on the needs of your website.",
                  },
                  {
                    question: "Can you manage our social media marketing?",
                    answer:
                      "Yes. We can help with social media strategy, content planning, campaign execution, audience targeting, creative direction, and performance analysis across relevant platforms.",
                  },
                  {
                    question: "Do you provide marketing reports?",
                    answer:
                      "Yes. We believe performance should be transparent and measurable. Reporting can include key campaign metrics, traffic, engagement, conversions, rankings, and other KPIs relevant to your objectives.",
                  },
                  {
                    question:
                      "Can you work with our existing website and marketing setup?",
                    answer:
                      "Absolutely. We can work with your existing website, analytics setup, advertising accounts, social platforms, and other marketing infrastructure. We first assess what is already working and where improvements can be made.",
                  },
                  {
                    question: "How do we get started?",
                    answer:
                      "Simply get in touch with us and tell us about your business, goals, and current challenges. We can then discuss your requirements and determine which digital marketing approach makes the most sense for your business.",
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 open:border-cyan-300/20 open:bg-white/[0.04]"
                  >
                    {/* Question */}
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                      <span className="text-sm leading-6 font-medium text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                        {faq.question}
                      </span>

                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                        <span className="absolute h-px w-3 bg-cyan-300 transition-transform duration-300" />

                        <span className="absolute h-3 w-px bg-cyan-300 transition-transform duration-300 group-open:rotate-90" />
                      </span>
                    </summary>

                    {/* Answer */}
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="h-px w-full bg-white/[0.06]" />

                      <p className="pt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.details>
                ))}
              </div>
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
                Still have questions? We&apos;re happy to discuss your goals and
                explain how a focused digital marketing strategy can help your
                business grow.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Let&apos;s Talk
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

          {/* Center cyan glow */}
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[15%] -left-[220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[170px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[170px]" />

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#070B12_82%)]" />

          {/* Floating particles */}
          {[
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "72%", size: 3, delay: 1.2 },
            { left: "82%", top: "18%", size: 4, delay: 0.6 },
            { left: "91%", top: "64%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "48%", top: "12%", size: 3, delay: 1.5 },
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* CARD GLOW */}
            <div className="absolute top-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

            <div className="absolute right-[-100px] bottom-[-180px] h-[400px] w-[400px] rounded-full bg-lime-400/[0.06] blur-[130px]" />

            {/* CARD GRID */}
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
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              {/* LEFT */}
              <div>
                {/* Badge */}
                <motion.div
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
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                    Ready To Grow?
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
                  className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  Turn Your Marketing
                  <br />
                  Into{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Real Growth.
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
                  Whether you need more visibility, stronger engagement, better
                  search rankings, or a marketing strategy built around your
                  business goals, we can help turn your digital presence into a
                  growth engine.
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
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
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
                    Talk To Our Team
                  </motion.a>
                </motion.div>
              </div>

              {/* RIGHT — GROWTH VISUAL */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                }}
                className="relative flex min-h-[360px] items-center justify-center"
              >
                {/* Ambient Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[300px] w-[300px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />
                </div>

                {/* Growth Ring */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-cyan-300/20"
                />

                {/* Main Visual */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-8 rounded-[30px] border border-lime-300/10 bg-gradient-to-br from-lime-300/[0.08] to-cyan-300/[0.08]" />

                  {/* Growth Graph */}
                  <div className="absolute inset-x-10 bottom-12 h-[90px]">
                    <svg
                      viewBox="0 0 180 90"
                      className="h-full w-full overflow-visible"
                      fill="none"
                    >
                      <motion.path
                        d="M5 78 C30 72, 38 65, 55 68 C75 72, 84 45, 103 50 C120 54, 128 27, 145 34 C158 39, 165 18, 175 8"
                        stroke="url(#growthGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{
                          pathLength: 0,
                        }}
                        whileInView={{
                          pathLength: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.8,
                          delay: 0.4,
                        }}
                      />

                      <defs>
                        <linearGradient
                          id="growthGradient"
                          x1="0"
                          y1="90"
                          x2="180"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#A3E635" />
                          <stop offset="1" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Center Indicator */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute top-8 right-8 h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.9)]"
                  />

                  <div className="relative mt-24 text-center">
                    <p className="font-mono text-[9px] tracking-[0.25em] text-slate-500 uppercase">
                      Growth
                    </p>

                    <p className="font-space-grotesk mt-1 text-xl font-semibold text-white">
                      In Motion
                    </p>
                  </div>
                </motion.div>

                {/* Floating Metrics */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-0 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:left-4"
                >
                  <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                    Visibility
                  </p>

                  <p className="mt-1 text-sm font-semibold text-cyan-300">
                    Growing
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute right-0 bottom-8 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:right-4"
                >
                  <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                    Strategy
                  </p>

                  <p className="mt-1 text-sm font-semibold text-lime-300">
                    Data Driven
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

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
                Your next stage of growth starts with the right strategy, the
                right channels, and a team focused on measurable outcomes.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Grow With Purpose
                </span>
              </div>
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
