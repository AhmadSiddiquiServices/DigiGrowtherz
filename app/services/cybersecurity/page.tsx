"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Cloud,
  Database,
  FileCheck2,
  Fingerprint,
  Globe2,
  HardDrive,
  KeyRound,
  Laptop,
  LifeBuoy,
  ListChecks,
  LockKeyhole,
  MonitorCheck,
  RefreshCw,
  ScanSearch,
  Server,
  Shield,
  ShieldAlert,
  Target,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewportOnce = { once: true, amount: 0.18 } as const;

type Accent = "cyan" | "lime";
type IconComponent = LucideIcon;

const solutionCards: {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  icon: IconComponent;
  accent: Accent;
}[] = [
  {
    number: "01",
    label: "Security Assessment",
    title: "Understand Your Security Risks",
    description:
      "Get a clearer view of your digital security posture. We review relevant systems, configurations, access practices, and potential exposure points to help your team understand where attention is needed.",
    items: [
      "Initial security posture review",
      "Asset and exposure discovery",
      "Risk identification and prioritization",
      "Practical findings and recommendations",
    ],
    icon: ScanSearch,
    accent: "cyan",
  },
  {
    number: "02",
    label: "Website & Application Security",
    title: "Strengthen Your Websites and Applications",
    description:
      "Review the security foundations of business websites, content management systems, e-commerce stores, and web applications. Testing is performed only against systems and environments authorized by the client.",
    items: [
      "Website and CMS security review",
      "Application and API configuration checks",
      "Authentication and access-control review",
      "Security recommendations for identified issues",
    ],
    icon: Globe2,
    accent: "lime",
  },
  {
    number: "03",
    label: "Infrastructure & Cloud Security",
    title: "Harden Servers, Hosting, and Cloud Environments",
    description:
      "Improve the configuration of the infrastructure that supports your business. We review agreed hosting, server, network, and cloud settings and help prioritize practical hardening measures.",
    items: [
      "Server and hosting configuration review",
      "Cloud security settings assessment",
      "Firewall and network exposure review",
      "System updates and secure configuration guidance",
    ],
    icon: Server,
    accent: "cyan",
  },
  {
    number: "04",
    label: "Identity & Access Security",
    title: "Help Protect Business Accounts and Access",
    description:
      "Reduce avoidable account risks by reviewing how users, administrators, and service accounts access business systems. Recommendations focus on appropriate permissions and safer sign-in practices.",
    items: [
      "Multi-factor authentication guidance",
      "User roles and permission review",
      "Privileged account access checks",
      "Account lifecycle and access hygiene",
    ],
    icon: Fingerprint,
    accent: "lime",
  },
  {
    number: "05",
    label: "Email & Endpoint Protection",
    title: "Improve Everyday Business Security",
    description:
      "Review common security controls around employee devices and business email to help reduce exposure to phishing, unsafe configurations, and unauthorized access.",
    items: [
      "Business email security configuration review",
      "Phishing-risk reduction guidance",
      "Endpoint protection and device-baseline review",
      "Safer remote-work access recommendations",
    ],
    icon: Laptop,
    accent: "cyan",
  },
  {
    number: "06",
    label: "Backup & Recovery Readiness",
    title: "Prepare for Disruption and Data Loss",
    description:
      "Review backup practices and recovery readiness so your organization understands how important data and systems could be restored after an incident or operational disruption.",
    items: [
      "Backup coverage and configuration review",
      "Recovery objectives and dependencies",
      "Restore-process readiness checks",
      "Business continuity improvement actions",
    ],
    icon: HardDrive,
    accent: "lime",
  },
  {
    number: "07",
    label: "Incident Response Readiness",
    title: "Know What to Do When an Incident Happens",
    description:
      "Make incident handling more organized with agreed response roles, escalation paths, communication steps, and recovery priorities. Readiness activities are tailored to your team and operating environment.",
    items: [
      "Incident response plan and checklist",
      "Roles and escalation contacts",
      "Response and recovery workflow planning",
      "Tabletop exercise planning where agreed",
    ],
    icon: LifeBuoy,
    accent: "cyan",
  },
  {
    number: "08",
    label: "Security Awareness & Maintenance",
    title: "Build Safer Habits and Ongoing Discipline",
    description:
      "Support a more security-aware workplace through practical employee guidance and a defined review cycle for agreed controls, systems, and improvement actions.",
    items: [
      "Employee security awareness sessions",
      "Phishing and password-safety education",
      "Routine security review planning",
      "Action tracking and improvement reports",
    ],
    icon: BookOpenCheck,
    accent: "lime",
  },
];

