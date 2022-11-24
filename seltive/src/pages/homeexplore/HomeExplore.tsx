import React from "react";
import { CiDark } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const HomeExplore = () => {
  const commonstyles = {
    container: {
      display: "flex",
      alignItems: "center",
      color: "rgb(79 70 229)",
      fontWeight: "700",
      cursor: "pointer",
    },
    textsm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  };
  return (
    <>
      <div className="flex items-center gap-5 p-3 w-full justify-around bg-white shadow-sm">
        <div className="flex  gap-4 items-center ">
          <span className="relative md:hidden flex flex-col gap-2 w-10 h-10 rounded-full bg-indigo-600">
            <span className="absolute bottom-5 left-1  rotate-[145deg] w-[30px] p-[3px] rounded-md h-[2px] bg-green-200 "></span>
            <span className="absolute  bottom-3 left-2   rotate-[145deg] w-[29px] p-[3px]  rounded-md h-[2px] bg-red-200"></span>
          </span>
          <h1 className=" text-2xl text-indigo-700 font-extrabold">Seltive</h1>
        </div>
        <div className="md:hidden md:w-full md:justify-center flex items-center bg-indigo-50 justify-around w-[35%] rounded-sm py-1 px-4">
          <span className="flex items-center gap-2">
            Explore
            <RiArrowDownSLine className="text-xl cursor-pointer" />
          </span>
          <input
            type="text"
            placeholder="Search products"
            className="outline-none w-full p-1 bg-transparent"
          />
          <GoSearch className="text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-5 text-white ">
          <span className="w-8 h-8 bg-indigo-600 dark:bg-gray-800  flex items-center justify-center rounded-sm text-2xl">
            <CiDark />
          </span>
          <span className="w-8 h-8 bg-indigo-600 dark:bg-gray-800  flex items-center justify-center rounded-sm text-2xl">
            <MdOutlineLightMode />
          </span>
          <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600   rounded-sm">
            <Link to="/signup">
              <button className="">Register</button>
            </Link>
          </span>
          <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600  rounded-sm">
            <Link to="/login">
              <button className="">Login</button>
            </Link>
          </span>
        </div>
      </div>
      <div className="p-5 w-full ">
        <div className="ml-24">
          <h1 className="text-gray-500 font-semibold ">EXPLORE SELTIVE</h1>
          <p className="text-4xl md:text-sm mb-2">
            Discover the best content for entertainment, education,
            <br /> or assets for your next project.
          </p>
        </div>

        <div className="flex items-center justify-around w-full gap-2  md:flex-col ">
          <div className="flex flex-col p-5 bg-white shadow-md">
            <h1>Animations</h1>
            <span>Movies, tutorials, rigs, and assets</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
          <div className="flex flex-col p-5 bg-white shadow-md">
            <h1>Apps & Software</h1>
            <span>Plugins, Extentions, Source Code etc.</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
          <div className="flex flex-col p-5 bg-white shadow-md">
            <h1>Books & Writing</h1>
            <span>Stories, Articles, Guides, etc.</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExplore;
