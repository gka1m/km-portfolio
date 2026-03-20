"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="text-white shadow-md w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo (Home Button) */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-xl font-bold">Kai Ming</span>
        </Link>

        {/* Right side icons */}
        <div className="flex space-x-6 px-3">
          <Link
            href="https://www.linkedin.com/in/gohkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            href="https://github.com/gka1m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
