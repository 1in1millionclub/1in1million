"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "What is 1in1Million Business School?",
    answer: [
      "1in1Million is a value-driven Business School built for aspiring founders, professionals, students, and existing business owners.",
      "We help students learn directly from real entrepreneurs, industry experts, and practitioners \u2014 not just theory.",
      "The program combines structured business education, practical learning, mentorship, and real-world business thinking to help individuals grow with clarity, competence, and values.",
      "Our mission is to build extraordinary individuals who succeed in business without compromising their principles.",
    ],
  },
  {
    value: "item-2",
    question: "Is the program online or offline?",
    answer: [
      "1in1Million is designed as a hybrid business learning experience.",
      "The core learning happens online through structured sessions, assessments, and mentor-led learning allowing students to learn from anywhere with flexibility.",
      "For students in the Professional Plan, the experience also includes offline opportunities such as:",
    ],
    bullets: ["Meetups", "Mastermind sessions", "Industrial visits"],
    trailing:
      "This model allows students to continue their studies, profession, or business while consistently learning and growing without overwhelming their schedule.",
  },
  {
    value: "item-3",
    question: "Is the program in Malayalam or English?",
    answer: [
      "The primary teaching language is Malayalam, making business education easier to understand and apply.",
      "Important business terms and frameworks may use English where necessary, but every concept is explained clearly and practically.",
      "You do not need advanced English fluency to benefit from the program.",
    ],
  },
  {
    value: "item-4",
    question: "Is this just a collection of recorded videos?",
    answer: [
      "No. This is a structured business learning journey designed for practical growth and long-term development.",
      "Depending on your plan, the experience includes:",
    ],
    bullets: [
      "High-quality structured sessions",
      "Assessments and implementation tasks",
      "Live mentor interactions",
      "24/7 Doubt Clearing Academician Support",
      "Case studies",
      "Research-based management lessons",
      "Capstone projects",
    ],
    trailing:
      "The goal is not passive watching \u2014 it is guided transformation.",
  },
  {
    value: "item-5",
    question: "How is the program structured?",
    answer: [
      "The program follows a structured and progressive business learning model designed to provide practical clarity across core business functions.",
      "The curriculum includes:",
    ],
    bullets: [
      "24 modules covering MBA-level business education concepts in a simplified and practical way",
      "17+ business areas taught through advanced curriculum and mentor-led masterclasses",
      "Step-by-step progression for systematic learning",
      "Practical frameworks, business models, case studies and implementation-focused lessons",
      "Assessments designed to strengthen understanding and application",
    ],
    trailing:
      "The program is designed to make high-level business education accessible, practical, and relevant for real-world growth.",
  },
  {
    value: "item-6",
    question: "How much time should I dedicate daily?",
    answer: [
      "We recommend around 45\u201360 minutes per day.",
      "The program uses a micro-learning approach, allowing you to continue your studies, profession, or business while learning consistently.",
      "You do not need to pause your life to build business knowledge.",
      "Students who can dedicate more time may also complete sessions faster at their own pace.",
    ],
  },
  {
    value: "item-7",
    question: "Will there be live sessions?",
    answer: [
      "Yes. Advanced, Professional, and Execution plan students receive:",
    ],
    bullets: [
      "Live mentor sessions",
      "Business case study discussions",
      "Research-based management lessons",
      "Doubt-clearing interactions",
    ],
    trailing: [
      "Typically, students will have:",
      "2 live sessions every two weeks",
      "One focused on real business case studies",
      "One focused on management and strategic thinking",
      "Live session schedules will be shared in advance.",
    ],
  },
  {
    value: "item-8",
    question: "Who is this program suitable for?",
    answer: [],
    bullets: [
      "Existing business owners",
      "MSME owners",
      "College students",
      "Aspiring entrepreneurs",
      "Working professionals",
      "Early-stage founders",
    ],
    trailing:
      "If you want business clarity, practical learning, and long-term growth, this program is built for you.",
  },
  {
    value: "item-9",
    question: "Do I need a business idea before joining?",
    answer: [
      "No. You do not need a business idea to start.",
      "We first focus on:",
    ],
    bullets: [
      "Business thinking",
      "Strategic mindset",
      "Clarity",
      "Problem-solving",
      "Opportunity awareness",
    ],
    trailing: "Execution comes after building the right foundation.",
  },
  {
    value: "item-10",
    question: "Will I get lifetime access?",
    answer: ["Lifetime access is available for:"],
    bullets: ["\u2728 Professional Plan"],
    trailing:
      "This allows students to revisit lessons, frameworks, and resources anytime.",
  },
  {
    value: "item-11",
    question: "Can I upgrade my plan later?",
    answer: [
      "Yes. You can upgrade your plan during the learning journey based on your goals and requirements.",
    ],
  },
];

function renderAnswer(item: (typeof faqItems)[number]) {
  const elements: React.ReactNode[] = [];

  if (item.answer) {
    for (const paragraph of item.answer) {
      elements.push(
        <p key={elements.length} className="mb-3 last:mb-0">
          {paragraph}
        </p>,
      );
    }
  }

  if (item.bullets) {
    elements.push(
      <ul key={elements.length} className="mt-2 mb-3 space-y-1.5 last:mb-0">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex items-baseline gap-2">
            <span className="text-[#FE6168]">▪</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>,
    );
  }

  if (item.trailing) {
    const lines = Array.isArray(item.trailing)
      ? item.trailing
      : [item.trailing];
    for (const line of lines) {
      elements.push(
        <p key={elements.length} className="mb-3 last:mb-0">
          {line}
        </p>,
      );
    }
  }

  return elements;
}

export function FAQSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-t px-4 py-20 md:px-24 md:py-32">
      <div className="flex w-full max-w-[900px] flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-foreground font-monument text-3xl font-normal tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-[#FE6168]">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-full"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="bg-card/30 border-border rounded-2xl border backdrop-blur-sm transition-all data-[state=open]:border-[#FE6168]/30"
              >
                <AccordionTrigger className="font-monument px-6 py-5 text-sm tracking-wide hover:text-[#FE6168] hover:no-underline data-[state=open]:text-[#FE6168]">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="text-muted-foreground font-mont space-y-3 text-sm leading-relaxed">
                    {renderAnswer(item)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
