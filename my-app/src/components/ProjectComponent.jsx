import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProjectComponent({ title, techStack, description, images, githubLink  , feautures ,  next , prev}) {
  const navigate = useNavigate();

  return (
    <div className="animatedCursor">
      <main className="page animatedCursor">


        <div className="offcanvas offcanvas-start show" style={{ width: '70%' }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
          <div className="offcanvas-body">
            <div className="scrolling-images">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img key={index} src={image} alt={`Project preview ${index + 1}`} />
                ))
              ) : (
                <p>No preview available</p>
              )}
            </div>
          </div>
        </div>

        <div className="offcanvas offcanvas-end show" style={{ width: '30%' }} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header d-flex justify-content-between">
            <a href="/" className="custom-button goBack p-1 pb-1 pt-2 me-5">
              <i className="bi bi-arrow-left"></i>
            </a>
            <div>
              <a href={next}  className="custom-button nextProject p-1" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="bi bi-arrow-left"></i>
              </a> / 
              <a href={prev} className="custom-button lastProject p-1" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="offcanvas-body">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">{title}</h5>
            <br />
            <h6 className="tech-stack">
              {techStack.map((tech, index) => `#${tech.toUpperCase()}${index < techStack.length - 1 ? ' ,  ' : ''}`)}
            </h6>
            <br />
            

            {description.length > 0 ? (
                description.map((descriptionItem, index) => (
                  <p style={{text: "normal"}}>{descriptionItem}</p>
                ))
              ) : (
                <p>No description available</p>
              )}

            <hr />
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Feautures : </h5>

            { feautures.length > 0 ? ( 
              feautures.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}:</strong> {feature.description}
                </li>
              ))
            ) : (
              <p>No features available</p>
            )}
            {githubLink && (
              <a href={githubLink} className="nav-link custom-button github-visit text-center navLinks" aria-current="page" style={{textTransform: "lowercase" , maxWidth:"200px" , fontSize: ".8rem"}}>
                Visit on GitHub
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

ProjectComponent.propTypes = {
  title: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,  // Make sure description is passed as a string
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  feautures: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ProjectComponent;

