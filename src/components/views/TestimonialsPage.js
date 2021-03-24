import React from 'react'
import { Container, Row } from 'react-bootstrap'


const TestimonialsPage = () => {
const testimonials = [
  {
    comment: "I wanted to thank Stuart down at your Richmond site for his assistance. I walked in just as he was closing expecting to be turned away instead he was more than happy to assist me and could not have been more helpful. I would like to commend him for the service he provided, and wanted to say he is a great credit to your company.",
    author: "Luke W."
  },
  {
    comment: "I just want to thank the friendly staff at Flemington Citilinked last week for helping out and making our move that much easier. The service i received was outstanding and would have no hesitation recommending Citilinked as a reputable storage facility.",
    author: "Hugh G."
  },
  {
    comment: "I have been a customer at Citilinked Richmond for 12 months. I want to thank the staff especially Stewart for his quality of customer service and helpful nature. He is a valued asset to your company. I look forward to dealing with your company in the future.",
    author: "Patrick W."
  },
  {
    comment: "I wanted to pass on to you to thank you and congratulate your staff on their high quality of Customer service. We have rented space at your Flemington site for over 4 years, and have seen a number of new staff come and go. The current team you have on board we believe are the best, and as such have made our dealings more efficient and enjoyable .Your staff are very supportive and always eager to lend a hand.",
    author: "Suzanne B."
  },
  {
    comment: "I have stored at both Richmond & Flemington facilities and the helpfulness of Stuart at Richmond and Phil at Flemington was really pleasant. They showed professionalism and had a storage solution for me after a quick 5 minute chat.",
    author: "Jack B."
  },
]

const renderTestimonial = (testimonial, index) => {
  return (
    <Container key={index}>
  <p className="py-3 lead">{testimonial.comment}</p>
  <h5> - {testimonial.author}</h5>
  <hr/>
    </Container>
  )
}

  return (
   <React.Fragment>
     <Container>
     <h1 className="py-4">Testimonials</h1>
     </Container>
     <Container>
     <Row >{testimonials.map(renderTestimonial)}</Row>
     </Container>
   </React.Fragment>
  )
}

export default TestimonialsPage
