import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Create array of JavaScript objects with custom card properties
const ProductsPage = () => {
  const products = [
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Archive-Box-468x520.jpg",
      title: "Archive Box",
      text: "$3.50",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Book-Wine-box-5-1.jpg",
      title: "Book & Wine Box",
      text: "$4.00",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Butchers-Paper-12-1-2.jpg",
      title: "Butcher's Paper",
      text: "$15 x 100",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/stock-photo-courier-air-cap-bubble-wrap-and-scissors-528656098-468x520.jpg",
      title: "Bubble Wrap",
      text: "$4",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/171583698-468x520.jpg",
      title: "Mattress Cover",
      text: "$7",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Packaging-Tape1-468x520.jpg",
      title: "Packaging Tape",
      text: "$4.50",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/paddlock-468x520.jpg",
      title: "Padlock",
      text: "$15",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Port-A-Robe-468x520.jpg",
      title: "Port-A-Robe",
      text: "$16",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Marker-Pen1-468x520.jpg",
      title: "Marker Pens",
      text: "$4",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/Tea-Chest-box-4-1-468x520.jpg",
      title: "Tea Chest Box",
      text: "$4",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/wine-units-468x520.jpg",
      title: "Wine Units",
      text: "Inquiry",
    },
  ];

  //Function to render cards using index as unique key
  const renderProduct = (product, index) => {
    return (
      <Col lg={3} md={6} sm={12}>
        <Card key={index} className="product-card">
          <Card.Img src={product.image} />
          <Card.Body>
            <Card.Title>
              <Link to="/product/:id">{product.title}</Link>
            </Card.Title>
            <Card.Text>{product.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  // Mapping to a grid by passing in renderProduct function
  return (
    <Container>
      <h1 className="page-name py-3 pb-4" >Products</h1>
      <Row>{products.map(renderProduct)}</Row>
    </Container>
  );
};

export default ProductsPage;
