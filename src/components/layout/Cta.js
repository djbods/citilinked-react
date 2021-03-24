import React from 'react';
import { Button } from 'react-bootstrap';

const Cta = () => {
  return (
    <div className="text-center">
        <div className="cta-calculator">
          <h1 className="mb-5">Storage Space Calculator</h1>
          <hr />
          <p className="mt-3">
            The storage calculator is a handy tool to aid in the estimation of
            the storage required when storing your goods.
          </p>
          <Button size="lg" variant="warning" href="/spacecalculator">Calculate Space</Button>
        </div>
      </div>
  )
}

export default Cta
