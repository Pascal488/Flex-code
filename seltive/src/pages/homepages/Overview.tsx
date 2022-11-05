import React from "react";
import { BsPeople } from "react-icons/bs";

const Overview = () => {
  return (
    <div>
      <div>
        <div className="mb-10">
          <h1 className="text-3xl mt-5">Overview</h1>
          <span className="text-gray-600">
            Summary of your store for March 4, 2022
          </span>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex-1 flex flex-wrap gap-5">
            <div className="bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm">
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
            <div className="bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm">
              <span>
                <h1 className="font-extrabold">Unique Visitors</h1>
                <p className="text-sm">Updated 15 minutes ago</p>
              </span>
              <span>
                <p className="text-3xl text-indigo-600 font-semibold">1000</p>
              </span>
            </div>
            <div className="bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm">
              <span>
                <h1 className="font-extrabold">Conversion Rate</h1>
                <p className="text-sm">Updated 15 minutes ago</p>
              </span>
              <span>
                <p className="text-3xl text-indigo-600 font-semibold">4%</p>
              </span>
            </div>
            <div className="bg-white shadow-md py-3 px-5 flex flex-col justify-between w-[360px] gap-5 rounded-sm">
              <span>
                <h1 className="font-extrabold">Average Sale Value</h1>
                <p className="text-sm">Updated 15 minutes ago</p>
              </span>
              <span>
                <p className="text-3xl text-indigo-600 font-semibold">
                  TZS 5000
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex-2 flex bg-white shadow-md p-5 w-[300px] justify-self-end relative -left-[50px]">
              <div>
                <h1 className="mb-5">Quick Actions</h1>
                <ul className="list-none flex flex-col gap-6 text-sm text-indigo-600 font-extrabold cursor-pointer">
                  <span className="flex items-center gap-3 hover:underline ">
                    <BsPeople className="text-xl" />

                    <li>Visit store</li>
                  </span>
                  <span className="flex items-center gap-3 hover:underline ">
                    <BsPeople className="text-xl" />

                    <li>Create New Product</li>
                  </span>
                  <span className="flex items-center gap-3 hover:underline ">
                    <BsPeople className="text-xl" />

                    <li>Payouts</li>
                  </span>
                  <span className="flex items-center gap-3 hover:underline ">
                    <BsPeople className="text-xl" />
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
      </div>
    </div>
  );
};

export default Overview;