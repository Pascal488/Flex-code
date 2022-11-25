import React from "react";

import { BsArrowRightShort } from "react-icons/bs";
import Card from "../../components/Card";
import Header from "../../components/Header";

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
   
    <Header/>

   
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
      <div className="bg-white w-full p-7 ">
        <h1 className="ml-20 font-extrabold text-indigo-600">TRENDING CONTENT TODAY</h1>
        <div >
        <div className='flex flex-wrap justify-around ml-10 mt-4 gap-6 md:items-center  md:justify-center md:flex md:flex-col'>
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
        </div>
      </div>
      </div>


    </>
  );
};

export default HomeExplore;
