"use clientu";

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
import { regions } from "@/constanta";
import { Search } from "lucide-react";
import Image from "next/image";
import { FC, ReactNode } from "react";
import bg from "../../../../assets/background.jpeg";

const HomeSection: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <section className="p-2 relative h-[90vh] rounded-xl">
      <Image
        src={bg.src}
        alt="Background"
        fill
        className="brightness-75 object-cover"
      />
      <div className="absolute -bottom-5 left-2/4 -translate-x-2/4 z-10">
        <div className="bg-white py-6 px-16 border-2 border-gray-200 rounded-xl flex gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select region</SelectLabel>
                {regions.map((item: string) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select district</SelectLabel>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value="district">
                    District {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant={"outline"}>
            <Search />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
