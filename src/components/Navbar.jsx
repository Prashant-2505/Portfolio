'use client'
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiHackerrank } from 'react-icons/si'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className }) => {
    const path = usePathname()
    return (

        <Link href={href}>
            <href className={`${className} relative group`}>
                {title}
                <span
                    className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${path === href ? 'w-full' : 'w-0'
                        }`}
                >
                    &nbsp;
                </span>

            </href>
        </Link>
    );
}

const Navbar = () => {
    return (
        <div className='w-full px-32 py-8 font-medium flex items-center justify-between fixed top-0 z-40 bg-[#f5f6fa] '>
            <nav>
                <CustomLink className='mr-4' href="/" title="Home" />
                <CustomLink className='mx-4' href="/About" title="About" />
                <CustomLink className='ml-4' href="/project" title="Projects" />
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav className='flex items-center justify-center gap-3 flex-wrap'>
                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://www.linkedin.com'
                    target='_blank'
                    className='text-3xl text-blue-500'
                >
                    <BsLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://www.github.com'
                    target='_blank'
                    className='text-3xl'
                >
                    <BsGithub />
                </motion.a>
                <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{scale:0.9}}
                    href='https://www.github.com'
                    target='_blank'
                    className='text-3xl text-green-500'
                >
                    < SiHackerrank/>
                </motion.a>
               
            </nav>
        </div>
    )
};

export default Navbar;
