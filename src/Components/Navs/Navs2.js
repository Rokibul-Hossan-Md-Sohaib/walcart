import React from 'react';
import './Navs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faNavicon , faArrowDown, faAngleDown, faPercentage} from '@fortawesome/free-solid-svg-icons'
// import logo from '../../image/logo.jpg'
import { Button,Container ,Navbar,NavDropdown,Nav,Form, FormControl,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navs2 = () => {
    return (
 
             <Navbar className="bar" expand="lg" sticky="top"   > 
    
  <Container>

     <Navbar.Brand  className='text-white topCategory'  href="#home">
     <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "" , marginTop: '10px', marginRight: "10px"}} icon={faNavicon} /> 

        Top Category
       {/* <img className="logo" src={logo} alt="" /> */}
       <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "" , marginTop: '10px', marginLeft: "10px"}} icon={faArrowDown} /> 

     </Navbar.Brand>
  
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto  my-3 links " >
 
        <Nav.Link href="#home" className="properties text-white " >
         <Link to ="/" className="text-decoration-none text-white">
          Exclusive Deals
          </Link>
          <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "" , marginLeft: "10px"}} icon={faAngleDown} /> 

          </Nav.Link>

          <Nav.Link href="#home" className="properties text-white " >
         <Link to ="/" className="text-decoration-none text-white">
          Smaert Watches
          </Link>
          <FontAwesomeIcon style={{fontSize: '20px', backgroundColor: "" , marginLeft: "10px"}} icon={faAngleDown} /> 

          </Nav.Link>
       
        <Nav.Link href="#home" className="properties  ">
        <Link to ="/" className="text-decoration-none text-white">
         Cell Phone
          </Link>
          </Nav.Link>

          <Nav.Link href="#home" className="properties  ">
        <Link to ="/" className="text-decoration-none text-white">
         Head Phone
          </Link>
          </Nav.Link>
  
      </Nav>
     
      <Nav.Link href="#home" className="properties text-white d-flex" >

         <Link to ="/" className="text-decoration-none text-white ml-3">
          <small className='text-secondary'>only this weekend</small>
          <h6 className='text-danger'>Super Discount</h6>
          </Link>

          </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar> 

    );
};

export default Navs2;