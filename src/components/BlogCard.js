import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const BlogCard = ({data,index,len}) =>{
    const isEven = (len-index) % 2 === 0;
    const orderClass = isEven ? "content-according-to-order-1" : "content-according-to-order-2";

      return(
          <Container fluid className="project-card" key={len-index}>
          <Row>
            <Col lg={{ span: 4, order: isEven ? 2 : 1 }} className="d-flex align-items-center">
              <img className="project-img" src={data.coverImage.url} alt={data.title} style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%', aspectRatio: '10 / 7' }} />
            </Col>
            <Col lg={{ span: 4, order: isEven ? 1 : 2 }} className={`text-lg-left ${orderClass}`}>
              <h3 className={orderClass}>{len-index}. {data.title}</h3>
              <p className={orderClass}>{data.subtitle}</p>
              <div className={`project-buttons ${orderClass}`}>
                <Button variant="outline-light" size="lg" href={data.url} target="_blank">
                 Read More
                </Button>
              </div>
            </Col>
            <Col lg={{ span: isEven ? 1:3 }} md={{ span: 0 }}></Col>
          </Row>
          </Container>
      )
  }