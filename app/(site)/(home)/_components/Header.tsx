"use client";

import Link from "next/link";
import Container from "../../_components/Container";
import Image from "next/image";
import ProfileMenu from "@/components/shared/ProfileMenu";

export default function Header() {
  return (
    <Container>
      <nav className="flex justify-between items-center py-4">
        <Link
          href={"/"}
          className="text-current text-3xl uppercase font-bold flex items-center"
        >
          <Image
            src={"/logo.png"}
            width={60}
            height={60}
            className="object-cover"
            alt="Logo"
          />
          Adore
        </Link>

        <ProfileMenu />
      </nav>
    </Container>
  );
}
