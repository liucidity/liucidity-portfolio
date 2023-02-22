import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const FeaturedProject = ({ project, src, video, description, technologies, github, demo }) => {

  return (
    <div className='md:pt-40 m-auto flex flex-col items-center group transition md:hover:scale-110'>


      <div className='md:flex flex-row-reverse relative'>


        <HoverVideoPlayer
          className='md:min-w-[16em] md:h-[9em] md:w-[36em] md:h-[20.25em]  z-2 absolute hover:z-40 peer md:hover:-translate-x-2 transition delay-150  md:-right-[4em] '
          videoSrc={video}
          videoStyle={{

            borderRadius: '0.375rem'
          }}
          pausedOverlay={
            <img
              src={src}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0.375rem',
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />

        <div className='flex flex-col pt-0 items-start absolute md:-left-[8em] peer-hover:opacity-70  transition duration-300'>
          <span className='featured-project'> Featured Project </span>
          <h3 className='featured-project-title' > {project}</h3>

          <p className='featured-project-description'>{description}</p>
          <div className='flex flex-row justify-start gap-2'>
            {github &&
              <a className='text-light-purple pt-2 hover:text-green' href={github} target="_blank" rel="noreferrer">
                <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                </svg>
              </a>
            }
            {demo &&

              <a className='text-light-purple pt-2 hover:text-green' href={demo} target="_blank" rel="noreferrer">
                <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="15" y1="6" x2="15.01" y2="6" />  <rect x="3" y="3" width="18" height="14" rx="3" />  <path d="M3 13l4 -4a3 5 0 0 1 3 0l 4 4" />  <path d="M13 12l2 -2a3 5 0 0 1 3 0l 3 3" />  <line x1="8" y1="21" x2="8.01" y2="21" />  <line x1="12" y1="21" x2="12.01" y2="21" />  <line x1="16" y1="21" x2="16.01" y2="21" />
                </svg>
              </a>
            }
          </div>
        </div >



      </div >
      <div className='flex flex-col items-start md:-left-[11em] relative -bottom-6'>

        <ul className='featured-project-ul flex flex-row flex-wrap justify-start'>
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

export default FeaturedProject;
