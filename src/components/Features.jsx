import React from 'react'
import { motion } from "motion/react"

const Features = () => {



  const CardsData = [
    {
      title: "🔥 Seamless Connections",
      discription: "Stay in touch with friends, family, and like-minded people with just a tap."
    },
    {
      title: "📸 Share Your Story",
      discription: "Upload photos, videos, and updates to let the world know what’s happening in your life."
    },
    {
      title: "💬 Real-Time Chat",
      discription: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."
    },
    {
      title: "🔒 Privacy First",
      discription: "Your data, your control. We prioritize your privacy with world-class security."
    },
    {
      title: "🌎 Discover & Explore",
      discription: "Find trending content, join communities, and follow pages that match your interests."
    },
    {
      title: "💼 Grow Your Business",
      discription: "Use our platform to market your brand, connect with customers, and build meaningful relationships."
    },
  ]
  return (
    <>
      <section id='features' className='mt-50 max-sm:mt-30'>
        <div className='flex flex-col gap-20 text-black '>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col items-center justify-center gap-10'>
            <h1 className='max-sm:text-3xl max-lg:text-4xl text-5xl text-shadow-lg mx-10 font-bold max-sm:text-center'>Features That Keep You Hooked!</h1>
            <p className='text-lg max-sm:text-sm font-semibold'>Meet, Chat, Share – Anytime, Anywhere!</p>
          </motion.div>
          <div className='flex flex-row flex-wrap gap-8 items-center my-8 justify-center max-sm:mx-2 mx-8'>
            {CardsData.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                key={i}
                className='flex flex-col cursor-pointer gap-5 items-center justify-center duration-200 hover:-translate-y-2 hover:-translate-x-2 min-h-50 max-w-100 max-sm:p-5 px-10 rounded-2xl shadow-[10px_10px_17px_0px_#d1d1d1]'
              >
                <h1 className='text-2xl text-center font-bold'>{item.title}</h1>
                <p className='text-center font-semibold'>{item.discription}</p>
              </motion.div>

            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
