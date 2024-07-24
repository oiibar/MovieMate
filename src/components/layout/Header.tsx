"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-transparent">
      <div className="container py-6 flex justify-between items-center">
        <Link href="/home">
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="MovieMate" width={50} height={50} />
            <h1 className="text-2xl">MovieMate</h1>
          </div>
        </Link>
        <ul className="flex gap-4 font-bold">
          <Link href="/home">
            <li
              className={`cursor-pointer ${
                pathname === "/home" ? "border-b-2 border-orange" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/movies">
            <li
              className={`cursor-pointer ${
                pathname === "/movies" ? "border-b-2 border-orange" : ""
              }`}
            >
              Movies
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
