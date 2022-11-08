import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import 'animate.css';

import { Col, Row } from 'react-bootstrap';

function NAVBAR({ name, ...props }) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 


  return (
    <Navbar collapseOnSelect className='py-4 nav-cus `App ${wall}`' sticky='top' expand="lg" >
      <Container>
        <Navbar.Brand className='titleName' href="#home">Ali.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className='ms-auto'>
            <Nav.Link className='na-link mx-2 active' href="#home">Home</Nav.Link>
            <Nav.Link href="#about" className='na-link mx-2'>About Me</Nav.Link>
            <Nav.Link href="#contact" className='na-link mx-2'>Contact me</Nav.Link>
            <Nav.Link className='na-link mx-2' > Works</Nav.Link>

          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link className='na-link-o cta' onClick={handleShow} ><span>Let's Talk</span><svg viewBox="0 0 13 10" height="10px" width="15px"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg></Nav.Link>
                <Offcanvas show={show} className='dark-bg' onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Socials</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='canva-bod'>
                            <div className='upw icon-side mx-3 my-3 animate__bounceInLeft animate__animated '>
                                <a href='#' className='bta'><i className='fa fa-globe'></i> <span className="hover-underline-animation"> Upwork Profile</span></a>
                            </div>
                            <div className='gith icon-side mx-3 my-3 animate__bounceInLeft animate__animated delayy' >
                                <a href='#' className='bta'><i className='fa fa-github'></i> <span className="hover-underline-animation">github Profile</span></a>
                            </div>
                            <div className='linkedin icon-side mx-3 my-3 animate__bounceInLeft animate__animated delayy1'>
                                <a href='#' className='bta'><i className='fa fa-linkedin'></i> <span className="hover-underline-animation">Linkedin Profile</span></a>
                            </div>
                            <div className='fiv icon-side mx-3 my-3 animate__bounceInLeft animate__animated delayy2'>
                                <a href='#' className='bta'><i className='fa fa-code'></i> <span className="hover-underline-animation">Fiverr Profile</span></a>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NAVBAR;