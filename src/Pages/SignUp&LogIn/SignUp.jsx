import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import "./SignUp&LogIn.css";
const SignUp = () => {
  return (
    <div className="signupPage flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen ">
      <div className=" grid minilaptop:grid-rows-1 minilaptop:grid-cols-2 minilaptop:w-[80%] mobile:w-[90%] max-h-[90%]  bg-white rounded-lg p-4">
        <div className=" minilaptop:block mobile:hidden ">
          <img src="https://logodix.com/logo/1731158.png" className=" w-full h-full object-contain" alt="" />
        </div>

        <div>
          <h2 className="pt-1 text-center text-lg text-blue-600 ">Register Now</h2>

          <Form className="py-1 px-4 ">
            <FormGroup>
              <Label>Full Name</Label>
              <Input placeholder="Enter Full Name" type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label> Email</Label>
              <Input placeholder="Enter Email Id" type="email"></Input>
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input placeholder="Set Password" type="password"></Input>
            </FormGroup>

            <div className="d-flex justify-content-center ">
              <Button className=" bg-blue-950 text-white w-full">Register</Button>
            </div>
          </Form>
          <p className=" text-xs text-center text-blue-600 font-semibold">
            Already Have an Account ? <a href=" /login">Login </a>{" "}
          </p>
        </div>
      </div>
      {/* <Container className="flex items-center justify-center  ">
        <Row className="loginBox w-[80%] h-[60%]  bg-white rounded-lg">
          <Col lg="6">
            <img src="https://logodix.com/logo/1731158.png" className=" w-full h-full object-contain" alt="" />
          </Col>
          <Col lg="6">
            <h2 className="pt-3 text-center text-lg text-blue-600 ">Register Now</h2>

            <Form className="p-3">
              <FormGroup>
                <Label>Full Name</Label>
                <Input placeholder="Enter Full Name" type="text"></Input>
              </FormGroup>
              <FormGroup>
                <Label> Email</Label>
                <Input placeholder="Enter Email Id" type="email"></Input>
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input placeholder="Set Password" type="password"></Input>
              </FormGroup>

              <div className="d-flex justify-content-center ">
                <Button className=" bg-blue-950 text-white w-full">Register</Button>
              </div>
            </Form>
            <p className=" text-xs text-center text-blue-600 font-semibold">
              Already Have an Account ? <a href=" /login">Login </a>{" "}
            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default SignUp;
