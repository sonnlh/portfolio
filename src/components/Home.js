import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Son Nguyen Luu Hong{" "}
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer. Have over 6 months of experiences as a
          Frontend developer. Quite good in HTML/CSS, Javascript framework
          (ReactJS), CSS framework (Tailwind CSS). Passionate about researching
          frontend framework.
        </p>
        <div>
          <button className="flex items-center px-6 py-3 my-2 text-white border-2 hover:border-pink-600 hover:bg-pink-600">
            <Link to="experience" smooth={true}>
              View Experience
            </Link>
            <span className="duration-300 hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
