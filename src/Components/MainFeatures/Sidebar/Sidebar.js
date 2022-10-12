import React, { useState } from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBContainer,CDBSelect

} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faNavicon , faArrowDown, faAngleDown, faPercentage} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
     const [option] = useState([
          {
            text: "Select Option",
            icon:"stack-overflow",
          },
          {
            text: "Another Option",
            icon:"reddit",
          },
          {
            text: "Option 3",
            icon:"instagram",
          },
          {
            text: "Option 4",
          },
          {
            text: "Last Option",
          },
        ]);
  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial'}}
    >
      <CDBSidebar className=" sidebar" textColor="black" backgroundColor="white" border = "1px solid black"
        borderRadius= "10px"
        boxShadow= "5px 5px 10px lightgray"
     
    >
     

        <CDBSidebarContent className="  sidebar-content">
          <CDBSidebarMenu>
           
          <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="table" style={{fontSize: "12px"}}>Laptop & Desktop</CDBSidebarMenuItem>
              <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>
   

   
    

            <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="home" style={{fontSize: "12px"}}>Home Living</CDBSidebarMenuItem>
            <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>


     
            <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="book" style={{fontSize: "12px"}}>Book & Stationary</CDBSidebarMenuItem>
            <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>

            <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="home" style={{fontSize: "12px"}}>Home Appliance</CDBSidebarMenuItem>
            <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>

            <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="phone" style={{fontSize: "12px"}}>Elecctronic & Appliance</CDBSidebarMenuItem>
            <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>

            <NavLink exact to="/lock" activeClassName="activeClicked">
            <div  className="d-flex">
            <CDBSidebarMenuItem icon="table" style={{fontSize: "12px"}}>Fast Food & Snacks</CDBSidebarMenuItem>
            <FontAwesomeIcon style={{fontSize: '14px', backgroundColor: "" , marginTop: '27px', marginLeft: "auto"}} icon={faAngleDown} /> 

            </div>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
        

  
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;