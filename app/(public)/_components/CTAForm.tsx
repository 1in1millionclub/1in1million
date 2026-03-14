"use client";

import { submitApplication } from "@/app/actions/application";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CTAForm({
  plan,
  onSuccess,
}: {
  plan: string;
  onSuccess?: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    location: "",
    expectations: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitApplication({
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age),
        phone_number: formData.phoneNumber,
        location: formData.location,
        expectations: formData.expectations,
        plan: plan,
      });

      if (!result.success) {
        toast.error(result.error || "Failed to submit application");
        return;
      }

      toast.success("Application submitted successfully!");

      const message = `*1in1M Application - ${plan}*

*Name:* ${formData.name}
*Email ID:* ${formData.email}
*Phone Number:* ${formData.phoneNumber}
*Location:* ${formData.location}
*Age:* ${formData.age}
*Plan Selected:* ${plan}
*Expectations:* ${formData.expectations}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918137981287?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
      onSuccess?.();

      setFormData({
        name: "",
        age: "",
        phoneNumber: "",
        location: "",
        expectations: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            placeholder="Age"
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
            placeholder="Phone number"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="location"
          className="text-foreground font-mont text-sm font-medium"
        >
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
          className="bg-background border-border text-foreground font-mont rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
          placeholder="Enter your location (City/State)"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="expectations"
          className="text-foreground font-mont text-sm font-medium text-balance"
        >
          What&apos;s your expectations from 1in1million Value Driven School of Business:
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="expectations"
          name="expectations"
          value={formData.expectations}
          onChange={handleInputChange}
          required
          rows={2}
          className="bg-background border-border text-foreground font-mont resize-none rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#FE6168] focus:outline-none"
          placeholder="e.g., Student, Working professional, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-monument text-foreground mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FE6168] px-6 py-4 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
}
