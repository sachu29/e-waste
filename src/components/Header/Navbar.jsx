import React from 'react'
import './Navbar.css'
import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png'

// import Topbar from './Topbar';
// import HeaderCarousel from './HeaderCarousel';

const Navbar = () => {
    return (
      <>
        {/* Navbar & Hero Start */}
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 z-3">
            <a href="/" className="navbar-brand p-0 mt-2">
              <h1 className="text-primary">
                {/* <i className="fas fa-search-dollar me-3"></i> */}
                <img src={MainLogo} alt="" className='mail-logo'/>
              </h1>
              {/* <img src="" alt="Logo" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <a href="blog.html" className="nav-item nav-link">
                  Blogs
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        {/* Navbar & Hero End */}
      </>
    );
}

export default Navbar