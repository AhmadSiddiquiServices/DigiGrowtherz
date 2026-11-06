"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  FileText,
  Gauge,
  Handshake,
  MapPinned,
  MessageSquareText,
  Navigation,
  PackageCheck,
  PhoneCall,
  Route,
  Search,
  ShieldCheck,
  Truck,
  UsersRound,
  Wallet,
  Workflow,
  type LucideIcon,
  Target,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewportOnce = { once: true, amount: 0.18 } as const;

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

const serviceItems: ServiceItem[] = [
  {
    number: "01",
    label: "Load Research",
    title: "Find Loads That Fit Your Operation",
    description:
      "We research available freight opportunities around your equipment, preferred lanes, schedule, and carrier requirements. The goal is to help you review relevant options instead of sorting through every load yourself.",
    items: [
      "Load board research and opportunity review",
      "Equipment and freight requirement matching",
      "Lane, pickup, and delivery detail checks",
      "Options prepared for carrier review",
    ],
    icon: Search,
    accent: "cyan",
  },
  {
    number: "02",
    label: "Broker Communication",
    title: "Coordinate With Brokers and Shippers",
    description:
      "Keep load conversations organized with support for broker communication, shipment questions, availability updates, and the information needed before a carrier decides whether to accept a load.",
    items: [
      "Broker and shipper communication support",
      "Pickup, delivery, and commodity questions",
      "Availability and schedule coordination",
      "Clear notes and communication handoffs",
    ],
    icon: PhoneCall,
    accent: "lime",
  },
  {
    number: "03",
    label: "Rate & Load Details",
    title: "Review Rates and Load Requirements",
    description:
      "We help organize rate discussions and review key shipment details so the carrier can make an informed decision. Final rate approval and load acceptance remain with the carrier.",
    items: [
      "Rate and mileage detail review",
      "Deadhead and route consideration",
      "Accessorial and special requirement checks",
      "Carrier-approved rate confirmation follow-up",
    ],
    icon: Wallet,
    accent: "cyan",
  },
  {
    number: "04",
    label: "Dispatch Planning",
    title: "Coordinate Pickup and Delivery Schedules",
    description:
      "Help keep the day-to-day movement of assigned loads organized with appointment details, pickup references, delivery windows, and schedule updates shared with the appropriate people.",
    items: [
      "Pickup and delivery appointment coordination",
      "Load status and milestone tracking",
      "Schedule updates and ETA communication",
      "Route and timing information organization",
    ],
    icon: CalendarClock,
    accent: "lime",
  },
  {
    number: "05",
    label: "Driver Communication",
    title: "Keep Drivers Informed on Active Loads",
    description:
      "Provide an organized communication point for dispatch updates, appointment information, shipment references, and changes that need to be passed between the carrier and its drivers.",
    items: [
      "Driver and carrier update coordination",
      "Pickup numbers and delivery instructions",
      "Appointment and status reminders",
      "Escalation of delays or load changes",
    ],
    icon: MessageSquareText,
    accent: "cyan",
  },
  {
    number: "06",
    label: "Documents & Delivery",
    title: "Organize Load Paperwork and POD Follow-up",
    description:
      "Support the document flow around completed and active shipments by keeping rate confirmations, bills of lading, proof of delivery, and related records organized for carrier review.",
    items: [
      "Rate confirmation and load document tracking",
      "BOL and delivery paperwork organization",
      "Proof of delivery collection follow-up",
      "Document handoff for carrier invoicing",
    ],
    icon: ClipboardCheck,
    accent: "lime",
  },
  {
    number: "07",
    label: "Fleet Coordination",
    title: "Give Small Fleets a Clearer Dispatch View",
    description:
      "Help owner-operators and growing fleets keep load activity, driver updates, upcoming appointments, and open tasks visible through a consistent dispatch workflow.",
    items: [
      "Multiple truck and load status overview",
      "Dispatch calendar and upcoming appointments",
      "Open task and follow-up tracking",
      "Daily or weekly activity summaries",
    ],
    icon: Gauge,
    accent: "cyan",
  },
];

