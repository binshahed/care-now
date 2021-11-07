import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  let { serviceId } = useParams();
  console.log(serviceId);

  useEffect(() => {
    fetch("https://api.npoint.io/d8198d95eaa4027fc096")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service =
    services.length > 1 &&
    services.find((item) => item.id === parseInt(serviceId));

  console.log(service);

  return (
    <div className="container App my-5">
      <h1 className="text-info  ">{service?.service_name}</h1>
      <img className="my-5" src={service?.service_image} alt="" />
      <p>{service?.service_detail}</p>
      <p><strong>More Info</strong></p>
      <p>{service?.more_detail}</p>
      <Link to="/appointment">Get appointment</Link>
    </div>
  );
};

export default ServiceDetail;
