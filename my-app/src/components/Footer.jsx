import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/style.css'; // Ensure your SCSS is compiled into CSS and imported properly.

import { Link } from 'react-router-dom';
import {useLocation } from 'react-router-dom';


function Footer() {


  const location = useLocation();

  const handleInternalLink = (e, target) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bd-footer content h-50 ">
      <div className="container">
        <div className="row px-5" style={{ paddingTop: '50px' }}>
          {/* Portfolio and Socials */}
          <div className="col-12 col-md-8">
            <ul className="list-inline">
              <li className="mb-3">
                <h4 className="sec-title about__titles--tiltle">Portfolio</h4>
                <div className="info">
                  Let's stay connected! Whether you want to collaborate, share ideas, or just say hello, my socials are one click away!
                </div>
                <quote className="info">	&#8220;The only way to do great work is to love what you do.&#8221;</quote>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://www.linkedin.com/in/youssef-moustaid-71013a240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bpo6WFMZATsiUzASxCRvzfw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-linkedin px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://github.com/JosephMoustaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-github px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://codepen.io/Youssef-Moustaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-braces px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-facebook px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>


              
              <li className="d-inline-block">
                <a
                  href="https://x.com/Yousmalou84541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-twitter px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-6 col-md-4">
            <ul className="list-inline">
              <li>
                <h4 className="sec-title about__titles--tiltle">Resources</h4>
              </li>
              <li><Link to="/" className="info" aria-current="page">Home</Link> </li>
              <li><Link to="/" className="info" aria-current="page" onClick={(e) => handleInternalLink(e, 'techstack')}>TechStack</Link></li>
              <li><Link to="/" className="info" aria-current="page" onClick={(e) => handleInternalLink(e, 'projects')}>Projects</Link></li>
              <li><Link to="/about" className="info" aria-current="page" >About</Link></li>
              <li><Link to="/" className="info" aria-current="page" onClick={(e) => handleInternalLink(e, 'services')}>Services</Link></li>
              <li><a href="mailto:MoustaidYoussef@emsi-edu.ma" className="info">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
      {/* Footer Bottom */}
      <div className="grey-bg rounded-top-2 text-center w-100 py-2">
        &copy; Copyright 2025. 
        <span>
          Developed by <span>Youssef Moustaid</span>. <br />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
