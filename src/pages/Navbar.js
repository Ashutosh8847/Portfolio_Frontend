import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ashuImage from '../Image/Ashutosh.jpg'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css'
import { useState } from 'react';
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);


  return (
    <div className='navbarContainer'>
      <Navbar expand="lg">
        <Container className='ms-auto'>
          <Navbar.Brand as={Link} to="/#overview"style={{ fontWeight: "bold" }}><img src={ashuImage} style={{ maxHeight: "40px", borderRadius: "50%" }} alt='AshuImage' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontWeight: "bold" }}>
              <Nav.Link as={Link} to="/#overview">Overview</Nav.Link>
              <Nav.Link as={Link} to="/#experience">Experience</Nav.Link>
              <Nav.Link as={Link} to="/#skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/#project">Project</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar
