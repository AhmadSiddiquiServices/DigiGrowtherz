"use client";

import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Bot,
  CheckCircle2,
  Cpu,
  Sparkles,
  Workflow,
  DatabaseZap,
  FileText,
  Mail,
  BarChart3,
  MessageSquareMore,
  Code2,
  ServerCog,
  BriefcaseBusiness,
  Layers3,
  Handshake,
  Check,
  Plus,
  Search,
  CalendarDays,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: "easeOut",
    },
  }),
};

const particles = [
  { left: "12%", top: "18%", size: 4 },
  { left: "24%", top: "72%", size: 6 },
  { left: "37%", top: "30%", size: 5 },
  { left: "52%", top: "80%", size: 4 },
  { left: "64%", top: "18%", size: 7 },
  { left: "73%", top: "56%", size: 5 },
  { left: "84%", top: "34%", size: 4 },
  { left: "92%", top: "70%", size: 6 },
];

// Technology Data
export interface TechnologyCategory {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "lime" | "cyan";
  technologies: string[];
  badge: string;
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 1,
    title: "AI Models",
    description:
      "AI models selected for practical business use cases such as customer support, content assistance, information extraction, data analysis, and decision-support workflows.",

    icon: Bot,

    accent: "lime",

    technologies: ["OpenAI", "Gemini", "Claude", "Llama", "DeepSeek"],

    badge: "AI Powered",
  },

  {
    id: 2,
    title: "Automation & APIs",
    description:
      "Workflow automation platforms, APIs, and webhooks that connect CRMs, websites, forms, email, and other business applications to reduce manual data handling.",

    icon: Workflow,

    accent: "cyan",

    technologies: ["n8n", "REST APIs", "Webhooks", "Zapier", "Make"],

    badge: "Workflow Integrations",
  },

  {
    id: 3,
    title: "Development Stack",
    description:
      "Development frameworks and programming languages used to create custom automation interfaces, integrations, backend services, and scalable web applications.",

    icon: Code2,

    accent: "lime",

    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Python"],

    badge: "Production Ready",
  },

  {
    id: 4,
    title: "Cloud & Infrastructure",
    description:
      "Cloud services, databases, and deployment tools that support reliable data storage, application hosting, monitoring, and the growth of business automation systems.",

    icon: ServerCog,

    accent: "cyan",

    technologies: ["MongoDB", "PostgreSQL", "Docker", "Vercel", "AWS"],

    badge: "Enterprise Scale",
  },
];

// Technology Card
interface TechnologyCardProps {
  category: TechnologyCategory;
  index: number;
}

