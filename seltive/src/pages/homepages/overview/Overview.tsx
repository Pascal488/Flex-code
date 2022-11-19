import React from "react";
import { BsPeople, BsCart3 } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Table.css";
import Overviewtable from "./Overviewtable";
import Mostviewedproduct from "./Mostviewedproduct";

const Overview = () => {
  return (
    <div >
      <div className="mb-2">
        <h1 className="text-3xl mt-2">Overview</h1>
        <span className="text-gray-600">
          Summary of your store for March 4, 2022
        </span>
      </div>

      <div className="mb-5 md:flex-col  flex w-full justify-center ">
        <div className="flex-1 flex flex-wrap gap-5 ">
          <div className="transition ease-in-out delay-150 bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm hover:scale-105 hover:duration-300 cursor-pointer dark:bg-slate-900">
            <span>
              <h1 className="font-extrabold">Earnings</h1>
              <p className="text-sm">Updated 15 minutes ago</p>
            </span>
            <span>
              <p className="text-3xl text-indigo-600 font-semibold">
                TZS 50,000
              </p>
            </span>
          </div>
          <div className="transition ease-in-out delay-150 bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm hover:scale-105 hover:duration-300 cursor-pointer dark:bg-slate-900">
            <span>
              <h1 className="font-extrabold">Unique Visitors</h1>
              <p className="text-sm">Updated 15 minutes ago</p>
            </span>
            <span>
              
              <p className="text-3xl text-indigo-600 font-semibold">1000</p>
            </span>
          </div>
          <div className="transition ease-in-out delay-150 bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm hover:scale-105 hover:duration-300 cursor-pointer dark:bg-slate-900">
            <span>
              <h1 className="font-extrabold">Conversion Rate</h1>
              <p className="text-sm">Updated 15 minutes ago</p>
            </span>
            <span>
              <p className="text-3xl text-indigo-600 font-semibold">4%</p>
            </span>
          </div>
          <div className="transition ease-in-out delay-150 bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm hover:scale-105 hover:duration-300 cursor-pointer dark:bg-slate-900">
            <span>
              <h1 className="font-extrabold">Average Sale Value</h1>
              <p className="text-sm">Updated 15 minutes ago</p>
            </span>
            <span>
              <p className="text-3xl text-indigo-600 font-semibold">TZS 5000</p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex-2 flex bg-white shadow-md p-5 w-[310px] justify-self-end relative -left-[50px] rounded-md md:-left-0 dark:bg-slate-900">
            <div>
              <h1 className="mb-5 font-extrabold text-sm">Quick Actions</h1>
              <ul className="list-none flex flex-col gap-6 text-sm text-indigo-600 font-extrabold cursor-pointer">
                <span className="flex items-center gap-3 hover:underline ">
                  <FaExternalLinkAlt className="text-sm" />

                  <li>Visit store</li>
                </span>
                <span className="flex items-center gap-3 hover:underline ">
                  <HiOutlineCursorClick className="text-xl" />

                  <li>Create New Product</li>
                </span>
                <span className="flex items-center gap-3 hover:underline ">
                  <MdOutlinePayments className="text-xl" />

                  <li>Payouts</li>
                </span>
                <span className="flex items-center gap-3 hover:underline ">
                  <BsCart3 className="text-xl" />
                  <li>Checkout Settings</li>
                </span>
                <span className="flex items-center gap-3 hover:underline ">
                  <BsPeople className="text-xl" />
                  <li>User Roles Settings</li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[116px] ">
        <Overviewtable />
        <Mostviewedproduct />
      </div>
    </div>
  );
};

export default Overview;
