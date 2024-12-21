import React from 'react';
import { motion } from 'framer-motion';
import{ useState, useRef } from 'react';
import useInView from '../hooks/useInView'; // Custom hook to detect visibility

function Skills() {
  const techStacks = [
    {
      name: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js',
      utility: 'Full-stack JavaScript development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: '.NET & Microsoft',
      description: 'ASP.NET, C#, SQL Server',
      utility: 'Enterprise-level applications',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
    },
    {
      name: 'Python & Django',
      description: 'Python, Django, PostgreSQL',
      utility: 'Rapid development, clean design',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Java & Spring',
      description: 'Java, Spring Boot, MySQL',
      utility: 'Robust backend development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'LAMP Stack',
      description: 'Linux, Apache, MySQL, PHP',
      utility: 'Web server solution stack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      name: 'DevOps Tools',
      description: 'Docker, Kubernetes, Jenkins',
      utility: 'CI/CD, containerization, orchestration',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    }

    
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, 0.2); // Track visibility

  return (
   <motion.section
      ref={sectionRef}
      className={`contact-section section-animation ${isInView ? 'visible' : ''}`} // Add class dynamically
    >
    <section id="skills-section" className="skills-section">
      <div className="container">
        <div className="skills-title text-center section-title">
          <motion.h2 className="sec-title">Skills</motion.h2>
        </div>
        <div className="row">
          {techStacks.map((stack, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card tech-card">
                <img src={stack.icon} className="card-img-top tech-icon" alt={stack.name} />
                <div className="card-body">
                  <h5 className="card-title">{stack.name}</h5>
                  <p className="card-text">{stack.description}</p>
                  <p className="card-text"><small className="text-muted">{stack.utility}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.section>
  );
}

export default Skills;