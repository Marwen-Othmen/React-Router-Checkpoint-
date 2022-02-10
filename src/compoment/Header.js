import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating'

function Header({filterMovie}) {
  const [searchText, setsearch] = useState();
    const [rating, setrating] = useState();
  
  return <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <LinkContainer to="/" >
        <Nav.Link href="#home"> Home </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Add" >
        <Nav.Link href="ADD">  ADD Link </Nav.Link>
        </LinkContainer>
        <NavDropdown title="Autre" id="navbarScrollingDropdown">
        <LinkContainer to="/Add" >
          <NavDropdown.Item href="#action3">ADD </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/" >
          <NavDropdown.Item href="#action4"> Home</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
            <Rating onClick={(rate)=>setrating(rate/20)} />
            <FormControl
                type="search"
                placeholder="Search" 
                className="me-2"
                aria-label="Search"
                onChange={(e)=>setsearch(e.target.value)}
        />
        <Button onClick={()=>filterMovie(searchText,rating)} variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


  </div>;
};

export default Header;
