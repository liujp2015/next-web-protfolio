import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { defaultMdxSerializeOptions } from "./default-options";
import { FC } from "react";
import { deepMerge } from "@/lib/utils";

/**
 * 动态mdx渲染组件
 */
export const MdxRender: FC<MDXRemoteProps> = async (props) => {
  return (
    <MDXRemote
      {...(deepMerge(
        defaultMdxSerializeOptions,
        props,
        "merge"
      ) as MDXRemoteProps)}
    />
  );
};
