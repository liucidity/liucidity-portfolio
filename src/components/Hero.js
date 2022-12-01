import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

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
  // const [scrollDirection, setScrollDirection] = useState(null)
  // const { scrollY } = useScroll()

  // useEffect(() => {
  //   let lastScrollY = scrollY.current
  //   return scrollY.onChange((latest) => {
  //     const direction = latest > lastScrollY ? "down" : "up"
  //     console.log("Page scroll: ", latest)
  //     console.log(direction)
  //     setScrollDirection(direction)
  //   })
  // }, [])
  return (


    < section className='flex flex-col items-center' >

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"

        className='mt-[12em] mb-[40em]'>

        <motion.h1
          variants={item}
          className='text-green text-lg font-normal p-4'>Hi! my name is,</motion.h1>
        <motion.h2
          variants={item}
          className='text-light-purple text-7xl font-semibold p-4'>Travis Liu.</motion.h2>
        <motion.h2
          variants={item}
          className='text-dark-purple text-7xl font-semibold p-4'>Full Stack Developer.</motion.h2>
        <motion.p
          variants={item}
          className='text-dark-purple text-lg w-[40em] p-4'>I'm a software developer specializing in building digital experiences. Work that let's me create accessibility for every day people excites me.</motion.p>
        {/* <motion.p
          variants={item}
          className='text-dark-purple text-lg w-[40em] p-4'>I'm a software developer specializing in building digital experiences. Work that let's me create accessibility for every day people excites me.</motion.p> */}
        {scrollDirection !== "down" &&
          <motion.div
            variants={item}
            className="flex flex-row justify-center pt-[12em]"
          >

            <svg className="w-6 h-6 text-green animate-bounce delay-300" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        }
      </motion.div>
    </ section>
  );
}

export default Hero;
