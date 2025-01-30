import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useInView from '../hooks/useInView'; // Custom hook to detect visibility
import SpotlightCard from './SpotLightCard'; // Import the SpotlightCard component

function Skills() {
  const techStacks = [
    {
      name: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js',
      utility: 'Full-stack JavaScript development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: '.NET & Microsoft',
      description: 'ASP.NET, C#, SQL Server',
      utility: 'Enterprise-level applications',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    },
    {
      name: 'Python & Django',
      description: 'Python, Django, PostgreSQL',
      utility: 'Rapid development, clean design',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Java & Spring',
      description: 'Java, Spring Boot, MySQL',
      utility: 'Robust backend development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'LAMP Stack',
      description: 'Linux, Apache, MySQL, PHP',
      utility: 'Web server solution stack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      name: 'DevOps Tools',
      description: 'Docker, Kubernetes, Jenkins',
      utility: 'CI/CD, containerization, orchestration',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, 0.2); // Track visibility

  // Duplicate the techStacks array to create a seamless loop
  const duplicatedTechStacks = [...techStacks, ...techStacks];

  return (
    <motion.section
      ref={sectionRef}
      className={`contact-section section-animation ${isInView ? 'visible' : ''}`} // Add class dynamically
    >
      <section id="skills-section" className="skills-section">
        <div className="container " style={{ marginTop: '15%' }}>
          <div className="skills-title text-center section-title">
            <motion.h2 className="home__titles sec-title about__titles--tiltle scroll ">Skills.</motion.h2>
            <motion.h4 className="home__titles sec-title__helper scroll mb-2 ">Tech stacks I work with</motion.h4>
          </div>
          <div className="row" style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginTop:"10%" }}>
            <motion.div
              className="slider"
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  },
                },
              }}
            >
              {duplicatedTechStacks.map((stack, index) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4 me-4 d-inline-block" key={index} style={{ width: '25%' }}>
                  {/* Wrap the card with SpotlightCard */}
                  <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
                    <div className="card tech-card">
                      <img
                        src={stack.icon}
                        className="card-img-top tech-icon"
                        alt={stack.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{stack.name}</h5>
                        <p className="card-text">{stack.description}</p>
                        <p className="card-text">
                          <small className="text-muted">{stack.utility}</small>
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Skills;