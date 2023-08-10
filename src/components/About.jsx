import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from '../utils/motion';
import {Tilt} from 'react-tilt';

const ServiceCard = ({index, title, icon}) => 
{
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>)
}

const About = () => {
  return (
    <div id="about" className='flex flex-col justify-center items-center w-full'>
      <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a software engineer with a passion for building things. I am currently working at 
        <a href='https://unity.com/' className='text-secondary transition-all duration-300 ease-out hover:text-[#8967f8] hover:underline'>Unity</a>
         as a Software Engineer Intern. I am also a student at the University of Salford, pursuing a Bachelor of Computer Science.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </div>
  )
}

export default About