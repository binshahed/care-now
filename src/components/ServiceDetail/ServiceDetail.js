import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  let { serviceId } = useParams();
  console.log(serviceId);

  useEffect(() => {
    fetch("https://api.npoint.io/7cc673e1dfeceebbdc6b")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service =
    services.length > 1 &&
    services.find((item) => item.id === parseInt(serviceId));

  console.log(service);

  return (
    <div className="App my-5">
      <h1>{service.service_name}</h1>
      <img src={service.service_image} alt="" />
      <p>{service.service_detail}</p>
      <Link to="/appointment">Get appointment</Link>
    </div>
  );
};

export default ServiceDetail;
