import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faHashnode,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light" id="footer">
      <Container>
        <Row>
          {/* Social Icons on the Left */}
          <Col md={3} className="mb-3">
          <h4>Socials</h4>
          <div className="social-icon d-flex mt-2 mb-3 mb-md-0 mt-md-0">
                <div className='footer-social'><a href="https://www.linkedin.com/in/kamiya-gaikwad/" target="_blank"><img src={navIcon1} alt="linkedin" /></a><span>Linkedin</span></div>
                <div className='footer-social'><a href="mailto:kamitarg88@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="gmail-icon"/></a><span>Gmail</span></div>
                <div className='footer-social'><a href="https://github.com/KamiyaGaikwad/" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/></a><span>Github</span></div>
                <div className='footer-social'><a href="https://kamiya.hashnode.dev/" target="_blank"><FontAwesomeIcon icon={faHashnode} className="github-icon"/></a><span>Hashnode</span></div>
                <div className='footer-social'><a href="https://twitter.com/Kamiya_Gaikwad" target="_blank"><FontAwesomeIcon icon={faXTwitter} className="github-icon" /></a><span>Twitter</span></div>
                <div className='footer-social'><a href="/path/to/your/resume/your_resume.pdf" download="your_resume.pdf"><FontAwesomeIcon icon={faFile} className="resume-icon" /></a><span>Resume</span></div>
              </div>
          </Col>

          {/* Contact Form in the Center */}
          <Col md={6} className="mb-3">
              <h4>Contact Form</h4>
            <Form>
              <Form.Group controlId="formName" className='input-div'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className='input-div'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className='input-div'>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
          <Row className='copyright'>
          <Col md={3}>
            <h5>Made with <span className="text-danger">&hearts;</span> by Kamiya</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

