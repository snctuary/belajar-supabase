import { supabase } from "./utils/supabase.ts";

const newUser = await supabase.from("users").insert({
  id: Math.floor(Date.now()).toString(),
  username: "ikan",
}).select();
console.log(newUser);

const result = await supabase.from("users").select("username").ilike(
  "username",
  "%i%",
);
console.log(result);
