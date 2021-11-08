import "../Register/Register.css";
import { Col, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Login = () => {

  const { handleSignInWithEmail, error, googleSignIn,  setError,setUser } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  // react hook form 
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submission 
  const onSubmit = (data) => {
    handleSignInWithEmailAndPassword(data.email, data.password);
    setUser(data);
  };



  // google Sign in
  const handleGoogleSignIn = () => {
    googleSignIn(history,redirect_uri)
      
  };

  // email password sign in
  const handleSignInWithEmailAndPassword = (email, password) => {
    handleSignInWithEmail(email, password,history,redirect_uri)
     
  };

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
          <p className="text-danger">{error}</p>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>
          New at Care now?{" "}
          <Link to="/register" onClick={() => setError("")}>
            Register
          </Link>
        </p>
        <br />
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
