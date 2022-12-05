import React from 'react';
import SlideUpComponent from './SlideUpComponent';

const itemStyle = "text-light-purple w"
const About = () => {
  return (
    // <SlideUpComponent>

    <section className='about -mt-20 p-4 min-h-screen max-w-[1000px] md:flex md:flex-col m-auto md:justify-center' id='about'>
      < div className='md:flex md:flex-col md:justify-center' >

        {/* <div className='md:flex md:flex-row md:justify-center'>
          <div className='md:flex md:flex-col w-3/4'>
            <span className='text-md md:text-l text-green'> 01.</span>
            <h2 className='text-light-purple font-semibold text-xl md:text-4xl relative'>
              About Me
              <span className='h-0.5 w-64 md:h-0.5 md:w-[12em] bg-light-purple opacity-25 relative block top-[-0.75em] md:top-[-0.5em] left-[5em]'></span>
            </h2>
          </div>
        </div> */}

        < div className='w-full  md:flex md:flex-col w-min md:ml-[6em] pb-4 ' >

          <span className='text-md md:text-l text-green'> 01.</span>
          <h2 className='text-light-purple font-semibold text-xl md:text-4xl'>
            About Me
            <span className='h-0.5 w-64 md:w-96 md:h-0.5  bg-light-purple opacity-25 relative block top-[-0.75em] md:top-[-0.5em] left-[5em]'></span>

          </h2>
        </ div>


        <div className='md:flex md:flex-row md:justify-center'>
          <div className='md:flex flex-col md:w-1/2'>

            <p className='about-p'>Hello! My name is Travis and I enjoy creating things on the internet. I first started coding with scratch from a young age, before moving onto HTML and CSS. From there I taught myself Mobile development with Java, and continued to learn about web development.</p>

            <p className='about-p'>Fast-forward to today, I have completed a full stack boot camp for web development, and am actively building apps and projects. My current focus is to create accessible and inclusive products that empower users or businesses.</p>

            <p className='text-light-purple pt-4 pb-4 m-0'>Here are some of my favorite technologies to work with:</p>
            <ul className='grid grid-rows-3 grid-flow-col gap-2'>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>
                <div className='flex flex-row items-center'>

                  Javascript (ES6+)
                </div>
              </li>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>
                <div className='flex flex-row items-center'>

                  React
                </div>
              </li>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>

                <div className='flex flex-row items-center'>
                  Node.JS
                </div>
              </li>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>
                <div className='flex flex-row items-center'>

                  TypeScript
                </div>
              </li>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>
                <div className='flex flex-row items-center'>

                  Python
                </div>
              </li>
              <li className='about-list-item'>
                <div className='flex flex-row items-center'>

                  <svg class="h-4 w-4 text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />  <path d="M10 12l-2 -2.2l.6 -1" /></svg>
                </div>
                <div className='flex flex-row items-center'>

                  PostgreSQL
                </div>
              </li>
            </ul>
          </div>
          <div className='md:flex flex-row justify-start pt-4'>
            <img src='me.png' alt='' className='w-[14em] h-[14em] md:ml-8 m-auto mt-2 border-solid border-4 outline-offset-2 ' />
          </div>
        </div>



      </div >
    </section >
    // </SlideUpComponent>
  );
}

export default About;
