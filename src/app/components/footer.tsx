import { Squada_One } from "next/font/google";
import CGSLogo from "../assets/logo.png";
import Wave1 from "../assets/wave-1.svg";
import Wave2 from "../assets/wave-2.svg";
import Wave3 from "../assets/wave-3.svg";
import Image from "next/image";

const squade_font = Squada_One({
  weight: "400",
});

export default function Footer() {
  return (
    <div className="relative w-full">
      <Image
        src={Wave1}
        alt="wave"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <Image
        src={Wave2}
        alt="wave"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <Image
        src={Wave3}
        alt="wave"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div className="relative z-10 w-full bg-stone-900/40 flex py-8 px-48">
        <div className="flex flex-col justify-center items-baseline-last gap-4">
          <div className="flex justify-center items-center">
            <Image src={CGSLogo} alt="logo" />
            <h1 className={`text-8xl font-mono ${squade_font.className}`}>
              CGS
            </h1>
          </div>
          <div className="max-w-4xl mt-2 flex flex-col gap-4">
            <h1 className="text-4xl">Computer Graphics Society</h1>
            <p className="max-w-5/6 text-xl">
              Indian Institute of Technology, Kharagpur, West Bengal - 721302
            </p>
          </div>
          <div className="flex gap-8 w-2/3 justify-center mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors group-hover:fill-white"
              >
                <circle cx="24" cy="24" r="24" fill="#1877F3" />
                <path
                  d="M32 24h-5v12h-5V24h-3v-4h3v-2c0-2.2 1.3-5 5-5h4v4h-3c-.6 0-1 .4-1 1v2h4l-1 4z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors group-hover:fill-white"
              >
                <circle cx="24" cy="24" r="24" fill="url(#insta-gradient)" />
                <defs>
                  <radialGradient
                    id="insta-gradient"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    fx="0.5"
                    fy="0.5"
                  >
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FF0080" />
                    <stop offset="100%" stopColor="#FF5A00" />
                  </radialGradient>
                </defs>
                <rect
                  x="14"
                  y="14"
                  width="20"
                  height="20"
                  rx="6"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="5"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle cx="31" cy="17" r="1.5" fill="#fff" />
              </svg>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors group-hover:fill-white"
              >
                <circle cx="24" cy="24" r="24" fill="#fff" />
                <path
                  d="M39.6 24.2c0-1.3-.1-2.5-.4-3.6H24v6.8h8.7c-.4 2.1-1.7 3.8-3.7 5v4h6c3.5-3.2 5.6-7.9 5.6-13.2z"
                  fill="#4285F4"
                />
                <path
                  d="M24 40c4.8 0 8.8-1.6 11.7-4.3l-6-4c-1.6 1.1-3.7 1.8-5.7 1.8-4.4 0-8.1-3-9.4-7.1h-6v4.4C8.8 36.7 15.9 40 24 40z"
                  fill="#34A853"
                />
                <path
                  d="M14.6 26.4c-.4-1.1-.6-2.2-.6-3.4s.2-2.3.6-3.4v-4.4h-6C7.2 17.8 6 20.8 6 24s1.2 6.2 3.2 8.8l6-4.4z"
                  fill="#FBBC05"
                />
                <path
                  d="M24 15.8c2.6 0 4.9.9 6.7 2.6l5-5C32.8 10.6 28.8 8.8 24 8.8c-8.1 0-15.2 3.3-18.8 8.8l6 4.4c1.3-4.1 5-7.1 9.4-7.1z"
                  fill="#EA4335"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors group-hover:fill-white"
              >
                <circle cx="24" cy="24" r="24" fill="#0077B5" />
                <rect
                  x="15"
                  y="20"
                  width="3"
                  height="10"
                  rx="1.5"
                  fill="#fff"
                />
                <circle cx="16.5" cy="17.5" r="1.5" fill="#fff" />
                <rect
                  x="21"
                  y="20"
                  width="3"
                  height="10"
                  rx="1.5"
                  fill="#fff"
                />
                <path
                  d="M28 20c-2 0-3 1.3-3 3v7h3v-6c0-.7.3-1 1-1s1 .3 1 1v6h3v-7c0-1.7-1.3-3-3-3z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="ml-auto w-full flex pt-24 pr-24">
          <div className="ml-auto grid grid-cols-2 gap-24">
            <div className="">
              <h1 className="text-2xl font-bold">Our Work</h1>

              <ul className="mt-4">
                <li className="mb-2">Graphics</li>
                <li className="mb-2">GameDev</li>
                <li className="mb-2">Research</li>
                <li className="mb-2">WebX</li>
              </ul>
            </div>

            <div className="">
              <h1 className="text-2xl font-bold">Company</h1>

              <ul className="mt-4">
                <li className="mb-2">About us</li>
                <li className="mb-2">Team</li>
                <li className="mb-2">Joining</li>
                <li className="mb-2">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
