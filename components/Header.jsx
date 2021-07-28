import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import './Header.css'
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
//import smvitm from '../../../src/smvitmlogo.png'

const Header=()=>
{
  const[navbar,setnavbar]=useState(false)

  const shownavbar=()=>setnavbar(!navbar)
    return(
        <>
        <div className="Header-main">
        <body>
     
        <nav className= "header-path-body-nav-bar-class-name">
        <label className="smvitm-class-name">SMVITM</label>
        <label id='list-icon-id'><ReorderRoundedIcon onClick={shownavbar} className="list-icon-class-name"/></label>
        <ul className={navbar?"nav-bar-off":"header-path-body-nav-ul-class-name"}>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to="/" onClick={shownavbar}>HOME</NavLink> </li>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to="studymaterials" onClick={shownavbar}>STUDY MATERIALS</NavLink> </li>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name" to="aboutus" onClick={shownavbar}>ABOUT US</NavLink> </li>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to='/events'  onClick={shownavbar}>EVENTS</NavLink> </li>
       
          </ul>
        </nav>  
        
        </body>
        </div>


        </>
    );
};

export default Header;


/*
 to="/StudyMaterials"
  to="/AboutUs"
  */
 {/* <li><img src={smvitm} className={navbar?"nav-bar-off-logo":"header-path-body-nav-ul-class-name-logo"} /></li> */}
      
   {/* <label id='list-icon-id'><ReorderRoundedIcon onClick={shownavbar} className="list-icon-class-name"/></label>*/}
        
   /*import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <AppBar>
      <Toolbar>
        
        <Typography>about</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGIN</Typography>
          
        <Link to='/events' ><Typography>EVENTS</Typography></Link>
      </Toolbar>
    </AppBar>
   )

 }

export default Header; 
*/
