import React from "react";

const Welcome = () => {

  return (
    <div className="flex m-auto max-w-[50%] h-screen w-full">
    <div className="m-auto ">
      <div className=" py-14 px-24 text-center  bg-white shadow-xl ">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-extrabold">Welcome to Seltive </h1>
          <span className="mb-3 text-center">
            Glad to have you onboard. Get started by creating your first
            product. You will be able to see an Overview of your microstore
            perfomance after you publish your first product
          </span>
        </div>
        <button className="py-1 px-6 bg-indigo-600 text-white rounded-sm hover:bg-gray-50 hover:text-black hover:shadow-inner hover:border-2 hover:border-indigo-600">
            Create Product
          </button>
      </div>
      </div>
    
    </div>
  );
};

export default Welcome;
