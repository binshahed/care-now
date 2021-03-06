import "./Register.css";
import { Col, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Register = () => {
  const {  googleSignIn, handleSignUpWithEmailPassword, error, setError } =
    useAuth();
  //  redirect auth
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit react hook form
  const onSubmit = (data) => {
    handleSignUpWithEmailPassword(
      data.name,
      data.email,
      data.password,
      history,
      redirect_uri
    );
  };

  // google sign in

  const handleGoogleSignIn = () => {
    googleSignIn(history, redirect_uri);
  };

  return (
    <div className="container App ">
      <div className="register">
        <h1>Register</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              {...register("name")}
            />
          </Form.Group>

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

          {/* error message */}
          <p className="text-danger">{error}</p>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p>
          Already have an account?{" "}
          <Link to="/login" onClick={() => setError("")}>
            Login
          </Link>
        </p>
        <br />
        {/* google sign in */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
