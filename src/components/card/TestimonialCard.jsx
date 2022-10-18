import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="blog-box">
        <figure>
        <a href="images/1.jpg" className="fancybox" rel="ligthbox">
          <img src={testimonial.image} alt="#" />
          </a>
          <span>{testimonial.date}</span>
        </figure>
        <div className="travel">
          <p>
            <strong className="Comment"> 06 </strong> Comment
          </p>
          <p>
            <strong className="like">05 </strong>Like
          </p>
        </div>
        <h3>Amazing service</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          eadable English. Many desktop publishing packages and web
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
