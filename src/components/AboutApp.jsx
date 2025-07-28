import React, { useEffect, useState } from 'react';
import rotateleft from '../images/aboutsection/rotateleft.png';
import rotateright from '../images/aboutsection/rotateright.png';
import { motion } from 'motion/react';

const AboutApp = () => {
  const [isMobile, setIsMobile] = useState(null);
  const [Cwidth, setCwidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setCwidth(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CardsData = [
    {
      title: '🎥 Short Videos & Reels',
      discription: 'Share engaging, bite-sized content that keeps everyone entertained.',
    },
    {
      title: '🔔 Smart Notifications',
      discription: 'Stay updated on what matters without the noise.',
    },
    {
      title: '👥 Interest-Based Communities',
      discription: 'Join groups and discussions that match your passion.',
    },
  ];

  return (
    <>
      <section id='about' className='mt-30 max-sm:mt-20 lg-h-[550px] '>
        <div className='flex flex-row max-lg:flex-col w-full max-lg:gap-40'>

          <div className='w-full flex justify-center items-center'>
            <div className='relative w-full max-w-[100vw] overflow-x-clip'>
              <div className='lg:w-100 lg:h-100 max-sm:h-72 max-sm:w-72 max-lg:h-80 max-lg:w-80 mx-auto relative rounded-full bg-[#FF5349]'>
                <div className='absolute -bottom-5 max-lg:-left-8 lg:-left-10 w-80 h-80 lg:w-120 sm:h-100 sm:w-100 md:h-100 md:w-100 lg:h-120'>
                  <motion.img
                    initial={{ opacity: 0, rotate: 30 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='relative h-full'
                    src={rotateleft}
                    alt='rotateleft'
                  />
                </div>
                <div className='absolute bottom-30 left-20 h-60 w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-100 lg:w-100'>
                  <motion.img
                    initial={{ opacity: 0, rotate: -30 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='relative top-5'
                    src={rotateright}
                    alt='rotateright'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full px-5'>
            <div className='flex flex-col gap-10 max-sm:px-0 px-5'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className='max-sm:text-4xl max-md:text-5xl text-6xl font-bold max-sm:text-center'
              >
                Where Every Click Sparks a Connection!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className='text-lg max-sm:text-sm font-semibold max-sm:text-center'
              >
                A small act of kindness today can create a lifetime of impact for someone in need.
                Give from the heart and change a life!
              </motion.p>

              <div className='flex flex-col gap-3'>
                {isMobile !== null &&
                  CardsData.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        x: isMobile ? 0 : 500,
                        y: isMobile ? 100 : 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className='flex min-h-40 py-5 cursor-pointer justify-center gap-5 flex-col max-sm:px-3 px-5 duration-200 rounded-2xl hover:-translate-y-2 hover:-translate-x-2 shadow-[10px_10px_17px_0px_#d1d1d1]'
                    >
                      <h1 className='text-2xl font-bold text-shadow-lg max-sm:text-center'>
                        {item.title}
                      </h1>
                      <p className='font-semibold max-sm:text-center'>{item.discription}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutApp;
