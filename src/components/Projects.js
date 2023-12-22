import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import chibikart from "../assets/img/chibikart.png";

export const Projects = () => {
  const isEven = 12 % 2 === 0;
  const isEven1 = 13 % 2 === 0;
  const orderClass = isEven ? "content-according-to-order-1" : "content-according-to-order-2";
  const badgesClass = isEven ? "badges content-according-to-order-1" : "badges content-according-to-order-2";
  const orderClass1 = isEven1 ? "content-according-to-order-1" : "content-according-to-order-2";
  const badgesClass1 = isEven1 ? "badges content-according-to-order-1" : "badges content-according-to-order-2";
  return (
    <div className="projects">
      <div className="heading">
        <div className="image">
          <img src={cat1} alt="cat" />
        </div>
        <h2>Projects</h2>
      </div>
      <Container fluid className="project-card">
        <Row>
          <Col lg={{ span: 4, order: isEven ? 2 : 1 }} className="d-flex align-items-center">
            <img className="project-img" src={chibikart} alt="chibikart" />
          </Col>
          <Col lg={{ span: 4, order: isEven ? 1 : 2 }} className={`text-lg-left ${orderClass}`}>
            <h3 className={orderClass}>15.ChibiKart</h3>
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
                src="https://wakatime.com/badge/user/96974b03-e435-4d4d-89a2-486553721b5a/project/ed1f4ba3-4773-438a-9b35-11f06afe9a84.svg"
                alt="wakatime"
              />
            </div>
            <p className={orderClass}>iufhr f r8hf8yr3h fr yfgyrgyr eiu</p>
            <div className={`project-buttons ${orderClass}`}>
              <Button variant="outline-light" size="lg">
                Demo
              </Button>
              <Button variant="outline-light" size="lg">
                Code
              </Button>
            </div>
          </Col>
          <Col lg={{ span: isEven ? 1:3 }} md={{ span: 0 }}></Col>
        </Row>
      </Container>
      <Container fluid className="project-card">
        <Row>
          <Col lg={{ span: 4, order: isEven1 ? 2 : 1 }} className="d-flex align-items-center">
            <img className="project-img" src={chibikart} alt="chibikart" />
          </Col>
          <Col lg={{ span: 4, order: isEven1 ? 1 : 2 }} className={`text-lg-left ${orderClass1}`}>
            <h3 className={orderClass1}>15.ChibiKart</h3>
            <div className={badgesClass1}>
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
                src="https://wakatime.com/badge/user/96974b03-e435-4d4d-89a2-486553721b5a/project/ed1f4ba3-4773-438a-9b35-11f06afe9a84.svg"
                alt="wakatime"
              />
            </div>
            <p className={orderClass1}>iufhr f r8hf8yr3h fr yfgyrgyr eiu</p>
            <div className={`project-buttons ${orderClass1}`}>
              <Button variant="outline-light" size="lg">
                Demo
              </Button>
              <Button variant="outline-light" size="lg">
                Code
              </Button>
            </div>
          </Col>
          <Col lg={{ span: 3 }} md={{ span: 0 }}></Col>
        </Row>
      </Container>
    </div>
  );
};