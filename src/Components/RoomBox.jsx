import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { globalDataContext } from "./Context/ContextProvider";
import Payment from "./Portals/Payment";

const RoomBox = ({ roomData }) => {
  const SliderSetting = { arrows: false };
  const navigate = useNavigate();
  const [OpenPayment, setOpenPortal] = useState(false);
  const { bookInfo } = useContext(globalDataContext);
  const { checkInDate, checkOutDate, numOfChild, numOfAdult } = bookInfo;

  const handleSubmit = () => {
    if (checkInDate && checkOutDate && numOfChild && numOfAdult) setOpenPortal(true);
    else {
      alert("pleae fill form first then click book now");
      navigate("/");
    }
  };
  const { roomType, facilites, desc, startingPrice, images } = roomData;
  return (
    <>
      <div className="roomBox my-4  mx-2">
        <h4 className="  my-4 font-bold text-lg text-slate-600 text-green-700"> {roomType} </h4>
        <Row className=" rounded-lg overflow-hidden">
          <Col lg="5" className="p-0  ">
            <Slide {...SliderSetting} className=" h-[100px]">
              {images.map((img, index) => (
                <img key={index} src={img} className=" w-full h-full bg-cover" />
              ))}
            </Slide>
          </Col>
          <Col lg="7" className=" roomInfo relative p-3  bg-slate-50 ">
            {/* absolute position */}
            <div className=" absolute top-[5%] right-[5%] bg-transparent text-yellow-400">
              <i className={`fa-solid fa-star p-1 `}></i>
              <i className={`fa-solid fa-star p-1 `}></i>
              <i className={`fa-solid fa-star p-1 `}></i>
              <i className={`fa-solid fa-star p-1 `}></i>
              <i className={`fa-solid fa-star p-1 `}></i>
            </div>

            <h5 className=" space-x-2 text-md  font-semibold text-slate-700">Rooms Facilities</h5>
            <ul className=" flex flex-wrap py-2 px-0 bg-transparent">
              {facilites.map((item, index) => (
                <li key={index} className=" text-xs pl-0 pr-2 py-2 mr-3 text-slate-500 font-bold">
                  <i className={`fa-solid ${item.iconName} pr-3 pl-0 text-red-700 text-sm`}></i>
                  {item.name}
                </li>
              ))}
            </ul>

            <p className=" text-xs tablet:mr-[10%] font-bold text-slate-500 mb-8 tracking-wider ">{desc}</p>
            <span className=" font-bold tablet:text-lg mobile:text-sm mt-2 text-red-700 ">
              Rs {startingPrice}. <span className=" min-[490px]:inline  block">/ Starting Price</span>
            </span>

            <button
              className=" absolute bottom-[5%] right-[5%] tablet:text-lg bg-blue-950 py-2 px-4 font-bold border-0 text-white rounded-md text-center "
              onClick={() => handleSubmit()}
            >
              <span className=" min-[490px]:inline hidden">Start Booking</span>
              <span className=" mobile:inline min-[490px]:hidden">Book</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </Col>
        </Row>
      </div>
      {OpenPayment && <Payment setOpenPortal={setOpenPortal} roomData={roomData}></Payment>}
    </>
  );
};

export default RoomBox;
