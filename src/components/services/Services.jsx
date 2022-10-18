import React, { useState } from "react";
import ServiceCard from "../card/ServiceCard";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Bed Bug Extremination",
      image:
        "https://img.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg?w=1380&t=st=1665171174~exp=1665171774~hmac=010ee36140635683307dc6bb12f70b4c3e57d81ab8e4c9b2eff886be104995c4"},
    {
      id: 2,
      title: "Bed bug Inspection",
      image:
        "https://img.freepik.com/premium-vector/cartoon-drawing-isolated-cockroach_29937-9892.jpg?w=1380",
    },
    {
      id: 3,
      title: "Equipments Rental",
      image:
        "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
    },
  ]);

  return (
    <>
      <div id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Services </h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of <br />
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters,
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-r-l">
          <div className="row">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
