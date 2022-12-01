import React from 'react';
import { motion } from 'framer-motion';

const RightPanel = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        delay: 2.5
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      x: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  }
  return (
    <motion.div className='fixed -right-2 h-fit w-fit bottom-48 rotate-90'
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ul className=''>
        <li className='side-panel-item hover:translate-y-px hover:scale-100 transition transform text-l'>
          <a href='mailto:travisliu708@gmail.com' target="_blank" rel="noreferrer">

            travisliu708@gmail.com
          </a>
        </li>
      </ul>
      <span className='h-0.5 w-42 bg-light-purple opacity-25 relative block top-[-0.75em] left-[13em]'></span>

    </motion.div>
  );
}

export default RightPanel;
