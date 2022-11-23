import React, { useState } from "react";

import { FaLock } from "react-icons/fa";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


import { gql, useLazyQuery } from "@apollo/client";

export const ForgotpaswordQuery = gql`
  query ForgotPassword($identifier: String!) {
    forgotPassword(identifier: $identifier) {
      email
      message
    }
  }
`;

type Input = {
  email: string;
};
const Forgotpasword = () => {
  const navigate = useNavigate();
  const [emailfield, setEmailfield] = useState({
    email: "",
  });
  const getemailValue = (e: any) => {
    setEmailfield({
      ...emailfield,
      [e.target.name]: e.target.value,
    });
  };
  const [forgotpassword, { loading, error, data }] = useLazyQuery(
    ForgotpaswordQuery,
    {
      onCompleted(data) {
        navigate("/checkemail");
      },
      variables: { identifier: emailfield.email },
    }
  );
  console.log(emailfield);

  const handlesubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    forgotpassword();
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[10%] text-center md:h-screen ipad:h-screen">
        <span className="w-[250px] h-[250px] bg-indigo-200 rounded-full flex items-center justify-center mb-10 md:w-[180px] md:h-[180px]">
          <FaLock className="w-[150px] h-[150px] text-indigo-700 md:w-[100] md:h-[100px]" />
        </span>
        <h1 className="font-semibold text-[39px]">Forgort Password</h1>
        <p className="mb-3">
          Enter the email assocciated with your account or your username <br />{" "}
          and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handlesubmit}>
          <label className="text-left float-left mb-1.5">
            {" "}
            Username or Email
          </label>
          <br />
          
          <input
            id="email"
            name="email"
            onChange={getemailValue}
            type="text"
            placeholder="Enter your username or email."
            className="px-4 py-1 border border-black outline-none rounded-[5px] mb-5 w-full md:w-full ipad:w-full bg-transparent"
          />

          <input
            type="submit"
            value="Reset Password"
            className="bg-indigo-700 text-white p-1.5 cursor-pointer rounded-[5px] w-[50%] md:w-full ipad:w-full"
          />
        </form>
        <span className="text-center p-3 flex items-center gap-1 text-indigo-700 font-bold">
          <AiOutlineArrowLeft className="" />
          <Link to="/login">Back to Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Forgotpasword;
