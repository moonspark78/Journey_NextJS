import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';


type Props = {
        image: string;
        name: string; 
        role: string;
    }

const SliderCard = ({image, name, role }:Props) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10'>
        <div className='w-full h-full'>
            <Image
                src={image}
                alt="image"
                width={350}
                height={350}
                className='w-full h-full object-cover'
            />
        </div>
        <div className='mt-6 mb-7'>
            <div className='flex items-center'>
                <FaStar className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
                <FaStar className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
                <FaStar className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
                <FaStar className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
                <FaStar className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
            </div>
            <p className='mt-6 text-gray-800 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold text-opacity-65'> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente harum error quo,
                doloribus voluptatibus impedit rem laboriosam, obcaecati, aliquam veniam voluptatem modi perspiciatis Neque.
            </p>
        </div>
    </div>
  )
}

export default SliderCard