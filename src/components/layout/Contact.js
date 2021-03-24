import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid className="contact-section text-light py-5">
      <Container>
        <Row>
          <Col>
            <div className="flem-contact-links">
              <h3>Contact</h3>
              <h5>Flemington Storage</h5>
              <p>203 Racecourse Road</p>
              <p>Flemington</p>
              <hr />
              <h5>Phone</h5>
              <p>03 9376 5975</p>
              <hr />
              <h5>Email</h5>
              <p>flemington@citlinkedselfstorage.com.au</p>
              <hr />
              <h5>Working Hours</h5>
              <p>Mon: Fri 8:30am - 5:00pm</p>
              <p>Sat: 10:00am - 4:00pm</p>
              <p>Sun: 10:30am - 3:00pm</p>
            </div>
          </Col>

          <Col>
            <div className="get-a-quote">
              <h3>Get a quote</h3>
              <Form className="contact-form">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Enter phone number" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridSize">
                    <Form.Label>Storage Size</Form.Label>
                    <Form.Control placeholder="In cubic metres" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Preferred Storage Location</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Richmond</option>
                      <option>Flemington</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button size="lg" variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
