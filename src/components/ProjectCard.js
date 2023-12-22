import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

export const ProjectCard = ({id,projectTitle, languages, wakatimeSvgLink, description, demoLink, codeLink, image}) =>{
  const isEven = id % 2 === 0;
  const orderClass = isEven ? "content-according-to-order-1" : "content-according-to-order-2";
  const badgesClass = isEven ? "badges content-according-to-order-1" : "badges content-according-to-order-2";
    return(
        <Container fluid className="project-card" key={id}>
        <Row>
          <Col lg={{ span: 4, order: isEven ? 2 : 1 }} className="d-flex align-items-center">
            <img className="project-img" src={image} alt={projectTitle} />
          </Col>
          <Col lg={{ span: 4, order: isEven ? 1 : 2 }} className={`text-lg-left ${orderClass}`}>
            <h3 className={orderClass}>{id}. {projectTitle}</h3>
            <div className={badgesClass}>
              <h4>
                <Badge pill id="react-badge">
                  React
                </Badge>
              </h4>
              <h4>
                <Badge id="html-badge" pill>
                  HTML
                </Badge>
              </h4>
            </div>
            <div className="wakatime">
              <img
                src={wakatimeSvgLink}
                alt="wakatime"
              />
            </div>
            <p className={orderClass}>{description}</p>
            <div className={`project-buttons ${orderClass}`}>
              <Button variant="outline-light" size="lg" href={demoLink}>
               Demo
              </Button>
              <Button variant="outline-light" size="lg" href={codeLink}>
                Code
              </Button>
            </div>
          </Col>
          <Col lg={{ span: isEven ? 1:3 }} md={{ span: 0 }}></Col>
        </Row>
        </Container>
    )
}