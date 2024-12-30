"use client";

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 iten-center mx-auto w-[80%]'>
        {/* Image */}
        <Tilt>
          <div>
            <Image src="/images/f.png" alt='image' width={1000} height="1000"/>
          </div>
        </Tilt>
        {/* Text Content */}
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Feature