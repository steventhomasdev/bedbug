import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
      <div className="service-box">
        <figure>
          <a href="images/1.jpg" className="fancybox" rel="ligthbox">
            <img src={service.image} className="zoom img-fluid " alt="" />
          </a>
          <span className="hoverle">
            <a href="images/1.jpg" className="fancybox" rel="ligthbox">
              {service.title}
            </a>
          </span>
        </figure>
      </div>
    </div>
  );
};

export default ServiceCard;
