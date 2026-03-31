"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { motion } from "framer-motion";

const renderDescription = (
  description: string | { intro: string; bullets: string[] },
) => {
  if (typeof description === "object") {
    return (
      <div className="mb-4">
        <p>{description.intro}</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          {description.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <p className="mb-4">{description}</p>;
};

const Projects = () => {
  return (
    <div className="border-b border-transparent pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              {/* <p className="mb-4">{project.description}</p> */}
              {renderDescription(project.description)}
              <Link
                href={project.repo}
                className="m-2 rounded bg-neutral-700 text-sm font-medium px-2 py-1"
                target="_blank"
              >
                View Repository
              </Link>
              <div className="mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 text-sm px-2 py-1 font-medium text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-12">
        <a
          href="/projects"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent text-white font-medium transition-all duration-300 hover:text-cyan-300"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            View Project List
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
