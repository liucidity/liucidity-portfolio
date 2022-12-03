import React from 'react';
import { motion } from 'framer-motion';

const SmallProject = ({ project, description, technologies, github, demo }) => {
  return (
    <div className='group bg-ming m-auto md:m-2 mt-2 mb-2 p-4 h-[20em] w-[21em] md:w-[22em] relative transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300 hover:text-green rounded-lg'>
      <div className='flex flex-row justify-between'>
        <svg class="h-8 w-8 text-light-purple group-hover:text-green delay-150 duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>

        <div className='flex flex-row gap-2 hover:text-green delay-150 duration-300'>
          {github &&
            <a className='text-light-purple pt-2 hover:text-green delay-150 duration-300' href={github} target="_blank" rel="noreferrer">
              <svg class="h-8 w-8 " width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
            </a>
          }
          {demo &&

            <a className='text-light-purple pt-2 hover:text-green delay-150 duration-300' href={demo} target="_blank" rel="noreferrer">
              <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="15" y1="6" x2="15.01" y2="6" />  <rect x="3" y="3" width="18" height="14" rx="3" />  <path d="M3 13l4 -4a3 5 0 0 1 3 0l 4 4" />  <path d="M13 12l2 -2a3 5 0 0 1 3 0l 3 3" />  <line x1="8" y1="21" x2="8.01" y2="21" />  <line x1="12" y1="21" x2="12.01" y2="21" />  <line x1="16" y1="21" x2="16.01" y2="21" />
              </svg>
            </a>
          }
        </div>
      </div>
      <div>
        <h3 className='text-2xl text-light-purple pt-2 group-hover:text-green delay-150 duration-300' >{project}</h3>
      </div>
      <div>
        <p className='text-light-purple pt-2'>{description}</p>
      </div>
      <div className='absolute bottom-4'>
        <ul className='flex flex-row gap-4 '>
          {technologies.map((item) => {
            return (

              <li className='text-light-purple'>{item}</li>

            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default SmallProject;
