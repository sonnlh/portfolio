import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { FaBars, FaTimes, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] justify-between flex items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px", height: "80px" }} />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='education' smooth={true} duration={500}>Education</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
      {/* Hamburger */}
      <div className="z-10 md:hidden" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="facebook.com/son.hong.102/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/sonnlh"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BB001B]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
