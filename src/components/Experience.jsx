import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'
import { useThemeContext } from '@/app/context/theme'

const Details = ({ position, company, time, address, work }) => {

    const ref = useRef()

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    sm:w-full
    md:w-full
    '>
        <LiIcons reference={ref} 
          className=""
        />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
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


        <div className={` border-[3px] w-full h-full border-red-900 my-[12rem] text-center ${theme ? 'text-[#2c3e50]' : 'text-[#f7f1e3]'}
        sm:my-[1rem] sm:text-left sm:w-full
       
        `}>
            <h2 className='font-bold text-5xl mb-32 text-center'>Experience</h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative
                sm:w-full
                md:w-full
                ">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={`absolute left-8 top-0 w-[4px] h-full ${theme ? 'bg-[#2c3e50]' : 'bg-white'} origin-top 
                    sm:hidden 
                    md:hidden
                    `} />

                <ul className="flex flex-col items-start justify-between
                sm:w-full sm:p-0 sm:m-0 border-[5px]
                 border-blue-500
                ">
                    <Details
                        company="GSSOC"
                        position="Contributor"
                        time="May'2023 - August'2023"
                        address="Remote"
                        work="Contributed to diverse web development projects in the GirlScript Summer of Code program, collaborating on React, Firebase, and Bootstrap projects to build dynamic and responsive user interfaces, showcasing strong problem-solving skills in a fast-paced, collaborative environment."
                    />
                    <Details
                        company="ECOMPARADISE"
                        position="Frontend Developer Intern"
                        time="January'2023 - March'2023"
                        address="New Delhi"
                        work="Developed engaging, user-friendly landing pages and functional components as a Frontend Developer, utilizing HTML, CSS, and JavaScript, showcasing strong problem-solving skills and adaptability to changing project requirements."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience
