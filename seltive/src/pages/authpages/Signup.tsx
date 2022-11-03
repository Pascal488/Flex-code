import React, { useState } from "react";

import { Googleicon } from "./Signin";
import { Appleicon } from "./Signin";
import { Link, useNavigate  } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";

export const Userdata = gql`
  mutation Register($user: UserInput!) {
    register(user: $user) {
      id
      firstName
      middleName
      bio
      email
      lastName
      name
      username
      dp
      verified
      enabled
      created
      lastUpdated
      token
      total
      userCover
      creator
      twoFa
    }
  }
`;
type Inputs = {
  email: string;
  name: string;
  password: string;
  username: string;
};

const Signup = (props:any) => {
  const navigate = useNavigate();
  const [variables, SetVariables] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const {
    register: registerValidate,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  
  


  const onchange = (e: any) => {
    SetVariables({
      ...variables,
      [e.target.name]: e.target.value,
    });
  };

  const [register, { loading, error, data }] = useMutation(Userdata, {
     update(result){
    console.log(result)
    navigate("/")
  },
  
    variables: { user: variables },
  });

  const onSubmit = (data: Inputs, e: any) => {
    //console.log(data);
    e.preventDefault();
    register();
  };

  return (
    <div>
      <div className="flex  md:flex-col h-screen ">
        <div
          className="flex flex-col justify-between bg-black text-gray-100  flex-1 h-screen md:hidden"
          style={{
            backgroundImage:
              "url('ht://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA..')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "center",
          }}
        >
          <div className="flex items-center gap-4 p-16 ">
            <img
              src="
                        https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
              alt=""
              className="w-10 h-10 rounded-full bg-black"
            />
            <span className="text-[39px]">Seltive</span>
          </div>
          <div className=" p-16">
            <h1 className="text-[59px] text-left font-semibold ">
              Sell Digital Content <br />
              With Ease
            </h1>
            <p className="text-[30px]">
              An ecommerce platform built for digital creators
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 bg-gray-50 mb-5 flex-1 gap-4 ipad:relative">
          <form
            className="flex flex-col justify-center py-12 px-10 ipad:justify-center ipad:m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-[49px] text-gray-900 mb-3"> Join Seltive</h1>

            <label htmlFor="Name">Name</label>
            <input
              type="text"
              {...registerValidate("name", {
                required: true,
                
              })}
              onChange={onchange}
              placeholder="Enter your name"
              className=" p-1 border border-black outline-none rounded-[5px] mb-5 bg-transparent"
            />
            {errors.name && (
              <p className=" relative left-1 -top-5 text-red-500 text-xs ">
                Enter your name
              </p>
            )}
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              {...registerValidate("username", {
                required: true,
              })}
              onChange={onchange}
              placeholder="Enter your username."
              className="mb-4 p-1 border border-black outline-none rounded-[5px] bg-transparent"
            />
            {errors.username && (
              <p className=" relative left-1 -top-4 text-red-500 text-xs ">
                Enter your username
              </p>
            )}
            <label htmlFor="Email">Email</label>
            <input
              type="Email"
              {...registerValidate("email", {
                required: true,
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email",
                },
              })}
              onChange={onchange}
              placeholder="Enter your email."
              className="mb-4 p-1 border border-black outline-none rounded-[5px] bg-transparent"
            />
            {errors?.email && 
            
            <p className="relative left-1 -top-4 text-red-500 text-xs ">
       Email is required
    </p>
            }
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              {...registerValidate("password", {
                required: "Enter a password",
                // pattern:
                //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              })}
              onChange={onchange}
              placeholder="Enter your password."
              className="mb-4 p-1 border border-black outline-none rounded-[5px] bg-transparent"
            />
            {errors.password && (
              <p className=" relative left-1 -top-4 text-red-500 text-xs ">
                Enter your password
              </p>
            )}
            {/* <Link to='/confirm' className='bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] text-center'> */}
            <input
              type="submit"
              value="Create Account"
              className="bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] text-center"
            />

            <span className="text-center m-3">OR</span>
            <button
              type="button"
              className="p-1 gap-1 text-center bg-white text-black flex items-center justify-center mb-3 border border-gray-500 rounded-[5px]"
            >
              {Googleicon}Continue with Google
            </button>
            <button
              type="button"
              className="p-1 gap-1 text-center bg-white text-black flex items-center justify-center border border-gray-500 rounded-[5px]"
            >
              {Appleicon}Continue with Google
            </button>
            <span className="flex justify-center items-center">
              <span className="text-center m-2">Already have an account? </span>
              <Link to="/login" className="text-indigo-700 cursor-pointer">
                Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
