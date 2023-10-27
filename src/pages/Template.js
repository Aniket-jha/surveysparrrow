import React from 'react'
import Sidebar from '../components/Layout/Sidebar'
import Temp1 from "../assets/temp1.png"
import Temp2 from "../assets/temp2.png"
const Template = () => {
  return (
    <div className='grid grid-cols-5 grid-flow-col' >
        <Sidebar />
        <div className='col-span-4 px-12 ' >
            <h3 className='mt-12 text-center text-[2rem] font-[600] ' >List of Templates</h3>
            <div className='flex items-center justify-center  mt-12' >
                <div className='mx-3' >
                    <img className='w-[300px]' src={Temp1} alt="" />
                    <h4 className='text-[1.5rem] mt-2 text-center font-[600] ' >Template 1</h4>
                </div>
                 <div className='mx-3' >
                    <img className='w-[300px]' src={Temp2} alt="" />
                    <h4 className='text-[1.5rem] mt-2 text-center font-[600] ' >Template 2</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Template