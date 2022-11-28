import React from 'react';

const About = () => {
  return (
    <section className='about p-4'>
      <div className='flex flex-row justify-center'>
        <div className='w-[38em] mr-0'>
          <span className='text-l text-green'> 01.</span>
          <h2 className='text-light-purple text-4xl relative'>
            About Me
            <span className='h-0.5 w-72 bg-light-purple opacity-25 relative block top-[-0.5em] left-[5em]'></span>
          </h2>

          <p className='text-light-purple w-2/3 pt-4 pb-4 m-0'>Hello! My name is Travis and I enjoy creating things on the internet. I first started coding with scratch from a young age, before moving onto HTML and CSS. From there I taught myself Mobile development with Java, and continued to learn about web development.</p>

          <p className='text-light-purple w-2/3 pt-4 pb-4 m-0'>Fast-forward to today, I have completed a full stack boot camp for web development, and am actively building apps and projects. My current focus is to create accessible, inclusive products, that empower users or businesses.</p>

          <p className='text-light-purple w-2/3 pt-4 pb-4 m-0'>Here are some of my favorite technologies to work with:</p>
          <ul className='grid grid-rows-3 grid-flow-col gap-2 w-1/3'>
            <li className='text-light-purple w-2/3'>Javascript (ES6+)</li>
            <li className='text-light-purple w-2/3'>React</li>
            <li className='text-light-purple w-2/3'>Node.JS</li>
            <li className='text-light-purple w-2/3'>TypeScript</li>
            <li className='text-light-purple w-2/3'>Python</li>
            <li className='text-light-purple w-2/3'>PostgreSQL</li>
          </ul>
        </div>
        <div className='flex flex-row items-center justify-start'>
          <img src='me.png' alt='' className='w-[20em] border-solid border-4 outline-offset-2' />
        </div>


      </div>
    </section >
  );
}

export default About;
