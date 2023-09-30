'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { BsLinkedin, BsGithub,BsFillSunFill,BsFillMoonStarsFill } from 'react-icons/bs'
import { SiHackerrank,SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'
import  { useThemeContext } from '@/app/context/theme';




const CustomLink = ({ href, title, className }) => {
    const path = usePathname()
    const { theme, setTheme } = useThemeContext();

    return (

        <Link href={href}>
            <href className={`${className} relative group`}>
                {title}
                <span
                   className={`h-[1px] inline-block w-0 ${theme ? 'bg-[#2c3e50]' : 'bg-white'} absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${path === href ? 'w-full' : 'w-0'}`}
                >
                    &nbsp;
                </span>

            </href>
        </Link>
    );
}

const Navbar = () => {
    const { theme, setTheme } = useThemeContext()

    return (
        <div className={`w-full px-32 py-7 font-medium flex items-center justify-between fixed top-0 z-40 ${theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : 'bg-[#2c3e50] text-white' }  `}>
            <nav>
                <CustomLink className='mr-4' href="/" title="Home" />
                <CustomLink className='mx-4' href="/abouts" title="About" />
                <CustomLink className='ml-4' href="/project" title="Projects" />
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav className='flex items-center justify-center gap-3 flex-wrap'>
                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://www.linkedin.com/in/prashant-sharma-ab9b0a209/'
                    target='_blank'
                    className='text-3xl text-blue-500'
                >
                    <BsLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://github.com/Prashant-2505'
                    target='_blank'
                    className='text-3xl'
                >
                    <BsGithub />
                </motion.a>

                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://leetcode.com/prashant_71200/'
                    target='_blank'
                    className='text-3xl text-yellow-500'
                >
                    < SiLeetcode/>
                </motion.a>

                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://www.hackerrank.com/sharmaprashant23'
                    target='_blank'
                    className='text-3xl text-green-500'
                >
                    < SiHackerrank/>
                </motion.a>

                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    target='_blank'
                    className={`text-3xl ${theme ? 'text-[#2c3e50]':'text-white'} cursor-pointer ml-9`}
                    onClick={() => setTheme(prevTheme => !prevTheme)}  
                >
                    {theme ?  <BsFillSunFill/> :  <BsFillMoonStarsFill/>}
        
                </motion.a>

                
               
            </nav>
        </div>
    )
};

export default Navbar;
