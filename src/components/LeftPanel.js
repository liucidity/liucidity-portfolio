import React from 'react';
import { motion } from 'framer-motion';

const LeftPanel = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        delay: 2
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
    <motion.div className='fixed left-12 bottom-0'
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ul>
        <li className='side-panel-item'>github</li>
        <li className='side-panel-item'>github</li>
        <li className='side-panel-item'>github</li>
        <li className='side-panel-item'>github</li>
        <li className='side-panel-item'>github</li>
      </ul>
      <span className='h-32 w-0.5 bg-light-purple opacity-25 relative block top-[1.5em] left-[20px]'></span>

    </motion.div>
  );
}

export default LeftPanel;
