import React from 'react'
import smvitm from './smvitm.jpg'
import './HomeSideBar.css'
import logo from './smvitmlogo.png'



const MainHome = (props) => {
  return(
    <div id="home-all-pic-id">
        <img src={smvitm} className="home-image-class-name" />
        <img src={logo} className="home-logo-class-name" />
    </div>
   )

 }

export default MainHome;