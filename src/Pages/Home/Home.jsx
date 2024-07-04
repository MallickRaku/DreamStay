import React from "react";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import { SlideImages } from "../../Data";
import "react-slideshow-image/dist/styles.css";
import BookRoom from "../../Components/BookRoom";
import HotelFacility from "../../Components/HotelFacility";
import SpecialOffer from "../../Components/SpecialOffer";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
    showDots: true,
  };
  return (
    <>
      <Header />
      <div className="homePage">
        <div className="slideContainer">
          <Slide {...settings}>
            {SlideImages.map((slideImage, index) => {
              return (
                <div key={index} className={`homeSlide`} style={{ backgroundImage: `url(${slideImage.url})` }}>
                  <div className="homeSlideOverlay"></div>
                  <span className={`homeSlideTitle`}>{slideImage.span}</span>
                </div>
              );
            })}
          </Slide>
        </div>
        <BookRoom />
        <HotelFacility />
        <SpecialOffer />
      </div>
      <Footer />
    </>
  );
};

export default Home;
