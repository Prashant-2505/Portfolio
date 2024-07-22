import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import js from '../../public/icons/js.png';
import react from '../../public/icons/react.png';
import next from '../../public/icons/next.png';
import mongo from '../../public/icons/mongo.png';
import firebase from '../../public/icons/firebase.png';
import sql from '../../public/icons/sql.png';
import bootstrap from '../../public/icons/bootstrap.png';
import tailwind from '../../public/icons/tailwind.png';
import node from '../../public/icons/node.png';
import express from '../../public/icons/express.png';
import c from '../../public/icons/c++.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from '@/app/context/theme';

const Skills = ({ skillsRef }) => {

    const { theme } = useThemeContext()

    const skills = `
        h-[4rem] 
        w-[4rem]  
        bg-gray-300 
        px-3
        py-3
        text-white 
        rounded-tl-3xl 
        rounded-tr-3xl
        rounded-bl-3xl
        rounded-br-3xl
        cursor-pointer
    `;



    return (
        <div className='w-full min-h-[100vh] my-4 pt-[13vh]
       
        '

            ref={skillsRef}>
            <AnimatedText
                className={`!text-5xl text-center ${!theme ? 'text-[#f7f1e3]' : ''}`}
                text="Skills"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                    }
                }}
                className="w-full relative flex flex-col items-center justify-center rounded-full "
            >
                <motion.div
                    whileHover={{ scale: 1.3 }}

                    className="flex flex-col items-center justify-evenly pt-5 ">
                    <div >
                        <Image src={react} alt="react js" />
                    </div>
                    <p>React js</p>
                </motion.div>



                {/* bootstrap taiwind */}
                <div className="w-[50%] flex items-center justify-evenly pt-5 text-center">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={bootstrap} alt="Bootstrap" />
                        </div>
                        <p>Bootstrap</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={tailwind} alt="Firebase" />
                        </div>
                        <p>Tailwind css</p>
                    </motion.div>
                </div>


                {/* js,mongo...next */}
                <div className="w-full flex items-center justify-evenly pt-5 text-center">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={js} alt="Firebase" />
                        </div>
                        <p>Javascript</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={mongo} alt="Firebase" />
                        </div>
                        <p>Mongo DB</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={sql} alt="Firebase" />
                        </div>
                        <p>SQL</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={firebase} alt="Firebase" />
                        </div>
                        <p>Firebase</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={next} alt="Next.js" />
                        </div>
                        <p>Next js</p>
                    </motion.div>
                </div>


                {/* node,express */}
                <div className="w-[50%] flex items-center justify-evenly pt-5 text-center">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div

                            className={skills}
                        >
                            <Image src={node} alt="Node.js" />
                        </div>
                        <p>Node js</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                    >
                        <div
                            className={skills}
                        >
                            <Image src={express} alt="Express.js" />
                        </div>
                        <p>Express js</p>
                    </motion.div>
                </div>


                {/* c++ */}
                <motion.div
                    whileHover={{ scale: 1.3 }}

                    className="flex flex-col items-center justify-evenly pt-5 ">
                    <div >
                        <Image src={c} alt="C++" />
                    </div>
                    <p>C++</p>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Skills;
