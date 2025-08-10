import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const namesofli = ["Home", "About", "Skills", "Work", "Contact", "Blog"];
  return (
    <header className=" fixed z-50  bg-white w-full shadow-[0_1px_4px_rgba(146,161,176,0.15)] dark:bg-black">
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
                className="ml-[3rem]  relative after:absolute after:w-0 after:h-[0.18rem] after:left-0 after:top-[2rem] after:bg-[#3E6FF4] hover:after:w-full"
              >
                {name === "Blog" ? <Link href="/blog">Blog</Link> : name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[1.5rem] text-[#0D1730] cursor-pointer hidden max-md:block">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
