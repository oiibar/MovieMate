import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-red-500">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="MovieMate" width={50} height={50} />
          <h1 className="text-2xl">MovieMate</h1>
        </div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Movies</li>
          <li>TV Series</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
