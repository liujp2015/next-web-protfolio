/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // ShadCN 必需
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js 13+ 需要
  ],
  // v3 必须显式声明 hover 变体
  variants: {
    extend: {
      textColor: ["hover", "focus"],
      backgroundColor: ["hover", "focus"],
    },
  },
  corePlugins: {
    preflight: false, // 禁用默认样式（避免与 ShadCN 冲突）
  },
};
