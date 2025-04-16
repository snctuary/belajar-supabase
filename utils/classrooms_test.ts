import { createClassroom, searchClassrooms } from "./classrooms.ts";

Deno.test({
  name: "create classroom",
  async fn() {
    console.log(
      await createClassroom({ id: "0", name: "nori", homeroom_id: "0" }),
    );
  },
});

Deno.test({
  name: "search classrooms",
  async fn() {
    console.log(await searchClassrooms("le"));
  },
});
