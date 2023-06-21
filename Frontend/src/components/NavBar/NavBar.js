import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from './../../logo copy.svg';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    const Navigate = useNavigate();

  return (
    <>
     <div className='headerParentDiv'>
      <div className='headerChildDiv'>
          <span className='sony-logo'>.</span>
      </div>
    </div>

    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container fluid>
      <img className='logo' src={logoImage} alt="Logo"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">Games</Nav.Link><NavDropdown/>
            <Nav.Link href="#action2">Hardware</Nav.Link><NavDropdown/>
            <Nav.Link href="#action2">Services</Nav.Link><NavDropdown/>
            <Nav.Link href="#action2">News</Nav.Link><NavDropdown/>
            <Nav.Link href="#action2">Shop</Nav.Link><NavDropdown/>
            <Nav.Link href="#action2">Support</Nav.Link><NavDropdown/>
          </Nav>
            <Button variant="outline-primary" size='md' className='me-4' onClick={()=> {Navigate('/signup')}}>Signin</Button>
            <Button variant="outline-success" size='md'>Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;