"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitAssessment(values: {
  full_name: string;
  email: string;
  q1_money_usage: string;
  q2_success_meaning: string;
  q3_journey_changes: string;
}) {
  try {
    const { data, error } = await supabase
      .from("admission_assessments")
      .insert([values])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/assessment-responses");
    return { success: true, data };
  } catch (error) {
    console.error("Server error:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
