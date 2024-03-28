import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Reset() {
  let resetPasswordActive: boolean = false;

  return (
    <div className="flex justify-center flex-col items-center p-8">
      <Card
        className={`sm:w-[540px] ${
          resetPasswordActive ? "translate-y-3/4" : "translate-y-2/4"
        } md:translate-y-0 !min-w-full p-0 md:p-8`}
      >
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {resetPasswordActive ? (
            <Input
              className="focus-visible:ring-offset-0 focus-visible:ring-current"
              placeholder="Email"
            />
          ) : (
            <>
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                placeholder="Active code"
              />
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                placeholder="New password"
              />
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                placeholder="Confirm password"
              />
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button className="bg-current hover:bg-current/80 transition w-full">
            Reset Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
