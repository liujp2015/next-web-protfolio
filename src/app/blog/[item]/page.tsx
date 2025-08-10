import { queryPostPaginate } from "@/app/_actions/post";
import Image from "next/image";
import React from "react";

export default async function blog({ params }: { params: { item: string } }) {
  const { item } = await params;
  console.log(item);
  const data = await queryPostPaginate();
  console.log(data);
  return (
    <div className="flex flex-auto flex-col mt-20 items-center">
      <div className=" max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] flex-auto mb-5  w-full rounded-md flex flex-col bg-white/80">
        <div className="relative w-full h-36 md:h-48 lg:h-64">
          <Image
            alt="img"
            src={"/logo1.png"}
            className=" rounded-tl-md rounded-tr-md opacity-60"
            priority
            unoptimized
            sizes="100%"
            fill
          ></Image>
        </div>
        <div className="flex flex-col p-3">
          <header className="my-2">
            <h1>我是标题</h1>
          </header>
          <div className="flex items-center my-2">
            <span>图标</span>
            <time className="ml-2">ellips</time>
          </div>
          <div className="">body</div>
        </div>
      </div>
    </div>
  );
}
