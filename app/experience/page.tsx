import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";

const ExpPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Technologies />
      <Experience />
    </div>
  );
};

export default ExpPage;
