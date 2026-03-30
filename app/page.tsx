import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Hero />
        </div>

        {/* RIGHT SIDE (SCROLLABLE) */}
        <div className="w-full lg:w-1/2 overflow-y-auto no-scrollbar">
          <About />
          {/* future sections */}
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
