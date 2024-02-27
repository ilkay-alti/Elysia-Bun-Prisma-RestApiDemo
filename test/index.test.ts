import { describe, expect, it } from "bun:test";
import "../src/index";
import axios from "axios";

const endPoint = "http://localhost:3000";

describe("GET /api/posts", () => {
  it("should return 200", async () => {
    const response = await axios.get(`${endPoint}/api/posts`);

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Posts found successfully");
  });
});

describe("POST /api/posts", () => {
  it("Should create a new post ", async () => {
    const { status, data } = await axios.post(`${endPoint}/api/posts`, {
      title: "New Post",
      content: "This is a new post",
    });

    expect(status).toBe(200);
    expect(data.message).toBe("The post was created successfully");
  });
});

describe("GET /api/posts/:id", () => {
  it("should found id post", async () => {
    const response = await axios.get(`${endPoint}/api/posts/49`);

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Post found successfully");
  });
});

describe("PUT /api/posts/:id", () => {
  it("should update a post", async () => {
    const response = await axios.put(`${endPoint}/api/posts/49`, {
      title: "Update Post",
      content: "This is an updated post",
    });

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("The post was updated successfully");
  });
});

describe("DELETE /api/posts/:id", () => {
  it("should delete a post", async () => {
    const response = await axios.delete(`${endPoint}/api/posts/49`);

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("The post was deleted successfully");
  });
});
