import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className=" w-full bg-blue-950  min-[490px]:px-14 mobile:px-6 ">
      <Row className=" flex laptop:flex-row mobile:flex-col-reverse ">
        <Col className="lg-6 ">
          <div className=" laptop:p-5 mobile:p-0">
            <h4 className="my-4 text-2xl text-white">Newletter & Special Promo</h4>
            <form action="" className="flex rounded-md overflow-hidden">
              <input
                type="email"
                className=" w-[65%] tablet:py-2 tablet:px-6 mobile:px-2 mobile:py-3 border-0 outline-none
                 tablet:text-sm mobile:text-xs  placeholder:text-slate-200"
                placeholder="Enter Your Email Here"
              />
              <button className=" w-[35%] tablet:px-6 tabletpy-3 mobile:p-2 tablet:text-sm mobile:text-xs  text-white bg-blue-500 border-0 font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </Col>
        <Col className="lg-6">
          <div className="logoContainer h-[100px] flex justify-center items-center">
            <img src="https://logodix.com/logo/1731158.png" className=" w-[100px] h-[100px] mt-4" alt="" />
          </div>

          <div className="flex">
            <ul className=" w-full bg-transparent text-white ">
              <li className="footerMenuItem">About Us</li>
              <li className="footerMenuItem">Contact</li>
              <li className="footerMenuItem">Location</li>
            </ul>
            <ul className=" w-full bg-transparent text-white ">
              <li className="footerMenuItem">FAQ</li>
              <li className="footerMenuItem">Terms of Use</li>
              <li className="footerMenuItem">Privacy Police</li>
            </ul>
            <ul className=" w-full bg-transparent text-white ">
              <li className="footerMenuItem">Services & Facilities</li>
              <li className="footerMenuItem">Careers</li>
              <li className="footerMenuItem">How To book</li>
            </ul>
          </div>
        </Col>
      </Row>

      <p className="Copyright py-2 px-4 border-t-slate-100 text-white text-center m-0">
        @ Copyright Booking hotels . All the reserved.
      </p>
    </footer>
  );
};

export default Footer;
