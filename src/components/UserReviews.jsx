import React, { useRef, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

import emily from '../images/reviews/emily.png';
import amit from '../images/reviews/amit.png';
import sophie from '../images/reviews/sophie.png';
import javier from '../images/reviews/javier.png';
import nora from '../images/reviews/nora.png';
import patrick from '../images/reviews/patrick.png';
import sandie from '../images/reviews/Sandie.png';
import lucas from '../images/reviews/lucas.png';

const UserReviews = () => {
  const [hovered, setHovered] = useState(false);
  const [SeeMore, SetSeeMore] = useState(false);

  const seeLessRef = useRef(null);
  const seeMoreRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const CardsData = [
    {
      discription:
        'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
      image: emily,
      name: 'Emily R',
      location: 'USA ',
    },
    {
      discription:
        'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online',
      image: amit,
      name: 'Amit K',
      location: 'India',
    },
    {
      discription:
        'I joined just to explore, but now I cannott imagine my day without it. The real-time chat and engaging communities make every interaction special!',
      image: sophie,
      name: 'Sophie M',
      location: 'UK',
    },
    {
      discription:
        'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand',
      image: javier,
      name: 'Javier L',
      location: 'Spain',
    },
    {
      discription:
        'The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!',
      image: lucas,
      name: 'Lucas T',
      location: 'Brazil',
    },
    {
      discription:
        'I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense',
      image: nora,
      name: 'Nora S',
      location: 'Canada',
    },
    {
      discription:
        'This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special',
      image: patrick,
      name: 'Patrick',
      location: 'USA',
    },
    {
      discription:
        'A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I’m hooked!',
      image: sandie,
      name: 'Sandie',
      location: 'Russia',
    },
    {
      discription:
        'I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense',
      image: javier,
      name: 'James C',
      location: 'France',
    },
    {
      discription:
        'I joined just to explore, but now I cannott imagine my day without it. The real-time chat and engaging communities make every interaction special!',
      image: amit,
      name: 'Anderson',
      location: 'Spain',
    },
    {
      discription:
        'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online',
      image: 'https://randomuser.me/api/portraits/women/91.jpg',
      name: 'Sarah Johnsonm',
      location: 'Canada',
    },
  ];



  return (
    <section id='reviews' className='my-20'>
      <div className='flex flex-col gap-20'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className='max-sm:text-4xl max-md:text-5xl text-center text-6xl font-bold'
        >
          What Our Users Say
        </motion.h1>

        <div>
          <div
            style={
              !SeeMore
                ? {
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                }
                : {}
            }
            className={`flex flex-row flex-wrap gap-5 justify-center ${SeeMore ? 'h-max pb-20' : 'max-h-[600px]'
              } overflow-hidden m-2`}
          >
            {CardsData.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05, // Staggered entrance
                  ease: [2.25, 8.46, 8.45, 2.94], // smooth bezier
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className='max-w-sm h-max w-full bg-gradient-to-br text-black rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300'

              >
                <div className='p-6 sm:p-8'>
                  <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center space-x-2'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z' />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className='text-xl font-medium mb-6'>{item.discription}</blockquote>
                  <div className='flex items-center space-x-4'>
                    <img
                      src={item.image}
                      alt='404'
                      className='w-12 h-12 rounded-full border-2 border-white'
                    />
                    <div>
                      <p className='font-semibold'>{item.name}</p>
                      <p className='text-sm'>{item.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!SeeMore && (
            <div
              ref={seeMoreRef}
              onClick={() => {
                SetSeeMore(true);
                setHovered(false);
                setTimeout(() => scrollToRef(seeLessRef), 0);
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className='relative h-xl px-8 py-4 cursor-pointer border-2 max-w-max text-red-500 text-2xl shadow-2xl mx-auto rounded-xl overflow-hidden'
            >
              <span
                className={`relative z-10 transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'
                  }`}
              >
                See More
              </span>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${hovered ? 'top-1/2 opacity-100 -translate-y-1/2' : 'top-full opacity-0 translate-y-0'
                  }`}
              >
                <ArrowDown className='w-6 h-6 text-red-500' />
              </div>
            </div>
          )}

          {SeeMore && (
            <div
              ref={seeLessRef}
              onClick={() => {
                SetSeeMore(false);
                setHovered(false);
                setTimeout(() => scrollToRef(seeMoreRef), 0);
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className='relative h-xl px-8 py-4 cursor-pointer border-2 max-w-max text-red-500 text-2xl shadow-2xl mx-auto rounded-xl overflow-hidden'
            >
              <span
                className={`relative z-10 transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'
                  }`}
              >
                See Less
              </span>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${hovered ? 'top-1/2 opacity-100 -translate-y-1/2' : 'top-full opacity-0 translate-y-0'
                  }`}
              >
                <ArrowUp className='w-6 h-6 text-red-500' />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
