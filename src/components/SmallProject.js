import React from 'react';

const SmallProject = ({ project, description, technologies }) => {
  return (
    <div className='group bg-ming m-2 p-6 h-[20em] w-[24em] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green'>
      <div>
        <img />
        <a>Demo</a>
        <a>Github</a>
      </div>
      <div>
        <h3 className='text-2xl text-light-purple group-hover:text-green delay-150 duration-300' >{project}</h3>
      </div>
      <div>
        <p className='text-light-purple'>{description}</p>
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
