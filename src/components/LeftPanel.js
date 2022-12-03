import React from 'react';
import { motion } from 'framer-motion';

const LeftPanel = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
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
    <motion.div className='fixed left-12 bottom-0 hidden md:block'
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ul>
        <li className='side-panel-item'>
          <a href="https://github.com/liucidity" target="_blank" rel='noreferrer'>
            <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
        </li>
        <li className='side-panel-item'>
          <a href='https://www.linkedin.com/in/travis-liu/' target="_blank" rel='noreferrer'>
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
          </a>
        </li>
        <li className='side-panel-item'>
          <a href='https://twitter.com/TravisLiuDev' target="_blank" rel='noreferrer'>
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
          </a>
        </li>
        <li className='side-panel-item'>
          <a>

          </a>
        </li>
      </ul>
      <span className='h-32 w-0.5 bg-light-purple opacity-25 relative block top-[1.5em] left-[20px]'></span>

    </motion.div>
  );
}

export default LeftPanel;
