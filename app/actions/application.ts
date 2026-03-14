"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitApplication(values: {
  name: string;
  email: string;
  age: number;
  phone_number: string;
  location: string;
  expectations: string;
  plan: string;
}) {
  try {
    const { data, error } = await supabase
      .from("applications")
      .insert([values])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/admin/applications");
    return { success: true, data };
  } catch (error) {
    console.error("Server error:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
