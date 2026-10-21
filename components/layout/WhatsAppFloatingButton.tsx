"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/923036083548?text=Hi%20DigiGrowtherz%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function WhatsAppFloatingButton() {
  return (
    // Animation 1: Entrance when the page loads
    <motion.div
      initial={{
        opacity: 0,
        x: 90,
        y: 60,
        scale: 0.45,
        rotate: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 16,
        mass: 0.8,
        delay: 0.2,
      }}
      className="fixed right-3 bottom-[calc(1rem+env(safe-area-inset-bottom))] isolate z-[100] h-14 w-14 sm:right-5 sm:bottom-6 sm:h-16 sm:w-16 lg:right-6 lg:bottom-6 lg:h-20 lg:w-20"
    >
      {/* Animation 2: Jiggle every 5 seconds */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DigiGrowtherz on WhatsApp"
        title="Chat with us on WhatsApp"
        onClick={() =>
          sendGAEvent("event", "whatsapp_click", {
            link_location: "floating_button",
          })
        }
        initial={{ x: 0, rotate: 0 }}
        animate={{
          x: [0, -3, 3, -3, 3, 0],
          rotate: [0, -6, 6, -6, 6, 0],
        }}
        transition={{
          duration: 0.65,
          delay: 5,
          repeat: Infinity,
          repeatDelay: 4.35,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.30)] transition-colors duration-300 hover:bg-[#20BD5A] hover:shadow-[0_10px_38px_rgba(37,211,102,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <FaWhatsapp
          aria-hidden="true"
          className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
        />
      </motion.a>
    </motion.div>
  );
}
