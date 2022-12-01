import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const FeaturedProject = ({ project, src, video, description, technologies }) => {
  console.log(technologies)
  return (
    <div className='pt-40 max-w-2/3 ml-[12em] flex flex-col'>

      <div className='flex flex-row'>
        <div className='flex flex-col pt-10'>
          <span className='featured-project'> Featured Project </span>
          <h3 className='featured-project-title' > {project}</h3>
          <p className='featured-project-description'>{description}</p>


          {/* <img src={src} alt='' className='w-[40em] z-2 relative right-[6em]' /> */}




        </div >
        <div className='flex flex-col items-end'>

          <HoverVideoPlayer
            className='w-[40em] h-[22em] z-2 relative right-[18em]'
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
        </div>

      </div >
      <div className='flex flex-col items-start relative -bottom-6'>

        <ul className='featured-project-ul flex flex-row justify-start'>
          {technologies.map((item) => {
            return (
              <li className='text-light-purple'>{item}</li>
            )
          })}
        </ul>
        <div>
          <a className='text-light-purple'>Github</a>
          <a className='text-light-purple'>Demo</a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
