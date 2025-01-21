import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import "./globals.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
    </div>
  );
};

export default Homepage;
