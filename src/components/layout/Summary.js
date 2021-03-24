import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

const Summary = () => {
  return (
    <div className="storage-summary">
    <Container className="py-5">
    <div>
        <h1>Storage in Melbourne</h1>
        <Row>
          <Col>
          <p className="lead py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi eveniet, accusamus, consequatur molestiae libero, totam minus quis iure odit natus aliquam? Doloribus error labore ut provident! Nisi a qui nulla enim, quasi, aut dolorum corporis labore esse necessitatibus itaque laboriosam sunt sequi? Eos earum unde voluptatem, iure, debitis commodi deserunt assumenda repellat perspiciatis error nulla minima alias quia harum corporis rerum quae explicabo ex quidem quo recusandae, hic maxime. Dolor vero maxime, quas consequatur nam assumenda sit quis aliquid voluptate soluta ab dignissimos? Non, aliquam. Accusamus architecto ipsa iure quia inventore qui impedit porro consequuntur, sunt adipisci ipsum laudantium?</p>
          </Col>
          <Col>
          <Image fluid className="boxes-image" src="https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/banner-image.png" />
          </Col>
        </Row>
      </div>
      </Container>
      </div>
  )
}

export default Summary
