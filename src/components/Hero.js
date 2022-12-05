import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import smoothScrollTo from '../helpers/smoothScrollTo';

const Hero = ({ scrollDirection }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1,
        delay: 1
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      y: 40
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  return (


    < section className=' flex flex-col items-center' >

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"

        className='mt-[4em] p-4 md:mt-[12em] mb-[40em]'>

        <motion.h1
          variants={item}
          className='text-green p-2 font-normal md:text-lg md:p-4'>Hi! my name is,</motion.h1>
        <motion.h2
          variants={item}
          className='text-light-purple p-2 text-2xl font-semibold md:text-7xl md:p-4'>Travis Liu.</motion.h2>
        <motion.h2
          variants={item}
          className='text-dark-purple p-2 text-2xl font-semibold md:text-7xl md:p-4'>Full Stack Developer.</motion.h2>
        <motion.p
          variants={item}
          className='text-dark-purple p-2 text-sm md:text-lg md:w-[40em] md:p-4'>I'm a software developer specializing in building digital experiences. Work that let's me create accessibility for every day people excites me.</motion.p>
        {/* <motion.p
          variants={item}
          className='text-dark-purple text-lg w-[40em] p-4'>I'm a software developer specializing in building digital experiences. Work that lets me create accessibility for everyday people excites me.</motion.p> */}
        {scrollDirection !== "down" &&
          <motion.div
            variants={item}
            className="flex flex-row justify-center pt-[12em]"
          >
            <a href="/#about" className='rounded-full border-2 border-green text-light-purple pt-3' onClick={e => smoothScrollTo(e, 'about')}>
              <button>


                <svg className="w-6 h-6 text-green animate-bounce delay-300" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>

              </button>
            </a>
          </motion.div>
        }
      </motion.div>
    </ section>
  );
}

export default Hero;