const processSteps = [
  {
    number: "01",
    label: "Discovery",
    title: "Understand Your Trucking Operation",
    description:
      "We learn about your equipment, operating lanes, preferred freight, working hours, communication preferences, and the dispatch responsibilities you want support with.",
    items: [
      "Carrier and equipment details",
      "Preferred lanes and schedule",
      "Dispatch scope and expectations",
    ],
    icon: Building2,
    accent: "cyan" as const,
  },
  {
    number: "02",
    label: "Load Planning",
    title: "Research Suitable Freight Options",
    description:
      "We review available load opportunities against the carrier's requirements and organize the relevant details so the carrier can evaluate each option.",
    items: [
      "Load and lane research",
      "Equipment and appointment checks",
      "Options shared for approval",
    ],
    icon: Search,
    accent: "lime" as const,
  },
  {
    number: "03",
    label: "Confirmation",
    title: "Coordinate the Approved Load",
    description:
      "Once the carrier chooses a load, we support the agreed communication and paperwork steps, while the carrier retains final control over acceptance and operating decisions.",
    items: [
      "Broker communication support",
      "Rate confirmation follow-up",
      "Pickup and delivery details",
    ],
    icon: ClipboardList,
    accent: "cyan" as const,
  },
  {
    number: "04",
    label: "In-Transit Support",
    title: "Track Updates Through Delivery",
    description:
      "We help organize status updates, appointment changes, driver communication, and issue escalation during the shipment, following the carrier's process.",
    items: [
      "Load status and ETA updates",
      "Driver and broker communication",
      "Delay and change notifications",
    ],
    icon: Route,
    accent: "lime" as const,
  },
  {
    number: "05",
    label: "Closeout",
    title: "Complete the Load Record",
    description:
      "After delivery, we help follow up on proof of delivery and organize the shipment record so the carrier can move to its own billing and settlement process.",
    items: [
      "POD follow-up",
      "Document and status closeout",
      "Open task and activity summary",
    ],
    icon: PackageCheck,
    accent: "cyan" as const,
  },
];

const faqItems = [
  {
    question: "What do truck dispatching services include?",
    answer:
      "Truck dispatching services provide administrative and communication support to motor carriers. Depending on the agreed scope, this can include researching available loads, organizing load details, supporting broker communication, coordinating appointments, sharing driver updates, tracking shipment status, and following up on delivery documents such as proof of delivery.",
  },
  {
    question: "Who can use DigiGrowtherz truck dispatching services?",
    answer:
      "Our dispatch support is designed for owner-operators and small to growing motor carriers that want help organizing load research, communication, and shipment administration. During an initial discussion, we review your operation, equipment, lanes, and expectations to determine whether the requested support is a suitable fit.",
  },
  {
    question: "Which truck and trailer types can you support?",
    answer:
      "Dispatch workflows can be tailored to the equipment a carrier operates. Common equipment categories may include dry van, reefer, flatbed, step deck, and power-only, depending on the freight, lane, carrier requirements, and agreed scope. Share your equipment details so the workflow can be assessed before starting.",
  },
  {
    question: "Do you guarantee loads, rates, or weekly revenue?",
    answer:
      "No. Freight availability, broker decisions, market rates, lane demand, equipment, and operating schedules change. We can support load research and coordination, but we do not guarantee a specific number of loads, a minimum rate, miles, revenue, or weekly income.",
  },
  {
    question: "Who makes the final decision to accept a load?",
    answer:
      "The motor carrier makes the final decision to accept or reject a load and remains responsible for its business and transportation operations. Dispatch support helps gather information and coordinate communication; it does not replace the carrier's judgment or authority over its trucks, drivers, and shipments.",
  },
  {
    question:
      "Do you communicate with brokers and help review rate confirmations?",
    answer:
      "Yes, broker communication and rate-confirmation follow-up can be included in the agreed dispatch scope. We can help collect shipment details, relay questions, organize rate and appointment information, and route documents to the carrier for review and approval. The carrier should approve the final terms before proceeding.",
  },
  {
    question:
      "Do you provide safety, compliance, or fleet maintenance services?",
    answer:
      "This page describes dispatch coordination and administrative support. It does not replace a carrier's safety department, legal or regulatory compliance responsibilities, driver qualification process, insurance requirements, vehicle maintenance program, or required operating authority. Carriers should continue to use qualified professionals for those responsibilities.",
  },
  {
    question: "How does pricing for truck dispatching work?",
    answer:
      "Pricing depends on the number of trucks, dispatch responsibilities, communication coverage, document support, and the service arrangement. Contact us with a brief overview of your fleet and operational needs so the scope and applicable pricing can be discussed before any work begins.",
  },
];

