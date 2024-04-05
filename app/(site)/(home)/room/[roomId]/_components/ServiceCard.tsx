"use client";

import { FC } from "react";
import { IServices } from "@/interface";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CustomImage from "@/app/(site)/_components/Image";

const ServiceCard: FC<{ item: IServices }> = ({ item }) => {
  return (
    <Card className="!w-full p-4">
      <CardContent className="relative w-24 h-24 mx-auto mb-2">
        <CustomImage
          imgUrl={item.image}
          alt={item.name}
          fill
          className="object-contain"
        />
      </CardContent>
      <CardFooter className="flex justify-center !p-0">
        <span className="text-xl font-medium w-9/12 text-center">
          {item.name}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
