'use client'
import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { useThemeContext } from '../context/theme';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.png';
import project3 from '../../../public/images/project3.png';
import project4 from '../../../public/images/project4.png';
import project5 from '../../../public/images/project5.png';
import project6 from '../../../public/images/project6.png';
import newProject from '../../../public/images/newProject.png';


import AnimatedText from '@/components/AnimatedText';

const Page = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`w-full mt-[5rem] text-center justify-center items-center ${!theme ? 'bg-[#2c3e50] text-[#f7f1e3]' : 'text-[#2c3e50]'}
    `}>
      <AnimatedText
        className={`font-bold text-7xl inline-block !px-32 leading-relaxed text-center ${!theme ? 'text-[#f7f1e3]' : ''}
        sm:!text-4xl sm:text-center sm:!px-0
        md:!text-6xl
        lg:!text-6xl

       `}
        text='Imagination Trumps Knowledge !'
      />
      <div className="grid h-full grid-cols-2 gap-9 place-items-center py-[5rem]
       sm:block sm:w-full sm:h-full sm:px-3 sm:space-y-5
       md:gap-6 md:py-3
      ">


        {/* Project 1 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
         sm:w-full sm:h-[60%] sm:px-3
         md:h-[70%]
        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]
          ' src={project1} />
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

         {/* Project * */}
         <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'

            src={newProject} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Quicky</h1>
          <p className='my-3 font-base text-left'>
           QUICKY application is impressive for its simplicity and ease of use, allowing users to start chatting instantly without login. Its anonymous nature encourages open communication, while the lack of chat history protects privacy and reduces storage needs. The real-time focus ensures engaging and dynamic conversations.          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://quick-chat-client-eight.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/quick-chat-client'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
         sm:w-full sm:h-[60%] sm:px-3
         md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]
          '
            src={project5} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Meet up</h1>
          <p className='my-3 font-base text-left'>
            created a real-time video calling web app using Next.js, Tailwind CSS, Socket.IO, and Peer.js. It allows seamless video calls over the internet, leveraging Next.js for efficient routing and server-side rendering, and Tailwind CSS for a clean UI. Socket.IO ensures smooth data exchange between clients and servers during calls, while Peer.js enables direct peer-to-peer connections, eliminating the need for intermediary servers. This project demonstrates my expertise in building modern web apps with advanced real-time communication features.          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://google-meet-clone-py32.onrender.com/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/Meet-up'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
         sm:w-full sm:h-[60%] sm:px-3
         md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]
          '
            src={project2} />
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

        {/* Project 4 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'

            src={project3} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>WearAble</h1>
          <p className='my-3 font-base text-left'>
            WearAble is a dynamic ecommerce clothing web application, meticulously developed using a powerful technology stack comprising MongoDB, React, Node.js, and Express.js. This platform offers users a secure and seamless shopping experience for a diverse range of clothing items.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://talented-teal-loincloth.cyclic.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/wearAble'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>


        {/* Project 5 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'

            src={project4} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>ElectroMart</h1>
          <p className='my-3 font-base text-left'>
            ElectroMart is a dynamic ecommerce Electroninc web application, meticulously developed using a powerful technology stack comprising  Next js, MongoDB. This platform offers users a secure and seamless shopping experience for a diverse range of Electronic items.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://electro-mart.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/electroMart'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

         {/* Project 6 */}
         <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'

            src={project6} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>ProjectNest</h1>
          <p className='my-3 font-base text-left'>
          Developed "Project Nest," a central hub for efficient project management and teamwork, using Next.js, Node.js, MongoDB, and Tailwind CSS. Integrated JWT and Firebase for Google authentication, enabling team collaboration features like chat, task assignment, and member management. Technologies used include Next.js, Node.js, Firebase, Tailwind CSS, MongoDB, Socket.IO, and Chakra UI.          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://yabbering-lorelei-nq-3d0e2f51.koyeb.app'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/projectNest'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
