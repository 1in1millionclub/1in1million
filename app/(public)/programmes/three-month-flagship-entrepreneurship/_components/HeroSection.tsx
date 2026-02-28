"use client";
import { BackgroundBeams } from "@/components/background-beams";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { CTAForm } from "./CTAForm";

const mentors = [
  {
    image: "/mentros/shazul-mk.webp",
    name: "Shazul MK",
    title: "CEO, Fast Logistics",
  },
  {
    image: "/mentros/pc-musthafa.webp",
    name: "PC Musthafa",
    title: "Global CEO, ID Fresh Foods, IIM Alumni",
  },
  {
    image: "/mentros/nazer.webp",
    name: "Abdul Nazer",
    title: "CO Founder & Co-Chairman, ID Fresh Foods",
  },
  {
    image: "/mentros/roy-john.jpg",
    name: "Dr. Roy John",
    title:
      "Senior Consultant & Partner@ConSoul Associates LLP (Business Consultants) Ex Director, Holy Grace Academy of Management Study. IIMK Alumni",
  },
  {
    image: "/mentros/sajith-ansar.webp",
    name: "Sajith Ansar",
    title: "Founder and CEO, Unlimits, Director at Idea Spice Design",
  },
  {
    image: "/mentros/rustham-usman.webp",
    name: "Rustum Usman",
    title: "Consulting Manager, Cognizant, Crink.App founder, IIMK Alumni",
  },
  {
    image: "/mentros/yasir-trico.webp",
    name: "Yasar Shareef",
    title: "Managing Director, Trico Trading",
  },
  {
    image: "/mentros/dr-kabeer.webp",
    name: "Dr. PA Kabeer",
    title: "Managing Director, Dr. Bee & Almas Hospitals",
  },
  {
    image: "/mentros/mo.webp",
    name: "Incomecoachmo",
    title: "Portfolio Entrepreneur",
  },
];
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero Parallax
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const beamsY = useTransform(smoothProgress, [0, 0.2], [0, 50]);

  // Section Parallax
  const section1Y = useTransform(smoothProgress, [0.1, 0.3], [100, 0]);
  const section2Y = useTransform(smoothProgress, [0.2, 0.4], [0, 0]);

  // Mentors Parallax
  const mentorsTitleY = useTransform(smoothProgress, [0.3, 0.5], [50, 0]);
  const mentorsGridY = useTransform(smoothProgress, [0.4, 0.7], [100, 0]);

  // CTA Parallax
  const ctaY = useTransform(smoothProgress, [0.7, 1], [100, 0]);
  const ctaScale = useTransform(smoothProgress, [0.8, 1], [0.95, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative flex min-h-[90dvh] w-full flex-col items-center justify-center gap-3 overflow-hidden px-6 py-20 sm:gap-4 md:gap-5 lg:gap-6">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col items-start justify-center gap-4 text-center sm:gap-5 md:items-center md:gap-6 lg:gap-8"
        >
          <h1 className="text-foreground font-monument w-full max-w-[800px] text-center text-3xl leading-tight font-normal tracking-wide sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
            Ever thought which college to go to
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl font-bold text-[#FE6168] sm:text-5xl md:text-6xl lg:text-8xl"
            >
              Learn Business?
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-muted-foreground font-mont flex w-full max-w-lg flex-col justify-center text-sm leading-[1.4] font-medium sm:text-base sm:leading-[1.45] md:text-center md:text-xl md:leading-normal lg:text-lg lg:leading-7"
          >
            Well, you&apos;re at the right place.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex cursor-pointer flex-col items-center gap-2"
            onClick={() => {
              document
                .getElementById("first-point")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-muted-foreground/60 text-[10px] font-medium tracking-[0.2em] uppercase">
              Scroll
            </span>
            <ChevronDown className="h-6 w-6 text-[#FE6168]" />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: beamsY }}>
          <BackgroundBeams className="-top-[85px] h-[calc(100%+85px)]" />
        </motion.div>
      </div>
      <motion.div
        id="first-point"
        style={{ y: section1Y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-border to-background/50 flex min-h-[60dvh] w-full flex-col items-center justify-center border-t bg-linear-to-b from-transparent px-4 py-12 md:px-24 md:py-16"
      >
        <h2 className="text-foreground font-monument w-full max-w-[800px] text-center text-3xl font-normal tracking-wide sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          But who will
          <br />
          <span className="font-bold text-[#FE6168] italic">teach you?</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ y: section2Y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-border flex min-h-[60dvh] w-full flex-col items-center justify-center border-t px-4 py-12 md:px-24 md:py-16"
      >
        <h2 className="text-foreground font-monument w-full max-w-[900px] text-center text-3xl font-normal tracking-wide sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          Real Pro Business Owners
          <br />
          <span className="font-bold text-[#FE6168]">& not from TextBooks</span>
        </h2>
      </motion.div>

      <div className="border-border flex w-full flex-col items-center justify-center overflow-hidden border-t px-4 py-20 md:px-24 md:py-32">
        <motion.h2
          style={{ y: mentorsTitleY }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-foreground font-monument mb-16 w-full max-w-[1000px] text-center text-3xl font-normal tracking-wide sm:text-4xl md:px-0 md:text-5xl lg:text-7xl"
        >
          By the way,{" "}
          <span className="font-bold text-[#FE6168]">
            Have a look at our teachers
          </span>
        </motion.h2>

        <div className="w-full max-w-7xl">
          <motion.div
            style={{ y: mentorsGridY }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group bg-card/50 border-border hover:bg-card flex flex-col gap-4 rounded-3xl border p-6 backdrop-blur-sm transition-all hover:border-[#FE6168]/50 hover:shadow-[0_20px_40px_-15px_rgba(254,97,104,0.1)]"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-foreground font-monument text-xl font-semibold transition-colors group-hover:text-[#FE6168]">
                    {mentor.name}
                  </h3>
                  <p className="text-muted-foreground font-mont line-clamp-2 text-sm opacity-80 transition-opacity group-hover:opacity-100 md:text-base">
                    {mentor.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ y: ctaY, scale: ctaScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-border flex min-h-[80dvh] w-full flex-col items-center justify-center gap-10 border-t px-4 py-20 md:px-24 md:py-16"
      >
        <h2 className="text-foreground font-monument w-full max-w-[1000px] text-center text-3xl font-normal tracking-wide sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          Admissions are not open yet <br />
          <span className="font-bold text-[#FE6168]">
            You can pre-book here
          </span>
        </h2>
        <CTAForm />
      </motion.div>
    </div>
  );
}
