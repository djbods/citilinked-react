import React from "react";
import { Button, Container } from "react-bootstrap";

// Custom homepage components
import Services from "../layout/Services";
import Gallery from "../layout/Gallery";
import Testimonials from "../layout/Testimonials";
import Cta from "../layout/Cta";
import Summary from "../layout/Summary";
import Banner from "../layout/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <div className="float-lg-right">
          <Button className="view-services" href="/services" size="lg" variant="warning">
            View
          </Button>
        </div>
      </Container>
      <Services />
      <Cta />
      <Summary />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
