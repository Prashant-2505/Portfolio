import Image from 'next/image'
import React from 'react'
import demo from '../../../public/images/profile.png'
import { BsGithub } from 'react-icons/bs'
const page = () => {
  return (
    <div className='h-full w-full mt-[7rem] text-center  justify-center items-center'>
      <h1 className=' font-bold text-7xl inline-block px-32 leading-relaxed'>
        Imagination Trumps Knowledge!
      </h1>
      <div className="grid h-full grid-cols-2 gap-9 place-items-center my-[5rem]">

        <div className="h-[100%] w-[40vw] flex flex-col   border-[3px] px-6">
          <Image className=' h-[30vh] w-full' src={demo} />
          <h1 className='mt-9 font-bold text-2xl'>demo demo</h1>
          <p className='my-3 font-base text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas pariatur fugiat. Doloremque dolor amet accusantium voluptatem sequi ad. Praesentium.</p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <button className=' bg-black text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            <BsGithub className='text-4xl cursor-pointer' />
          </div>
        </div>

        <div className="h-[100%] w-[40vw] flex flex-col  border-[3px] px-6">
          <Image className=' h-[30vh] w-full' src={demo} />
          <h1 className='mt-9 font-bold text-2xl'>demo demo</h1>
          <p className='my-3 font-base text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas pariatur fugiat. Doloremque dolor amet accusantium voluptatem sequi ad. Praesentium.</p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <button className=' bg-black text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            <BsGithub className='text-4xl cursor-pointer' />
          </div>
        </div>

        <div className="h-[100%] w-[40vw] flex flex-col  border-[3px] px-6">
          <Image className=' h-[30vh] w-full' src={demo} />
          <h1 className='mt-9 font-bold text-2xl'>demo demo</h1>
          <p className='my-3 font-base text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas pariatur fugiat. Doloremque dolor amet accusantium voluptatem sequi ad. Praesentium.</p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <button className=' bg-black text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            <BsGithub className='text-4xl cursor-pointer' />
          </div>
        </div>

        <div className="h-[100%] w-[40vw] flex flex-col  border-[3px] px-6">
          <Image className=' h-[30vh] w-full' src={demo} />
          <h1 className='mt-9 font-bold text-2xl'>demo demo</h1>
          <p className='my-3 font-base text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas pariatur fugiat. Doloremque dolor amet accusantium voluptatem sequi ad. Praesentium.</p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <button className=' bg-black text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            <BsGithub className='text-4xl cursor-pointer' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default page
