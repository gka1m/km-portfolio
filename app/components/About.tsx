"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import graduation from "../../public/graduation.jpg";
import { about } from "../data";

const About = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-white text-center text-4xl"
      >
        About <span className="text-cyan-600">Me</span>
      </motion.h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <Image
              src={graduation}
              alt="graduation"
              layout="intrinsic"
              width={480}
              height={640}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <p className="text-white tracking-tight font-light items-center text-justify">
              {about.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