const differentiators = [
  {
    title: "Carrier-Focused Coordination",
    description:
      "Dispatch workflows are shaped around your equipment, preferred lanes, schedule, and the way your operation works.",
    icon: Truck,
    accent: "cyan" as const,
  },
  {
    title: "Organized Communication",
    description:
      "Keep broker, driver, and carrier updates in a clear workflow with useful notes and next actions.",
    icon: MessageSquareText,
    accent: "lime" as const,
  },
  {
    title: "Clear Load Documentation",
    description:
      "Track key shipment details and paperwork from load confirmation through delivery closeout.",
    icon: FileText,
    accent: "cyan" as const,
  },
  {
    title: "Practical Dispatch Reporting",
    description:
      "Use consistent load status and activity summaries to see what is moving and what needs attention.",
    icon: BarChart3,
    accent: "lime" as const,
  },
];

const toolGroups = [
  {
    title: "Load Search & Freight Information",
    description:
      "Work with the load boards and freight marketplaces available to your carrier, using agreed access and carrier-approved search criteria.",
    icon: Search,
    items: [
      "Load board workflows",
      "Lane and rate research",
      "Load detail review",
      "Equipment matching",
    ],
  },
  {
    title: "Dispatch & Fleet Coordination",
    description:
      "Keep active loads, pickup and delivery appointments, driver updates, and open dispatch tasks organized in your preferred systems.",
    icon: Workflow,
    items: [
      "Dispatch schedules",
      "Fleet and load trackers",
      "Appointment calendars",
      "Status and ETA logs",
    ],
  },
  {
    title: "Communication & Documents",
    description:
      "Use agreed communication channels and shared document workflows to keep carrier, driver, and broker information accessible.",
    icon: FileText,
    items: [
      "Email and phone coordination",
      "Shared document folders",
      "Rate confirmations and BOLs",
      "POD and closeout records",
    ],
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
        <h2 className="font-space-grotesk mt-6 text-[28px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
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

function ProcessCard({ step }: { step: (typeof processSteps)[number] }) {
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

export default function TruckDispatchingServicePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      {/* HERO — TRUCK DISPATCHING SERVICES */}
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
                <Truck className="h-4 w-4 text-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 uppercase sm:text-[11px]">
                  Truck Dispatching Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-space-grotesk text-[36px] leading-[1.04] font-bold tracking-tight text-white sm:text-6xl xl:text-[52px]"
              >
                Keep Your Trucks Moving. <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Keep Dispatch Organized.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-base leading-8 text-slate-300 sm:text-lg"
              >
                DigiGrowtherz provides truck dispatching services for
                owner-operators and motor carriers that need dependable support
                with load research, broker communication, dispatch coordination,
                shipment updates, and paperwork follow-up. We help make everyday
                freight operations more organized around your trucks, lanes, and
                business requirements.
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
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)]"
                >
                  Discuss Dispatch Support
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#solutions"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  Explore Dispatch Services
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-8 md:gap-14"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white">Load</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Research & Coordination
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Route</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Schedule Awareness
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Records</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Documents & Updates
                  </p>
                </div>
              </motion.div>
            </div>

            {/* DISPATCH OPERATIONS VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative flex min-h-[560px] items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[480px] w-[480px] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 -left-2 z-20 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/[0.12]">
                    <Navigation className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Dispatch Planning
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Lane & Load Review
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
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-4 flex h-7 flex-1 items-center rounded-lg border border-white/[0.06] bg-black/20 px-3">
                      <Truck className="h-3 w-3 text-cyan-300" />
                      <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                        dispatch-workspace.example
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#101C23] via-[#0B151B] to-[#081017] p-6 sm:p-8">
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
                        <p className="font-mono text-[9px] tracking-[0.2em] text-cyan-300 uppercase">
                          Dispatch Overview
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Active Load Workspace
                        </h3>
                      </div>
                      <div className="flex h-9 items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.06] px-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#A3E635]" />
                        <span className="font-mono text-[8px] tracking-[0.12em] text-lime-300 uppercase">
                          Example View
                        </span>
                      </div>
                    </div>

                    <div className="relative mt-7 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Truck className="h-3.5 w-3.5 text-cyan-300" />
                          <span className="font-mono text-[8px] tracking-[0.14em] uppercase">
                            Equipment
                          </span>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">
                          Carrier Unit
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          Equipment profile
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Route className="h-3.5 w-3.5 text-lime-300" />
                          <span className="font-mono text-[8px] tracking-[0.14em] uppercase">
                            Lane
                          </span>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">
                          Route Details
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          Pickup to delivery
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
                            Shipment Workflow
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Load Status & Milestones
                          </p>
                        </div>
                        <ClipboardList className="h-4 w-4 text-cyan-300" />
                      </div>
                      <div className="mt-5 space-y-4">
                        {[
                          {
                            label: "Load details reviewed",
                            note: "Carrier requirements checked",
                            done: true,
                          },
                          {
                            label: "Confirmation follow-up",
                            note: "Documents ready for carrier review",
                            done: true,
                          },
                          {
                            label: "Pickup and transit updates",
                            note: "Status shared with relevant contacts",
                            done: false,
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-start gap-3"
                          >
                            <span
                              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${item.done ? "bg-lime-300/[0.10] text-lime-300" : "bg-cyan-300/[0.10] text-cyan-300"}`}
                            >
                              {item.done ? (
                                <Check className="h-3.5 w-3.5" />
                              ) : (
                                <Clock3 className="h-3.5 w-3.5" />
                              )}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-white">
                                {item.label}
                              </p>
                              <p className="mt-1 text-[10px] leading-5 text-slate-500">
                                {item.note}
                              </p>
                            </div>
                            <span
                              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${item.done ? "bg-lime-300" : "bg-cyan-300"}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-4 grid grid-cols-3 gap-3">
                      {[
                        { icon: PhoneCall, label: "Communication" },
                        { icon: FileText, label: "Documents" },
                        { icon: MapPinned, label: "Appointments" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-3 text-center"
                          >
                            <Icon className="h-4 w-4 text-cyan-300" />
                            <span className="text-[8px] text-slate-400">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
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
                className="absolute -right-3 -bottom-5 z-20 rounded-2xl border border-lime-300/15 bg-white/[0.07] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:-right-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/[0.10]">
                    <BadgeCheck className="h-5 w-5 text-lime-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                      Carrier Approval
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Decisions Stay With You
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-12 h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_20px_#A3E635]"
              />
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
            eyebrow="Truck Dispatching Overview"
            title="More Clarity Across"
            highlight="Every Load Movement."
            description="Truck dispatching involves more than finding an available load. It requires organized research, clear communication, schedule coordination, and document follow-up. DigiGrowtherz helps bring those tasks into one practical workflow for owner-operators and motor carriers."
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
                      Dispatch Support Workflow
                    </p>
                    <h3 className="font-space-grotesk mt-1 text-xl font-semibold text-white sm:text-2xl">
                      From Load Research to Delivery Paperwork
                    </h3>
                  </div>
                </div>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Our truck dispatch support combines load opportunity research,
                  broker and driver communication, appointment coordination,
                  shipment status updates, and paperwork tracking. The workflow
                  is agreed with each carrier and designed to support its
                  existing operation—not take control of the carrier's business
                  decisions.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Research",
                      text: "Review available loads, lanes, equipment fit, and shipment requirements.",
                      icon: Search,
                    },
                    {
                      title: "Coordinate",
                      text: "Organize broker communication, appointments, and load confirmations.",
                      icon: Handshake,
                    },
                    {
                      title: "Communicate",
                      text: "Keep drivers and carrier contacts informed about key shipment updates.",
                      icon: MessageSquareText,
                    },
                    {
                      title: "Close Out",
                      text: "Follow up on delivery documents and keep load records organized.",
                      icon: ClipboardCheck,
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
                  Who We Support
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white">
                  Dispatch Assistance for Working Carriers
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Our dispatch support can be shaped around independent
                  owner-operators and small to growing fleets that want help
                  managing the administrative work around their freight.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    "Independent owner-operators",
                    "Small and growing motor carriers",
                    "Carriers operating multiple trucks",
                    "Teams seeking load and paperwork coordination",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-lime-300/[0.08] text-lime-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
                  <p className="text-xs leading-6 text-slate-400">
                    <span className="font-semibold text-cyan-300">
                      Carrier control comes first.
                    </span>{" "}
                    The motor carrier retains responsibility for selecting
                    loads, approving rates, directing drivers, and managing its
                    transportation business.
                  </p>
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
                A consistent dispatch process helps keep load information,
                important contacts, shipment milestones, and paperwork easier to
                follow—so your team can focus on operating its trucks.
              </p>
              <div className="flex shrink-0 items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase">
                  Plan / Coordinate / Track
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUCK DISPATCHING SOLUTIONS */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Truck Dispatching Solutions"
            title="Dispatch Support Built"
            highlight="Around Your Fleet."
            description="Choose the dispatch tasks that best fit your operation. From load research and broker communication to delivery documents and fleet coordination, each support area can be defined around your carrier's equipment, lanes, and workflow."
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
            transition={{ duration: 0.65 }}
            className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-lime-300 uppercase">
                  Equipment-Based Planning
                </p>
                <h3 className="font-space-grotesk mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Dispatch Workflows That Match Your Equipment
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                  Dispatch requirements vary by trailer, freight type, lane, and
                  carrier preferences. Support can be discussed for common
                  equipment categories such as dry van, reefer, flatbed, step
                  deck, and power-only operations, subject to the freight and
                  agreed service scope.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-[330px] lg:justify-end">
                {[
                  "Dry Van",
                  "Reefer",
                  "Flatbed",
                  "Step Deck",
                  "Power Only",
                ].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-xs ${
                      index % 2 === 0
                        ? "border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-200"
                        : "border-lime-300/15 bg-lime-300/[0.05] text-lime-200"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR DISPATCH PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#070D14] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="lime" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Our Dispatch Process"
            title="A Clear Workflow"
            highlight="From Load to Delivery."
            description="We use a defined dispatch workflow so expectations, load information, communication, and document responsibilities are clear from the start. The exact tasks and coverage are agreed with your carrier before service begins."
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
            className="mt-14 flex flex-col gap-5 rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Your carrier remains in control.
                </h3>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
                  Load acceptance, final rate approval, driver direction, safety
                  decisions, and regulatory responsibilities remain with the
                  motor carrier.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-lime-300"
            >
              Discuss your workflow <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* DISPATCH TOOLS & WORKFLOWS */}
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-10 lg:py-28"
      >
        <SectionAtmosphere variant="cyan" />
        <div className="relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Dispatch Tools & Workflows"
            title="Connected Information"
            highlight="For Day-to-Day Dispatch."
            description="Truck dispatching relies on accurate load information, accessible documents, and timely communication. We work with the tools and access arrangements approved by your carrier, keeping the process practical and aligned with your existing systems."
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
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className={`group relative h-full overflow-hidden rounded-3xl border bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 ${
                    isCyan
                      ? "border-cyan-300/[0.10] hover:border-cyan-300/25"
                      : "border-lime-300/[0.10] hover:border-lime-300/25"
                  }`}
                >
                  <div
                    className={`absolute -top-16 -right-16 h-44 w-44 rounded-full blur-[80px] ${isCyan ? "bg-cyan-300/[0.07]" : "bg-lime-300/[0.07]"}`}
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
                    <div className="mt-6 space-y-2.5">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 border-t border-white/[0.06] pt-2.5"
                        >
                          <Check
                            className={`h-3.5 w-3.5 shrink-0 ${isCyan ? "text-cyan-300" : "text-lime-300"}`}
                          />
                          <span className="text-xs text-slate-400">{item}</span>
                        </div>
                      ))}
                    </div>
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
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-300/[0.08]">
                <BadgeCheck className="h-4 w-4 text-lime-300" />
              </div>
              <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                Access to load boards, transportation management systems,
                tracking platforms, and carrier documents is provided or
                authorized by the carrier. Available tools and integrations
                depend on the carrier's accounts, permissions, and agreed
                workflow.
              </p>
            </div>
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
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-lime-300 uppercase">
                  Why DigiGrowtherz
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Dispatch Support That <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  Works With Your Team.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                The right dispatch workflow should reduce confusion, keep
                important details visible, and fit the way your carrier
                operates. We focus on practical coordination, clear
                communication, and agreed responsibilities—not unrealistic
                promises about freight availability or revenue.
              </p>
              <div className="mt-9 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/[0.08]">
                    <Handshake className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      A clearly defined service relationship
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Tasks, communication channels, access, and carrier
                      responsibilities are agreed before dispatch support
                      begins.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className={`group relative overflow-hidden rounded-3xl border bg-white/[0.025] p-6 transition-all duration-300 ${
                      isCyan
                        ? "border-cyan-300/[0.10] hover:border-cyan-300/25"
                        : "border-lime-300/[0.10] hover:border-lime-300/25"
                    }`}
                  >
                    <div
                      className={`absolute -top-12 -right-12 h-32 w-32 rounded-full blur-[65px] ${isCyan ? "bg-cyan-300/[0.07]" : "bg-lime-300/[0.07]"}`}
                    />
                    <div className="relative">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${isCyan ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300" : "border-lime-300/15 bg-lime-300/[0.06] text-lime-300"}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
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
            transition={{ duration: 0.6 }}
            className="mt-16 border-t border-white/[0.08] pt-7"
          >
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { label: "Focus", value: "Carrier Requirements", icon: Target },
                {
                  label: "Approach",
                  value: "Clear Communication",
                  icon: MessageSquareText,
                },
                {
                  label: "Workflow",
                  value: "Documented Follow-up",
                  icon: ClipboardCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${index % 2 === 0 ? "bg-cyan-300/[0.07] text-cyan-300" : "bg-lime-300/[0.07] text-lime-300"}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
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
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-cyan-300 uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="font-space-grotesk mt-6 text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-[48px]">
                Questions About <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-cyan-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">
                  Truck Dispatching?
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
                Learn how our truck dispatching services support owner-operators
                and motor carriers with load research, broker communication,
                dispatch coordination, and paperwork follow-up.
              </p>
              <div className="mt-9 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/[0.08]">
                    <MessageSquareText className="h-4 w-4 text-lime-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Have a specific fleet requirement?
                    </p>
                    <a
                      href="/contact"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-cyan-300 transition-colors hover:text-lime-300"
                    >
                      Contact our team <ArrowUpRight className="h-3 w-3" />
                    </a>
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
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-cyan-300/20 bg-white/[0.045]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`dispatch-faq-panel-${index}`}
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
                    <div id={`dispatch-faq-panel-${index}`} hidden={!isOpen}>
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
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-2 py-2 md:px-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                  <span className="font-mono text-[9px] tracking-[0.26em] text-lime-300 uppercase md:text-[10px]">
                    Start Your Dispatch Support Plan
                  </span>
                </div>
                <h2 className="[font-space-grotesk lg:text-48px mt-7 max-w-3xl text-[28px] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Ready for a More <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    Organized Dispatch Workflow?
                  </span>
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Tell us about your trucks, equipment, preferred lanes, and
                  day-to-day dispatch requirements. DigiGrowtherz can help you
                  define a practical support workflow for load research, broker
                  communication, shipment coordination, and document follow-up.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-2 py-4 text-sm font-semibold text-[#071018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.32)] md:px-8"
                  >
                    Discuss Truck Dispatching
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
                        Dispatch Readiness
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Your Starting Checklist
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/[0.07]">
                      <Truck className="h-5 w-5 text-lime-300" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Share your equipment and fleet details",
                      "Define preferred lanes and freight types",
                      "Agree communication and dispatch tasks",
                      "Set up load and document workflows",
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
                      A workflow shaped around your fleet
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
