import "../Register/Register.css";
import { Col, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setUser(data);
  console.log(user);

  return (
    <div className="container App ">
      <div className="register">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p>
          New at Care now? <Link to="/register">Register</Link>
        </p>
        <br />
        <button type="button" className="login-with-google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
