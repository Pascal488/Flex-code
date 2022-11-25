import React from 'react'
import { CiDark } from 'react-icons/ci'
import { GoSearch } from 'react-icons/go'
import { MdOutlineLightMode } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex  sticky top-0 items-center gap-5 p-3 w-full justify-around bg-white shadow-sm">
        <div className="flex  gap-4 items-center ">
          <span className="relative md:hidden flex flex-col gap-2 w-10 h-10 rounded-full bg-indigo-600">
            <span className="absolute bottom-5 left-1  rotate-[145deg] w-[30px] p-[3px] rounded-md h-[2px] bg-green-200 "></span>
            <span className="absolute  bottom-3 left-2   rotate-[145deg] w-[29px] p-[3px]  rounded-md h-[2px] bg-red-200"></span>
          </span>
          <h1 className=" text-2xl text-indigo-700 font-extrabold">Seltive</h1>
        </div>
        <div className="md:hidden md:w-full md:justify-center flex items-center bg-indigo-50 justify-around w-[35%] rounded-sm py-1 px-4">
          <span className="flex items-center gap-2">
            Explore
            <RiArrowDownSLine className="text-xl cursor-pointer" />
          </span>
          <input
            type="text"
            placeholder="Search products"
            className="outline-none w-full p-1 bg-transparent"
          />
          <GoSearch className="text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-5 text-white ">
          <span className="w-8 h-8 bg-indigo-600 dark:bg-gray-800  flex items-center justify-center rounded-sm text-2xl">
            <CiDark />
          </span>
          <span className="w-8 h-8 bg-indigo-600 dark:bg-gray-800  flex items-center justify-center rounded-sm text-2xl">
            <MdOutlineLightMode />
          </span>
          <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600   rounded-sm">
            <Link to="/signup">
              <button className="">Register</button>
            </Link>
          </span>
          <span className="text-sm flex items-center justify-center gap-1 py-1 px-4 bg-indigo-600  rounded-sm">
            <Link to="/login">
              <button className="">Login</button>
            </Link>
          </span>
        </div>
      </div>
  )
}

export default Header