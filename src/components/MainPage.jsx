import React from "react";
import ContactUs from "./contact-us/ContactUs";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const MainPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
