import Slider from '@/components/Helper/Slider'
import React from 'react'
import { BsQuote } from 'react-icons/bs'

const Review = () => {
  return (
    <div className='pt-20 pb-16 bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20'>
            {/* Text Content */}
            <div className='xl:col-span-1 mt-6'>
                {/* Subheading */}
                <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                        <BsQuote className='h-6 w-6 text-white'/>
                    </div>
                    <h1 className='text-xl text-white font-semibold'>
                        Student FeedBack
                    </h1>
                </div>
                {/* Title */}
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold mt-8 md:leading-[3rem]
                 lg:leading-[3.3rem] xl:leading-[3.6rem]'>
                    Trusted by genius people
                </h1>
                {/* Description */}
                <p className='text-base text-white text-opacity-60 mt-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus quo eum obcaecati similique voluptatibus.
                </p>
                {/* info */}
                <div className='flex items-center space-x-10 mt-8'>
                    <p className='text-white font-bold text-5xl'>99%</p>
                    <p className='text-white '>Student&apos;s Complete <br /> Course Successfully</p>
                </div>
            </div>
            {/* Slider */}
            <div className='xl:col-span-2 bg-white rounded-lg overflow-hidden'>
                {/* Slider */}
                <Slider/>
            </div>
        </div>
    </div>
  )
}

export default Review