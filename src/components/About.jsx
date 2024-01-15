import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from '../utils/motion';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => 
{
  const [isClicked, setIsClicked] = React.useState("unclicked");
  const variants = 
  {
    "unclicked" : { scale: 1},
    "clicked": { scale: 1.5 }
  }

  const clickCard = () => 
  {
    if(isClicked === "clicked")
      setIsClicked("unclicked")
    else
      setIsClicked("clicked")
  }

  return (
  <Tilt className="xs:w-[250px] w-full three-d">
    <motion.div variants={fadeIn("right", "spring", (index + 1) * 0.5, 0.75)} className='three-d'>
      <motion.div variants={variants} animate={isClicked} onClick={clickCard} onMouseLeave={() => setIsClicked("unclicked")}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card three-d'>
        <div className= 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center three-d'>
          <div className='flex flex-col justify-evenly items-center gap-10' style={{transform: 'translateZ(60px)'}}>
            <img role="img" src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </div>
      </motion.div>
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
        I am a software engineer with a passion for building things. I am currently working at 
        <a href='https://unity.com/' className='text-secondary transition-all duration-300 ease-out hover:text-[#8967f8] hover:underline'>Unity</a>
         as a Software Engineer Intern. I am also a student at the University of Salford, pursuing a Bachelor of Computer Science.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")