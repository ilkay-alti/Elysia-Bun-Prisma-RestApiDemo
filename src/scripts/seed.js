const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const postsToCreate = [
  {
    id: 1,
    title: "Hello World",
    content: "This is the first post of the blog",
  },
  {
    id: 2,
    title: "Hello Prisma",
    content: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Hello Seed",
    content: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];

const seed = async (posts) => {
  for (let i = 0; i < posts.length; i++) {
    console.log(`Creating post: `, posts[i]);
    await client.post.upsert({
      where: { id: posts[i].id },
      update: posts[i],
      create: posts[i],
    });
  }
};

seed(postsToCreate)
  .then(() => {
    console.log("Created/Updated posts successfully");
  })
  .catch((error) => {
    console.error("Error creating/updating posts", error);
  })
  .finally(async () => {
    await client.$disconnect();
    console.log("Disconnected Prisma Client, exiting.");
  });
