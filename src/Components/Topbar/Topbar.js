import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
const Topbar = () => {
    return (
        <div className='bar'>
                <Container className="topbar " >
      <ul className="topbar-ul d-flex"  style={{
        listStyleType: "none",
        // margin: 0,
        // padding: 0
      }}>
        
      <li className=" text-secondary " >About Us |</li>

      <li className=" text-secondary" >My Account |</li>

      <li className=" text-secondary" >Featured Products |</li>

      <li className=" text-secondary "  >Contact |</li>
      <li className=" text-secondary " style={{marginLeft : "auto"}} >Ordeer Tracking |</li>
      <li className=" text-secondary "  >English |</li>
      <li className=" text-secondary "  >USD |</li>






</ul>

</Container>

        </div>
    );
};

export default Topbar;