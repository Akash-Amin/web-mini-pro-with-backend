
import "../ECE/ECE.css"
import img1 from "./img2.jpg";
import img2 from "./img1.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import imgA from "./img9.jpg";
import imgB from "./img10.jpg";
import imgC from "./img11.jpg";
import imgD from "./img12.jpg";
import img9 from "../ECE/smvitmlogo.png";

function CIVIL() {
  
 return (

    <div className="Main">

      {/* *****____________________________________HEADDER__________________________________________***** */}

      <div className="Header">
       <ul><b>CIVIL</b></ul>
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
           <p> 	The Civil Engineering Department has been in existence since the inception of the Institute during the academic year 2010-11 with an intake approval of 60 students. The Department has got a highly quali?ed team of faculty members having rich experience within academia and industry. The Department is committed to provide quality education and produce competent engineers to meet the growing demand for professionals in civil engineering.

The Department invites eminent personalities and academicians from prestigious Institutions and industries to deliver quality lectures to the students frequently and has organized many highly useful workshops which are bene?cial to the faculty, students and practising engineers. The faculty members attend various workshops/conferences/training programs on a regular basis, which would keep them abreast with the latest happenings and developments occurring in their related ?elds and upgrade their competencies and skill-sets up to date.

What is Civil Engineering?

Civil engineering is a professional engineering discipline that deals with the design, construction and maintenance of the physical and naturally built environment. To put simply, civil engineers build bridges, roads, canals, dams, tall buildings, and other large structures.

Civil engineering is all about creating, improving and protecting the environment in which we live. It provides the facilities for day-to-day life and for transport and industry to go about its work.

Civil Engineers are concerned with all types of structures including dams, bridges, pipelines, roads, towers and buildings. They are responsible for the design and construction of all our transport systems, the design and management of our gas and water supply, sewerage systems, harbours, airports and railways. Civil Engineers plan, design and test the structures of private and public buildings and facilities.

Consultancy and Third-party inspection work Consultancy and Third-party inspection work Consultancy Work:

Department of Civil Engineering undertakes Testing and consultancy works for various agencies in the Udupi district.
<br></br>
The area of Consultancy Includes:
<br></br>
Laboratory testing of soil, cement, sand, coarse aggregates, bitumen and water samples
<br></br>Design and drafting of RCC and steel structures
<br></br> Field tests on roads and buildings to check the quality of work 
<br></br> Inspection of roads, culverts, drains, buildings, etc.
<br></br> Concrete mix design
<br></br> Surveying of mobile tower 
<br></br> Water quality test
<br></br> Structural test on rebars

Third party Inspection Services to the following Organizations:

<br></br> Nirmithi kendra, Udupi
<br></br> City Municipal Council, Udupi
<br></br> Town Municipal council, Kaup 
<br></br> Panchayath raj Engineering division, Udupi. 

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
           <p>To establish a renowned centre to impart quality technical education, leadership qualities, professional ethics so as to contribute civil engineers to the society, capable of meeting global challenges�.

</p>   </div>
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
           <p>To provide unparalleled infrastructural facilities for imparting quality education at affordable cost. To provide an academic environment conducive for quality education and research, focusing on transfer of knowledge for the bene?t of the profession and society. To nurture talent in students and staff to enable them to be leaders in their chosen professions while maintaining the highest levels of ethics. To create awareness about innovation and ideation amongst students to promote entrepreneurship. To provide a platform for effective interactions and networking amongst all stake-holders so as to achieve excellence in education, research and outreach activities.
 
 </p>  </div>
       </div>

       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
           <h1>Message from HOD:</h1>
           <br></br>
           <br></br>
           <p>	American Society of Civil Engineering de?nes Civil Engineering as the profession, in which a knowledge of the mathematical and physical science gained by study, experience and practice is applied with judgment to develop ways to utilize economically the materials and forces of nature for the progress of well-being of man.
 
 
 The Civil Engineering Department has been in existence since the inception of the institute during the Academic year 2010-11 with, an intake of 60 students. The Department has got a highly quali?ed team of faculty members having rich experience within the academia and industry. The Department has set up state�of�the�art laboratories with all modern equipment in specialized areas to meet the needs of students as well as R&D and consultancy works that are on a par with institutions of repute in different ?elds of civil engineering. The department invites eminent personalities academicians from prestigious institutions industries to deliver quality lectures to the students frequently and has organized various useful workshops which are bene?cial to the faculty, students and practicing engineers.


 A plethora of opportunities awaits skilled professionals from civil engineering in the future and the scope of civil engineering is huge With the booming population and increased demands of sustainable infrastructure in the form of high-end road and railway network, better water supply arrangements and concept buildings, the right skill set on you, show new scope in your civil engineering path. This job is called �evergreen�. Students enrolling for admission in civil engineering in 2020 can prepare and train themselves with the right skill set to be instantly employed in to high-end national and international projects.

</p>   </div>
       </div>

      </div>

    </div>
  );
}

export default CIVIL;