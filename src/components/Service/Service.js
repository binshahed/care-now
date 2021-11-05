import "./Service.css";
import { Button, Card, Col } from "react-bootstrap";

const Service = (props) => {
  const { id, service_name, service_detail, service_image } = props.service;
  return (
    <Col>
      <Card>
        <div className="img-section">
          <img className="card-image" src={service_image} alt="" />
        </div>
        {/* <Card.Img className="card-image" variant="top" src={service_image} /> */}
        <Card.Body>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text>{service_detail}</Card.Text>
          <Button>More Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
