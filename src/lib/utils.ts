import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
// 添加缺失的导入
import { Faker, zh_CN, en, base } from "@faker-js/faker";
import { PaginationResult } from "prisma-paginate";
import { PaginateReturn } from "./page/types";
import { omit } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
 * 深度合并对象
 * @param x 初始值
 * @param y 新值
 * @param arrayMode 对于数组采取的策略,`replace`为直接替换,`merge`为合并数组
 */
export const deepMerge = <T1, T2>(
  x: Partial<T1>,
  y: Partial<T2>,
  arrayMode: "replace" | "merge" = "merge"
) => {
  const options: deepmerge.Options = {};
  if (arrayMode === "replace") {
    options.arrayMerge = (_d, s, _o) => s;
  } else if (arrayMode === "merge") {
    options.arrayMerge = (_d, s, _o) => Array.from(new Set([..._d, ...s]));
  }
  return deepmerge(x, y, options) as T2 extends T1 ? T1 : T1 & T2;
};

export const faker = new Faker({
  locale: [zh_CN, en, base],
});

export const paginateTransform = <M, R extends PaginationResult<M[]>>(
  data: R
): PaginateReturn<M> => {
  const { result } = data;
  return {
    items: result,
    meta: {
      itemCount: result.length,
      totalItems: data.count,
      perPage: data.limit,
      totalPages: data.totalPages,
      currentPage: data.page,
      ...omit(data, ["result", "count", "limit", "page", "totalPages"]),
    },
  };
};
