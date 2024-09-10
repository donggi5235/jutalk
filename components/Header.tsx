"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserRoundPen,Star,BookmarkCheck,LogOut } from 'lucide-react';
import Search from "@/components/Search";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <UserRoundPen size={20} />,
        label: "프로필",
        isActive: pathname === "/mypage/profile",
        href: "/mypage/profile",
      },
      {
        icon: <Star  size={20} />,
        label: "좋아요한 글",
        isActive: pathname === "/mypage/favorite",
        href: "/mypage/favorite",
      },
      {
        icon: <BookmarkCheck size={20} />,
        label: "나만의 술창고",
        isActive: pathname === "/mypage/save",
        href: "/mypage/save",
      },
    ];
  }, [pathname]);

  return (
    <header className="w-full h-[50px] bg-background">
      <div className="container flex w-full items-center justify-between">
        <div className="flex items-center justify-between gap-4 w-full ">
          <Search />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="cursor-pointer"
                />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-[16px]">마이페이지</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {routes.map((route) => {
                return (
                  <DropdownMenuItem key={route.label} href={route.href} className={cn(
                  "cursor-pointer flex flex-row items-center gap-3 hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}>
                    {route.icon}
                    <span className="text-[14px]">{route.label}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-[14px] flex flex-row items-center gap-3 hover:bg-neutral-700 rounded-lg p-2">
                <LogOut  size={20} />
                <span className="text-[14px]">로그아웃</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
