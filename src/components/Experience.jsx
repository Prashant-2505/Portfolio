import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'
import { useThemeContext } from '@/app/context/Theme'

const Details = ({ position, company, time, address, work }) => {

    const ref = useRef()

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcons reference={ref} />
        <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5, type:'spring'}}
        >
            <h3 className=' capitalize font-bold text-2xl'>
                {position}@ <span className='text-pink-500'>{company}</span>
            </h3>
            <span className=' capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className=' font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        ref: ref, // Use the ref of the container
        initial: 0, // Set the initial scroll position
        threshold: 0.5, // Adjust the threshold to trigger the animation
    });


    const { theme } = useThemeContext()




    return (


        <div className={`my-[12rem] text-center ${theme ?'text-[#2c3e50]':'text-white'}`}>
            <h2 className='font-bold text-5xl mb-32'>Experience</h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={`absolute left-8 top-0 w-[4px] h-full ${theme ? 'bg-[#2c3e50]':'bg-white'} origin-top `} />
                <ul className="w-[70vw] flex flex-col items-start justify-between">
                    <Details
                        company="GSSOC"
                        position="Contributor"
                        time="May'2023 - August'2023"
                        address="Remote"
                        work="Develop some user cenreic ui using html css and js"
                    />
                    <Details
                        company="ECOMPARADISE"
                        position="Frontend Developer Intern"
                        time="January'2023 - March'2023"
                        address="New Delhi"
                        work="Develop some user cenreic ui using html css and js"
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience
