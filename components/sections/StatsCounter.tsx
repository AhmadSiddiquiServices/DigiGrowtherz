"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    end: 100, // Replace with actual number
    suffix: "+",
    label: "Happy Clients",
    color: "#A0D14F",
  },
  {
    end: 150, // Replace with actual number
    suffix: "+",
    label: "Projects Delivered",
    color: "#FFED00",
  },
  {
    end: 15, // Replace with actual number
    suffix: "+",
    label: "Countries Served",
    color: "#A0D14F",
  },
  {
    end: 10, // Replace with actual number
    suffix: "+",
    label: "Years of Experience",
    color: "#FFED00",
  },
];

export default function StatsCounter() {
  function AnimatedStat({
    end,
    suffix = "",
    duration = 1600,
    isVisible,
  }: {
    end: number;
    suffix?: string;
    duration?: number;
    isVisible: boolean;
  }) {
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!isVisible || hasAnimated) return;

      let frameId: number;
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.round(end * easedProgress);

        setValue(current);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      frameId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(frameId);
    }, [end, duration, isVisible, hasAnimated]);

    return (
      <span>
        {value}
        {suffix}
      </span>
    );
  }

  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="relative w-full overflow-hidden bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-[clamp(4rem,6vw,6rem)]"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/2 -left-32 h-72 w-72 -translate-y-1/2 rounded-full bg-[#A0D14F]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute top-1/2 -right-32 h-72 w-72 -translate-y-1/2 rounded-full bg-[#FFED00]/[0.025] blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(223,226,237,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(223,226,237,0.45) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative flex flex-col items-center justify-center px-6 py-8 text-center lg:py-4 ${
                index !== 0
                  ? "border-t border-white/[0.07] lg:border-t-0 lg:border-l"
                  : ""
              }`}
            >
              {/* Number */}
              <h2 className="font-space-grotesk text-[clamp(3rem,5vw,4.25rem)] leading-none font-medium tracking-[-0.055em] text-[#DFE2ED]">
                <AnimatedStat
                  end={stat.end}
                  suffix={stat.suffix}
                  isVisible={statsVisible}
                />
              </h2>

              {/* Accent Line */}
              <div
                className="mt-5 h-px w-10"
                style={{
                  backgroundColor: stat.color,
                }}
              />

              {/* Label */}
              <p className="font-inter mt-4 text-[13px] font-medium tracking-[0.01em] text-[#DFE2ED70] sm:text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
