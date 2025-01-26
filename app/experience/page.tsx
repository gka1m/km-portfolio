import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";

const ExpPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Technologies />
      <Experience />
      <Projects />
    </div>
  );
};

export default ExpPage;
