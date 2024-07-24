"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string; // Optional className prop
  style?: object;
}

const Header: React.FC<HeaderProps> = ({ className, style }) => {
  const pathname = usePathname();

  return (
    <header
      className={`bg-cover bg-center bg-no-repeat ${className}`}
      style={style}
    >
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
          <Link href="/series">
            <li
              className={`cursor-pointer ${
                pathname === "/series" ? "border-b-2 border-orange" : ""
              }`}
            >
              TV Series
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
