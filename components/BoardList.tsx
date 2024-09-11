import React from "react";
import BoardListCard from "@/components/BoardListCard";
import MoreBtn from "@/components/elements/MoreBtn";

const BoardList = () => {
  return (
    <div className="py-[50px]">
      <div className="relative">
        <h2 className="text-[36px] pb-4">인생술집, 즐거운 술 한잔 이야기</h2>
        <MoreBtn href="/story" />
      </div>
      <BoardListCard />
    </div>
  );
};

export default BoardList;
