"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MapPinned,
  MessageSquareText,
  Package,
  Search,
  Send,
  Store,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Factory,
  Lightbulb,
  ListChecks,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewportOnce = { once: true, amount: 0.18 } as const;

const solutionCards = [
  {
    number: "01",
    label: "Market Research",
    title: "Find the Right Export Markets",
    description:
      "Understand where your products may fit before investing time in outreach. We research target markets, relevant industries, competitor activity, and potential buyer segments around your export goals.",
    items: [
      "Target-country and industry research",
      "Competitor and product positioning review",
      "Potential buyer and distributor discovery",
      "Market and channel opportunity mapping",
    ],
    icon: MapPinned,
    accent: "cyan" as const,
  },
  {
    number: "02",
    label: "Buyer Research",
    title: "Identify Relevant B2B Buyers",
    description:
      "Build a more focused prospect list by researching importers, wholesalers, distributors, retailers, and businesses whose product needs align with your manufacturing or supply capabilities.",
    items: [
      "Importer and distributor research",
      "Company and buyer profile checks",
      "Product-fit and market relevance review",
      "Structured prospect lists",
    ],
    icon: UsersRound,
    accent: "lime" as const,
  },
  {
    number: "03",
    label: "Alibaba Support",
    title: "Strengthen Your Alibaba Presence",
    description:
      "Present your business and products clearly on Alibaba.com with structured company information, relevant product details, and listing content prepared for B2B buyers.",
    items: [
      "Company profile and store content support",
      "Product titles and listing descriptions",
      "Product categories and attributes",
      "Listing content and presentation review",
    ],
    icon: Store,
    accent: "cyan" as const,
  },
  {
    number: "04",
    label: "Product Presentation",
    title: "Prepare Export-Ready Product Content",
    description:
      "Make product information easier for international buyers to review. We organize the product details and visual assets needed for marketplace listings, digital catalogs, and sales presentations.",
    items: [
      "Product descriptions and specifications",
      "Catalog and line-sheet organization",
      "Product images and supporting graphics",
      "Brand and manufacturing information layout",
    ],
    icon: Package,
    accent: "lime" as const,
  },
  {
    number: "05",
    label: "Lead Generation",
    title: "Build a More Organized Buyer Pipeline",
    description:
      "Support your business development activity with researched B2B prospects, practical outreach preparation, and a clear process for recording conversations and next steps.",
    items: [
      "B2B prospect research and list building",
      "Outreach message and email preparation",
      "Lead status and contact tracking",
      "Follow-up planning and reminders",
    ],
    icon: Target,
    accent: "cyan" as const,
  },
  {
    number: "06",
    label: "Inquiry Support",
    title: "Keep Buyer Inquiries Moving",
    description:
      "Create a consistent approach to reviewing, organizing, and following up on incoming buyer inquiries so conversations have context and clear next actions.",
    items: [
      "Inquiry organization and prioritization",
      "Buyer requirement summaries",
      "Response templates and follow-up drafts",
      "Lead handoff and status documentation",
    ],
    icon: MessageSquareText,
    accent: "lime" as const,
  },
];

