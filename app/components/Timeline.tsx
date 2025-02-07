"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer motion
import { timelineData } from "../data";

interface TimelineProps {
  isSidebarOpen: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isSidebarOpen }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Step 1: Check localStorage for animation state on page load
    const isFirstVisit = localStorage.getItem("hasAnimated");

    // Step 2: If animations haven't been played, set it to true and update localStorage
    if (!isFirstVisit) {
      setHasAnimated(true);
      localStorage.setItem("hasAnimated", "true");
    }
  }, []);

  return (
    <div
      className={`border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35 transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : ""
      }`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="my-20 text-white text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="intrinsic">
        {timelineData.map((event, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            key={event.id}
            initial={{ opacity: 0, x: -100 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            className="flex items-center mb-10"
          >
            <Circle />
            {/* <Connector position={"top"} /> */}

            <div className="ml-6 flex-grow">
              <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
                <h3 className="text-white font-semibold text-xl underline">
                  {event.title}
                </h3>
                <p className="text-white mt-2">{event.description}</p>
                <p className="text-gray-500 mt-2">
                  {event.date} | {event.location}
                </p>
              </div>
            </div>
          </motion.div>
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
