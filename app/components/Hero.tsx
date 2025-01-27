"use client";
import React from "react";
import { motion } from "framer-motion";
import { summary } from "../data";
import Image from "next/image";
import profile_pic from "../../public/profile_pic.jpg";

const Hero = () => {
  const settings = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={settings(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
            >
              Goh Kai Ming
            </motion.h1>
            <motion.span
              variants={settings(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Aspiring Fullstack Programmer
            </motion.span>
            <motion.p
              variants={settings(1)}
              initial="hidden"
              animate="visible"
              className="text-white py-10 tracking-tight font-light text-justify"
            >
              {summary}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
            >
              <Image
                src={profile_pic}
                alt="KM"
                layout="intrinsic"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
