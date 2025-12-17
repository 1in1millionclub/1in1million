"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this a course?",
    answer:
      "It's more than a course — it's a practical entrepreneurship school + community led by real founders.",
  },
  {
    question: "Can I join if I have no business idea yet?",
    answer: "Yes. You'll learn how to choose, validate, and build one.",
  },
  {
    question: "Is everything in English?",
    answer:
      "Content is bilingual (Malayalam + English), focused on Kerala context.",
  },
  {
    question: "Will I get access to mentors?",
    answer:
      "Yes. Each module includes live Q&A with the featured entrepreneur/professor.",
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer clarity calls before joining to ensure the right fit.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Only 30-40 minutes per day. The programme is designed for busy professionals and students.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="flex w-full items-start justify-center">
      <div className="flex flex-1 flex-col items-start justify-start gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        {/* Left Column - Header */}
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-1 lg:py-5">
          <div className="flex w-full flex-col justify-center font-sans text-4xl leading-tight font-semibold tracking-tight text-[#49423D] md:leading-[44px]">
            Frequently Asked Questions
          </div>
          <div className="w-full font-sans text-base leading-7 font-normal text-[#605A57]">
            Explore your data, build your dashboard,
            <br className="hidden md:block" />
            bring your team together.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <div className="flex w-full flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="w-full overflow-hidden border-b border-[rgba(73,66,61,0.16)]"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-200 hover:bg-[rgba(73,66,61,0.02)]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 font-sans text-base leading-6 font-medium text-[#49423D]">
                      {item.question}
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] font-sans text-sm leading-6 font-normal text-[#605A57]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
