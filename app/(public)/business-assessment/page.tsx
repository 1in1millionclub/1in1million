"use client";

import { submitBusinessAssessment } from "@/app/actions/business-assessment";
import FooterSection from "@/components/footer-section";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const AREAS_TO_IMPROVE = [
  "Business Strategy",
  "Leadership & Team Management",
  "Operational Systems",
  "Sales Growth",
  "Marketing & Branding",
  "Financial Structuring",
  "SOP & Process Building",
  "Expansion Strategy",
  "AI & Automation",
  "Hiring & Team Structure",
  "Execution Discipline",
  "Founder Clarity & Direction",
  "Overall Business Transformation",
];

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  company_name: z.string().min(2, "Company Name is required"),
  industry: z.string().min(2, "Industry is required"),
  primary_involvement: z.string().min(2, "Primary involvement is required"),
  years_operating: z.string().min(1, "Years operating is required"),
  locations: z.string().min(2, "Locations are required"),
  team_size: z.enum(["1–10", "10–50", "50–200", "200+"], {
    message: "Please select a team size",
  }),
  multiple_businesses: z.enum(["YES", "NO"], {
    message: "Please select YES or NO",
  }),
  multiple_businesses_details: z.string().optional(),
  primary_business_to_scale: z
    .string()
    .min(10, "Please provide more details (min 10 characters)"),
  revenue_range: z.enum(
    ["₹1 Cr – ₹5 Cr", "₹5 Cr – ₹25 Cr", "₹25 Cr – ₹100 Cr", "₹100 Cr+"],
    {
      message: "Please select a revenue range",
    },
  ),
  business_stage: z.enum(
    [
      "Early Growth Stage",
      "Stable & Growing",
      "Scaling Aggressively",
      "Expansion / Multi-location Growth",
      "Operational Restructuring Phase",
    ],
    {
      message: "Please select a business stage",
    },
  ),
  areas_to_improve: z
    .array(z.string())
    .min(1, "Select at least one area to improve"),
  growth_blockers: z
    .string()
    .min(10, "Please provide more details (min 10 characters)"),
  expected_outcome: z
    .string()
    .min(10, "Please provide more details (min 10 characters)"),
  open_to_involvement: z.enum(["YES", "NO"], {
    message: "Please select YES or NO",
  }),
  expected_support: z
    .string()
    .min(10, "Please provide more details (min 10 characters)"),
  investment_range: z.enum(
    [
      "₹15 Lakhs – ₹25 Lakhs",
      "₹25 Lakhs – ₹50 Lakhs",
      "₹50 Lakhs+ depending on execution scope",
    ],
    {
      message: "Please select an investment range",
    },
  ),
});

type FormValues = z.infer<typeof formSchema>;

