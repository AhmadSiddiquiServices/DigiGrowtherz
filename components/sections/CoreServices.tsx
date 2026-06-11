"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function CoreServices() {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="bg-[#050A12] px-[clamp(1rem,4vw,5rem)] py-[clamp(50px,8vw,60px)]">
      <div className="mx-auto w-full px-5 lg:px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-[clamp(48px,5vw,64px)] max-w-[560px]"
        >
          <h2 className="font-['Space_Grotesk'] text-[clamp(2rem,3vw,3rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#DFE2ED]">
            Core Services
          </h2>

          <p className="mt-4 font-sans text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.8] font-normal text-[#DFE2ED99]">
            Put AI to work in your business with our specialized expertise
            across the intelligence lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ===== FIRST CARD ===== */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
            }}
            className="h-auto overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] backdrop-blur-[20px] lg:col-span-2 lg:h-[400px]"
          >
            <div className="grid h-full lg:grid-cols-[1fr_379px]">
              {/* Content */}
              <div className="flex flex-col p-[clamp(24px,3vw,40px)]">
                <Image
                  src="/images/service-1-icon.webp"
                  alt="Service 1 Icon"
                  width={44}
                  height={34}
                  priority
                  className="mb-8"
                />

                <h3 className="font-['Space_Grotesk'] text-[clamp(1.75rem,2.5vw,2rem)] leading-[1.3] font-medium text-[#DFE2ED]">
                  AI Strategy & Roadmap
                </h3>

                <ul className="mt-8 space-y-6">
                  {[
                    "AI Transformation Strategy",
                    "AI Empowerment Training",
                    "MLOps & AI Governance",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[16px] leading-6 text-[#DFE2EDB2]"
                    >
                      <Image
                        src="/images/list-check.webp"
                        alt=""
                        width={12}
                        height={12}
                        priority
                      />

                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-20 inline-flex items-center gap-3 font-mono text-[12px] font-medium tracking-[0.1em] text-[#A0D14F] uppercase md:mt-auto"
                >
                  Define Your Roadmap
                  <Image
                    src="/images/green-arrow.webp"
                    alt=""
                    width={19}
                    height={9}
                    priority
                  />
                </a>
              </div>

              {/* Image */}
              <div className="relative hidden h-full overflow-hidden lg:block">
                <Image
                  src="/images/service-1.webp"
                  alt="AI Strategy"
                  fill
                  priority
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </motion.div>

          {/* ===== SECOND CARD ===== */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex min-h-[400px] flex-col rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-[clamp(24px,3vw,40px)] backdrop-blur-[20px]"
          >
            <Image
              src="/images/service-2-icon.webp"
              alt="Service 2 Icon"
              width={44}
              height={34}
              priority
              className="mb-8"
            />

            <h3 className="font-['Space_Grotesk'] text-[clamp(1.75rem,2vw,2rem)] leading-[1.3] font-medium text-[#DFE2ED]">
              AI Engineering
              <br />
              Teams
            </h3>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#DFE2EDB2]">
              Accelerate your AI roadmap with the top talent across the US and
              Latin America — all in your timezone.
            </p>

            <a
              href="#"
              className="mt-auto inline-flex items-center gap-3 font-mono text-[12px] font-medium tracking-[0.1em] text-[#005EFF] uppercase"
            >
              Scale Now
              <Image
                src="/images/blue-arrow.webp"
                alt="Arrow Blue"
                width={19}
                height={9}
                priority
              />
            </a>
          </motion.div>

          {/* ===== THIRD CARD ===== */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-[clamp(24px,3vw,40px)] backdrop-blur-[20px]"
          >
            {/* Background Image */}
            <div className="absolute inset-x-0 top-0 h-[180px] overflow-hidden">
              <Image src="/images/service-3.webp" alt="" fill priority />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              <Image
                src="/images/service-3-icon.webp"
                alt="Data Engineering"
                width={44}
                height={34}
                priority
                className="mb-8"
              />

              <h3 className="font-['Space_Grotesk'] text-[clamp(2rem,2.5vw,3rem)] leading-[1.3] font-medium text-[#DFE2ED]">
                Data Engineering
              </h3>

              <p className="mt-6 text-[18px] leading-[1.8] text-[#DFE2EDB2]">
                Data readiness, modernization, and business intelligence. We
                make your data AI-ready.
              </p>

              <a
                href="#"
                className="mt-auto inline-flex items-center gap-3 font-mono text-[12px] font-medium tracking-[0.1em] text-[#E6D40D] uppercase"
              >
                Prepare Data
                <Image
                  src="/images/yellow-arrow.webp"
                  alt=""
                  width={19}
                  height={9}
                />
              </a>
            </div>
          </motion.div>

          {/* ===== FOURTH CARD ===== */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex min-h-[468px] flex-col rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-[clamp(24px,3vw,40px)] backdrop-blur-[20px] lg:col-span-2"
          >
            <Image
              src="/images/service-4-icon.webp"
              alt="Service 4 Icon"
              width={44}
              height={34}
              priority
              className="mb-8"
            />

            <h3 className="font-['Space_Grotesk'] text-[clamp(2rem,2.5vw,2.25rem)] leading-[1.3] font-medium text-[#DFE2ED]">
              AI-Powered Development
            </h3>

            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.8] text-[#DFE2EDB2]">
              From AI-native product experiences to agentic application
              modernization, we build software that thinks.
            </p>

            {/* Bottom Image */}
            <div className="mt-8 h-[160px] w-full overflow-hidden rounded-[2px] bg-[url('/images/service-4.webp')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
