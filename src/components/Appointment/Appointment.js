import React from "react";
import { Button, Form } from "react-bootstrap";

const Appointment = () => {
  return (
    <div className=" App container my-5  ">
      <h2>Get Appointment</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          <Form.Control type="text" placeholder="enter you name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          <Form.Control type="text" placeholder="appointment date" />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

          <Form.Control placeholder="enter your message" as="textarea" rows={3} />
        </Form.Group>

       <Button>Submit</Button>

      </Form>
    </div>
  );
};

export default Appointment;
