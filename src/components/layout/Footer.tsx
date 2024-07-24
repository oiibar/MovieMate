import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import bg from "@/assets/bg.jpg";

const Footer = () => {
  return (
    <footer className="bg-orange-600">
      <div className="container flex flex-col justify-center items-center gap-12 py-16">
        <div className="flex items-center">
          <Image src={logo} alt="MovieMate" width={50} height={50} />
          <h1 className="font-bold text-2xl">MovieMate</h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <p>Home</p>
            <p>Contact us</p>
            <p>Term of services</p>
            <p>About us</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Live</p>
            <p>FAQ</p>
            <p>Premium</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>You must watch</p>
            <p>Recent release</p>
            <p>Top IMDB</p>
          </div>
        </div>
        <p className="font-medium">© 2024 MovieMate</p>
      </div>
    </footer>
  );
};

export default Footer;
