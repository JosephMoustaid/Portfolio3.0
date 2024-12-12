import React from 'react';
import PropTypes from 'prop-types';

const FullBlog = ({ title, image, content, description, publishTime, link }) => {
  const sharePost = (platform) => {
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(link)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`
    };
    window.open(shareUrls[platform], '_blank');
  };

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="blog-paragraph">{block.data}</p>;
      case 'heading':
        return <h2 key={index} className="blog-heading">{block.data}</h2>;
      case 'list':
        return (
          <ul key={index} className="blog-list">
            {block.data.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case 'link':
        return (
          <p key={index} className="blog-link">
            <a href={block.data.url} className='blue' target="_blank" rel="noopener noreferrer">
              {block.data.text}
            </a>
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="full-blog container">
      <div className="row blog-header text-center mb-5">
        <div className="col-12">
          <h1 className="blog-title">{title}</h1>
          <p className="blog-publish-time">Published on: {publishTime}</p>
          <img src={image} alt={title} className="blog-image lazyload img-fluid" />
          <p className="blog-description mt-3">{description}</p>
        </div>
      </div>
      <div className="blog-content">
        {content.map((block, index) => (
          <div className="row mb-4" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="col-4">
                  <img src={image} alt={title} className="block-image img-fluid" />
                </div>
                <div className="col-8">
                  {renderContent(block, index)}
                </div>
              </>
            ) : (
              <>
                <div className="col-8">
                  {renderContent(block, index)}
                </div>
                <div className="col-4">
                  <img src={image} alt={title} className="block-image img-fluid" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="row social-sharing mt-4">
        <div className="col-12 text-center">
          <h4>Share this post:</h4>
          <button onClick={() => sharePost('twitter')} className="btn btn-primary mr-2">Twitter</button>
          <button onClick={() => sharePost('facebook')} className="btn btn-primary mr-2">Facebook</button>
          <button onClick={() => sharePost('linkedin')} className="btn btn-primary">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

FullBlog.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'heading', 'list', 'link']).isRequired,
      data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
          url: PropTypes.string,
          text: PropTypes.string,
        })
      ]).isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FullBlog;