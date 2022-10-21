import React from 'react'
import {BsEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Confirm = () => {
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
                <div className='flex flex-col justify-center items-center p-[10%] text-center'>
           <span className='w-[250px] h-[250px] bg-indigo-200 rounded-full flex items-center justify-center mb-10'>
            
           <BsEnvelopeFill className='w-[150px] h-[150px] text-indigo-700'/>
           </span>
           <h1 className='font-semibold text-[39px]'>
            Check your email
           </h1>
           <p >We have sent a password reset link to <br/> 
                <span className='font-bold text-black'>
                    jonedone@gmail.com
                </span>
           </p>
            <span className=' text-xs text-center p-3 flex items-center gap-1 '>
            <span>
                Didn't receive email?
            </span>
            <Link to='/un' className='text-indigo-700 font-bold'>
                Click to resend
             </Link>
            </span>
        </div>
                </div>
        </div>
        </div>

    )
}

export default Confirm