"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaPeopleGroup, FaLocationDot, FaMapLocation } from "react-icons/fa6";
import { MdRoomService, MdOutlineWifi } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsMusicNoteList, BsDot } from "react-icons/bs";
import { BiSolidCoffee } from "react-icons/bi";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import {
  ICardsMenu,
  IComment,
  IPostComment,
  IRoomId,
  IServices,
} from "@/interface";
import { responsive } from "@/constants";
import CustomImage from "@/app/(site)/_components/Image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { bookingRoomId, getRoomId, getServices, postComment } from "@/actinos";
import PageSkeleton from "./_components/PageSkeleton";

export default function AboutRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const [room, setRoom] = useState<IRoomId | null>(null);
  const [commentData, setCommentData] = useState<string>("");
  const { data: res, refetch } = useQuery({
    queryKey: ["get_room_id"],
    queryFn: () => getRoomId(params.roomId),
  });
  const { data: booingData } = useQuery({
    queryKey: ["booking_get"],
    queryFn: bookingRoomId,
  });
  console.log(booingData);

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  useEffect(() => {
    res?.data && setRoom(res?.data);
  }, [res?.data]);

  const [selected, setSelected] = useState<Date>();
  const disabledDays = [
    new Date(2024, 2, 10),
    new Date(2024, 2, 12),
    new Date(2024, 2, 20),
  ];

  const { mutate, isPending } = useMutation({
    mutationKey: ["comment_post"],
    mutationFn: (data: IPostComment) => postComment(data),
    onSuccess(res) {
      if (res.data) {
        refetch();
        setTimeout(() => {
          document.querySelector("#comments")?.scrollTo({
            left: 0,
            top: document.querySelector("#comments")?.scrollHeight,
            behavior: "smooth",
          });
        }, 500);
      }
    },
  });

  const sendComment = () => {
    if (commentData.trim())
      mutate({ text: commentData, restaurant: +params.roomId });
    setCommentData("");
  };

  const bookingFunc = () =>
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {room ? (
        <>
          <div className="flex flex-col xl:flex-row gap-8 py-4">
            <div className="w-full xl:w-4/6">
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={2000}
                customTransition="all .5"
                transitionDuration={500}
                showDots
              >
                {room.images.map((img: { image: string; id: number }) => (
                  <div key={img.id} className="w-full !h-[540px] relative">
                    <CustomImage
                      imgUrl={img.image}
                      alt="Fon 1"
                      fill
                      className="!h-[540px] !w-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="flex justify-between items-start">
                <h3 className="text-current text-4xl font-semibold">
                  {room.name}
                </h3>
                <div className="flex items-center gap-0">
                  <span className="text-current text-2xl font-semibold">
                    {room.price / 1_000_000} mln
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <span className="text-current text-2xl font-semibold">
                  {room.size_people}
                </span>
                <FaPeopleGroup className="text-current text-2xl font-semibold -mt-1 w-8 h-8" />
              </div>
              <p className="text-gray-500 text-md font-medium !line-clamp-3 mt-2">
                {room.description}
              </p>
              <div className="block md:flex justify-between xl:block">
                <div className="flex items-center gap-2 mt-4">
                  <FaLocationDot className="text-2xl font-semibold -mt-1 w-8 h-8" />
                  <span className="text-[18px] w-4/5 font-medium">
                    {room.address.mahalla} {room.address.street}{" "}
                    {room.address.house}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Avatar>
                    <AvatarImage
                      src={room.user.image}
                      alt={room.user.full_name}
                    />
                    <AvatarFallback>
                      {room.user.full_name.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[18px] w-4/5 font-medium">
                    {room.user.full_name}
                  </span>
                </div>
              </div>
              <div className="flex xl:w-full xl:flex-col mt-8 gap-2">
                <a
                  href={`tel:${room.phone}`}
                  className="w-full md:w-60 xl:w-full"
                >
                  <Button className="bg-current hover:bg-current/90 transition-colors w-full md:w-60 xl:w-full">
                    Call Now
                  </Button>
                </a>
                <Button
                  onClick={bookingFunc}
                  className="bg-current hover:bg-current/90 transition-colors w-full md:w-60 xl:w-full"
                >
                  Booking
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Cards */}
          {services?.data && (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
              {services.data.map((item: IServices) => (
                <Card key={item.id} className="!w-full p-4">
                  <CardContent className="relative w-24 h-24 mx-auto mb-2">
                    <CustomImage
                      imgUrl={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-center !p-0">
                    <span className="text-xl font-medium w-9/12 text-center">
                      {item.name}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          <div className="w-full block md:hidden mb-8 px-16 sm:px-0">
            {services?.data && (
              <>
                <h3 className="font-semibold text-2xl mb-6">All Services</h3>
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
                  {services?.data.map((item: IServices) => (
                    <Card key={item.id} className="!w-full p-4">
                      <CardContent className="relative w-24 h-24 mx-auto mb-2">
                        <CustomImage
                          imgUrl={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </CardContent>
                      <CardFooter className="flex justify-center !p-0">
                        <span className="text-xl font-medium w-9/12 text-center">
                          {item.name}
                        </span>
                      </CardFooter>
                    </Card>
                  ))}
                </Carousel>
              </>
            )}
          </div>
          {/* Cards */}

          <div className="flex flex-col-reverse gap-6 xl:gap-0 xl:flex-row mb-8">
            <div className="w-full xl:w-2/3 pr-0 xl:pr-24 ">
              <h3 className="font-semibold text-2xl mb-6">Comments</h3>

              <div className="">
                <div
                  className="w-full !h-[300px] md:!h-[620px] overflow-y-scroll"
                  id="comments"
                >
                  {room.comments.reverse().map((item: IComment, i: number) => (
                    <div key={item.id}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage
                              src={item.user.image}
                              alt={item.user.username}
                              className="cursor-pointer w-12 h-12 object-cover"
                            />
                            <AvatarFallback>
                              {item.user.username.slice(0, 1)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium tracking-wide">
                            {item.user.username}
                          </span>
                          <BsDot />
                          <span className="text-black/70">
                            {item.created_at}
                          </span>
                        </div>
                        <p className="w-full xl:w-4/5 text-black/70">
                          {item.text}
                        </p>
                      </div>
                      {i !== room.comments.length - 1 && (
                        <Separator className="my-4 w-[95%]" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCommentData(e.target.value)
                    }
                    value={commentData}
                    placeholder="Leave a comment"
                    className="focus-visible:ring-offset-0 focus-visible:ring-current"
                  />
                  <Button
                    disabled={isPending}
                    onClick={sendComment}
                    className="bg-current hover:bg-current/90 transition-colors"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>

            <div className=" w-full xl:w-1/3 mb-4 xl:mb-0" id="booking">
              <h3 className="font-semibold text-2xl mb-6">
                Order The Wedding Day
              </h3>

              <div className="bg-zinc-100 rounded-md !h-[620px] mb-4 p-2">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  disabled={disabledDays}
                  defaultMonth={new Date(2024, 2, 28)}
                />

                <Separator className="my-8" />

                <div className="px-3 pb-3 mb-4">
                  <div className="flex justify-between items-end mb-6">
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">
                        06:00 - 10:00
                      </span>
                      <span className="text-xl font-medium">Morning</span>
                    </div>
                    <label
                      htmlFor="morning_check"
                      className="flex items-center"
                    >
                      <span className="mr-3 text-green-600">Available</span>
                      <input
                        type="checkbox"
                        id="morning_check"
                        name="morning_check"
                        className="!w-4 !h-4"
                      />
                    </label>
                  </div>
                  <div className="flex justify-between items-end mb-6">
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">
                        12:00 - 16:00
                      </span>
                      <span className="text-xl font-medium">Afternoon</span>
                    </div>
                    <label
                      htmlFor="afternoon_check"
                      className="flex items-center"
                    >
                      <span className="mr-3 text-green-600">Available</span>
                      <input
                        type="checkbox"
                        id="afternoon_check"
                        name="afternoon_check"
                        className="!w-4 !h-4"
                      />
                    </label>
                  </div>
                  <div className="flex justify-between items-end mb-6">
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">
                        18:00 - 22:00
                      </span>
                      <span className="text-xl font-medium">Night</span>
                    </div>
                    <label htmlFor="check">
                      <span className="mr-3 text-red-600">Not available</span>
                    </label>
                  </div>
                </div>
              </div>
              <Button className="bg-current w-full hover:bg-current/90 transition-colors">
                Send the Booking
              </Button>
            </div>
          </div>
        </>
      ) : (
        <PageSkeleton />
      )}
    </>
  );
}
