"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GoHome } from "react-icons/go";
import { FiMessageCircle, FiGrid, FiBell } from "react-icons/fi";

const Nav = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiGrid size={24} />,
        label: "취중톡톡",
        isActive: pathname === "/story",
        href: "/story",
      },
      {
        icon: <FiMessageCircle size={24} />,
        label: "자유게시판",
        isActive: pathname === "/free",
        href: "/free",
      },
      {
        icon: <FiBell size={24} />,
        label: "공지사항",
        isActive: pathname === "/notice",
        href: "/notice",
      },
    ];
  }, [pathname]);

  return (
    <nav className="w-full hidden items-center gap-6 text-sm font-medium md:flex">
      <section className="w-full flex flex-col gap-2 px-4">
        {routes.map((route) => {
          return (
            <Link
              key={route.label}
              href={route.href}
              className="transition-colors hover:text-primary"
            >
              <div
                className={cn(
                  "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </nav>
  );
};

export default Nav;
