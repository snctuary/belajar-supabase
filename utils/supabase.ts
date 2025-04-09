import { createClient } from "@supabase/supabase-js";
import { envOrThrow } from "@dudasaus/env-or-throw";
import { Database } from "./supabase_types.ts";

export const supabase = createClient<Database>(
  envOrThrow("SUPABASE_URL"),
  envOrThrow("SUPABASE_KEY"),
);
