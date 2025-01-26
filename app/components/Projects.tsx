import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="border-b border-transparent pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4">{project.description}</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
