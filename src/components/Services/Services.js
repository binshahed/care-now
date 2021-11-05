import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services_date.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="App" style={{ margin: "100px 0 30px 0" }}>
        <h6 className="text-info">OUR SERVICES</h6>
        <h3>
          Providing Medical Care For The  Sickest In <br /> Our Community.
        </h3>
      </div>
      {
        <Row xs={1} md={3} sm={1} className="g-4">
          {services.map((service) => (
            <Service service={service} />
          ))}
        </Row>
      }
    </div>
  );
};

export default Services;
