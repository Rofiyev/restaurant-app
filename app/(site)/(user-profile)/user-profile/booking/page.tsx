"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { responsive } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import Carousel from "react-multi-carousel";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "@/actinos";
import { IMyBooking, IUserBooking } from "@/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";

const caruselImages: string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX0SscSWtU83bJbqpbkFjoSGSw6ivbDO67uzs9xR3fEGXE4z_RTGNi56GSHMjY95MeIE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAA5VpQErBxHVr6CdCNGO4ZdKpO4pxrY_4yvOHjCTPMsbEOYTWxgMwwUn_Df2W-MvzNk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLD340bw4kxklVJamlK62VZZ1pSTyblBntM2o6701fA&s",
];

export default function BookingPage() {
  const { data: res } = useQuery({
    queryKey: ["my_bookings"],
    queryFn: getBooking,
  });

  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <h3 className="text-[42px] font-semibold mt-0 md:mt-4 xl:mt-0">
        My bookings
      </h3>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {res?.data ? (
          res?.data.map((item: IUserBooking) => (
            <div
              key={item.id}
              className="flex flex-col xl:flex-row p-3 border-2 rounded-xl gap-3"
            >
              <div className="w-full xl:w-2/4">
                <Carousel
                  swipeable={false}
                  draggable={false}
                  responsive={responsive}
                  ssr
                  infinite
                  autoPlay
                  autoPlaySpeed={2000}
                  customTransition="all .5"
                  transitionDuration={1000}
                  showDots
                >
                  {item.restaurant.images.map((img: string, i: number) => (
                    <Image
                      key={i}
                      src={img}
                      alt="Fon 1"
                      width={300}
                      height={100}
                      className="!h-[200px] sm:!h-[300px] xl:!h-[200px] !w-full object-cover rounded-md"
                      loading="lazy"
                    />
                  ))}
                </Carousel>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <h3 className="text-current font-medium text-xl xl:text-xl mb-3 !line-clamp-1">
                  {item.restaurant.name}
                </h3>
                <p className="flex gap-2">
                  <MdOutlineLocalPhone className="text-xl" />
                  <a
                    href={`tel:${item.restaurant.name}`}
                    className="hover:underline"
                  >
                    {item.restaurant.phone}
                  </a>
                </p>
                <p className="flex gap-2">
                  <CiCalendarDate className="text-xl" />
                  <span className="">{item.date}</span>
                </p>
                <p className="flex gap-2">
                  <CiClock2 className="text-xl" />
                  <span className="">
                    {item.time.map((c: string) => (
                      <span key={c}>
                        {c.slice(0, 1).toUpperCase() + c.slice(1)},{" "}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex gap-2">
                  <GoDotFill className="text-xl !text-green-600" />
                  <span className="">{item.status}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex mt-2">
            <div className="flex items-center">
              <HiOutlineEmojiSad className="text-3xl" />
              <span className="text-2xl ">Booking Yo`q</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
