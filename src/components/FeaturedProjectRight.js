import React from 'react';

const FeaturedProjectRight = ({ project, src, description, technologies }) => {
  console.log(technologies)
  return (
    <div className='flex flex-row pt-10 max-w-2/3'>
      <img src={src} alt='' className='w-[40em] z-2' />
      <div className='flex flex-col pt-10 items-end  relative right-[6em]'>
        <span className='text-green text-xl'> Featured Project </span>
        <h3 className='text-light-purple text-3xl' > {project}</h3>
        <p className='text-light-purple bg-ming text-xl w-[30em] p-8 z-40'>{description}</p>
        <ul className='flex flex-row justify-end gap-4 w-[30em] z-50'>
          {technologies.map((item) => {
            return (
              <li className='text-light-purple'>{item}</li>
            )
          })}
        </ul>
      </div >

    </div >
  );
}

export default FeaturedProjectRight;
