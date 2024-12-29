"use client";

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';


type Props={
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
};

const CourseCard = ({course}:Props) => {
  return (
    <Tilt>
        <div className='bg-white rounded-lg cursor-pointer overflow-hidden'>
            <div>
                <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={400}
                    className='w-full h-full'
                />
            </div>

            <div className='p-4'>
                {/* Price */}
                <h1 className='ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col
                mt-[-4rem] rounded-full bg-rose-700 text-white'>
                    ${course.price}
                </h1>
                {/* Info */}
                <div className='flex items-center mt-6 space-x-4'>
                    <span className='text-lg text-black text-opacity-70 font-bold '>
                        {course.category}
                    </span>
                    <span className='text-base text-gray-600'>
                        {course.author}
                    </span>
                </div>
                <h1 className='text-xl text-black font-bold mt-2'>
                    {course.title}
                </h1>
            </div>
        </div>
    </Tilt>
  )
}

export default CourseCard