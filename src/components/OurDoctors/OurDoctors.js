import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import doctor1 from "../../images/doctors/1.jpg";
import doctor2 from "../../images/doctors/2.jpg";
import doctor3 from "../../images/doctors/3.jpg";

const OurDoctors = () => {
  return (
    <div className="container">
      <div className="App" style={{ margin: "100px 0 30px 0" }}>
        <h6 className="text-info">Our Team</h6>
        <h4 className="mb-5">Meet Our Doctors</h4>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={doctor1} />
              <Card.Body>
                <Card.Title>Diana Wagner</Card.Title>
                <Card.Text>Periodontist</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={doctor2} />
              <Card.Body>
                <Card.Title>Sara Jackson</Card.Title>
                <Card.Text>Orthodontist</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={doctor3} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Endodontist</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurDoctors;
