import React, { useEffect, useState } from 'react';
import image1 from '../images/donate/image1.png';
import image2 from '../images/donate/image2.png';
import heartbg from '../images/donate/heartbg.png'
import { motion, AnimatePresence } from "framer-motion"; 
import { Heart } from 'lucide-react'; 


const MotionHeart = motion(Heart);

const DonateSection = () => {
  const [Cwidth, setCwidth] = useState(false);
  const [hearts, setHearts] = useState([]); 

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setCwidth(width <= 1180);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleDonateClick = () => {
    const newHearts = Array.from({ length: 100 }).map((_, i) => ({
      id: Date.now() + i, 
      left: Math.random() * 100, 
      size: Math.random() * 20 + 15, 
      duration: Math.random() * 2 + 3, 
      delay: Math.random() * 0.3, 
    }));
    setHearts(prevHearts => [...prevHearts, ...newHearts]);

    newHearts.forEach(heart => {
      setTimeout(() => {
        setHearts(prevHearts => prevHearts.filter(h => h.id !== heart.id));
      }, heart.duration * 1000 + 100);
    });
  };

  return (
    <section
      id="donate"
      className={`bg-[#FF5349] relative z-20 overflow-hidden text-white my-40 lg:mx-30 rounded-3xl max-md:mx-5 max-sm:h-max ${Cwidth ? 'py-10 pt-0 mx-10 h-[400px]' : 'lg:h-[450px]'
        } `}
    >
      <div className="heart-shower-container absolute inset-0 overflow-hidden pointer-events-none z-50">
        <AnimatePresence>
          {hearts.map(heart => (
            <MotionHeart 
              key={heart.id}
              size={heart.size} 
              color="white" 
              fill="white" 
              initial={{
                y: -50, 
                opacity: 0,
                x: `${heart.left}vw`, 
                scale: 0.5,
              }}
              animate={{
                y: '100vh',
                opacity: [0, 1, 1, 0],
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: '120vh', 
                transition: { duration: 0.5 }
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                ease: "linear",
              }}
              style={{
                position: 'absolute',
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className={`mx-10 lg:ml-20 mt-10 flex ${Cwidth ? 'flex-col gap-5' : 'flex-row'}`}>
        <div
          className={`flex relative z-40 overflow-visible flex-col gap-8 w-[65%] ${Cwidth ? 'text-center justify-center w-full items-center' : ''
            }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`break-words text-5xl font-bold ${Cwidth ? 'text-4xl text-center' : ''
              } max-sm:text-3xl`}
          >
            Be the Reason <span className={`${Cwidth ? 'hidden' : 'mx-40'}`}></span> Someone Smiles
            Today!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: '.3', duration: '1' }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-md max-sm:text-sm font-semibold">
            Your generosity can change lives every donation brings hope, support, and a brighter
            future. Give today and make a difference!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: .3, duration: 0, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            onClick={handleDonateClick}
            className={`bg-white w-max text-xl px-5 py-2 rounded-lg font-semibold cursor-pointer border-2 border-white duration-150 hover:scale-105 ease-in hover:border-2 hover:text-white hover:bg-transparent text-[#ff5349] ${Cwidth ? 'mx-auto' : ''
              }`}
          >
            Donate Now
          </motion.button>
        </div>

        {Cwidth && (
          <div className="absolute inset-0 z-10 flex justify-center items-center">
            <img src={heartbg} size={400} className="opacity-45 max-w-[60%] h-auto object-contain" />
          </div>
        )}

        {!Cwidth && (
          <div className="overflow-hidden absolute z-10 h-full justify-end right-8 items-end flex flex-row w-full">
            <div className="w-70">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .3, duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bottom-0" src={image1} alt="image1" />
            </div>
            <div className="w-70">
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
};

export default DonateSection;