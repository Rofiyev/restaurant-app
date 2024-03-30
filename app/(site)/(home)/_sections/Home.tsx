"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { regions } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useDrawer } from "@/hooks/use-drawer";

const HomeSection = () => {
  const { onClose } = useDrawer();

  useLayoutEffect(() => {
    onClose();
  }, []);

  return (
    <section className="p-2 relative h-[70vh] xl:h-[90vh]">
      <div className="absolute inset-0 !h-full !w-full overflow-hidden rounded-xl bg-gray-500">
        <video
          src="/video-fon.mp4"
          muted
          autoPlay
          loop
          className="object-cover !h-full !w-full aspect-auto xl:aspect-video"
        ></video>
      </div>
      <div className="absolute -bottom-5 left-2/4 -translate-x-2/4 z-10">
        <div className="bg-white py-2 px-4 sm:py-6 sm:px-16 border-2 border-gray-200 rounded-xl flex flex-row gap-2 md:gap-6">
          <Select>
            <SelectTrigger className="w-[140px] sm:w-[180px] md:w-[240px]">
              <SelectValue placeholder="Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select region</SelectLabel>
                {regions.map((item: string, i: number) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[140px] sm:w-[180px] md:w-[240px]">
              <SelectValue placeholder="Districts" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select district</SelectLabel>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value="district">
                    District {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant={"outline"} className="!p-2 md:p-4">
            <Search />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