const processSteps = [
  {
    number: "01",
    label: "Discovery",
    title: "Understand Your Export Business",
    description:
      "We learn about your products, manufacturing or supply capacity, target customers, current sales channels, and export objectives before defining the support plan.",
    items: [
      "Product and capability review",
      "Export goals and target markets",
      "Current digital presence",
    ],
    icon: Building2,
    accent: "cyan" as const,
  },
  {
    number: "02",
    label: "Research",
    title: "Map Markets and Potential Buyers",
    description:
      "We research relevant industries, countries, buyer types, competitor positioning, and suitable B2B channels to make prospecting more focused.",
    items: [
      "Market and competitor research",
      "Buyer and distributor discovery",
      "Prospect criteria and prioritization",
    ],
    icon: Search,
    accent: "lime" as const,
  },
  {
    number: "03",
    label: "Preparation",
    title: "Present Your Products Professionally",
    description:
      "We organize company information, product specifications, listings, catalogs, and supporting content that help buyers understand what you offer.",
    items: [
      "Company and product content",
      "Alibaba listing support",
      "Catalog and visual assets",
    ],
    icon: FileText,
    accent: "cyan" as const,
  },
  {
    number: "04",
    label: "Outreach",
    title: "Support Buyer Communication",
    description:
      "We help prepare outreach and follow-up workflows, organize buyer inquiries, and maintain useful records of conversations and requested information.",
    items: [
      "Prospect outreach preparation",
      "Inquiry and response organization",
      "Follow-up and lead tracking",
    ],
    icon: Send,
    accent: "lime" as const,
  },
  {
    number: "05",
    label: "Review",
    title: "Improve the Export Sales Workflow",
    description:
      "We review the research, presentation, and lead pipeline with your team, identify gaps, and refine the agreed process as your export priorities evolve.",
    items: [
      "Pipeline and activity review",
      "Content and process improvements",
      "Clear next-step reporting",
    ],
    icon: TrendingUp,
    accent: "cyan" as const,
  },
];

const faqItems = [
  {
    question: "What does B2B export support include?",
    answer:
      "B2B export support helps manufacturers, suppliers, and exporters organize the digital and business-development work involved in reaching international buyers. Depending on the agreed scope, this can include export market research, buyer and distributor research, Alibaba profile and listing support, product catalogs, B2B lead generation, inquiry organization, outreach preparation, and lead tracking.",
  },
  {
    question: "Can DigiGrowtherz help us find international buyers?",
    answer:
      "Yes. We can research relevant importers, wholesalers, distributors, retailers, and other business prospects based on your products, target countries, and buyer criteria. Research helps create a focused prospect pipeline, but buyer responses, purchase orders, and sales cannot be guaranteed.",
  },
  {
    question: "Do you provide Alibaba.com account and product listing support?",
    answer:
      "We can support the presentation of your Alibaba business profile and product listings. This may include company information, product titles, descriptions, specifications, categories, and listing content organization. The exact tasks depend on your current account setup and project requirements.",
  },
  {
    question: "Which types of businesses can use your export support services?",
    answer:
      "Our B2B export support is designed for manufacturers, product suppliers, wholesalers, and exporters that want to improve their international buyer research and digital sales process. We first review your product range, capabilities, and target markets to understand whether the requested support is a good fit.",
  },
  {
    question: "What information do you need before starting?",
    answer:
      "Useful starting information includes your company profile, product catalog, product specifications, manufacturing or supply capabilities, minimum order quantities where relevant, target countries, preferred buyer types, and any existing marketplace or website links. You can share what is currently available and we can identify any gaps during discovery.",
  },
  {
    question:
      "Do you handle shipping, customs clearance, or export documentation?",
    answer:
      "This service focuses on digital B2B export support, buyer research, product presentation, and lead workflows. It does not itself provide freight forwarding, customs brokerage, shipping operations, legal advice, or official export certification. Those requirements should be handled with the appropriate logistics providers and qualified specialists.",
  },
  {
    question: "How do you organize buyer leads and follow-ups?",
    answer:
      "We can organize researched prospects and inquiry records in an agreed tracking workflow, such as a spreadsheet or your existing CRM. Records can include company details, buyer fit, contact status, inquiry notes, follow-up dates, and next actions so your team can manage conversations more consistently.",
  },
  {
    question: "How long does it take to see results from B2B export support?",
    answer:
      "Timing depends on your products, target markets, buyer criteria, the quality of the information available, and the agreed scope. Research and content preparation have defined project steps, while buyer outreach and relationship building can take longer. We do not promise a fixed number of leads, rankings, inquiries, or orders.",
  },
];

type Accent = "cyan" | "lime";
type IconComponent = typeof Search;

