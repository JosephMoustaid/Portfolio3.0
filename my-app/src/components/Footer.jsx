import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/style.css'; // Ensure your SCSS is compiled into CSS and imported properly.

function Footer() {
  return (
    <footer id="footer" className="bd-footer content h-50 mb-4">
      <div className="container">
        <div className="row" style={{ paddingTop: '50px' }}>
          {/* Portfolio and Socials */}
          <div className="col-12 col-md-6">
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-linkedin px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <i className="bi bi-github px-2 py-1 m-auto social-icon"></i>
                </a>
              </li>
              <li className="mb-2 d-inline-block">
                <a
                  href="https://codepen.io"
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
                  href="https://twitter.com"
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
          <div className="col-12 col-md-3">
            <ul className="list-inline">
              <li>
                <h4 className="sec-title about__titles--tiltle">Resources</h4>
              </li>
              <li><a href="#home" className="info">Home</a></li>
              <li><a href="#techStack" className="info">TechStack</a></li>
              <li><a href="#projects" className="info">Projects</a></li>
              <li><a href="#experience" className="info">Experience</a></li>
              <li><a href="#About" className="info">About</a></li>
              <li><a href="#Services" className="info">Services</a></li>
              <li><a href="mailto:MoustaidYoussef@emsi-edu.ma" className="info">Contact</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="col-12 col-md-3">
            <ul className="list-inline">
              <li>
                <h4 className="sec-title about__titles--tiltle">Policy</h4>
              </li>
              <li><a href="#About" className="info">Privacy</a></li>
              <li><a href="#Services" className="info">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="grey-bg text-center w-100 py-2">
        &copy; Copyright 2023. 
        <span>
          Developed by <span>Youssef Moustaid</span>. <br />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
