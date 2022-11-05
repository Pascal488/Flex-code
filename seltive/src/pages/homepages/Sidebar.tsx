import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";
import { TbChartPie } from "react-icons/tb";
import { BsSearch, BsPeople } from "react-icons/bs";
import { HiOutlineFolder } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const Sidebar = () => {
  
  const commonstyles = {
    padding:'0.415rem',
    width:"184.2px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };
  return (
    <div className="flex flex-col p-4 gap-2 shadow-xl h-screen">
      <div className="flex  gap-4 items-center mb-10">
        <span className="w-10 h-10 rounded-full bg-indigo-600"></span>

        <h1 className=" text-2xl text-indigo-700 font-extrabold">Seltive</h1>
      </div>

      <div >
        <ul className="ml-0 mr-0 p-0 list-none text-gray-700">
          <span className="mb-5 p-2 text-sm font-extrabold">STORE</span>
          <span
            className="cursor-pointer  hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold   hover:border-l-gray-500"
            style={commonstyles}
          >
            <AiOutlineHome />
            <li>Overview</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <BsBookmark />
            <li>Orders</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <HiOutlineFolder />
            <li>Products</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <BsPeople />
            <li>Customers</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <TbChartPie />
            <li>Analystics</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <HiOutlineReceiptRefund />
            <li>Promotion</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <AiOutlineHome />
            <li>Marketing</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
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
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <BsSearch />
            <li>Explore</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <HiOutlineFolder />
            <li>Library</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <BsBookmark />
            <li>Saved Items</li>
          </span>
          <span
            className=" cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold"
            style={commonstyles}
          >
            <HiOutlineCog />
            <li>Account Settings</li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
