import React from "react";
import { summary } from "../data";
import Image from "next/image";
import profile_pic from "../../public/profile_pic.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
              Goh Kai Ming
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Aspiring Fullstack Programmer
            </span>
            <p className="text-white py-10 tracking-tight font-light text-justify">
              {summary}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <Image
              src={profile_pic}
              alt="KM"
              layout="intrinsic"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
