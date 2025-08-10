import { getRandomInt } from "../../src/lib/random";
import { prisma } from "../client";
import { faker } from "../../src/lib/utils";

export const createPostData = async () => {
  // 添加 async
  try {
    const post = await prisma.post.create({
      // 添加 await
      select: { id: true },
      data: {
        thumb: `/uploads/thumb/post-${getRandomInt(1, 8)}.png`,
        title: faker.lorem.paragraph({ min: 1, max: 3 }),
        body: faker.lorem.paragraphs(getRandomInt(3, 6), "\n"),
        summary: Math.random() < 0.5 ? faker.lorem.text() : undefined,
      },
    });
    console.log("创建成功:", post.id); // 更详细的日志
    return post;
  } catch (error) {
    console.error("创建失败:", error);
  }
};

// // 实际调用函数（必须添加这部分！）
// (async () => {
//   await createPostData();
//   await prisma.$disconnect(); // 关闭 Prisma 连接
// })();
