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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash } from "lucide-react";

export default function AdminRestaurant() {
  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <div className="flex justify-between items-center mb-4 mt-0 md:mt-4 ">
        <h3 className="text-3xl sm:text-[42px] font-semibold xl:mt-0">
          Restaurant List
        </h3>
        <Button variant={"outline"}>
          <Plus className="sm:mr-2 h-4 w-4" />{" "}
          <span className="hidden sm:block">Add Restaurant</span>
        </Button>
      </div>

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
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(10)].map((_, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell className="font-medium">Yakkasaroy</TableCell>
                <TableCell className="font-medium">3000$</TableCell>
                <TableCell className="font-medium">400</TableCell>
                <TableCell className="!min-w-52">
                  Abdullah Kakhara Street 40, Tashkent.
                </TableCell>
                <TableCell>+998994485713</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 !justify-start">
                    <Edit className="text-gray-700" />
                    <Trash className="text-red-600 cursor-pointer" />
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
