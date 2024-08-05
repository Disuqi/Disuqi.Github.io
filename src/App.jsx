import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas} from "./components"
import { effect, signal } from '@preact/signals-react'

export const selectedProject = signal("shush");

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <p className="text-2xl text-white font-black">{selectedProject}</p>
        <Projects/>
        <Tech/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      { selectedProject == "test" && 
      <div className="flex justify-center items-center w-[vw] h-[vh] bg-black">
        <motion.div onClick={() => selectedProject.value = "shush"} layoutId="test" >
          <Tilt
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className={`relative w-full h-auto`}>
              <div className='absolute inset-0 flex justify-end card-img_hover m-1 gap-1'>
                <LinkButton icon={github} link={"https://github.com/Disuqi"} alt='github' colorClass='black-gradient' />
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>Test</h3>
              <p className='text-secondary text-[14px] mt-2'>Select me to see a cool animation</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              <p className={`text-[14px] text-indigo-400`}>@shush</p>
              <p className={`text-[14px] text-orange-400`}>@framer-motion</p>
            </div>
          </Tilt>
      </motion.div>
      </div>}
    </BrowserRouter>
  )
}

export default App
