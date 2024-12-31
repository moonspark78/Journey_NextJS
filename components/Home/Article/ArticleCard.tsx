import Image from 'next/image';
import React from 'react'
import { BiHeart } from 'react-icons/bi';



type Props ={
    article: {
        id: number;
        userImage: string;
        username: string;
        reaction: number;
        coverImage: string;
        title: string;
    }
}

const ArticleCard = ({article}:Props) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden'>
        <Image
            src={`${article.coverImage}`}
            alt={article.title}
            width={300}
            height={300}
            className='h-full w-full'
        />

        <div className='p-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <Image src={article.userImage} alt={article.username} width={40} height={40} className='rounded-full'/>
                    <p className='text-base text-black text-opacity-70'>
                        {article.username}
                    </p>
                </div>
                <div className='flex items-center space-x-2'>
                    <BiHeart className='text-red-600 w-6 h-6 cursor-pointer'/>
                    <p className='text-sm text-gray-800'>{article.reaction}</p>
                </div>
            </div>
            {/* Heading */}
            <h1 className='mt-4 mb-4 text-xl font-se'>
                {article.title}
            </h1>
            <p className='text-base text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, earum. Temporibus modi fugiat beatae tempore.
            </p>
            <button className='mb-3 mt-4 hover:text-green-600 text-lg text-black font-bold underline cursor-pointer'>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default ArticleCard