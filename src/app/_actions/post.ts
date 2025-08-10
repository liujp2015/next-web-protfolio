import { PaginateOptions, PaginateReturn } from "@/lib/page/types";
import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { paginateTransform } from "@/lib/utils";

/**
 * 查询分页文章列表信息
 * @param options
 */
export const queryPostPaginate = async (
  options?: PaginateOptions
): Promise<PaginateReturn<Post>> => {
  const params = {
    orderBy: [
      { updatedAt: Prisma.SortOrder.desc },
      { createdAt: Prisma.SortOrder.desc },
    ],
    page: 1,
    limit: 8,
    ...options,
  };
  const data = await prisma.post.paginate(params);
  return paginateTransform(data);
};

export const queryPostById = async (id: string): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: { id },
  });
};
