import { PrismaClient } from "@prisma/client";
import paginateExt from "prisma-paginate";

// 分步初始化：日志 -> 扩展
const basePrisma = new PrismaClient({
  log: [{ level: "query", emit: "stdout" }],
});

const prisma = basePrisma.$extends(paginateExt);
prisma.$extends({
  query: {
    async $allOperations({ operation, model, args, query }) {
      // 打印操作信息（包含完整参数）
      console.log("Operation:", { model, operation, args });

      // 执行查询
      const result = await query(args);

      return result;
    },
  },
});
export { prisma };
