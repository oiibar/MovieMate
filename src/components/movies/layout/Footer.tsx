import Image from "next/image";
import logo from "@/assets/logo.png";
import bg from "@/assets/bg.jpg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container flex flex-col justify-center items-center gap-12 py-16">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="MovieMate" width={50} height={50} />
            <h1 className="text-2xl">MovieMate</h1>
          </div>
        </Link>
        <div className="flex flex-col sm:flex-row sm:gap-20 text-sm sm:text-lg gap-8 items-center">
          <div className="flex sm:flex-col flex-row gap-4 text-primary">
            <a href="#" className="hover:text-orange">
              Home
            </a>
            <a href="#" className="hover:text-orange">
              Contact us
            </a>
            <a href="#" className="hover:text-orange">
              Terms of services
            </a>
            <a href="#" className="hover:text-orange">
              About us
            </a>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 text-primary">
            <a href="#" className="hover:text-orange">
              Live
            </a>
            <a href="#" className="hover:text-orange">
              FAQ
            </a>
            <a href="#" className="hover:text-orange">
              Premium
            </a>
            <a href="#" className="hover:text-orange">
              Privacy Policy
            </a>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 text-primary">
            <a href="#" className="hover:text-orange">
              You must watch
            </a>
            <a href="#" className="hover:text-orange">
              Recent releases
            </a>
            <a href="#" className="hover:text-orange">
              Top IMDB
            </a>
          </div>
        </div>
        <p className="font-medium text-primary">© 2024 MovieMate</p>
      </div>
    </footer>
  );
};

export default Footer;
