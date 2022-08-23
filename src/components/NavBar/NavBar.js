import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import './NavBar.css'
function NavBar() {
  const style={
    postion:'fixed'
  }
  return (
    <header styles={style}>
    <Navbar bg="light" expand="lg" className='justify-content-between'  >
      <Container >
        <Navbar.Brand href="#home">KITCHEN WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBar