"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Building2,
  Check,
  CheckCircle2,
  Code2,
  CreditCard,
  Layers3,
  MapPin,
  PlugZap,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiFlutter,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpo,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiGraphql,
  SiVercel,
  SiGithub,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function MobileDevelopmentServicePage() {
  return (
    <>
      {/* MOBILE DEVELOPMENT — HERO SECTION */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#08151B] to-[#071018]" />

          {/* Central cyan glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[35%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[160px]" />

          {/* Right cyan glow */}
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

          {/* Floating particles */}
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

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
                <Smartphone className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-xs tracking-[0.28em] text-cyan-300 uppercase">
                  Mobile Development
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
                Mobile Apps Built to {/* <br className="hidden md:block" /> */}
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Move Your Business
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
                We design and develop fast, intuitive, and scalable mobile
                applications that deliver powerful experiences across Android
                and iOS.
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
                  Start Your App
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
                  <h4 className="text-2xl font-bold text-white">iOS</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Apple Applications
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Android</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Native Experiences
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Cross</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Platform Solutions
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — MOBILE APP VISUAL */}
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

              {/* Floating Development Badge */}
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
                      Native & Cross-Platform
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* PHONE VISUAL */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex w-full max-w-[560px] items-center justify-center"
              >
                {/* Back Phone */}
                <div className="absolute -right-2 hidden h-[500px] w-[250px] rotate-[12deg] rounded-[42px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:block" />

                {/* Main Phone */}
                <div className="relative z-10 h-[540px] w-[270px] rounded-[44px] border border-white/10 bg-white/[0.06] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
                  {/* Phone Frame */}
                  <div className="relative h-full overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#081219]">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-6 pt-5">
                      <span className="font-mono text-[9px] text-slate-500">
                        9:41
                      </span>

                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-3 rounded-sm bg-white/30" />
                        <div className="h-2 w-2 rounded-full bg-white/30" />
                        <div className="h-2 w-4 rounded-sm border border-white/20" />
                      </div>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80" />

                    {/* App Content */}
                    <div className="relative mt-8 h-full overflow-hidden bg-gradient-to-b from-[#0B1820] via-[#09151B] to-[#071018] px-5 pt-7">
                      {/* App Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 uppercase">
                            Your App
                          </p>

                          <h3 className="font-space-grotesk mt-1 text-xl font-semibold text-white">
                            Welcome Back
                          </h3>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                          <div className="h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                        </div>
                      </div>

                      {/* App Hero Card */}
                      <div className="relative mt-7 overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.10] to-lime-300/[0.06] p-5">
                        <div className="absolute top-[-50px] right-[-40px] h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

                        <p className="relative font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
                          Performance
                        </p>

                        <div className="relative mt-2 flex items-end justify-between">
                          <div>
                            <p className="font-space-grotesk text-3xl font-bold text-white">
                              98%
                            </p>

                            <p className="mt-1 text-[9px] text-slate-500">
                              App experience
                            </p>
                          </div>

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/10">
                            <Sparkles className="h-5 w-5 text-lime-300" />
                          </div>
                        </div>

                        {/* Mini Chart */}
                        <div className="mt-5 flex h-12 items-end gap-1.5">
                          {[30, 45, 38, 55, 48, 72, 65, 82, 76, 94].map(
                            (height, index) => (
                              <motion.div
                                key={index}
                                initial={{
                                  height: 0,
                                }}
                                animate={{
                                  height: `${height}%`,
                                }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.5 + index * 0.05,
                                }}
                                className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-400/30 to-lime-300/70"
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* App Cards */}
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                          <div className="h-8 w-8 rounded-xl bg-cyan-300/10" />

                          <div className="mt-4 h-2 w-16 rounded-full bg-white/20" />

                          <div className="mt-2 h-1.5 w-11 rounded-full bg-white/10" />
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                          <div className="h-8 w-8 rounded-xl bg-lime-300/10" />

                          <div className="mt-4 h-2 w-14 rounded-full bg-white/20" />

                          <div className="mt-2 h-1.5 w-10 rounded-full bg-white/10" />
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute right-5 bottom-7 left-5 flex items-center justify-around rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 backdrop-blur-xl">
                        <div className="h-2 w-2 rounded-full bg-cyan-300" />

                        <div className="h-2 w-2 rounded-full bg-white/20" />

                        <div className="h-2 w-2 rounded-full bg-white/20" />

                        <div className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
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
                  className="absolute right-0 bottom-10 z-20 rounded-2xl border border-lime-300/15 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:-right-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                      <Smartphone className="h-5 w-5 text-lime-300" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Experience
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Built for Mobile
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
                  className="absolute top-14 right-14 h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_20px_#A3E635]"
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
                  className="absolute bottom-20 left-14 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22D3EE]"
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#0A1018] to-[#070B12]" />

          {/* Center Yellow Glow */}
          <div className="absolute top-[10%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-400/[0.055] blur-[180px]" />

          {/* Left Cyan Glow */}
          <div className="absolute top-[35%] -left-[220px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.045] blur-[170px]" />

          {/* Bottom Yellow Glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[480px] w-[480px] rounded-full bg-yellow-400/[0.05] blur-[160px]" />

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
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "22%", top: "76%", size: 3, delay: 1.1 },
            { left: "78%", top: "18%", size: 4, delay: 0.5 },
            { left: "91%", top: "55%", size: 3, delay: 1.7 },
            { left: "66%", top: "82%", size: 3, delay: 0.8 },
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
              className="absolute rounded-full bg-yellow-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(250,204,21,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          {/* SECTION HEADER */}
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-yellow-300 uppercase sm:text-[11px]">
                  Overview
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Mobile Experiences
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Built for Real Users.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT */}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="lg:justify-self-end"
            >
              <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                We design and develop mobile applications that combine intuitive
                user experiences, reliable performance, and scalable
                architecture — helping businesses turn ideas into powerful
                mobile products.
              </p>
            </motion.div>
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
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-yellow-300/40 via-white/[0.08] to-transparent"
          />

          {/* OVERVIEW CONTENT */}
          <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* MAIN OVERVIEW CARD */}
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
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:p-10"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 h-[280px] w-[280px] rounded-full bg-yellow-400/[0.055] blur-[100px] transition-opacity duration-500 group-hover:bg-yellow-400/[0.08]" />

              {/* Top Accent */}
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08]">
                  <Smartphone className="h-6 w-6 text-yellow-300" />
                </div>

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-600 uppercase">
                  Mobile First
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-10 max-w-3xl">
                <h3 className="font-space-grotesk text-2xl font-semibold text-white sm:text-3xl">
                  From concept to a complete mobile product.
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  Whether you need a native mobile application or a
                  cross-platform solution, we focus on creating products that
                  feel natural to use, perform reliably, and remain easy to
                  maintain as your business grows.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  Every application is planned around your users, business
                  goals, technical requirements, and long-term product roadmap —
                  not simply the technology itself.
                </p>
              </div>

              {/* Bottom Line */}
              <div className="relative mt-10 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-yellow-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Strategy / UX / Engineering
                </span>
              </div>
            </motion.div>

            {/* RIGHT BENEFITS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  icon: Smartphone,
                  title: "Native Experiences",
                  description:
                    "Mobile interfaces designed around the way people naturally use their devices.",
                },
                {
                  icon: Layers3,
                  title: "Scalable Architecture",
                  description:
                    "Clean technical foundations that can evolve with your users and business.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliable Performance",
                  description:
                    "Fast, stable applications built with performance and reliability in mind.",
                },
                {
                  icon: Rocket,
                  title: "Ready to Grow",
                  description:
                    "Products structured to support future features, integrations, and expansion.",
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
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-yellow-300/20 hover:bg-white/[0.045]"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/[0.035] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex gap-4">
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                        <Icon className="h-5 w-5 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="font-space-grotesk text-base font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CAPABILITIES */}
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
            className="mt-16 border-t border-white/[0.08] pt-8 lg:mt-20"
          >
            {/* Capability Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-yellow-300 uppercase">
                  What We Build
                </p>

                <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Mobile Solutions for Different Needs
                </h3>
              </div>

              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
                Design / Build / Scale
              </span>
            </div>

            {/* Capability List */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Android Applications",
                "iOS Applications",
                "Cross-Platform Solutions",
                "Business Applications",
                "E-Commerce Applications",
                "API & Backend Integration",
              ].map((item, index) => (
                <motion.div
                  key={item}
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
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-300" />

                  <span className="text-sm text-slate-400">{item}</span>
                </motion.div>
              ))}
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
                A great mobile application is more than a collection of
                features. We build experiences that are useful, intuitive,
                reliable, and ready for what comes next.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-yellow-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built for Mobile
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent" />
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#091118] to-[#070B12]" />

          {/* Top Yellow Glow */}
          <div className="absolute top-[-180px] left-[18%] h-[520px] w-[520px] rounded-full bg-yellow-400/[0.055] blur-[180px]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[38%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[190px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[170px]" />

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
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "19%", top: "76%", size: 3, delay: 1.1 },
            { left: "81%", top: "19%", size: 4, delay: 0.5 },
            { left: "91%", top: "63%", size: 3, delay: 1.7 },
            { left: "67%", top: "84%", size: 3, delay: 0.8 },
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
              className="absolute rounded-full bg-yellow-300"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 16px rgba(250,204,21,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[130px]" />

        {/* CONTENT */}
        <div className="mx-autos relative z-10 px-4">
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-yellow-300 uppercase sm:text-[11px]">
                  Solutions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Mobile Solutions
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Built Around Your Goals.
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              From customer-facing applications to internal business tools, we
              build mobile solutions around the way your users work, interact,
              and engage with your business.
            </motion.p>
          </div>

          {/* SOLUTION GRID */}
          <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3">
            {[
              {
                number: "01",
                icon: Smartphone,
                title: "Customer Mobile Apps",
                description:
                  "Create polished mobile experiences that help customers discover your products, access services, interact with your brand, and stay connected wherever they are.",
                features: [
                  "Customer-facing applications",
                  "Account & profile experiences",
                  "Push notifications",
                  "Mobile-first user journeys",
                ],
                accent: "yellow",
              },
              {
                number: "02",
                icon: Building2,
                title: "Business Applications",
                description:
                  "Turn internal processes into streamlined mobile workflows with applications designed to help teams work faster and access important information on the go.",
                features: [
                  "Internal business tools",
                  "Team workflows",
                  "Data & dashboard access",
                  "Role-based experiences",
                ],
                accent: "cyan",
              },
              {
                number: "03",
                icon: ShoppingBag,
                title: "E-Commerce Apps",
                description:
                  "Bring your online store directly to your customers with smooth shopping experiences designed for browsing, purchasing, engagement, and retention.",
                features: [
                  "Product browsing",
                  "Mobile checkout",
                  "Customer accounts",
                  "Orders & notifications",
                ],
                accent: "lime",
              },
            ].map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
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
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:bg-white/[0.045] sm:p-8"
                >
                  {/* Card Glow */}
                  <div
                    className={`absolute -top-32 -right-32 h-[280px] w-[280px] rounded-full blur-[100px] transition-opacity duration-500 group-hover:opacity-100 ${
                      solution.accent === "yellow"
                        ? "bg-yellow-400/[0.06]"
                        : solution.accent === "cyan"
                          ? "bg-cyan-400/[0.06]"
                          : "bg-lime-400/[0.06]"
                    }`}
                  />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-slate-600">
                      {solution.number}
                    </span>

                    <span className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="relative mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.07]">
                    <Icon className="h-6 w-6 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Heading */}
                  <div className="relative mt-8">
                    <h3 className="font-space-grotesk text-2xl font-semibold text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative mt-8 space-y-3">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/[0.05]">
                          <Check className="h-3 w-3 text-yellow-300" />
                        </span>

                        <span className="text-sm text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Label */}
                  <div className="relative mt-auto pt-10">
                    <div className="h-px w-full bg-white/[0.07]" />

                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                        Mobile Development
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-yellow-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ADDITIONAL SOLUTIONS */}
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
            className="mt-16 border-t border-white/[0.08] pt-8 lg:mt-20"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  More Possibilities
                </p>

                <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Built for Different Mobile Needs
                </h3>
              </div>

              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
                Flexible / Scalable
              </span>
            </div>

            {/* Additional Grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MapPin,
                  title: "Location-Based Apps",
                },
                {
                  icon: Bell,
                  title: "Real-Time Notifications",
                },
                {
                  icon: CreditCard,
                  title: "Payment Integration",
                },
                {
                  icon: PlugZap,
                  title: "API Integrations",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                    className="group flex min-h-[110px] items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]"
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                      <Icon className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
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
                Whatever your mobile idea looks like, we focus on turning it
                into a reliable product that delivers real value to your users
                and your business.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-yellow-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built Around You
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent" />
      </section>

      {/* OUR PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top cyan glow */}
          <div className="absolute top-[-220px] left-[18%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center lime glow */}
          <div className="absolute top-[38%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-400/[0.055] blur-[180px]" />

          {/* Bottom cyan glow */}
          <div className="absolute right-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.06] blur-[180px]" />

          {/* Process grid */}
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
            { left: "8%", top: "18%", size: 4, delay: 0 },
            { left: "23%", top: "74%", size: 3, delay: 1.2 },
            { left: "52%", top: "15%", size: 3, delay: 0.7 },
            { left: "78%", top: "28%", size: 4, delay: 1.6 },
            { left: "91%", top: "70%", size: 3, delay: 0.9 },
            { left: "64%", top: "82%", size: 3, delay: 1.8 },
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
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                From Idea
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  To App Store.
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
              We follow a structured development process that transforms your
              idea into a polished mobile experience — from planning and
              interface design to development, testing, and launch.
            </motion.p>
          </div>

          {/* PROCESS SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* PROCESS GRID */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We understand your idea, users, goals, features, and technical requirements before development begins.",
                  label: "Understand",
                  accent: "lime",
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We define the app structure, user journey, technology stack, and development roadmap.",
                  label: "Plan",
                  accent: "cyan",
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "We create intuitive interfaces focused on usability, consistency, and a smooth mobile experience.",
                  label: "Create",
                  accent: "lime",
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "We build the application with clean architecture, responsive interfaces, and scalable technology.",
                  label: "Build",
                  accent: "cyan",
                },
                {
                  number: "05",
                  title: "Testing & Launch",
                  description:
                    "We test, refine, prepare, and launch your application so it is ready for real users.",
                  label: "Deliver",
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] lg:min-h-[300px]"
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${
                      step.accent === "lime"
                        ? "from-lime-300/[0.045]"
                        : "from-cyan-300/[0.045]"
                    } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Step number */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-[0.25em] uppercase ${
                        step.accent === "lime"
                          ? "text-lime-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-lime-300 group-hover:shadow-[0_0_12px_rgba(163,230,53,0.7)]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-space-grotesk relative mt-8 text-xl font-semibold text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-5 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                  {/* Bottom label */}
                  <div className="relative mt-8 flex items-center gap-3">
                    <span
                      className={`h-px w-7 ${
                        step.accent === "lime"
                          ? "bg-gradient-to-r from-lime-300 to-cyan-300"
                          : "bg-gradient-to-r from-cyan-300 to-lime-300"
                      }`}
                    />

                    <span className="font-mono text-[9px] tracking-[0.22em] text-slate-500 uppercase">
                      {step.label}
                    </span>
                  </div>

                  {/* Connector */}
                  {index < 4 && (
                    <div className="absolute top-1/2 -right-4 z-20 hidden h-px w-8 bg-gradient-to-r from-cyan-300/20 to-transparent lg:block" />
                  )}
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
                Every stage is built around clarity, quality, and measurable
                progress — keeping your project moving from the first idea to a
                production-ready mobile application.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built Step By Step
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
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top cyan glow */}
          <div className="absolute top-[-220px] right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Center lime glow */}
          <div className="absolute top-[42%] left-[15%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.055] blur-[180px]" />

          {/* Bottom cyan glow */}
          <div className="absolute right-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.06] blur-[180px]" />

          {/* Technology grid */}
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
            { left: "8%", top: "18%", size: 4, delay: 0 },
            { left: "19%", top: "70%", size: 3, delay: 1.2 },
            { left: "48%", top: "14%", size: 3, delay: 0.7 },
            { left: "79%", top: "24%", size: 4, delay: 1.6 },
            { left: "91%", top: "68%", size: 3, delay: 0.9 },
            { left: "66%", top: "82%", size: 3, delay: 1.8 },
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
                  Technologies
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                The Technology
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Behind Your App.
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
              We use modern mobile technologies and proven development
              frameworks to create applications that are fast, reliable,
              scalable, and ready to evolve as your business grows.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* MOBILE DEVELOPMENT */}
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
                    01 — Mobile Development
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Mobile App Technologies
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
                    name: "React Native",
                    icon: SiReact,
                  },
                  {
                    name: "Flutter",
                    icon: SiFlutter,
                  },
                  {
                    name: "TypeScript",
                    icon: SiTypescript,
                  },
                  {
                    name: "JavaScript",
                    icon: SiJavascript,
                  },
                  {
                    name: "Node.js",
                    icon: SiNodedotjs,
                  },
                  {
                    name: "Expo",
                    icon: SiExpo,
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

            {/* BACKEND & DATABASE */}
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
                    02 — Backend & Data
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Backend, APIs & Databases
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Connect / Secure
                </span>
              </div>

              {/* BACKEND GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Node.js",
                    icon: SiNodedotjs,
                  },
                  {
                    name: "MongoDB",
                    icon: SiMongodb,
                  },
                  {
                    name: "Firebase",
                    icon: SiFirebase,
                  },
                  {
                    name: "Supabase",
                    icon: SiSupabase,
                  },
                  {
                    name: "PostgreSQL",
                    icon: SiPostgresql,
                  },
                  {
                    name: "GraphQL",
                    icon: SiGraphql,
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

            {/* CLOUD & TOOLING */}
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
                    03 — Cloud & Workflow
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Deployment & Development Tools
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Deploy / Ship
                </span>
              </div>

              {/* TOOLING GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Vercel",
                    icon: SiVercel,
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
                    name: "Docker",
                    icon: SiDocker,
                  },
                  {
                    name: "Figma",
                    icon: SiFigma,
                  },
                  {
                    name: "Firebase",
                    icon: SiFirebase,
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
                The technology is chosen around your product — not the other way
                around. We use the right tools to create mobile experiences that
                are maintainable, scalable, and ready for what comes next.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built For Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRANSITION GLOW */}
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* WHY DIGROWTHERZ */}
      <section
        id="why-digrowtherz"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Central cyan glow */}
          <div className="absolute top-[8%] left-[50%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[180px]" />

          {/* Left lime glow */}
          <div className="absolute top-[38%] -left-[220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[170px]" />

          {/* Right cyan glow */}
          <div className="absolute right-[-220px] bottom-[8%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[170px]" />

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
            { left: "18%", top: "68%", size: 3, delay: 1.1 },
            { left: "83%", top: "20%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.8 },
            { left: "67%", top: "84%", size: 3, delay: 0.9 },
            { left: "48%", top: "12%", size: 3, delay: 1.5 },
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
                  Just An App.
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
              We build mobile experiences around real business goals — combining
              thoughtful product strategy, polished interfaces, reliable
              engineering, and scalable technology to create apps people
              actually want to use.
            </motion.p>
          </div>

          {/* VALUE SYSTEM */}
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "User First",
                  description:
                    "Every screen is designed around clarity, usability, and the people using your product.",
                  accent: "cyan",
                },
                {
                  number: "02",
                  title: "Built To Scale",
                  description:
                    "We create strong foundations that can support new features, users, and business growth.",
                  accent: "lime",
                },
                {
                  number: "03",
                  title: "Performance",
                  description:
                    "Fast interactions, efficient architecture, and responsive experiences across devices.",
                  accent: "cyan",
                },
                {
                  number: "04",
                  title: "Business Focused",
                  description:
                    "Technology serves the outcome — whether that means engagement, revenue, or operational efficiency.",
                  accent: "lime",
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
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative min-h-[230px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:bg-white/[0.045]"
                >
                  {/* Card Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      item.accent === "lime"
                        ? "from-lime-300/[0.06]"
                        : "from-cyan-300/[0.06]"
                    } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-[0.2em] ${
                        item.accent === "lime"
                          ? "text-lime-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.accent === "lime"
                          ? "bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)]"
                          : "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]"
                      }`}
                    />
                  </div>

                  {/* Divider */}
                  <div className="relative mt-6 h-px w-full bg-white/[0.08]" />

                  {/* Content */}
                  <div className="relative mt-7">
                    <h3 className="font-space-grotesk text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FEATURED STATEMENT */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] lg:mt-16"
          >
            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Background Glow */}
              <div className="absolute top-[-180px] left-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.07] blur-[150px]" />

              {/* LEFT */}
              <div className="relative p-7 sm:p-10 lg:p-12">
                <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  A Better Development Partner
                </p>

                <h3 className="font-space-grotesk mt-5 max-w-2xl text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-4xl">
                  From the first idea to the next version, we build with the
                  bigger picture in mind.
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Your app should not only work today. It should be ready for
                  tomorrow. Our approach combines clean engineering, flexible
                  architecture, and thoughtful product decisions so your mobile
                  experience can continue evolving alongside your business.
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative flex items-center border-t border-white/[0.08] p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
                <div className="w-full">
                  {/* Mini Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                      <p className="font-space-grotesk text-3xl font-bold text-white">
                        UX
                      </p>

                      <p className="mt-2 font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                        User Focused
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                      <p className="font-space-grotesk text-3xl font-bold text-white">
                        API
                      </p>

                      <p className="mt-2 font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                        Connected
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                      <p className="font-space-grotesk text-3xl font-bold text-white">
                        ∞
                      </p>

                      <p className="mt-2 font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                        Scalable
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                      <p className="font-space-grotesk text-3xl font-bold text-white">
                        24/7
                      </p>

                      <p className="mt-2 font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>
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
                We do not just build mobile applications. We build digital
                products designed to create lasting value for the people and
                businesses behind them.
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
          <div className="absolute top-[-180px] left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

          {/* Lime glow */}
          <div className="absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

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
            { left: "20%", top: "76%", size: 3, delay: 1.1 },
            { left: "78%", top: "18%", size: 4, delay: 0.6 },
            { left: "91%", top: "68%", size: 3, delay: 1.7 },
            { left: "64%", top: "84%", size: 3, delay: 0.9 },
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
                Mobile App
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Development FAQ.
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
              Have questions about building a mobile application? Here are
              answers to some of the most common questions we receive about our
              mobile development process.
            </motion.p>
          </div>

          {/* FAQ LIST */}
          <div className="mt-16 lg:mt-20">
            <div className="border-t border-white/10">
              {[
                {
                  question: "What types of mobile apps do you develop?",
                  answer:
                    "We develop custom mobile applications for startups, businesses, and established brands. Depending on your requirements, we can build customer-facing apps, business applications, marketplace platforms, booking systems, eCommerce apps, dashboards, and other custom mobile experiences.",
                },
                {
                  question: "Do you develop for both iOS and Android?",
                  answer:
                    "Yes. We can build mobile applications for both iOS and Android. We select the development approach based on your project requirements, performance expectations, target audience, and long-term product goals.",
                },
                {
                  question: "Should I build a native or cross-platform app?",
                  answer:
                    "It depends on your product. Cross-platform development can provide an efficient way to launch on multiple platforms, while native development may be preferable when a project requires highly platform-specific functionality or optimization. We help determine the right approach before development begins.",
                },
                {
                  question:
                    "Can you turn my existing website into a mobile app?",
                  answer:
                    "Yes. If you already have a website or web-based platform, we can evaluate its functionality and determine the best approach for creating a dedicated mobile experience around your existing product.",
                },
                {
                  question: "Can you integrate APIs and third-party services?",
                  answer:
                    "Yes. Mobile applications can be connected with existing APIs, databases, payment systems, authentication services, maps, notifications, analytics, and other third-party services required by your product.",
                },
                {
                  question: "How long does mobile app development take?",
                  answer:
                    "The timeline depends on the scope, number of features, design requirements, integrations, and platforms involved. After understanding your requirements, we can provide a more realistic development timeline for your specific project.",
                },
                {
                  question: "Do you provide UI/UX design for mobile apps?",
                  answer:
                    "Yes. We can design the mobile experience before development, focusing on intuitive navigation, clear user flows, responsive layouts, and an interface that aligns with your brand and product goals.",
                },
                {
                  question: "Do you provide support after the app is launched?",
                  answer:
                    "Yes. We can continue supporting your application after launch with maintenance, improvements, bug fixes, performance optimization, and future feature development as your product grows.",
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
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="group border-b border-white/10"
                >
                  {/* QUESTION */}
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 sm:py-7 [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start gap-5">
                      <span className="hidden pt-1 font-mono text-[10px] tracking-[0.2em] text-cyan-300/50 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-space-grotesk text-base leading-7 font-medium text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    {/* TOGGLE */}
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] transition-all duration-300 group-open:border-cyan-300/30 group-open:bg-cyan-300/[0.08]">
                      <span className="absolute h-px w-3 bg-slate-400 transition-colors duration-300 group-open:bg-cyan-300 group-hover:bg-cyan-300" />

                      <span className="absolute h-3 w-px bg-slate-400 transition-all duration-300 group-open:rotate-90 group-open:opacity-0 group-hover:bg-cyan-300" />
                    </span>
                  </summary>

                  {/* ANSWER */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-0 sm:pl-12">
                        <p className="text-sm leading-7 text-slate-400 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>

          {/* BOTTOM NOTE */}
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
                Still have questions about your mobile application? Let&apos;s
                discuss your idea, requirements, and the best technical approach
                for bringing it to life.
              </p>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white transition-colors duration-300 hover:text-cyan-300"
              >
                Talk About Your App
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300 transition-all duration-300 group-hover:w-12" />
              </a>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#071018] via-[#09151A] to-[#070B12]" />

          {/* Main cyan glow */}
          <div className="absolute top-[-260px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.09] blur-[190px]" />

          {/* Lime glow */}
          <div className="absolute bottom-[-280px] left-[8%] h-[560px] w-[560px] rounded-full bg-lime-400/[0.07] blur-[180px]" />

          {/* Right glow */}
          <div className="absolute top-[35%] right-[-240px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#070B12_82%)]" />

          {/* Floating particles */}
          {[
            { left: "10%", top: "24%", size: 4, delay: 0 },
            { left: "22%", top: "72%", size: 3, delay: 1.1 },
            { left: "81%", top: "20%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.8 },
            { left: "68%", top: "82%", size: 3, delay: 0.9 },
            { left: "48%", top: "12%", size: 3, delay: 1.4 },
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
                boxShadow: "0 0 18px rgba(163,230,53,0.55)",
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 h-[240px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-4">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* INNER GLOW */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[130px]" />

            {/* Decorative lines */}
            <div className="pointer-events-none absolute top-0 left-1/2 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

            <div className="pointer-events-none absolute right-0 bottom-0 h-px w-[45%] bg-gradient-to-l from-transparent via-lime-300/20 to-transparent" />

            {/* CONTENT GRID */}
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              {/* LEFT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
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
                    Start Your App
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-space-grotesk mt-6 max-w-3xl text-4xl leading-[1.06] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Have an App
                  <br />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Idea in Mind?
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Turn your idea into a powerful mobile experience built around
                  your users, your business goals, and your long-term vision.
                  Let&apos;s create an app that is ready to launch, scale, and
                  grow with your business.
                </p>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]"
                  >
                    Start Your Project
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </motion.a>

                  {/* Secondary */}
                  <motion.a
                    href="/contact"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
                  >
                    Discuss Your Idea
                  </motion.a>
                </div>
              </motion.div>

              {/* RIGHT — APP VISUAL */}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="relative flex min-h-[360px] items-center justify-center"
              >
                {/* Ambient glow */}
                <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />

                {/* Phone */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 h-[330px] w-[175px] rounded-[32px] border border-white/15 bg-[#0B151B] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                >
                  {/* Screen */}
                  <div className="relative h-full overflow-hidden rounded-[25px] border border-white/[0.07] bg-gradient-to-b from-[#101D24] to-[#081116]">
                    {/* Status */}
                    <div className="flex items-center justify-between px-5 pt-4">
                      <span className="font-mono text-[8px] text-slate-500">
                        09:41
                      </span>

                      <div className="flex gap-1">
                        <span className="h-1.5 w-3 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-300/70" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-5 pt-8">
                      <div className="h-2 w-16 rounded-full bg-cyan-300/40" />

                      <div className="mt-4 space-y-2">
                        <div className="h-5 w-[85%] rounded-md bg-white/90" />
                        <div className="h-5 w-[60%] rounded-md bg-white/60" />
                      </div>
                    </div>

                    {/* Main card */}
                    <div className="mx-5 mt-7 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.05] p-4">
                      <div className="flex items-center justify-between">
                        <div className="h-8 w-8 rounded-xl bg-lime-300/15" />

                        <div className="h-2 w-12 rounded-full bg-white/10" />
                      </div>

                      <div className="mt-5 h-3 w-20 rounded-full bg-white/20" />

                      <div className="mt-3 h-2 w-full rounded-full bg-white/[0.07]" />

                      <div className="mt-2 h-2 w-[75%] rounded-full bg-white/[0.07]" />
                    </div>

                    {/* App blocks */}
                    <div className="mt-5 grid grid-cols-2 gap-3 px-5">
                      <div className="h-20 rounded-2xl border border-white/[0.07] bg-white/[0.025]" />

                      <div className="h-20 rounded-2xl border border-white/[0.07] bg-white/[0.025]" />
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute right-4 bottom-4 left-4 flex h-11 items-center justify-around rounded-2xl border border-white/[0.07] bg-white/[0.04]">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating platform badge */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-[4%] z-20 rounded-2xl border border-cyan-300/15 bg-white/[0.07] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:right-[8%]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Mobile
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        iOS + Android
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating status badge */}
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
                  className="absolute bottom-8 left-[2%] z-20 rounded-2xl border border-lime-300/15 bg-white/[0.07] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:left-[7%]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                      <span className="h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.8)]" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Product
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Built to Scale
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating nodes */}
                <motion.div
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [1, 1.35, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-[18%] left-[12%] h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.8)]"
                />

                <motion.div
                  animate={{
                    opacity: [1, 0.35, 1],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute right-[10%] bottom-[18%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]"
                />
              </motion.div>
            </div>
          </div>
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
