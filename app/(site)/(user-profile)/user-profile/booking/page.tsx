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
import { getMyBooking } from "@/actinos";
import { IMyBooking } from "@/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineFieldNumber } from "react-icons/ai";

const caruselImages: string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX0SscSWtU83bJbqpbkFjoSGSw6ivbDO67uzs9xR3fEGXE4z_RTGNi56GSHMjY95MeIE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAA5VpQErBxHVr6CdCNGO4ZdKpO4pxrY_4yvOHjCTPMsbEOYTWxgMwwUn_Df2W-MvzNk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLD340bw4kxklVJamlK62VZZ1pSTyblBntM2o6701fA&s",
];

export default function BookingPage() {
  const { data: res, isPending } = useQuery({
    queryKey: ["my_bookings"],
    queryFn: getMyBooking,
  });

  console.log(res?.data);

  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <h3 className="text-[42px] font-semibold mt-0 md:mt-4 xl:mt-0">
        My bookings
      </h3>

      {/* <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"> */}
      {res?.data && (
        <div className="w-full bg-current_bg_color p-4 rounded-xl">
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <AiOutlineFieldNumber className="text-2xl" />
                </TableHead>
                <TableHead className="w-[200px]">Restaurant Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Size People</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Phone Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {res?.data.map((item: IMyBooking, i: number) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="font-medium text-nowrap">
                    {item.price / 1_000_000} mln
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.size_people}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {item.address.region} {item.address.mahalla}{" "}
                    {item.address.street} {item.address.house}.
                  </TableCell>
                  <TableCell>{item.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
    // </div>
  );
}

{
  /* {res?.data &&
      res?.data.map((item: IMyBooking) => (
        // <div
        //   key={item.id}
        //   className="flex flex-col xl:flex-row p-3 border-2 rounded-xl gap-3"
        // >
        //   <div className="w-full xl:w-2/4">
        //     <Carousel
        //       swipeable={false}
        //       draggable={false}
        //       responsive={responsive}
        //       ssr
        //       infinite
        //       autoPlay
        //       autoPlaySpeed={2000}
        //       customTransition="all .5"
        //       transitionDuration={1000}
        //       showDots
        //     >
        //       {caruselImages.map((img: string, i: number) => (
        //         <Image
        //           key={i}
        //           src={img}
        //           alt="Fon 1"
        //           width={300}
        //           height={100}
        //           className="!h-[200px] sm:!h-[300px] xl:!h-[200px] !w-full object-cover rounded-md"
        //           loading="lazy"
        //         />
        //       ))}
        //     </Carousel>
        //   </div>
        //   <div className="flex flex-col gap-3 pt-4">
        //     <h3 className="text-current font-medium text-xl xl:text-xl mb-3 !line-clamp-1">
        //       {item.name}
        //     </h3>
        //     <p className="flex gap-2">
        //       <MdOutlineLocalPhone className="text-xl" />
        //       <a href={`tel:${item.phone}`} className="hover:underline">
        //         {item.phone}
        //       </a>
        //     </p>
        //     <p className="flex gap-2">
        //       <CiCalendarDate className="text-xl" />
        //       <span className="">Mart 2nd, 2024</span>
        //     </p>
        //     <p className="flex gap-2">
        //       <CiClock2 className="text-xl" />
        //       <span className="">Morning / 6:00-10:00</span>
        //     </p>
        //     <p className="flex gap-2">
        //       <GoDotFill className="text-xl !text-green-600" />
        //       <span className="">Accepted</span>
        //     </p>
        //   </div>
        // </div>
      ))} */
}
