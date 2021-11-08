import logo from "../../images/LogoDark.webp";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
  const { handleSignOut, user, setError } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0 align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/doctors">Doctors</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/aboutUs">About Us</Link>

              {user.email && (
                <p className="align-items-center m-0 px-3 text-danger ">
                  {user?.displayName}
                </p>
              )}

              {user.email ? (
                <button onClick={handleSignOut} sm="my-2" className="ml-5 btn">
                  Sign Out
                </button>
              ) : (
                <div>
                  <Link to="/login">
                    {" "}
                    <Button
                      onClick={() => setError("")}
                      variant="info"
                      sm="my-2"
                      className="ml-5"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
