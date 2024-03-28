"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../../../../assets/background.jpeg";

import { MdOutlineAttachMoney } from "react-icons/md";
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

import { ICardsMenu } from "@/interface";
import { responsive } from "@/constants";

const cards: ICardsMenu[] = [
  {
    icon: <FaMapLocation className="w-full text-6xl" />,
    label: "Comfortable Location",
  },
  {
    icon: <MdRoomService className="w-full text-6xl" />,
    label: "High quality service",
  },
  {
    icon: <FaParking className="w-full text-6xl" />,
    label: "Convinient parking",
  },
  {
    icon: <MdOutlineWifi className="w-full text-6xl" />,
    label: "Free wi-fi",
  },
  {
    icon: <BiSolidCoffee className="w-full text-6xl" />,
    label: "Room for coffee break",
  },
  {
    icon: <VscOrganization className="w-full text-6xl" />,
    label: "Organizations",
  },
  {
    icon: <CiMicrophoneOn className="w-full text-6xl" />,
    label: "Singers",
  },
  {
    icon: <BsMusicNoteList className="w-full text-6xl" />,
    label: "Dancers",
  },
];

export default function AboutRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const [selected, setSelected] = useState<Date>();

  const disabledDays = [
    new Date(2024, 2, 10),
    new Date(2024, 2, 12),
    new Date(2024, 2, 20),
  ];

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-8 py-4">
        <div className="w-full xl:w-4/6">
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
            {[Array(4)].map((_, i: number) => (
              <Image
                key={i}
                src={bg.src}
                alt="Fon 1"
                width={300}
                height={100}
                className="!h-[540px] !w-full object-cover rounded-md"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
        <div className="w-full xl:w-4/12">
          <div className="flex justify-between items-start">
            <h3 className="text-current text-4xl font-semibold">
              Yakkasaroy Restaurant
            </h3>
            <div className="flex items-center gap-0">
              <span className="text-current text-4xl font-semibold">700</span>
              <MdOutlineAttachMoney className="text-current text-2xl font-semibold -mt-1 w-10 h-10" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <span className="text-current text-2xl font-semibold">400</span>
            <FaPeopleGroup className="text-current text-2xl font-semibold -mt-1 w-8 h-8" />
          </div>
          <p className="text-gray-500 text-md font-medium !line-clamp-3 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            maiores quo inventore necessitatibus quaerat harum Lorem, ipsum
            dolor.
          </p>
          <div className="block md:flex justify-between xl:block">
            <div className="flex items-center gap-2 mt-4">
              <FaLocationDot className="text-2xl font-semibold -mt-1 w-8 h-8" />
              <span className="text-[18px] w-4/5 font-medium">
                Abdullah Kakhara Street 40, Tashkent.
              </span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Avatar>
                <AvatarImage
                  src="https://media.licdn.com/dms/image/D4D03AQH4ZMegC1HSBQ/profile-displayphoto-shrink_800_800/0/1703044994339?e=2147483647&v=beta&t=jmp07h80ZNSB7Io6I9TWuom-jxi15ZAeLWQ1aUy0Xq4"
                  alt="Rofiyev Dilshod"
                />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              <span className="text-[18px] w-4/5 font-medium">
                Rofiyev Dilshod
              </span>
            </div>
          </div>
          <div className="flex xl:w-full xl:flex-col mt-8 gap-2">
            <Button className="bg-current hover:bg-current/90 transition-colors w-full">
              Show Number
            </Button>
            <Button className="bg-current hover:bg-current/90 transition-colors w-full">
              Booking
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Cards */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
        {cards.map((item: ICardsMenu) => (
          <Card key={item.label} className="!w-full p-4">
            <CardContent>{item.icon}</CardContent>
            <CardFooter className="flex justify-center !p-0">
              <span className="text-xl font-medium w-9/12 text-center">
                {item.label}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="w-full block md:hidden mb-8">
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
          {cards.map((item: ICardsMenu) => (
            <Card key={item.label} className="!w-full p-4">
              <CardContent>{item.icon}</CardContent>
              <CardFooter className="flex justify-center !p-0">
                <span className="text-xl font-medium w-9/12 text-center">
                  {item.label}
                </span>
              </CardFooter>
            </Card>
          ))}
        </Carousel>
      </div>
      {/* Cards */}

      <div className="flex flex-col-reverse gap-6 xl:gap-0 xl:flex-row mb-8">
        <div className="w-full xl:w-2/3 pr-0 xl:pr-24 ">
          <h3 className="font-semibold text-2xl mb-6">Comments</h3>

          <div className="">
            <div className="w-full !h-[300px] md:!h-[620px] overflow-y-scroll">
              {[...Array(10)].map((_, i: number) => (
                <div key={i} className="">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src="https://media.licdn.com/dms/image/D4D03AQH4ZMegC1HSBQ/profile-displayphoto-shrink_800_800/0/1703044994339?e=2147483647&v=beta&t=jmp07h80ZNSB7Io6I9TWuom-jxi15ZAeLWQ1aUy0Xq4"
                          alt="Rofiyev Dilshod"
                          className="cursor-pointer w-12 h-12 object-cover"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="font-medium tracking-wide">Rof1yev</span>
                      <BsDot />
                      <span className="text-black/70">1 day ago</span>
                    </div>
                    <p className="w-full xl:w-4/5 text-black/70">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tempora quos illum iste. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Ipsum, explicabo esse.
                    </p>
                  </div>
                  {i !== 9 && <Separator className="my-4 w-[95%]" />}
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Input
                placeholder="Leave a comment"
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
              />
              <Button className="bg-current hover:bg-current/90 transition-colors">
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className=" w-full xl:w-1/3 mb-4 xl:mb-0">
          <h3 className="font-semibold text-2xl mb-6">Order The Wedding Day</h3>

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
                  <span className="text-gray-600 text-sm">06:00 - 10:00</span>
                  <span className="text-xl font-medium">Morning</span>
                </div>
                <label htmlFor="morning_check" className="flex items-center">
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
                  <span className="text-gray-600 text-sm">12:00 - 16:00</span>
                  <span className="text-xl font-medium">Afternoon</span>
                </div>
                <label htmlFor="afternoon_check" className="flex items-center">
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
                  <span className="text-gray-600 text-sm">18:00 - 22:00</span>
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
  );
}
