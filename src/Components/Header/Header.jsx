import React from "react";
import { Container } from "reactstrap";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Container>
        <header className="mx-5 absolute top-0 left-0 right-0 z-10 tablet:block mobile:hidden ">
          <ul className="flex justify-between items-center rounded-md bg-white py-2 px-3 my-3 br-3 ">
            <li className=" navItem  ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" navItem  ">
              <Link to={"/about"}>About</Link>
            </li>

            <li className=" navItem  ">
              <Link to={"/Booking"}>Bookings</Link>
            </li>
            <li className=" navItem  ">
              <img src="https://logodix.com/logo/1731158.png" className=" w-[52px] h-[54px]" alt="" />
            </li>
            <li className=" navItem  ">
              <Link to={"/rooms"}>Rooms</Link>
            </li>
            <li className=" navItem  ">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className=" navItem  ">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </header>
        <i class="fa-solid fa-bars absolute top-5 right-5 py-2 px-3 text-lg text-violet-800 z-10 rounded-lg bg-white tablet:hidden mobile:inline-block"></i>
      </Container>
    </div>
  );
};

export default Header;
