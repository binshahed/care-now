import React from "react";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Slider />
      <WhatWeDo />
      <Services />
      <OurDoctors/>
    </div>
  );
};

export default Home;
