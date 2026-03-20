"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";

const CV_LINK = "/cv_full.pdf";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-cyan-600">Relevant</span> Experience
      </motion.h1>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg: justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm">{exp.duration}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="font-semibold mb-2">
                {exp.role} - <span>{exp.company}</span>
              </h6>
              <p className="text-sm mb-4">{exp.description}</p>
              {exp.skills.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-12">
        <a
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent text-white font-medium transition-all duration-300 hover:text-cyan-300"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            View CV
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Experience;
