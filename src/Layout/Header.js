import React from 'react'
import { Navbar,Nav,Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css';


export default function Header() {

    return (
 <>

<Navbar className='bg-light1' expand="lg">
  <Container fluid>
  <Row className='w-full'>
    <Col xs={6} lg={4}><Navbar.Brand href="#"><img  style={{maxWidth: '170px'}} src="../../img/logo.png" /></Navbar.Brand></Col>
    <Col xs={6} lg={8}>    
    <Navbar.Toggle aria-controls="navbarScroll" />
    
    <Navbar.Collapse id="navbarScroll">
    
   <Nav
        className="mr-auto my-2 my-lg-0 navbar-menu"
        navbarScroll>
          
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about_Page">About us</Nav.Link>
        <Nav.Link as={Link} to="/product_Page">Products</Nav.Link>
       
         <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
       
      </Nav>
     
    </Navbar.Collapse>
    
    </Col>

  </Row>
  


  </Container>

</Navbar>


</>
    )

}