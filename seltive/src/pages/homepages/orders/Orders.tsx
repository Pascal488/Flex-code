import React from "react";

import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Orders = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl mt-2 dark:text-indigo-600 dark:font-semibold">
          Orders
        </h1>
        <span className="text-gray-400">
          View all purchases orders made to your store
        </span>
      </div>

      <div className="flex justify-between items-center gap-5 p-5 bg-white rounded-md shadow-sm min-w-[1200px] dark:bg-slate-900 dark:text-gray-500">
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
    </div>
  );
};

export default Orders;
