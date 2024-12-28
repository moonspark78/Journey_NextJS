"use client";
import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Tilt>
        <div>
            <Image src='/images/hero.png' alt='hero-image' width={800} height={600}/>
        </div>
    </Tilt>
  )
}

export default HeroImage