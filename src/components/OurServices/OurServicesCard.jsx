import React from 'react'
// import serviceImg1 from "../../asset/img/service-1.jpg";
// import serviceImg2 from "../../asset/img/service-2.jpg";
// import serviceImg3 from "../../asset/img/service-3.jpg";
// import serviceImg4 from "../../asset/img/service-4.jpg";
// import serviceImg5 from "../../asset/img/service-5.jpg";
// import serviceImg6 from "../../asset/img/service-6.jpg";

const OurServicesCard = ({img, title, description}) => {
   
  return (
    
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="service-item">
                      <div className="service-img">
                        <img
                          src={img}
                          className="img-fluid rounded-top w-100"
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