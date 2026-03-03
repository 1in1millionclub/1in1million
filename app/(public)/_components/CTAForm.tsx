"use client";

import { useState } from "react";

export function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    location: "",
    currentActivity: "",
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
*Email ID:* ${formData.email}
*Phone Number:* ${formData.phoneNumber}
*Location:* ${formData.location}
*Age:* ${formData.age}
*What's doing right now:* ${formData.currentActivity}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918137981287?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setFormData({
      name: "",
      age: "",
      phoneNumber: "",
      location: "",
      currentActivity: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
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
          What are you doing right now? <span className="text-red-500">*</span>
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

      <button
        type="submit"
        className="font-monument text-foreground mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FE6168] px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
