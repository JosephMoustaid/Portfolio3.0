import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Project({ title, techStack, description, images, githubLink }) {
  const navigate = useNavigate();

  return (
    <div className="animatedCursor">
      <main className="page animatedCursor">
        <div className="cursor">
          <div className="cursor__point"></div>
          <div className="cursor__circle"></div>
        </div>
        <div className="offcanvas offcanvas-start show" style={{ width: '70%' }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
          <div className="offcanvas-body">
            <div className="scrolling-images">
              <img src={images[0]} alt="No preview available" />
            </div>
          </div>
        </div>

        <div className="offcanvas offcanvas-end show" style={{ width: '30%' }} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <button className="custom-button" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>
            <div>
              <button className="custom-button" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button> / 
              <button className="custom-button" onClick={() => navigate(1)}><i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">{title}</h5> <br />
            <h6 className="tech-stack">{techStack.map((tech, index) => `#${tech.toUpperCase()}${index < techStack.length - 1 ? ', ' : ''}`)}</h6> <br />
            <p>{description}</p>
            <a href={githubLink} className="nav-link custom-button navLinks" aria-current="page">Visit</a>
          </div>
        </div>
      </main>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;