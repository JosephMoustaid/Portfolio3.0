import React from 'react';
import portfolio1 from '../assets/images/portfolio1.png';
import ecom from '../assets/images/E-com.png';
import chatbot from '../assets/images/chatbot.png';
import landingPage from '../assets/images/landingPage.png';
import goMacros from '../assets/images/goMacros.png';
import byteBurst from '../assets/images/byteBurts.png';
import products from '../assets/images/products.png';
import gericht from '../assets/images/gericht.png';
import recipe from '../assets/images/recipe.webp';
import labCourse from '../assets/images/labCourse.png';
import pharmaIQ from '../assets/images/pharmaIQ.png';

function Projects() {
  const projects = [
    {
      id: 'portfolio1',
      title: 'Portfolio V1',
      techStack: 'html, Css, Bootstarp',
      image: portfolio1,
      projectLink: './projects/Portfolio.html',
      githubLink: ''
    },
    {
      id: 'E-com',
      title: 'E-com website',
      techStack: 'html, Css, Bootstarp, Javascript, React',
      image: ecom,
      projectLink: '',
      githubLink: ''
    },
    {
      id: 'chatBot',
      title: 'Chat bot',
      techStack: 'html, Css, Bootstarp, Javascript, React, Python',
      image: chatbot,
      projectLink: '',
      githubLink: ''
    },
    {
      id: 'Orders-manag',
      title: 'ClubXtreme',
      techStack: 'PHP, Javascript, SCSS, BOOSTRAP',
      image: landingPage,
      projectLink: './projects/ClubXtreme.html',
      githubLink: ''
    },
    {
      id: 'Weather',
      title: 'GoMacros',
      techStack: 'Python, Django, Css, Bootstarp, Javascript, React',
      image: goMacros,
      projectLink: '',
      githubLink: ''
    },
    {
      id: 'News',
      title: 'ByteBurst',
      techStack: 'html, Css, Bootstarp, Javascript, C++',
      image: byteBurst,
      projectLink: 'projects/ByteBurst.html',
      githubLink: ''
    },
    {
      id: 'products',
      title: 'Courses Manager',
      techStack: 'C++',
      image: products,
      projectLink: './projects/Formations.html',
      githubLink: ''
    },
    {
      id: 'gericht',
      title: 'Gericht',
      techStack: 'C lang',
      image: gericht,
      projectLink: './projects/Gericht.html',
      githubLink: ''
    },
    {
      id: 'recipeIdea',
      title: 'RecipeIdea',
      techStack: 'C lang',
      image: recipe,
      projectLink: '',
      githubLink: ''
    },
    {
      id: 'immerse',
      title: 'Immerse',
      techStack: 'React, Node.js, Express, PostgreSQL, Socket.IO, Scss',
      image: labCourse,
      projectLink: '',
      githubLink: ''
    },
    {
      id: 'pharmaIQ',
      title: 'PharmaIQ',
      techStack: 'Django, Python, Sass, Scickit-learn',
      image: pharmaIQ,
      projectLink: '',
      githubLink: ''
    }
  ];

  return (
    <section id="projects" className="text-center large-spacing content mt-10">
      <h2 className="sec-title about__titles--tiltle text-center">Projects.</h2>
      <h5 className="sec-title__helper text-center ">Things I've built so far</h5>
      <div>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
        <section className="projects-section">
          <div className="card-grid">
            {projects.map((project) => (
              <div className="card scroll card-shadow" id={project.id} key={project.id}>
                <div className="card__background" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="card__content">
                  <h3 className="card__category">{project.title}</h3>
                  <h4 className="card__heading-helper">Tech Stack: {project.techStack}</h4>
                  <div className="card__heading-helper card_link">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                  <div className="card__heading-helper card_link">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;