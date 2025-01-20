import React from "react";
import Image from "next/image";
import graduation from "../../public/graduation.jpg";
import { about } from "../data";

const About = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4">
      <h2 className="my-20 text-white text-center text-4xl">
        About <span className="text-cyan-600">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex items-center justify-center">
            <Image
              src={graduation}
              alt="graduation"
              layout="intrinsic"
              width={480}
              height={640}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="text-white tracking-tight font-light pr-8 text-justify">
              {about.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
