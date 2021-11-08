import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Appointment = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" App container my-5  ">
      <h2>Get Appointment</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            defaultValue={user?.email}
            {...register("email")}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            defaultValue={user?.displayName}
            {...register("name")}
            type="text"
            placeholder="enter you name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Phone"
            {...register("phone")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="appointment date"
            {...register("date")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            {...register("message")}
            placeholder="enter your message"
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Link to="appointmentSubmit">
          <Button variant="info" type="submit">
            Confirm Appointment
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Appointment;
