import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { globalDataContext } from "./Context/ContextProvider";

const BookRoom = () => {
  const { bookInfo, setBookInfo } = useContext(globalDataContext);
  const { checkInDate, checkOutDate, numOfChild, numOfAdult } = bookInfo;

  const Navigate = useNavigate();
  const handleMouseOver = (e, id) => {
    e.target.style.display = "none";
    document.getElementById(`${id}`).style.display = "inline";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkInDate && checkOutDate && numOfChild && numOfAdult) Navigate("/rooms");
    else alert("Please Fill Form First");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  return (
    <section className="bookRoom my-5 ">
      {/* <Container> */}
      <div className="bookRoomBox ">
        <h3 className=" text-2xl text-center font-bold text-slate-700 ">Book a Room</h3>
        <p className=" tablet:text-sm mobile:text-xs text-center text-slate-600 font-semibold">
          Discover the Perfect space for you
        </p>

        <form
          className=" flex laptop:flex-row mobile:flex-col  laptop:justify-around tablet:my-3 my-0"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="inputDiv ">
            <label htmlFor="date" className=" py-2 font-semibold text-slate-600">
              Select
            </label>

            <div className=" mobile:w-full tablet:w-fit flex items-center tablet:gap-0 mobile:gap-1 tablet:flex-row mobile:flex-col rounded-md overflow-hidden">
              <input
                type="date"
                className=" placeholder:w-10"
                id="checkInInput"
                style={{ display: "none" }}
                min={new Date().toISOString().split("T")[0]}
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => onChangeHandler(e)}
              />
              <span class="inputSpan" onMouseOver={(e) => handleMouseOver(e, "checkInInput")}>
                <i
                  className="fa-regular fa-calendar-check"
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>{" "}
                Check In
              </span>

              <input
                type="date"
                className=" placeholder:w-10"
                id="checkOutInput"
                style={{ display: "none" }}
                min={
                  checkInDate &&
                  new Date(new Date(checkInDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0]
                }
                name="checkOutDate"
                value={checkOutDate}
                onChange={(e) => onChangeHandler(e)}
              />
              <span className="inputSpan" onMouseOver={(e) => handleMouseOver(e, "checkOutInput")}>
                <i
                  className="fa-solid fa-calendar-check"
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>
                Check Out
              </span>
            </div>
          </div>

          <div className="inputDiv flex">
            <label htmlFor="person" className=" py-2 font-semibold text-slate-600">
              Person
            </label>
            <div className=" mobile:w-full tablet:w-fit flex items-center tablet:gap-0 mobile:gap-1 tablet:flex-row mobile:flex-col rounded-md overflow-hidden">
              <input
                type="number"
                className=" placeholder:text-sm"
                id="adultInput"
                placeholder="eg: 2"
                style={{ display: "none" }}
                name="numOfAdult"
                min={1}
                max={5}
                value={numOfAdult}
                onChange={(e) => onChangeHandler(e)}
              />
              <span class="inputSpan" onMouseOver={(e) => handleMouseOver(e, "adultInput")}>
                <i
                  className="fa-solid fa-user "
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>{" "}
                Adults
                <i
                  className="fa-solid fa-chevron-down"
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>
              </span>

              <input
                type="number"
                className=" placeholder:text-sm"
                id="childrenInput"
                placeholder="eg: 2"
                style={{ display: "none" }}
                min={0}
                max={5}
                name="numOfChild"
                value={numOfChild}
                onChange={(e) => onChangeHandler(e)}
              />
              <span class="inputSpan" onMouseOver={(e) => handleMouseOver(e, "childrenInput")}>
                <i
                  className="fa-solid fa-child"
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>{" "}
                Children
                <i
                  className="fa-solid fa-chevron-down"
                  onMouseOver={(e) => (e.target.parentElement.style.display = "none")}
                ></i>
              </span>
            </div>
          </div>

          <div className=" flex justify-center">
            <button className="py-2 px-6 text-center text-white  bg-blue-400 rounded-md font-bold tablet:text-lg mobile:text-sm text-semibold border-0 laptop:mt-[2.5rem] mobile:mt-3">
              Book Now
            </button>
          </div>
        </form>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default BookRoom;
