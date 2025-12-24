"use client";

import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { useState } from "react";
import { FaInstagram, FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";

export function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    currentActivity: "",
    graduation: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Application - 3 Month Flagship Entrepreneurship Programme*

*Name:* ${formData.name}
*Age:* ${formData.age}
*Phone Number:* ${formData.phoneNumber}
*What's doing right now:* ${formData.currentActivity}
*Graduation:* ${formData.graduation}
*Email ID:* ${formData.email}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918137981287?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsFormOpen(false);
    setFormData({
      name: "",
      age: "",
      phoneNumber: "",
      currentActivity: "",
      graduation: "",
      email: "",
    });
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Application Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="bg-background border-border relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border p-6 shadow-2xl">
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-muted-foreground hover:text-foreground absolute top-4 right-4 transition-colors"
              aria-label="Close form"
            >
              <FaTimes className="size-5" />
            </button>

            <h3 className="text-foreground font-monument mb-6 text-center text-xl">
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="age"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="100"
                  className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="Enter your age"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="currentActivity"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  What are you doing right now?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="currentActivity"
                  name="currentActivity"
                  value={formData.currentActivity}
                  onChange={handleInputChange}
                  required
                  rows={2}
                  className="bg-background border-border text-foreground font-mont resize-none rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="e.g., Student, Working professional, etc."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="graduation"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  Graduation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="graduation"
                  name="graduation"
                  value={formData.graduation}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="e.g., B.Tech, MBA, etc."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-foreground font-mont text-sm font-medium"
                >
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                className="font-monument text-foreground mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FE6168] px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="border-border relative z-10 flex items-center justify-center gap-6 self-stretch border-t border-b px-6 py-12 md:px-24 md:py-20">
        {/* Background pattern */}
        {/* <div className="absolute inset-0 h-full w-full overflow-hidden opacity-30">
          <div className="relative h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="border-border absolute h-4 w-full origin-top-left -rotate-45 border-t"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div> */}

        <div className="relative z-20 flex w-full max-w-[600px] flex-col items-center justify-start gap-6 overflow-hidden rounded-lg px-6 py-8">
          <div className="flex flex-col items-center justify-start gap-4 self-stretch">
            <h2 className="text-foreground font-monument text-center text-3xl leading-tight tracking-tight md:text-5xl">
              Be Among the One in One Million
            </h2>
            <p className="text-muted-foreground font-mont text-center text-base leading-7 font-medium text-balance md:text-lg">
              Moments like this come once. <br />
              Now is that moment. <br />
              Be part of the very first batch of this first-ever learning
              experience.
            </p>
          </div>

          <div className="relative mt-5 w-full max-w-xs rounded-full">
            <button
              onClick={() => setIsFormOpen(true)}
              className="relative z-10 flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 transition-opacity hover:opacity-90 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12"
            >
              <span className="text-foreground font-monument text-sm leading-5 font-medium sm:text-base md:text-[15px]">
                Apply now
              </span>
            </button>
            <GlowEffect
              colors={["#b00222", "#FE6168"]}
              mode="rotate"
              blur="medium"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="whatsapp://send?phone=+918137981287"
              className="bg-primary flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-10 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-opacity hover:opacity-90"
            >
              <span className="text-primary-foreground font-monument text-sm font-medium">
                WhatsApp Us
              </span>
              <FaWhatsapp className="text-primary-foreground size-5" />
            </a>
          </div>
          <div className="text-muted-foreground font-mont flex items-center justify-center gap-2">
            Follow
            <a
              href="https://www.instagram.com/1in1m.club/"
              target="_blank"
              className="text-foreground underline"
            >
              @1in1m.club
            </a>{" "}
            on <FaInstagram />
          </div>
          <a href="tel:+918137981287" className="flex items-center gap-2">
            <FaPhoneAlt /> +91 81379 81287
          </a>
        </div>
      </div>
    </div>
  );
}
