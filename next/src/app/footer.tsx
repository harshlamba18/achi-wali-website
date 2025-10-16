"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import CGSLogo from "./assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-100 pt-16 pb-8 px-8 overflow-hidden font-sans">
      {/* Blurry animated background elements */}
      <div className="absolute w-[300px] h-[300px] -top-[100px] -left-[100px] rounded-full opacity-20 z-0 bg-gradient-to-br from-pink-400 to-pink-600 blur-[70px] animate-footer-float-1"></div>
      <div className="absolute w-[400px] h-[400px] -bottom-[200px] -right-[100px] rounded-full opacity-20 z-0 bg-gradient-to-br from-pink-300 to-pink-500 blur-[70px] animate-footer-float-2"></div>
      <div className="absolute w-[250px] h-[250px] top-[30%] left-[20%] rounded-full opacity-20 z-0 bg-gradient-to-br from-pink-400 to-pink-600 blur-[70px] animate-footer-float-3"></div>
      <div className="absolute w-[200px] h-[200px] bottom-[20%] right-[30%] rounded-full opacity-20 z-0 bg-gradient-to-br from-pink-500 to-pink-400 blur-[70px] animate-footer-float-4"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between mb-12 border-b border-pink-300/30 pb-8">
          <div className="flex-1 min-w-[200px] mb-8 mr-4">
            <Image src={CGSLogo} alt="logo" width={200} height={200} />
          </div>

          <div className="flex-1 min-w-[200px] mb-8 mr-4">
            <h3 className="text-pink-300 text-base font-semibold mb-4 uppercase tracking-wider">
              Graphics
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Team
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Hackathons
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  News
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mb-8 mr-4">
            <h3 className="text-pink-300 text-base font-semibold mb-4 uppercase tracking-wider">
              Game Development
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Team
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Hackathons
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  News
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mb-8 mr-4">
            <h3 className="text-pink-300 text-base font-semibold mb-4 uppercase tracking-wider">
              Research and Development
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Team
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Hackathons
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  News
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mb-8 mr-4">
            <h3 className="text-pink-300 text-base font-semibold mb-4 uppercase tracking-wider">
              WebX
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Team
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Hackathons
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  News
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-gray-300/80 no-underline text-sm transition-all duration-200 relative inline-block hover:text-pink-300 hover:translate-x-1 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-pink-300 after:transition-all after:duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-6">
          <div className="mr-4 text-sm text-gray-300/70">
            <span>© {year} Computer Graphics Society</span>
          </div>

          <div className="flex-1">
            <ul className="flex flex-wrap list-none p-0 m-0">
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Terms
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Privacy
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Security
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Status
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Docs
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li className="mr-6 mb-2">
                <Link
                  href="#"
                  className="text-gray-300/70 no-underline text-xs transition-colors duration-200 hover:text-pink-300 hover:underline"
                >
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-5">
            <Link
              href="https://github.com/CGS-IITKGP"
              className="text-gray-300/70 text-2xl transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:text-gray-900 hover:bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-pink-300/30"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/company/computer-graphics-lab/"
              className="text-gray-300/70 text-2xl transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:text-gray-900 hover:bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-pink-300/30"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://youtube.com/@cgs_iitkgp"
              className="text-gray-300/70 text-2xl transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:text-gray-900 hover:bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-pink-300/30"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://instagram.com/cgs_iitkgp"
              className="text-gray-300/70 text-2xl transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:text-gray-900 hover:bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-pink-300/30"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
