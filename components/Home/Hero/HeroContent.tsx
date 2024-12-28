import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white md:leading-[3rem]
        lg:leading-[3.5rem] xl:leading-[4rem]'>
            Best online platform for education.
        </h1>
        <p className='mt-6 text-sm md:text-lg text-white text-opacity-60'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Error sit est quasi commodi modi cupiditate quidem quia nulla ea id.
        </p>
        {/* Button */}
        <div className='mt-8 items-center space-x-4 flex-col'>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all
            duration-200 rounded-lg bg-green-500 hover:bg-green-600'>
                Get Started
            </button>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all
            duration-200 rounded-lg bg-yellow-500 hover:bg-yellow-600'>
                Learn More
            </button>
        </div>
        {/* Stats */}
        <div className='flex items-center flex-wrap space-x-16 mt-8'>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>+260</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>+2360</p>
                <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>+60</p>
                <p className='w-[100px] h-[3px] bg-rose-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent