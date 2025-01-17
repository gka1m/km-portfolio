import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./globals.css";

const Homepage = () => {
  return (
    <div>
      {/* <p className="text-cyan-50">Homepage</p> */}
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
