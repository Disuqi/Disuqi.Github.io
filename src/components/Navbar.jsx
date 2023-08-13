import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

import {styles} from "../styles"
import {navLinks} from "../constants"
import {logo, menu, close} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const resetToStart = () => 
  {
    setActive("");
    window.scrollTo(0, 0);
  };
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-primary to-transparent`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={resetToStart}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' style={{ margin: 0 }} />
            <p className='text-white text-[18px] font-bold cursor-pointer flex' style={{ margin: 0 }}>isuqi&nbsp;<span className='sm:block hidden'>| Software Engineer</span></p>    
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
          <li 
            key={link.id} 
            className={`${active === link.title ? "text-white" : "text-secondary"} transition duration-500 ease-in-out hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            src={ toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}/>
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-b from-[#0f0c29] to-[#060815] absolute top-14 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
              <ul className='list-none flex flex-col justify-end items-start gap-4'>
                {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar