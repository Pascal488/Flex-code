import React from "react";

import {BiPlus} from "react-icons/bi"

const Product = () => {
  return (
      <>
      <div className="flex justify-between items-center mb-2 min-w-[1200px] " >
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
      </>
  );
};

export default Product;