const processSteps = [
  {
    number: "01",
    label: "Discovery",
    title: "Understand Your Business and Systems",
    description:
      "We discuss your business operations, critical systems, current concerns, and security objectives. The assessment boundary and any testing permissions are agreed before technical work begins.",
    items: [
      "Business and system requirements",
      "In-scope assets and environments",
      "Written authorization and boundaries",
    ],
    icon: ClipboardCheck,
    accent: "cyan" as const,
  },
  {
    number: "02",
    label: "Assessment",
    title: "Review the Current Security Posture",
    description:
      "We assess the agreed websites, applications, infrastructure, accounts, or processes using methods appropriate to the approved scope and access provided.",
    items: [
      "Configuration and exposure review",
      "Control and access checks",
      "Evidence-based findings",
    ],
    icon: ScanSearch,
    accent: "lime" as const,
  },
  {
    number: "03",
    label: "Prioritization",
    title: "Turn Findings Into a Clear Action Plan",
    description:
      "Findings are organized by practical business risk, impact, and remediation priority so your team can focus on the improvements that matter most.",
    items: [
      "Risk-based issue prioritization",
      "Recommended corrective actions",
      "Dependencies and ownership",
    ],
    icon: ListChecks,
    accent: "cyan" as const,
  },
  {
    number: "04",
    label: "Improvement",
    title: "Implement Agreed Security Controls",
    description:
      "Where implementation is part of the engagement, we work with your team to apply approved hardening measures, strengthen configurations, and document relevant changes.",
    items: [
      "Approved configuration improvements",
      "Access and protection controls",
      "Change notes and handover",
    ],
    icon: Wrench,
    accent: "lime" as const,
  },
  {
    number: "05",
    label: "Review",
    title: "Validate and Plan the Next Steps",
    description:
      "We review completed actions, explain remaining considerations, and outline a practical schedule for future checks based on your systems and risk profile.",
    items: [
      "Remediation review where in scope",
      "Security findings summary",
      "Ongoing improvement recommendations",
    ],
    icon: RefreshCw,
    accent: "cyan" as const,
  },
];

const faqItems = [
  {
    question: "What do your cybersecurity services include?",
    answer:
      "Cybersecurity services are scoped around your business systems and priorities. Depending on the engagement, support may include security posture assessments, website and application security reviews, infrastructure and cloud hardening, identity and access checks, email and endpoint security guidance, backup readiness, incident response planning, employee awareness, and ongoing improvement reviews.",
  },
  {
    question: "Can you assess the security of our website or web application?",
    answer:
      "Yes. We can review agreed business websites, content management systems, e-commerce platforms, web applications, and API configurations. Any active testing is limited to systems you own or are explicitly authorized to have assessed, with scope and testing boundaries agreed in advance.",
  },
  {
    question: "Do you provide penetration testing?",
    answer:
      "Authorized security testing can be discussed as a separately scoped engagement where the required expertise, access, written permission, and testing boundaries are confirmed. We do not test third-party systems or conduct activity outside the authorization provided. The assessment proposal will explain exactly what is and is not included.",
  },
  {
    question: "Can you help secure WordPress, Shopify, and custom websites?",
    answer:
      "We can review security-related configurations and practices for supported websites and online platforms, including WordPress, Shopify storefront environments, and custom web applications. The available work depends on the platform, hosting arrangement, access level, and the specific controls that can be reviewed or changed.",
  },
  {
    question: "Do you guarantee that our business will never be hacked?",
    answer:
      "No responsible provider can guarantee complete protection from every cyber threat. Cybersecurity reduces risk through better controls, timely maintenance, monitoring where agreed, and preparation. Our recommendations explain identified risks and practical ways to improve your security posture, but no service can eliminate all risk.",
  },
  {
    question: "Do you provide 24/7 security monitoring?",
    answer:
      "Continuous, around-the-clock monitoring is not automatically included in every cybersecurity project. Monitoring, alert review, escalation, and response arrangements must be expressly defined in the service scope. We will clarify the coverage, responsibilities, and response expectations before any ongoing service begins.",
  },
  {
    question: "What do you need from us to begin a security assessment?",
    answer:
      "We normally begin with a summary of your business, the systems you want reviewed, hosting or platform details, known concerns, and a suitable technical contact. Depending on the scope, we may also need approved access, an asset list, relevant configuration information, and written authorization from the system owner.",
  },
  {
    question: "Can you help with compliance and security policy readiness?",
    answer:
      "We can help organize security practices, document relevant controls, identify gaps, and prepare improvement actions against requirements you provide. Formal certification, legal interpretation, and independent compliance attestation are not included unless separately arranged with an appropriately qualified provider.",
  },
];

