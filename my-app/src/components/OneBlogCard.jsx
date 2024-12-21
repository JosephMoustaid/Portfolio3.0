import React from 'react';
import PropTypes from 'prop-types';

const OneBlogCard = ({ title, description, image, link, publishTime }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <div className="d-flex justify-content-between">
          <p className="blog-card-time py-1">{publishTime}</p>
          <a href={link} className="blog-card-link py-1" rel="noopener noreferrer" style={{ position: 'relative' , zIndex:"1"}}>
            Read More <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

OneBlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
};

export default OneBlogCard;