import whatWeDoImage from "../../images/others/what-we-do.jpg";

const WhatWeDo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img style={{ width: "80%" }} src={whatWeDoImage} alt="" />
        </div>
        <div className="col-md-6 col-sm-12 text-left">
          <div style={{ margin: "100px 0 30px 0" }}>
            <h6 className="text-info">WHAT WE DO</h6>
            <h1>
              True Healthcare For <br /> Your Family
            </h1>
          </div>
          <div className="row text-light">
            <div className="col-md-6 col-sm-12 bg-info p-5">
              <p>
                {" "}
                <strong>Quality Control System</strong>
              </p>
              <p>
                If there are a lot of young people in the area that your
                practice serves, it could be beneficial to have a pediatric
                dental specialist on-staff.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 bg-info p-5">
              <p>
                {" "}
                <strong>Highly Professional Staff</strong>
              </p>
              <p>
                The dental equivalent of pediatricians, pediatric dentists have
                specialized skill sets tailored toward caring for the oral
                health of children. They help provide specialized care for
                infants through teens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
