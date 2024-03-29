"use client";

import { FC, ReactNode } from "react";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#047FC6"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default Providers;
