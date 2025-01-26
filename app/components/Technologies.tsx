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

const Technologies = () => {
  return (
    <div className="border-b border-transparent pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      {/* Container wrapping both sections */}
      <div className="flex flex-col gap-6 p-10 justify-center items-center">
        {/* Languages */}
        <div className="grid grid-cols-2 gap-6 items-center">
          <span className="text-xl font-semibold w-40">Languages</span>
          <div className="flex gap-6 items-center">
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <FaPython className="text-3xl" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <SiCodio className="text-3xl text-blue-600" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <RiHtml5Fill className="text-3xl text-orange-600" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <FaCss3Alt className="text-3xl text-blue-500" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <RiJavascriptFill className="text-3xl text-yellow-600" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <SiTypescript className="text-3xl text-blue-700" />
            </div>
          </div>
        </div>

        {/* Frameworks (now aligned with Languages) */}
        <div className="grid grid-cols-2 gap-6 items-center">
          <span className="text-xl font-semibold w-40 items-center">
            Frameworks
          </span>
          <div className="flex gap-6 items-center">
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <RiReactjsLine className="text-3xl text-blue-400" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <SiVite className="text-3xl text-white" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <RiNextjsLine className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
