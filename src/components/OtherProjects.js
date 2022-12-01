import React from 'react';
import SmallProject from './SmallProject';
import { motion } from 'framer-motion';

const OtherProjects = () => {
  const projectInfo = {
    InterviewScheduler: { description: "Interview Scheduling App that showcases state management, and updating data between two app and dashboard client. Allows users to book,edit, or cancel appointments with interviewers that are available. Testing completed with Cypress ", src: "sql.png", technologies: ['React', 'Javascript', 'NodeJS', 'Cypress'], github: "https://github.com/liucidity/interviewScheduler", demo: "" },
    Jungle: { description: "Stripe integrated storefront for exotic plants! Users can login to complete purchases, view past orders. Admin accounts for store management, such as creating, and deleting products or promotions.", src: "sql.png", technologies: ['Ruby', 'Rails', 'Stripe', 'Cypress'], github: "https://github.com/liucidity/Jungle", demo: "" },
    Tweeter: { description: "Single page twitter clone app, create new tweets with mobile, tablet, and desktop responsive designs.", src: "sql.png", technologies: ['JQuery', 'AJAX', 'NodeJS', 'PostgreSQL'], github: "https://github.com/liucidity/tweeter", demo: "" },
    // InterviewScheduler2: { description: "SQL platform that aids in complete database creation. Allows users to generate ERD's and Queries on their database. Allows users to Seed data and visualize charts on their data. Intended for educational use or additional guide to manipulating databases.", src: "sql.png", technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL'], github: "", demo: "" },
    // Jungle2: { description: "Jack-box-inspired drinking game, where users guess the outcome of the next card to score points. Playable as solo or in multiplayer, with a separate controller client, that can be accessed through any web device.", src: "sql.png", technologies: ['React', 'TypeScript', 'Express', 'NodeJS'], github: "", demo: "" },
    // Tweeter2: { description: "Food ordering app for an existing restaurant. Modeling after popular food order apps, allows users to add food items to their cart, adjust the quantity, and receive text updates on orders. A dashboard allows the restaurant to confirm orders and provide estimated pickup times.", src: "sql.png", technologies: ['JQuery', 'Express', 'NodeJS', 'PostgreSQL'], github: "", demo: "" },



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
    <section className='h-screen flex flex-col items-center pt-[20em]'>

      <motion.div className='grid md:grid-cols-2 lg:grid-cols-3'
        variants={container}
        initial="hidden"
        animate="show">
        {Object.keys(projectInfo).map((project) => {
          return (
            <motion.div
              variants={item}
            >
              <SmallProject project={project} technologies={projectInfo[project].technologies} description={projectInfo[project].description} github={projectInfo[project].github} demo={projectInfo[project].demo} />
            </motion.div>
          )
        })}
      </motion.div>
      <div className='text-green pt-4'>Always building, check back for more!</div>
    </section>
  );
}

export default OtherProjects;
