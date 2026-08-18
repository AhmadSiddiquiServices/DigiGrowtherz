"use client";

import {
  ArrowRight,
  ShoppingCart,
  Store,
  TrendingUp,
  ArrowUpRight,
  ImageIcon,
  Layers3,
  Search,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  SiEtsy,
  SiEbay,
  SiFacebook,
  SiPinterest,
  SiInstagram,
  SiGoogle,
  SiShopify,
  SiWordpress,
  SiGooglesheets,
  SiPython,
  SiVercel,
  SiAlibabadotcom,
} from "react-icons/si";
import { motion } from "framer-motion";
import { BsAmazon, BsFileExcel, BsFileExcelFill } from "react-icons/bs";
import { TbBrandWalmart } from "react-icons/tb";

export default function eCommerceServicePage() {
  function SolutionCard({
    number,
    label,
    title,
    description,
    items,
    accent,
  }: {
    number: string;
    label: string;
    title: string;
    description: string;
    items: string[];
    accent: "cyan" | "lime";
  }) {
    const isCyan = accent === "cyan";

    return (
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -5,
        }}
        className={`group relative overflow-hidden rounded-3xl border ${
          isCyan ? "border-cyan-300/[0.10]" : "border-lime-300/[0.10]"
        } bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 ${
          isCyan
            ? "hover:border-cyan-300/20 hover:bg-cyan-300/[0.025]"
            : "hover:border-lime-300/20 hover:bg-lime-300/[0.025]"
        }`}
      >
        {/* Hover Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            isCyan
              ? "from-cyan-300/[0.05] via-transparent to-transparent"
              : "from-lime-300/[0.05] via-transparent to-transparent"
          } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Top Line */}
        <div
          className={`absolute top-0 left-8 h-px w-20 bg-gradient-to-r ${
            isCyan
              ? "from-cyan-300/60 to-transparent"
              : "from-lime-300/60 to-transparent"
          }`}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className={`font-mono text-[10px] tracking-[0.24em] uppercase ${
                  isCyan ? "text-cyan-300" : "text-lime-300"
                }`}
              >
                {number} — {label}
              </p>

              <h3 className="font-space-grotesk mt-3 text-xl leading-tight font-semibold text-white sm:text-2xl">
                {title}
              </h3>
            </div>

            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[10px] ${
                isCyan
                  ? "border-cyan-300/10 bg-cyan-300/[0.05] text-cyan-300"
                  : "border-lime-300/10 bg-lime-300/[0.05] text-lime-300"
              }`}
            >
              {number}
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-slate-500">{description}</p>

          {/* Items */}
          <div className="mt-6 grid gap-2">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-white/[0.06] pt-2.5"
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isCyan
                      ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.7)]"
                      : "bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.7)]"
                  }`}
                />

                <span className="text-xs leading-5 text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  function ProcessStep({
    number,
    label,
    title,
    description,
    items,
    accent,
  }: {
    number: string;
    label: string;
    title: string;
    description: string;
    items: string[];
    accent: "cyan" | "lime";
  }) {
    const isCyan = accent === "cyan";

    return (
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -5,
        }}
        className={`group relative overflow-hidden rounded-3xl border ${
          isCyan ? "border-cyan-300/[0.10]" : "border-lime-300/[0.10]"
        } bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 ${
          isCyan
            ? "hover:border-cyan-300/20 hover:bg-cyan-300/[0.025]"
            : "hover:border-lime-300/20 hover:bg-lime-300/[0.025]"
        }`}
      >
        {/* Hover Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            isCyan
              ? "from-cyan-300/[0.05] via-transparent to-transparent"
              : "from-lime-300/[0.05] via-transparent to-transparent"
          } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        <div className="relative">
          {/* NUMBER */}
          <div className="flex items-center justify-between">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl border font-mono text-xs ${
                isCyan
                  ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300"
                  : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"
              }`}
            >
              {number}
            </div>

            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isCyan
                  ? "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                  : "bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]"
              }`}
            />
          </div>

          {/* LABEL */}
          <p
            className={`mt-6 font-mono text-[10px] tracking-[0.24em] uppercase ${
              isCyan ? "text-cyan-300" : "text-lime-300"
            }`}
          >
            {label}
          </p>

          {/* TITLE */}
          <h3 className="font-space-grotesk mt-2 text-xl leading-tight font-semibold text-white">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-sm leading-6 text-slate-500">{description}</p>

          {/* ITEMS */}
          <div className="mt-6 space-y-2.5">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-white/[0.06] pt-2.5"
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isCyan ? "bg-cyan-300" : "bg-lime-300"
                  }`}
                />

                <span className="text-xs text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <>
      {/* HERO — E-COMMERCE SERVICES */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#08151A] to-[#070B12]" />

          {/* Central Cyan Glow */}
          <div className="absolute top-[5%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Lime Glow */}
          <div className="absolute top-[35%] -left-[180px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[160px]" />

          {/* Right Glow */}
          <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />

          {/* E-commerce Grid */}
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B12_78%)]" />

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
                <ShoppingCart className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-xs tracking-[0.28em] text-cyan-300 uppercase">
                  E-commerce Services
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
                Build, Optimize &{" "}
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Scale Your E-commerce
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
                From product research and marketplace listings to SEO, product
                content, multi-brand stores, and custom automation — we help
                businesses manage and grow their e-commerce operations across
                leading marketplaces and online channels.
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
                  Grow Your E-commerce
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
                  <h4 className="text-2xl font-bold text-white">
                    Multi-Channel
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Marketplace Support
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">SEO</h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Listing & Product Optimization
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Automation</h4>

                  <p className="mt-1 text-sm text-slate-400">Built for Scale</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — E-COMMERCE VISUAL */}
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

              {/* Floating Marketplace Badge */}
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
                    <Store className="h-5 w-5 text-lime-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                      Marketplace
                    </p>

                    <h5 className="mt-1 font-semibold text-white">
                      Multi-Channel Growth
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* MAIN E-COMMERCE DASHBOARD */}
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
                        ecommerce-dashboard.com
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

                        <div className="mt-3 h-2 w-16 rounded-full bg-white/10" />
                      </div>

                      <div className="h-8 w-24 rounded-full bg-lime-300/80" />
                    </div>

                    {/* Marketplace Cards */}
                    <div className="relative mt-10 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-orange-300/20" />

                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>

                        <div className="mt-5 h-3 w-16 rounded-full bg-white/60" />

                        <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-cyan-300/20" />

                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>

                        <div className="mt-5 h-3 w-16 rounded-full bg-white/60" />

                        <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-lime-300/20" />

                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>

                        <div className="mt-5 h-3 w-16 rounded-full bg-white/60" />

                        <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
                      </div>
                    </div>

                    {/* PRODUCT LISTING */}
                    <div className="relative mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-2.5 w-28 rounded-full bg-white/30" />

                          <div className="mt-3 h-2 w-20 rounded-full bg-white/10" />
                        </div>

                        <div className="h-7 w-20 rounded-full bg-cyan-300/20" />
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-lime-300/10" />

                          <div className="flex-1">
                            <div className="h-2 w-[70%] rounded-full bg-white/20" />

                            <div className="mt-2 h-1.5 w-[45%] rounded-full bg-white/10" />
                          </div>

                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-cyan-300/10" />

                          <div className="flex-1">
                            <div className="h-2 w-[60%] rounded-full bg-white/20" />

                            <div className="mt-2 h-1.5 w-[40%] rounded-full bg-white/10" />
                          </div>

                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="relative mt-5 grid grid-cols-3 gap-3">
                      <div className="h-12 rounded-xl border border-white/[0.07] bg-white/[0.03]" />

                      <div className="h-12 rounded-xl border border-white/[0.07] bg-white/[0.03]" />

                      <div className="h-12 rounded-xl border border-white/[0.07] bg-white/[0.03]" />
                    </div>
                  </div>
                </div>

                {/* Floating Optimization Badge */}
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
                        Optimization
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Listings Built to Convert
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
        className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081019] via-[#0B111B] to-[#081019]" />

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[180px]" />

          {/* Left Lime Glow */}
          <div className="absolute top-[15%] -left-48 h-[500px] w-[500px] rounded-full bg-lime-400/[0.055] blur-[170px]" />

          {/* Right Cyan Glow */}
          <div className="absolute right-[-220px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.05] blur-[170px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#081019_82%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "22%", size: 4, delay: 0 },
            { left: "18%", top: "70%", size: 3, delay: 1.1 },
            { left: "82%", top: "25%", size: 4, delay: 0.7 },
            { left: "91%", top: "64%", size: 3, delay: 1.8 },
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
                <ShoppingBag className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  E-commerce Overview
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                More Than Just
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Selling Online.
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
              We support the complete e-commerce workflow — from finding and
              researching products to creating optimized marketplace listings,
              preparing product content, managing online stores, and automating
              repetitive operations across multiple sales channels.
            </motion.p>
          </div>

          {/* OVERVIEW CONTENT */}
          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
            {/* MAIN CONTENT */}
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
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:col-span-7"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-[90px]" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06]">
                    <Layers3 className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                      Complete E-commerce Support
                    </p>

                    <h3 className="font-space-grotesk mt-1 text-xl font-semibold text-white sm:text-2xl">
                      From Research to Marketplace Growth
                    </h3>
                  </div>
                </div>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Our e-commerce services bring together marketplace operations,
                  product research, listing optimization, product content, SEO,
                  websites, branding, marketing, data management, and
                  automation. This allows businesses to build a stronger and
                  more organized online selling operation without treating each
                  part of the workflow separately.
                </p>

                {/* Workflow */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Research",
                      text: "Products, competitors, pricing, demand & suppliers.",
                      icon: Search,
                    },
                    {
                      title: "Optimize",
                      text: "Listings, titles, keywords, categories & product content.",
                      icon: Sparkles,
                    },
                    {
                      title: "Present",
                      text: "Images, graphics, videos, stores & brand presentation.",
                      icon: ImageIcon,
                    },
                    {
                      title: "Automate",
                      text: "Scraping, bulk processing, matching, data & workflows.",
                      icon: Workflow,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          y: 12,
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
                          delay: index * 0.06,
                        }}
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.045]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.035] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative">
                          <Icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300" />

                          <h4 className="mt-4 text-sm font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-xs leading-6 text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
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
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:col-span-5"
            >
              {/* Glow */}
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-lime-400/[0.06] blur-[90px]" />

              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  Supported Channels
                </p>

                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white">
                  Built Around Your E-commerce Ecosystem
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  We work across major marketplaces, social commerce channels,
                  websites, and B2B platforms depending on your business model
                  and product requirements.
                </p>

                {/* Channel List */}
                <div className="mt-7 space-y-3">
                  {[
                    "Alibaba",
                    "Amazon",
                    "Etsy",
                    "eBay",
                    "Walmart",
                    "Facebook Marketplace",
                    "Pinterest",
                    "Costco & Sam’s Club",
                  ].map((channel, index) => (
                    <motion.div
                      key={channel}
                      initial={{
                        opacity: 0,
                        x: 10,
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
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">{channel}</span>

                      <ArrowUpRight className="h-4 w-4 text-slate-600" />
                    </motion.div>
                  ))}
                </div>
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
            }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                Whether you are selling through marketplaces, operating your own
                online store, exporting through B2B channels, or managing
                multiple brands, we provide the research, content, technology,
                and operational support needed to keep your e-commerce workflow
                organized.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Commerce / Optimize / Scale
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
          <div className="absolute top-[35%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-400/[0.045] blur-[190px]" />

          {/* Bottom Cyan Glow */}
          <div className="absolute bottom-[-220px] left-[5%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-[180px]" />

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
            { left: "17%", top: "42%", size: 3, delay: 1.2 },
            { left: "88%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "68%", size: 3, delay: 1.8 },
            { left: "72%", top: "84%", size: 3, delay: 0.9 },
            { left: "38%", top: "12%", size: 3, delay: 1.5 },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  E-commerce Solutions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Everything Your
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  E-commerce Needs.
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
              From marketplace operations and product research to optimized
              listings, branded stores, automation, and B2B buyer follow-up, we
              provide the tools and services needed to build, manage, and scale
              modern e-commerce operations.
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
              delay: 0.2,
            }}
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-cyan-300/40 via-lime-300/30 to-transparent"
          />

          {/* SOLUTIONS GRID */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {/* MARKETPLACE MANAGEMENT */}
            <SolutionCard
              number="01"
              label="Marketplace Operations"
              title="Sell Across Leading Marketplaces"
              description="Support for marketplace research, seller operations, product uploads, listing preparation, optimization, and marketplace-specific workflows."
              items={[
                "Alibaba seller & store management",
                "Amazon product & listing support",
                "Etsy listing research & SEO",
                "eBay marketplace research",
                "Walmart product matching",
                "Facebook Marketplace workflows",
                "Pinterest product & affiliate pins",
                "Costco & Sam's Club research",
              ]}
              accent="cyan"
            />

            {/* PRODUCT RESEARCH */}
            <SolutionCard
              number="02"
              label="Research & Discovery"
              title="Find Products Worth Selling"
              description="Research-driven product discovery designed to identify opportunities, compare markets, understand competition, and match products with suppliers."
              items={[
                "Product discovery",
                "Competitor analysis",
                "Pricing comparison",
                "Marketplace demand research",
                "Supplier & product matching",
                "Reverse-image product matching",
                "B2B product research",
                "Marketplace comparison",
              ]}
              accent="lime"
            />

            {/* LISTING OPTIMIZATION */}
            <SolutionCard
              number="03"
              label="Listing Optimization"
              title="Turn Products Into Better Listings"
              description="Structured marketplace listing optimization covering the information customers search for and the details that help products convert."
              items={[
                "SEO-focused titles",
                "Bullet points & features",
                "Product descriptions",
                "Search terms & keywords",
                "Tags & specifications",
                "Attributes & variations",
                "Category placement",
                "Conversion-focused presentation",
              ]}
              accent="cyan"
            />

            {/* SEO */}
            <SolutionCard
              number="04"
              label="SEO & Visibility"
              title="Make Products Easier to Find"
              description="Search optimization across marketplaces and websites, helping product pages, categories, images, and content become more discoverable."
              items={[
                "Keyword research",
                "Marketplace SEO",
                "Product SEO",
                "Google & website SEO",
                "Keyword-optimized titles",
                "Descriptions & tags",
                "Image SEO naming",
                "Competitor keyword research",
              ]}
              accent="lime"
            />

            {/* PRODUCT CONTENT */}
            <SolutionCard
              number="05"
              label="Product Content"
              title="Create Marketplace-Ready Content"
              description="Product media and content prepared for professional presentation across marketplaces, websites, catalogs, and promotional channels."
              items={[
                "Product photography support",
                "Feature images",
                "Infographic-style graphics",
                "Image resizing & compression",
                "Background cleanup",
                "SEO-friendly filenames",
                "Product videos",
                "Marketplace-ready media",
              ]}
              accent="cyan"
            />

            {/* WEBSITES */}
            <SolutionCard
              number="06"
              label="Websites & Stores"
              title="Build the Store Behind the Products"
              description="Professional websites and online stores designed around your brand, products, categories, customers, and long-term e-commerce goals."
              items={[
                "E-commerce websites",
                "Professional company websites",
                "Category-specific brand sites",
                "Product pages",
                "Landing pages",
                "Responsive frontend design",
                "Custom web functionality",
                "Online store development",
              ]}
              accent="lime"
            />

            {/* BRANDING */}
            <SolutionCard
              number="07"
              label="Branding"
              title="Build a Consistent Brand Presence"
              description="Brand identity and marketplace presentation designed to create a recognizable and consistent appearance across stores, products, catalogs, and digital channels."
              items={[
                "Brand identity",
                "Logo design",
                "Marketplace presentation",
                "Store banners",
                "Product graphics",
                "Catalog design",
                "Brand assets",
                "Consistent visual presentation",
              ]}
              accent="cyan"
            />

            {/* MARKETING */}
            <SolutionCard
              number="08"
              label="Marketing"
              title="Connect Products With Customers"
              description="Promotional support across social and email channels to help businesses communicate products, offers, launches, and updates to their audiences."
              items={[
                "Facebook marketing",
                "Instagram content",
                "Pinterest promotion",
                "Social media content",
                "Promotional campaigns",
                "Product announcements",
                "Buyer follow-up emails",
                "Branded email templates",
              ]}
              accent="lime"
            />

            {/* B2B */}
            <SolutionCard
              number="09"
              label="B2B Growth"
              title="Generate Leads & Follow Up"
              description="B2B support focused particularly on exporters and manufacturers using Alibaba and international channels to connect with potential buyers."
              items={[
                "B2B lead generation",
                "Alibaba buyer research",
                "Buyer follow-up",
                "Inquiry management support",
                "International B2B research",
                "Product presentation",
                "Export-focused workflows",
                "Lead tracking",
              ]}
              accent="cyan"
            />

            {/* AUTOMATION */}
            <SolutionCard
              number="10"
              label="Automation"
              title="Automate Repetitive E-commerce Work"
              description="Custom automation and data-processing tools designed to reduce manual work across product research, scraping, listing preparation, and marketplace operations."
              items={[
                "Python automation",
                "Product scraping",
                "Image scraping",
                "Bulk product processing",
                "Bulk listing preparation",
                "CSV & Excel processing",
                "Data matching",
                "Custom dashboards & tracking",
              ]}
              accent="lime"
            />

            {/* DATA MANAGEMENT */}
            <SolutionCard
              number="11"
              label="Data & Catalogs"
              title="Keep Product Data Organized"
              description="Structured catalog and data management for large product databases, marketplace information, media assets, and business records."
              items={[
                "Excel processing",
                "CSV processing",
                "Google Sheets",
                "PDF & JSON processing",
                "Bulk product databases",
                "SKU organization",
                "Catalog cleanup",
                "Image & video outputs",
              ]}
              accent="cyan"
            />

            {/* MULTI-BRAND */}
            <SolutionCard
              number="12"
              label="Export E-commerce"
              title="Scale Multiple Product Brands"
              description="Support for businesses operating different product sectors under a structured multi-brand export e-commerce model."
              items={[
                "Separate brand identities",
                "Dedicated websites",
                "Social media presence",
                "Apparel products",
                "Sports goods",
                "Surgical products",
                "Knives & chef sets",
                "Manufactured goods",
              ]}
              accent="lime"
            />
          </div>

          {/* MARKETPLACE STRIP */}
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
            className="mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  Marketplace Ecosystem
                </p>

                <h3 className="font-space-grotesk mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  One E-commerce Operation. Multiple Channels.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Research, listings, product content, pricing, SEO, and
                  marketplace workflows can be organized across the platforms
                  that matter to your business.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Alibaba",
                  "Amazon",
                  "Etsy",
                  "eBay",
                  "Walmart",
                  "Facebook Marketplace",
                  "Pinterest",
                  "Costco",
                  "Sam's Club",
                ].map((marketplace) => (
                  <span
                    key={marketplace}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-slate-400 uppercase"
                  >
                    {marketplace}
                  </span>
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
                From a single product listing to a multi-brand export operation,
                we connect research, content, marketplaces, websites, marketing,
                data, and automation into a scalable e-commerce workflow.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built To Scale
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
        className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081019] via-[#0B111B] to-[#081019]" />

          {/* Center Cyan Glow */}
          <div className="absolute top-[15%] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[190px]" />

          {/* Left Lime Glow */}
          <div className="absolute top-[45%] -left-52 h-[500px] w-[500px] rounded-full bg-lime-400/[0.055] blur-[170px]" />

          {/* Right Cyan Glow */}
          <div className="absolute right-[-220px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.05] blur-[180px]" />

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,#081019_84%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "20%", size: 4, delay: 0 },
            { left: "18%", top: "62%", size: 3, delay: 1.2 },
            { left: "82%", top: "16%", size: 4, delay: 0.6 },
            { left: "91%", top: "58%", size: 3, delay: 1.8 },
            { left: "70%", top: "84%", size: 3, delay: 0.9 },
            { left: "44%", top: "10%", size: 3, delay: 1.5 },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase sm:text-[11px]">
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                From Product
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  To Market.
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
              We turn products and ideas into structured e-commerce operations
              through research, preparation, optimization, marketplace setup,
              automation, and continuous improvement.
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
              delay: 0.2,
            }}
            className="mt-16 h-px w-full origin-left bg-gradient-to-r from-lime-300/40 via-cyan-300/30 to-transparent"
          />

          {/* PROCESS */}
          <div className="relative mt-20">
            {/* CONNECTING LINE — DESKTOP */}
            <div className="absolute top-[54px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* STEP 01 */}
              <ProcessStep
                number="01"
                label="Research"
                title="Understand the Market"
                description="We begin by understanding your products, target market, competitors, marketplaces, pricing, demand, and business goals."
                items={[
                  "Product research",
                  "Competitor analysis",
                  "Marketplace research",
                  "Pricing comparison",
                ]}
                accent="cyan"
              />

              {/* STEP 02 */}
              <ProcessStep
                number="02"
                label="Prepare"
                title="Build the Product Foundation"
                description="We organize the information, media, specifications, keywords, and assets required to present your products professionally."
                items={[
                  "Product data",
                  "Images & media",
                  "SEO keywords",
                  "Catalog preparation",
                ]}
                accent="lime"
              />

              {/* STEP 03 */}
              <ProcessStep
                number="03"
                label="Optimize"
                title="Prepare for Conversion"
                description="Listings, product pages, categories, and content are structured around discoverability, clarity, and conversion."
                items={[
                  "Listing optimization",
                  "Titles & descriptions",
                  "Search terms & tags",
                  "Category optimization",
                ]}
                accent="cyan"
              />

              {/* STEP 04 */}
              <ProcessStep
                number="04"
                label="Launch"
                title="Take Products to Market"
                description="We help deploy products across the required marketplaces, websites, stores, social channels, and supporting systems."
                items={[
                  "Marketplace setup",
                  "Store deployment",
                  "Product publishing",
                  "Channel preparation",
                ]}
                accent="lime"
              />
            </div>
          </div>

          {/* SECOND PROCESS ROW */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* STEP 05 */}
            <ProcessStep
              number="05"
              label="Automate"
              title="Reduce Manual Work"
              description="Where repetitive work exists, we introduce automation, scraping, bulk processing, data matching, and custom tools."
              items={[
                "Python automation",
                "Product scraping",
                "Bulk processing",
                "Data matching",
              ]}
              accent="lime"
            />

            {/* STEP 06 */}
            <ProcessStep
              number="06"
              label="Connect"
              title="Build the Growth System"
              description="We connect stores, marketplaces, branding, social media, email, B2B workflows, and product data into a more organized operation."
              items={[
                "Social channels",
                "Email marketing",
                "B2B workflows",
                "Catalog systems",
              ]}
              accent="cyan"
            />

            {/* STEP 07 */}
            <ProcessStep
              number="07"
              label="Analyze"
              title="Measure What Matters"
              description="We review marketplace information, product performance, competitor activity, pricing, and data to identify areas for improvement."
              items={[
                "Performance review",
                "Competitor tracking",
                "Pricing analysis",
                "Product insights",
              ]}
              accent="lime"
            />

            {/* STEP 08 */}
            <ProcessStep
              number="08"
              label="Scale"
              title="Expand the Operation"
              description="Once the foundation is working, we help expand products, marketplaces, brands, catalogs, and automated workflows."
              items={[
                "More products",
                "More marketplaces",
                "Multi-brand setup",
                "Workflow automation",
              ]}
              accent="cyan"
            />
          </div>

          {/* PROCESS FLOW */}
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
            className="mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              {/* COPY */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                  Continuous E-commerce Workflow
                </p>

                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Built for Operations That Keep Growing
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  E-commerce is not a one-time setup. Products change,
                  marketplaces evolve, competitors move, and new opportunities
                  appear. Our process is designed to support the operation
                  beyond the initial launch.
                </p>
              </div>

              {/* FLOW */}
              <div className="border-t border-white/[0.07] p-6 lg:border-t-0 lg:border-l lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "Research",
                    "Prepare",
                    "Optimize",
                    "Launch",
                    "Automate",
                    "Scale",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-2 font-mono text-[9px] tracking-[0.12em] uppercase ${
                          index % 2 === 0
                            ? "border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300"
                            : "border-lime-300/15 bg-lime-300/[0.05] text-lime-300"
                        }`}
                      >
                        {item}
                      </span>

                      {index < 5 && <span className="text-slate-700">→</span>}
                    </div>
                  ))}
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
                The goal is simple: create an e-commerce system that is
                organized, discoverable, easier to manage, and ready to scale
                across products, marketplaces, and brands.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Research → Build → Scale
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
                  E-commerce Ecosystem
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                The Platforms
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Behind Your Store.
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
              We work across major marketplaces, social commerce channels,
              e-commerce platforms, and supporting tools to research products,
              optimize listings, manage catalogs, and build scalable online
              selling operations.
            </motion.p>
          </div>

          {/* TECHNOLOGY SHOWCASE */}
          <div className="mt-16 lg:mt-20">
            {/* MARKETPLACES */}
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
                    01 — Marketplaces
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Global E-commerce Platforms
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Sell / Research
                </span>
              </div>

              {/* MARKETPLACE GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Alibaba",
                    icon: SiAlibabadotcom,
                  },
                  {
                    name: "Amazon",
                    icon: BsAmazon,
                  },
                  {
                    name: "Etsy",
                    icon: SiEtsy,
                  },
                  {
                    name: "eBay",
                    icon: SiEbay,
                  },
                  {
                    name: "Walmart",
                    icon: TbBrandWalmart,
                  },
                  {
                    name: "Facebook Marketplace",
                    icon: SiFacebook,
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
                      <span className="relative mt-4 text-center text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* COMMERCE & SOCIAL */}
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
                    02 — Commerce & Social
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Social Commerce & Retail Research
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Discover / Promote
                </span>
              </div>

              {/* SOCIAL COMMERCE GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Pinterest",
                    icon: SiPinterest,
                  },
                  {
                    name: "Costco",
                    icon: ShoppingCart,
                  },
                  {
                    name: "Sam's Club",
                    icon: ShoppingCart,
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
                    name: "Google",
                    icon: SiGoogle,
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
                      className="group relative flex min-h-[120px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-all duration-300 hover:border-lime-300/20 hover:bg-white/[0.05]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-300/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Logo */}
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                        <Icon className="h-6 w-6 text-slate-300 transition-colors duration-300 group-hover:text-white" />
                      </div>

                      {/* Name */}
                      <span className="relative text-center text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* E-COMMERCE & AUTOMATION */}
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
                    03 — E-commerce Operations
                  </p>

                  <h3 className="font-space-grotesk mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Stores, Data & Automation
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase sm:block">
                  Process / Scale
                </span>
              </div>

              {/* OPERATIONS GRID */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Shopify",
                    icon: SiShopify,
                  },
                  {
                    name: "WordPress",
                    icon: SiWordpress,
                  },
                  {
                    name: "Google Sheets",
                    icon: SiGooglesheets,
                  },
                  {
                    name: "Excel",
                    icon: BsFileExcelFill,
                  },
                  {
                    name: "Python",
                    icon: SiPython,
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
                From marketplace research and product listings to catalog
                management, automation, and multi-channel selling, we use the
                right platforms and tools to build efficient e-commerce
                operations.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Built For Commerce
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />

          {/* Top Cyan Glow */}
          <div className="absolute top-[-220px] left-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[5%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

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
            { left: "19%", top: "74%", size: 3, delay: 1.2 },
            { left: "84%", top: "18%", size: 4, delay: 0.6 },
            { left: "92%", top: "65%", size: 3, delay: 1.8 },
            { left: "67%", top: "82%", size: 3, delay: 0.9 },
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
                More Than
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Just Selling Online.
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
              E-commerce success requires more than putting products on a
              marketplace. We connect research, listings, content, branding,
              automation, and multi-channel operations into a system designed
              around your products and business goals.
            </motion.p>
          </div>

          {/* WHY GRID */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Marketplace Expertise",
                description:
                  "We work across Alibaba, Amazon, Etsy, eBay, Walmart, Facebook Marketplace, Pinterest, and other channels to support research, listings, optimization, and marketplace operations.",
                accent: "cyan",
              },
              {
                number: "02",
                title: "Research Before Execution",
                description:
                  "Products, competitors, pricing, demand, keywords, suppliers, and marketplace opportunities are researched before building the strategy around your catalog.",
                accent: "lime",
              },
              {
                number: "03",
                title: "Conversion-Focused Listings",
                description:
                  "Titles, bullets, descriptions, search terms, specifications, images, variations, and category placement are structured to make products easier to discover and understand.",
                accent: "cyan",
              },
              {
                number: "04",
                title: "Built for Multi-Channel Growth",
                description:
                  "We help businesses operate across marketplaces, websites, social channels, and B2B platforms while keeping product data and brand presentation consistent.",
                accent: "lime",
              },
              {
                number: "05",
                title: "Automation at Scale",
                description:
                  "Scraping, bulk product processing, image workflows, CSV and Excel processing, catalog matching, dashboards, and repetitive task automation can reduce manual work.",
                accent: "cyan",
              },
              {
                number: "06",
                title: "Complete E-commerce Support",
                description:
                  "From product research and listing preparation to websites, branding, social media, email marketing, buyer follow-up, and catalog management, we support the wider operation.",
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
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:p-7"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    item.accent === "lime"
                      ? "from-lime-300/[0.05]"
                      : "from-cyan-300/[0.05]"
                  } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Top Line */}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] ${
                      item.accent === "lime" ? "text-lime-300" : "text-cyan-300"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-300 group-hover:w-16" />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk relative mt-8 text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`relative mt-7 h-px w-12 transition-all duration-300 group-hover:w-20 ${
                    item.accent === "lime"
                      ? "bg-gradient-to-r from-lime-300 to-transparent"
                      : "bg-gradient-to-r from-cyan-300 to-transparent"
                  }`}
                />
              </motion.div>
            ))}
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
                Your products, marketplace presence, data, and brand should work
                together. We bring those pieces together to create a more
                organized, scalable, and efficient e-commerce operation.
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
          <div className="absolute top-[-220px] left-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

          {/* Bottom Lime Glow */}
          <div className="absolute right-[5%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.06] blur-[180px]" />

          {/* E-commerce Grid */}
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
                  Frequently Asked Questions
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Questions Before
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  You Start Selling.
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
              From marketplace research and product listings to automation,
              websites, branding, and multi-channel e-commerce, here are answers
              to some of the questions businesses commonly have before getting
              started.
            </motion.p>
          </div>

          {/* FAQ LIST */}
          <div className="mt-16 space-y-4 lg:mt-20">
            {[
              {
                number: "01",
                question: "Which e-commerce marketplaces do you support?",
                answer:
                  "We support a wide range of e-commerce and marketplace workflows, including Alibaba, Amazon, Etsy, eBay, Walmart, Facebook Marketplace, Pinterest, Costco, and Sam’s Club. The exact services depend on your marketplace, products, and business requirements.",
              },
              {
                number: "02",
                question:
                  "Can you help with product research before we start selling?",
                answer:
                  "Yes. Product research can include finding products, competitor analysis, pricing comparisons, marketplace demand research, supplier and product matching, and reverse-image product matching.",
              },
              {
                number: "03",
                question: "Do you optimize existing product listings?",
                answer:
                  "Yes. We can optimize titles, bullet points, descriptions, search terms, tags, specifications, attributes, variations, category placement, and product presentation with a focus on discoverability and conversion.",
              },
              {
                number: "04",
                question: "Can you manage product data for large catalogs?",
                answer:
                  "Yes. We can work with Excel, CSV, Google Sheets, PDF, JSON, and other structured product data to organize catalogs, SKUs, marketplace information, images, videos, and bulk product records.",
              },
              {
                number: "05",
                question:
                  "Can you help prepare product images and marketplace content?",
                answer:
                  "Yes. Our e-commerce workflows can include product photography support, feature images, infographic-style graphics, image resizing and compression, background cleanup, SEO-friendly filenames, videos, and marketplace-ready media.",
              },
              {
                number: "06",
                question: "Do you build websites and online stores as well?",
                answer:
                  "Yes. We can build professional company websites, e-commerce stores, category-specific brand websites, product pages, landing pages, responsive frontends, and custom web functionality connected to your broader e-commerce operation.",
              },
              {
                number: "07",
                question: "Can you automate repetitive e-commerce tasks?",
                answer:
                  "Yes. Automation can include Python and web automation, product scraping, image scraping, bulk product processing, listing preparation, CSV and Excel processing, data matching, dashboards, CRM and tracking tools, and other repetitive workflows.",
              },
              {
                number: "08",
                question: "Can you support Alibaba sellers and B2B businesses?",
                answer:
                  "Yes. Alibaba-related support can include seller account and store management, product uploading, listing optimization, SEO titles and keywords, product presentation, buyer and inquiry follow-up, B2B product research, category and brand setup, and support for Verified Seller operations.",
              },
              {
                number: "09",
                question:
                  "Can you manage multiple brands or product categories?",
                answer:
                  "Yes. We can support multi-brand export e-commerce setups with separate branding, websites, and social presence for different sectors while products are managed through a main business structure.",
              },
              {
                number: "10",
                question:
                  "Do you provide social media and email marketing for e-commerce?",
                answer:
                  "Yes. E-commerce support can extend to Facebook, Instagram, Pinterest, and other social channels, as well as promotional emails, buyer follow-up campaigns, product announcements, lead nurturing, and branded email templates.",
              },
            ].map((faq, index) => (
              <motion.details
                key={faq.number}
                initial={{
                  opacity: 0,
                  y: 18,
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
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                  {/* Number */}
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-cyan-300 sm:text-xs">
                    {faq.number}
                  </span>

                  {/* Question */}
                  <span className="font-space-grotesk flex-1 pr-3 text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </span>

                  {/* Plus */}
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                    <span className="absolute h-px w-3 bg-slate-400 transition-transform duration-300 group-open:rotate-180 group-hover:bg-cyan-300" />

                    <span className="absolute h-3 w-px bg-slate-400 transition-all duration-300 group-open:rotate-90 group-open:opacity-0 group-hover:bg-cyan-300" />
                  </span>
                </summary>

                {/* Answer */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="border-t border-white/[0.06] px-5 pt-5 pb-6 sm:px-6 sm:pt-5 sm:pb-7">
                      <div className="pl-0 sm:pl-[2.25rem]">
                        <p className="text-sm leading-7 text-slate-400 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.details>
            ))}
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
                Every e-commerce operation is different. We can combine
                marketplace services, product research, listing optimization,
                content, automation, and online-store development around your
                specific needs.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Commerce Without Limits
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
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09151B] to-[#070B12]" />

          {/* Main Cyan Glow */}
          <div className="absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[190px]" />

          {/* Lime Glow */}
          <div className="absolute right-[-180px] bottom-[-220px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.07] blur-[180px]" />

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#070B12_80%)]" />

          {/* Floating Particles */}
          {[
            { left: "8%", top: "24%", size: 4, delay: 0 },
            { left: "17%", top: "68%", size: 3, delay: 1.2 },
            { left: "84%", top: "20%", size: 4, delay: 0.6 },
            { left: "91%", top: "70%", size: 3, delay: 1.8 },
            { left: "72%", top: "82%", size: 3, delay: 0.9 },
            { left: "30%", top: "14%", size: 3, delay: 1.5 },
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
        <div className="absolute top-0 left-1/2 h-[220px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/[0.09] blur-[130px]" />

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
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* INNER GLOW */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.05] blur-[140px]" />

            {/* Decorative Lines */}
            <div className="pointer-events-none absolute top-0 right-0 h-px w-[45%] bg-gradient-to-l from-cyan-300/30 to-transparent" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-[45%] bg-gradient-to-r from-lime-300/30 to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
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
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                  <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                    Start Your E-commerce Journey
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
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
                  delay: 0.1,
                }}
                className="font-space-grotesk mt-7 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Ready to Build a
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Better E-commerce Business?
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
                Whether you need marketplace support, product research, listing
                optimization, catalog management, automation, a professional
                online store, or a complete multi-channel e-commerce setup, we
                can help turn your products into a stronger digital business.
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
                className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                {/* Primary CTA */}
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 to-lime-300 px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.12em] text-[#071015] uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(103,232,249,0.2)]"
                >
                  <span className="relative z-10">Start a Project</span>

                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
                </a>

                {/* Secondary CTA */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.12em] text-slate-300 uppercase transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:text-white"
                >
                  Discuss Your Needs
                </a>
              </motion.div>
            </div>

            {/* BOTTOM META */}
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
                duration: 0.7,
                delay: 0.45,
              }}
              className="relative z-10 mt-12 border-t border-white/[0.07] pt-6"
            >
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-center text-xs text-slate-600 sm:text-left">
                  Marketplace • Research • Listings • Automation • Stores
                </p>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />

                  <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                    Built For Commerce
                  </span>
                </div>
              </div>
            </motion.div>
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
