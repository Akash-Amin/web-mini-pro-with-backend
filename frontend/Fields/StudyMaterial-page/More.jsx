import React from "react";
import './StudyMaterials.css'
import dc1 from "./dc1.jpg"
import {Link} from "react-router-dom";

const More=()=>{
    return(<> 
 
    <div className="sm-main">
    <div>
    <div className='title'>
    <label >DIGITAL COMMUNICATION</label>
    </div>
    <div className='more-main-div'>
    <img src={dc1} className='image'/>
    <div className="more-text-box">
    <h2 className="dc-main-head">WHY DIGITAL COMMUNICATION?</h2>
    
    <p className="dc-paragraph">The effect of distortion, noise, and interference is much less in digital signals as they are less affected. Digital circuits are more reliable, The configuring process of digital signals is easier than analog signals. Digital signals can be saved and retrieved more conveniently than analog signals.</p>
    <h2 className="dc-main-head">COURSE OUTCOME</h2>
    <p className="dc-paragraph">CO2: Apply the knowledge of signals and system and evaluate the performance of digital system in the presence of noise. <br></br>CO3: Apply the knowledge of digital electronics and describe the error control codes like block code, cyclic code.</p>
    </div>
    </div>

    <div className='title'>
    <label >CHAPTER 1</label>
    <Link exact id="more-icon"  to="/quiz" >Quiz</Link>
    </div>
    {/*
    <div className="title">
    <h2 >CHAPTER 1</h2>
    <NavLink id="more-icon" exact  to="/More" >MORE</NavLink>
    </div> */}

    <div className='more-container'>

    
    
    <iframe className="video video1"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/sdqL1_hBMpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video video1"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/sdqL1_hBMpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    
    </div>

    
   {/*} <h2 className="dc-head">CHAPTER 2</h2>*/}

    
    <div className='title'>
    <label >CHAPTER 2</label>
    <Link  id="more-icon" exact  to="/quiz" >Quiz</Link>
    </div>

    <div className='more-container'>
    
    
    <iframe className="video video1"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/sdqL1_hBMpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video video1"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="video"  src="https://www.youtube.com/embed/sdqL1_hBMpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    </div>
    </div>
    </>);
};

export default More;