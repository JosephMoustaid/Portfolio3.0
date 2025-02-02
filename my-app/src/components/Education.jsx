import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Education() {
  const education = [
    {
      degree: 'High School Degree',
      year: '2018 - 2022',
      description: 'Graduated with a focus on mathematics, physics, and computer science, actively participating in coding clubs and extracurricular activities.',
    },
    {
      degree: 'Bachelor\'s Degree in Software Engineering',
      year: '2022 - 2026',
      description: 'Pursuing a degree in Software Engineering, focusing on full-stack development, algorithms, data structures, and software architecture. Currently working on several projects, including a WebXR immersive platform and a MERN stack-based web application.',
    },
    {
      degree: 'Master\'s Degree in Software Engineering (Planned)',
      year: '2026 - 2028',
      description: 'Intending to specialize in system architecture, cloud computing, and AI-driven software design. Planned focus on optimization techniques for large-scale distributed systems.',
    },
  ];
  
  const experience = [
    {
      role: 'Software Engineering Intern',
      year: 'Summer 2022',
      company: '2WLS',
      description: 'Worked on the improvement of 2WLS platform using React, contributing to the Digital marketing strategy of the plateform. Focused on a study of the competition in the market and the research for innovative techniques.',
    },
    {
      role: 'Freelance Web Developer',
      year: '2023 - Present',
      company: 'Self-Employed',
      description: 'Freelancing as a full-stack developer, building web applications using React, Node.js, and MongoDB. Created an immersive course editor and LMS platform, working with 3D models and integrating PDF and video content into virtual environments.',
    },
    {
      role: 'Project Lead: "Immerse" Web Platform',
      year: '2024',
      company: 'Laboratory of research and innovation',
      description: 'Led the development of a WebXR-based immersive platform ("Immerse") as part of an academic project. Integrated 3D models, interactive annotations, and dynamic content management into the platform, utilizing full-stack web development skills.',
    },
  ];
  

  // Animation variants for timeline and timeline items
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger children items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });

  return (
    <section id="education" className="education-section mt-5">
      <div className="container">
        <h1 className="mt-5 pt-5 sec-title">About me.</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="sec-title--helper">Education:</h2>
            <motion.div
              ref={timelineRef}
              className="timeline"
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {education.map((edu, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  variants={itemVariants}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="year blue">{edu.year}</p>
                    <h3 className="degree">{edu.degree}</h3>
                    <p className="description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="sec-title--helper">Experience:</h2>
            <motion.div
              ref={timelineRef}
              className="timeline"
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {experience.map((exp, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  variants={itemVariants}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="year blue">{exp.year}</p>
                    <h3 className="degree"><b>{exp.company}</b></h3>
                    <h3 className="degree">{exp.degree}</h3>
                    <p className="description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
