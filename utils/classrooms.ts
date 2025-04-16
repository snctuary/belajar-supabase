import { supabase } from "./supabase.ts";

interface Classroom {
  id: string;
  name: string;
  homeroom_id: string;
}

export async function createClassroom(classroom: Classroom) {
  const { data } = await supabase.from("classrooms").insert(classroom).select();
  return data;
}

export async function searchClassrooms(query: string) {
  const { data } = await supabase.from("classrooms").select().textSearch(
    "name",
    query,
  );
  return data;
}