const TechnologyCard = ({ category, index }: TechnologyCardProps) => {
  const Icon = category.icon;

  const isLime = category.accent === "lime";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        delay: index * 0.12,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      //   className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500"
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-lime-300/20"
    >
      {/* Hover Gradient */}

      <div
        className={`absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isLime
            ? "bg-gradient-to-br from-lime-400/10 via-transparent to-transparent"
            : "bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"
        }`}
      />

      {/* Glow */}
      <div
        className={`absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
          isLime ? "bg-lime-400/10" : "bg-cyan-400/10"
        }`}
      />
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
          delay: index,
        }}
        className="absolute inset-y-0 w-24 rotate-12 bg-white/5 blur-xl"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 ${
            isLime
              ? "border-lime-400/20 bg-lime-400/10 group-hover:border-lime-300/40"
              : "border-cyan-400/20 bg-cyan-400/10 group-hover:border-cyan-300/40"
          }`}
        >
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Icon
              className={`h-8 w-8 ${
                isLime ? "text-lime-300" : "text-cyan-300"
              }`}
            />
          </motion.div>
        </div>

        {/* Heading */}
        <h3 className="font-space-grotesk mt-8 text-2xl font-bold text-white md:text-3xl">
          {category.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-8 text-slate-400">{category.description}</p>

        {/* Pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {category.technologies.map((technology, techIndex) => (
            <motion.div
              key={technology}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.12 + techIndex * 0.07,
              }}
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isLime
                  ? "border-lime-400/20 bg-lime-400/10 text-lime-200 hover:border-lime-300/40 hover:bg-lime-400/15"
                  : "border-cyan-400/20 bg-cyan-400/10 text-cyan-200 hover:border-cyan-300/40 hover:bg-cyan-400/15"
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  isLime
                    ? "bg-lime-300 group-hover:shadow-[0_0_10px_rgba(163,230,53,.9)]"
                    : "bg-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,.9)]"
                }`}
              />

              {technology}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        {/* <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
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
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-8 h-px origin-left bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
              isLime
                ? "border-lime-400/20 bg-lime-400/10 text-lime-300"
                : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className={`h-2.5 w-2.5 rounded-full ${
                isLime ? "bg-lime-300" : "bg-cyan-300"
              }`}
            />

            {category.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "lime" | "cyan";
  badge: string;
}

const valueCards: ValueCard[] = [
  {
    id: 1,
    title: "Business-First Approach",
    description:
      "We review your business goals, existing processes, and operational challenges before recommending where AI workflow automation can provide a practical benefit.",

    icon: BriefcaseBusiness,

    accent: "lime",

    badge: "Strategy Driven",
  },

  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We configure AI assistants, integrations, and automated workflows around your processes, customer needs, current systems, and project requirements rather than relying on a generic setup.",

    icon: Sparkles,

    accent: "cyan",

    badge: "Custom Built",
  },

  {
    id: 3,
    title: "Scalable Architecture",
    description:
      "We plan workflows and integrations so additional processes, users, and connected applications can be introduced as your business requirements change.",

    icon: Layers3,

    accent: "lime",

    badge: "Future Ready",
  },

  {
    id: 4,
    title: "Ongoing Partnership",
    description:
      "Where included in the agreed scope, post-launch support can cover workflow adjustments, troubleshooting, integrations, and improvements as your business needs evolve.",

    icon: Handshake,

    accent: "cyan",

    badge: "Long-Term Support",
  },
];

interface ValueCardProps {
  item: ValueCard;
  index: number;
}

const ValueCard = ({ item, index }: ValueCardProps) => {
  const Icon = item.icon;

  const isLime = item.accent === "lime";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500"
    >
      {/* Hover Glow */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isLime
            ? "bg-gradient-to-br from-lime-400/10 via-transparent to-transparent"
            : "bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"
        }`}
      />

      <div
        className={`absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
          isLime ? "bg-lime-400/10" : "bg-cyan-400/10"
        }`}
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
            isLime
              ? "border-lime-400/20 bg-lime-400/10"
              : "border-cyan-400/20 bg-cyan-400/10"
          }`}
        >
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
          >
            <Icon
              className={`h-8 w-8 ${
                isLime ? "text-lime-300" : "text-cyan-300"
              }`}
            />
          </motion.div>
        </div>

        {/* Title */}

        <h3 className="font-space-grotesk mt-8 text-[1.5rem] font-bold text-white md:text-3xl">
          {item.title}
        </h3>

        {/* Description */}

        <p className="mt-5 leading-8 text-slate-400">{item.description}</p>

        {/* Divider */}

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Badge */}

        <div className="mt-6">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
              isLime
                ? "border-lime-400/20 bg-lime-400/10 text-lime-300"
                : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                isLime ? "bg-lime-300" : "bg-cyan-300"
              }`}
            />

            {item.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// FAQ Data
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Which business processes are suitable for AI automation?",
    answer:
      "Processes involving repetitive data entry, lead routing, appointment requests, customer enquiries, document handling, reporting, and updates between business systems may be suitable for AI automation. We first review how the process works, what exceptions need human attention, and whether automation is appropriate for your team.",
  },
  {
    id: 2,
    question:
      "Can AI workflow automation connect with my existing business tools?",
    answer:
      "AI automation can connect with supported CRMs, eCommerce platforms such as Shopify, websites, Google Workspace, Microsoft 365, custom applications, and third-party services through available APIs, webhooks, or integration tools. We assess your current systems and access requirements before confirming what can be connected.",
  },
  {
    id: 3,
    question: "How long does it take to implement AI automation?",
    answer:
      "The timeline depends on workflow complexity, data availability, the number of integrations, testing requirements, and any custom development involved. After reviewing your requirements during discovery, we can outline the proposed scope, milestones, dependencies, and estimated delivery timeline.",
  },
  {
    id: 4,
    question: "Does AI automation replace employees or human decision-making?",
    answer:
      "AI automation is intended to support your team by handling suitable repetitive tasks and routing exceptions for human review. Important decisions, sensitive customer situations, and processes that require professional judgement can remain under employee oversight, depending on how the workflow is designed.",
  },
  {
    id: 5,
    question: "How do you approach data security in AI automation projects?",
    answer:
      "Security requirements depend on the systems, data types, and AI services involved. During planning, we consider access permissions, data handling, integration credentials, retention requirements, and the security controls available in the selected platforms. Specific safeguards should be agreed as part of each project's scope.",
  },
  {
    id: 6,
    question: "Can AI workflows scale as my business grows?",
    answer:
      "Automation can be extended as your requirements change by adding workflows, users, integrations, or processing steps. We consider expected usage, system limits, data flows, and maintenance needs during solution planning so the implementation can be adapted over time.",
  },
  {
    id: 7,
    question: "Is support available after an AI automation system launches?",
    answer:
      "Post-launch support and maintenance can be arranged according to the project agreement. Depending on the selected support scope, this may include troubleshooting, workflow updates, integration adjustments, monitoring, and improvements as your processes evolve.",
  },
  {
    id: 8,
    question: "How can I start an AI automation project with DigiGrowtherz?",
    answer:
      "Start by contacting DigiGrowtherz to discuss the process you want to improve, the tools your team currently uses, and the outcome you need. We can review the requirements, identify suitable automation opportunities, and discuss a potential scope and next steps before development begins.",
  },
];

// FAQ Item Component
interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      layout
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
        duration: 0.5,
      }}
      className={`group overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
        isOpen
          ? "border-cyan-400/30 bg-white/[0.06]"
          : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20 hover:bg-white/[0.05]"
      } `}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-6 p-4 text-left md:p-8"
      >
        <h3
          className={`font-space-grotesk text-[1rem] font-semibold transition-colors duration-300 md:text-xl ${
            isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
          } `}
        >
          {item.question}
        </h3>

        {/* Icon */}
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-11 md:w-11 ${
            isOpen
              ? "border-cyan-400/30 bg-cyan-400/10"
              : "border-white/10 bg-white/5"
          } `}
        >
          <Plus className="h-5 w-5 text-cyan-300" />
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            {/* Divider */}

            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="px-8 pt-6 pb-8">
              <p className="text-[14px] leading-6 text-slate-400 md:text-[17px] md:leading-8">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AiAutomationServicePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  return (
    <>
      {/*  Hero Section */}
      <section className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* =======================================
          Background Effects
          ======================================== */}
        <div className="absolute inset-0">
          <div className="absolute top-[-140px] left-[-180px] h-[500px] w-[500px] rounded-full bg-lime-400/15 blur-[140px]" />
          <div className="absolute right-[-220px] bottom-[-180px] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* Small Glow */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[120px]" />

        {/* =======================================
            Container
          ======================================== */}
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* =======================================
              LEFT SIDE
            ======================================== */}
            <div>
              {/* Label */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-6 inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-2"
              >
                <span className="font-mono text-[9px] tracking-[0.28em] text-lime-300 uppercase">
                  AI Automation Services for Businesses
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-space-grotesk max-w-3xl text-4xl leading-[1.05] font-bold text-white md:text-[55px]"
              >
                AI Automation
                <span className="text-lime-300"> Services for </span>
                Smarter Business Operations.
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 text-[16px] leading-8 text-slate-300 md:text-lg"
              >
                DigiGrowtherz provides AI automation services that help
                businesses streamline repetitive processes, connect their
                existing tools, and build intelligent workflows. From AI
                chatbots and virtual assistants to CRM automation and API
                integrations, we design practical solutions around your
                operations and business goals.
              </motion.p>

              {/* Buttons */}
              <motion.div
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-12 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
                >
                  Discuss Your Automation Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="/services/ai-automation#process"
                  className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-lime-400/40 hover:bg-white/10"
                >
                  <PlayCircle className="mr-3 h-5 w-5 text-lime-300" />
                  See Our AI Automation Process
                </a>
              </motion.div>

              {/* Bottom Highlights */}
              <motion.div
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-14 flex flex-wrap gap-8 md:gap-10"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">AI</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Business Workflow Automation
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Connected</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Business System Integrations
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">Scalable</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Workflows That Can Evolve
                  </p>
                </div>
              </motion.div>
            </div>

            {/* =======================================
              RIGHT SIDE
            ======================================== */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative flex min-h-[620px] items-center justify-center"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[520px] w-[520px] rounded-full bg-lime-400/15 blur-[140px]" />
              </div>

              {/* Dashboard */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[560px] rounded-[36px] border border-white/10 bg-white/5 p-7 backdrop-blur-3xl"
              >
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs tracking-[0.25em] text-lime-300 uppercase">
                      Illustrative Workflow Preview
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      AI Workflow Automation Preview
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
                    <div className="h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_18px_#A3E635]" />
                  </div>
                </div>
                {/* Dashboard Background */}
                <div className="absolute inset-0 overflow-hidden rounded-[36px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,.15),transparent_40%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-28 -right-28 h-72 w-72 rounded-full border border-lime-400/10"
                  />

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 80,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-0 -left-32 h-80 w-80 rounded-full border border-white/5"
                  />
                </div>
                <div className="relative z-10 space-y-5">
                  {/* =====================================================
                        AI Workflow Card
                    ===================================================== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[11px] tracking-[0.22em] text-lime-300 uppercase">
                          Sample Workflow Data
                        </p>

                        <h4 className="mt-2 text-xl font-semibold text-white">
                          Example Workflow Execution
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime-400" />

                        <span className="text-xs font-medium text-lime-300">
                          Sample
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm text-slate-400">
                          Illustrative Automation Efficiency
                        </span>

                        <span className="text-lg font-bold text-white">
                          98%
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "98%" }}
                          transition={{
                            duration: 2,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-lime-400 via-green-400 to-emerald-300"
                        />
                      </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs tracking-wider text-slate-500 uppercase">
                          Tasks
                        </p>

                        <h5 className="mt-3 text-2xl font-bold text-white">
                          124
                        </h5>

                        <p className="mt-1 text-xs text-slate-400">
                          Example Tasks Completed
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs tracking-wider text-slate-500 uppercase">
                          Queue
                        </p>

                        <h5 className="mt-3 text-2xl font-bold text-white">
                          08
                        </h5>

                        <p className="mt-1 text-xs text-slate-400">
                          Example Queue
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs tracking-wider text-slate-500 uppercase">
                          Saved
                        </p>

                        <h5 className="mt-3 text-2xl font-bold text-white">
                          37h
                        </h5>

                        <p className="mt-1 text-xs text-slate-400">
                          Illustrative Weekly Total
                        </p>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">
                          Sample Workflow Activity
                        </span>

                        <span className="text-xs tracking-wider text-lime-300 uppercase">
                          Preview
                        </span>
                      </div>

                      <div className="mt-5 flex h-20 items-end justify-between gap-2">
                        {[35, 55, 40, 75, 58, 88, 72, 96].map(
                          (height, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{ height }}
                              transition={{
                                delay: index * 0.08,
                                duration: 0.6,
                              }}
                              className="flex-1 rounded-t-full bg-gradient-to-t from-lime-500 to-emerald-300"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* Floating Glow */}

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

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute top-1/2 right-6 h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_18px_#BEF264]"
                />
              </motion.div>

              {/* =====================================================
                Animated Connection Lines
            ===================================================== */}
              <svg
                className="pointer-events-none absolute inset-0 hidden xl:block"
                width="100%"
                height="100%"
              >
                <motion.path
                  d="M120 150 C200 180 240 250 280 300"
                  stroke="rgba(163,230,53,.25)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <motion.path
                  d="M470 120 C430 200 390 250 330 330"
                  stroke="rgba(34,211,238,.20)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                />
              </svg>

              {/* Workflow Nodes */}
              <div className="absolute top-[200px] left-[210px] hidden xl:block">
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_16px_#A3E635]"
                />
              </div>

              <div className="absolute top-[255px] right-[185px] hidden xl:block">
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_#22D3EE]"
                />
              </div>

              {/* =====================================================
                    Floating AI Assistant
                ===================================================== */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 -left-8 hidden w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/15">
                    🤖
                  </div>

                  <div>
                    <h5 className="font-semibold text-white">
                      AI Customer Support
                    </h5>

                    <p className="text-sm text-slate-400">
                      Example Availability
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Example Response Time
                  </span>

                  <span className="font-semibold text-lime-300">
                    Configurable
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{
                      duration: 2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-400"
                  />
                </div>
              </motion.div>

              {/* =====================================================
                    Floating Automation Status
                ===================================================== */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-28 -right-10 hidden w-60 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-white">Workflow Example</h5>

                  <span className="rounded-full bg-lime-400/15 px-3 py-1 text-xs text-lime-300">
                    Sample
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  {[42, 60, 70, 54, 90, 76].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: item }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                      }}
                      className="w-full rounded-t-full bg-gradient-to-t from-lime-500 to-emerald-300"
                    />
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Illustrative Success Rate
                  </span>

                  <span className="font-semibold text-white">99.2%</span>
                </div>
              </motion.div>

              {/* =====================================================
                    Floating Business Insights
                ===================================================== */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-8 bottom-8 hidden w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl lg:block"
              >
                <p className="font-mono text-[11px] tracking-[0.22em] text-lime-300 uppercase">
                  Illustrative Business Metrics
                </p>

                <div className="mt-5">
                  <h3 className="text-4xl font-bold text-white">+47%</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Potential Workflow Impact
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Example Cost Change
                    </span>

                    <span className="text-white">32%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Example Time Savings
                    </span>

                    <span className="text-white">120 hrs/mo</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Example Output Validation
                    </span>

                    <span className="text-white">99.8%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative overflow-hidden bg-[#0B111B] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* ============================================================
                Background
            ============================================================ */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[-220px] h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[150px]" />

          <div className="absolute right-[-180px] bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* ============================================================
                Container
            ============================================================ */}
        <div className="relative z-10 mx-auto">
          {/* ============================================================
              Section Label
            ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-lime-300" />

              <span className="font-mono text-[10px] tracking-[0.28em] text-lime-300 uppercase">
                Business AI Automation Overview
              </span>
            </div>
          </motion.div>

          {/* ============================================================
                 Heading
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-space-grotesk text-[32px] leading-tight font-bold text-white md:text-6xl">
              AI Automation Services for
              <br className="hidden md:block" />
              <span className="text-lime-300"> Smarter Business Workflows</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Our AI automation solutions help businesses reduce repetitive
              manual work, connect disconnected applications, and manage routine
              processes more consistently. We assess your workflows and design
              AI-powered systems that support customer service, sales, internal
              operations, and business administration.
            </p>
          </motion.div>

          {/* ============================================================
                Content
              ============================================================ */}

          <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
            {/* ============================================================
                    LEFT SIDE
                ============================================================ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Bot className="h-5 w-5 text-lime-300" />

                <span className="text-sm font-medium text-white">
                  Business Benefits of AI Automation
                </span>
              </div>

              <h3 className="font-space-grotesk mt-8 text-3xl leading-tight font-bold text-white md:text-5xl">
                Work Smarter,
                <br />
                Not Harder.
              </h3>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                AI workflow automation can support customer service, lead
                management, sales administration, reporting, and internal
                operations. The right use cases depend on your existing systems,
                the quality of available data, and where repeatable tasks can be
                automated with appropriate human review.
              </p>

              {/* =====================================================
                    Benefits
                  ===================================================== */}
              <div className="mt-12 space-y-6">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Automate Repetitive Tasks",
                    description:
                      "Use workflow automation to handle routine steps and give your team more time for work that needs human attention.",
                  },

                  {
                    icon: Cpu,
                    title: "Improve Process Consistency",
                    description:
                      "Standardize repeatable steps, validate information, and route exceptions for review where needed.",
                  },

                  {
                    icon: ArrowRight,
                    title: "Connect Business Systems",
                    description:
                      "Move information between supported applications and reduce manual handoffs across business workflows.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.5,
                      }}
                      className="group flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/20 hover:bg-white/10"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-400/10">
                        <Icon className="h-6 w-6 text-lime-300" />
                      </div>

                      <div>
                        <h4 className="text-[16px] font-semibold text-white md:text-xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 leading-7 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ============================================================
                    RIGHT SIDE
                    (Part 2)
                ============================================================ */}
            <div className="relative hidden min-h-[620px] items-center justify-center md:flex">
              {/* =====================================================
                    Background Glow
                  ===================================================== */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[120px]" />
              </div>

              {/* =====================================================
                    Workflow Connections
                  ===================================================== */}
              <svg
                className="pointer-events-none absolute inset-0 z-10"
                width="100%"
                height="100%"
                viewBox="0 0 700 620"
              >
                {/* Top Left */}

                <motion.path
                  d="M170 120 C250 140 300 200 350 260"
                  fill="none"
                  stroke="rgba(163,230,53,.28)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />

                {/* Top Right */}

                <motion.path
                  d="M530 120 C470 150 430 200 350 260"
                  fill="none"
                  stroke="rgba(34,211,238,.25)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                />

                {/* Bottom Left */}

                <motion.path
                  d="M180 470 C240 430 290 370 350 340"
                  fill="none"
                  stroke="rgba(163,230,53,.28)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                />

                {/* Bottom Right */}

                <motion.path
                  d="M520 470 C470 430 420 370 350 340"
                  fill="none"
                  stroke="rgba(34,211,238,.25)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                  }}
                />
              </svg>

              {/* =====================================================
                    Floating Data Packets
                  ===================================================== */}
              {[
                {
                  left: "31%",
                  top: "28%",
                  delay: 0,
                },

                {
                  left: "67%",
                  top: "28%",
                  delay: 0.8,
                },

                {
                  left: "34%",
                  top: "68%",
                  delay: 1.6,
                },

                {
                  left: "65%",
                  top: "68%",
                  delay: 2.2,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute z-20"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                  animate={{
                    y: [-8, 8, -8],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: item.delay,
                    repeat: Infinity,
                  }}
                >
                  <div className="h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_20px_#A3E635]" />
                </motion.div>
              ))}

              {/* =====================================================
                    Main AI Core
                  ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                }}
                className="relative z-20 flex h-44 w-44 items-center justify-center rounded-full border border-lime-400/20 bg-gradient-to-br from-lime-400/20 via-white/5 to-cyan-500/10 backdrop-blur-3xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-4 rounded-full border border-lime-400/20"
                />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-22px] rounded-full border border-dashed border-lime-400/20"
                />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-35px]"
                >
                  <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_20px_#A3E635]" />
                </motion.div>

                <div className="text-center">
                  <Bot className="mx-auto h-12 w-12 text-lime-300" />

                  <h4 className="mt-4 text-xl font-bold text-white">
                    AI Engine
                  </h4>
                </div>
              </motion.div>

              {/* =====================================================
                    Top Left Node
                  ===================================================== */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="absolute top-10 left-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-[11px] tracking-[.22em] text-lime-300 uppercase">
                  INPUT
                </p>

                <h5 className="mt-3 text-lg font-semibold text-white">
                  Customer Request
                </h5>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Website • WhatsApp • Email
                </p>
              </motion.div>

              {/* =====================================================
                    Top Right Node
                  ===================================================== */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-12 right-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-[11px] tracking-[.22em] text-cyan-300 uppercase">
                  PROCESS
                </p>

                <h5 className="mt-3 text-lg font-semibold text-white">
                  AI Task Routing
                </h5>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Analyze • Classify • Route
                </p>
              </motion.div>

              {/* =====================================================
                    Bottom Left Node
                  ===================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-12 left-12 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-[11px] tracking-[.22em] text-lime-300 uppercase">
                  AUTOMATION
                </p>

                <h5 className="mt-3 text-lg font-semibold text-white">
                  Connected Workflow
                </h5>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  CRM • Tasks • Notifications
                </p>
              </motion.div>

              {/* =====================================================
                    Bottom Right Node
                ===================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute right-8 bottom-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-[11px] tracking-[.22em] text-cyan-300 uppercase">
                  OUTPUT
                </p>

                <h5 className="mt-3 text-lg font-semibold text-white">
                  Completed Action
                </h5>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Response • Task • Notification
                </p>
              </motion.div>

              {/* =====================================================
                    Ambient Particles
                  ===================================================== */}
              {particles.map((particle, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* ============================================================
      Mobile Workflow (V2)
============================================================ */}

            <div className="relative overflow-hidden lg:hidden">
              {/* Background */}

              <div className="absolute inset-0">
                <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
              </div>

              <div className="relative z-10 mx-auto max-w-md px-2">
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="flex justify-center"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
                    <Sparkles className="h-4 w-4 text-lime-300" />

                    <span className="font-mono text-[11px] tracking-[.25em] text-lime-300 uppercase">
                      AI Workflow Automation
                    </span>
                  </div>
                </motion.div>

                {/* AI Engine */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="relative mt-12 flex flex-col items-center"
                >
                  {/* Outer Glow */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-64 w-64 rounded-full bg-lime-400/10 blur-[90px]" />
                  </div>

                  {/* Rotating Ring */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-1 h-52 w-52 rounded-full border border-dashed border-lime-400/20"
                  />

                  {/* Inner Ring */}

                  <div className="absolute top-5 h-44 w-44 rounded-full border border-lime-400/15" />

                  {/* AI Circle */}

                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-lime-400/20 bg-gradient-to-br from-lime-400/20 via-white/5 to-cyan-500/10 shadow-[0_0_80px_rgba(163,230,53,.15)] backdrop-blur-3xl">
                    <Bot className="h-12 w-12 text-lime-300" />
                  </div>

                  {/* Heading */}

                  <h3 className="font-space-grotesk mt-10 text-3xl font-bold text-white">
                    AI Engine
                  </h3>

                  <p className="mt-3 max-w-xs text-center leading-7 text-slate-400">
                    The AI workflow interprets incoming information, applies the
                    configured rules, and triggers the appropriate next step or
                    human review.
                  </p>
                </motion.div>

                {/* Divider */}

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
                    delay: 0.2,
                  }}
                  className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-lime-300/60 to-transparent"
                />

                {/* Intro */}

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
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="mt-10 text-center"
                >
                  <h4 className="font-space-grotesk text-2xl font-semibold text-white">
                    How AI Workflow Automation Works
                  </h4>

                  <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-400">
                    A customer request enters through a connected channel, is
                    interpreted by the configured AI workflow, and is routed to
                    the right application, team member, or next action.
                  </p>
                </motion.div>
              </div>

              {/* ============================================================
      Workflow Timeline
============================================================ */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="relative mx-auto mt-14 max-w-md"
              >
                {[
                  {
                    step: "01",
                    title: "Customer Request",
                    description:
                      "A request arrives through a supported website chat, WhatsApp, email, or contact form integration.",
                    color: "lime",
                  },
                  {
                    step: "02",
                    title: "AI Task Routing",
                    description:
                      "The workflow interprets the request and applies configured rules to identify the next step.",
                    color: "cyan",
                  },
                  {
                    step: "03",
                    title: "Connected Workflow",
                    description:
                      "Automated actions can update a CRM, create tasks, send notifications, or pass data to connected tools.",
                    color: "lime",
                  },
                  {
                    step: "04",
                    title: "Business Action",
                    description:
                      "The process completes, routes an exception, or prompts a team member to take the next action.",
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                    }}
                    className="relative pb-10 last:pb-0"
                  >
                    {/* Vertical Line */}

                    {index !== 3 && (
                      <div className="absolute top-16 left-[28px] h-[calc(100%-1rem)] w-px">
                        <div className="absolute inset-0 bg-white/10" />

                        <motion.div
                          animate={{
                            y: [0, 70, 0],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                          className="absolute left-1/2 h-10 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-lime-300 via-cyan-300 to-transparent"
                        />
                      </div>
                    )}

                    <div className="flex gap-5">
                      {/* Step Circle */}

                      <div className="relative shrink-0">
                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                            item.color === "lime"
                              ? "border-lime-400/30 bg-lime-400/10"
                              : "border-cyan-400/30 bg-cyan-400/10"
                          }`}
                        >
                          <span
                            className={`font-mono text-sm font-bold ${
                              item.color === "lime"
                                ? "text-lime-300"
                                : "text-cyan-300"
                            }`}
                          >
                            {item.step}
                          </span>
                        </motion.div>

                        <div
                          className={`absolute inset-0 rounded-2xl blur-xl ${
                            item.color === "lime"
                              ? "bg-lime-400/10"
                              : "bg-cyan-400/10"
                          }`}
                        />
                      </div>

                      {/* Content Card */}

                      <motion.div
                        whileHover={{
                          y: -4,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                      >
                        {/* Top Accent */}

                        <div
                          className={`absolute top-0 left-0 h-1 w-full ${
                            item.color === "lime"
                              ? "bg-gradient-to-r from-lime-300 via-lime-400 to-transparent"
                              : "bg-gradient-to-r from-cyan-300 via-cyan-400 to-transparent"
                          }`}
                        />

                        <h4 className="font-space-grotesk text-xl font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-3 leading-7 text-slate-400">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* ============================================================
      Connected Platforms
============================================================ */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="relative mt-16"
              >
                {/* Divider */}

                <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-lime-300/60 to-transparent" />

                {/* Heading */}

                <div className="text-center">
                  <h3 className="font-space-grotesk text-2xl font-bold text-white">
                    Business Applications & Connected Platforms
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-400">
                    AI automation can connect supported business tools through
                    APIs, webhooks, and integration platforms, subject to access
                    permissions and the capabilities of each application.
                  </p>
                </div>

                {/* Glass Card */}

                <div className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl">
                  {/* Background Glow */}

                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-lime-400/10 blur-[90px]" />

                  <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px]" />

                  {/* Grid */}

                  <div className="relative grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: "🌐",
                        name: "Website",
                      },
                      {
                        icon: "💬",
                        name: "WhatsApp",
                      },
                      {
                        icon: "📧",
                        name: "Email",
                      },
                      {
                        icon: "🛒",
                        name: "Shopify",
                      },
                      {
                        icon: "📊",
                        name: "CRM",
                      },
                      {
                        icon: "📁",
                        name: "Google Drive",
                      },
                      {
                        icon: "📅",
                        name: "Calendar",
                      },
                      {
                        icon: "⚡",
                        name: "Automation",
                      },
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.name}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-2xl">{platform.icon}</div>

                        <p className="mt-3 text-sm font-medium text-white">
                          {platform.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ============================================================
      Bottom CTA
============================================================ */}

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
                }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-16 text-center"
              >
                <h3 className="font-space-grotesk text-[23px] font-bold text-white md:text-3xl">
                  Ready to Explore AI Automation for Your Business?
                </h3>

                <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-400">
                  Discuss your current processes, integration requirements, and
                  goals with our team to identify where AI workflow automation
                  may support your day-to-day operations.
                </p>
              </motion.div>

              {/* ============================================================
      Floating Particles
============================================================ */}

              {[
                {
                  left: "8%",
                  top: "18%",
                  size: 5,
                  color: "lime",
                  duration: 6,
                },
                {
                  left: "90%",
                  top: "26%",
                  size: 6,
                  color: "cyan",
                  duration: 7,
                },
                {
                  left: "15%",
                  top: "72%",
                  size: 4,
                  color: "white",
                  duration: 5,
                },
                {
                  left: "82%",
                  top: "88%",
                  size: 5,
                  color: "lime",
                  duration: 8,
                },
              ].map((particle, index) => (
                <motion.div
                  key={index}
                  className={`absolute rounded-full ${
                    particle.color === "lime"
                      ? "bg-lime-300"
                      : particle.color === "cyan"
                        ? "bg-cyan-300"
                        : "bg-white/70"
                  }`}
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Solutions */}
      <section className="relative overflow-hidden px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1626] via-[#0B111B] to-[#081019]" />
          {/* Center Spotlight */}
          <div className="absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-lime-400/8 blur-[180px]" />
          {/* Left Glow */}
          <div className="absolute top-72 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[160px]" />
          {/* Right Glow */}
          <div className="absolute -right-48 bottom-40 h-[500px] w-[500px] rounded-full bg-lime-400/15 blur-[160px]" />
          {/* Top Accent */}
          {/* <div className="absolute top-32 left-1/2 h-px w-[700px] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/40 to-transparent" /> */}
          {/* Grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-lime-300" />

              <span className="font-mono text-[9px] tracking-[.25em] text-lime-300 uppercase md:text-[11px]">
                AI Automation Solutions & Use Cases
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-4xl text-center"
          >
            <h2 className="font-space-grotesk text-[32px] leading-tight font-bold text-white md:text-6xl">
              AI Automation Solutions
              <br className="hidden md:block" /> Built Around Your Workflows
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Our AI automation services include AI customer support, sales
              assistants, workflow automation, CRM integrations, document
              processing, and email automation. Each solution is planned around
              your business processes, existing software, and operational
              requirements.
            </p>
          </motion.div>

          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl"
          >
            {/* Glow */}
            <div className="absolute top-10 -left-24 h-64 w-64 rounded-full bg-lime-400/10 blur-[120px]" />

            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10 p-10 lg:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2">
                  <MessageSquareMore className="h-4 w-4 text-lime-300" />

                  <span className="text-[9px] font-semibold tracking-[0.2em] text-lime-300 uppercase md:text-xs">
                    AI Customer Support Solution
                  </span>
                </div>

                <h3 className="font-space-grotesk mt-8 text-[1.6rem] font-bold text-white md:text-4xl">
                  AI Customer Support <br className="hidden md:block" />
                  Automation
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  AI customer support automation can answer common questions,
                  collect lead details, route enquiries, and hand complex or
                  sensitive conversations to your team. Connect supported
                  channels such as website chat, WhatsApp, Messenger, and email
                  to organize customer communication around your service
                  process.
                </p>

                {/* Features */}
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {[
                    "Website Chat",
                    "WhatsApp Integration",
                    "Messenger Integration",
                    "Email Enquiries",
                    "Lead Capture",
                    "Human Handoff & Routing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-lime-300" />

                      <span className="text-sm text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex items-center justify-center px-10 pb-20 lg:p-16">
                {/* Main AI Hub */}
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-lime-400/20 bg-gradient-to-br from-lime-400/20 via-white/5 to-cyan-500/10 backdrop-blur-3xl">
                  <Bot className="h-16 w-16 text-lime-300" />
                </div>

                {/* Message Bubble */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-0 left-4 rounded-2xl border border-white/10 bg-[#111827]/80 px-5 py-4 backdrop-blur-xl md:top-10 md:left-26"
                >
                  <p className="text-sm text-white">
                    👋 Hello! How can I help with your enquiry?
                  </p>
                </motion.div>

                {/* Message Bubble */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute right-12 bottom-16 rounded-2xl border border-white/10 bg-[#111827]/80 px-5 py-4 backdrop-blur-xl md:right-30 md:bottom-12"
                >
                  <p className="text-sm text-white">
                    ✅ Your request has been received!
                  </p>
                </motion.div>

                {/* Orbit */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-lime-400/20"
                />
              </div>
            </div>
          </motion.div>

          {/* ============================================================
      Solutions Grid
============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {[
              {
                icon: Bot,
                title: "AI Sales Assistant",
                description:
                  "An AI sales assistant can respond to common product questions, collect lead details, qualify enquiries using your criteria, and support meeting scheduling.",
                accent: "lime",
              },
              {
                icon: Workflow,
                title: "Workflow Automation",
                description:
                  "Connect repeatable business tasks, approval steps, notifications, and application updates into structured automated workflows.",
                accent: "cyan",
              },
              {
                icon: DatabaseZap,
                title: "CRM Automation",
                description:
                  "CRM automation can synchronize contact details, update records, assign leads, create follow-up tasks, and connect customer information across supported systems.",
                accent: "lime",
              },
              {
                icon: FileText,
                title: "Document Processing",
                description:
                  "AI document processing can extract and organize information from invoices, forms, contracts, and PDFs for review and transfer into connected business systems.",
                accent: "cyan",
              },
              {
                icon: Mail,
                title: "Email Automation",
                description:
                  "Email automation can organize enquiry acknowledgements, follow-up messages, reminders, and customer communication based on defined triggers and consent requirements.",
                accent: "lime",
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                description:
                  "Connect data sources and prepare dashboards, recurring reports, and AI-assisted summaries to help teams review business information more efficiently.",
                accent: "cyan",
              },
            ].map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
                >
                  {/* Glow */}

                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      solution.accent === "lime"
                        ? "bg-gradient-to-br from-lime-400/10 via-transparent to-transparent"
                        : "bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"
                    }`}
                  />

                  {/* Animated Border */}

                  <div
                    className={`absolute inset-0 rounded-[30px] border opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                      solution.accent === "lime"
                        ? "border-lime-400/30"
                        : "border-cyan-400/30"
                    }`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: -10,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${
                      solution.accent === "lime"
                        ? "border-lime-400/20 bg-lime-400/10"
                        : "border-cyan-400/20 bg-cyan-400/10"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        solution.accent === "lime"
                          ? "text-lime-300"
                          : "text-cyan-300"
                      }`}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-space-grotesk relative mt-8 text-2xl font-bold text-white">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 leading-8 text-slate-400">
                    {solution.description}
                  </p>

                  {/* Bottom */}
                  {/* <div className="relative mt-8 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Learn More
                    </span>

                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10"
                      whileHover={{
                        x: 6,
                      }}
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </div> */}
                  <div className="mt-8 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime-300" />

                    <span className="text-sm text-slate-400">
                      Configured Around Your Business Process
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ============================================================
      Closing Statement
=========================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-16 backdrop-blur-2xl lg:px-20"
          >
            {/* Background Glow */}

            <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[140px]" />

            <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="absolute top-0 -right-20 h-60 w-60 rounded-full bg-lime-400/10 blur-[120px]" />

            {/* Grid */}

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
                <Sparkles className="h-4 w-4 text-lime-300" />

                <span className="font-mono text-[9px] font-bold tracking-[.25em] text-lime-300 uppercase md:text-[11px]">
                  Designed Around Your Processes
                </span>
              </div>

              <h3 className="font-space-grotesk mx-auto mt-8 text-[1.6rem] leading-tight font-bold text-white md:max-w-4xl md:text-4xl lg:text-5xl">
                AI Automation Designed Around Your Business Workflows.
              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                We start by reviewing your processes, current applications, data
                flows, and operational requirements. From there, we scope AI
                assistants, integrations, and automation workflows that fit your
                business rather than forcing your team into a generic system.
              </p>

              {/* Stats */}

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {[
                  {
                    value: "AI",
                    title: "Configured for Your Support Needs",
                  },
                  {
                    value: "CUSTOM",
                    title: "Workflows Matched to Your Processes",
                  },
                  {
                    value: "SCALABLE",
                    title: "Designed to Adapt as Needs Change",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                  >
                    <h4 className="font-space-grotesk text-4xl font-bold text-lime-300">
                      {item.value}
                    </h4>

                    <p className="mt-3 text-slate-400">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
                Ambient Particles
            ============================================================ */}
        {[
          {
            left: "6%",
            top: "14%",
            size: 6,
            duration: 7,
            color: "lime",
          },
          {
            left: "92%",
            top: "20%",
            size: 5,
            duration: 8,
            color: "cyan",
          },
          {
            left: "14%",
            top: "74%",
            size: 4,
            duration: 6,
            color: "white",
          },
          {
            left: "85%",
            top: "82%",
            size: 5,
            duration: 9,
            color: "lime",
          },
          {
            left: "52%",
            top: "48%",
            size: 3,
            duration: 5,
            color: "cyan",
          },
        ].map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              particle.color === "lime"
                ? "bg-lime-300"
                : particle.color === "cyan"
                  ? "bg-cyan-300"
                  : "bg-white/70"
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.25, 1, 0.25],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </section>

      {/* Our Process */}
      <section
        id="process"
        className="relative overflow-hidden px-[clamp(1rem,4vw,5rem)] py-10 lg:py-16"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081019] via-[#0B111B] to-[#081019]" />
          {/* Center Glow */}
          <div className="absolute top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[170px]" />
          {/* Left Glow */}
          <div className="absolute top-64 -left-44 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
          {/* Right Glow */}
          <div className="absolute -right-44 bottom-44 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[150px]" />
          {/* Horizontal Workflow Lines */}
          {[22, 36, 50, 64, 78].map((top, index) => (
            <motion.div
              key={index}
              className="absolute right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                top: `${top}%`,
              }}
            />
          ))}
        </div>

        {/* Heading & Description */}
        <div className="relative z-10">
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
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <Workflow className="h-4 w-4 text-lime-300" />

              <span className="font-mono text-[11px] tracking-[.25em] text-lime-300 uppercase">
                Our Process
              </span>
            </div>
          </motion.div>

          {/* Heading */}
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
            }}
            transition={{
              delay: 0.1,
            }}
            className="mx-auto mt-8 max-w-4xl text-center"
          >
            <h2 className="font-space-grotesk text-[32px] leading-tight font-bold text-white md:text-6xl">
              From Business Need <br className="hidden md:block" />
              To AI Workflow Automation
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Every AI automation project begins with your business
              requirements. We review the process, define the scope, plan
              integrations, develop and test the workflow, and prepare it for
              deployment with clear attention to reliability, usability, and
              human oversight.
            </p>
          </motion.div>

          {/* Animated Workflow Line */}
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
              delay: 0.3,
            }}
            className="relative mx-auto mt-24 hidden max-w-6xl lg:block"
          >
            {/* Track */}

            <div className="relative h-px bg-white/10">
              {/* Active Line */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300"
              />

              {/* Moving Particle */}

              <motion.div
                initial={{
                  left: "0%",
                }}
                whileInView={{
                  left: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_25px_rgba(163,230,53,.9)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mt-20 hidden lg:block">
          {/* Timeline */}
          <div className="relative flex justify-between">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We review your goals, current processes, tools, data flows, and repetitive tasks to identify suitable AI automation opportunities.",
                items: [
                  "Business Analysis",
                  "Workflow Audit",
                  "Goal Definition",
                ],
                color: "lime",
              },
              {
                number: "02",
                title: "Automation Strategy",
                description:
                  "We define the workflow, integration requirements, AI components, access needs, and implementation plan around your business systems.",
                items: ["AI Planning", "Integrations", "Architecture"],
                color: "cyan",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "We configure and develop the agreed workflows, AI assistants, API connections, and supporting application logic.",
                items: [
                  "AI Assistants & Agents",
                  "Automation",
                  "API & App Integrations",
                ],
                color: "lime",
              },
              {
                number: "04",
                title: "Testing",
                description:
                  "We test workflow steps, data handling, integrations, exceptions, and expected outputs against the agreed requirements.",
                items: ["QA", "Optimization", "Security"],
                color: "cyan",
              },
              {
                number: "05",
                title: "Launch",
                description:
                  "We prepare the workflow for launch, support deployment, and arrange monitoring or future improvements according to the project scope.",
                items: ["Deployment", "Monitoring", "Scaling"],
                color: "lime",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                className="relative w-[18%]"
              >
                {/* Connector */}

                <div
                  className={`absolute left-1/2 ${
                    index % 2 === 0 ? "top-full h-14" : "bottom-full h-14"
                  } w-px -translate-x-1/2 bg-white/10`}
                >
                  <motion.div
                    animate={{
                      height: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className={`absolute top-0 left-0 w-full ${
                      step.color === "lime" ? "bg-lime-300" : "bg-cyan-300"
                    }`}
                  />
                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`group relative rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${
                    index % 2 === 0 ? "mb-24" : "mt-24"
                  }`}
                >
                  {/* Hover Glow */}

                  <div
                    className={`absolute inset-0 rounded-[28px] opacity-0 transition duration-500 group-hover:opacity-100 ${
                      step.color === "lime"
                        ? "bg-gradient-to-br from-lime-400/10 via-transparent to-transparent"
                        : "bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"
                    }`}
                  />

                  {/* Number */}

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      step.color === "lime"
                        ? "border-lime-400/20 bg-lime-400/10"
                        : "border-cyan-400/20 bg-cyan-400/10"
                    }`}
                  >
                    <span
                      className={`font-mono font-bold ${
                        step.color === "lime"
                          ? "text-lime-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="font-space-grotesk relative mt-6 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="relative mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="relative mt-6 space-y-3">
                    {step.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            step.color === "lime"
                              ? "bg-lime-300"
                              : "bg-cyan-300"
                          }`}
                        />

                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative mt-16 lg:hidden">
          {/* Center Line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-white/10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-lime-300 via-cyan-300 to-lime-300"
            />
          </div>

          {[
            {
              number: "01",
              title: "Discovery",
              description:
                "We review your business goals, current workflows, tools, and repetitive processes to identify suitable automation opportunities.",
              items: ["Business Analysis", "Workflow Audit", "Goal Definition"],
              color: "lime",
            },
            {
              number: "02",
              title: "Automation Strategy",
              description:
                "We plan the workflow, integrations, AI components, and implementation steps around your business requirements.",
              items: ["AI Planning", "Integrations", "Architecture"],
              color: "cyan",
            },
            {
              number: "03",
              title: "Development",
              description:
                "We develop the agreed automations, AI assistants, API connections, and workflow logic.",
              items: [
                "AI Assistants & Agents",
                "Automation",
                "API & App Integrations",
              ],
              color: "lime",
            },
            {
              number: "04",
              title: "Testing",
              description:
                "We test process steps, data handling, integrations, and outputs against the agreed requirements.",
              items: ["QA", "Optimization", "Security"],
              color: "cyan",
            },
            {
              number: "05",
              title: "Launch",
              description:
                "We support deployment and discuss monitoring, maintenance, and future workflow improvements based on the agreed support scope.",
              items: ["Deployment", "Monitoring", "Scaling"],
              color: "lime",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.15,
              }}
              className="relative mb-10 flex gap-6"
            >
              {/* Timeline Dot */}

              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    step.color === "lime"
                      ? "border-lime-400/30 bg-lime-400/10"
                      : "border-cyan-400/30 bg-cyan-400/10"
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold ${
                      step.color === "lime" ? "text-lime-300" : "text-cyan-300"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                {/* Hover Glow */}

                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    step.color === "lime"
                      ? "bg-gradient-to-br from-lime-400/10 via-transparent to-transparent"
                      : "bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"
                  }`}
                />

                <h3 className="font-space-grotesk relative text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>

                <div className="relative mt-6 space-y-3">
                  {step.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          step.color === "lime" ? "bg-lime-300" : "bg-cyan-300"
                        }`}
                      />

                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Closing */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-8 py-12 backdrop-blur-xl lg:px-16 lg:py-16"
        >
          {/* Background Glow */}

          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]" />
          </div>

          <div className="relative z-10 text-center">
            {/* Small Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-lime-300" />

              <span className="font-mono text-[11px] tracking-[.25em] text-lime-300 uppercase">
                End-to-End Partnership
              </span>
            </div>

            {/* Heading */}

            <h3 className="font-space-grotesk mt-8 text-[28px] leading-tight font-bold text-white lg:text-5xl">
              We Design AI Workflows
              <br className="hidden md:block" /> Around Real Business Needs.
              <span className="block bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Ready to Adapt as You Grow.
              </span>
            </h3>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              From discovery and planning through development, testing, and
              deployment, we keep your requirements at the center of the
              project. Any ongoing monitoring, maintenance, or optimization is
              defined in the agreed support arrangement.
            </p>

            {/* Highlights */}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {[
                "Continuous Optimization",
                "Scalable Architecture",
                "Dedicated Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.5,
          }}
          className="mx-auto mt-20 hidden h-px w-64 origin-center bg-gradient-to-r from-transparent via-lime-300/70 to-transparent lg:block"
        />
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-lime-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </section>

      {/* Technologies */}
      <section className="relative overflow-hidden px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081019] via-[#0B111B] to-[#081019]" />
          {/* Center Glow */}
          <div className="absolute top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[180px]" />
          {/* Left Glow */}
          <div className="absolute top-56 -left-44 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />
          {/* Right Glow */}
          <div className="absolute -right-44 bottom-40 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[150px]" />
          {/* Connected Network */}
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal */}
            <line
              x1="18%"
              y1="30%"
              x2="50%"
              y2="30%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="50%"
              y1="30%"
              x2="82%"
              y2="30%"
              stroke="white"
              strokeWidth="1"
            />

            <line
              x1="18%"
              y1="70%"
              x2="50%"
              y2="70%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="50%"
              y1="70%"
              x2="82%"
              y2="70%"
              stroke="white"
              strokeWidth="1"
            />

            {/* Vertical */}
            <line
              x1="18%"
              y1="30%"
              x2="18%"
              y2="70%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="50%"
              y1="30%"
              x2="50%"
              y2="70%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="82%"
              y1="30%"
              x2="82%"
              y2="70%"
              stroke="white"
              strokeWidth="1"
            />
          </svg>

          {/* Animated Nodes */}
          {[
            { left: "18%", top: "30%" },
            { left: "50%", top: "30%" },
            { left: "82%", top: "30%" },
            { left: "18%", top: "70%" },
            { left: "50%", top: "70%" },
            { left: "82%", top: "70%" },
          ].map((node, index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.35,
              }}
              className="absolute h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,.8)]"
              style={{
                left: node.left,
                top: node.top,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <Cpu className="h-4 w-4 text-lime-300" />

              <span className="font-mono text-[11px] tracking-[.25em] text-lime-300 uppercase">
                AI Automation Technology Stack
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mx-auto mt-8 max-w-3xl text-center"
          >
            <h2 className="font-space-grotesk text-[32px] leading-tight font-bold text-white md:text-6xl">
              AI Automation Tools and Integration Technologies
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              We select AI models, automation platforms, APIs, development
              frameworks, databases, and cloud services according to each
              project's needs. The technology stack depends on your existing
              systems, data requirements, integration options, security
              considerations, and expected usage.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            className="mx-auto mt-16 h-px w-56 origin-center bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
          />

          {/* Technology Grid */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {technologyCategories.map((category, index) => (
              <TechnologyCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
          <motion.p
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
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto mt-20 max-w-3xl text-center text-lg leading-8 text-slate-400"
          >
            The tools shown here are examples of technologies that may be used
            in an AI automation project. Final selections depend on integration
            compatibility, project scope, security needs, and maintenance
            requirements.
          </motion.p>
        </div>
      </section>

      {/* Why DigiGrotherz */}
      <section className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.06),transparent_40%)]" />

        {/* Large Glow */}
        <div className="absolute top-24 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-lime-400/10 blur-[170px]" />

        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-36 left-[10%] h-24 w-24 rounded-3xl border border-cyan-400/10 bg-cyan-400/5 backdrop-blur-xl"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-52 right-[12%] h-20 w-20 rounded-full border border-lime-400/10 bg-lime-400/5 backdrop-blur-xl"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-lime-300" />

              <span className="text-sm font-medium tracking-[0.25em] text-lime-300 uppercase">
                Why DigiGrowtherz
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-space-grotesk mt-8 text-[2rem] text-[25px] leading-tight font-bold text-white md:text-5xl lg:text-5xl">
              AI Automation Built Around Your Business.{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                A Practical, Collaborative Approach.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-400">
              We begin by understanding how your business works, which systems
              your team relies on, and where repetitive tasks create friction.
              This helps us plan AI assistants, workflow automation, and
              integrations around real operating requirements rather than adding
              technology without a clear purpose.
            </p>

            {/* Divider */}
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
                delay: 0.3,
              }}
              className="mx-auto mt-16 h-px w-72 origin-center bg-gradient-to-r from-transparent via-lime-300/40 to-transparent"
            />
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {valueCards.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Why We Work Differently */}
        <div className="mt-32 grid items-center gap-20 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Small Label */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-cyan-300" />

              <span className="text-sm font-medium tracking-[0.18em] text-cyan-300 uppercase">
                Our Difference
              </span>
            </div>

            {/* Heading */}

            <h3 className="font-space-grotesk mt-8 text-[2.15rem] leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Focused on Business Processes, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Not Just Automation Tools.
              </span>
            </h3>

            {/* Description */}

            <p className="mt-8 text-lg leading-9 text-slate-400">
              The right AI automation starts with a clearly defined process and
              a useful outcome. We consider the people involved, current
              software, data quality, exceptions, and handoffs before
              recommending an assistant, workflow, or integration. This keeps
              the solution connected to the way your business actually operates.
            </p>

            {/* Quote */}

            <div className="mt-10 border-l-2 border-lime-300/40 pl-6">
              <p className="font-space-grotesk text-[1.3rem] leading-relaxed font-semibold text-white md:text-[20px]">
                "Automation should make a well-understood business process
                easier to manage."
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <div className="space-y-6">
              {[
                "Business-First Strategy",
                "Tailored AI Solutions",
                "Transparent Collaboration",
                "Scalable Architecture",
                "Long-Term Partnership",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition-all duration-300 hover:border-lime-400/20 hover:bg-white/[0.03]"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/10">
                    <Check className="h-4 w-4 text-lime-300" />
                  </div>

                  <div>
                    <h4 className="font-space-grotesk text-lg font-semibold text-white">
                      {item}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto mt-16 max-w-5xl text-center md:mt-32"
        >
          {/* Background Glow */}

          <div className="absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-lime-400/10 via-cyan-400/10 to-lime-400/10 blur-[150px]" />

          {/* Heading */}

          <h3 className="font-space-grotesk text-[1.8rem] leading-tight font-bold text-white md:text-4xl md:text-5xl lg:text-6xl">
            AI Automation Should Support <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
              Your Long-Term Business Goals.
            </span>
          </h3>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            A deployed workflow is only one part of an automation project. Its
            usefulness also depends on clear ownership, reliable integrations,
            appropriate human review, and maintenance. We help plan these
            considerations so your solution can be reviewed and adapted as
            business requirements change.
          </p>

          {/* Trust Highlights */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {[
              "Business Focused",
              "Built to Scale",
              "Continuous Innovation",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -3,
                }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-md transition-all duration-300 hover:border-lime-400/20"
              >
                <span className="font-medium text-white">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Animated Divider */}

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
              delay: 0.3,
            }}
            className="mx-auto mt-20 h-px w-full max-w-md origin-center bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.06),transparent_45%)]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

        {/* Floating Dots */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-[12%] h-3 w-3 rounded-full bg-cyan-300/50"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-48 right-[15%] h-2.5 w-2.5 rounded-full bg-lime-300/50"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-cyan-300" />

              <span className="text-[10px] font-medium tracking-[0.25em] text-cyan-300 uppercase md:text-sm">
                Frequently Asked Questions
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-space-grotesk mt-8 text-3xl leading-tight font-bold text-white md:text-[3.3rem]">
              AI Automation Questions <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Services, Integration & Implementation.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
              Find answers about AI workflow automation, business system
              integrations, implementation timelines, data security,
              scalability, and post-launch support. If you have a specific
              process in mind, contact our team to discuss your requirements.
            </p>

            {/* Divider */}
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
                delay: 0.3,
              }}
              className="mx-auto mt-16 h-px w-72 origin-center bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
            />
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="relative z-10 mx-auto mt-24 px-6">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.08,
                }}
              >
                <FAQItem
                  item={item}
                  isOpen={openFAQ === item.id}
                  onToggle={() =>
                    setOpenFAQ(openFAQ === item.id ? null : item.id)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom,rgba(163,230,53,0.08),transparent_40%)]" />

        {/* Mesh Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[170px]"
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            scale: [1.05, 0.95, 1.05],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]"
        />

        {/* Top Left Orb */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-[8%] h-52 w-52 rounded-full bg-cyan-400/6 blur-[120px]"
        />

        {/* Bottom Right Orb */}
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] bottom-16 h-64 w-64 rounded-full bg-lime-400/6 blur-[140px]"
        />

        {/* Glass Shapes */}
        <div className="absolute top-40 left-[-8rem] h-80 w-80 rotate-12 rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl" />
        <div className="absolute right-[-10rem] bottom-24 h-96 w-96 -rotate-12 rounded-[5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl" />

        {/* Animated Particles */}
        {[...Array(16)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/50"
            style={{
              left: `${8 + ((index * 11) % 84)}%`,
              top: `${12 + ((index * 9) % 70)}%`,
            }}
          />
        ))}

        {/* Content Container */}
        <div className="relative z-10 mx-auto px-6">
          {/*  Main CTA Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
              <div className="hidden h-2 w-2 rounded-full bg-cyan-300 md:block" />

              <span className="text-[9px] font-medium tracking-[0.25em] text-cyan-300 uppercase md:text-sm">
                Discuss Your AI Automation Project
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-space-grotesk mt-8 text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Ready to Improve Your Workflows?{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                Explore AI Automation.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
              Tell us which business process you want to improve, which
              applications your team currently uses, and what outcome you need.
              DigiGrowtherz can help assess suitable AI automation opportunities
              and discuss an implementation approach that fits your business
              requirements.
            </p>
          </motion.div>
        </div>

        {/* Trust Highlights */}
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-20"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
            >
              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Search className="h-7 w-7 text-cyan-300" />
                </div>

                <h3 className="font-space-grotesk mt-6 text-xl font-semibold text-white">
                  AI Automation Discovery Call
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  We'll discuss your business process, current tools, and
                  project goals to identify where AI workflow automation may be
                  appropriate.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
                  <Sparkles className="h-7 w-7 text-lime-300" />
                </div>

                <h3 className="font-space-grotesk mt-6 text-xl font-semibold text-white">
                  A Workflow Designed for Your Business
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  We plan the AI assistant, workflow, and integrations around
                  your requirements, existing applications, and the tasks your
                  team needs to manage.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Handshake className="h-7 w-7 text-cyan-300" />
                </div>

                <h3 className="font-space-grotesk mt-6 text-xl font-semibold text-white">
                  Support for Your Automation Journey
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Support, maintenance, and future workflow improvements can be
                  arranged according to the agreed project and service scope.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mx-auto mt-20"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Email Card */}
            <motion.a
              href="mailto:info@digigrowtherz.com"
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Floating Shine */}

              <div className="absolute top-0 -left-40 h-full w-32 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[120%]" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Mail className="h-8 w-8 text-cyan-300" />
                </div>

                <p className="mt-8 text-sm tracking-[0.25em] text-cyan-300 uppercase">
                  Email Us
                </p>

                <h3 className="font-space-grotesk mt-3 text-[1.5rem] font-bold text-white md:text-3xl">
                  info@digigrowtherz.com
                </h3>

                <p className="mt-6 max-w-md leading-8 text-slate-400">
                  Email our team with your business process, automation
                  requirements, and the systems you want to connect.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 font-medium text-white">
                  Send an Email
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>

            {/* Consultation Card */}
            <motion.a
              href="/contact"
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-lime-400/10 p-10 backdrop-blur-xl"
            >
              {/* Animated Glow */}

              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-lime-400/10"
              />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10">
                  <CalendarDays className="h-8 w-8 text-lime-300" />
                </div>

                <p className="mt-8 text-sm tracking-[0.25em] text-lime-300 uppercase">
                  Let's Talk
                </p>

                <h3 className="font-space-grotesk mt-3 text-[1.5rem] font-bold text-white md:text-3xl">
                  Discuss an AI Automation Project
                </h3>

                <p className="mt-6 max-w-md leading-8 text-slate-400">
                  Contact our team to discuss workflow automation, AI
                  assistants, CRM integrations, or document processing for your
                  business.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 font-medium text-white">
                  Book a Call
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

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
