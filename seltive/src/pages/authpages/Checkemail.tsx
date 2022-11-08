import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsEnvelopeFill } from "react-icons/bs";
import Image from "messageicon.png";

const Checkemail = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[10%] text-center h-screen bg-white">
        <span className="w-60 h-60 bg-indigo-200 rounded-full flex items-center justify-center mb-10">
          <BsEnvelopeFill className="w-32 h-32 text-indigo-700" />
        </span>
        <h1 className="font-semibold text-[39px]">Check your email</h1>
        <p>
          We have sent a password reset link to <br />
          <span className="font-bold text-black">jonedone@gmail.com</span>
        </p>
        <span className=" text-xs text-center p-3 flex items-center gap-1 ">
          <span>Didn't receive email?</span>
          <Link to="/setnewpassword" className="text-indigo-700 font-bold">
            Click to resend
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Checkemail;
