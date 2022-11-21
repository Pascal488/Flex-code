import React from "react";

const Product = () => {
  return (

      <div className="flex justify-between items-center   mb-2">
        <div>
          <h1 className="text-3xl mt-2 dark:text-indigo-600 dark:font-semibold">
            Products
          </h1>
          <span className="text-gray-400">
            View all your store’s products catalogue
          </span>
        </div>

        <div className="justify-self-end">
            <span>
                <input type="text" className="bg-blue-200 w-3/4" />
            </span>
        </div>
      </div>
  
  );
};

export default Product;
