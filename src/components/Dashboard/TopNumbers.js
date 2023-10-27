import React from 'react'

const TopNumbers = ({forms}) => {
  return (
    <div className='mt-6 px-12 flex items-center justify-between ' >
        <div className='w-[500px] rounded-lg px-8 py-6 text-white bg-blue-400 ' >
            <h4 className='text-[1.5rem] font-[600]' >Total Surveys</h4>
            <h2 className='text-[2.5rem] font-[700]'>{forms.length}</h2>
        </div>
         <div className='w-[500px] rounded-lg px-8 py-6 text-white bg-green-400 ' >
            <h4 className='text-[1.5rem] font-[500]'> Total Templates</h4>
            <h2 className='text-[2.5rem] font-[700]'>2</h2>
        </div>
    </div>
  )
}

export default TopNumbers