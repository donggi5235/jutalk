"use client";
import React from "react";
import BoardListCard from "@/components/BoardListCard";
import MoreBtn from "@/components/elements/MoreBtn";

const BoardList = () => {
  return (
    <div className="">
      <div className="">
        <h2>인생술집, 즐거운 술 한잔 이야기</h2>
        <MoreBtn url="/story" />
      </div>
      <BoardListCard/>
    </div>
  );
};

export default BoardList;
