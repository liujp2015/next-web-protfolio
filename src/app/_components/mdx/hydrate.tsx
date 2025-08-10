// src/app/_components/mdx/hydrate.tsx
"use client";

// ...
import type { HydrateProps } from "next-mdx-remote-client";
import { hydrate } from "next-mdx-remote-client";

import $styles from "./hydrate.module.css";
import { MdxHydrateProps } from "./types";
import { FC, JSX, useMemo, useState } from "react";
import { deepMerge } from "@/lib/utils";
import { defaultMdxHydrateOptions } from "./options/hydrate";
import { useDeepCompareEffect, useMount } from "react-use";
import { isNil } from "lodash";
import "./styles/index.css";

export const MdxHydrate: FC<MdxHydrateProps> = (props) => {
  const { serialized, ...rest } = props;
  const [content, setContent] = useState<JSX.Element | null>(null);
  const options = useMemo(
    () => deepMerge(defaultMdxHydrateOptions, rest, "merge"),
    [rest]
  );
  useDeepCompareEffect(() => {
    const { content, error } = hydrate({
      ...serialized,
      ...options,
    } as HydrateProps);
    if (!error && !isNil(content)) setContent(content);
  }, [serialized, options]);
  if (isNil(serialized) || "error" in serialized) return null;
  return (
    !isNil(content) && (
      <div className={$styles.container}>
        <div className={$styles.article}>{content}</div>
      </div>
    )
  );
};
