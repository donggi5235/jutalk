"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const BoardListCard = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="">
          {list?.map((idx) => (
            <CarouselItem
              key={idx}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <div className="flex w-full">
                <Card className="w-full relative border-[#666] hover:border-[var(--purple)] duration-200 group">
                  <CardContent className="flex flex-col justify-center p-6">
                    <div className="w-full aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src="/upload/w.jpg"
                        alt="thumbnail"
                        fill={true}
                        className="object-cover group-hover:scale-110 duration-200"
                      />
                    </div>
                    <div className="py-2 w-full flex justify-between items-center relative z-1">
                      <span className="text-[var(--purple)]">나만의술집</span>
                      <div className="flex gap-1">
                        <Button className="px-2 py-1 bg-transparent text-white flex gap-1 hover:bg-transparent">
                          <Heart size={20} />1
                        </Button>
                        <Button className="px-2 py-1 bg-transparent text-white flex gap-1 hover:bg-transparent">
                          <MessageSquare size={20} />2
                        </Button>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-[18px] duration-200 group-hover:text-[var(--purple)] ellipsis-3">
                        맛있는 수제 맥주: 서울 브루어리 맛있는 수제 맥주: 서울
                        브루어리 맛있는 수제 맥주: 서울 브루어리 맛있는 수제 맥주:
                        서울 브루어리
                      </p>
                      <p className="pt-2 text-[14px] font-bold">작성자</p>
                    </div>
                  </CardContent>
                  <Link
                    href=""
                    className="absolute left-0 top-0 w-full h-full"
                  ></Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default BoardListCard;
