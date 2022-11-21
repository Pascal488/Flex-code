import React from "react";
import "./Table.css"
const Overviewtable = () => {
  return (
    <div className=" bg-white shadow-xl w-[61%] rounded-md p-3 dark:bg-slate-900">
      <div className="flex justify-between p-1.5 items-center">
        <span className="text-xl text-gray-700 font-bold dark:text-gray-500">
          Most Selling Products
        </span>
        <span className="text-sm text-indigo-600 cursor-pointer hover:underline ">
          View All Products
        </span>
      </div>

      <div>
        <table className="w-full">
          <thead>
            <tr className="text-gray-700 dark:text-gray-500">
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
              https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  );
};

export default Overviewtable;
