"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoDotFill } from "react-icons/go";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getMyBooking } from "@/actinos";

export default function AdminBooking() {
  const { data: res } = useQuery({
    queryKey: ["get_booking"],
    queryFn: getMyBooking,
  });

  console.log(res?.data);

  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <h3 className="text-3xl sm:text-[42px] font-semibold mb-2 sm:mb-0 md:mt-4 xl:mt-0">
        Orders List
      </h3>

      <div className="flex justify-end mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Change Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accepted">
              <div className="flex items-center gap-1 !justify-start">
                <GoDotFill className="text-green-600 text-xl" />
                <span>Accepted</span>
              </div>
            </SelectItem>
            <SelectItem value="pending">
              <div className="flex items-center gap-1 !justify-start">
                <GoDotFill className="text-blue-600 text-xl" />
                <span>Pending</span>
              </div>
            </SelectItem>
            <SelectItem value="canceled">
              <div className="flex items-center gap-1 !justify-start">
                <GoDotFill className="text-red-600 text-xl" />
                <span>Canceled</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full bg-current_bg_color p-4 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Recent Purchases</h3>
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead>
                <AiOutlineFieldNumber className="text-2xl" />
              </TableHead>
              <TableHead className="w-[200px]">Restaurant</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Number</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell className="font-medium">Yakkasaroy</TableCell>
                <TableCell className="font-medium !text-nowrap">
                  Dec 1, 2023
                </TableCell>
                <TableCell className="font-medium">Morning</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="!w-[28px] !h-[28px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Artur</span>
                  </div>
                </TableCell>
                <TableCell>+998994485713</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 !justify-start">
                    <GoDotFill className="text-green-600 text-xl" />
                    <span>Accepted</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>

      <div className="mt-6 flex justify-center mb-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="cursor-pointer" />
            </PaginationItem>
            {[...Array(3)].map((_, i: number) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  className={cn(
                    i + 1 === 1 &&
                      "bg-current text-white hover:bg-current/90 hover:text-white transition-colors"
                  )}
                  href="#"
                  isActive={i + 1 === 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="cursor-pointer" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
