import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";

const ResetSuccesspage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[10%] text-center">
        <span className="w-[200px] h-[200px] bg-green-100 rounded-full flex items-center justify-center mb-3">
          <FcCheckmark className="w-[100px] h-[100px] text-indigo-700" />
        </span>
        <h1 className="font-semibold text-[39px]  mb-5">
          Password Reset Successfully
        </h1>
        <Link
          to="/"
          className="bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] w-[50%]"
        >
          <input type="button" value="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default ResetSuccesspage;
