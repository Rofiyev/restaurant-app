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

export default function SignUp() {
  return (
    <div className="flex justify-center flex-col items-center p-8">
      <h3 className="text-current text-4xl uppercase font-bold mb-8">Adore</h3>

      <Card className="sm:w-[540px] !min-w-full p-8 min-h-[529px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Sign Up</CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-current underline">
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
