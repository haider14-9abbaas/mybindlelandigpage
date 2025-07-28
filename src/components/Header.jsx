import React from 'react'
import logo from '../images/logo.png'
import { motion } from "motion/react"

const Header = () => {
  return (
    <>
      <header id='header' className='h-20 bg-[#FF5349] max-sm:h-15 flex items-center justify-center'>
        <motion.nav
          initial={{ transform: 'translateY(-100px)' }}
          animate={{ transform: 'translateY(0px)' }}
          transition={{  duration: '.5'}}
          className='flex flex-row flex-nowrap justify-center select-none gap-2 items-center text-white max-sm:text-xl text-2xl font-bold '>
          <div
            className='h-10 max-sm:h-8 cursor-pointer'>
            <img className='h-full' src={logo} alt="logo" />
          </div>
          <div className='cursor-pointer'>Mybindle</div>
        </motion.nav>
      </header>
    </>
  )
}

export default Header
