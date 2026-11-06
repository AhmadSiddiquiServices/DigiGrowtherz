"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  HandCoins,
  HeartPulse,
  Landmark,
  LockKeyhole,
  MonitorCheck,
  ReceiptText,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  Wallet,
  Workflow,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Accent = "cyan" | "lime";

type ServiceItem = {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  accent: Accent;
};

type ProcessStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  accent: Accent;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewportOnce = { once: true, amount: 0.18 } as const;

const serviceItems: ServiceItem[] = [
  {
    number: "01",
    label: "Eligibility Verification",
    title: "Verify Coverage Before the Visit",
    description:
      "Support front-end revenue cycle workflows by checking patient insurance eligibility and benefit information through the payer channels and systems approved by your practice.",
    items: [
      "Patient insurance eligibility checks",
      "Coverage and benefit detail review",
      "Copay, deductible, and coinsurance information capture",
      "Verification status and follow-up notes",
    ],
    icon: UserRoundCheck,
    accent: "cyan",
  },
  {
    number: "02",
    label: "Charge Entry & Review",
    title: "Prepare Complete, Accurate Billing Data",
    description:
      "Organize encounter and charge information for the billing workflow, checking required fields against the documentation and procedures supplied by the provider.",
    items: [
      "Charge entry from provider-approved records",
      "Demographic and insurance detail checks",
      "Missing information identification",
      "Pre-submission billing review support",
    ],
    icon: ClipboardList,
    accent: "lime",
  },
  {
    number: "03",
    label: "Claims Submission",
    title: "Prepare and Submit Clean Claims",
    description:
      "Help move claims through the submission workflow by organizing claim data, reviewing common billing fields, and monitoring acknowledgements from payer or clearinghouse channels.",
    items: [
      "Professional and institutional claim workflows, as agreed",
      "Claim data and required-field review",
      "Clearinghouse submission coordination",
      "Rejection and acknowledgement tracking",
    ],
    icon: FileCheck2,
    accent: "cyan",
  },
  {
    number: "04",
    label: "Denial Management",
    title: "Investigate Denials and Coordinate Follow-Up",
    description:
      "Organize denial information, identify recurring rejection patterns, and prepare the next administrative action based on payer guidance and practice-approved procedures.",
    items: [
      "Denial and rejection categorization",
      "Payer remark and adjustment review",
      "Correction and resubmission coordination",
      "Appeal documentation preparation support",
    ],
    icon: XCircle,
    accent: "lime",
  },
  {
    number: "05",
    label: "Payment Posting",
    title: "Keep Payments and Adjustments Organized",
    description:
      "Support payment posting workflows by recording payer and patient payment details from remittance information and reconciling discrepancies for practice review.",
    items: [
      "ERA and EOB information processing",
      "Payer and patient payment posting",
      "Contractual adjustment entry support",
      "Unmatched payment and discrepancy follow-up",
    ],
    icon: HandCoins,
    accent: "cyan",
  },
  {
    number: "06",
    label: "Accounts Receivable",
    title: "Follow Up on Outstanding Claims",
    description:
      "Maintain visibility into unpaid and underpaid claims with organized status checks, payer follow-up, aging review, and clear notes on the next action required.",
    items: [
      "Insurance accounts receivable follow-up",
      "Aging bucket review and work queues",
      "Underpayment and no-response identification",
      "Payer call and portal follow-up documentation",
    ],
    icon: Wallet,
    accent: "lime",
  },
  {
    number: "07",
    label: "Patient Billing Support",
    title: "Make Patient Balances Easier to Manage",
    description:
      "Assist with the administrative side of patient billing through statement preparation, balance inquiries, and follow-up workflows defined by your practice.",
    items: [
      "Patient statement and balance workflows",
      "Payment and account inquiry routing",
      "Patient responsibility information support",
      "Follow-up status and communication records",
    ],
    icon: ReceiptText,
    accent: "cyan",
  },
  {
    number: "08",
    label: "Reporting & Revenue Cycle",
    title: "Turn Billing Activity Into Useful Insight",
    description:
      "Bring key billing activity into consistent reports so practice teams can review claim status, denial trends, outstanding balances, and workflow bottlenecks.",
    items: [
      "Claims and collections activity summaries",
      "A/R aging and outstanding claim reports",
      "Denial reason and trend tracking",
      "Workflow status and productivity reporting",
    ],
    icon: BarChart3,
    accent: "lime",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    label: "Discovery",
    title: "Understand Your Practice and Workflow",
    description:
      "We discuss your specialty, current billing process, software environment, payer mix, responsibilities, and the areas where your team needs operational support.",
    items: [
      "Practice and service overview",
      "Current workflow and pain points",
      "Agreed scope and communication plan",
    ],
    icon: Stethoscope,
    accent: "cyan",
  },
  {
    number: "02",
    label: "Setup",
    title: "Align Access, Rules, and Work Queues",
    description:
      "Before work begins, the parties define approved access, information handling requirements, task ownership, escalation paths, and the billing rules relevant to the engagement.",
    items: [
      "System and access coordination",
      "Payer and billing workflow notes",
      "Privacy, security, and agreement review",
    ],
    icon: ShieldCheck,
    accent: "lime",
  },
  {
    number: "03",
    label: "Daily Processing",
    title: "Work Claims and Billing Tasks",
    description:
      "Our team carries out the agreed billing activities using practice-provided information and documented procedures, keeping work queues and exceptions organized.",
    items: [
      "Eligibility and charge workflows",
      "Claim preparation and submission",
      "Posting, follow-up, and task updates",
    ],
    icon: Workflow,
    accent: "cyan",
  },
  {
    number: "04",
    label: "Resolution",
    title: "Track Exceptions and Payer Responses",
    description:
      "Rejected claims, denials, missing details, and payer questions are routed through the agreed correction and escalation process with clear supporting notes.",
    items: [
      "Rejection and denial work queues",
      "Payer response follow-up",
      "Practice review and escalation",
    ],
    icon: ClipboardCheck,
    accent: "lime",
  },
  {
    number: "05",
    label: "Reporting",
    title: "Review Progress and Next Actions",
    description:
      "Regular reporting gives your team a structured view of completed work, pending claims, aging balances, recurring issues, and items requiring practice input.",
    items: [
      "A/R and claims status summaries",
      "Denial and payment trend review",
      "Action list for the next cycle",
    ],
    icon: BarChart3,
    accent: "cyan",
  },
];

