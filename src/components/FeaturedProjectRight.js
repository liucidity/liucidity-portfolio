import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const FeaturedProjectRight = ({ project, src, description, technologies }) => {
  console.log(technologies)
  return (
    <div className='flex flex-row pt-40 max-w-2/3 mr-[12em]'>
      {/* <div className='rounded-md'> */}

      <HoverVideoPlayer
        className='w-[40em] h-[22em] z-2 relative right-[-12em]'
        videoStyle={{
          borderRadius: '0.375rem',
        }}
        videoSrc="chartsandquery.mp4"
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
      {/* </div> */}
      <div className='flex flex-col pt-10  items-end  relative right-[6em]'>
        <span className='featured-project'> Featured Project </span>
        <h3 className='featured-project-title' > {project}</h3>
        <p className='featured-project-description'>{description}</p>
        <ul className='featured-project-ul flex flex-row justify-end'>
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
      </div >


    </div >
  );
}

export default FeaturedProjectRight;
