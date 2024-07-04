import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ServiceImages } from "../Data";
const HotelFacility = () => {
  return (
    <section className="hotelFacility py-3 min-[490px]:px-14 mobile:px-6  bg-slate-100  ">
      <div className=" grid tablet:grid-rows-1 tablet:grid-cols-2 mobile:grid-rows-2 mobile:grid-cols-1 gap-4 ">
        <div className="">
          <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[0].url})`, height: "100%" }}>
            <div className="facilityBoxOverlay"></div>{" "}
            <span className=" laptop:text-lg tablet:sm  font-bold text-center text-white pb-6 z-10 ">
              {ServiceImages[0].span}
            </span>
          </div>
        </div>
        <div className="">
          <div className=" grid grid-rows-2 grid-cols-2 min-[490px]:gap-4 mobile:gap-2 ">
            <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[1].url})` }}>
              <div className="facilityBoxOverlay"></div>
              <span className=" laptop:text-lg tablet:sm  font-bold text-center text-white pb-6 z-10 ">
                {ServiceImages[1].span}
              </span>
            </div>

            <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[2].url})` }}>
              <div className="facilityBoxOverlay"></div>
              <span className=" laptop:text-lg tablet:sm font-bold text-center text-white pb-6 z-10 ">
                {ServiceImages[2].span}
              </span>
            </div>

            <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[3].url})` }}>
              <div className="facilityBoxOverlay"></div>
              <span className="laptop:text-lg tablet:sm  font-bold text-center text-white pb-6 z-10 ">
                {ServiceImages[3].span}
              </span>
            </div>

            <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[4].url})` }}>
              <div className="facilityBoxOverlay"></div>
              <span className="laptop:text-lg tablet:sm font-bold text-center text-white pb-6 z-10 ">
                {ServiceImages[4].span}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Row>
        <Col className=" tablet:lg-6 mobile:lg-12">
          <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[0].url})`, height: "100%" }}>
            <div className="facilityBoxOverlay"></div>{" "}
            <span className=" text-lg font-bold text-center text-white pb-6 z-10 ">{ServiceImages[0].span}</span>
          </div>
        </Col>
        <Col className=" tablet:lg-6 mobile:lg-12 gap-4">
          <Row className=" pb-4">
            <Col className="lg-6">
              <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[1].url})` }}>
                <div className="facilityBoxOverlay"></div>
                <span className=" text-lg font-bold text-center text-white pb-6 z-10 ">{ServiceImages[1].span}</span>
              </div>
            </Col>
            <Col className="lg-6">
              <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[2].url})` }}>
                <div className="facilityBoxOverlay"></div>
                <span className=" text-lg font-bold text-center text-white pb-6 z-10 ">{ServiceImages[2].span}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="lg-6">
              <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[3].url})` }}>
                <div className="facilityBoxOverlay"></div>
                <span className=" text-lg font-bold text-center text-white pb-6 z-10 ">{ServiceImages[3].span}</span>
              </div>
            </Col>
            <Col className="lg-6">
              <div className="facilityBox" style={{ backgroundImage: `url(${ServiceImages[4].url})` }}>
                <div className="facilityBoxOverlay"></div>
                <span className=" text-lg font-bold text-center text-white pb-6 z-10 ">{ServiceImages[4].span}</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </section>
  );
};

export default HotelFacility;
