"use client";

import Link from "next/link";
import Container from "../../_components/Container";
import Image from "next/image";
import ProfileMenu from "@/components/shared/ProfileMenu";
import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUser } from "@/actinos";
import Cookies from "js-cookie";
import { IUser } from "@/interface";

export default function Header() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const { data: res } = useQuery<{ data: IUser }>({
    queryKey: ["get_user"],
    queryFn: getUser,
  });

  useEffect(() => {
    if (res?.data) {
      setUser(res?.data);
      Cookies.set("currentUser", JSON.stringify(res.data));
      Cookies.set("role", res.data.is_admin ? "admin" : "user");
    }
  }, [res, setUser]);

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
