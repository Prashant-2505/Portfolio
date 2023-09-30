'use client'

import Image from 'next/image'
import profile from '../../public/images/profile.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { useThemeContext } from './context/Theme'

export default function Home() {

  const { theme } = useThemeContext()

  return (
    <main className={`flex h-[100vh] w-full  items-center justify-between mt-[6rem]   ${theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : 'bg-[#2c3e50] text-white' }`}>
      <div className=" w-[50%] h-[80vh] flex justify-center items-center">
        <Image className='h-[70%] w-[80%]' src={profile} alt='Prashant' />
      </div>
      <div className=" w-[50%] h-[80%] p-5 flex flex-col items-center self-center text-left ">

        <AnimatedText
          text="Turning Vision Into Reality With Code And Design"
          className={`!text-5xl ${theme ? '!text-black' : '!text-white'}`}
          />
        <p className='my-4 text-base font-medium '>
          As a skilled full-stack developer, I am to turning ideas into innovative web applications, Explore my latest projects , showcasing my expertise in React.js , Next.js and web development
        </p>
        <div className=" flex items-center self-start mt-2">
          <Link
            className={`flex  items-center gap-2 border-[2px] ${theme ? 'bg-black text-white' : 'bg-white text-[#2c3e50]'} p-2.5 px-6 rounded-lg text-lg font-semibold ${theme ? 'hover:bg-white hover:text-[#2c3e50] transition 0.3s ease-in hover:border-[2px]':'hover:bg-[#2c3e50] hover:text-white transition 0.3s ease-in border-[2px] border-[#2c3e50] hover:border-[2px]' } `}
            download={true}
            target={'_blank'}
            href="/resume.pdf">
            <p>Resume</p>
            <BsFillArrowDownCircleFill />
          </Link>
          <Link
          className=' ml-4 text-lg font-medium capitalize text-dark underline'
          target={'_blank'} href="mailto:sharmaprashant2505@gmail.com">
            Contact
          </Link>

        </div>
      </div>
    </main>
  )
}
