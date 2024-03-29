"use client";

import Link from "next/link";
import { LogOut, User, LucideList } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  {
    label: "Profile",
    route: "/user-profile",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    label: "Booking",
    route: "/user-profile/booking",
    icon: <LucideList className="mr-2 h-4 w-4" />,
  },
];

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src="https://media.licdn.com/dms/image/D4D03AQH4ZMegC1HSBQ/profile-displayphoto-shrink_800_800/0/1703044994339?e=2147483647&v=beta&t=jmp07h80ZNSB7Io6I9TWuom-jxi15ZAeLWQ1aUy0Xq4"
            alt="Rofiyev Dilshod"
            className="cursor-pointer"
          />
          <AvatarFallback className="cursor-pointer">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 absolute right-0">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuItems.map((item, i) => (
            <Link key={i} className="cursor-pointer" href={item.route}>
              <DropdownMenuItem>
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-red-400 group cursor-pointer">
          <LogOut className="mr-2 h-4 w-4 group-hover:text-white" />
          <span className="group-hover:text-white">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
