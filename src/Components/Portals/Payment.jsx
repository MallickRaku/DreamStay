import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./Payment.css";
import { useEffect } from "react";
import { globalDataContext } from "../Context/ContextProvider";
const Payment = ({ setOpenPortal, roomData }) => {
  const { roomType, startingPrice } = roomData;
  const { bookInfo, setBookInfo } = useContext(globalDataContext);
  const { checkInDate, checkOutDate, numOfChild, numOfAdult } = bookInfo;
  const textBold = {
    fontWeight: "600",
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const calculateServiceCharge = (roomPrice) => roomPrice * (10 / 100);
  const calculatTotalCharge = (roomPrice, totaldays, ServiceChargeAmout) => roomPrice * totaldays + ServiceChargeAmout;
  const calculateTotalDays = (checkIn, checkOut) => (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

  return createPortal(
    <>
      <div className="payementPortal fixed inset-0 flex items-center justify-center ">
        <div className="overlay fixed inset-0  " style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <div
          className="paymentBox relative tablet:w-[60%] mobile:w-[90%] max-h-[95%] z-10  bg-white py-4 px-8 rounded-xl text-sm   "
          style={{ ...textBold }}
        >
          <i
            class="fa-solid fa-circle-xmark  absolute text-lg top=[5%] right-[3%]"
            style={{ fontSize: "25px" }}
            onClick={() => setOpenPortal(false)}
          ></i>
          <h3 className="py-3 font-bold text-xl ">Payment</h3>
          <div className="flex justify-between items-center pb-3 ">
            <span>Room</span>
            <span> {roomType} </span>
          </div>
          <div className="flex justify-between items-center pb-3 ">
            <span>CheckIn</span>
            <span>{checkInDate}</span>
          </div>
          <div className="flex justify-between items-center pb-3 ">
            <span>CheckOut</span>
            <span>{checkOutDate}</span>
          </div>
          <div className="flex justify-between items-center pb-3 ">
            <span>Adult & Child</span>
            <span>
              {numOfAdult} & {numOfChild}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 ">
            <span>Price</span>
            <span>
              {calculateTotalDays(checkInDate, checkOutDate)} X {startingPrice}
            </span>
          </div>

          <div className="flex justify-between items-center pb-3 ">
            <span>Service Charge 10% </span>
            <span> {calculateServiceCharge(startingPrice)} </span>
          </div>

          <div className="flex justify-between items-center border-t-2 border-slate-200 py-3 ">
            <span>Total</span>
            <span>
              ₹
              {calculatTotalCharge(
                startingPrice,
                calculateTotalDays(checkInDate, checkOutDate),
                calculateServiceCharge(startingPrice)
              )}
              .
            </span>
          </div>
          <div className="flex justify-end">
            <button className=" bg-blue-400 font-bold text-sm py-2 px-3 rounded-lg text-white">Confirm Book </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Payment;
