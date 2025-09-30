import {
  Arima,
  Bitcount_Prop_Single,
  Righteous,
  Roboto,
  Rowdies,
  Ubuntu,
} from "next/font/google";
import Image from "next/image";

import BgHero from "./assets/bg-hero.png";
import Navbar from "./components/navbar";
import FeaturedProjects from "./featuredprojects";
import Footer from "./footer";

const heading_font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const paragraph_font = Roboto({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-neutral-900 to-gray-950">
      {/* <div className="w-full h-screen grid grid-cols-2 text-white">
        <div className="w-full h-full grid grid-rows-3">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full grid grid-rows-3">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
              <div className="flex p-4 gap-4">
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
                <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
              <div className="w-full h-full bg-pink-100/10 border-2 border-pink-400/40 hover:bg-pink-300/50 transition-all duration-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div> */}
      <section
        className="h-screen w-full flex flex-col justify-center items-center z-10"
        style={{
          backgroundImage: `url(${BgHero.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <h1
          className={`text-9xl fade-in max-w-6xl text-center ${heading_font.className} bg-gradient-to-tr from-white to-pink-600 bg-clip-text text-transparent`}
        >
          Computer Graphics Society
        </h1>

        <p
          className={`text-gray-500 fade-in-2 text-2xl max-w-4xl text-center font-bold mt-4 ${paragraph_font.className}`}
        >
          We, the Computer Graphics Society at IIT Kharagpur, are a passionate
          group of students dedicated to exploring the world of game development
          using Unity and Unreal engines.
        </p>

        <p className="text-gray-500 relative top-32">
          <span className="inline-flex flex-col items-center animate-bounce">
            <svg
              className="w-8 h-8 text-pink-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="mt-2 text-pink-400 font-semibold">
              Scroll Down
            </span>
          </span>
        </p>
      </section>

      <FeaturedProjects />

      <Footer />
    </div>
  );
}
