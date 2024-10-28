import React from 'react'

const OurServicesCard = ({ img, title, description }) => {

  return (

    <div
      className="col-md-6 col-lg-4"
      // data-wow-delay="0.2s"
      data-aos="fade-down"
    >
      <div className="service-item">
        <div className="service-img">
          <img
            src={img}
            className="img-fluid rounded-top w-100"
            style={{ weight: "400px", height : "250px" }}
            alt=""
          />
        </div>
        <div className="rounded-bottom p-4">
          <a href="/" className="h4 d-inline-block mb-4">
            {" "}
            {title}
          </a>
          <p className="mb-4">
            {description}
          </p>
          <a
            className="btn btn-primary rounded-pill py-2 px-4"
            href="/"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServicesCard