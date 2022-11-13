import React from "react";
import { BsPeople, BsCart3 } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Table.css"

const Overview = () => {
 

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-3xl mt-5">Overview</h1>
        <span className="text-gray-600">
          Summary of your store for March 4, 2022
        </span>
      </div>

      <div className="mb-5 md:flex-col  flex w-full justify-center">
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
              <p className="text-3xl text-indigo-600 font-semibold">TZS 5000</p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex-2 flex bg-white shadow-md p-5 w-[300px] justify-self-end relative -left-[50px] rounded-md md:-left-0">
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
      <div className="bg-white shadow-xl w-[61%] rounded-md p-4">
        <div className="flex justify-between p-1.5 ">
          <span className="text-xl text-gray-700 font-bold">Most Selling Products</span>
          <span className="text-sm text-indigo-600">View All Products</span>
        </div>
        <div>
          <table className="w-full">
            <thead >
            <tr className="text-gray-700">
              <th>Product</th>
              <th>Price</th>
              <th>Total sales</th>
            </tr>
            </thead>
            <tbody className="text-sm">
            <tr>
              <td>Logo mockup with 3d logo in wall</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>Paper style international women's day sale</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>Watercolor international women's day illustration</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>3d rendering of delicious cheese burger</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>Burger box packaging with editable design mockup</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>Transparent food container mockup</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
              <td>3d rendering of delicious cheese burger</td>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
