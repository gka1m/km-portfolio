"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: "Personal",
    label: "Personal projects",
    sub: "Click here for my own personal projects",
    link: "/projects/personal-projects",
  },
  {
    id: "42",
    label: "42 projects",
    sub: "Click here to view projects completed in 42 Singapore",
    link: "/projects/42-projects",
  },
];

const ExpPage = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <Navbar />
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-16 mt-10"
      >
        My Projects
      </motion.h2>

      <div className="flex justify-center items-center gap-10 mt-10">
        {categories.map((cat, i) => {
          const isHovered = hoveredId === cat.id;
          const otherHovered = hoveredId !== null && !isHovered;

          return (
            <Link key={cat.id} href={cat.link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{
                  opacity: otherHovered ? 0.45 : 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  zIndex: isHovered ? 20 : i === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.6, delay: hoveredId ? 0 : i * 0.2 }}
                style={{
                  position: "relative",
                  zIndex: isHovered ? 20 : i === 0 ? 10 : 5,
                }}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  animate={{
                    y: isHovered ? 0 : [0, -12, 0],
                    scale: isHovered ? 1.08 : 1,
                    borderColor: isHovered
                      ? "rgba(212,212,212,1)"
                      : "rgba(82,82,82,1)",
                  }}
                  transition={{
                    y: {
                      duration: isHovered ? 0.2 : 3 + i,
                      repeat: isHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                    scale: { duration: 0.2 },
                    borderColor: { duration: 0.2 },
                  }}
                  className="w-64 h-64 rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer backdrop-blur-md bg-transparent"
                >
                  <h2 className="text-xl font-semibold pb-3">{cat.label}</h2>
                  <p className="text-base text-neutral-400">{cat.sub}</p>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExpPage;