function SectionAtmosphere({ variant = "cyan" }: { variant?: Accent }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B12] via-[#09131A] to-[#070B12]" />
      <div className="absolute top-[-190px] left-[12%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.055] blur-[180px]" />
      <div className="absolute top-[35%] right-[-190px] h-[520px] w-[520px] rounded-full bg-lime-400/[0.05] blur-[180px]" />
      <div className="absolute bottom-[-220px] left-[18%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.045] blur-[180px]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,#070B12_82%)]" />
      <div
        className={`absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full blur-[130px] ${
          variant === "cyan" ? "bg-cyan-400/[0.07]" : "bg-lime-400/[0.07]"
        }`}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${align === "center" ? "text-center" : ""}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ duration: 0.65 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
          <span className="font-mono text-[10px] tracking-[0.26em] text-cyan-300 uppercase sm:text-[11px]">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
          {title} <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end"
      >
        {description}
      </motion.p>
    </div>
  );
}

function SolutionCard({
  number,
  label,
  title,
  description,
  items,
  icon: Icon,
  accent,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  icon: IconComponent;
  accent: Accent;
}) {
  const isCyan = accent === "cyan";
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -5 }}
      className={`group relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 sm:p-7 ${
        isCyan
          ? "border-cyan-300/[0.10] hover:border-cyan-300/25 hover:bg-cyan-300/[0.025]"
          : "border-lime-300/[0.10] hover:border-lime-300/25 hover:bg-lime-300/[0.025]"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${isCyan ? "from-cyan-300/[0.05]" : "from-lime-300/[0.05]"} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div
        className={`absolute top-0 left-8 h-px w-20 bg-gradient-to-r ${isCyan ? "from-cyan-300/60" : "from-lime-300/60"} to-transparent`}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={`font-mono text-[10px] tracking-[0.24em] uppercase ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
            >
              {number} — {label}
            </p>
            <h3 className="font-space-grotesk mt-3 text-xl leading-tight font-semibold text-white sm:text-2xl">
              {title}
            </h3>
          </div>
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
        <div className="mt-6 grid gap-2.5">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border-t border-white/[0.06] pt-2.5"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isCyan ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.7)]" : "bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.7)]"}`}
              />
              <span className="text-xs leading-5 text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProcessCard({
  number,
  label,
  title,
  description,
  items,
  icon: Icon,
  accent,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  icon: IconComponent;
  accent: Accent;
}) {
  const isCyan = accent === "cyan";
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -4 }}
      className={`group relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 ${
        isCyan
          ? "border-cyan-300/[0.10] hover:border-cyan-300/25"
          : "border-lime-300/[0.10] hover:border-lime-300/25"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${isCyan ? "from-cyan-300/[0.05]" : "from-lime-300/[0.05]"} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border font-mono text-xs ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={`font-mono text-[10px] tracking-[0.24em] ${isCyan ? "text-cyan-300/70" : "text-lime-300/70"}`}
          >
            {number}
          </span>
        </div>
        <p
          className={`mt-6 font-mono text-[10px] tracking-[0.24em] uppercase ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
        >
          {label}
        </p>
        <h3 className="font-space-grotesk mt-2 text-xl leading-tight font-semibold text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
        <div className="mt-6 space-y-2.5">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border-t border-white/[0.06] pt-2.5"
            >
              <Check
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
              />
              <span className="text-xs leading-5 text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function B2BExportSupportServicePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      {/* HERO — B2B EXPORT SUPPORT */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="pointer-events-none absolute top-[24%] -left-20 h-72 w-72 rounded-full bg-lime-400/[0.06] blur-[120px]" />
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  B2B Export Support Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-space-grotesk text-[36px] leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-[52px]"
              >
                Connect Your Products With <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Global B2B Buyers.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-base leading-8 text-slate-300 sm:text-lg"
              >
                DigiGrowtherz provides B2B export support for manufacturers,
                suppliers, and exporters looking to reach international buyers.
                We help with export market research, buyer identification,
                Alibaba profile and product listing support, product catalogs,
                lead generation, inquiry organization, and follow-up workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
                >
                  Discuss Your Export Goals
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#solutions"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  Explore Export Support
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-x-10 gap-y-6 md:gap-x-14"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">Research</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Find Relevant Buyers
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Present</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Showcase Your Products
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Connect</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Organize Buyer Follow-up
                  </p>
                </div>
              </motion.div>
            </div>

            {/* EXPORT PIPELINE VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 45, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative flex min-h-[560px] items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[470px] w-[470px] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
              </div>

              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 -left-2 z-20 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/[0.12]">
                    <Factory className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Export Business
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Products & Capabilities
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[560px] rounded-[34px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              >
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0A121A]">
                  <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <Globe2 className="h-3 w-3 text-cyan-300" />
                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        export-pipeline.preview
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#101C23] via-[#0B151B] to-[#081017] p-5 sm:p-7">
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                    <div className="relative flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                          B2B Development Workspace
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Export Buyer Pipeline
                        </h3>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                        <LayoutDashboard className="h-4 w-4 text-cyan-300" />
                      </div>
                    </div>

                    <div className="relative mt-7 grid grid-cols-3 gap-2.5 sm:gap-3">
                      {[
                        {
                          label: "Research",
                          value: "Market fit",
                          tint: "cyan",
                        },
                        { label: "Buyers", value: "Prospects", tint: "lime" },
                        {
                          label: "Follow-up",
                          value: "Next steps",
                          tint: "cyan",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:p-4"
                        >
                          <p className="font-mono text-[8px] tracking-[0.12em] text-slate-500 uppercase sm:text-[9px]">
                            {item.label}
                          </p>
                          <p
                            className={`mt-3 text-xs font-semibold sm:text-sm ${item.tint === "lime" ? "text-lime-300" : "text-cyan-300"}`}
                          >
                            {item.value}
                          </p>
                          <div className="mt-3 h-1.5 rounded-full bg-white/[0.07]">
                            <div
                              className={`h-full w-[68%] rounded-full ${item.tint === "lime" ? "bg-lime-300/70" : "bg-cyan-300/70"}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
                            Prospect Research
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            Buyer profile overview
                          </p>
                        </div>
                        <span className="rounded-full border border-lime-300/15 bg-lime-300/[0.06] px-2.5 py-1 font-mono text-[8px] text-lime-300">
                          Illustrative
                        </span>
                      </div>
                      <div className="mt-5 space-y-3">
                        {[
                          {
                            company: "Importer / Distributor",
                            detail: "Product category match",
                            status: "Research",
                          },
                          {
                            company: "Wholesale Buyer",
                            detail: "Target market fit",
                            status: "Review",
                          },
                          {
                            company: "Retail Group",
                            detail: "Potential account",
                            status: "Follow-up",
                          },
                        ].map((item, index) => (
                          <div
                            key={item.company}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.055] bg-black/10 p-3"
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${index === 1 ? "bg-lime-300/[0.08] text-lime-300" : "bg-cyan-300/[0.08] text-cyan-300"}`}
                            >
                              {index === 0 ? (
                                <Building2 className="h-4 w-4" />
                              ) : index === 1 ? (
                                <Store className="h-4 w-4" />
                              ) : (
                                <Handshake className="h-4 w-4" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-medium text-white">
                                {item.company}
                              </p>
                              <p className="mt-1 truncate text-[10px] text-slate-500">
                                {item.detail}
                              </p>
                            </div>
                            <span className="hidden rounded-full border border-white/[0.07] px-2 py-1 font-mono text-[8px] text-slate-400 sm:inline-flex">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <FileSpreadsheet className="h-4 w-4 text-lime-300" />
                        <span className="text-[10px] text-slate-400">
                          Lead tracking
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <MessageSquareText className="h-4 w-4 text-cyan-300" />
                        <span className="text-[10px] text-slate-400">
                          Buyer inquiries
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -right-2 -bottom-4 z-20 rounded-2xl border border-lime-300/15 bg-white/[0.08] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:-right-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/[0.10]">
                    <TrendingUp className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Export Workflow
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Research to Follow-up
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-9 right-12 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22D3EE]"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="B2B Export Support"
            title="Build a Clearer Path to"
            highlight="International Buyers."
            description="Export growth takes more than listing a product online. Your business needs clear product information, relevant market research, a professional digital presence, and a practical way to manage buyer conversations. DigiGrowtherz brings these activities into one organized B2B export support workflow."
          />

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:p-10"
            >
              <div className="absolute top-[-100px] right-[-80px] h-64 w-64 rounded-full bg-cyan-400/[0.07] blur-[100px]" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                    <Layers3 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                      A Connected Export Workflow
                    </p>
                    <h3 className="font-space-grotesk mt-1 text-xl font-semibold text-white sm:text-2xl">
                      From Product Readiness to Buyer Follow-up
                    </h3>
                  </div>
                </div>
                <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                  Our B2B export support helps bring together research,
                  marketplace preparation, product presentation, buyer
                  prospecting, and lead organization. Instead of treating each
                  task as a separate activity, we help create a consistent
                  workflow that your sales and export team can use and improve.
                </p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Research",
                      description:
                        "Markets, industries, buyer types, and competitors.",
                      icon: Search,
                    },
                    {
                      title: "Prepare",
                      description:
                        "Company profiles, product listings, and catalogs.",
                      icon: ClipboardList,
                    },
                    {
                      title: "Connect",
                      description:
                        "Prospect lists, outreach preparation, and inquiries.",
                      icon: Handshake,
                    },
                    {
                      title: "Organize",
                      description:
                        "Lead records, follow-up tasks, and next actions.",
                      icon: Workflow,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-cyan-300/20"
                      >
                        <Icon className="h-5 w-5 text-cyan-300" />
                        <h4 className="mt-4 text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
            >
              <div className="absolute bottom-[-100px] left-[-70px] h-64 w-64 rounded-full bg-lime-400/[0.07] blur-[100px]" />
              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.24em] text-lime-300 uppercase">
                  Who We Support
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white">
                  For Businesses Selling to Businesses
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Our export support is designed for businesses that supply
                  products, manage manufacturing, or serve wholesale and
                  distribution markets.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    {
                      title: "Manufacturers",
                      text: "Showcase production capabilities and product ranges.",
                      icon: Factory,
                    },
                    {
                      title: "Product Suppliers",
                      text: "Organize product information for wholesale buyers.",
                      icon: Package,
                    },
                    {
                      title: "Exporters & Wholesalers",
                      text: "Research prospects and manage buyer conversations.",
                      icon: Globe2,
                    },
                    {
                      title: "Multi-Brand Businesses",
                      text: "Coordinate product and brand presentation across markets.",
                      icon: Layers3,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                      >
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${index % 2 === 0 ? "bg-lime-300/[0.08] text-lime-300" : "bg-cyan-300/[0.08] text-cyan-300"}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                A well-organized export process gives your team a clearer view
                of target buyers, product information, conversations, and the
                next action required.
              </p>
              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Research / Present / Connect
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPORT SUPPORT SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Export Support Solutions"
            title="Practical Support for"
            highlight="Every Key Export Stage."
            description="From researching potential markets to preparing product information and tracking buyer inquiries, our B2B export solutions help your business manage important digital and commercial-development tasks with greater clarity."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((card) => (
              <SolutionCard key={card.number} {...card} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  Built Around Your Export Model
                </p>
                <h3 className="font-space-grotesk mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Support That Fits Your Products, Markets, and Team
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                  You can engage us for a defined export task or combine
                  multiple services into a connected workflow. We shape the
                  scope around your current export setup and priorities.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-6 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.10]"
              >
                Discuss Your Requirements
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070D14] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Our Export Support Process"
            title="A Clear Workflow from"
            highlight="Research to Follow-up."
            description="We follow a structured process to understand your business, research relevant buyers, prepare product information, and organize the next steps. Each stage is aligned with your project scope and the information your team can provide."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 grid gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.24em] text-lime-300 uppercase">
                A Practical Starting Point
              </p>
              <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Start with Your Product and Target Buyer
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "What products do you supply?",
                "Which countries do you want to reach?",
                "Who is your ideal business buyer?",
                "What sales and export materials do you already have?",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                  <span className="text-xs leading-5 text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORMS & TOOLS */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Platforms & Workflow Tools"
            title="The Right Channels for"
            highlight="Your Export Workflow."
            description="We select platforms and working tools according to your target buyers, product category, existing accounts, and internal process. The goal is to keep research, product information, outreach, and lead records useful and accessible to your team."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "B2B Marketplaces & Discovery",
                description:
                  "Support for researching and presenting your business across relevant B2B marketplaces and online discovery channels.",
                icon: Store,
                accent: "cyan" as const,
                tools: [
                  "Alibaba.com",
                  "B2B marketplace research",
                  "Product and supplier discovery",
                  "Competitor listing review",
                ],
              },
              {
                title: "Buyer Research & Communication",
                description:
                  "Digital channels used to identify relevant companies, understand buyer profiles, and prepare business-to-business communication.",
                icon: Globe2,
                accent: "lime" as const,
                tools: [
                  "LinkedIn research",
                  "Google search research",
                  "Business email workflows",
                  "Buyer and company profiling",
                ],
              },
              {
                title: "Data & Lead Management",
                description:
                  "Organize company information, product data, research findings, inquiry notes, and next actions in a format your team can maintain.",
                icon: FileSpreadsheet,
                accent: "cyan" as const,
                tools: [
                  "Microsoft Excel",
                  "Google Sheets",
                  "CRM and lead tracking tools",
                  "CSV and catalog workflows",
                ],
              },
            ].map((group, index) => {
              const Icon = group.icon;
              const isCyan = group.accent === "cyan";
              return (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative overflow-hidden rounded-3xl border bg-white/[0.025] p-7 sm:p-8 ${isCyan ? "border-cyan-300/[0.10]" : "border-lime-300/[0.10]"}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-space-grotesk mt-6 text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {group.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center gap-3 border-t border-white/[0.06] pt-3"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${isCyan ? "bg-cyan-300" : "bg-lime-300"}`}
                        />
                        <span className="text-xs text-slate-400">{tool}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
              <p className="max-w-3xl text-sm leading-7 text-slate-400">
                Tool access, marketplace account permissions, and paid
                subscriptions remain under your business ownership unless
                another arrangement is agreed. We work with the channels and
                systems relevant to your project.
              </p>
            </div>
            <span className="shrink-0 font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
              Tools Matched to Scope
            </span>
          </motion.div>
        </div>
      </section>

      {/* WHY DIGIGROWTHERZ */}
      <section
        id="why-digigrowtherz"
        className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2">
                <BadgeCheck className="h-4 w-4 text-lime-300" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-lime-300 uppercase">
                  Why Choose DigiGrowtherz
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                More Clarity for Your <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  B2B Export Growth.
                </span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Export development involves several connected activities.
                DigiGrowtherz combines research, digital presentation, content,
                and workflow support to help your team approach those activities
                in a more organized way.
              </p>
              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-cyan-200 transition-colors hover:text-lime-200"
              >
                Talk About Your Export Requirements
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Research Before Outreach",
                  description:
                    "Start with relevant buyer and market criteria instead of relying on broad, untargeted lists.",
                  icon: Search,
                  accent: "cyan" as const,
                },
                {
                  title: "Clear Product Presentation",
                  description:
                    "Organize company details, product specifications, and supporting content for B2B buyers.",
                  icon: Package,
                  accent: "lime" as const,
                },
                {
                  title: "Connected Digital Support",
                  description:
                    "Bring marketplace content, websites, design, and lead workflows together where useful.",
                  icon: Layers3,
                  accent: "cyan" as const,
                },
                {
                  title: "Organized Follow-through",
                  description:
                    "Keep buyer research, inquiry notes, and next actions visible to your team.",
                  icon: ListChecks,
                  accent: "lime" as const,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const isCyan = item.accent === "cyan";
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:bg-white/[0.045]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-16 rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  One Connected View
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Keep the Export Journey Organized
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A shared view helps your team understand where each activity
                  stands, what information is missing, and what should happen
                  next.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {[
                  { label: "Research", icon: Search },
                  { label: "Prepare", icon: FileText },
                  { label: "Connect", icon: Handshake },
                  { label: "Follow up", icon: Mail },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="relative flex flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-5 text-center"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${index % 2 === 0 ? "bg-cyan-300/[0.08] text-cyan-300" : "bg-lime-300/[0.08] text-lime-300"}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="mt-3 text-xs font-medium text-slate-300">
                        {item.label}
                      </span>
                      {index < 3 && (
                        <ArrowRight className="absolute top-1/2 -right-3 z-10 hidden h-4 w-4 -translate-y-1/2 text-slate-600 sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2">
                <MessageSquareText className="h-4 w-4 text-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-cyan-300 uppercase">
                  B2B Export Support FAQs
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Questions About
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Export Support?
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
                Find answers about our B2B export support services, buyer
                research, Alibaba support, lead generation, and the information
                needed to get started.
              </p>
              <div className="mt-9 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/[0.08]">
                    <Mail className="h-4 w-4 text-lime-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Have a specific export requirement?
                    </p>
                    <Link
                      href="/contact"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-lime-300"
                    >
                      Contact our team <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFAQ === index;
                return (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.45, delay: index * 0.035 }}
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-cyan-300/20 bg-white/[0.045]" : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`export-faq-panel-${index}`}
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm leading-6 font-semibold text-white sm:text-base">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300" : "border-white/[0.08] text-slate-400"}`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div id={`export-faq-panel-${index}`} hidden={!isOpen}>
                      <div className="border-t border-white/[0.06] px-5 py-5 sm:px-6">
                        <p className="text-sm leading-7 text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="cta"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-14 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="absolute top-[-180px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px]" />
            <div className="absolute right-[-150px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-lime-400/[0.06] blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3 py-2 md:px-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[9px] tracking-[0.26em] text-lime-300 uppercase md:text-[10px]">
                    Start Your Export Growth Plan
                  </span>
                </div>
                <h2 className="font-space-grotesk mt-7 max-w-3xl text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[48px]">
                  Ready to Reach
                  <br />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    More Global Buyers?
                  </span>
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Tell us about your products, export markets, and business
                  goals. DigiGrowtherz can help you plan a practical B2B export
                  support workflow for buyer research, product presentation,
                  lead generation, and inquiry follow-up.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)] md:px-8"
                  >
                    Discuss B2B Export Support
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                  >
                    Talk to Our Team
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                className="relative flex min-h-[330px] items-center justify-center"
              >
                <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/[0.08] blur-[110px]" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full max-w-sm rounded-[28px] border border-white/[0.10] bg-[#0A121A]/90 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                        Export Readiness
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Your Next Steps
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/[0.07]">
                      <Sparkles className="h-5 w-5 text-lime-300" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Define your target markets",
                      "Prepare company and product details",
                      "Identify relevant buyer profiles",
                      "Organize inquiries and follow-ups",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${index % 2 === 0 ? "bg-cyan-300/[0.09] text-cyan-300" : "bg-lime-300/[0.09] text-lime-300"}`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-xs leading-5 text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <span className="font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
                      A plan shaped around you
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
