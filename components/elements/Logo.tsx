"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/"); // home 이동 하는 로직
  };
  return (
    <div className="flex flex-row items-center gap-3 ">
      <h1 className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/img/logo.svg"} width={100} height={30} alt="logo" />
      </h1>
    </div>
  );
};

export default Logo;
