import React from "react";
import "./OurServices.css";
import OurServicesCard from "./OurServicesCard";
import serviceImg1 from "../../asset/img/e-waste collection.avif";
import serviceImg2 from "../../asset/img/e-waste cash.jpeg";
import serviceImg3 from "../../asset/img/e-waste corporate.avif";

const OurServices = () => {
  const ourServicesData = [
    {
      img: serviceImg1,
      title: "Direct Pickup",
      description:
        "We will pick your e-waste at your door step.",
      delayTiming: "0.2s",
    },
    {
      img: serviceImg2,
      title: "Good Pricing",
      description:
        "We provide best pricing for your electronic scrap.",
      delayTiming: "0.4s",
    },
    {
      img: serviceImg3,
      title: "Corporate",
      description:
        "We have lot experience in corporate E-waste recycling. We are capable of taking huge projects.",
      delayTiming: "0.6s",
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
