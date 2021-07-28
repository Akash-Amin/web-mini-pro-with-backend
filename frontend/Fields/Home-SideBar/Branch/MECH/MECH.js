
import "../ECE/ECE.css"
import img4 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img1 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import imgA from "./img9.jpg";
import imgB from "./img10.jpg";
import imgC from "./img11.jpg";
import imgD from "./img12.jpg";
import img9 from "../ECE/smvitmlogo.png";

function MECH() {
  
 return (

    <div className="Main">

      {/* *****____________________________________HEADDER__________________________________________***** */}

      <div className="Header">
       <ul><b>MECHANICAL</b></ul>
     </div>
      
      {/* *****____________________________________IMAGE SLIDER__________________________________________***** */}

     <div className="Slider">

        <div className="Slides">
  
         <input type="radio" name="radio-btn" id="radio1"></input>
         <input type="radio" name="radio-btn" id="radio2"></input>
         <input type="radio" name="radio-btn" id="radio3"></input>
         <input type="radio" name="radio-btn" id="radio4"></input>
         <input type="radio" name="radio-btn" id="radio5"></input>
         <input type="radio" name="radio-btn" id="radio6"></input>
         <input type="radio" name="radio-btn" id="radio7"></input>
         <input type="radio" name="radio-btn" id="radio8"></input>

          <div className="slide first">
            <img src={img1} alt=""></img>
          </div>
          <div className="slide">
            <img src={img2} alt=""></img>
          </div>
          <div className="slide">
            <img src={img3} alt=""></img>
          </div>
          <div className="slide">
            <img src={img4} alt=""></img>
          </div>
          <div className="slide">
            <img src={img5} alt=""></img>
          </div>
          <div className="slide">
            <img src={img6} alt=""></img>
          </div>
          <div className="slide">
            <img src={img7} alt=""></img>
          </div>
          <div className="slide">
            <img src={img8} alt=""></img>
          </div>
       </div>
       <div className="man-nav">
         <label htmlFor="radio1" className="man-btn"></label>
         <label htmlFor="radio2" className="man-btn"></label>
         <label htmlFor="radio3" className="man-btn"></label>
         <label htmlFor="radio4" className="man-btn"></label>
         <label htmlFor="radio5" className="man-btn"></label>
         <label htmlFor="radio6" className="man-btn"></label>
         <label htmlFor="radio7" className="man-btn"></label>
         <label htmlFor="radio8" className="man-btn"></label>
       </div>
     </div>

      {/* *****____________________________________Count CARD__________________________________________***** */}

      <div className="photo">

        <input type="radio" defaultChecked name="active" id="tab1"></input>
        <input type="radio" defaultChecked name="active" id="tab2"></input>
        <input type="radio" defaultChecked name="active" id="tab3"></input>
        <input type="radio" defaultChecked name="active" id="tab4"></input>

       <div className="choose">
         <label htmlFor="tab1"><img src={imgA} alt=""></img></label>
         <label htmlFor="tab2"><img src={imgB} alt=""></img></label>
         <label htmlFor="tab3"><img src={imgC} alt=""></img></label>
         <label htmlFor="tab4"><img src={imgD} alt=""></img></label>
       </div>

       <div className="imcard">
         <img src={imgA} alt=""></img>
         <img src={imgB} alt=""></img>
         <img src={imgC} alt=""></img>
         <img src={imgD} alt=""></img>
       </div>
     </div>

      {/* *****____________________________________INFO CARD__________________________________________***** */}

      <div className="content">
        
       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
           <h1>About Department:</h1>
           <br></br>
           <br></br>
           <p>
	The Department of Mechanical Engineering at SMVITM started functioning in the year 2010. The Department offers an undergraduate program in mechanical , engineering that covers a wide range of�topics in the ?eld of mechanical engineering such as thermal and ?uid�sciences, engineering design,� dynamics and control, materials, manufacturing, modelling and�simulation as per the VTU curriculum to suit the interests of students and meet the industry requirements.
 
 
	The student intake capacity of the Department is 120. Teaching and learning activities at the Department are designed in such a way as to stimulate intellectual , curiosity, creativity and innovation in students. The Department has a well quali?ed and experienced team of faculty members who have their specializations in the different branches/areas of mechanical engineering. The highly committed faculty with their innovative ideas guides the students with their projects and industry assignments. The efforts of faculty, well experienced supporting staff, enabling learning environment and availability of modern facilities are re?ected in the excellent performance of the students. Efforts are underway to set up a Research & Development centre to initiate the research activities at the Department.
 
 
	The Department frequently conducts theoretical and practical technical sessions, industrial visits for the bene?t of the students and faculty under the ISTE Students and Faculty Chapters. These Chapters are actively involved in conducting technical talks and guest lecturers by eminent personalities from the industry and academicians from reputed institutes like IISc., IITs and NITs.The Student Chapter is active in organizing career guidance programs, student talent search programs, seminars, workshops, etc. as co-curricular activities throughout the semesters.
 
</p>
      </div>
       </div>

       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
         <br></br>
           <h1>VISION :</h1>
           <br></br>
           <br></br>
           <p>To become a center of excellence in Mechanical Engineering and contribute to technological and socio-economic developments   </p></div>
       </div>

       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
         <br></br>
           <h1>MISSION :</h1>
           <br></br>
           <br></br>
           <p>	To develop the professional potential of faculty, staff and students by providing state of the art facilities. To impart quality engineering education in Mechanical engineering to provide basic and specialized engineering training to meet the current and emerging needs of the society. To prepare the students for successful engineering career by inculcating the leadership qualities to encourage entrepreneurship, professional and ethical responsibilities. To promote collaboration with industries/institutes for academic, research and consultancy. 
</p></div>
       </div>

       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
           <h1>Message from HOD:</h1>
           <br></br>
           <br></br>
           <p>	Welcome to the Department of Mechanical Engineering at SMVITM.
 
 
 The� Department� of Mechanical Engineering was established in the year 2010, inaugurated by Former Indian President Bharat Ratna Dr.A P J Abdul Kalam. The department is a VTU recognized research center.�


 Mechanical engineers have an important role to play in practically every industry; be it automotive, aerospace, chemical, electronics, medical or any product development; mechanical engineers contribute to it substantially. Mechanical engineers deal with thermal and ?uid science, material science, design, manufacturing and maintenance of products, systems and processes over entire product life cycle. In todays� world, role of mechanical engineer has expanded from conventional design and manufacturing job to offering solutions to complex interdisciplinary problems.


 Our Department has a distinguished record in both teaching and research. Our faculty and staff are committed to incorporating new developments in engineering and related emerging ?elds into our program. With excellent preparation in the fundamentals of mechanical engineering, strong academic standards and proper guidance from dedicated academic advisors, you will be well positioned to take full advantage of the opportunities available in today�s rapidly expanding and emerging technology sector and enjoy a fascinating and rewarding career.�


 I welcome you to Mechanical Engineering and be a part of quality education and contribute towards nation building.�

</p>    </div>
       </div>

      </div>

    </div>
  );
}

export default MECH;