import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { Route } from "next";

const MoreBtn = <T extends string>({
  href
}:{
  href:Route<T> | URL;
}) => {
  return (
    <>
      <Link href={href} className="flex gap-1 items-center absolute right-0 top-0 border-[1px] p-2 rounded-md hover:bg-[var(--purple)] hover:text-white duration-300 text-[14px]">
        더보기<Plus size={14} />
      </Link>
    </>
  );
};

export default MoreBtn;
