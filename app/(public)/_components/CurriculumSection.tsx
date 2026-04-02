"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const curriculumItems = [
  "Value Driven mindset",
  "Leadership Principles",
  "People and Team Management",
  "Finance I",
  "Finance II",
  "Sales",
  "Personal Branding",
  "Marketing",
  "Negotiation Skills",
  "Operational Excellence",
  "System Building",
  "Practical Implementation of AI",
  "Investment Fundamentals",
  "Business Modeling",
  "Business Process Management",
  "Strategic Management",
  "Art of authentic networking",
];

export function CurriculumSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-t px-4 py-20 md:px-24 md:py-32">
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-foreground font-monument text-3xl font-normal tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-[#FE6168]">
              A specially designed, Curriculum
            </span>
            <br />
            That may be the first of its kind in the world.
          </h2>
        </motion.div>
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#FE6168]/30 bg-white/5 px-8 py-4 transition-all hover:bg-[#FE6168] hover:text-white"
          >
            <span className="font-monument relative z-10 text-sm font-medium tracking-wide">
              {isExpanded ? "Hide Curriculum" : "View Full Curriculum"}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="relative z-10"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {curriculumItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        ease: "easeInOut",
                        duration: 1,
                      }}
                      className="bg-card/30 border-border hover:bg-card/60 flex items-center gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all hover:border-[#FE6168]/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FE6168]/10 text-[#FE6168]">
                        <span className="font-monument text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-foreground font-mont text-sm leading-tight font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
