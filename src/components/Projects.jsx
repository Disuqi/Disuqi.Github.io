import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, link } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const LinkButton = ({icon, link, alt, colorClass}) =>
{
  return (
    <div onClick={() => window.open(link, "_blank")} className={`shadow-md ${colorClass} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out hover:w-12 hover:h-12`}>
      <img src={icon} alt={alt} className='w-1/2 h-1/2 object-contain' />
    </div>
  )
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  const hasWebPage = website_link !== "" && website_link !== undefined && website_link !== null
  const hasImage = image !== "" && image !== undefined && image !== null
  return (
    <motion.div variants={fadeIn("up", "spring", (index + 1) * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className={`relative w-full h-${hasImage? '[230px]' : 'auto'}`}>
          <div className='absolute inset-0 flex justify-end card-img_hover m-1 gap-1'>
            {hasWebPage && <LinkButton icon={link} link={website_link} alt="webpage"  colorClass="bg-gradient-to-l from-[#141E30] to-[#243B55]" />}
            <LinkButton icon={github} link={source_code_link} alt='github' colorClass='black-gradient' />
          </div>
          {hasImage && <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />}
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary text-[14px] mt-2'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (<p key={tag.name} className={`text-[14px] ${tag.color}`}>@{tag.name}</p>))}
        </div>
      </Tilt>
    </motion.div>)
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-5 flex flex-wrap gap-7'>
        {projects.map((project, index) => (<ProjectCard key={`project-${index}`} index={index} {...project} />))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
