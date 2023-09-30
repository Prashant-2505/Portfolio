'use client'
import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { useThemeContext } from '../context/theme';
import demo from '../../../public/images/profile.png';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.png';
import project3 from '../../../public/images/project3.png';
import AnimatedText from '@/components/AnimatedText';

const Page = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`w-full mt-[6rem] text-center justify-center items-center ${!theme ? 'bg-[#2c3e50] text-white' : 'text-[#2c3e50]'}`}>
       <AnimatedText 
       className={`font-bold text-7xl inline-block !px-32 leading-relaxed text-center ${!theme ? 'text-white':''}`}
       text='Imagination Trumps Knowledge !'
       />
      <div className="grid h-full grid-cols-2 gap-9 place-items-center py-[5rem]">
        {/* Project 1 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-white text-[#2c3e50]' : ''}`}>
          <Image className='h-[40vh] w-full' src={project1} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Travellers</h1>
          <p className='my-3 font-base text-left'>
            I have designed and developed a user-friendly web application aimed at travel enthusiasts seeking budget-friendly travel packages across various destinations in India. Leveraging cutting-edge technologies such as React.js, Firebase, and Google authorization, the platform offers a seamless booking experience.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://travelers-theta.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/travelers'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-white text-[#2c3e50]' : ''}`}>
          <Image className='h-[40vh] w-full' src={project2} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Vidiscape</h1>
          <p className='my-3 font-base text-left'>
            I developed VIDISCAPE, a YouTube clone web application meticulously crafted using React.js and Material-UI. This project aims to replicate the core functionalities of YouTube, allowing users to watch videos fetched from the YouTube API and presented through a visually appealing and user-friendly interface.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://youtube-clone-six-vert.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/youtube-clone'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-white text-[#2c3e50]' : ''}`}>
          <Image className='h-[40vh] w-full' src={project3} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>WearAble</h1>
          <p className='my-3 font-base text-left'>
            WearAble is a dynamic ecommerce clothing web application, meticulously developed using a powerful technology stack comprising MongoDB, React, Node.js, and Express.js. This platform offers users a secure and seamless shopping experience for a diverse range of clothing items.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://wearable.onrender.com/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/wearAble'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
