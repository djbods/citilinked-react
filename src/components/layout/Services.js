import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const Services = () => {
  const servicesInfo = [
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/service_img_01-370x370.jpg",
      title: "Self Storage Melbourne",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima eveniet aliquam maiores autem soluta porro possimus voluptate laboriosam enim.",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/service_img_04-370x370.jpg",
      title: "Storage Boxes",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima eveniet aliquam maiores autem soluta porro possimus voluptate laboriosam enim.",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/service_img_02-370x370.jpg",
      title: "Storage Units",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima eveniet aliquam maiores autem soluta porro possimus voluptate laboriosam enim.",
    },
    {
      image:
        "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/10/service_img_03-370x370.jpg",
      title: "Wine Storage",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima eveniet aliquam maiores autem soluta porro possimus voluptate laboriosam enim.",
    },
  ];

  // Function to render services using index as unique key
  const renderService = (service, index) => {
    return (
      <Col lg={3} md={6} sm={12} key={index}>
        <Image className="" src={service.image} roundedCircle />
        <h4 className="py-4">{service.title}</h4>
        <p className="lead">{service.text}</p>
      </Col>
    );
  };
  // Mapping to a grid by passing in renderService function
  return (
    <Container className="home-services py-3">
      <h1 className="page-name pb-5" >Services</h1>
      
      <Row>{servicesInfo.map(renderService)}</Row>
    </Container>
  );
};

export default Services;
