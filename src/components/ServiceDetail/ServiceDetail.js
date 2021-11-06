import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../hooks/useServices";

const ServiceDetail = () => {
  const [services, setServices] = useServices();

console.log(services);
const {id}= useParams()

//   let { slug } = useParams();

 


  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default ServiceDetail;
