import React from "react";
import { experiences } from "../data";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg: justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm">{exp.duration}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
