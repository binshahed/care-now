import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices([]);


  return (
    <div className="container my-5">
      <div className="App" style={{ margin: "100px 0 30px 0" }}>
        <h6 className="text-info">OUR SERVICES</h6>
        <h3>
          Providing Medical Care For The Sickest In <br /> Our Community.
        </h3>
      </div>
      {
        <Row xs={1} md={3} sm={1} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      }
    </div>
  );
};

export default Services;
