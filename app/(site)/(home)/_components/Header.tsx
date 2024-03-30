"use client";

import Link from "next/link";
import Container from "../../_components/Container";
import Image from "next/image";
import ProfileMenu from "@/components/shared/ProfileMenu";
import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { user } = useUser();

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

        <>
          {user ? (
            <ProfileMenu />
          ) : (
            <div className="flex gap-2">
              <Button
                className="bg-current hover:bg-current/90"
                onClick={() => router.push("/auth/sign-in")}
              >
                Sign In
              </Button>
              <Button
                className="bg-current hover:bg-current/90"
                onClick={() => router.push("/auth/sign-up")}
              >
                Sign Up
              </Button>
            </div>
          )}
        </>
      </nav>
    </Container>
  );
}
