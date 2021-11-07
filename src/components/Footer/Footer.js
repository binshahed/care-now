import "./Footer.css";
import logo from "../../images/Logolight.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img style={{ width: "200px" }} src={logo} alt="" />
            <p className="mt-5">
              <small>© Shahed 2021 | all rights reserved</small>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <Link to="/">About Us</Link>
            </p>
            <p>
              <Link to="/doctors">Team</Link>
            </p>
            <p>
              <Link to="/">Testomonial</Link>
            </p>
            <p>
              <Link to="/services">Services</Link>
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <br />
            <p>Address: 66 broklyant, new York India 3269 road.</p>
            <p>Call: 012 345 678 9101</p>
            <p>Email: yourmail.@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
