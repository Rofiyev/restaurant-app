"use client";

import ProfileMenu from "@/components/shared/ProfileMenu";
import { RiMenu4Fill } from "react-icons/ri";
import { useDrawer } from "@/hooks/use-drawer";

export default function Header() {
  const { onOpen } = useDrawer();

  return (
    <nav className="py-4 px-6 flex justify-between !w-full">
      <RiMenu4Fill
        onClick={onOpen}
        className="text-2xl visited:visible xl:invisible cursor-pointer"
      />
      <ProfileMenu />
    </nav>
  );
}