const toolGroups = [
  {
    title: "Practice Management & EHR Workflows",
    description:
      "Work within the electronic health record and practice management systems selected by your organization, subject to approved access and the agreed scope.",
    icon: MonitorCheck,
    items: [
      "Patient and encounter data workflows",
      "Charge and claim work queues",
      "Practice management system coordination",
      "Provider-approved documentation handoffs",
    ],
  },
  {
    title: "Payer & Clearinghouse Coordination",
    description:
      "Use the payer portals, clearinghouse channels, and remittance workflows made available by the practice to process claims and track responses.",
    icon: Landmark,
    items: [
      "Payer portal follow-up",
      "Eligibility and benefits channels",
      "Claim acknowledgements and rejections",
      "ERA, EOB, and remittance information",
    ],
  },
  {
    title: "Reporting & Secure Communication",
    description:
      "Keep billing tasks, escalations, and performance summaries organized through the tools and secure communication methods approved for the engagement.",
    icon: FileText,
    items: [
      "A/R aging and claims reports",
      "Denial and follow-up trackers",
      "Practice-approved shared workspaces",
      "Documented communication and escalation",
    ],
  },
];

const differentiators = [
  {
    title: "Process-Driven Billing Support",
    description:
      "Work is organized around documented procedures, agreed responsibilities, and clear handoffs with your in-house team.",
    icon: Workflow,
    accent: "cyan" as const,
  },
  {
    title: "Clear Claim Visibility",
    description:
      "Track submissions, payer responses, denials, outstanding balances, and next actions through structured work queues and reporting.",
    icon: Search,
    accent: "lime" as const,
  },
  {
    title: "Careful Information Handling",
    description:
      "Access, communication, and handling of protected information are defined around the agreements, safeguards, and systems approved for the engagement.",
    icon: LockKeyhole,
    accent: "cyan" as const,
  },
  {
    title: "Support That Fits Your Practice",
    description:
      "The service scope can be shaped around selected revenue cycle tasks, existing staff roles, payer workflows, and practice priorities.",
    icon: Building2,
    accent: "lime" as const,
  },
];

