import React, { useState } from "react";

const Testimonials = () => {

  return (
    <div id="screenshot" class="Screenshot">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage">
              <h2>Happy Client Testimonials</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div
              id="main_slider"
              class="carousel slide banner-main"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <span class="first-slide">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of <br />
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters,
                  </span>
                </div>
                <div class="carousel-item">
                  <span class="second-slide">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of <br />
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters,
                  </span>
                </div>
                <div class="carousel-item">
                  <span class="third-slide">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of <br />
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters,
                  </span>
                </div>
              </div>
              <a
                class=""
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
              <i class="fa fa-square-arrow-left"></i>
              </a>
              <a
                class=""
                href="#main_slider"
                role="button"
                data-slide="next"
              >
              <i class="fa fa-square-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
