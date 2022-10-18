import React, { useState } from "react";
import TestimonialCard from "../card/TestimonialCard";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      
      image:
        "https://img.freepik.com/free-photo/medium-shot-happy-family-indoors_23-2148880377.jpg?w=1800&t=st=1665169723~exp=1665170323~hmac=305ed50b5304f7d673444d5ab3e52ce65cceb4e4bdf0e7408012e435a7a15b82",
      date: "23/07/2022",
    },
    {
      id: 2,
      
      image:
      "https://img.freepik.com/free-photo/portrait-african-american-family-taking-selfie-together-with-digital-tablet-home-family-lifestyle-concept_58466-12031.jpg?w=1800&t=st=1665169771~exp=1665170371~hmac=b2e14df2f7bd1135ccc6bf68b5d2228be927c94be0c661121cbf1d21035072af",date: "23/07/2022",
    },
   
  ]);

  return (
    <>
      <div id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Customer Stories</h2>
                <span>Our Customer Service Starts Here</span>
              </div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
