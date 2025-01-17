// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="text-white shadow-md w-screen">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex space-x-6 px-3">
          <Link
            href="https://www.linkedin.com/in/gohkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
