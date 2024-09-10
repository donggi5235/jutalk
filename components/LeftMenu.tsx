"use client";
import Link from "next/link";
import Logo from "@/components/elements/Logo";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const LeftMenu = () => {
  return (
    <div className="w-[240px] h-[100vh] bg-background border-r-[1px] border-neutral-600">
      <div className="flex flex-col w-full items-center justify-between">
        <div className="flex gap-2 items-center w-full h-[100px] px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Nav />
            </SheetContent>
          </Sheet>
          <Link href="#" className="flex h-[60px] items-center gap-2">
            <Logo />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default LeftMenu;
