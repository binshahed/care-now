import aboutus from "../../images/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row">

        {/* about us image */}
        <div className="col-md-6 col-sm-12 ">
          <img style={{ width: "80%" }} src={aboutus} alt="" />
        </div>

        {/* about us content */}
        <div className="col-md-6 col-sm-12 text-left">
          <div style={{ margin: "100px 0 30px 0" }}>
            <h6 className="text-info">ABOUT US</h6>
            <h1>
              We Complete Every <br />
              Step Carefully
            </h1>
            {/* static data */}
            <p>
              Care Now was conceived in September 2007 by Clinical
              Director and 2011’s Dental Hygienist of the Year finalist,
              Christina Chat field. “I had a vision to open a new hygiene-led
              oral health care clinic on the high-street, where oral health care
              could become both accessible and demystified. That vision is
              Care Now”. At Care Now we strive to offer you,
              the consumer, the very best in contemporary dental care. Our
              highly qualified professional dental practitioners provide care
              and treatment regardless of your current or previous dental
              history and we pride ourselves in making your experience at Dental
              Health Spa as relaxing as possible. Care Now is not a
              dental surgery as you know it! At Care Now we work in an
              open environment, protecting your privacy without conducting our
              treatments behind intimidating closed doors. Relax on our comfy
              sofa whilst you wait and gaze at the Brighton-inspired artwork on
              our walls. Our surgeries are state of the art with the best in
              equipment and stringent ster ilisation procedures. Many of our
              patients have come to us because of dental phobia. We will work
              with you to combat this fear, so if you are worried just let us
              know. We are a contemporary clinic and in the modern world, the
              importance of first impressions should not be underestimated.
              However, we have all heard the horror stories about tooth
              bleaching going terribly wrong. Spa White teeth whitening gives
              you the opportunity to brighten your smile with a range of
              affordable treatments in full confidence, knowing that you are
              receiving professional treatment from reliable practitioners that
              specialise in working with teeth. Dental care is not just for
              adults and in 2009 we launched our children’s clinic, Spa Kids. We
              are one of just three dental clinics in the south of England with
              state-of-the-art Oral Insights technology. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
