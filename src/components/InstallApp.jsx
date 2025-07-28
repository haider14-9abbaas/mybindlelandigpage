import React, { useState } from 'react'
import { motion } from "motion/react"

const InstallApp = ({ id }) => {
  const [color, setcolor] = useState(0)
  const CardsData = [
    {
      title: "Download",
      discription: "Open Play Store or App Store"
    },
    {
      title: "Install App ",
      discription: "The app will install automatically."
    },
    {
      title: "Ready to Use",
      discription: "Sign up or log in to start exploring!"
    },

  ]
  return (
    <>
      <section id='install' className='mt-40'>
        <div className='flex flex-col justify-center items-center gap-15 mx-10' >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className='max-sm:text-4xl max-md:text-5xl max-sm:text-center text-6xl font-bold'>How to Install Our App</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: '.3', duration: '1' }}
            viewport={{ once: false, amount: 0.5 }}
            className='text-lg text-center max-sm:text-sm font-semibold'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</motion.p>
          <div className='flex flex-row justify-between items-center gap-5 text-2xl font-bold max-sm:w-full max-md:w-xl w-2xl' >
            <p className={`${color === 0 ? 'text-[#FF5349]' : 'text-black'}`}>01</p>
            <hr className='text-slate-400 border-1 w-full' />
            <p className={`${color === 1 ? 'text-[#FF5349]' : 'text-black'}`}>02</p>
            <hr className='text-slate-400 border-1 w-full' />
            <p className={`${color === 2 ? 'text-[#FF5349]' : 'text-black'}`}>03</p>
          </div>
          <div className='flex flex-row gap-5 flex-wrap justify-center'>
            {CardsData.map((item, i) => (
              <motion.div key={i} onClick={() => setcolor(i)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col cursor-pointer gap-5 items-center justify-center duration-200 hover:-translate-y-2 hover:-translate-x-2 h-30 lg:w-80 md:w-80 sm:w-80 max-sm:min-w-[300px] max-sm:p-5 px-10 rounded-2xl shadow-[10px_10px_17px_0px_#d1d1d1]'>
                <h1 className='text-2xl text-center font-bold text-shadow-lg'>{item.title}</h1>
                <p className='text-center font-semibold'>{item.discription}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default InstallApp
