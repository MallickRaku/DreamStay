import React from "react";
import { hotelServices } from "../../Data";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "reactstrap";
const Service = () => {
  return (
    <>
      <Header />
      <div className="servicePage mt-28">
        <Container>
          <h2>Services</h2>

          {hotelServices.map((item, index) => {
            return (
              <div className="serviceBox  my-4" key={index}>
                <h5 className="my-4"> {item.serviceName} </h5>

                <div className="grid minilaptop:grid-rows-1 minilaptop:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-1 gap-3">
                  {item.options.map((opt) => {
                    return (
                      <div className="option" style={{ backgroundImage: `url(${opt.url})` }}>
                        <div className="optionOverlay"></div>
                        <span className=" text-xl tracking-wider text-center font-bold text-white z-10">
                          {opt.optionName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Service;
