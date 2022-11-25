import React from 'react'

const Logo = () => {
  return (
    <div>
        <span className="relative md:hidden flex flex-col gap-2 w-10 h-10 rounded-full bg-indigo-600">
          <span className="absolute bottom-5 left-1  rotate-[145deg] w-[30px] p-[3px] rounded-md h-[2px] bg-green-200 "></span>
          <span className="absolute  bottom-3 left-2   rotate-[145deg] w-[29px] p-[3px]  rounded-md h-[2px] bg-red-200"></span>
        </span>
    </div>
  )
}

export default Logo