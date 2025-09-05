import Image from "next/image";
import Navbar from "./components/navbar";
import glowingCircle from "./assets/glowing-circle.svg";
import { Roboto } from "next/font/google";
import Footer from "./components/footer";

const roboto_font = Roboto({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      <div className="absolute flex w-full top-0 left-0 justify-center items-center z-0">
        <Image src={glowingCircle} alt="glow" className="opacity-70" />
      </div>
      <Navbar />

      <div className="mt-48 w-full h-screen flex flex-col gap-8 grow px-48">
        <h1 className={`text-8xl ${roboto_font.className} tracking-wide`}>
          Computer Graphics <br /> Society
        </h1>

        <p className="text-3xl max-w-2/3">
          Exploring the future of game development and immersive tech — from
          graphics and shadersto VR, AR, and blockchain gaming.
        </p>
      </div>

      <Footer />
    </div>
  );
}
