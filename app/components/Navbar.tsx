// components/Navbar.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="text-white shadow-md w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex space-x-6 px-3">
          <Link
            href="https://www.linkedin.com/in/gohkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/gka1m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-full transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <Link href="/education" className="hover:text-cyan-600">
            <FaGraduationCap size={24} className="inline m-4" />
            My Journey
          </Link>
          <Link href="/experience" className="hover:text-cyan-600">
            <FaBriefcase size={24} className="inline m-4" />
            Experience & Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
