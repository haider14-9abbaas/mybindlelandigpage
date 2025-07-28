import React from 'react'
import herobg from '../images/herosection/herobg.png'
import card1 from '../images/herosection/card1.png'
import card2 from '../images/herosection/card2.png'
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <section id='hero' className='bg-[#FF5349] text-white min-h-[550px] lg:max-h-[550px] max-md:h-[850px] max-lg:max-h-[900px] max-md:gap-8 py-10'>
      <div className='flex flex-row max-lg:flex-col max-lg:gap-10'>
        <div className='w-full select-none lg:max-h-[420px] flex flex-col  max-lg:gap-10 gap-5 lg:pl-20 py-5 lg:pr-2 max-lg:justify-center max-lg:items-center '>
          <div className='flex flex-col max-sm:text-4xl max-md:text-5xl text-6xl font-bold flex-nowrap max-sm:leading-12 max-lg:leading-15 items-start max-lg:items-center'>
            <motion.h1
              initial={{ transform: 'translateX(-1000px)' }}
              animate={{ transform: 'translateX(0px)' }}
              transition={{ duration: '.8' }}
              className='flex flex-nowrap '>
              Stay Connected
            </motion.h1>
            <motion.h1
              initial={{ transform: 'translateX(-1000px)' }}
              animate={{ transform: 'translateX(0px)' }}
              transition={{ duration: '1.3' }}
              className=' opacity-80'>
              Stay Social
            </motion.h1>
            <motion.h1
              initial={{ transform: 'translateX(-1000px)' }}
              animate={{ transform: 'translateX(0px)' }}
              transition={{ duration: '1.6' }}
              className='opacity-50'>
              Stay You!
            </motion.h1>
          </div>
          <div className='flex flex-col text-lg max-sm:text-sm mx-auto max-lg:w-[80%] max-lg:text-center'>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: '1.3', duration: '1' }}
            >
              A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
              Whether you're looking to reconnect with old friends,
              build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </motion.p>
          </div>
          <div>
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0, ease: 'easeOut' }}
              className='bg-white text-xl px-5 py-2 rounded-lg border-2 border-white font-semibold cursor-pointer duration-150 hover:scale-105 ease-in hover:border-2 hover:text-white hover:bg-[#ff5349] text-[#ff5349]'>
              Get Started
            </motion.button>
          </div>
        </div>
        <div className='w-full'>
          <div className='lg:h-[600px] max-lg:h-[500px] relative max-md:h-[400px] flex z-10 justify-center'>
            <div className='absolute h-40 z-50 w-full left-0'>
              <motion.img
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 4, -4, 4, -4, 0],
                }}
                transition={{
                  opacity: {
                    delay: 1.8,
                    duration: 0.5,
                  },
                  scale: {
                    delay: 1.8,
                    duration: 0.5,
                  },
                  rotate: {
                    delay: 2.3,
                    duration: .8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
                className='relative mx-auto max-md:right-20 right-30 top-10 max-md:max-h-[60px] h-20'
                src={card1}
                alt=""
              />


            </div>
            <div>
              <div className='bottom-20 absolute h-40 z-50 w-full left-0'>
                <motion.img 
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 4, -4, 4, -4, 0],
                }}
                transition={{
                  opacity: {
                    delay: 2,
                    duration: 0.5,
                  },
                  scale: {
                    delay: 2,
                    duration: 0.5,
                  },
                  rotate: {
                    delay: 2.5,
                    duration: .8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
                className='relative mx-auto left-20 top-10 max-md:max-h-[60px] max-h-20' src={card2} alt="" />
              </div>
            </div>
            <div className=' overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, transform: 'translateY(1000px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)' }}
              transition={{ delay: '.5', duration: '1' }}
              className='h-full' src={herobg} alt="herobg" />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
