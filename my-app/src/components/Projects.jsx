import React, { useEffect, useRef, useState } from 'react';
import projectsData from "../projectsData/all";

function Projects() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const projectsArray = Object.values(projectsData);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8 && bottom > 0) {
        section.classList.add('visible');
      }
    }

    document.querySelectorAll('.card').forEach((card) => {
      const { top, bottom } = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.9 && bottom > 0) {
        setVisibleCards((prev) => new Set([...prev, card.id]));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-animation text-center mt-10">
      <h2 className="sec-title about__titles--title">Projects.</h2>
      <h5 className="sec-title__helper">Things I've built so far</h5>
      <div className="projects-section">
        <div className="card-grid">
          {projectsArray.map((project, index) => (
            <div
              className={`card scroll card-shadow ${
                visibleCards.has(project.title) ? 'visible' : ''
              }`}
              id={project.title}
              key={project.title}
            >
              <div
                className="card__background"

                style={{ backgroundImage: `url(${project.images[0]})`, opacity : 0.8}}
              ></div>
              <div className="card__content">
                <h3 className="card__category">{project.title}</h3>
                <h4 className="card__heading-helper">Tech Stack: <br/> <br/> {' '}
                  {project.techStack.map((tech, index) => (
                    <span className='tech-stack-item' key={index}>{tech}{index < project.techStack.length - 1 ? ' ' : ''}</span>
                  ))}
                </h4>
                <div className="card__heading-helper card_link">
                  <a href={"/project/" + project.title} rel="noopener noreferrer">
                    {/* Custom Animated Arrow */}
                    <svg
                      className="arrow-icon"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="card__heading-helper card_link">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    {/* GitHub Icon with Animation */}
                    <i className="bi bi-github github-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;