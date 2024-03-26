"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-center flex-col items-center p-8">
      <Link
        href={"/"}
        className="text-current text-3xl uppercase font-bold flex items-center md:mb-8"
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

      <Card className="sm:w-[540px] !min-w-full translate-y-1/4 md:translate-y-0 p-0 md:p-8 md:min-h-[529px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Sign Up</CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link href={"/auth/sign-in"} className="text-current underline">
              Log In
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Full Name"
          />
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Email Address"
          />
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Username"
          />
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Password"
          />
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Activate Code"
          />
        </CardContent>
        <CardFooter>
          <Button className="bg-current hover:bg-current/80 transition w-full">
            Create An Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
