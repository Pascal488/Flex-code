import React from "react";
import { BsPeople, BsCart3 } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Table.css"

const Overview = () => {
 

  return (
    <div>
      <div className="mb-2">
        <h1 className="text-3xl mt-2">Overview</h1>
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
      <div className="bg-white shadow-xl w-[61%] rounded-md p-3">
        <div className="flex justify-between p-1.5 ">
          <span className="text-xl text-gray-700 font-bold">Most Selling Products</span>
          <span className="text-sm text-indigo-600 cursor-pointer">View All Products</span>
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
            <tbody className="text-sm text-gray-500">
            <tr>
              <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>Logo mockup with 3d logo in wall</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>Paper style international women's day sale</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>Watercolor international women's day illustration</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>3d rendering of delicious cheese burger</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>Burger box packaging with editable design mockup</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>Transparent food container mockup</td>
              </span>
              <td>TZS 4,000</td>
              <td>TZS 40,000</td>
            </tr>
            <tr>
            <span className="flex items-center">
              <td>
              <img
              src="
                  https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-7 h-7 rounded-sm bg-black"
            />
              </td>
              <td>3d rendering of delicious cheese burger</td>
              </span>
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
