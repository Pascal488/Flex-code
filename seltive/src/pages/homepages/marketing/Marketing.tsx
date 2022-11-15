import React from 'react'
import { Googleicon } from '../../authpages/Signin'
const Marketing = () => {
  return (
    <div className='p-5 '>
        <h1>
        Marketing
        </h1>
        <p className='mb-10'> 
        Integrate various digital marketing tools
        </p>
        <div className='flex justify-around gap-5'>
        <div className='flex flex-wrap gap-5 max-w-4xl'>
            <div className='flex justify-around items-center w-[160px] p-1.5 bg-white shadow-md rounded-sm'>
                <span className='text-2xl'>
                {Googleicon}
                </span>
                <span className='text-gray-700 font-semibold'>
                Google Ads
                </span>
            </div>
            <div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div><div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div><div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div>
            <div className='flex justify-around items-center w-[160px] p-1.5 bg-white shadow-md rounded-sm'>
                <span className='text-2xl'>
                {Googleicon}
                </span>
                <span className='text-gray-700 font-semibold'>
                Google Ads
                </span>
            </div>
            <div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div><div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div><div className='flex justify-around items-center w-[200px] p-1.5 bg-white shadow-md rounded-sm'>
                {Googleicon}
                <span>
                Google Ads
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Marketing