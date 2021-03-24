import React from "react";
import {
  Container,
  Jumbotron,
  ButtonGroup,
  Button,
  Row,
} from "react-bootstrap";

const Banner = () => {
  return (
    <Jumbotron fluid className="banner">
      <Container className="overlay-container">
        <Row className="overlay-text">
          <h1>Want to regain breathing space</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <ButtonGroup aria-label="Basic example">
              <Button className="btn-get" size="lg" variant="warning">
                <a href="tel:0394296970">
                Richmond: 03 9429 6970
                </a>
              </Button>
              &nbsp;
              &nbsp;
              &nbsp;
              {/* <div style="border-left:1px solid #000;height:500px"></div> */}
              <Button className="btn-learn" size="lg" variant="warning">
              <a href="tel:0394296970">                
                Flemington: 03 9376 5975
                </a>
              </Button>
            </ButtonGroup>
          </p>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Banner;