const faqItems = [
  {
    question: "What do medical billing services include?",
    answer:
      "Medical billing services can include insurance eligibility verification, charge entry, claim preparation and submission, payment posting, denial follow-up, accounts receivable workflows, patient billing support, and revenue cycle reporting. The exact responsibilities are agreed with each practice before work begins.",
  },
  {
    question:
      "Which healthcare providers can use your medical billing support?",
    answer:
      "Our services are intended for healthcare practices, clinics, and provider organizations that need support with selected billing and revenue cycle tasks. During discovery, we review your specialty, systems, payer mix, claim volume, and current process to understand whether the requested scope is a suitable fit.",
  },
  {
    question: "Do you provide end-to-end medical billing or selected services?",
    answer:
      "The engagement can focus on selected tasks or a broader set of revenue cycle activities, depending on your needs and the agreed scope. This may include front-end eligibility work, claims processing, payment posting, denial management, A/R follow-up, and reporting. Responsibilities and handoffs are documented before launch.",
  },
  {
    question:
      "Can you work with our existing EHR or practice management software?",
    answer:
      "We can review the systems and payer channels your practice already uses and discuss an appropriate workflow based on available access, permissions, and system capabilities. Specific integrations or software compatibility should be confirmed during onboarding rather than assumed.",
  },
  {
    question: "Do you handle medical coding?",
    answer:
      "Coding-related support can be discussed as part of the engagement, based on the practice's specialty, documentation, coding requirements, and agreed responsibilities. Clinical documentation decisions and provider responsibilities remain with the appropriately qualified healthcare professionals. We do not change clinical records to obtain reimbursement.",
  },
  {
    question: "How do you handle HIPAA and protected health information?",
    answer:
      "Before any access to protected health information, the practice and service provider should review the required contractual arrangements, including a Business Associate Agreement where applicable, and define approved systems, user permissions, security safeguards, and handling procedures. We do not claim a certification or compliance status on this page; the applicable requirements must be confirmed for each engagement.",
  },
  {
    question: "Can you help with denied and unpaid insurance claims?",
    answer:
      "Yes. Denial and accounts receivable support can include organizing payer responses, categorizing denial reasons, checking claim status, identifying missing information, coordinating corrections, and preparing appeal documentation for practice review. Final decisions and clinical or provider attestations remain with the practice.",
  },
  {
    question: "Do you guarantee collections or a reduction in denials?",
    answer:
      "No service provider can responsibly guarantee payer decisions, reimbursement amounts, collection levels, or a specific reduction in denials. Outcomes depend on factors such as coverage, documentation, coding, payer policies, timely filing, and the practice's own processes. We focus on consistent workflows, accurate task handling, follow-up, and useful reporting.",
  },
];

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
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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

