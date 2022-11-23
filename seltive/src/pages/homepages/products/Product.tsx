import React from "react";

import {BiPlus} from "react-icons/bi"
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import ProductTable from "./ProductTable";

const Product = () => {
  return (
      <>
      <div className="flex justify-between items-center mb-5 mt-3 min-w-[1200px] " >
        <div>
          <h1 className="text-3xl mt-2 dark:text-indigo-600 dark:font-semibold">
            Products
          </h1>
          <span className="text-gray-400">
            View all your store’s products catalogue 
          </span>
        </div>
        <div className="flex  items-center justify-center w-[17%] text-white bg-indigo-600 gap-1 p-1.5 rounded-sm cursor-pointer">
        <BiPlus className="text-xl"/>
        <input type="button" value="Create New Product" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col p-5 bg-white rounded-md shadow-sm min-w-[1200px] dark:bg-slate-900 dark:text-gray-500">
        <div className="flex justify-between items-center gap-5 mb-5">
          <div className="flex justify-between items-center border border-gray-500 rounded-md overflow-auto bg-white dark:border-2 dark:border-indigo-600">
            <span className=" p-1">
              <GoSearch className="dark:text-indigo-600" />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for order ID, customer name or email etc"
              className="w-[350px] outline-none p-1"
            />
          </div>
          <div className="flex gap-5">
            <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600  text-white rounded-sm">
              <button className="">Filter</button>
              <RiArrowDownSLine className=" cursor-pointer" />
            </span>

            <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600  text-white rounded-sm">
              <HiOutlineDocumentArrowDown className=" cursor-pointer" />
              <button className="">Export</button>
            </span>
          </div>
        </div>
        <ProductTable />

      </div>

      </>
  );
};

export default Product;
