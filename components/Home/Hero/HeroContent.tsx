import React from 'react'

const HeroContent = () => {
  return (
    <div>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white md:leading-[3rem]
        lg:leading-[3.5rem] xl:leading-[4rem]'>
            Best online platform for education.
        </h1>
        <p className='mt-6 text-sm md:text-lg text-white text-opacity-60'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Error sit est quasi commodi modi cupiditate quidem quia nulla ea id.
        </p>
        {/* Button */}
        <div className='mt-8 items-center space-x-4'>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all
            duration-200 rounded-lg bg-green-500 hover:bg-green-600'>
                Get Started
            </button>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all
            duration-200 rounded-lg bg-yellow-500 hover:bg-yellow-600'>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default HeroContent