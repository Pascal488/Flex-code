import React from "react";

import { BsArrowRightShort } from "react-icons/bs";
import Card from "../../components/Card";
import Header from "../../components/Header";

const HomeExplore = (props:any) => {

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
      <Header />

      <div className="p-5 w-full ">
        <div className="ml-24 md:ml-0 ">
          <h1 className="text-gray-500 font-semibold ">EXPLORE SELTIVE</h1>
          <p className="text-4xl md:text-sm mb-2 md:max-w-[200px]">
            Discover the best content for entertainment, education,
            <br /> or assets for your next project.
          </p>
        </div>

        <div className="flex items-center justify-around w-full gap-2  md:flex-col md:justify-center ">
          <div className="flex flex-col p-5 bg-white shadow-md md:w-[245px]">
            <h1>Animations</h1>
            <span>Movies, tutorials, rigs, and assets</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
          <div className="flex flex-col p-5 bg-white shadow-md md:w-[245px]">
            <h1>Apps & Software</h1>
            <span>Plugins, Extentions, Source Code etc.</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
          <div className="flex flex-col p-5 bg-white shadow-md md:w-[250px]">
            <h1>Books & Writing</h1>
            <span>Stories, Articles, Guides, etc.</span>
            <span style={commonstyles.container}>
              <span style={commonstyles.textsm}>EXPLORE </span>
              <BsArrowRightShort />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white w-full p-7 md:p-0 ">
        <h1 className="ml-20 md:p-2 md:text-center md:ml-0 font-extrabold text-indigo-600">
          TRENDING CONTENT TODAY
        </h1>

        <div className="flex flex-wrap justify-around ml-10 md:ml-0  mt-4 gap-6 md:items-center  md:justify-center md:flex md:flex-col">
          <Card {...props} />
         
        </div>
      </div>
    </>
  );
};

export default HomeExplore;
