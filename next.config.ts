import createMDX from "@next/mdx";
import rehypePrismPlus from "rehype-prism-plus";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  serverExternalPackages: ["next-mdx-remote", "rehype-prism-plus"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [
        rehypePrismPlus,
        {
          ignoreMissing: true,
          showLineNumbers: true,
          dynamicImport: true, // 自动按需加载语言
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
