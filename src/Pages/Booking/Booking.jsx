import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { Container } from "reactstrap";
const Booking = () => {
  return (
    <>
      <Header />

      <div className="bookingPage mt-28">
        <Container>
          <h2>All Bookings</h2>

          <div className="bookingsBox my-5">
            <div className="booking ">
              <div className=" min-[490px]:block hidden ">
                <h6>Room</h6>
                <p>Standard</p>
              </div>
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckIn</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckOut</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>
                  <i className="fa-solid fa-user"></i>&<i className="fa-solid fa-child"></i>
                </h6>
                <p>2 & 6</p>
              </div>{" "}
              <div>
                <h6>BookingId</h6>
                <p>8h8hi9h9i0ijok-0ij</p>
              </div>{" "}
              <div>
                <h6>Bokking Date </h6>
                <p> 2023-09-08 </p>
              </div>{" "}
              <div>
                <h6>Paid</h6>
                <p> Rs 4000</p>
              </div>
              {/* position absolute */}
              <span className="bookingStatus">Active</span>
            </div>

            <div className="booking ">
              <div className=" min-[490px]:block hidden ">
                <h6>Room</h6>
                <p>Standard</p>
              </div>
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckIn</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckOut</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>
                  <i className="fa-solid fa-user"></i>&<i className="fa-solid fa-child"></i>
                </h6>
                <p>2 & 6</p>
              </div>{" "}
              <div>
                <h6>BookingId</h6>
                <p>8h8hi9h9i0ijok-0ij</p>
              </div>{" "}
              <div>
                <h6>Bokking Date </h6>
                <p> 2023-09-08 </p>
              </div>{" "}
              <div>
                <h6>Paid</h6>
                <p> Rs 4000</p>
              </div>
              {/* position absolute */}
              <span className="bookingStatus">Active</span>
            </div>

            <div className="booking ">
              <div className=" min-[490px]:block hidden ">
                <h6>Room</h6>
                <p>Standard</p>
              </div>
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckIn</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>CheckOut</h6>
                <p>2024-09-02</p>
              </div>{" "}
              <div className=" minilaptop:block mobile:hidden">
                <h6>
                  <i className="fa-solid fa-user"></i>&<i className="fa-solid fa-child"></i>
                </h6>
                <p>2 & 6</p>
              </div>{" "}
              <div>
                <h6>BookingId</h6>
                <p>8h8hi9h9i0ijok-0ij</p>
              </div>{" "}
              <div>
                <h6>Bokking Date </h6>
                <p> 2023-09-08 </p>
              </div>{" "}
              <div>
                <h6>Paid</h6>
                <p> Rs 4000</p>
              </div>
              {/* position absolute */}
              <span className="bookingStatus">Active</span>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
