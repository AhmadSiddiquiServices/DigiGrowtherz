"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import {
  Bot,
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Palette,
  ShoppingCart,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const SERVICE_LINKS = [
    {
      label: "AI Automation",
      description: "Intelligent workflows & AI-powered solutions",
      href: "/services/ai-automation",
      icon: Bot,
      color: "#A0D14F",
    },
    {
      label: "Website Development",
      description: "WordPress, Shopify & custom web applications",
      href: "/services/web-development",
      icon: Globe,
      color: "#0057FF",
    },
    {
      label: "Mobile Development",
      description: "Android, iOS & cross-platform applications",
      href: "/services/mobile-development",
      icon: Smartphone,
      color: "#FFED00",
    },
    {
      label: "Digital Marketing",
      description: "Social media, advertising & digital growth",
      href: "/services/digital-marketing",
      icon: Megaphone,
      color: "#A0D14F",
    },
    {
      label: "SEO Services",
      description: "Technical, on-page & local SEO strategies",
      href: "/services/seo",
      icon: Search,
      color: "#0057FF",
    },
    {
      label: "Branding & Design",
      description: "Brand identity, creatives & visual systems",
      href: "/services/branding",
      icon: Palette,
      color: "#A0D14F",
    },
    {
      label: "eCommerce Solutions",
      description: "Marketplace, product & online store solutions",
      href: "/services/ecommerce",
      icon: ShoppingCart,
      color: "#FFED00",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[60] border-b border-[#FFFFFF1A] bg-[#070B12]">
      <div className="mx-auto flex items-center justify-between px-[clamp(1rem,4vw,5rem)] py-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="DigiGrowtherz"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link key={link.href} href={link.href} className="relative pb-2">
                <span
                  className={`font-inter text-[16px] font-semibold tracking-[0.8px] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-[#A0D14F]"
                      : "text-[#DFE2EDB2] hover:text-white"
                  }`}
                >
                  {link.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#A0D14F]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav> */}
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const isServices = link.label.toLowerCase() === "services";

            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)) ||
              (isServices && pathname.startsWith("/services"));

            /* SERVICES DROPDOWN */
            if (isServices) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {/* Services Trigger */}
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="group relative flex cursor-pointer items-center gap-2 pb-2"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span
                      className={`font-inter text-[16px] font-semibold tracking-[0.8px] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-[#A0D14F]"
                          : "text-[#DFE2EDB2] group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 transition-all duration-300 ${
                        servicesOpen
                          ? "rotate-180 text-[#A0D14F]"
                          : "text-[#DFE2EDB2] group-hover:text-white"
                      }`}
                      strokeWidth={1.8}
                    />

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-[#A0D14F]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 12,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          scale: 0.97,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-full left-1/2 z-[100] mt-5 w-[680px] -translate-x-1/2"
                      >
                        {/* Dropdown Container */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0F15]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                          {/* Top Glow */}
                          <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

                          {/* Grid */}
                          <div className="relative grid grid-cols-2 gap-2">
                            {SERVICE_LINKS.map((service, index) => {
                              const Icon = service.icon;

                              const serviceActive = pathname.startsWith(
                                service.href
                              );

                              return (
                                <motion.div
                                  key={service.href}
                                  initial={{
                                    opacity: 0,
                                    y: 8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    y: 5,
                                  }}
                                  transition={{
                                    duration: 0.18,
                                    delay: index * 0.025,
                                  }}
                                >
                                  <Link
                                    href={service.href}
                                    onClick={() => setServicesOpen(false)}
                                    className={`group flex items-start gap-4 rounded-xl border p-4 transition-all duration-300 ${
                                      serviceActive
                                        ? "border-[#A0D14F]/20 bg-[#A0D14F]/[0.06]"
                                        : "border-transparent hover:border-white/[0.07] hover:bg-white/[0.035]"
                                    }`}
                                  >
                                    {/* Icon */}
                                    <div
                                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                                      style={{
                                        color: service.color,
                                        borderColor: `${service.color}20`,
                                        backgroundColor: `${service.color}08`,
                                      }}
                                    >
                                      <Icon
                                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                                        strokeWidth={1.7}
                                      />
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={`font-space-grotesk text-[14px] font-semibold transition-colors duration-300 ${
                                            serviceActive
                                              ? "text-white"
                                              : "text-[#DFE2ED] group-hover:text-white"
                                          }`}
                                        >
                                          {service.label}
                                        </span>

                                        <ArrowUpRight
                                          className="h-3.5 w-3.5 -translate-x-1 translate-y-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cyan-300 group-hover:opacity-100"
                                          strokeWidth={1.8}
                                        />
                                      </div>

                                      <p className="mt-1 text-[11px] leading-4 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Footer */}
                          <div className="relative mt-3 border-t border-white/[0.07] pt-3">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-white/[0.035]"
                            >
                              <div>
                                <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-300 uppercase">
                                  Explore Everything
                                </p>

                                <p className="mt-1 text-[11px] text-slate-500">
                                  Discover all our digital solutions
                                </p>
                              </div>

                              <ArrowUpRight
                                className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#A0D14F]"
                                strokeWidth={1.6}
                              />
                            </Link>
                          </div>
                        </div>

                        {/* Dropdown Glow */}
                        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-400/[0.03] blur-2xl" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            /* NORMAL NAVIGATION LINKS */
            return (
              <Link key={link.href} href={link.href} className="relative pb-2">
                <span
                  className={`font-inter text-[16px] font-semibold tracking-[0.8px] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-[#A0D14F]"
                      : "text-[#DFE2EDB2] hover:text-white"
                  }`}
                >
                  {link.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#A0D14F]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden h-9 items-center justify-center bg-[#A0D14F] px-6 transition-all duration-300 hover:scale-[1.03] lg:flex"
        >
          <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-[#070B12] uppercase">
            GET STARTED
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[70] flex items-center justify-center lg:hidden"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="h-8 w-8 text-[#A0D14F]" />
              ) : (
                <Menu className="h-8 w-8 text-[#A0D14F]" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Offcanvas */}
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-[#070B12] px-8 py-24 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
            >
              {/* <nav className="flex flex-col gap-8">
                {NAV_LINKS.map((link, index) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`font-inter text-xl font-semibold tracking-[0.8px] uppercase transition-colors ${
                          isActive ? "text-[#A0D14F]" : "text-[#DFE2EDB2]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav> */}
              <nav className="flex flex-col gap-7">
                {NAV_LINKS.map((link, index) => {
                  const isServices = link.label.toLowerCase() === "services";

                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    (isServices && pathname.startsWith("/services"));

                  /* MOBILE SERVICES */
                  if (isServices) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: 30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                      >
                        {/* Services Header */}
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between"
                          aria-expanded={mobileServicesOpen}
                        >
                          <span
                            className={`font-inter text-xl font-semibold tracking-[0.8px] uppercase transition-colors ${
                              isActive ? "text-[#A0D14F]" : "text-[#DFE2EDB2]"
                            }`}
                          >
                            {link.label}
                          </span>

                          <ChevronDown
                            className={`h-5 w-5 transition-all duration-300 ${
                              mobileServicesOpen
                                ? "rotate-180 text-[#A0D14F]"
                                : "text-[#DFE2EDB2]"
                            }`}
                            strokeWidth={1.7}
                          />
                        </button>

                        {/* Mobile Services */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
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
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 space-y-2 border-l border-white/[0.08] pl-4">
                                {SERVICE_LINKS.map((service, serviceIndex) => {
                                  const Icon = service.icon;

                                  const serviceActive = pathname.startsWith(
                                    service.href
                                  );

                                  return (
                                    <motion.div
                                      key={service.href}
                                      initial={{
                                        opacity: 0,
                                        x: -10,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        delay: serviceIndex * 0.04,
                                      }}
                                    >
                                      <Link
                                        href={service.href}
                                        onClick={() => {
                                          setMobileServicesOpen(false);
                                          setIsOpen(false);
                                        }}
                                        className={`group flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 ${
                                          serviceActive
                                            ? "bg-white/[0.04]"
                                            : "hover:bg-white/[0.03]"
                                        }`}
                                      >
                                        <Icon
                                          className="h-4 w-4 shrink-0"
                                          style={{
                                            color: service.color,
                                          }}
                                          strokeWidth={1.7}
                                        />

                                        <span
                                          className={`font-inter text-sm font-medium transition-colors ${
                                            serviceActive
                                              ? "text-white"
                                              : "text-[#DFE2EDB2] group-hover:text-white"
                                          }`}
                                        >
                                          {service.label}
                                        </span>
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  /* NORMAL MOBILE LINK */
                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-inter text-xl font-semibold tracking-[0.8px] uppercase transition-colors ${
                          isActive ? "text-[#A0D14F]" : "text-[#DFE2EDB2]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: NAV_LINKS.length * 0.08,
                }}
              >
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center bg-[#A0D14F]"
                >
                  <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-[#070B12] uppercase">
                    GET STARTED
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
