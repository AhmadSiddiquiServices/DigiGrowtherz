"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const calendar = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const today = new Date();

    const firstDay = new Date(year, month, 1);

    // Convert Sunday (0) → 6
    // Monday (1) → 0
    const startDay = (firstDay.getDay() + 6) % 7;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const dates = [];

    // Previous month
    for (let i = startDay - 1; i >= 0; i--) {
      dates.push({
        day: daysInPrevMonth - i,
        muted: true,
      });
    }

    // Current month
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push({
        day,
        active:
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear(),
      });
    }

    // Fill remaining cells
    while (dates.length < 35) {
      dates.push({
        day: dates.length - (startDay + daysInMonth) + 1,
        muted: true,
      });
    }

    return {
      dates,
      monthLabel: currentMonth.toLocaleString("default", {
        month: "long",
        year: "numeric",
      }),
    };
  }, [currentMonth]);

  return {
    ...calendar,
    weekDays,

    prevMonth: () =>
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
      ),

    nextMonth: () =>
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
      ),
  };
}

export default function ContactSidebar() {
  const { dates, monthLabel, weekDays, prevMonth, nextMonth } = useCalendar();
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Booking Card */}
      <div className="flex flex-1 flex-col rounded-[4px] border border-l-4 border-white/10 border-l-white/10 bg-[rgba(25,25,25,0.7)] p-6 backdrop-blur-[20px]">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/booking.webp"
            alt="Calendar"
            width={18}
            height={20}
            className="h-5 w-[18px]"
          />

          <h2 className="font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
            Book Consultation
          </h2>
        </div>

        {/* Description */}
        <p className="mt-6 font-['Inter'] text-[16px] leading-6 text-[#C3C9B3]">
          Secure a 1:1 strategy session with our lead architects to map your
          path to hyper-growth.
        </p>

        {/* Calendar */}
        <div className="mt-6 rounded-[4px] border border-white/[0.05] bg-[#1C2027] px-4 pt-8 pb-6">
          {/* Month */}
          <div className="flex items-center justify-between">
            <h3 className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#A0D14F] uppercase">
              {monthLabel.toUpperCase()}
            </h3>

            <div className="flex items-center gap-4">
              <button type="button" onClick={prevMonth}>
                <Image
                  src="/images/left-arrow.webp"
                  alt="Previous Month"
                  width={8}
                  height={12}
                  className="cursor-pointer"
                />
              </button>

              <button type="button" onClick={nextMonth}>
                <Image
                  src="/images/right-arrow.webp"
                  alt="Next Month"
                  width={8}
                  height={12}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>

          {/* Days */}
          <div className="mt-8 grid grid-cols-7 gap-y-6">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className="text-center font-['JetBrains_Mono'] text-[16px] leading-6 text-[#C3C9B3]/50"
              >
                {day}
              </div>
            ))}

            {/* Dates */}
            {dates.map((date, index) => (
              <div
                key={index}
                className={`mx-auto flex h-[42px] w-[47px] items-center justify-center rounded-[2px] font-['JetBrains_Mono'] text-[16px] leading-6 ${
                  date.active
                    ? "bg-[#A0D14F] text-[#070B12]"
                    : date.muted
                      ? "text-[#DFE2ED]/30"
                      : "text-[#DFE2ED]"
                } `}
              >
                {date.day}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="mt-6 flex h-[50px] w-full cursor-pointer items-center justify-center border border-[#A0D14F] transition-all duration-300 hover:bg-[#A0D14F]/10"
        >
          <span className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#A0D14F] uppercase">
            View All Slots
          </span>
        </button>
      </div>

      {/* Quick Connect */}
      <div className="rounded-[4px] border border-white/10 bg-[rgba(25,25,25,0.7)] p-6 backdrop-blur-[20px]">
        <h3 className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#0057FF] uppercase">
          Quick Connect
        </h3>

        <div className="mt-6 space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/email.webp"
              alt="Email"
              width={20}
              height={20}
            />

            <a
              href="mailto:connect@digigrowtherz.ai"
              className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#DFE2ED]"
            >
              connect@digigrowtherz.ai
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/number.webp"
              alt="Phone"
              width={15}
              height={22}
            />

            <a
              href="tel:+18004769246"
              className="font-['JetBrains_Mono'] text-[16px] leading-6 text-[#DFE2ED]"
            >
              +1 (800) GROW-AI-0
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
