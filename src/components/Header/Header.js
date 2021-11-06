import logo from "../../images/LogoDark.webp";
import "./Header.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
  const { handleSignOut, user } = useAuth();
  console.log(user);
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

              {user.email && <p className="align-items-center m-0 px-3 text-info">{user.email}</p>}

              {user.email ? (
                <Button
                  onClick={handleSignOut}
                  variant="info"
                  sm="my-2"
                  className="ml-5"
                >
                  Sign Out
                </Button>
              ) : (
                <div>
                  <Link to="/register">
                    {" "}
                    <Button variant="info" sm="my-2" className="ml-5">
                      Sign Up
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
