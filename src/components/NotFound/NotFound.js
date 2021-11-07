import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFount from "../../images/404NotFound.png";

const NotFound = () => {
  return (
    <div className="App bg-info py-5">
      <img style={{ width: "30%" }} src={notFount} alt="" />
      <br />
      <br />
      <Link to="/">
        <Button variant="light">Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
