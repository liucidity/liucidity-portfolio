import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='mt-[20em] mb-[32em]'>

        <h1 className='text-green text-lg font-normal p-4'>Hi, my name is</h1>
        <h2 className='text-light-purple text-7xl font-semibold p-4'>Travis Liu</h2>
        <h2 className='text-dark-purple text-7xl font-semibold p-4'>Full Stack Developer</h2>
        <p className='text-dark-purple text-lg w-[40em] p-4'>I'm a software developer specializing in building digital experiences. Work that let's me create accessibility for every day people excites me.</p>
      </div>
    </section>
  );
}

export default Hero;
