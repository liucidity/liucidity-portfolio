import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const FeaturedProject = ({ project, src, description, technologies }) => {
  console.log(technologies)
  return (
    <div className='flex flex-row pt-40 max-w-2/3'>
      <div className='flex flex-col pt-10'>
        <span className='featured-project'> Featured Project </span>
        <h3 className='featured-project-title' > {project}</h3>
        <p className='featured-project-description'>{description}</p>
        <ul className='featured-project-ul'>
          {technologies.map((item) => {
            return (
              <li className='text-light-purple'>{item}</li>
            )
          })}
        </ul>
        <div>
          <a>Github</a>
          <a>Demo</a>
        </div>
      </div >

      {/* <img src={src} alt='' className='w-[40em] z-2 relative right-[6em]' /> */}
      <HoverVideoPlayer
        className='w-[40em] z-2 relative right-[6em]'
        videoSrc="chartsandquery.mp4"
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
    </div >
  );
}

export default FeaturedProject;
