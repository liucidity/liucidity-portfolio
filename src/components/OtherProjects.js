import React from 'react';
import SmallProject from './SmallProject';
import { motion } from 'framer-motion';

const OtherProjects = () => {
  const projectInfo = {
    InterviewScheduler: { description: "SQL platform that aids in complete database creation. Allows users to generate ERD's and Queries on their database. Allows users to Seed data and visualize charts on their data. Intended for educational use or additional guide to manipulating databases.", src: "sql.png", technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL'] },
    Jungle: { description: "Jack-box-inspired drinking game, where users guess the outcome of the next card to score points. Playable as solo or in multiplayer, with a separate controller client, that can be accessed through any web device.", src: "sql.png", technologies: ['React', 'TypeScript', 'Express', 'NodeJS'] },
    Tweeter: { description: "Food ordering app for an existing restaurant. Modeling after popular food order apps, allows users to add food items to their cart, adjust the quantity, and receive text updates on orders. A dashboard allows the restaurant to confirm orders and provide estimated pickup times.", src: "sql.png", technologies: ['JQuery', 'Express', 'NodeJS', 'PostgreSQL'] },
    InterviewScheduler2: { description: "SQL platform that aids in complete database creation. Allows users to generate ERD's and Queries on their database. Allows users to Seed data and visualize charts on their data. Intended for educational use or additional guide to manipulating databases.", src: "sql.png", technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL'] },
    Jungle2: { description: "Jack-box-inspired drinking game, where users guess the outcome of the next card to score points. Playable as solo or in multiplayer, with a separate controller client, that can be accessed through any web device.", src: "sql.png", technologies: ['React', 'TypeScript', 'Express', 'NodeJS'] },
    Tweeter2: { description: "Food ordering app for an existing restaurant. Modeling after popular food order apps, allows users to add food items to their cart, adjust the quantity, and receive text updates on orders. A dashboard allows the restaurant to confirm orders and provide estimated pickup times.", src: "sql.png", technologies: ['JQuery', 'Express', 'NodeJS', 'PostgreSQL'] },



  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      x: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  }
  return (
    <section className='max-w-2/3 flex flex-col items-center pt-[20em]'>

      <motion.div className='grid md:grid-cols-2 lg:grid-cols-3'
        variants={container}
        initial="hidden"
        animate="show">
        {Object.keys(projectInfo).map((project) => {
          return (
            <motion.div
              variants={item}
            >
              <SmallProject project={project} technologies={projectInfo[project].technologies} description={projectInfo[project].description} />
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  );
}

export default OtherProjects;
