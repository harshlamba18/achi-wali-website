import Image from "next/image";
import CGSLogo from "../assets/cgslogo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 flex justify-center items-center w-full pt-24 bg-black z-50">
      <div className="border border-pink-700 text-white w-3xl py-4 rounded-full px-8 flex z-50">
        <Image src={CGSLogo} width={48} height={48} alt="logo" />

        <div className="ml-auto flex gap-8 items-center">
          <Link
            href={"#"}
            className="hover:text-pink-400 transition-all duration-150"
          >
            About Us
          </Link>
          <Link
            href={"#"}
            className="hover:text-pink-400 transition-all duration-150"
          >
            Graphics
          </Link>
          <Link
            href={"#"}
            className="hover:text-pink-400 transition-all duration-150"
          >
            GameDev
          </Link>
          <Link
            href={"#"}
            className="hover:text-pink-400 transition-all duration-150"
          >
            Research
          </Link>
        </div>
      </div>
    </div>
  );
}
