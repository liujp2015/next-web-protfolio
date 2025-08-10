// src/libs/broswer.ts
"use client";

import { useEffect, useState } from "react";

/**
 * 监听滚动条位置
 * 函数的作用是 传入一个阈值，当滚动条位置超过阈值时，返回 true，否则返回 false。
 */
export function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
