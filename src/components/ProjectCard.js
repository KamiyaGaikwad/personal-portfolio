import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

export const Pill = ({lang}) =>{
    let langClass = lang.toLowerCase() + "-badge"; 
    return(
        <h4>
          <Badge pill id={langClass}>
            {lang}
          </Badge>
        </h4>
    )
}

export const ProjectCard = ({id,projectTitle, languages, wakatimeSvgLink, description, demoLink, codeLink, image}) =>{
  const isEven = id % 2 === 0;
  const orderClass = isEven ? "content-according-to-order-1" : "content-according-to-order-2";
  const badgesClass = isEven ? "badges content-according-to-order-1" : "badges content-according-to-order-2";
    return(
        <Container fluid className="project-card" key={id}>
        <Row>
          <Col lg={{ span: 4, order: isEven ? 2 : 1 }} className="d-flex align-items-center">
            <img className="project-img" src={image} alt={projectTitle} style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%', aspectRatio: '10 / 7' }} />
          </Col>
          <Col lg={{ span: 4, order: isEven ? 1 : 2 }} className={`text-lg-left ${orderClass}`}>
            <h3 className={orderClass}>{id}. {projectTitle}</h3>
            <div className={badgesClass}>
              {languages.map((lang)=><Pill lang={lang} />)}
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