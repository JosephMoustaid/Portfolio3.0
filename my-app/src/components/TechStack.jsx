import React from 'react';
import { motion } from 'framer-motion';
import{ useState, useRef } from 'react';
import useInView from '../hooks/useInView'; // Custom hook to detect visibility

function TechStack() {
  const techStacks = [
    {
      title: 'Software Development',
      description: `// Expert in OOP along with Design Patterns and Entreprise level Desktop apps development;`,
    },
    {
      title: 'Frontend Development',
      description: `// With over 3 years of constant projects-based learning: React, Sass, JS, Node.js, Express;`,
    },
    {
      title: 'Backend Development',
      description: `// Managed couple of databases related to customer analytics , along with Rest API's experience;`,
    }
  ];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, 0.2); // Track visibility

  return (
   <motion.section
      ref={sectionRef}
      className={`contact-section section-animation ${isInView ? 'visible' : ''}`} // Add class dynamically
    >
    <section id="techStack" className="w-75 m-auto text-center">
      <div className="medium-spacing" id='techstack'>
        <motion.h2 className="home__titles sec-title about__titles--tiltle scroll ">My Expertise.</motion.h2>
        <motion.h4 className="home__titles sec-title__helper scroll mb-2 ">Technologies I have been working with recently</motion.h4>
        <div className="row medium-spacing ">
          {techStacks.map((stack, index) => (
            <div className="col-12 col-sm-12 col-md-4 mt-5" key={index}>
              <div className={`card-title card-title-${index + 1}`}> {stack.title} </div>
              <div className="card tech-card">
                <div className="card-body">
                  <div className="code-container">
                    <div className="code-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <pre className="code-text">
                      <code>
                        <span className="comment">{stack.description}</span><br />
                        <span className="keyword">class</span> <span className="variable">{stack.title.replace(/\s+/g, '')}</span> {'{'}<br />
                        &nbsp;&nbsp;<span className="keyword">public</span> <span className="type">String</span> <span className="variable">description</span> = <span className="string">"{stack.description}"</span>;<br />
                        {'}'}
                      </code>
                    </pre>
                  </div>
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

export default TechStack;
