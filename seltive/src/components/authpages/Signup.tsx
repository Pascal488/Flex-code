import React from 'react'

import { Googleicon } from './Signin';
import { Appleicon } from './Signin';

import { Link } from 'react-router-dom';

const Signup = () => {
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
                        <h1 className='text-[49px] text-gray-900 mb-8'> Join Seltive</h1>

                        <span className='flex  justify-between '>
                            <span>
                            <label htmlFor="Email"> First Name</label><br/>
                            <input type="text" placeholder='Enter your first name' className='w-[269px] p-1 border border-black outline-none rounded-[5px] mb-5' />
                            </span>
                            <span>
                            <label htmlFor="Email"> Last Name</label><br/>
                            <input type="text" placeholder='Enter your last name' className='w-[265px] p-1 border border-black outline-none rounded-[5px] mb-5' />
                            </span>

                        </span>
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder='Enter your password.' className='mb-5 p-1 border border-black outline-none rounded-[5px]' />
                        <Link to='/confirm' className='bg-indigo-700 text-white p-1 cursor-pointer rounded-[5px] text-center'>
                        <input type="button" value="Create Account" className='cursor-pointer' />
                        </Link>
                        <span className='text-center m-3'>OR</span>
                        <button className='p-1 gap-1 text-center bg-white text-black flex items-center justify-center mb-3 border border-gray-500 rounded-[5px]'>{Googleicon}Continue with Google</button>
                        <button className='p-1 gap-1 text-center bg-white text-black flex items-center justify-center border border-gray-500 rounded-[5px]'>{Appleicon}Continue with Google</button>
                        <span className='flex justify-center items-center'>
                            <span className='text-center m-2'>Already have an account? </span>
                            <Link to='/' className='text-indigo-700 cursor-pointer'>
                                Sign In
                            </Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Signup