const technologyGroups = [
  {
    title: "Websites & Application Environments",
    description:
      "Security reviews for the platforms and technologies that support customer-facing websites, online stores, and business applications.",
    icon: Globe2,
    accent: "cyan" as const,
    items: [
      "WordPress",
      "Shopify",
      "Next.js",
      "React",
      "Node.js",
      "Web Applications",
      "REST APIs",
      "Content Management Systems",
    ],
  },
  {
    title: "Infrastructure & Hosting",
    description:
      "Review of agreed hosting, server, network, and cloud configurations that support your business services and data.",
    icon: Cloud,
    accent: "lime" as const,
    items: [
      "Cloud Hosting",
      "Linux Servers",
      "Windows Environments",
      "Databases",
      "Network Configuration",
      "Firewalls",
      "SSL/TLS",
      "Backup Environments",
    ],
  },
  {
    title: "Security Controls & Practices",
    description:
      "Practical protective controls and operating practices considered during assessment, hardening, and security-readiness work.",
    icon: ShieldCheck,
    accent: "cyan" as const,
    items: [
      "Multi-Factor Authentication",
      "Role-Based Access",
      "Web Application Firewall",
      "Endpoint Protection",
      "Patch Management",
      "Log & Alert Review",
      "OWASP-Aligned Review",
      "Backup & Recovery",
    ],
  },
];

