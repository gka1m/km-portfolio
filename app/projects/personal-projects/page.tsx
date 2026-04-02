import React from "react";
import { personal } from "@/app/personal_proj";

const PersonalPage = () => {
  return (
    <div className="w-full px-6 py-16 lg:px-24 justify-start">
      {/* back link */}
      <a
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm text-white hover:text-cyan-300 transition-colors mb-12"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        Back to Project Home
      </a>

      <h2 className="text-5xl">Personal Projects</h2>
      {/* table goes here */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-grey-700 border-b border-neutral-700 text-left">
            <tr>
              <th className="px-6 py-4 text-base font-semibold">Project</th>
              <th className="px-6 py-4 text-base font-semibold">Description</th>
              <th className="px-6 py-4 text-base font-semibold">Tech Stack</th>
              <th className="px-6 py-4 text-base font-semibold">Link</th>
            </tr>
          </thead>

          <tbody>
            {personal.map((proj, index) => (
              <tr
                key={index}
                className="border-b border-neutral-700 hover:bg-neutral-800 transition-colors"
              >
                <td className="px-6 py-4 border-r border-neutral-700">
                  {proj.name}
                </td>
                <td className="px-6 py-4 border-r border-neutral-700 text-neutral-100">
                  {proj.description}
                </td>
                <td className="px-6 py-4 border-r border-neutral-700">
                  <div className="flex flex-wrap gap-2">
                    {proj.techstack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 border-r border-neutral-700 text-neutral-100">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="group inline-flex items-center gap-1 hover:text-cyan-400"
                  >
                    Link
                    <span className="transition-all duration-200 ease-out opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalPage;
