import React from 'react'

import { Link } from 'react-router-dom';


const Pickusername = () => {
    return (
        <div>
            <div className='flex h-screen md:flex-col'>
                <div className='flex flex-col justify-between bg-black text-gray-100  flex-1 h-screen'
                    style={{
                        backgroundImage: "url('htt://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA..')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundOrigin: "center"
                    }}
                >
                    <div className='flex items-center gap-4 p-16'>
                        <img src="
                                https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA.."
                            alt="" className='w-10 h-10 rounded-full bg-black' />
                        <span className='text-[39px]'>
                            Seltive
                        </span>
                    </div>
                    <div className=' p-16'>
                        <h1 className='text-[59px] text-left font-semibold '>
                            Sell Digital Content <br />
                            With Ease
                        </h1>
                        <p className='text-[30px]'>
                            An ecommerce platform built for
                            digital creators
                        </p>
                    </div>
                </div>
                <div className='flex flex-col p-2 bg-gray-50 mb-5 flex-1 gap-4'>
                    <form className='flex flex-col justify-center py-36 px-10'>
                        <h1 className='text-[49px] text-gray-900 mb-8'>Pick a username</h1>
                        <label htmlFor="Email">Pick a username</label>
                        <input type="text" placeholder='Your username' className='p-1 border border-black outline-none rounded-[5px] mb-5' />
                        <span className='-mt-5 mb-5 text-xs p-1'>Special character and spaces are not allowed</span>
                        <input type="button" value="Sign In" className='border border-black  p-1  rounded-[5px] mb-10' />
                        <input type="button" value="Save & Continue" className='bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px]' />

                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pickusername