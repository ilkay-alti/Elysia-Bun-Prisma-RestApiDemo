import { NotFoundError } from "elysia";
import prisma from "../../utils/db";

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "asc" },
    });
    return { posts, message: "Posts found successfully", status: 200 };
  } catch (e: unknown) {
    console.error("Error getting posts: ", e);
  }
}

export async function getPostById(id: number) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      throw new NotFoundError("Post not found");
    }
    return { post, message: "Post found successfully", status: 200 };
  } catch (e: unknown) {
    console.error("Error getting post by id: ", e);
  }
}

export async function updatePost(
  id: number,
  data: { title?: string; content?: string }
) {
  try {
    const { title, content } = data;
    const updateData = await prisma.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });
    return {
      message: "The post was updated successfully",
      status: 200,
      updateData,
    };
  } catch (e: unknown) {
    console.error("Error updating post by id: " + id, e);
  }
}

export async function deletePostById(id: number) {
  try {
    const deletePost = await prisma.post.delete({
      where: { id },
    });
    return {
      message: "The post was deleted successfully",
      status: 200,
      deletePost,
    };
  } catch (e: unknown) {
    console.error("Error deleting post by id: " + id, e);
  }
}

export async function createPost(data: { title: string; content: string }) {
  try {
    const { title, content } = data;
    const postCreate = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return {
      message: "The post was created successfully",
      status: 201,
      postCreate,
    };
  } catch (e: unknown) {
    console.error("Error creating post: ", e);
  }
}
