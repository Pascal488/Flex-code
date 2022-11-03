import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineCog} from 'react-icons/hi'
import {TbChartPie} from 'react-icons/tb'
import {BsSearch} from 'react-icons/bs'
import {HiOutlineFolder} from 'react-icons/hi'
import {BsBookmark} from 'react-icons/bs'
import {HiOutlineReceiptRefund} from 'react-icons/hi'




const Sidebar = () => {
  return (
    <div>
        <h1 className='text-center text-sky-500 text-2xl p-4'>
            <AiOutlineHome/>
            <HiOutlineCog/>
            <TbChartPie/>
            <BsSearch/>
            <HiOutlineFolder/>
            <BsBookmark/>
            <HiOutlineReceiptRefund/>
        </h1>
    </div>
  )
}

export default Sidebar