"use client";

export default function ContactForm() {
  return (
    <section className="h-full bg-[#070B12]">
      <div className="flex h-full flex-col rounded-[4px] border border-white/10 bg-[rgba(25,25,25,0.7)] p-6 pb-[85px] backdrop-blur-[20px]">
        {/* Header */}
        <div>
          <h2 className="font-['Space_Grotesk'] text-[32px] leading-[41.6px] font-medium text-[#DFE2ED]">
            Initialize Connection
          </h2>

          <p className="mt-4 font-['JetBrains_Mono'] text-[16px] font-normal tracking-[-0.4px] text-[#C3C9B3] uppercase">
            Transmission Protocol: Secure / Encrypted
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-8">
          {/* First Row */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-3 block font-['JetBrains_Mono'] text-[16px] font-normal text-[#C3C9B3]">
                NAME_IDENTIFIER
              </label>

              <input
                type="text"
                placeholder="Enter Full Name"
                className="h-12 w-full border-b border-[#6B7280] bg-white px-2 py-[14px] font-['Inter'] text-[16px] text-[#111827] placeholder:text-[#6B7280] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block font-['JetBrains_Mono'] text-[16px] font-normal text-[#C3C9B3]">
                NODE_EMAIL
              </label>

              <input
                type="email"
                placeholder="example@enterprise.com"
                className="h-12 w-full border-b border-[#6B7280] bg-white px-2 py-[14px] font-['Inter'] text-[16px] text-[#111827] placeholder:text-[#6B7280] focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-3 block font-['JetBrains_Mono'] text-[16px] font-normal text-[#C3C9B3]">
              SUBJECT_DOMAIN
            </label>

            <input
              type="text"
              placeholder="AI Automation Strategy"
              className="h-[49px] w-full border-b border-[#434938] bg-[#111111] px-2 py-3 font-['Inter'] text-[16px] text-[#DFE2ED] placeholder:text-[#DFE2ED] focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-3 block font-['JetBrains_Mono'] text-[16px] font-normal text-[#C3C9B3]">
              MESSAGE_PAYLOAD
            </label>

            <textarea
              rows={6}
              placeholder="Describe your automation requirements..."
              className="h-[145px] w-full resize-y border-b border-[#434938] bg-[#111111] px-2 py-3 font-['Inter'] text-[16px] leading-6 text-[#DFE2ED] placeholder:text-[#6B7280] focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex h-14 w-full max-w-[243px] cursor-pointer items-center justify-center bg-[#A0D14F] px-6 py-4 transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
          >
            <span className="font-['JetBrains_Mono'] text-[16px] leading-6 font-bold text-[#070B12]">
              SEND TRANSMISSION
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
