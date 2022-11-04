import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";
import { TbChartPie } from "react-icons/tb";
import { BsSearch, BsPeople } from "react-icons/bs";
import { HiOutlineFolder } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const Sidebar = () => {
  
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="flex  gap-4 items-center mb-10">
        <span className="w-10 h-10 rounded-full bg-indigo-800"></span>

        <h1 className="text-2xl text-indigo-700">Seltive</h1>
      </div>

      <div>
        <ul className="list-none text-gray-700">
          <span className="mb-5 p-2 text-sm font-extrabold">STORE</span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer  hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <AiOutlineHome />
            <li>Overview</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <BsBookmark />
            <li>Orders</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <HiOutlineFolder />
            <li>Products</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <BsPeople />
            <li>Customers</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <TbChartPie />
            <li>Analystics</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <HiOutlineReceiptRefund />
            <li>Promotion</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <AiOutlineHome />
            <li>Marketing</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <HiOutlineCog />
            <li>Store setting</li>
          </span>
        </ul>
      </div>
      <div>
        <ul className="list-none text-gray-700">
          <span className="mb-5 p-2 text-sm font-extrabold">ACCOUNT</span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer  hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <BsSearch />
            <li>Explore</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <HiOutlineFolder />
            <li>Library</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <BsBookmark />
            <li>Saved Items</li>
          </span>
          <span className="p-1.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 hover:text-indigo-700 hover:font-extrabold">
            <HiOutlineCog />
            <li>Account Settings</li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
