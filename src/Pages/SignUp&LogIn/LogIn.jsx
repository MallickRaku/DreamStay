import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./SignUp&LogIn.css";
const LogIn = () => {
  return (
    <div className="loginPage flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
      <Container className="flex items-center justify-center  ">
        <div className=" grid minilaptop:grid-rows-1 minilaptop:grid-cols-2 minilaptop:w-[80%] mobile:w-[90%] max-h-[60%]  bg-white rounded-lg p-4">
          <div className=" minilaptop:block mobile:hidden ">
            <img src="https://logodix.com/logo/1731158.png" className=" w-full h-full object-contain" alt="" />
          </div>

          <div>
            <h2 className="pt-1 text-center text-lg text-blue-600 ">Register Now</h2>

            <Form className="py-1 px-4">
              <FormGroup>
                <Label> Email</Label>
                <Input placeholder="Enter Email Id" type="email"></Input>
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input placeholder="Set Password" type="password"></Input>
              </FormGroup>

              <div className="d-flex justify-content-center ">
                <Button className=" bg-blue-950 text-white w-full">Sign in</Button>
              </div>
            </Form>
            <p className=" text-xs text-center text-blue-600 font-semibold">
              Create An Account ? <a href=" /signup">SignUp </a>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LogIn;
