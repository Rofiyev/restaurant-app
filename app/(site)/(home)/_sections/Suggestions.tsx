"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cn } from "@/lib/utils";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SuggestionsSection = () => {
  const router = useRouter();

  return (
    <section className="mb-8 mt-16">
      <h3 className="text-5xl font-semibold mb-8">Wedding places</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, i: number) => (
          // <Link key={i + 1} href={`room/${i + 1}`}>
          <Card
            key={i}
            className="w-full overflow-hidden border-none shadow-none"
          >
            <CardContent className="flex flex-col gap-3 !p-0">
              <div className="flex gap-4">
                <div className="relative w-3/4">
                  <Image
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmun0tJ3cbmjve3nMdum2qpYszhtxyxtl5WmvkyE97Zg&s"
                    }
                    fill
                    alt={`Image${i + 1}`}
                    className="inset-0 object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-3 items-stretch">
                  <div className="w-[200px] h-36 !overflow-hidden">
                    <Carousel
                      swipeable={false}
                      draggable={false}
                      responsive={responsive}
                      ssr={true}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={2000}
                      customTransition="all .5"
                      transitionDuration={1000}
                    >
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLD340bw4kxklVJamlK62VZZ1pSTyblBntM2o6701fA&s"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX0SscSWtU83bJbqpbkFjoSGSw6ivbDO67uzs9xR3fEGXE4z_RTGNi56GSHMjY95MeIE&usqp=CAU"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAA5VpQErBxHVr6CdCNGO4ZdKpO4pxrY_4yvOHjCTPMsbEOYTWxgMwwUn_Df2W-MvzNk&usqp=CAU"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                    </Carousel>
                  </div>

                  <div className="w-[200px] h-36 !overflow-hidden">
                    <Carousel
                      swipeable={false}
                      draggable={false}
                      responsive={responsive}
                      ssr={true}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={2000}
                      customTransition="all .5"
                      transitionDuration={1000}
                    >
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLD340bw4kxklVJamlK62VZZ1pSTyblBntM2o6701fA&s"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX0SscSWtU83bJbqpbkFjoSGSw6ivbDO67uzs9xR3fEGXE4z_RTGNi56GSHMjY95MeIE&usqp=CAU"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAA5VpQErBxHVr6CdCNGO4ZdKpO4pxrY_4yvOHjCTPMsbEOYTWxgMwwUn_Df2W-MvzNk&usqp=CAU"
                        }
                        alt="Fon 1"
                        width={200}
                        height={100}
                        className="!h-full"
                        loading="lazy"
                      />
                    </Carousel>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-4 px-1 flex flex-col">
              <div className="flex items-center justify-between w-full">
                <CardTitle className="text-current text-2xl">
                  Yakka Saroy Restaurant
                </CardTitle>
                <div className="flex items-center gap-0">
                  <span className="text-current text-2xl font-semibold">
                    700
                  </span>
                  <MdOutlineAttachMoney className="text-current text-2xl font-semibold -mt-1 w-8 h-8" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <CardTitle className="text-gray-900 text-xl font-medium">
                  Abdullah Kakhara Street 40, Tashkent.
                </CardTitle>
                <div className="flex items-center gap-1">
                  <span className="text-current text-2xl font-semibold">
                    400
                  </span>
                  <FaPeopleGroup className="text-current text-2xl font-semibold -mt-1 w-8 h-8" />
                </div>
              </div>
              <div className="flex items-end justify-between mt-4">
                <CardDescription className="text-gray-500 text-md font-medium w-[75%] !line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  maiores quo inventore necessitatibus quaerat harum Lorem,
                  ipsum dolor.
                </CardDescription>
                <div className="flex items-center gap-1">
                  <Button
                    className="bg-current hover:bg-current/90"
                    onClick={() => router.push(`/room/${i + 1}`)}
                  >
                    Booking
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
          // </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
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
    </section>
  );
};

export default SuggestionsSection;
