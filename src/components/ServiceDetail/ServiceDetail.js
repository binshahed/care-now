import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  let { serviceId } = useParams();

  useEffect(() => {
    fetch("https://api.npoint.io/d8198d95eaa4027fc096")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service =
    services.length > 1 &&
    services.find((item) => item.id === parseInt(serviceId));

  return (
    <div className="container App my-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <img
            className="my-5"
            src={service?.service_image}
            style={{ width: "80%" }}
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <h1 className="text-info">{service?.service_name}</h1>
          <p>{service?.service_detail}</p>
          <p>
            <strong>More Info</strong>
          </p>
          <p>{service?.more_detail}</p>
        </div>
      </div>

      <Link to="/appointment">
        <Button variant="info">Get appointment</Button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
