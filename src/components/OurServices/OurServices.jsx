import React from "react";
import "./OurServices.css";
import OurServicesCard from "./OurServicesCard";
import serviceImg1 from "../../asset/img/service-1.jpg";
import serviceImg2 from "../../asset/img/service-2.jpg";
import serviceImg3 from "../../asset/img/service-3.jpg";
import serviceImg4 from "../../asset/img/service-4.jpg";
import serviceImg5 from "../../asset/img/service-5.jpg";
import serviceImg6 from "../../asset/img/service-6.jpg";

const OurServices = () => {
  const ourServicesData = [
    {
      img: serviceImg1,
      title: "Strategy Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
      delayTiming: "0.2s",
    },
    {
      img: serviceImg2,
      title: "Financial Advisory",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
      delayTiming: "0.4s",
    },
    {
      img: serviceImg3,
      title: "Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
      delayTiming: "0.6s",
    },
    {
      img: serviceImg4,
      title: "Supply Optimization",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
      delayTiming: "0.2s",
    },
    {
      img: serviceImg5,
      title: "Hr Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
    },
    {
      img: serviceImg6,
      title: "Marketing Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,sint? Excepturi facilis neque nesciunt similique officiis veritatis,",
    },
  ];
  return (
    // Services Start
    <div className="container-fluid service pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-5 mb-4">We Services provided best offer</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Cards Below */}

        <div className="row g-4">
          {ourServicesData.map((services, index) => (
            <OurServicesCard
              key={index}
              img={services.img}
              title={services.title}
              description={services.description}
            />
          ))}
        </div>
      </div>
    </div>
    //  Services End
  );
};

export default OurServices;
