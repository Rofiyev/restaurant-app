"use client";

import { ChangeEvent, useState } from "react";
import {
  getDistricts,
  getNeighborhood,
  getRegions,
  getServices,
} from "@/actinos";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IDistrict, INeighborhood, IRegion, IServices } from "@/interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CustomImage from "@/app/(site)/_components/Image";

export default function AddRestaurantPage() {
  const [servicesIdList, setServicesIdList] = useState<number[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [neighborhood, setNeighborhood] = useState<INeighborhood[]>([]);

  const [searchData, setSearchData] = useState<{
    region_id: string;
    district_id: string;
    neighborhood: string;
  }>({
    region_id: "",
    district_id: "",
    neighborhood: "",
  });

  const { data: reg } = useQuery({
    queryKey: ["region"],
    queryFn: getRegions,
  });

  const { data: services } = useQuery({
    queryKey: ["service"],
    queryFn: getServices,
  });

  const { mutate: selectRegionFunc } = useMutation({
    mutationKey: ["district"],
    mutationFn: (id: string) => getDistricts(+id),
    onSuccess({ data }) {
      setDistricts(data);
    },
    onError(error, variables) {
      console.log(error, variables);
    },
  });
  const { mutate: selectDistrict } = useMutation({
    mutationKey: ["district"],
    mutationFn: (id: string) => getNeighborhood(+id),
    onSuccess({ data }) {
      setNeighborhood(data);
    },
    onError(error, variables) {
      console.log(error, variables);
    },
  });

  const handelRegion = (value: string) => {
    setSearchData((prev) => ({ ...prev, region_id: value }));
    selectRegionFunc(value);
  };
  const handelDestrict = (value: string) => {
    setSearchData((prev) => ({ ...prev, district_id: value }));
    selectDistrict(value);
  };
  const handelNeighborhood = (value: string) => {
    setSearchData((prev) => ({ ...prev, neighborhood: value }));
  };

  const [images, setImages] = useState<File[]>([]);
  const setImagesFunc = (imgs: any) =>
    imgs && setImages((prev) => [...prev, ...imgs]);

  return (
    <div className="w-full px-1 md:px-2 xl:px-8">
      <h3 className="text-[42px] font-semibold mt-0 md:mt-4 xl:mt-0">
        Add restaurant
      </h3>

      <form className="mt-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 xl:gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              <span>Name</span>
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                id="name"
                placeholder="Write Name"
              />
            </label>
            <label htmlFor="price">
              <span>Price</span>
              <Input
                type="number"
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                id="price"
                placeholder="Write Price"
              />
            </label>
            <label htmlFor="description">
              <span>Description</span>
              <Textarea
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                placeholder="Write Description"
              />
            </label>
            <label htmlFor="phone">
              <span>Phone Number</span>
              <PhoneInput placeholder="Write Phone number" />
            </label>
            <label htmlFor="location">
              <span className="mb-1">Location</span>
              <Select onValueChange={handelRegion}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select region</SelectLabel>
                    {reg ? (
                      reg?.data?.map((item: IRegion) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex justify-center my-2">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      </div>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={handelDestrict}>
                <SelectTrigger className="w-full my-2">
                  <SelectValue placeholder="Districts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select district</SelectLabel>
                    {districts.length ? (
                      districts.map(({ id, name }: IDistrict) => (
                        <SelectItem key={id} value={String(id)}>
                          {name}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex justify-center my-2">
                        <span className="text-sm">Choose a region!</span>
                      </div>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={handelNeighborhood}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Neighborhood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Neighborhood</SelectLabel>
                    {neighborhood.length ? (
                      neighborhood.map((item: INeighborhood) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex justify-center my-2">
                        <span className="text-sm">Choose a district!</span>
                      </div>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            <label htmlFor="street">
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                id="street"
                placeholder="Write Street"
              />
            </label>
            <label htmlFor="neighborhood">
              <Input
                className="focus-visible:ring-offset-0 focus-visible:ring-current"
                id="neighborhood"
                placeholder="Write House number"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <label htmlFor="people_size">
                <span>People Size</span>
                <Input
                  className="focus-visible:ring-offset-0 focus-visible:ring-current"
                  type="number"
                  placeholder="People size"
                />
              </label>
              <label>
                <span>Morning</span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Mording time" />
                  </SelectTrigger>
                  <SelectContent className="focus-visible:ring-offset-0 focus-visible:ring-current">
                    <SelectGroup>
                      <SelectLabel>Select Time</SelectLabel>
                      <SelectItem value={"06:00-10:10"}>
                        06:00 - 10:00
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <span>Afternoon</span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Afternoon time" />
                  </SelectTrigger>
                  <SelectContent className="focus-visible:ring-offset-0 focus-visible:ring-current">
                    <SelectGroup>
                      <SelectLabel>Select Time</SelectLabel>
                      <SelectItem value={"11:00-16:100"}>
                        11:00 - 16:00
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label>
                <span>Night</span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Night time" />
                  </SelectTrigger>
                  <SelectContent className="focus-visible:ring-offset-0 focus-visible:ring-current">
                    <SelectGroup>
                      <SelectLabel>Select Time</SelectLabel>
                      <SelectItem value={"17:00-23:10"}>
                        17:00 - 23:00
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
            </div>
            {services?.data && (
              <label>
                <span className="text-xl">Choose Services</span>
                {/* <div className="flex flex-wrap gap-2">
                {servicesAll.map((item: IServicesItem, i: number) => (
                  <div
                    onClick={() => {
                      const c = [...servicesAll];
                      c[i].active = !c[i].active;
                      setAllServices(c);
                    }}
                    key={i}
                    className={`border-[1px] cursor-pointer border-neutral-600 rounded-3xl inline-flex gap-1 py-1 px-4 ${
                      item.active && "bg-current text-white border-transparent"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div> */}
                <div className="flex flex-wrap gap-2">
                  {services.data.map((item: IServices, i: number) => (
                    <div
                      onClick={() =>
                        setServicesIdList((prev: number[]) => [
                          ...prev,
                          item.id,
                        ])
                      }
                      onDoubleClick={() =>
                        setServicesIdList(
                          servicesIdList.filter((n: number) => n !== item.id)
                        )
                      }
                      key={i}
                      className={`border-[1px] cursor-pointer border-neutral-600 rounded-3xl inline-flex gap-1 py-1 px-4 select-none ${
                        servicesIdList.includes(item.id) &&
                        "bg-current text-white border-transparent"
                      }`}
                    >
                      <div className="w-6 h-6 relative">
                        <CustomImage
                          imgUrl={item.image}
                          alt={item.name}
                          fill
                          className="object-contain mix-blend-multiply brightness-1 invert-0"
                        />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </label>
            )}

            <div className="flex flex-col gap-2 mt-4">
              <span className="text-xl">Product Gallery</span>
              <label
                htmlFor="images"
                className="w-full h-40 border border-dashed flex justify-center items-center flex-col gap-2"
              >
                <CiImageOn className="text-5xl text-current/60" />
                <p>Drop your imager here, or browse</p>
                <p>Jpeg, jpg and png are allowed</p>
                <input
                  type="file"
                  id="images"
                  className="invisible"
                  multiple
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImagesFunc(e.target.files)
                  }
                />
              </label>

              <div className="flex flex-col gap-2">
                {images.length
                  ? images.map((imgFile, i: number) => (
                      <div
                        key={i}
                        className="bg-gray-200 flex gap-2 rounded-md p-1 justify-between items-center"
                      >
                        <div className="flex gap-2 items-center">
                          <Avatar className="rounded-md">
                            <AvatarImage
                              src={URL.createObjectURL(imgFile)}
                              alt={imgFile.name}
                              className="object-cover"
                            />
                          </Avatar>
                          <span>{imgFile.name}</span>
                        </div>
                        <X
                          className="!text-red-600 cursor-pointer mr-2"
                          onClick={() =>
                            setImages(
                              images.filter(
                                (item) => item.name !== imgFile.name
                              )
                            )
                          }
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
