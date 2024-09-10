"use client";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Search = () => {
  return (
    <div className="flex gap-2 items-center h-[50px]">
      <div className="relative w-[500px] h-full">
        <SearchIcon className="absolute left-3 bottom-1/2 translate-y-1/2 h-6 w-6 text-muted-foreground" />
        <Input
          type="search"
          placeholder="검색어를 입력하세요"
          className="w-full rounded-md bg-muted pl-10 pr-4 h-full focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <Button className="h-full p-4 bg-neutral-800 text-white hover:bg-neutral-700">
        검색
      </Button>
    </div>
  );
};

export default Search;
