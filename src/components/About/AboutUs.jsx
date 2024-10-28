import React from "react";
import aboutUsData from "./About";
import commonData from '../../Data/CommonData'
import './AboutUs.css'
// import AboutImg1 from '../../asset/img/about-1.jpg';
import AboutImg2 from "../../asset/img/E-WASTE aboutUs.jpg";
// import AboutImg3 from "../../asset/img/about-3.png";
// import AboutImg4 from "../../asset/img/about-4.png";
import AboutImg5 from "../../asset/img/e-waste logo.png";

const AboutUs = () => {
  return (
    // About Start
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
            <div>
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                {aboutUsData[0].aboutHeading}
              </h1>
              <p className="mb-4">
                {aboutUsData[0].aboutDescription}
              </p>
              <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-lightbulb fa-3x text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h4>{aboutUsData[0].consultUs}</h4>
                      <p>
                        {aboutUsData[0].consultUsDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-bookmark-heart-fill fa-3x text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h4>{aboutUsData[0].yearOfExpHeading}</h4>
                      <p>
                        {aboutUsData[0].yearOfExpDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <a
                    href="/"
                    className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0"
                  >
                    Discover Now
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Call Us</h4>
                      <p className="mb-0 fs-5" style={{ letterSpacing: "1px" }}>
                        {commonData[0].primaryContact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
            <div className="rounded position-relative overflow-hidden" style={{ background: "#e1ffa9"}}>
              <img src={AboutImg2} className="img-fluid rounded w-100" alt="" />

              <div
                className=""
                style={{ position: "absolute", top: "-15px", right: "-15px" }}
              >
                {/* <img
                  src={AboutImg3}
                  className="img-fluid"
                  style={{ width: "150px", height: "150px", opacity: "0.7" }}
                  alt=""
                /> */}
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "10px",
                  transform: "rotate(90deg)",
                }}
              >
                {/* <img
                  src={AboutImg4}
                  className="img-fluid"
                  style={{ width: "100px", height: "150px", opacity: "0.9" }}
                  alt=""
                /> */}
              </div>
              <div className="rounded-bottom" style={{ background: "#e1ffa9", padding: '20px',}}>
                <img
                  src={AboutImg5}
                  className="img-fluid rounded-bottom w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // About End
  );
};

export default AboutUs;
