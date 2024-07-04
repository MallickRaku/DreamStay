import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { TypesofRooms } from "../../Data";
import RoomBox from "../../Components/RoomBox";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Rooms = () => {
  return (
    <>
      <Header />
      <div className="RoomsPage mt-28">
        <Container>
          <h2 className="my-10 text-center">Select Room</h2>
          <div className="rooms my-4 mx-0">
            <RoomBox roomData={TypesofRooms[0]}></RoomBox>
            <RoomBox roomData={TypesofRooms[1]}></RoomBox>
            <RoomBox roomData={TypesofRooms[2]}></RoomBox>
            <RoomBox roomData={TypesofRooms[3]}></RoomBox>
            <RoomBox roomData={TypesofRooms[4]}></RoomBox>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
