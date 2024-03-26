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

export default function Reset() {
  let resetPasswordActive: boolean = false;

  return (
    <div className="flex justify-center flex-col items-center p-8">
      <h3 className="text-current text-4xl uppercase font-bold mb-8">Adore</h3>

      <Card className="sm:w-[540px] !min-w-full p-8">
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
