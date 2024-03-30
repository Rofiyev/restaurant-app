"use client";

import { FC, ReactNode, useLayoutEffect } from "react";
import { getUser } from "@/actinos";
import { useUser } from "@/hooks/use-user";
import { useQuery } from "@tanstack/react-query";

const LayoutSite: FC<{ children: ReactNode }> = ({ children }) => {
  const { setUser } = useUser();
  const { data: res } = useQuery({ queryKey: ["get_user"], queryFn: getUser });

  useLayoutEffect(() => {
    if (res?.data) setUser(res?.data);
  }, [res, setUser]);

  return children;
};

export default LayoutSite;
