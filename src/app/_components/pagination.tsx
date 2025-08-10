"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PaginationDemo({ totalPages, currentPage }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const getPageUrl = (value: number) => {
    const params = new URLSearchParams(searchParams);
    value <= 1 ? params.delete("page") : params.set("page", value.toString());

    return pathname + (params.toString() ? `?${params.toString()}` : "");
  };
  // useEffect(() => {
  //   // 在当前页面小于等于1时，删除URL中的页面查询参数
  //   const params = new URLSearchParams(searchParams);
  //   if (currentPage <= 1) params.delete("page");
  //   router.replace(
  //     pathname + (params.toString() ? `?${params.toString()}` : "")
  //   );
  // }, [currentPage]);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getPageUrl(currentPage - 1)}
            text="上一页"
          />
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext href={getPageUrl(currentPage + 1)} text="下一页" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
