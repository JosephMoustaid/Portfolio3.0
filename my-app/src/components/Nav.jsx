import React from 'react';
import Logo from '../assets/images/logo.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function Nav() {
  const location = useLocation();

  const handleInternalLink = (e, target) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-md ms-md-3 content container-fluid" id="nav">
      {/* Navbar Toggler (Hamburger Menu) */}
    

      {/* Offcanvas Trigger Button */}
      <button
        className="btn mt-2 offcanvas-trigger-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <div className="wrapper-menu">
          <div className="line-menu fs-1 half start"></div>
          <div className="line-menu fs-1"></div>
          <div className="line-menu fs-1 half end"></div>
        </div>
      </button>

      {/* Navbar Items */}
      <div className="container py-1">
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-lg-0 text-center text-md-end list-inline">
            <li className="nav-item px-md-1">
              <Link to="/" className="nav-link navLinks" aria-current="page">Home</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/" className="nav-link navLinks" aria-current="page" onClick={(e) => handleInternalLink(e, 'techstack')}>TechStack</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/" className="nav-link navLinks" aria-current="page" onClick={(e) => handleInternalLink(e, 'projects')}>Projects</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/about" className="nav-link navLinks" aria-current="page">About</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/" className="nav-link navLinks" aria-current="page" onClick={(e) => handleInternalLink(e, 'contact')}>Contact</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/blog" className="nav-link navLinks" aria-current="page">Blog</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" onClick={(e) => handleInternalLink(e, 'techstack')}>TechStack</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" onClick={(e) => handleInternalLink(e, 'projects')}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" onClick={(e) => handleInternalLink(e, 'contact')}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" aria-current="page">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;