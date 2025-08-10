"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from "react";
import { PostActionFormRef } from "./types";

export default function PageForm({ post }) {
  const ref = useRef<PostActionFormRef | null>(null);
  const [pedding, setPedding] = useState<boolean>(false);
  const changePadding = useCallback((value: boolean) => {
    setPedding(value);
  }, []);
  const savePost: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    ref.current?.save && (await ref.current?.save());
  };

  return (
    <>
      <div className=" flex  justify-between">
        <button>asd123</button>
      </div>
    </>
  );
}
