"use client";

import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-8 bg-current">
      <Container>
        <div className="flex items-center justify-center ">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={80}
            height={80}
            className="brightness-0 invert"
          />
          <h3 className="text-white text-4xl font-bold ">ADORE</h3>
        </div>
        <div className="flex justify-between items-end mt-6">
          <p className="text-white w-2/6">
            Ullam exercitationem laboriosam pariatur voluptatum tenetur vero
            numquam quaerat.
          </p>
          <div className="flex flex-col items-end">
            <p className="text-white text-md">Our call center</p>
            <p className="text-white">
              <a href="tel:+998999999999" className="hover:underline">
                +998 99 999 99 99
              </a>
            </p>
            <p className="text-white">
              <a href="tel:+998998889999" className="hover:underline">
                +998 99 888 99 99
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-white invisible">Lorem ipsum dolor sit ametasaa</p>
          <div className="flex gap-3">
            <Link href="/">
              <FaFacebook className="text-white text-3xl" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-white text-3xl" />
            </Link>
            <Link href="/">
              <FaTelegram className="text-white text-3xl" />
            </Link>
          </div>
          <p className="text-white">
            &copy; {new Date().getFullYear()} | All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
