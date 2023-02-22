import React from 'react';
import FeaturedProject from './FeaturedProject';
import FeaturedProjectRight from './FeaturedProjectRight';
import SlideUpComponent from './SlideUpComponent';

const projectInfo = {
  BusRiders: { description: "Jack-box-inspired drinking game, where users guess the outcome of the next card to score points. Playable as solo or in multiplayer, with a separate controller client, that can be accessed through any web device.", src: "busriders.png", video: "busriders.mp4", technologies: ['React', 'TypeScript', 'Express', 'NodeJS', 'SocketIO', 'TailwindCSS'], github: "https://github.com/liucidity/ride-the-bus", demo: "https://ride-the-bus.onrender.com/" },
  SQLBase: { description: "SQL platform that aids in complete database creation. Allows users to generate ERD's and Queries on their database. Allows users to seed data and visualize charts on their data.", src: "sql.png", video: "sql.mp4", technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'MaterialUI', 'MermaidJS'], github: "https://github.com/rstock-co/SQLBase", demo: "" },
  "Angry Vegan Orders": { description: "Food ordering app for an existing restaurant. Modeling after popular food order apps, allows users to add food items to their cart, adjust the quantity, and receive text updates on orders.", src: "angry.png", video: "", technologies: ['JQuery', 'Express', 'NodeJS', 'PostgreSQL', 'SASS', 'Twilio'], github: "https://github.com/liucidity/AngryVeganOrders", demo: "" },

}

const Projects = () => {
  return (
    // <SlideUpComponent>

    <section className='p-4  mt-[20em] h-fit relative' id='projects'>
      <div className='md:flex flex-col items-center relative md:right-[15em] p-4'>

        <div className='flex flex-col'>
          <span className='text-green text-l'> 02.</span>
          <h2 className='text-light-purple text-4xl relative'>
            Some Things I've Built
            <span className='h-0.5 w-full md:w-72 bg-light-purple opacity-25 relative block md: md:top-[-0.5em] md:left-[14em]'></span>
          </h2>
        </div>
      </div>
      <div>

        <ul className=' flex flex-col items-center gap-[16em] md:gap-0' >




          {Object.keys(projectInfo).map((project, index) => {
            return (

              <li className='w-auto p-2 md:p-0'>
                {index % 2 !== 0 ?
                  <FeaturedProject project={project} src={projectInfo[project].src} video={projectInfo[project].video} technologies={projectInfo[project].technologies} description={projectInfo[project].description} github={projectInfo[project].github} demo={projectInfo[project].demo} /> :
                  <FeaturedProjectRight project={project} src={projectInfo[project].src} video={projectInfo[project].video} technologies={projectInfo[project].technologies} description={projectInfo[project].description} github={projectInfo[project].github} demo={projectInfo[project].demo} />
                }
              </li>
            )
          })}


          {/* <FeaturedProject projectName='placeholder1' /> */}

        </ul>
      </div>
    </section >
    // </SlideUpComponent>
  );
}

export default Projects;
