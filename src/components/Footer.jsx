import React, { useEffect, useState } from 'react'
import image1 from '../images/footer/image1.png'
import image2 from '../images/footer/image2.png'
import apple from '../images/footer/apple.png'
import playstore from '../images/footer/googleplay.png'
import { motion } from "framer-motion"

const Footer = () => {
  const [Cwidth, setCwidth] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setCwidth(width <= 1180);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section
      id="donate"
      className={`bg-[#FF5349] relative z-20 overflow-hidden text-white rounded-t-3xl mt-40 mx-5 max-md:mx-0 max-md:px-5 max-sm:h-max ${Cwidth ? 'py-10 pt-0 mx-10 h-[500px]' : 'lg:h-[500px]'}`}
    >
      <div className={`mx-5 mt-10 flex ${Cwidth ? 'flex-col justify-center items-center gap-5' : 'flex-row justify-between ml-20 mr-10'}`}>
        
        {/* LEFT SIDE */}
        <div
          className={`flex relative z-40 flex-col gap-8 ${Cwidth ? 'text-center items-center' : 'w-[60%]'}`}
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`break-words text-5xl font-bold ${Cwidth ? 'text-4xl' : ''} max-sm:text-3xl`}
          >
            Join the Fun – Download MyBindle Now!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3, duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-md max-sm:text-sm font-semibold lg:w-md"
          >
            Your Social Network, Your Way. Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
          </motion.p>

          {/* BUTTONS */}
          <div className='flex flex-wrap max-lg:justify-center gap-5'>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: .2, duration: .2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-row group gap-2 justify-center hover:scale-105 cursor-pointer duration-150 py-2 pr-8 px-3 rounded-4xl bg-white text-black items-center'
            >
              <div className='h-8'>
                <img className='h-full group-hover:scale-110 duration-150' src={apple} alt="App Store" />
              </div>
              <div className='flex flex-col'>
                <p className='text-[8px] text-slate-700'>DOWNLOAD ON THE</p>
                <p className='font-semibold text-lg'>App Store</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: .2, duration: .2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-row group gap-2 justify-center hover:scale-105 duration-150 cursor-pointer py-2 px-5 rounded-4xl bg-white text-black items-center'
            >
              <div className='h-7'>
                <img className='h-full group-hover:scale-110 duration-150' src={playstore} alt="Google Play" />
              </div>
              <div className='flex items-start flex-col'>
                <p className='text-[8px] text-slate-700'>GET IT ON</p>
                <p className='font-semibold text-lg'>Google Play</p>
              </div>
            </motion.div>
          </div>

          {/* MADE BY SECTION */}
          <div className='mt-10 text-white text-left flex flex-col items-start'>
            <p className="text-lg font-semibold">
              Made by Syed Haider Abbas Zaidi <span className="text-red-500">❤️</span>
            </p>
            <div className="flex gap-5 mt-2">
              <a href="https://github.com/haider14-9abbaas" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-7 h-7 hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.84 10.96.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.09-.12-.3-.52-1.53.11-3.19 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.66.24 2.89.12 3.19.74.8 1.18 1.83 1.18 3.09 0 4.45-2.7 5.43-5.26 5.71.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.66.79.55A10.999 10.999 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/syed-haider-abbas-zaidi-132525215/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-7 h-7 hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.98 1.98 1.98s1.98-.89 1.98-1.98c0-1.1-.89-1.98-1.98-1.98zM3.5 21h3v-11h-3v11zM8.5 10h2.7v1.56h.04c.38-.72 1.28-1.48 2.63-1.48 2.82 0 3.34 1.85 3.34 4.26V21h-3v-5.17c0-1.23-.03-2.81-1.72-2.81-1.73 0-2 1.35-2 2.74V21h-3v-11z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        {!Cwidth && (
          <div className="overflow-hidden absolute z-10 h-full right-8 items-end flex gap-5">
            <div className="w-70 relative -top-10">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .3, duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-max w-max" src={image1} alt="image1" />
            </div>
            <div className="w-70 relative top-5">
              <motion.img
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-max w-max" src={image2} alt="image2" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Footer;