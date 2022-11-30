import React from 'react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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


    <section className='flex flex-col items-center'>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"

        className='mt-[20em] mb-[32em]'>

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
      </motion.div>
    </section>
  );
}

export default Hero;
