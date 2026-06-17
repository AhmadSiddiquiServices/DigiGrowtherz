import Image from "next/image";
import Link from "next/link";

import { FOOTER_LINKS } from "@/constants/footer";

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-jetbrains mb-8 text-[12px] leading-4 text-[#A0D14F] uppercase">
        {title}
      </h3>

      <ul className="space-y-8">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-inter text-[14px] leading-5 text-[#DFE2ED99] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#070B12]">
      <div className="container-wrapper px-[clamp(1rem,4vw,5rem)] py-[clamp(4rem,6vw,5rem)]">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
            {/* Left Content */}
            <div className="shrink-0">
              <Image
                src="/images/logo.webp"
                alt="DigiGrowtherz"
                width={136}
                height={40}
                className="mb-8"
              />

              <p className="font-inter text-[14px] leading-[22.75px] text-[#DFE2ED99]">
                Named #1 AI Services Company by Clutch. We build the
                intelligence layer your business runs on.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[clamp(5rem,10vw,12rem)]">
              <FooterColumn title="Services" links={FOOTER_LINKS.services} />

              <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />

              <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-[#FFFFFF0D]" />

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-inter text-[12px] leading-4 text-[#DFE2ED66]">
              © 2026 DigiGrowtherz AI Automation. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              {FOOTER_LINKS.bottom.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[12px] leading-4 text-[#DFE2ED66] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className="hidden h-8 w-8 items-center justify-center rounded-xl border border-[#FFFFFF1A] transition-all duration-300 hover:border-[#A0D14F] md:flex"
              aria-label="Share"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#DFE2ED66]"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Footer */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center border-t border-t-[#FFFFFF0D] px-4 py-4 text-center">
            {/* Logo */}
            <Image
              src="/images/logo.webp"
              alt="DigiGrowtherz"
              width={260}
              height={76}
              className="h-auto w-auto"
            />

            {/* Phone Number */}
            <a
              href="tel:+923036083548"
              className="mt-10 font-['Space_Grotesk'] text-[clamp(2rem,8vw,42px)] leading-none font-semibold text-[#A0D14F]"
            >
              +92 303 6083548
            </a>

            {/* Main Navigation */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-5">
              <Link
                href="/"
                className="font-jetbrains text-[14px] text-[#DFE2ED] uppercase"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="font-jetbrains text-[14px] text-[#DFE2ED] uppercase"
              >
                About
              </Link>

              <Link
                href="/services"
                className="font-jetbrains text-[14px] text-[#DFE2ED] uppercase"
              >
                Services
              </Link>

              <Link
                href="/case-studies"
                className="font-jetbrains text-[14px] text-[#DFE2ED] uppercase"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="font-jetbrains text-[14px] text-[#DFE2ED] uppercase"
              >
                Contact
              </Link>
            </div>

            {/* Copyright */}
            <p className="font-jetbrains mt-14 text-[12px] tracking-[1.2px] text-[#DFE2ED33] uppercase">
              © 2026 DIGIGROWTHERZ | ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
