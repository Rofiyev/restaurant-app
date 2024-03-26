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

export default function SignIn() {
  return (
    <div className="flex flex-col items-center p-8 h-full">
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

      <Card className="sm:w-[540px] !min-w-full translate-y-2/4 md:translate-y-0 p-0 md:p-8 md:h-[529px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Sign In</CardTitle>
          <CardDescription>
            Don`t have an account?{" "}
            <Link href={"/auth/sign-up"} className="text-current underline">
              Sign Up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Username"
          />
          <Input
            className="focus-visible:ring-offset-0 focus-visible:ring-current"
            placeholder="Password"
          />
          <CardDescription className="flex justify-end">
            <Link
              href={"/auth/reset-password"}
              className="text-current underline"
            >
              Forgot your password?
            </Link>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button className="bg-current hover:bg-current/80 transition w-full">
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
