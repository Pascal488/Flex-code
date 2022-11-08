import React from "react";
import { HiKey } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Setnewpasword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    //console.log("Hi")
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[10%] text-center h-screen md:justify-center  bg-white">
        <span className="w-[250px] h-[250px] bg-indigo-200 rounded-full flex items-center justify-center mb-3">
          <HiKey className="w-[150px] h-[150px] text-indigo-700" />
        </span>
        <h1 className="font-semibold text-[39px]  md:text-[30px]">Set new password</h1>
        <p className="text-gray-500 font-bold mb-5">
          Choose an easy to remember password
        </p>

        <form action="">
          <span className=" relative -left-[190px] md:-left-[115px]">
            Password
          </span>
          <br />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your password."
            className="mb-5 p-1 border border-black outline-none rounded-[5px] w-[450px] md:w-[300px]"
          />
          <span className="flex justify-between m-1">
            <span className="relative -top-5 text-xs cursor-pointer">
              Must be atleast 8 character long
            </span>
            <input
              type="checkbox"
              name="Show Passcord"
              id=""
              className="text-xs relative -top-5 left-[85px] md:hidden"
              onClick={togglePassword}
            />
            <span className="relative -top-5 text-xs md:hidden" onClick={togglePassword}>
              Show password{" "}
            </span>
          </span>
          <Link to="/ressetsuccespage">
            <input
              type="button"
              value="Save new password"
              className="bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] w-[80%]"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Setnewpasword;
