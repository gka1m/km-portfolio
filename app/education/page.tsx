import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

const EducationPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Timeline isSidebarOpen={false} />
    </div>
  );
};

export default EducationPage;
