import React from 'react';

const Loader = () => {
  const containerStyles = {
    background: 'linear-gradient(135deg, rgb(7, 21, 41) 0%, rgb(0, 0, 0) 100%)',
    width: '110%',
    transform: 'translate(-5%, -5%)',
    height: '110vh',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const loaderStyles = {
    width: '100px',
    height: '100px',
    background: `linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(220, 220, 220) 40%,
      rgb(170, 170, 170) 98%,
      rgb(10, 10, 10) 100%
    )`,
    borderRadius: '50%',
    position: 'relative',
  };

  const loaderBeforeStyles = {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    borderBottom: '0 solid rgba(255, 255, 255, 0.05)',
    boxShadow: `
      0 -10px 20px 20px rgba(0, 182, 255, 0.4) inset, /* Bright blue */
      0 -5px 15px 10px rgba(255, 105, 180, 0.5) inset, /* Pink */
      0 -2px 5px rgba(255, 255, 102, 0.8) inset, /* Yellow */
      0 -3px 2px rgba(135, 206, 250, 0.9) inset, /* Sky Blue */
      0 2px 0px rgba(255, 182, 193, 1), /* Light Pink */
      0 2px 3px rgba(173, 216, 230, 1), /* Light Blue */
      0 5px 5px rgba(255, 105, 180, 0.9), /* Pink */
      0 10px 15px rgba(0, 191, 255, 0.6), /* Deep Sky Blue */
      0 10px 20px 20px rgba(0, 255, 127, 0.4) /* Spring Green */
    `,
    filter: 'blur(3px)',
    animation: 'rotate 2s linear infinite',
  };

  return (
    <div style={containerStyles}>
      <style>
        {`
          @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <span style={loaderStyles}>
        <span style={loaderBeforeStyles}></span>
      </span>
    </div>
  );
};

export default Loader;
