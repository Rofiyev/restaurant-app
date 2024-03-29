"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Separator } from "@/components/ui/separator";
import { CiCamera } from "react-icons/ci";

export default function AdminPage() {
  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <h3 className="text-[42px] font-semibold mt-0 md:mt-4 xl:mt-0">
        Hello! Rofiyev Dilshod
      </h3>

      <div>
        <div className="flex items-center gap-6 mt-6">
          <label
            htmlFor="profile_picture"
            className="relative w-32 h-32 !rounded-md"
          >
            <Avatar className="cursor-pointer absolute w-full h-full !rounded-md inset-0">
              <AvatarImage
                src="https://media.licdn.com/dms/image/D4D03AQH4ZMegC1HSBQ/profile-displayphoto-shrink_800_800/0/1703044994339?e=2147483647&v=beta&t=jmp07h80ZNSB7Io6I9TWuom-jxi15ZAeLWQ1aUy0Xq4"
                alt="Rofiyev Dilshod"
              />
              <AvatarFallback className="cursor-pointer text-4xl">
                CN
              </AvatarFallback>
            </Avatar>
            <CiCamera className="text-2xl bg-white border-2 border-gray-600 rounded-full p-[2px] absolute bottom-1 right-1" />
            <input type="file" id="profile_picture" className="invisible" />
          </label>
          <div className="">
            <span className="font-medium text-2xl">Profile Photo</span>
            <p className="text-gray-500 text-sm">
              The recommended size is 360x360px or 720x720px
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 xl:gap-8">
          <label htmlFor="full_name">
            <span>Full Name</span>
            <Input
              className="focus-visible:ring-offset-0 focus-visible:ring-current"
              id="full_name"
            />
          </label>
          <label htmlFor="full_name">
            <span>Username</span>
            <Input
              className="focus-visible:ring-offset-0 focus-visible:ring-current"
              id="full_name"
            />
          </label>
          <label htmlFor="full_name">
            <span>Email</span>
            <Input
              className="focus-visible:ring-offset-0 focus-visible:ring-current"
              type="email"
              id="full_name"
            />
          </label>
          <label htmlFor="full_name">
            <span>Phone Number</span>
            <PhoneInput />
          </label>
        </div>
        <Separator className="my-9" />
        <div className="w-full flex justify-center mb-4">
          <div className="flex w-full flex-col sm:flex-row justify-start gap-2">
            <Button className="w-full md:w-44 bg-current hover:bg-current/80">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
