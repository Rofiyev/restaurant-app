"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { MdOutlineBorderColor } from "react-icons/md";
import { FaRegMoneyBill1, FaPeopleGroup } from "react-icons/fa6";
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
import { responsive } from "@/constants";
import CustomImage from "../../_components/Image";
import CardSkeleton from "../_components/CardSkeleton";
import { useRestaurant } from "@/hooks/use-restaurant";
import { useQuery } from "@tanstack/react-query";
import { IRestaurant } from "@/interface";
import { getAllRestaurant } from "@/actinos";
import { useUser } from "@/hooks/use-user";
import toast from "react-hot-toast";

const SuggestionsSection = () => {
  const { setRestaurants, restaurants } = useRestaurant();
  const { user } = useUser();
  const [pageCount, setPageCount] = useState<number>(1);
  const { data: res } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => getAllRestaurant({ page: pageCount, page_size: 6 }),
  });

  useEffect(() => {
    res?.data && setRestaurants(res.data.results);
  }, [res, setRestaurants]);

  const router = useRouter();

  const openRoomIdFunc = (route: string) => {
    user ? router.push(route) : toast.error("");
  };

  return (
    <section className="mb-8 mt-16">
      <h3 className="text-3xl md:text-5xl font-semibold mb-8">
        Wedding places
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {restaurants ? (
          <>
            {restaurants.map((item: IRestaurant) => (
              <Card
                key={item.id}
                className="w-full overflow-hidden border-none shadow-none rounded-sm"
              >
                <CardContent className="flex flex-col gap-3 !p-0">
                  <div className="flex flex-col xl:flex-row gap-3">
                    <div className="relative w-full h-[300px] xl:w-3/4">
                      <CustomImage
                        imgUrl={item.images[0].image}
                        alt="Image"
                        className="inset-0 object-cover"
                        fill={true}
                      />
                    </div>
                    <div className="flex xl:flex-col gap-3 items-stretch">
                      <div className="w-2/4 xl:w-[200px] !overflow-hidden">
                        <Carousel
                          swipeable={false}
                          draggable={false}
                          responsive={responsive}
                          ssr={true}
                          infinite={true}
                          autoPlay={true}
                          autoPlaySpeed={2000}
                          customTransition="all .5"
                          transitionDuration={500}
                        >
                          {item.images.map((imgUrl) => (
                            <div
                              key={imgUrl.id}
                              className="h-40 xl:h-36 !w-full relative"
                            >
                              <CustomImage
                                imgUrl={imgUrl.image}
                                alt={`Fon ${imgUrl.id}`}
                                fill={true}
                                className={`inset-0 object-cover `}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <div className="w-2/4 xl:w-[200px] !overflow-hidden">
                        <Carousel
                          swipeable={false}
                          draggable={false}
                          responsive={responsive}
                          ssr={true}
                          infinite={true}
                          autoPlay={true}
                          autoPlaySpeed={2000}
                          customTransition="all .5"
                          transitionDuration={500}
                        >
                          {item.images.reverse().map((imgUrl) => (
                            <div
                              key={imgUrl.id}
                              className="h-40 xl:h-36 !w-full relative"
                            >
                              <CustomImage
                                imgUrl={imgUrl.image}
                                alt={`Fon ${imgUrl.id}`}
                                fill={true}
                                className={`inset-0 object-cover `}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-4 px-1 flex flex-col">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-current text-xl xl:text-2xl">
                      {item.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <span className="text-current text-xl xl:text-2xl font-semibold">
                        {Number(item.price) / 1_000_000} mln
                      </span>
                      <FaRegMoneyBill1 className="text-current text-xl xl:text-2xl font-semibold -mt-1 w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-gray-900 text-base xl:text-xl font-medium">
                      {item.address.street} {item.address.mahalla}
                      {", "}
                      {item.address.house}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <span className="text-current text-xl xl:text-2xl font-semibold">
                        {item.size_people}
                      </span>
                      <FaPeopleGroup className="text-current text-xl xl:text-2xl font-semibold -mt-1 w-8 h-8" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col xl:flex-row justify-between items-end gap-4 mt-2">
                    <CardDescription className="text-md text-neutral-700 !line-clamp-3 w-full xl:w-3/4">
                      {item.description} Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Corporis enim quam, reprehenderit
                      praesentium laudantium ab cupiditate odio architecto
                      repellendus labore?
                    </CardDescription>
                    <Button
                      onClick={() => openRoomIdFunc(`/room/${item.id}`)}
                      className="w-full xl:w-28 bg-current hover:bg-current/80"
                    >
                      <MdOutlineBorderColor className="mr-2 h-4 w-4" />
                      Booking
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </>
        ) : (
          <>
            {[...Array(4)].map((_, i: number) => (
              <CardSkeleton key={i} />
            ))}
          </>
        )}
      </div>
      {restaurants && restaurants.length > 5 && (
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className="cursor-pointer" />
              </PaginationItem>
              {[...Array(3)].map((_, i: number) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setPageCount(i + 1)}
                    className={cn(
                      pageCount === i + 1 &&
                        "bg-current text-white hover:bg-current/90 hover:text-white transition-colors"
                    )}
                    href="#"
                    isActive={i + 1 === pageCount}
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
      )}
    </section>
  );
};

export default SuggestionsSection;
