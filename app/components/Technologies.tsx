"use client";
import React from "react";
import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsLine,
  RiReactjsLine,
} from "react-icons/ri";
import { FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiCodio, SiTypescript, SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  });

  return (
    <div className="border-b border-transparent pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology Stacks
      </motion.h2>

      {/* Container wrapping both sections */}
      <div className="flex flex-col items-center gap-16 p-10">
        {/* Languages */}
        <div className="flex flex-col items-center">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold mb-6"
          >
            Languages
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <FaPython className="text-3xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <SiCodio className="text-3xl text-blue-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <RiHtml5Fill className="text-3xl text-orange-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <FaCss3Alt className="text-3xl text-blue-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <RiJavascriptFill className="text-3xl text-yellow-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <SiTypescript className="text-3xl text-blue-700" />
            </motion.div>
          </motion.div>
        </div>

        {/* Frameworks */}
        <div className="flex flex-col items-center">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold mb-6"
          >
            Frameworks/Libraries
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-3xl text-blue-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <SiVite className="text-3xl text-white" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <RiNextjsLine className="text-3xl text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Other Skills section */}
        <div className="flex flex-col items-center">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold mb-6"
          >
            Other Skills
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <FaGitAlt className="text-3xl text-orange-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <FaGithub className="text-3xl text-purple-700" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-2 border-neutral-800 p-4"
            >
              <FcLinux className="text-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
