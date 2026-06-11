"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-[60] bg-[#070B12]">
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
        <nav className="hidden items-center gap-10 lg:flex">
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
              <nav className="flex flex-col gap-8">
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
