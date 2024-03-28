"use client";

import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Header from "./_components/Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  let user: boolean = false;

  if (user) redirect("/");

  return (
    <section className="w-full md:max-w-7xl mx-auto flex items-center flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <footer>
        <p>2023. All rights reserved</p>
      </footer>
    </section>
  );
}
