import React from "react";
import  "./AboutUs.css";
import swamiji from "./swamiji.png"
import pic1 from "./highschool.jpg"
import pic2 from "./Screenshot (8).png"
import pic3 from "./Screenshot (9).png"
import pic4 from "./Screenshot (12).png"
import pic5 from "./Screenshot (13).png"
import pic6 from "./b.jpg"
import pic7 from "./c.jpg"
import pic8 from "./d.jpg"


const AboutUs=()=>{
    return (<>
    <div id="AboutUs-scroll-bar1"></div>
    
    <div id="AboutUs-scroll-bar2"></div>
    <div>
    <div className="aboutus-main">
        <div className="aboutus-container">
          <div className="aboutus-left">
          <img src={swamiji} className="aboutus-img"/>
          </div>
         <div className="aboutus-right">
           <div className="aboutus-content">  
             <h1>HH Shri Vishwavallabha Theertha Swamiji</h1>
             <p className="about-first-para">Founder and President, <br></br> Shri Madhwa Wadiraja Institute Of Technology & Management</p>
           </div>
         </div>
        </div>

       

        <div className="line-container">
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic1} className="line-img1"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h2 className="line-title" >SVS SCHOOL</h2>
              
              <hr/>
              <br/>

              <article className="aboutus-img-data">SVS group of school located at Innanje and offer education from Nursery to 7th standard.</article> 
          </div>
        </div>
        </div>
       

        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic2} className="line-img2"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >SVH PU COLLEGE</h3>
              
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SVH PUC also located at Innanje and provides high quality education in both Commerce and Science</article> 
          </div>
        </div>
        </div>

        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic3} className="line-img3"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >SVH HIGH SCHOOL </h3>
              
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SVH English Medium High School provides quality education from 7th to 10th standard.</article> 
          </div>
        </div>
        
        </div>

        
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic4} className="line-img4"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >ADMISSION </h3>
              <br/>
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SMVITM provides Under Graduate Courses in Engineering and also provides Doctor Of Philosophy.</article> 
          </div>
        </div>
        
        </div>
        
        
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic5} className="line-img5"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >COURSES </h3>
              <br/>
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SMVITM provides UG courses at CIVIL,ECE,CS and MECHANICAL.</article> 
          </div>
        </div>
        
        </div>
        
        
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic6} className="line-img6"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >CAFETERIA </h3>
              <br/>
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SMVITM have good canteen facility with average quality and variety(only veg).</article> 
          </div>
        </div>
        
        </div>
        
        
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic7} className="line-img7"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >LIBRARY </h3>
              <br/>
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SMVITM have one central library whith huge amount of Books,Magazines and other facility.</article> 
          </div>
        </div>
        
        </div>
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={pic8} className="line-img8"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
              <h3 className="line-title" >NAAC GRADE </h3>
              <br/>
              <hr/>
              <br/>

              <article  className="aboutus-img-data">SMVITM awarded with NAAC A grade for its excellent quality education and facility provided within campus.</article> 
          </div>
        
        </div>
        </div>

        </div>
        </div>
        </div>
        </>
    );
};

export default AboutUs;