import React from 'react';
import { Fragment, Container, Row, Card, Accordion, Button } from 'react-bootstrap';

const Faqs = () => {
  return (
    <React.Fragment>
      <Container>
      <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What can I store?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Almost anything you desire, but with the strict regulations of no food products or flammable liquids. Lawn mowers are acceptable, but, with the fuel emptied out.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        What do I need to bring?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>A padlock if you have one or you can purchase one from us. A form of id e.g. Current Drivers Licence. We also require an initial one month payment for storage.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        What are the hidden costs of storage?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>No further charges apply.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Do I need to book in advance?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>It is always adviseable to book in advance so that you are guaranteed a unit when you come in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </Container>
    </React.Fragment>
  )
}

export default Faqs

{/* <Card>
        <Card.Title>What can I store?</Card.Title>
        <Card.Text className="lead">Almost anything you desire, but with the strict regulations of no food products or flammable liquids. Lawn mowers are acceptable, but, with the fuel emptied out.</Card.Text> */}
