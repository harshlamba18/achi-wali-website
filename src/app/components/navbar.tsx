import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full px-4 py-2 flex items-center">
      <div>
        <Image src={Logo} alt="logo" width={64} height={64} />
      </div>
      <div className="mx-auto"></div>
      <div className="flex flex-row items-center gap-8 bg-gray-300/20 px-8 py-4 rounded-xl shadow-2xl">
        {["Team", "Game Dev", "Graphics", "Research", "Contact"].map(
          (i, key) => (
            <div key={key} className="font-bold text-white">
              <Link
                href={"#"}
                className="cursor-pointer hover:text-pink-300 duration-200 transition-all"
              >
                {i}
              </Link>
            </div>
          )
        )}

        <Link
          href="https://github.com/CGS-IITKGP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black px-3 py-1 rounded-full hover:bg-gray-800 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span className="text-white font-semibold">GitHub</span>
        </Link>
      </div>
    </div>
  );
}
