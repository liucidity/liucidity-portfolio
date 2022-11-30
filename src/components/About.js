import React from 'react';
import SlideUpComponent from './SlideUpComponent';

const itemStyle = "text-light-purple w"
const About = () => {
  return (
    // <SlideUpComponent>

    <section className='about p-4' id='about'>
      <div className='flex flex-row justify-center'>
        <div className='w-[34em] mr-0'>
          <span className='text-l text-green'> 01.</span>
          <h2 className='text-light-purple text-4xl relative'>
            About Me
            <span className='h-0.5 w-72 bg-light-purple opacity-25 relative block top-[-0.5em] left-[5em]'></span>
          </h2>

          <p className='about-p'>Hello! My name is Travis and I enjoy creating things on the internet. I first started coding with scratch from a young age, before moving onto HTML and CSS. From there I taught myself Mobile development with Java, and continued to learn about web development.</p>

          <p className='about-p'>Fast-forward to today, I have completed a full stack boot camp for web development, and am actively building apps and projects. My current focus is to create accessible, inclusive products, that empower users or businesses.</p>

          <p className='text-light-purple w-2/3 pt-4 pb-4 m-0'>Here are some of my favorite technologies to work with:</p>
          <ul className='grid grid-rows-3 grid-flow-col gap-2 w-2/3'>
            <li className='about-list-item'>Javascript (ES6+)</li>
            <li className='about-list-item'>React</li>
            <li className='about-list-item'>Node.JS</li>
            <li className='about-list-item'>TypeScript</li>
            <li className='about-list-item'>Python</li>
            <li className='about-list-item'>PostgreSQL</li>
          </ul>
        </div>
        <div className='flex flex-row items-center justify-start -ml-12'>
          <img src='me.png' alt='' className='w-[20em] border-solid border-4 outline-offset-2' />
        </div>


      </div>
    </section >
    // </SlideUpComponent>
  );
}

export default About;
