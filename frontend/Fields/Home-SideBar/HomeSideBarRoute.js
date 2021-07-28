import React,{useState} from "react";
import {Link,NavLink} from "react-router-dom";
import { HomeSideBarData } from "./HomeSideBarData";
import ListIcon from '@material-ui/icons/List';
import './HomeSideBar.css';
import ClearIcon from '@material-ui/icons/Clear';
import MainHome from "./MainHome";
import logo from './smvitmlogo.png'

const HomeSideBarRoute=()=>
{
    const[sidebar,setSideBar]=useState(false);
    const showsidebar=()=>setSideBar(!sidebar);
    
    return(
        
    <>
      <img src={logo} className="home-logo-class-name" />
      
    <div className="app">  
     <div className="navbar">
            <Link to="#" className="menu-bars">
            <ListIcon onClick={showsidebar} className='list-icon'/> 
            </Link>
           

        </div>
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
        <ul className='nav-menu-items' onClick={showsidebar}>
        <li ><ClearIcon className="clear-icon" onClick={showsidebar}/></li>
        {HomeSideBarData.map((item,index)=>{
                   return (<div>
                        <li activeClassName={item.cName}>
                            <NavLink exact to={item.path}>
                              {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                        </div>
                   );
        })}
        </ul></nav>  </div>  
        
    </>
    )
    
};

export default HomeSideBarRoute;