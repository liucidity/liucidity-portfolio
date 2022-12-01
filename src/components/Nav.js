import React from 'react';
import { motion } from 'framer-motion';

const Nav = ({ scrollDirection }) => {
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


    <header className={`h-24 p-4 sticky transition ${scrollDirection === "down" ? "-top-24" : "top-0"}`
    }>
      <nav className=''>
        <div className='nav-logo'>

        </div>
        <motion.ol className='nav-buttons flex flex-row gap-6 justify-end p-4'
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li
            variants={item}>
            <a href="/#about" className='before:content-["01."] before:text-green text-light-purple'> About</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href="/#projects" className='before:content-["02."] before:text-green text-light-purple'> Projects</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <a href="/#contact" className='before:content-["03."] before:text-green text-light-purple'> Contact</a>
          </motion.li>
          <motion.li
            variants={item}
          >
            <button>
              Resume
            </button>
          </motion.li>
        </motion.ol>
      </nav>
    </header >

  );
}

export default Nav;
