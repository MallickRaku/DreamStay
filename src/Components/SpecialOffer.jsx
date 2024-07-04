import React from "react";
import { Col, Container, Row } from "reactstrap";
import { offerImages } from "../Data";
const SpecialOffer = () => {
  return (
    <section className="specialOffer py-3 min-[490px]:px-14 mobile:px-6   relative my-5">
      <span className="text-blue-500 text-2xl">Special Offer</span>
      <h2 className="my-2 text-slate-400">Best Offer of the month</h2>
      <p className="my-2   text-slate-400">
        Experience Fantastic Benefits and Obtain Better Rates When You Make Dirent Booking On Your Official Website.
      </p>

      <span className=" absolute minilaptop:top-[10%] mobile:top-[1%] right-[5%] font-semibold cursor-pointer banner">
        View all
      </span>
      <div className=" mobile:mt-14 grid minilaptop:grid-rows-1 minilaptop:grid-cols-3 min-[490px]:grid-rows-2  min-[490px]:grid-cols-2 gap-3 tablet:p-5">
        {offerImages.map((offer, index) => {
          return (
            <div className=" laptop:m-3 mobile:m-1" key={index}>
              <div className="offer ">
                <img
                  src={offer.url}
                  alt=""
                  className=" object-fill w-full laptop:h-[200px]  minilaptop:h-[180px] min-[490px]:h-[140px] mobile:h-[200px] rounded-xl"
                />
                <div className="offerInfo">
                  <span className="offerType my-3  block text-sm font-bold text-slate-600">{offer.offertype}</span>
                  <div className="flex justify-between items-center text-slate-600 ">
                    <h5 className=" font-bold ">{offer.offerNmae}</h5>
                    <i className="fa-solid fa-user"> {offer.allowedPerson}</i>
                  </div>
                  <p className="offerDetail text-slate-500 font-semibold text-xs">{offer.offerDetails}</p>

                  <div className="offerPrice m-3  text-center">
                    <span className=" text-2xl font-bold p-1">${offer.offerPrice}</span>/{offer.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialOffer;
