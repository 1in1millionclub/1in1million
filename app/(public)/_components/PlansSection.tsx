"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Shield, Star, Zap } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CTAForm } from "./CTAForm";

const plans = [
  {
    name: "Basic Plan",
    icon: <Star className="h-6 w-6" />,
    features: [
      "Exclusive masterclasses in each business domain led by 1in1M mentors",
      "Outcome-based assessments to ensure practical understanding",
      "Structured curriculum designed for clear foundational business learning",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
  },
  {
    name: "Advanced Plan",
    icon: <Rocket className="h-6 w-6" />,

    features: [
      "Exclusive masterclasses in each domain led by 1in1M mentors",
      "Outcome-based assessments for measurable learning",
      "Live mentor sessions for clarity and deeper understanding",
      "Real company case studies across different business functions",
      "Capstone project to ensure practical application of everything learned",
    ],
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
  },
  {
    name: "Professional Plan",
    icon: <Shield className="h-6 w-6" />,
    // highlight: "Major Focus - Aspiring Entrepreneurs",
    description:
      "This plan is for those who want learning + community + long-term growth ecosystem.",
    features: [
      "Exclusive masterclasses in each domain led by 1in1M mentors",
      "Outcome-based assessments for measurable learning",
      "Live mentor sessions for deeper clarity",
      "Case studies of successful companies across key business functions",
      "Capstone project to apply your knowledge",
      "Dedicated academician for ongoing support and doubt clearing",
      "On-call guidance support",
      "Lifetime community access",
      "Access to meetups, mastermind events, business trips, and industrial visits",
    ],
    color: "from-[#FE6168]/20 to-[#FE6168]/40",
    borderColor: "border-[#FE6168]/50",
    accentColor: "text-[#FE6168]",
    popular: true,
  },
  {
    name: "Execution Plan",
    icon: <Zap className="h-6 w-6" />,
    highlight: "For Serious Business Owners",

    features: [
      "Exclusive masterclasses in each domain led by 1in1M mentors",
      "Outcome-based assessments for measurable learning",
      "Live mentor sessions for deeper clarity",
      "Case studies of successful companies across key business functions",
      "Capstone project to apply your knowledge",
      "Dedicated academician for ongoing support and doubt clearing",
      "On-call guidance support",
      "Lifetime community access",
      "Access to meetups, mastermind events, business trips, and industrial visits",
      "Networking with top business owners and 1in1M Mentors.",
      "1:1 mentor involvement for personalized guidance",
      "Direct growth advisory & consultation for your actual company",
      "Strategic execution support to build and scale your business from 1in1M",
    ],
    color: "from-amber-500/20 to-amber-600/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
  },
];

export function PlansSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsDialogOpen(true);
  };

  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-t px-4 py-20 md:px-24 md:py-32">
      <div className="flex w-full max-w-7xl grow flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-foreground font-monument text-3xl font-normal tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
            Choose <br />
            <span className="text-[#FE6168]">Your Path</span>
          </h2>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card/50 flex flex-col rounded-4xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${plan.borderColor} ${
                plan.popular
                  ? "relative shadow-[0_0_40px_-10px_rgba(254,97,104,0.2)]"
                  : ""
              }`}
            >
              {/* {plan.popular && (
                <div className="bg-[#FE6168] font-monument absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] text-white">
                  Most Popular
                </div>
              )} */}

              <div className="mb-8 flex flex-col gap-4">
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl bg-linear-to-br ${plan.color} ${plan.accentColor}`}
                >
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-foreground font-monument text-xl">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <p
                      className={`mt-1 text-[10px] font-bold tracking-wider uppercase ${plan.accentColor}`}
                    >
                      {plan.highlight}
                    </p>
                  )}
                </div>
              </div>

              <div className="grow space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex gap-3">
                    <div
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${plan.color} ${plan.accentColor}`}
                    >
                      <Check className="size-3" />
                    </div>
                    <span className="text-foreground font-mont mt-1 text-sm leading-tight opacity-90">
                      {feature}
                    </span>
                  </div>
                ))}
                <p className="text-muted-foreground font-mont text-sm leading-relaxed opacity-70">
                  {plan.description}
                </p>
              </div>

              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`font-monument mt-10 w-full rounded-2xl py-4 text-xs transition-all ${
                  plan.popular
                    ? "hover:bg-opacity-90 bg-[#FE6168] text-white"
                    : "text-foreground border-border border bg-white/5 hover:bg-white/10"
                }`}
              >
                Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90dvh] max-w-xl overflow-y-auto border-white/10 bg-[#0A0A0A] text-white">
          <DialogHeader>
            <DialogTitle className="font-monument text-2xl">
              Apply for <span className="text-[#FE6168]">{selectedPlan}</span>
            </DialogTitle>
            <DialogDescription className="font-mont text-slate-400">
              Fill in your details to begin your journey with 1in1Million.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {selectedPlan && (
              <CTAForm
                plan={selectedPlan}
                onSuccess={() => setIsDialogOpen(false)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
