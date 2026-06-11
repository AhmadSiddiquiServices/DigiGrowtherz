"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    icon: "/images/partner-1.webp",
    quote:
      '"Their AI capabilities, combined with their Nearshore delivery model, has been a game-changer for our software development practice."',
    initials: "TO",
    name: "Taryn Owen",
    designation: "CEO, TRUEBLUE",
  },
  {
    icon: "/images/partner-2.webp",
    quote:
      '"It is the jumpstart we needed to help us identify and start building POCs for Gen AI use cases across our business."',
    initials: "MS",
    name: "Matthew Shorts",
    designation: "CPTO, COX2M",
  },
  {
    icon: "/images/partner-3.webp",
    quote:
      '"With DigiGrowtherz AI, we improved our velocity by almost 300% while reducing bugs to near zero."',
    initials: "AJ",
    name: "AJ Alix",
    designation: "HEAD OF PRODUCT, COX",
  },
  {
    icon: "/images/partner-1.webp",
    quote:
      '"The team delivered beyond expectations and accelerated our entire development process."',
    initials: "JD",
    name: "John Doe",
    designation: "CTO, EXAMPLE",
  },
  {
    icon: "/images/partner-2.webp",
    quote:
      '"Working with DigiGrowtherz transformed how we approach AI implementation."',
    initials: "SK",
    name: "Sarah Kim",
    designation: "VP ENGINEERING, TECHCO",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = Array.from({ length: 3 }, (_, index) => {
    return testimonials[(currentIndex + index) % testimonials.length];
  });

  return (
    <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-20 md:py-24">
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="mb-20 text-center font-['Space_Grotesk'] text-[clamp(32px,5vw,48px)] leading-[120%] font-semibold tracking-[-0.02em] text-[#DFE2ED]">
          A Trusted Partner in AI
        </h2>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex min-h-[298px] flex-col rounded-[8px] border border-white/10 bg-[rgba(25,25,25,0.6)] p-8 backdrop-blur-[20px]"
            >
              {/* Icon */}
              <div className="mb-8">
                <Image
                  src={testimonial.icon}
                  alt=""
                  width={36}
                  height={40}
                  className="h-10 w-9 object-contain"
                />
              </div>

              {/* Comment */}
              <p className="mb-8 flex-1 font-sans text-[16px] leading-6 text-[rgba(223,226,237,0.8)] italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/10">
                  <span className="font-sans text-[16px] leading-6 font-bold text-[#DFE2ED]">
                    {testimonial.initials}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-[16px] leading-6 font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 font-mono text-[12px] tracking-[1.2px] text-[rgba(223,226,237,0.5)] uppercase">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
