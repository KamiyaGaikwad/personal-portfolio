import React,{ useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {

  // const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // }

  const scrollToFooter = () => {
    // Scroll to the element with the id "footer"
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }}
  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
            <h2 style={{color:"white"}}>PORTFOLIO</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
              <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
              <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
              <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
              <Nav.Link href="#blogs" className='navbar-link'>Blogs</Nav.Link>
            </Nav>
            <span className="navbar-text d-flex flex-column flex-md-row">
              <div className="social-icon d-flex mt-2 mb-3 mb-md-0 mt-md-0">
                <a href="https://www.linkedin.com/in/kamiya-gaikwad/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                <a href="mailto:kamitarg88@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="gmail-icon"/></a>
                <a href="https://github.com/KamiyaGaikwad/" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/></a>
              </div>
              {/* <HashLink to='#connect'> */}
                <button className="vvd" onClick={scrollToFooter}><span>Let's Connect</span></button>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}