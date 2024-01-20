import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from '../utils/motion';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => 
{
  return (
  <Tilt className="xs:w-[250px] w-full"  style={{ transformStyle: 'preserve-3d' }}>
    <motion.div variants={fadeIn("right", "spring", (index + 1) * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' style={{ transformStyle: 'preserve-3d' }}>
      <div className= 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center' style={{ transformStyle: 'preserve-3d' }}>
        <div className='flex flex-col justify-evenly items-center gap-10' style={{transform: 'translateZ(60px)'}}>
          <img role="img" src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </div>
    </motion.div>
  </Tilt>)
}

const About = () => {
  return (
    <>
      <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a dedicated software engineer with a strong passion for creating innovative solutions.&nbsp;
      Currently employed as a Software Engineer at&nbsp;<a href='https://unity.com/' className='text-secondary transition-all duration-300 ease-out hover:text-[#8967f8] hover:underline'>Unity</a>,&nbsp;
      I am also pursuing a Bachelor of Computer Science at the University of Salford.&nbsp;
      My expertise spans various sectors and technologies, including:
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")