import React from "react";

import { FaLock } from "react-icons/fa";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Forgotpasword = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[10%] text-center">
        <span className="w-[250px] h-[250px] bg-indigo-200 rounded-full flex items-center justify-center mb-10">
          <FaLock className="w-[150px] h-[150px] text-indigo-700" />
        </span>
        <h1 className="font-semibold text-[39px]">Forgort Password</h1>
        <p>
          Enter the email assocciated with your account or your username <br />{" "}
          and we'll send you a link to reset your password.
        </p>
        <label className="text-left float-left mb-1.5">
          {" "}
          Username or Email
        </label>
        <input
          type="text"
          placeholder="Enter your username or email."
          className="px-4 py-1 border border-black outline-none rounded-[5px] mb-5 w-[50%] md:w-full ipad:w-full "
        />
        <Link
          to="/checkemail"
          className="bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] w-[50%] md:w-full ipad:w-full"
        >
          <input type="button" value="Reset Password" />
        </Link>
        <span className="text-center p-3 flex items-center gap-1 text-indigo-700 font-bold">
          <AiOutlineArrowLeft className="" />
          <Link to="/">Back to Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Forgotpasword;
