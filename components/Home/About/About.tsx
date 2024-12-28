import React from 'react'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
        {/* define grid */}
        <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* 1st part */}
            <div>
                <div className='flex items-center space-x-4'>
                    <div  className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                        <FaAward className='h-6 w-6 text-white'/>
                    </div>
                    <h1 className='text-xl text-black font-semibold'>Guaranteed and certified</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About