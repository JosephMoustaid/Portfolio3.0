import React from 'react';
import Logo from '../assets/images/logo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-md ms-md-3 content container-fluid" id="nav">
      {/* Navbar Toggler (Hamburger Menu) */}
      <button
        className="navbar-toggler"
        type="button"
        style={{ border: '0px', marginTop: '3px', marginLeft: '3px' }}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="wrapper-menu">
          <div className="line-menu half start"></div>
          <div className="line-menu"></div>
          <div className="line-menu half end"></div>
        </div>
      </button>

      {/* Navbar Items */}
      <div className="container py-1">
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-lg-0 text-center text-md-end list-inline">
            <li className="nav-item px-md-1">
              <a href="#home" className="nav-link  navLinks" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item px-md-1">
              <a href="#techStack" className="nav-link navLinks">
                TechStack
              </a>
            </li>
            <li className="nav-item px-md-1">
              <a href="#projects" className="nav-link  navLinks">
                Projects
              </a>
            </li>
            <li className="nav-item px-md-1">
              <a href="#About" className="nav-link  navLinks">
                About
              </a>
            </li>
            <li className="nav-item px-md-1">
              <a href="mailto:MoustaidYoussef@emsi-edu.ma" className="nav-link navLinks">
                Contact
              </a>
            </li>
            <li className="nav-item px-md-1">
              <a href="blog" className="nav-link navLinks">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
