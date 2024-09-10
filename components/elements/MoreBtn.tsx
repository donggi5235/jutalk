"use client";
import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const MoreBtn = (url : string) => {
  return (
    <>
      <Link href={url} className="">
        더보기<Plus />
      </Link>
    </>
  );
};

export default MoreBtn;
