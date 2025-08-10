//src/app/_components/mdx/options/serialize.ts
import type { MDXRemoteProps } from "next-mdx-remote-client/rsc";

import rehypePrism from "rehype-prism-plus";
/**
 * 默认mdx配置
 */
export const defaultMdxSerializeOptions: Omit<MDXRemoteProps, "source"> = {
  options: {
    disableImports: true,
    parseFrontmatter: true,
    vfileDataIntoScope: "toc",
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        [rehypePrism, { showLineNumbers: true, ignoreMissing: true }],
      ],
    },
  },
};
