import React, { useState,useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCog, HiOutlineSpeakerphone } from "react-icons/hi";
import { TbChartPie } from "react-icons/tb";
import { BsSearch, BsPeople } from "react-icons/bs";
import { HiOutlineFolder } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineLightMode, MdOutlinePayments } from "react-icons/md";
import {CiDark} from "react-icons/ci"

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeLight= () => {
    if(theme === "dark"){
      setTheme("light" )

    }
    
  };
  const handleThemedark = () => {
    if(theme === "light"){
      setTheme("dark" )
    }
  };

  
  const commonstyles = {
    padding: "0.415rem",
    width: "184.2px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };
  return (
    <div className="flex flex-col p-4 gap-2 shadow-xl h-screen dark:bg-slate-900 dark:text-white">
      <div className="flex  gap-4 items-center mb-10">
        <span className="w-10 h-10 rounded-full bg-indigo-600"></span>

       
       <h1 className=" text-2xl text-indigo-700 font-extrabold">Seltive</h1>
        
        
      </div>
      
      <div>
       
        <ul className="ml-0 mr-0 p-0 list-none text-gray-700">
          <span className="mb-5 p-2 text-sm font-extrabold">STORE</span>
          <Link to="/overview">
            <span
              className="      cursor-pointer   hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold   hover:border-l-gray-500 dark:hover:bg-gray-800"
              style={commonstyles}
            >
              <AiOutlineHome />
              <li>Overview</li>
            </span>
          </Link>

          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <MdOutlinePayments />
            <li>Orders</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <HiOutlineFolder />
            <li>Products</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <BsPeople />
            <li>Customers</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <TbChartPie />
            <li>Analystics</li>
          </span>
          <Link to="/promotion" >
            <span
              className="      cursor-pointer  focus:bg-indigo-50 hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold   hover:border-l-gray-500 dark:hover:bg-gray-800"
              style={commonstyles}
            >
              <HiOutlineReceiptRefund />
              <li>Promotion</li>
            </span>
          </Link>
          <Link to="/marketing" >
            <span
              className="      cursor-pointer  focus:bg-indigo-50 hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold   hover:border-l-gray-500 dark:hover:bg-gray-800"
              style={commonstyles}
            >
              <HiOutlineSpeakerphone />
              <li>Marketing</li>
            </span>
          </Link>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <HiOutlineCog />
            <li>Store setting</li>
          </span>
        </ul>
      </div>
      <div>
        <ul className="list-none text-gray-700">
          <span className="p-2 text-sm font-extrabold">ACCOUNT</span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold  dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <BsSearch />
            <li>Explore</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <HiOutlineFolder />
            <li>Library</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <BsBookmark />
            <li>Saved Items</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 hover:font-extrabold dark:hover:bg-gray-800"
            style={commonstyles}
          >
            <HiOutlineCog />
            <li>Account Settings</li>
          </span>
        </ul>
      </div>
      <div className="flex gap-5 ">
        <span className="w-8 h-8 bg-gray-200 dark:bg-gray-800 cursor-pointer flex items-center justify-center rounded-sm text-2xl" onClick={handleThemedark}>
       <CiDark />
        </span>
        <span className="w-8 h-8 bg-gray-200 dark:bg-gray-800 cursor-pointer flex items-center justify-center rounded-sm text-2xl" onClick={handleThemeLight}>
         <MdOutlineLightMode/>
        </span>
        </div>
    </div>
  );
};

export default Sidebar;
