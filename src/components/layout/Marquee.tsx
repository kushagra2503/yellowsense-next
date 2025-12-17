"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Driving financial inclusion in India [fin-tech]",
  "•",
  "AI based maid booking [consumer-tech]",
  "•",
  "Available one-time also no commitment needed!",
  "•",
  "Contact us: 94038-90108",
  "•",
];

export default function Marquee() {
  return (
    <div className="bg-brand-primary text-brand-cream overflow-hidden py-3 relative z-40">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-4 items-center text-sm md:text-base font-medium"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mx-4">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

