import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = ()=>{
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/AllProducts">Album</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AllProducts">Show Album</Nav.Link>
            <Nav.Link href="/AddProduct">Add Album</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu; 