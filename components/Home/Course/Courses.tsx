import { coursesData } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <div className='pb-12 pt-16 relative bg-gray-200'>
        {/* Bounce Ball */}
        <Image
            src="/images/cb.png"
            alt='Bounce Ball'
            width={800}
            height={800}
            className='absolute top-[30%] animate-bounce'
        />
        <div className='w-[80%] pt-8 pb-8 mx-auto'>
            <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>Popular Courses</h1>
            <div className='md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {coursesData.map((course) =>{
                    return <div key={course.id}>

                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Courses