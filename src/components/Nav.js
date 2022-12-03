import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import smoothScrollTo from '../helpers/smoothScrollTo';
import MobileNav from './MobileNav.js';
import UseOutsideClick from '../helpers/useOutsideClick';

const Nav = ({ scrollDirection }) => {

  const mobileNavRef = useRef(null);
  const mobileNavOutsideClick = UseOutsideClick(mobileNavRef);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      y: -20
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  // make sure nav can close while clicking outside

  // disable scroll with nav bar open
  // blur body while navbar open

  const handleMobileNav = () => {
    const btn = document.getElementById("mobileNavButton")

    const sidebar = document.getElementById('sidebar')
    return sidebar.classList.toggle('translate-x-full')



  }
  console.log(mobileNavOutsideClick)

  return (


    <header className={`h-24 z-50 md:p-4 sticky transition-transform ease-in-out duration-300 ${scrollDirection === "down" ? "-top-24 -translate-y-24" : "top-0"}`
    }>




      <MobileNav ref={mobileNavRef} />

      <nav className='bg-ming flex flex-row justify-between'>
        <div className='nav-logo'>
          <a href='#'>
            <svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </a>

        </div>

        <div className='md:hidden' id="mobileNavButton">
          <button onClick={handleMobileNav}>

            <svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

        </div>





        <motion.ol className='nav-buttons hidden md:flex flex-row gap-6 justify-end items-center p-4 '
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li
            variants={item}>
            <a href="/#about" className='before:content-["01."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'about')}> About</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href="/#projects" className='before:content-["02."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'projects')}> Projects</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href="/#contact" className='before:content-["03."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'contact')}> Contact</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href='mailto:travisliu708@gmail.com' target="_blank" rel="noreferrer" className='' >
              <button className='text-light-purple rounded-md bg-green/20  p-2 border-green border-2 hover:bg-green/60' >
                Email Me!
              </button>
            </a>
          </motion.li>
        </motion.ol>
      </nav>
    </header >

  );
}

export default Nav;
