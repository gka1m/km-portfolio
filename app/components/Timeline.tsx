// components/Timeline.tsx
"use client";
import React from "react";
import { timelineData } from "../data";

interface TimelineProps {
  isSidebarOpen: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isSidebarOpen }) => {
  return (
    <div
      className={`border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35 transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : "" // Shift content right when sidebar is open
      }`}
    >
      <h2 className="my-20 text-white text-center text-4xl">Education</h2>
      <div className="intrinsic">
        {timelineData.map((event) => (
          <div key={event.id} className="flex items-center mb-10">
            <Circle />
            <div className="ml-6 flex-grow">
              <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
                <h3 className="text-white font-semibold text-xl underline">
                  {event.title}
                </h3>
                <p className="text-gray-400">{event.location}</p>
                <p className="text-white mt-2">{event.description}</p>
                <p className="text-gray-500 mt-2">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Circle = () => {
  return (
    <div className="intrinsic">
      <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Timeline;
