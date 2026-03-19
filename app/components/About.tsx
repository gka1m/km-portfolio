"use client";
import React from "react";
import { motion } from "framer-motion";
import { about } from "../data";

const About = () => {
  return (
    <div className="border-b border-transparent pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-white text-center text-4xl"
      >
        About <span className="text-cyan-600">Me</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6"
      >
        <p className="text-white tracking-tight font-light text-justify leading-relaxed text-lg">
          {about.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
