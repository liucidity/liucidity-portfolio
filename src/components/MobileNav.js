import React from 'react';
import { motion } from 'framer-motion';
import smoothScrollTo from '../helpers/smoothScrollTo';

const MobileNav = React.forwardRef((props, ref) => {
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
    <aside ref={ref} className='bg-ming w-[18em] z-50 min-h-screen justify-center absolute right-0 transform translate-x-full ease-in-out duration-200' id='sidebar'>
      <nav>

        <motion.ol className='nav-buttons flex flex-col gap-16 items-center p-4 '
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
    </aside>


  )
});

export default MobileNav;
