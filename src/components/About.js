import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="px-4 text-4xl font-bold sm:text-right">
            <p>Hi. I'm Son, nice to meet you. Please take a look around</p>
          </div>
          <div className="">
            <p>
              The goal is become a frontend expert in 2 years, become a
              full-stack developer to participate in large projects. Take
              advantages of development skills & experience and understanding of
              process to become a Front-end Developer. From that, I will
              contribute to front-end development. Good at self-study and
              improve knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
