import { supabase } from "./utils/supabase.ts";

const newUser = await supabase.from("users").insert({
  id: Math.floor(Date.now()).toString(),
  username: "snctu4ry",
}).select();
console.log(newUser);
