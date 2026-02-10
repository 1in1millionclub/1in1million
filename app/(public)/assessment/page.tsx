"use client";

import { submitAssessment } from "@/app/actions/assessment";
import FooterSection from "@/components/footer-section";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  q1_money_usage: z
    .string()
    .min(10, "Please provide a more detailed answer (min 10 characters)"),
  q2_success_meaning: z
    .string()
    .min(10, "Please provide a more detailed answer (min 10 characters)"),
  q3_journey_changes: z
    .string()
    .min(10, "Please provide a more detailed answer (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AssessmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      q1_money_usage: "",
      q2_success_meaning: "",
      q3_journey_changes: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitAssessment(values);

      if (!result.success) {
        toast.error(result.error);
        return;
      }

      setIsSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.success("Assessment submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <>
        <div className="flex min-h-[80dvh] w-full items-center justify-center border-b bg-linear-to-br p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <Card className="bg-muted/90 overflow-hidden border-none shadow-2xl backdrop-blur-sm">
              <CardContent className="flex flex-col items-center pt-10 pb-12 text-center">
                <div className="mb-6 rounded-full bg-[#FE6168] p-3">
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-foreground font-monument mb-2 text-3xl font-normal">
                  Thank You!
                </h2>
                <p className="text-foreground px-5 text-balance">
                  Your assessment has been received. We&apos;ll review it and
                  get back to you soon.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full border-b px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="font-monument mb-4 text-4xl font-normal tracking-wide text-white md:text-5xl">
              1in1M <span className="text-[#FE6168]">Assessment</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg text-balance">
              Take the first step toward your extraordinary journey. Tell us
              about your vision and definition of success.
            </p>
          </motion.div>

          <Card className="overflow-hidden border-none bg-white/5 shadow-2xl backdrop-blur-md">
            <CardContent className="pt-1">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Controller
                      name="full_name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="full_name">Full Name</FieldLabel>
                          <Input
                            {...field}
                            id="full_name"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your full name"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input
                            {...field}
                            id="email"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your email address"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <Controller
                      control={form.control}
                      name="q1_money_usage"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            1. If you had ₹100 Cr in your bank account today,
                            how would you use it, and why?
                          </FieldLabel>
                          <Textarea
                            placeholder="Your reflection..."
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="q2_success_meaning"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            2. What does success mean to you at this stage of
                            your life?
                          </FieldLabel>
                          <Textarea
                            placeholder="Your reflection..."
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="q3_journey_changes"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            3. What changes do you expect in yourself after
                            completing the 1in1M journey? How do you think
                            you’ll aim to be different?
                          </FieldLabel>
                          <Textarea
                            placeholder="Your reflection..."
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full rounded-full"
                  >
                    <div className="relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
                      <div className="text-foreground font-monument flex flex-col justify-center text-sm leading-5 font-medium sm:text-base md:text-[15px]">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />{" "}
                            Submitting...
                          </span>
                        ) : (
                          "Submit Assessment"
                        )}
                      </div>
                    </div>
                    <GlowEffect
                      colors={["#b00222", "#FE6168"]}
                      mode="pulse"
                      blur="medium"
                      className="rounded-full"
                    />
                  </button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
