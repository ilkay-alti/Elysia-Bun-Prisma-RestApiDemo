import { Elysia, t } from "elysia";
import {
  createPost,
  deletePostById,
  getPostById,
  getPosts,
  updatePost,
} from "./handlers";

const postsRoutes = new Elysia({
  prefix: "/posts",
})
  .get("/", () => getPosts())
  .get("/:id", ({ params: { id } }) => getPostById(id), {
    params: t.Object({
      id: t.Numeric({
        minimum: 1,
      }),
    }),
  })
  .post("/", ({ body }) => createPost(body), {
    body: t.Object({
      title: t.String({
        minLength: 3,
      }),
      content: t.String({
        minLength: 3,
      }),
    }),
  })
  .put("/:id", ({ params: { id }, body }) => updatePost(id, body), {
    params: t.Object({
      id: t.Numeric({
        minimum: 1,
      }),
    }),
    body: t.Object({
      title: t.String({
        minLength: 3,
      }),
      content: t.String({
        minLength: 3,
      }),
    }),
  })
  .delete("/:id", ({ params: { id } }) => deletePostById(id), {
    params: t.Object({
      id: t.Numeric({
        minimum: 1,
      }),
    }),
  });
export default postsRoutes;
