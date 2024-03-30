"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CustomCard from "../_components/Card";
import { z } from "zod";
import { FormRegisterSchema } from "@/schema/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { setRegister } from "@/actinos";
import { useMutation } from "@tanstack/react-query";
import { IRegisterForm } from "@/interface";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import ActivateForm from "./_components/ActivateForm";

export default function SignUp() {
  const [isActivate, setIsActivate] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");

  const toggleIsActive = () => setIsActivate((prev: boolean) => !prev);

  const form = useForm<z.infer<typeof FormRegisterSchema>>({
    resolver: zodResolver(FormRegisterSchema),
    defaultValues: {
      full_name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["register_user"],
    mutationFn: (data: IRegisterForm) => setRegister(data),
    onSuccess: () => {
      toast.success("Hammasi joyida!");
      toggleIsActive();
    },
    onError(error, variables) {
      toast.error("Xatolik mavjud!");
      console.log(error, variables);
      toggleIsActive();
      // form.reset();
    },
  });

  const onSubmit = (values: z.infer<typeof FormRegisterSchema>) => {
    mutate(values);
    setUserEmail(values.email);
  };

  return (
    <div className="flex flex-col items-center p-0 md:p-8">
      <CustomCard>
        {isActivate ? (
          <ActivateForm toggleIsActive={toggleIsActive} userEmail={userEmail} />
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-semibold">
                  Sign Up
                </CardTitle>
                <CardDescription>
                  Already have an account?{" "}
                  <Link
                    href={"/auth/sign-in"}
                    className="text-current underline"
                  >
                    Log In
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className={twMerge(
                            "focus-visible:ring-offset-0 focus-visible:ring-current",
                            fieldState.error &&
                              "focus-visible:ring-red-600 focus-visible:border-none border-red-600"
                          )}
                          placeholder="Full Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          className={twMerge(
                            "focus-visible:ring-offset-0 focus-visible:ring-current",
                            fieldState.error &&
                              "focus-visible:ring-red-600 focus-visible:border-none border-red-600"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          className={twMerge(
                            "focus-visible:ring-offset-0 focus-visible:ring-current",
                            fieldState.error &&
                              "focus-visible:ring-red-600 focus-visible:border-none border-red-600"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          className={twMerge(
                            "focus-visible:ring-offset-0 focus-visible:ring-current",
                            fieldState.error &&
                              "focus-visible:ring-red-600 focus-visible:border-none border-red-600"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button
                  disabled={isPending}
                  type="submit"
                  className="bg-current hover:bg-current/80 transition w-full"
                >
                  <>
                    {isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                  </>
                  Create An Account
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
      </CustomCard>
    </div>
  );
}
