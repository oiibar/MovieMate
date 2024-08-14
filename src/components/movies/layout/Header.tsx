"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties; // Updated type to React.CSSProperties for better type-checking
}

const Header: React.FC<HeaderProps> = ({ className, style }) => {
  const pathname = usePathname();

  return (
    <header
      className={`bg-cover bg-center bg-no-repeat ${className}`}
      style={style}
    >
      <div className="container py-6 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="MovieMate" width={50} height={50} />
            <h1 className="text-2xl hidden md:block ml-2">MovieMate</h1>
          </div>
        </Link>
        <ul className="flex gap-4 font-bold">
          <Link href="/">
            <li
              className={`cursor-pointer hover:scale-110 text-sm transition-transform duration-150 ${
                pathname === "/" ? "border-b-2 border-orange" : ""
              } `}
            >
              Home
            </li>
          </Link>
          <Link href="/movies">
            <li
              className={`cursor-pointer hover:scale-110 text-sm transition-transform duration-150 ${
                pathname === "/movies" ? "border-b-2 border-orange" : ""
              } `}
            >
              Movies
            </li>
          </Link>
          <Link href="/tvshows">
            <li
              className={`cursor-pointer hover:scale-110 text-sm transition-transform duration-150 ${
                pathname === "/tvshows" ? "border-b-2 border-orange" : ""
              } `}
            >
              TV Shows
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
