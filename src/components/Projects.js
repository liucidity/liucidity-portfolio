import React from 'react';
import FeaturedProject from './FeaturedProject';
import FeaturedProjectRight from './FeaturedProjectRight';
import SlideUpComponent from './SlideUpComponent';

const projectInfo = {
  BusRiders: { description: "Jack-box-inspired drinking game, where users guess the outcome of the next card to score points. Playable as solo or in multiplayer, with a separate controller client, that can be accessed through any web device.", src: "busriders.png", video: "busriders.mp4", technologies: ['React', 'TypeScript', 'Express', 'NodeJS', 'SocketIO', 'TailwindCSS'], github: "https://github.com/liucidity/ride-the-bus", demo: "https://ride-the-bus.onrender.com/" },
  SQLBase: { description: "SQL platform that aids in complete database creation. Allows users to generate ERD's and Queries on their database. Allows users to Seed data and visualize charts on their data. Intended for educational use or additional guide to manipulating databases.", src: "sql.png", video: "sql.mp4", technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'MaterialUI', 'MermaidJS'], github: "https://github.com/rstock-co/SQLBase", demo: "" },
  AngryVeganOrders: { description: "Food ordering app for an existing restaurant. Modeling after popular food order apps, allows users to add food items to their cart, adjust the quantity, and receive text updates on orders. A dashboard allows the restaurant to confirm orders and provide estimated pickup times.", src: "sql.png", technologies: ['JQuery', 'Express', 'NodeJS', 'PostgreSQL', 'SASS', 'Twilio'], github: "https://github.com/liucidity/AngryVeganOrders", demo: "" },

}

const Projects = () => {
  return (
    // <SlideUpComponent>

    <section className='p-8 flex flex-col items-center mt-[20em] h-fit pl-[20em]' id='projects'>
      <div>

        <div className='flex flex-col'>
          <span className='text-green text-l'> 02.</span>
          <h2 className='text-light-purple text-4xl relative'>
            Some Things I've Built
            <span className='h-0.5 w-72 bg-light-purple opacity-25 relative block top-[-0.5em] left-[10em]'></span>
          </h2>
        </div>
        <ul className='-ml-[12em]'>




          {Object.keys(projectInfo).map((project, index) => {
            return (

              <li>
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
    </section>
    // </SlideUpComponent>
  );
}

export default Projects;
