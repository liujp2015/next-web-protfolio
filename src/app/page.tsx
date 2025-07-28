"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false } // 禁用服务端渲染
);
// components/HoverTest.tsx
export function HoverTest() {
  return (
    <div className="p-8">
      {/* 测试1：基础 hover */}
      <div className="text-red-500 hover:text-blue-500 font-bold">
        Hover 我（应该变蓝）
      </div>

      {/* 测试2：带过渡动画 */}
      <button
        className="
        bg-green-500 hover:bg-red-500 
        text-white hover:text-black
        px-4 py-2 rounded-lg
        transition-colors duration-300
      "
      >
        Hover 时应变红底黑字
      </button>
    </div>
  );
}
export default function Home() {
  const namesofli = ["Home", "About", "Skills", "Work", "Contact", "Blog"];
  return (
    <>
      <header className=" fixed bg-white w-full shadow-[0_1px_4px_rgba(146,161,176,0.15)]">
        <nav className="h-[4.5rem] flex items-center justify-between font-[600] max-w-[1024px] mx-auto">
          <div>
            <a href="#" className="">
              <Image src="/logo1.png" alt="logo" width={100} height={100} />
            </a>
          </div>
          <div className=" max-md:hidden">
            <ul className="flex list-none">
              {namesofli.map((name, index) => (
                <li
                  key={index}
                  className="ml-[3rem]  relative after:absolute after:w-full after:h-[0.18rem] after:left-0 after:top-[2rem] after:bg-[#3E6FF4] hover:after:w-full"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-[1.5rem] text-[#0D1730] cursor-pointer hidden max-md:block">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
      <main>
        <section className=" relative max-w-[1024px] grid mx-auto pt-[10rem] pb-[2rem]">
          {/* <MotionDiv
            layout="position"
            initial={{ y: -60, opacity: 0 }} // 初始位置：上方 60px，透明度 0
            whileInView={{ y: 0, opacity: 1 }} // 进入视口时回到原位，透明度 1
            viewport={{ once: true }} // 只触发一次
            transition={{
              duration: 2, // 动画时长 2000ms
              delay: 0.2, // 延迟 200ms
              ease: "easeOut", // 缓动效果
            }}
          > */}
          <div className="self-center">
            <h1 className="text-[3.5rem] mb-[2.5rem] font-bold">
              Hi,
              <br /> I'am <span className="text-[#3E6FF4]">LiuJunpeng</span>
              <br /> Web Designer
            </h1>
            <a className=" inline-block py-[0.75rem] px-[2.5rem] bg-[#3E6FF4] text-[#FFF] rounded-[0.5rem] hover:shadow-[0_10px_36px_rgba(0, 0, 0, 0.15)] transition duration-300">
              Contact
            </a>
          </div>
          <div className="flex self-end gap-6 mt-16">
            <a className="text-[1.5rem] hover:text-[#3E6FF4]">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a className="text-[1.5rem] hover:text-[#3E6FF4]">
              <i className="bx bxl-behance"></i>
            </a>
            <a className="text-[1.5rem] hover:text-[#3E6FF4]">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div className="absolute right-0 bottom-0 w-[450px]">
            <svg
              className="fill-[#3E6FF4]"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image
                  className="w-[360px]"
                  x="50"
                  y="60"
                  href="assets/img/perfil.png"
                />
              </g>
            </svg>
          </div>
          {/* </MotionDiv> */}
        </section>

        <section className="pt-[3rem] pb-[2rem]">
          <h2
            className="text-center text-[2rem] font-bold text-[#3E6FF4] relative mb-[3rem]
          after:text-center after:absolute after:w-[64px] after:h-[0.18rem] after:bg-[#3E6FF4] after:left-0 after:right-0 after:top-[4rem] after:m-auto"
          >
            About
          </h2>
          <div className="grid max-w-[1024px] mx-auto grid-cols-2 items-center text-left">
            <div>
              <Image src={"/logo1.png"} width={300} height={300} alt="logo1" />
            </div>
            <div>
              <h2 className="text-[2.5rem] font-bold mb-[1rem]">
                I'm LiuJunpneg
              </h2>
              <p className="text-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                ut voluptates soluta, aut earum nemo recusandae cumque
                perferendis! Recusandae alias accusamus atque.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-[3rem] pb-[2rem]">
          <h2
            className="text-center text-[2rem] font-bold text-[#3E6FF4] relative mb-[3rem] 
          after:text-center after:absolute after:w-[64px] after:h-[0.18rem] after:bg-[#3E6FF4] after:left-0 after:right-0 after:top-[4rem] after:m-auto"
          >
            Skills
          </h2>
          <div className="grid max-w-[1024px] mx-auto grid-cols-2 items-center text-left">
            <div>
              <h2 className="text-[2.5rem] font-bold mb-[1rem]">
                Profesional Skills
              </h2>
              <p className="text-[20px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                optio id vero amet, alias architecto consectetur error eum eaque
                sit.
              </p>
              <div className="flex justify-between items-center relative py-[0.5rem] px-[1rem] rounded-[0.5rem] shadow-[0_4px_25px_#F6F7F7] mb-[2rem]">
                <div className="flex items-center">
                  <i className="bx bxl-html5 text-[2rem] mr-[1rem] text-[#3E6FF4]"></i>
                  <span>HTML</span>
                </div>

                <div className=" absolute left-0 bottom-0 h-[0.25rem] bg-[#3E6FF4] w-[100%]"></div>
                <div>
                  <span>100%</span>
                </div>
              </div>
              <div className="flex justify-between items-center relative py-[0.5rem] px-[1rem] rounded-[0.5rem] shadow-[0_4px_25px_#F6F7F7] mb-[2rem]">
                <div className="flex items-center">
                  <i className="bx bxl-html5 text-[2rem] mr-[1rem] text-[#3E6FF4]"></i>
                  <span>HTML</span>
                </div>

                <div className=" absolute left-0 bottom-0 h-[0.25rem] bg-[#3E6FF4] w-[100%]"></div>
                <div>
                  <span>100%</span>
                </div>
              </div>
              <div className="flex justify-between items-center relative py-[0.5rem] px-[1rem] rounded-[0.5rem] shadow-[0_4px_25px_#F6F7F7] mb-[2rem]">
                <div className="flex items-center">
                  <i className="bx bxl-html5 text-[2rem] mr-[1rem] text-[#3E6FF4]"></i>
                  <span>HTML</span>
                </div>

                <div className=" absolute left-0 bottom-0 h-[0.25rem] bg-[#3E6FF4] w-[100%]"></div>
                <div>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" rounded-[0.5rem]"
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
        </section>
        <section className="pt-[3rem] pb-[2rem]">
          <h2
            className="text-center text-[2rem] font-bold text-[#3E6FF4] relative mb-[3rem]
          after:text-center after:absolute after:w-[64px] after:h-[0.18rem] after:bg-[#3E6FF4] after:left-0 after:right-0 after:top-[4rem] after:m-auto"
          >
            Work
          </h2>
          <div className="grid max-w-[1024px] mx-auto grid-cols-3">
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
            <a className=" border rounded-[0.5rem] overflow-hidden">
              <Image
                src={"/logo1.png"}
                alt="image"
                className=" hover:scale-110 transition-all duration-1000 ease-in-out"
                width={500}
                height={500}
              ></Image>
            </a>
          </div>
        </section>
        <section className="pt-[3rem] pb-[2rem]">
          <h2
            className="text-center text-[2rem] font-bold text-[#3E6FF4] relative mb-[3rem]
          after:text-center after:absolute after:w-[64px] after:h-[0.18rem] after:bg-[#3E6FF4] after:left-0 after:right-0 after:top-[4rem] after:m-auto"
          >
            Contact
          </h2>
          <div>
            <Input></Input>
          </div>
        </section>
      </main>
    </>
  );
}
