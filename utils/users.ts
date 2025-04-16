import { supabase } from "./supabase.ts";

interface User {
  id: string;
  username: string;
  avatarUrl?: string;
}

export async function createUser(user: User) {
  const { data } = await supabase.from("users").insert(user).select();
  return data;
}

export async function searchUsers(username: string) {
  const { data } = await supabase.from("users").select().ilike(
    "username",
    `%${username}%`,
  );
  return data;
}