export default function BusinessAssessmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      company_name: "",
      industry: "",
      primary_involvement: "",
      years_operating: "",
      locations: "",
      team_size: undefined,
      multiple_businesses: undefined,
      multiple_businesses_details: "",
      primary_business_to_scale: "",
      revenue_range: undefined,
      business_stage: undefined,
      areas_to_improve: [],
      growth_blockers: "",
      expected_outcome: "",
      open_to_involvement: undefined,
      expected_support: "",
      investment_range: undefined,
    },
  });

  const multipleBusinesses = form.watch("multiple_businesses");

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitBusinessAssessment({
        ...values,
        multiple_businesses: values.multiple_businesses === "YES",
        open_to_involvement: values.open_to_involvement === "YES",
      });

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
                  Our team will review the details and connect with you for the
                  next stage of discussions.
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
              Business Strategic
              <span className="text-[#FE6168]"> Assessment</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg text-balance">
              Thank you for your interest in connecting with the 1in1 Million
              ecosystem. To understand your business better and explore possible
              strategic alignment, kindly share the following details.
            </p>
          </motion.div>

          <Card className="overflow-hidden border-none bg-white/5 shadow-2xl backdrop-blur-md">
            <CardContent className="">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Basic Details */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <Controller
                        name="full_name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="full_name">
                              Full Name
                            </FieldLabel>
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
                        name="company_name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="company_name">
                              Company Name
                            </FieldLabel>
                            <Input
                              {...field}
                              id="company_name"
                              aria-invalid={fieldState.invalid}
                              placeholder="Enter your company name"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        name="industry"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="industry">
                              Industry / Business Category
                            </FieldLabel>
                            <Input
                              {...field}
                              id="industry"
                              aria-invalid={fieldState.invalid}
                              placeholder="E.g. Manufacturing, SaaS, Retail"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        name="primary_involvement"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="primary_involvement">
                              Primary area of involvement
                            </FieldLabel>
                            <Input
                              {...field}
                              id="primary_involvement"
                              aria-invalid={fieldState.invalid}
                              placeholder="E.g. Operations, Sales, Vision"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        name="years_operating"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="years_operating">
                              Years of operation
                            </FieldLabel>
                            <Input
                              {...field}
                              id="years_operating"
                              aria-invalid={fieldState.invalid}
                              placeholder="How many years?"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        name="locations"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="locations">
                              Current Locations
                            </FieldLabel>
                            <Input
                              {...field}
                              id="locations"
                              aria-invalid={fieldState.invalid}
                              placeholder="Which locations do you operate in?"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </div>

                    <Controller
                      name="team_size"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Approximate team size
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
                          >
                            {["1–10", "10–50", "50–200", "200+"].map((size) => (
                              <div
                                key={size}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={size}
                                  id={`ts-${size}`}
                                />
                                <label
                                  htmlFor={`ts-${size}`}
                                  className="cursor-pointer text-sm leading-none font-medium"
                                >
                                  {size}
                                </label>
                              </div>
                            ))}
                          </RadioGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>

                  <div className="border-border/50 border-t" />

                  {/* Multiple Businesses */}
                  <div className="space-y-6">
                    <Controller
                      name="multiple_businesses"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Do you operate multiple businesses?
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="YES" id="mb-yes" />
                              <label
                                htmlFor="mb-yes"
                                className="cursor-pointer text-sm leading-none font-medium"
                              >
                                YES
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="NO" id="mb-no" />
                              <label
                                htmlFor="mb-no"
                                className="cursor-pointer text-sm leading-none font-medium"
                              >
                                NO
                              </label>
                            </div>
                          </RadioGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    {multipleBusinesses === "YES" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                      >
                        <Controller
                          control={form.control}
                          name="multiple_businesses_details"
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel>
                                If yes, kindly mention them.
                              </FieldLabel>
                              <Textarea
                                placeholder="List your other businesses..."
                                aria-invalid={fieldState.invalid}
                                {...field}
                              />
                            </Field>
                          )}
                        />
                      </motion.div>
                    )}

                    <Controller
                      control={form.control}
                      name="primary_business_to_scale"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Which business are you primarily looking to scale
                            currently, and what kind of transformation are you
                            expecting over the next 3–5 years?
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

                  <div className="border-border/50 border-t" />

                  {/* Revenue and Stage */}
                  <div className="space-y-8">
                    <Controller
                      name="revenue_range"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Approximate annual revenue range of your primary
                            business
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                          >
                            {[
                              "₹1 Cr – ₹5 Cr",
                              "₹5 Cr – ₹25 Cr",
                              "₹25 Cr – ₹100 Cr",
                              "₹100 Cr+",
                            ].map((range) => (
                              <div
                                key={range}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={range}
                                  id={`rev-${range}`}
                                />
                                <label
                                  htmlFor={`rev-${range}`}
                                  className="cursor-pointer text-sm leading-none font-medium"
                                >
                                  {range}
                                </label>
                              </div>
                            ))}
                          </RadioGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="business_stage"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Which stage best describes your business currently?
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                          >
                            {[
                              "Early Growth Stage",
                              "Stable & Growing",
                              "Scaling Aggressively",
                              "Expansion / Multi-location Growth",
                              "Operational Restructuring Phase",
                            ].map((stage) => (
                              <div
                                key={stage}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={stage}
                                  id={`stage-${stage}`}
                                />
                                <label
                                  htmlFor={`stage-${stage}`}
                                  className="cursor-pointer text-sm leading-none font-medium"
                                >
                                  {stage}
                                </label>
                              </div>
                            ))}
                          </RadioGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>

                  <div className="border-border/50 border-t" />

                  {/* Areas to improve & blockers */}
                  <div className="space-y-8">
                    <Controller
                      control={form.control}
                      name="areas_to_improve"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Which areas are you mainly looking to improve?
                          </FieldLabel>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {AREAS_TO_IMPROVE.map((area) => (
                              <label
                                key={area}
                                className="flex cursor-pointer items-start space-x-3"
                              >
                                <Checkbox
                                  className="mt-0.5"
                                  checked={field.value?.includes(area)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), area])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== area,
                                          ),
                                        );
                                  }}
                                />
                                <span className="text-sm leading-tight font-medium">
                                  {area}
                                </span>
                              </label>
                            ))}
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="growth_blockers"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            What do you believe is currently stopping the
                            business from reaching the next level?
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
                      name="expected_outcome"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            What major outcome are you expecting over the next
                            12–24 months?
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

                  <div className="border-border/50 border-t" />

                  {/* Support and Investment */}
                  <div className="space-y-8">
                    <Controller
                      name="open_to_involvement"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Are you open to strategic involvement, operational
                            improvements, process-level restructuring, and
                            external consulting support within the business if
                            required?
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6 pt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="YES" id="oi-yes" />
                              <label
                                htmlFor="oi-yes"
                                className="cursor-pointer text-sm leading-none font-medium"
                              >
                                YES
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="NO" id="oi-no" />
                              <label
                                htmlFor="oi-no"
                                className="cursor-pointer text-sm leading-none font-medium"
                              >
                                NO
                              </label>
                            </div>
                          </RadioGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="expected_support"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            What kind of support are you expecting from the 1in1
                            Million ecosystem, and why do you believe your
                            business requires it at this stage?
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
                      name="investment_range"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className="text-muted-foreground text-base leading-relaxed">
                            Which investment range are you comfortable with for
                            strategic business growth and execution support?
                          </FieldLabel>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 gap-3 pt-2"
                          >
                            {[
                              "₹15 Lakhs – ₹25 Lakhs",
                              "₹25 Lakhs – ₹50 Lakhs",
                              "₹50 Lakhs+ depending on execution scope",
                            ].map((range) => (
                              <div
                                key={range}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={range}
                                  id={`inv-${range}`}
                                />
                                <label
                                  htmlFor={`inv-${range}`}
                                  className="cursor-pointer text-sm leading-none font-medium"
                                >
                                  {range}
                                </label>
                              </div>
                            ))}
                          </RadioGroup>
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
                    <div className="relative z-10 flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 sm:px-8 sm:py-1.5 md:px-10 lg:px-12">
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