function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = item.icon;
  const isCyan = item.accent === "cyan";
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
        className={`absolute inset-0 bg-gradient-to-br ${
          isCyan ? "from-cyan-300/[0.05]" : "from-lime-300/[0.05]"
        } via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div
        className={`absolute top-0 left-8 h-px w-20 bg-gradient-to-r ${
          isCyan ? "from-cyan-300/60" : "from-lime-300/60"
        } to-transparent`}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={`font-mono text-[10px] tracking-[0.24em] uppercase ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
            >
              {item.number} — {item.label}
            </p>
            <h3 className="font-space-grotesk mt-3 text-xl leading-tight font-semibold text-white sm:text-2xl">
              {item.title}
            </h3>
          </div>
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
              isCyan
                ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300"
                : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {item.description}
        </p>
        <div className="mt-6 grid gap-2.5">
          {item.items.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 border-t border-white/[0.06] pt-2.5"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isCyan
                    ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.7)]"
                    : "bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.7)]"
                }`}
              />
              <span className="text-xs leading-5 text-slate-400">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProcessCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  const isCyan = step.accent === "cyan";
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
        className={`absolute inset-0 bg-gradient-to-br ${
          isCyan ? "from-cyan-300/[0.05]" : "from-lime-300/[0.05]"
        } via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
              isCyan
                ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300"
                : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={`font-mono text-[10px] tracking-[0.24em] ${isCyan ? "text-cyan-300/70" : "text-lime-300/70"}`}
          >
            {step.number}
          </span>
        </div>
        <p
          className={`mt-6 font-mono text-[10px] tracking-[0.24em] uppercase ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
        >
          {step.label}
        </p>
        <h3 className="font-space-grotesk mt-2 text-xl leading-tight font-semibold text-white">
          {step.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {step.description}
        </p>
        <div className="mt-6 space-y-2.5">
          {step.items.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 border-t border-white/[0.06] pt-2.5"
            >
              <Check
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
              />
              <span className="text-xs leading-5 text-slate-400">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function MedicalBillingServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      {/* HERO — MEDICAL BILLING SERVICES */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="pointer-events-none absolute top-[24%] -left-20 h-72 w-72 rounded-full bg-lime-400/[0.06] blur-[120px]" />
        <div className="relative z-10 mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl"
              >
                <HeartPulse className="h-4 w-4 text-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  Medical Billing Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-space-grotesk text-[36px] leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-[52px]"
              >
                Simplify Your <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Medical Billing Workflow.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
              >
                DigiGrowtherz provides medical billing services and revenue
                cycle support for healthcare practices. From eligibility
                verification and claims processing to payment posting, denial
                follow-up, and accounts receivable workflows, we help organize
                the administrative work behind your billing operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)]"
                >
                  Discuss Medical Billing Support
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <motion.a
                  href="#solutions"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  Explore Billing Services
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-8 md:gap-14"
              >
                <div>
                  <h4 className="text-xl font-bold text-white">Claims</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Submission & Follow-Up
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Payments</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Posting & Reconciliation
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">A/R</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Organized Work Queues
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* REVENUE CYCLE WORKSPACE VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="relative flex min-h-[560px] items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[470px] w-[470px] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
              </div>
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
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-4 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22D3EE]" />
                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        revenue-cycle-workspace
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[400px] overflow-hidden bg-gradient-to-br from-[#101C23] via-[#0B151B] to-[#081017] p-6 sm:p-8">
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
                          Billing Operations
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Revenue Cycle Overview
                        </h3>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                        <HeartPulse className="h-5 w-5 text-cyan-300" />
                      </div>
                    </div>

                    <div className="relative mt-8 grid grid-cols-3 gap-3">
                      {[
                        { label: "Claims", value: "Queue", accent: "cyan" },
                        { label: "Payments", value: "Posting", accent: "lime" },
                        { label: "Follow-Up", value: "A/R", accent: "cyan" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:p-4"
                        >
                          <p className="font-mono text-[8px] tracking-[0.13em] text-slate-500 uppercase sm:text-[9px]">
                            {item.label}
                          </p>
                          <p
                            className={`mt-3 text-sm font-semibold sm:text-base ${item.accent === "lime" ? "text-lime-300" : "text-cyan-300"}`}
                          >
                            {item.value}
                          </p>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                            <div
                              className={`h-full w-2/3 rounded-full ${item.accent === "lime" ? "bg-lime-300/70" : "bg-cyan-300/70"}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.16em] text-slate-500 uppercase">
                            Workflow Snapshot
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            Billing Task Progress
                          </p>
                        </div>
                        <BarChart3 className="h-4 w-4 text-lime-300" />
                      </div>
                      <div className="mt-6 space-y-4">
                        {[
                          {
                            name: "Eligibility review",
                            width: "w-[82%]",
                            color: "bg-cyan-300/75",
                          },
                          {
                            name: "Claims processing",
                            width: "w-[68%]",
                            color: "bg-lime-300/75",
                          },
                          {
                            name: "Payment posting",
                            width: "w-[74%]",
                            color: "bg-cyan-300/60",
                          },
                        ].map((item) => (
                          <div key={item.name}>
                            <div className="mb-2 flex items-center justify-between gap-3">
                              <span className="text-xs text-slate-400">
                                {item.name}
                              </span>
                              <span className="font-mono text-[8px] text-slate-600">
                                WORKFLOW
                              </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                              <div
                                className={`h-full rounded-full ${item.width} ${item.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/[0.09]">
                          <FileCheck2 className="h-4 w-4 text-cyan-300" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500">Claims</p>
                          <p className="text-xs font-medium text-white">
                            Review & Submit
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300/[0.09]">
                          <Wallet className="h-4 w-4 text-lime-300" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500">Accounts</p>
                          <p className="text-xs font-medium text-white">
                            Track & Follow Up
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 bottom-8 z-20 hidden rounded-2xl border border-lime-300/15 bg-[#0A121A]/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                    <ClipboardCheck className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">
                      Workflow
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Clear Task Ownership
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Medical Billing Overview"
            title="A More Organized"
            highlight="Revenue Cycle."
            description="Medical billing connects the administrative steps between a patient encounter and payment resolution. DigiGrowtherz supports healthcare practices with structured billing workflows, clear follow-up, and reporting that helps teams see what has been submitted, paid, denied, or left outstanding."
          />

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:col-span-7"
            >
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-[90px]" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06]">
                    <Workflow className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 uppercase">
                      Revenue Cycle Support
                    </p>
                    <h3 className="font-space-grotesk mt-1 text-xl font-semibold text-white sm:text-2xl">
                      From Patient Visit to Claim Resolution
                    </h3>
                  </div>
                </div>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Our medical billing support can cover the front-end,
                  mid-cycle, and back-end administrative tasks required to keep
                  billing operations moving. We work within the process and
                  systems approved by your organization, follow documented
                  instructions, and route exceptions to the appropriate practice
                  contact.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Front-End Tasks",
                      text: "Eligibility, benefits, patient and insurance detail review.",
                      icon: UserRoundCheck,
                    },
                    {
                      title: "Claims Workflow",
                      text: "Charge entry, claim preparation, submission, and rejection tracking.",
                      icon: FileCheck2,
                    },
                    {
                      title: "Payment Cycle",
                      text: "Remittance review, payment posting, and adjustment coordination.",
                      icon: HandCoins,
                    },
                    {
                      title: "Follow-Up & Insight",
                      text: "Denial work queues, A/R follow-up, and billing reports.",
                      icon: BarChart3,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.045]"
                      >
                        <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-300" />
                        <h4 className="mt-4 text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.text}
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
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:col-span-5"
            >
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-lime-400/[0.06] blur-[90px]" />
              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  Built Around Your Practice
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white">
                  Support That Fits Your Billing Setup
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Every practice has different specialties, payer requirements,
                  software, staffing models, and patient workflows. We start by
                  understanding your existing process, then define the tasks,
                  approvals, and handoffs that make sense for your team.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    "Independent healthcare practices",
                    "Medical clinics and provider groups",
                    "Practices seeking billing workflow support",
                    "Teams managing claims and A/R backlogs",
                    "Organizations needing structured reporting",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">{item}</span>
                      {index % 2 === 0 ? (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300" />
                      ) : (
                        <Check className="h-4 w-4 shrink-0 text-lime-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="mt-14 border-t border-white/[0.08] pt-6 lg:mt-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                Better billing administration starts with clear information,
                repeatable steps, timely follow-up, and shared visibility into
                unresolved claims. We help your practice organize those tasks so
                your team can focus on care delivery and operational decisions.
              </p>
              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Clarity / Follow-Up / Visibility
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Medical Billing Solutions"
            title="Support Across the"
            highlight="Billing Cycle."
            description="Choose the medical billing services that fit your current workflow. From insurance verification and claims submission to denials, payment posting, and accounts receivable follow-up, each task is defined around your practice's requirements and responsibilities."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item) => (
              <ServiceCard key={item.number} item={item} />
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl border border-cyan-300/10 bg-gradient-to-r from-cyan-300/[0.045] via-white/[0.02] to-lime-300/[0.045] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  Defined Scope & Responsibilities
                </p>
                <h3 className="font-space-grotesk mt-3 text-xl font-semibold text-white sm:text-2xl">
                  A billing partner that works with your existing team.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Clinical decisions, provider documentation, coding approvals,
                  payer contracts, and final account decisions remain with the
                  appropriately responsible practice personnel. Our role is to
                  support the agreed administrative billing workflow.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                Define Your Billing Scope <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070D14] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Our Medical Billing Process"
            title="A Clear Process From"
            highlight="Setup to Reporting."
            description="A structured onboarding and operating process helps define access, responsibilities, communication, and the way billing work is reviewed. The workflow is adapted to your practice rather than forcing your team into a generic process."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="mt-14 grid gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/15 bg-lime-300/[0.06]">
              <ShieldCheck className="h-6 w-6 text-lime-300" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Privacy and access are addressed before processing begins.
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                The practice and service provider should agree on the required
                contracts, including a Business Associate Agreement where
                applicable, along with user permissions, approved systems,
                safeguards, escalation contacts, and procedures for handling
                protected health information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY & WORKFLOWS */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Systems & Workflows"
            title="Work Within Your"
            highlight="Existing Setup."
            description="Medical billing depends on accurate information moving between practice management systems, EHR workflows, payer portals, clearinghouses, and reporting tools. We review the tools available to your organization and confirm the working process during onboarding."
          />
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {toolGroups.map((group, index) => {
              const Icon = group.icon;
              const isCyan = index % 2 === 0;
              return (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  whileHover={{ y: -5 }}
                  className={`group relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 ${isCyan ? "border-cyan-300/[0.10] hover:border-cyan-300/25" : "border-lime-300/[0.10] hover:border-lime-300/25"}`}
                >
                  <div
                    className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl ${isCyan ? "bg-cyan-300/[0.06]" : "bg-lime-300/[0.06]"}`}
                  />
                  <div className="relative">
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
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 border-t border-white/[0.06] pt-3"
                        >
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
                          />
                          <span className="text-xs leading-5 text-slate-400">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-8 text-xs leading-6 text-slate-600">
            Specific software access, integrations, clearinghouse connectivity,
            and payer portal permissions are subject to the systems selected by
            your practice and the access authorized for the engagement.
          </p>
        </div>
      </section>

      {/* WHY DIGIGROWTHERZ */}
      <section
        id="why-digigrowtherz"
        className="relative overflow-hidden bg-[#081019] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-lime-300 uppercase sm:text-[11px]">
                  Why DigiGrowtherz
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Billing Support <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Built Around Your Practice.
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
              Your billing workflow affects daily administration, payer
              communication, and visibility into outstanding revenue.
              DigiGrowtherz focuses on clearly defined responsibilities,
              consistent task handling, documented follow-up, and reporting that
              supports your existing team.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              const isCyan = item.accent === "cyan";
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:bg-white/[0.045]"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="mt-14 grid gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                A Practical Working Relationship
              </p>
              <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Your practice stays in control of clinical and financial
                decisions.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                We support the administrative tasks assigned to us. Your
                authorized practice personnel retain responsibility for clinical
                documentation, medical necessity, coding and billing approvals,
                payer contracts, patient care, and final decisions about claims
                and accounts.
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06]">
              <BadgeCheck className="h-7 w-7 text-cyan-300" />
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
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-cyan-300 uppercase sm:text-[11px]">
                  Medical Billing FAQs
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Questions About <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Medical Billing Support.
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Find answers about our medical billing services, revenue cycle
                workflows, systems, privacy considerations, and how an
                engagement is structured.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFAQ === index;
              return (
                <motion.div
                  key={item.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.45, delay: index * 0.025 }}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-cyan-300/20 bg-white/[0.045]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14]"}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`medical-billing-faq-panel-${index}`}
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="text-sm leading-6 font-semibold text-white sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isOpen ? "rotate-180 border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300" : "border-white/[0.08] bg-white/[0.03] text-slate-500"}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`medical-billing-faq-panel-${index}`}
                    hidden={!isOpen}
                  >
                    <div className="border-t border-white/[0.07] px-5 py-5 sm:px-7">
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
      </section>

      {/* FINAL CTA */}
      <section
        id="cta"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[160px]" />
        <div className="relative z-10 mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] p-7 sm:p-10 lg:p-14"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[9px] tracking-[0.25em] text-lime-300 uppercase md:text-[10px]">
                    Let's Discuss Your Workflow
                  </span>
                </div>
                <h2 className="font-space-grotesk mt-7 max-w-3xl text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[48px]">
                  Ready to Organize Your <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Medical Billing Process?
                  </span>
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Tell us about your practice, current billing setup, payer
                  workflows, and the tasks where your team needs support.
                  DigiGrowtherz can help define a practical medical billing and
                  revenue cycle workflow around your requirements.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-[13px] font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)] md:px-8 md:text-sm"
                  >
                    Discuss Medical Billing Services
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
                        Billing Readiness
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Your Starting Checklist
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/[0.07]">
                      <ClipboardCheck className="h-5 w-5 text-lime-300" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Share your practice and specialty details",
                      "Outline your current billing workflow",
                      "Identify systems, payers, and work queues",
                      "Agree access, responsibilities, and reporting",
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
                      A workflow shaped around your practice
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
