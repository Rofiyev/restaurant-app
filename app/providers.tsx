"use client";

import { FC, ReactNode } from "react";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default Providers;
