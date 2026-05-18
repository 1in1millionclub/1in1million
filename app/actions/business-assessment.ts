"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitBusinessAssessment(values: {
  full_name: string;
  company_name: string;
  industry: string;
  primary_involvement: string;
  years_operating: string;
  locations: string;
  team_size: string;
  multiple_businesses: boolean;
  multiple_businesses_details?: string;
  primary_business_to_scale: string;
  revenue_range: string;
  business_stage: string;
  areas_to_improve: string[];
  growth_blockers: string;
  expected_outcome: string;
  open_to_involvement: boolean;
  expected_support: string;
  investment_range: string;
}) {
  try {
    const { data, error } = await supabase
      .from("business_assessments")
      .insert([values])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/business-assessment-responses");
    return { success: true, data };
  } catch (error) {
    console.error("Server error:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
