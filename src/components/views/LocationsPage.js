import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LocationsPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h1 className="py-4">Flemington Storage</h1>
            <p className="lead">203 Racecourse Road Flemington</p>
            <p className="lead">03 9376 5975</p>
            <p className="lead">flemington@citilinkedselfstorage.com.au</p>
          </Col>
          <Col>
            <iframe
              width="600"
              height="450"
              frameBorder="0"
              styles="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCyTKNXQieVt5FEYSuwmesKtA-ExU6D5Y
    &q=Space+Needle,Seattle+WA"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <h1 className="py-4">Richmond Storage</h1>
            <p className="lead">198 Burnley Street Richmond</p>
            <p className="lead">03 9429 6970</p>
            <p className="lead">richmond@citilinkedselfstorage.com.au</p>
          </Col>
          <Col><iframe
              width="600"
              height="450"
              frameBorder="0"
              styles="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCyTKNXQieVt5FEYSuwmesKtA-ExU6D5Y
    &q=Space+Needle,Seattle+WA"
              allowFullScreen
            ></iframe></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

//api key - AIzaSyBCyTKNXQieVt5FEYSuwmesKtA-ExU6D5Y
export default LocationsPage;
