import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Carousel className="testimonial-carousel">
      <Carousel.Item>
        <Container>
          <h3 className="text-center py-4">Hugh G</h3>
          <p className="lead text-center py-3">
            I just want to thank the friendly staff at Flemington Citilinked
            last week for helping out and making our move that much easier. The
            service i received was outstanding and would have no hesitation
            recommending Citilinked as a reputable storage facility.
          </p>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <h3 className="text-center py-4">Suzzane B</h3>
          <p className="lead text-center py-3">
            I wanted to pass on to you to thank you and congratulate your staff
            on their high quality of Customer service. We have rented space at
            your Flemington site for over 4 years, and have seen a number of new
            staff come and go. The current team you have on board we believe are
            the best, and as such have made our dealings more efficient and
            enjoyable .Your staff are very supportive and always eager to lend a
            hand .
          </p>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <h3 className="text-center py-4">Patrick K</h3>
          <p className="lead text-center py-3">
            I have been a customer at Citilinked Richmond for 12 months. I want
            to thank the staff especially Stewart for his quality of customer
            service and helpful nature. He is a valued asset to your company. I
            look forward to dealing with your company in the future.
          </p>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <h3 className="text-center py-4">Jack B</h3>
          <p className="lead text-center py-3">
          I have stored at both Richmond & Flemington facilities and the helpfulness of Stuart at Richmond and Phil at Flemington was really pleasant. They showed professionalism and had a storage solution for me after a quick 5 minute chat.
          </p>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Testimonials;
