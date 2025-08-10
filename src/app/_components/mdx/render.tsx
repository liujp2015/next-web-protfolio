// src/app/_components/mdx/render.tsx
// ...

import { FC } from "react";
import { MdxRenderProps } from "./types";
import { serializeMdx } from "./utils";
import { MdxHydrate } from "./hydrate";

/**
 * 动态mdx渲染组件
 * @param props
 */
export const MdxRender: FC<MdxRenderProps> = async (props) => {
  const { source, options, hydrate } = props;
  const result = await serializeMdx(source, options ?? {});
  return <MdxHydrate {...(hydrate ?? {})} serialized={result} />;
};
