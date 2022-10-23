import React from "react";
import "./card.css";

const ServiceCard = ({ service }) => {
  return (
    // <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
    //   <div className="service-box">
    //     <figure>
    //       <a href="images/1.jpg" className="fancybox" rel="ligthbox">
    //         <img src={service.image} className="zoom img-fluid " alt="" />
    //       </a>
    //       <span className="hoverle">
    //         <a href="images/1.jpg" className="fancybox" rel="ligthbox">
    //           {service.title}
    //         </a>
    //       </span>
    //     </figure>
    //   </div>
    // </div>
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
    <div class="card rounded shadow-sm border-0">
      <div class="card-body p-4"><img src="https://png.pngtree.com/png-clipart/20210328/original/pngtree-the-warranty-label-with-bold-outline-style-vector-png-image_6167537.jpg" alt="" class="img-fluid d-block mx-auto mb-3"/>
        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <ul class="list-inline small">
          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
          <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;
