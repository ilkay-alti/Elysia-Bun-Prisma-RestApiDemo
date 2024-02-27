import { t } from "elysia";
export const GetPostsValidationSchema = t.Object({
  id: t.Numeric({
    minimum: 1,
  }),
});

export type TGetPostsValidationSchema = typeof GetPostsValidationSchema;

export const CreatePostValidationSchema = t.Object({
  title: t.String({
    minLength: 5,
    maxLength: 100,
  }),
  content: t.String({
    minLength: 5,
    maxLength: 1000,
  }),
});

export type TCreatePostValidationSchema = typeof CreatePostValidationSchema;

export const UpdatePostValidationSchema = t.Object({
  id: t.Numeric({
    minimum: 1,
  }),
  title: t.String({
    minLength: 5,
    maxLength: 100,
  }),
  content: t.String({
    minLength: 5,
    maxLength: 1000,
  }),
});

export type TUpdatePostValidationSchema = typeof UpdatePostValidationSchema;

export const DeletePostByIdValidationSchema = t.Object({
  id: t.Numeric({
    minimum: 1,
  }),
});

export type TDeletePostByIdValidationSchema =
  typeof DeletePostByIdValidationSchema;
