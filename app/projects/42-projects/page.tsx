import React from "react";

const FortyTwoProj = () => {
  return (
    <div className="w-full px-6 py-16 lg:px-24 justify-start">
      {/* back link */}
      <a
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm text-white hover:text-cyan-300 transition-colors mb-12"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        Back to Project Home
      </a>

      <h2 className="text-5xl">42 Projects</h2>
      {/* table goes here */}
    </div>
  );
};

export default FortyTwoProj;
