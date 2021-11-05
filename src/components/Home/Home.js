import React from "react";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Slider />
      <WhatWeDo />
      <Services />
    </div>
  );
};

export default Home;