const valueCards = [
  {
    title: "Business-First Risk Priorities",
    description:
      "Recommendations are connected to your operations, critical systems, and practical business impact—not just a list of technical issues.",
    icon: Target,
  },
  {
    title: "Clear Scope and Authorization",
    description:
      "Assessment boundaries, access requirements, and any approved testing activities are agreed before work begins.",
    icon: FileCheck2,
  },
  {
    title: "Practical Security Improvements",
    description:
      "Get prioritized actions and implementation guidance that your team can understand, assign, and work through.",
    icon: Wrench,
  },
  {
    title: "Support for Digital Businesses",
    description:
      "Our web and e-commerce experience helps us consider the security needs of websites, online stores, and connected workflows.",
    icon: MonitorCheck,
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
        <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[44px]">
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
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
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

export default function CybersecurityServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      {/* HERO — CYBERSECURITY SERVICES */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="pointer-events-none absolute top-[24%] -left-20 h-72 w-72 rounded-full bg-lime-400/[0.06] blur-[120px]" />
        <div className="relative z-10 mx-auto px-1 md:px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
              >
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  Cybersecurity Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-space-grotesk text-[36px] leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-[52px]"
              >
                Protect Your Business. <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Reduce Digital Risk.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-base leading-8 text-slate-300 sm:text-lg"
              >
                DigiGrowtherz provides practical cybersecurity services to help
                businesses identify security gaps, strengthen websites and
                systems, protect access to important data, and prepare for
                potential incidents. We focus on clear assessments, sensible
                security improvements, and guidance built around your digital
                environment.
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
                  Request a Security Review
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#solutions"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  Explore Cybersecurity Services
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-x-10 gap-y-6 md:gap-x-14"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">Assess</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Identify Security Gaps
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Strengthen</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Improve Key Controls
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Prepare</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Plan for Incidents
                  </p>
                </div>
              </motion.div>
            </div>

            {/* SECURITY POSTURE VISUAL */}
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
                    <LockKeyhole className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Security Controls
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Access & Protection
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
                      <ShieldCheck className="h-3 w-3 text-cyan-300" />
                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        security-workspace.preview
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
                          Business Security Overview
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Security Review Workspace
                        </h3>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                        <Shield className="h-4 w-4 text-cyan-300" />
                      </div>
                    </div>

                    <div className="relative mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
                            Assessment Workflow
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            Review, prioritize, improve
                          </p>
                        </div>
                        <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 font-mono text-[8px] text-cyan-300">
                          Illustrative
                        </span>
                      </div>
                      <div className="mt-5 space-y-3">
                        {[
                          {
                            title: "Identify assets",
                            detail: "Systems and access in scope",
                            icon: Database,
                            tint: "cyan",
                          },
                          {
                            title: "Review controls",
                            detail: "Configuration and exposure",
                            icon: ScanSearch,
                            tint: "lime",
                          },
                          {
                            title: "Prioritize actions",
                            detail: "Documented next steps",
                            icon: ClipboardCheck,
                            tint: "cyan",
                          },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.title}
                              className="flex items-center gap-3 rounded-xl border border-white/[0.055] bg-black/10 p-3"
                            >
                              <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.tint === "lime" ? "bg-lime-300/[0.08] text-lime-300" : "bg-cyan-300/[0.08] text-cyan-300"}`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-xs font-medium text-white">
                                  {item.title}
                                </p>
                                <p className="mt-1 truncate text-[10px] text-slate-500">
                                  {item.detail}
                                </p>
                              </div>
                              <CircleCheck className="h-4 w-4 shrink-0 text-slate-500" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="relative mt-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <KeyRound className="h-4 w-4 text-lime-300" />
                        <span className="text-[10px] text-slate-400">
                          Access controls
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <HardDrive className="h-4 w-4 text-cyan-300" />
                        <span className="text-[10px] text-slate-400">
                          Recovery readiness
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
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10">
                    <BadgeCheck className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Security Approach
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Practical Risk Reduction
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
            eyebrow="Cybersecurity Overview"
            title="Build a Stronger"
            highlight="Security Foundation."
            description="Cybersecurity is an ongoing business practice, not a one-time software installation. We help you understand the systems and information that matter, review the controls protecting them, and plan improvements that fit your organization’s operations and resources."
          />

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {[
              {
                number: "01",
                eyebrow: "Assess",
                title: "Know What Needs Protection",
                description:
                  "Identify important websites, applications, accounts, devices, and business data. Review relevant configurations and exposure points to create a clearer picture of current security risks.",
                icon: ScanSearch,
                accent: "cyan" as const,
              },
              {
                number: "02",
                eyebrow: "Strengthen",
                title: "Improve the Controls That Matter",
                description:
                  "Prioritize practical changes across access, systems, updates, backups, and configurations. Focus on manageable improvements that support your business rather than adding unnecessary complexity.",
                icon: ShieldCheck,
                accent: "lime" as const,
              },
              {
                number: "03",
                eyebrow: "Prepare",
                title: "Plan for Incidents and Recovery",
                description:
                  "Make responsibilities, escalation steps, backup expectations, and recovery priorities easier to understand before a security issue disrupts normal business operations.",
                icon: LifeBuoy,
                accent: "cyan" as const,
              },
            ].map((item) => {
              const Icon = item.icon;
              const isCyan = item.accent === "cyan";
              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className={`group relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 sm:p-8 ${isCyan ? "border-cyan-300/[0.10] hover:border-cyan-300/25" : "border-lime-300/[0.10] hover:border-lime-300/25"}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${isCyan ? "from-cyan-300/[0.05]" : "from-lime-300/[0.05]"} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] tracking-[0.25em] uppercase ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
                      >
                        {item.number} — {item.eyebrow}
                      </span>
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-space-grotesk mt-8 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  A Practical Security Framework
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Security should support the way your business works.
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  We connect security recommendations to the tools, people,
                  data, and digital services your team relies on. The result is
                  a prioritized plan that can be discussed, assigned, and
                  improved over time.
                </p>
              </div>
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition-colors hover:text-cyan-300"
              >
                See Our Process <ArrowUpRight className="h-4 w-4" />
              </a>
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
            eyebrow="Cybersecurity Solutions"
            title="Protection Across Your"
            highlight="Digital Environment."
            description="Explore cybersecurity support for the systems and workflows businesses depend on. Each engagement is tailored to your environment, with the assessment boundary, deliverables, and implementation responsibilities agreed before work begins."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((card) => (
              <SolutionCard key={card.number} {...card} />
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 border-t border-white/[0.08] pt-7"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                Cybersecurity work must be specific to the environment being
                protected. We define the systems, access, testing permissions,
                expected outputs, and exclusions clearly before starting an
                engagement.
              </p>
              <span className="flex shrink-0 items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />
                Scoped With Care
              </span>
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
            eyebrow="Our Cybersecurity Process"
            title="From Security Review"
            highlight="To Actionable Improvements."
            description="A clear process helps keep cybersecurity work focused, authorized, and useful. We begin by understanding your environment, then review the agreed scope and translate findings into practical next steps."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-14 overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-r from-cyan-300/[0.06] via-white/[0.02] to-lime-300/[0.06] p-7 sm:p-9"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  Start With a Defined Scope
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Tell us which systems and concerns you want to address.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  We can use an initial discussion to understand your
                  environment, priorities, access requirements, and whether the
                  requested work is a good fit.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-sm font-semibold text-[#071018] transition-transform hover:-translate-y-1 md:px-7"
              >
                Discuss Your Security Needs{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES & SECURITY AREAS */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Security Technologies & Practices"
            title="Designed Around Your"
            highlight="Real-World Systems."
            description="Security recommendations depend on the technologies you use and how your environment is configured. We review the relevant platforms and controls within the agreed scope rather than assuming every business needs the same tools."
          />
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {technologyGroups.map((group) => {
              const Icon = group.icon;
              const isCyan = group.accent === "cyan";
              return (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ duration: 0.6 }}
                  className={`relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-7 sm:p-8 ${isCyan ? "border-cyan-300/[0.10]" : "border-lime-300/[0.10]"}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-space-grotesk mt-6 text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-2 text-[11px] ${isCyan ? "border-cyan-300/10 bg-cyan-300/[0.035] text-slate-300" : "border-lime-300/10 bg-lime-300/[0.035] text-slate-300"}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-7 text-xs leading-6 text-slate-500">
            Platform names are examples of environments that may be considered
            during a scoped review. Availability and depth of assessment depend
            on access, technical requirements, and the agreed project scope.
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
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
                  Why Choose DigiGrowtherz
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Security That Fits <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Your Business.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                Good cybersecurity is understandable, actionable, and connected
                to the way your organization operates. We focus on helping you
                see the risks, understand the options, and work through
                improvements with a defined scope.
              </p>
              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                Talk to Our Team{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valueCards.map((item, index) => {
                const Icon = item.icon;
                const isLime = index % 2 === 1;
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors hover:bg-white/[0.045]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${isLime ? "border-lime-300/15 bg-lime-300/[0.06] text-lime-300" : "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300"}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65 }}
            className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  Our Commitment
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Clear findings. Defined responsibilities. Practical next
                  steps.
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Work only within the agreed scope and permissions",
                  "Explain findings in clear business language",
                  "Separate recommendations from included implementation",
                  "Document agreed actions and remaining considerations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                    <span className="text-sm leading-6 text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
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
          <div className="mx-auto text-center">
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
                  Cybersecurity FAQs
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Frequently Asked
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Questions.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Learn more about our cybersecurity assessments, business
                protection services, scope, and how we approach security
                improvements.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-14 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFAQ === index;
              const panelId = `cybersecurity-faq-panel-${index}`;
              return (
                <motion.div
                  key={item.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.025, 0.18),
                  }}
                  className={`overflow-hidden rounded-2xl border bg-white/[0.025] transition-colors duration-300 ${isOpen ? "border-cyan-300/20 bg-white/[0.04]" : "border-white/[0.08] hover:border-white/[0.14]"}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-sm leading-6 font-semibold text-white sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300" : "border-white/10 text-slate-400"}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.07] px-6 py-5 sm:px-7">
                          <p className="text-sm leading-7 text-slate-400">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[170px]" />
        <div className="relative z-10 mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.10] bg-gradient-to-br from-[#101D24] via-[#0B151D] to-[#0A1219] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14"
          >
            <div className="pointer-events-none absolute -top-28 right-[-70px] h-80 w-80 rounded-full bg-lime-300/[0.08] blur-[100px]" />
            <div className="pointer-events-none absolute bottom-[-130px] left-[25%] h-80 w-80 rounded-full bg-cyan-300/[0.07] blur-[110px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.07] px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-lime-300" />
                  <span className="font-mono text-[8px] tracking-[0.24em] text-lime-300 uppercase md:text-[9px]">
                    Strengthen Your Security Posture
                  </span>
                </div>
                <h2 className="font-space-grotesk mt-7 max-w-3xl text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[52px]">
                  Is Your Business <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Ready for What’s Next?
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Start with a conversation about your websites, applications,
                  infrastructure, and security concerns. We’ll help identify an
                  appropriate next step and define a clear scope for the work.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-4 py-4 text-[13px] font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.16)] transition-shadow hover:shadow-[0_0_45px_rgba(34,211,238,0.3)] md:px-8 md:text-sm"
                  >
                    Request a Security Consultation{" "}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white transition-all hover:border-cyan-300/25 hover:bg-white/[0.08]"
                  >
                    Review Our Services <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-3xl border border-white/[0.08] bg-black/15 p-6 sm:p-7">
                <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-300 uppercase">
                  Your First Conversation
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white">
                  What we can discuss
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: Globe2,
                      text: "Websites, applications, and online stores",
                    },
                    {
                      icon: Server,
                      text: "Hosting, servers, and cloud environments",
                    },
                    {
                      icon: KeyRound,
                      text: "Accounts, permissions, and access controls",
                    },
                    {
                      icon: ShieldAlert,
                      text: "Current concerns and security priorities",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.06] text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="pt-1.5 text-sm leading-6 text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-7 border-t border-white/[0.08] pt-5">
                  <p className="text-xs leading-6 text-slate-500">
                    Every engagement is scoped to the systems you own or are
                    authorized to have reviewed. Services, deliverables, and any
                    ongoing coverage are confirmed before work begins.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
