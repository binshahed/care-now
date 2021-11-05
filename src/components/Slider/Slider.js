import slider1 from "../../images/slider/1.webp";
import slider2 from "../../images/slider/2.webp";
import slider3 from "../../images/slider/3.webp";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item >
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption className="text-dark d-none d-md-block d-lg-block">
          <h3>The best in modern dentistry</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption className="text-dark d-none d-md-block d-lg-block">
          <h3>We use Latest Medical Technology </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption className="text-dark d-none d-md-block d-lg-block">
          <h3>Improve your dental health</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
