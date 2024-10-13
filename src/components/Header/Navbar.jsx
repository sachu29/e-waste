import React from 'react'
import './Navbar.css'
import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png'

// import Topbar from './Topbar';
import HeaderCarousel from './HeaderCarousel';

const Navbar = () => {
    return (
      <div>
        {/* <Topbar /> */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
              <h1 className="text-primary">
                {/* <i className="fas fa-search-dollar me-3"></i> */}
                <img src={MainLogo} alt="" style={{borderRadius : "10px"}} />
              </h1>
              {/* <img src="" alt="Logo" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarCollapse"
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
                <div className="nav-item dropdown">
                  <a href="/" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="feature.html" className="dropdown-item">
                      Our Features
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="offer.html" className="dropdown-item">
                      Our offer
                    </a>
                    <a href="FAQ.html" className="dropdown-item">
                      FAQs
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
              {/* <a
                href="/"
                className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
              >
                Get Started
              </a> */}
            </div>
          </nav>

          {/* Carousel Part  */}
          <HeaderCarousel />
          {/* Carousel Part  */}

        </div>
        {/* Navbar & Hero End */}
      </div>
    );
}

export default Navbar