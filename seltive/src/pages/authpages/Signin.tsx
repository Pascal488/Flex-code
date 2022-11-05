import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLazyQuery, gql} from "@apollo/client";


import { useNavigate } from "react-router-dom";


export const Googleicon = <FcGoogle />;
export const Appleicon = <AiFillApple />;

export const LoginQuery = gql`
  query Login($login: Login!) {
    login(login: $login) {
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
  username: string;
  password: string;
};

const Signin = (props: any) => {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login, {loading }] = useLazyQuery(LoginQuery, {
    onCompleted(data){
    localStorage.setItem('token',data.login.token)
    navigate('/')
  },
    variables: { login: getValues() },
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = (data: Inputs,e:any) => {
    e.preventDefault()
    console.log(data);
    login();
    
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
       
      <div className="flex h-screen md:flex-col ">
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
          <div className="flex items-center gap-4 p-16">
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
            className="flex flex-col justify-center py-24 px-10 ipad:m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-[49px] text-gray-900 mb-8 "> Welcome Back</h1>
            <label htmlFor="Email"> Username or Email</label>
            <input
              id="email"
              {...register("username", {
                required: "Email is required",
                
              })}
              type="text"
              placeholder="Enter your username or email."
              className="p-1 border border-black outline-none rounded-[5px] mb-5"
            />
            {errors.username && (
              <p className=" relative left-1 -top-5 text-red-500 text-xs ">
                Enter your valid name or email
              </p>
            )}

            <label htmlFor="Password">Password</label>
            <input
              {...register("password", { required: true })}
              type={passwordShown ? "text" : "password"}
              placeholder="Enter your password."
              className="mb-5 p-1 border border-black outline-none rounded-[5px]"
            />
            {errors.password && (
              <p className=" relative left-1 -top-5 text-red-500 text-xs ">
                Enter your password
              </p>
            )}
            <span className="flex justify-between m-1">
              <Link
                to="/forgotpassword"
                className="relative -top-5 text-xs text-indigo-700 cursor-pointer"
              >
                Forgot Password
              </Link>
              <input
                type="checkbox"
                name="Show Passcord"
                id=""
                className="text-xs relative -top-5 left-[215px] md:hidden ipad:left-[50px] "
                onClick={togglePassword}
              />
              <span className="relative -top-5 text-xs" onClick={togglePassword}>Show Password</span>
            </span>
            <input
              type="submit"
              value="Sign In"
              className="bg-indigo-700 text-white p-1.5 cursor-pointer rounded-[5px]"
            />
            <span className="text-center m-3">OR</span>
            <button className="p-1 gap-1 text-center bg-white text-black flex items-center justify-center mb-3 border border-gray-500 rounded-[5px]">
              {Googleicon}Continue with Google
            </button>
            <button className="p-1 gap-1 text-center bg-white text-black flex items-center justify-center border border-gray-500 rounded-[5px]">
              {Appleicon}Continue with Google
            </button>
            <span className="flex justify-center items-center">
              <span className="text-center m-2 lw:text-xs">
                Don’t have an account?{" "}
              </span>
              <Link to="/signup" className="text-indigo-700 cursor-pointer">
                Sign Up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signin;
