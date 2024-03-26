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
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex justify-center flex-col items-center p-8">
      <h3 className="text-current text-4xl uppercase font-bold mb-8">Adore</h3>

      <Card className="sm:w-[540px] !min-w-full p-8 h-[529px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Sign In</CardTitle>
          <CardDescription>
            Don`t have an account?{" "}
            <Link href={"/sign-up"} className="text-current underline">
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
          <Link href={"/reset-password"} className="text-current underline">
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
