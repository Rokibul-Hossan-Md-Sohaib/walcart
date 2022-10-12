import React from 'react';
import './Navs.css'
// import logo from '../../image/logo.jpg'
import { Button,Container ,Navbar,NavDropdown,Nav,Form, FormControl,Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart , faShoppingCart, faClock, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navs = () => {
    return (
 
             <Navbar className="bar" expand="lg" sticky="top"   > 
    
  <Container>

     <Navbar.Brand  className='text-white'  href="#home">
        WALCART
       {/* <img className="logo" src={logo} alt="" /> */}
     </Navbar.Brand>
  
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto ms-auto my-3 links " >
     <Form className="d-flex ms-auto">
         <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
          
        <Button className="btn btn-danger">Search</Button>
      </Form>
        <Nav.Link href="#home" className="properties text-white " >
         <Link to ="/" className="text-decoration-none text-white">
         <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "#031424" , marginTop: '10px', marginRight: "10px"}} icon={faUser} /> 
          Sign In
        
          </Link>
          </Nav.Link>
          <Nav.Link href="#home" className="properties text-white " >
         <Link to ="/" className="text-decoration-none text-white">
         <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "#031424" , marginTop: '10px', marginRight: "10px"}} icon={faHeart} />        
          </Link>
          </Nav.Link>

    

       
        <Nav.Link href="#home" className="properties  ">
        <Link to ="/contact" className="text-decoration-none text-white">
        <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "#031424" , marginTop: '10px', marginRight: "10px"}} icon={faShoppingCart} />        

    
          </Link>
          </Nav.Link>
  
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar> 

    );
};

export default Navs;