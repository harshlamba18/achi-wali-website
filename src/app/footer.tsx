"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import CGSLogo from "./assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="blurry-element blurry-element-1"></div>
      <div className="blurry-element blurry-element-2"></div>
      <div className="blurry-element blurry-element-3"></div>
      <div className="blurry-element blurry-element-4"></div>

      <div className="footer-content">
        <div className="footer-nav">
          <div className="footer-col">
            <Image src={CGSLogo} alt="logo" width={200} height={200} />
          </div>
          <div className="footer-col">
            <h3>Graphics</h3>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Hackathons</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Game Development</h3>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Hackathons</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Research and Development</h3>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Hackathons</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>WebX</h3>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Hackathons</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <span>© {year} Computer Graphics Society</span>
          </div>

          <div className="footer-legal">
            <ul>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
              <li>
                <Link href="#">Status</Link>
              </li>
              <li>
                <Link href="#">Docs</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Cookie Preferences</Link>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <Link href="https://github.com/CGS-IITKGP" className="social-link">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/company/computer-graphics-lab/"
              className="social-link"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://youtube.com/@cgs_iitkgp"
              className="social-link"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://instagram.com/cgs_iitkgp"
              className="social-link"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          position: relative;
          background-color: #0d0d0d;
          color: #f5f5f5;
          padding: 4rem 2rem 2rem;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }

        /* Blurry animated background elements */
        .blurry-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.2;
          z-index: 0;
          transition: all 0.5s ease;
        }

        .blurry-element-1 {
          background: linear-gradient(135deg, #ff3e9d, #ff0069);
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
          animation: float 15s ease-in-out infinite;
        }

        .blurry-element-2 {
          background: linear-gradient(135deg, #ff69b4, #ff1493);
          width: 400px;
          height: 400px;
          bottom: -200px;
          right: -100px;
          animation: float 20s ease-in-out infinite reverse;
        }

        .blurry-element-3 {
          background: linear-gradient(135deg, #ff85a2, #ff3a6f);
          width: 250px;
          height: 250px;
          top: 30%;
          left: 20%;
          animation: pulse 12s ease-in-out infinite;
        }

        .blurry-element-4 {
          background: linear-gradient(135deg, #f06, #ff9ebd);
          width: 200px;
          height: 200px;
          bottom: 20%;
          right: 30%;
          animation: float 18s ease-in-out infinite 2s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -15px) rotate(5deg);
          }
          50% {
            transform: translate(0, 10px) rotate(0deg);
          }
          75% {
            transform: translate(-20px, -5px) rotate(-5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 105, 180, 0.3);
          padding-bottom: 2rem;
        }

        .footer-col {
          flex: 1;
          min-width: 200px;
          margin-bottom: 2rem;
          margin-right: 1rem;
        }

        .footer-col h3 {
          color: #ff69b4;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 0.75rem;
        }

        .footer-col ul li a {
          color: rgba(245, 245, 245, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          position: relative;
          display: inline-block;
        }

        .footer-col ul li a:after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #ff69b4;
          transition: width 0.3s ease;
        }

        .footer-col ul li a:hover {
          color: #ff69b4;
          transform: translateX(3px);
        }

        .footer-col ul li a:hover:after {
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
        }

        .footer-logo {
          margin-right: 1rem;
          font-size: 0.9rem;
          color: rgba(245, 245, 245, 0.7);
        }

        .footer-legal {
          flex: 1;
        }

        .footer-legal ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-legal ul li {
          margin-right: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .footer-legal ul li a {
          color: rgba(245, 245, 245, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }

        .footer-legal ul li a:hover {
          color: #ff69b4;
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
        }

        .social-link {
          color: rgba(245, 245, 245, 0.7);
          font-size: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .social-link:hover {
          color: #0d0d0d;
          background: #ff69b4;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 10px 20px rgba(255, 105, 180, 0.3);
        }

        @media (max-width: 768px) {
          .footer-nav {
            flex-direction: column;
          }

          .footer-col {
            margin-bottom: 2rem;
            width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .footer-legal ul {
            flex-wrap: wrap;
          }

          .footer-legal ul li {
            margin-bottom: 1rem;
          }

          .social-links {
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
