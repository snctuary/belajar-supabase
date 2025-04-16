import { createUser, searchUsers } from "./users.ts";

Deno.test({
  name: "create user",
  async fn() {
    console.log(await createUser({ id: "4", username: "iwak" }));
  },
});

Deno.test({
  name: "search users by username",
  async fn() {
    console.log(await searchUsers("i"));
  },
});
