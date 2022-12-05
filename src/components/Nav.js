import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import smoothScrollTo from '../helpers/smoothScrollTo';
// import MobileNav from './MobileNav.js';
// import UseOutsideClick from '../helpers/useOutsideClick';

const Nav = ({ scrollDirection }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  // const mobileNavRef = useRef(null);
  // const mobileNavOutsideClick = UseOutsideClick(mobileNavRef);
  // if (mobileNavOutsideClick) {
  //   const sidebar = document.getElementById('sidebar')

  //   sidebar.classList.toggle('translate-x-full')
  //   console.log(sidebar)

  // }


  // make sure nav can close while clicking outside

  // disable scroll with nav bar open
  // blur body while navbar open

  // const handleMobileNav = () => {
  //   const btn = document.getElementById("mobileNavButton")

  //   const sidebar = document.getElementById('sidebar')
  //   return sidebar.classList.toggle('translate-x-full')



  // }
  // console.log(mobileNavOutsideClick)

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


  return (


    <header className={`h-24 z-50 md:p-4 sticky drop-shadow-md transition-transform ease-in-out duration-300 ${scrollDirection === "down" ? "-top-24 -translate-y-24" : "top-0"}`
    }>






      <motion.nav
        className='bg-oxford-blue flex flex-row justify-between '
        variants={container}
      >

        <motion.div
          className='nav-logo'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            duration: 2
          }}
        >
          <a href='#'>
            <img src='LTC.png' className='w-12 m-2' alt='logo' />
          </a>

        </motion.div>

        {/* <div className='md:hidden' id="mobileNavButton">
          <button onClick={handleMobileNav}>

            <svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

        </div> */}


        {/* <MobileNav ref={mobileNavRef} /> */}




        <motion.ol className='nav-buttons md:flex flex-row gap-6 justify-end items-center p-4 '
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li
            variants={item}
            className='hidden md:block'
          >
            <a href="/#about" className='heading before:content-["01."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'about')}> About</a>
          </motion.li>
          <motion.li
            variants={item}
            className='hidden md:block'
          >
            <a href="/#projects" className='heading before:content-["02."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'projects')}> Projects</a>
          </motion.li>
          <motion.li
            variants={item}
            className='hidden md:block'
          >
            <a href="/#contact" className='heading before:content-["03."] before:text-green text-light-purple' onClick={(e) => smoothScrollTo(e, 'contact')}> Contact</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href='https://www.canva.com/design/DAFPRmTdgCQ/vTmEhFBq4JM73E2iJ2-z9g/view?utm_content=DAFPRmTdgCQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" rel="noreferrer" className='' >
              <button className='text-light-purple rounded-md bg-green/20  p-1 border-green border-2 hover:bg-green/60' >
                Resume
              </button>
            </a>
          </motion.li>
        </motion.ol>
      </motion.nav>
    </header >

  );
}

export default Nav;
