import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Gallery = () => {
  return (
    <div className="gallery-preview py-5">
        <h1 className="text-center">Gallery</h1>
        <Container className="gallery-container">
        <h3 className="py-5 lead"> Take a look at our storage locations</h3>
        </Container>
        <Container className="button-container">
        <Button href="/gallery" className="gallery-button" variant="warning" size="lg">View Images</Button>
        </Container>
        
        
      </div>
  )
}

export default Gallery;
