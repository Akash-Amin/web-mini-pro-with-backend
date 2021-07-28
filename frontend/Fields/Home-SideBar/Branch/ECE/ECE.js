  
import './ECE.css';
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";
import img6 from "./img6.jpeg";
import img7 from "./img7.jpeg";
import img8 from "./img8.jpeg";
import imgA from "./imgA.jpg";
import imgB from "./imgB.jpg";
import imgC from "./imgC.jpg";
import imgD from "./imgD.jpg";
import img9 from "./smvitmlogo.png";

function ECE() {
  
 return (

    <div className="Main">

      {/* *****____________________________________HEADDER__________________________________________***** */}

      <div className="Header">
       <ul><b>ELECTRONICS AND COMMUNICATION ENGINEERING</b></ul>
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
           <p>Electronics today stands at the htmlForefront of the rapidly expanding horizon of Science and Technology. The Department of Electronics and Communication Engineering in SMVITM was established in the year 2010, initially offering an undergraduate program with an intake of 60 students per year. The intake was increased to 120 in the academic year 2012-13.  </p>
           <p>The department has well-qualiﬁed faculty members – highly motivated in teaching and guiding the students in exploring newer avenues of electronics and communication.</p>
           <p>The department is intent on creative and technologically advanced skill transfer to the students through teaching, mentoring and counselling. It regularly organizes seminars, symposiums, workshops and invited talks by eminent faculty from reputed institutions and industry experts, to keep the students abreast of the latest technological developments in related ﬁelds. The services of some academicians of high repute have been utilized by the department with the objective of supplementing teaching, mentoring and guiding the students as well as faculty members.</p>
           <p>The department has its own library comprising of over 200 text books and technical magazines htmlFor quick reference. To nurture creative ideas and provide hands-on training to the students, the department has set up an Innovation/Project laboratory with state-of-the-art equipment and latest versions of software tools, in addition to the regular laboratories.</p>
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
           <p>To emerge as an excellent technical education center and be an integral part in the development of advancing technologies and global challenges, in the ﬁeld of Electronics and Communication Engineering.</p>
         </div>
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
           <p>To facilitate an ambience conducive to the excellence in technical education. To provide a plathtmlForm that will ensure the exchange of ideas and dissemination of knowledge. To establish a research oriented center by having rapport with industries. To foster ethical and value based education with credibility by promoting activities that have societal impact.</p>
         </div>
       </div>

       <div className="box">
         <div className="imgbx">
           <img src={img9} alt=""></img>
         </div>
         <div className="info">
           <h1>Message from HOD:</h1>
           <br></br>
           <br></br>
           <p>Electronic products are becoming an essential part of our daily lives, from simple consumer electronics to highly sophisticated aviation and avionics or diagnostic equipment and  ultra-modern ﬁbre optic communications systems. Field of computers, communication systems and consumer electronics are progressing rapidly.</p>
           <p>To keep up with this progressing technology and to meet the increasing demand htmlFor skilled professional with engineering prospective, who is logical, a problem solver, analytical, who is good in multitasking and pioneering our department of Electronics and Communication Engineering grooms the students in the ﬁeld of technology and plays an active role in this fast moving world.</p>
           <p>The Department of Electronics and Communication Engineering had started functioning ever since the Institution came into existence in 2010, with the vision to upgrade the skills and knowledge of young engineers and to enable them survive in the competitive world.</p>
           <p>The Department has qualiﬁed and devoted faculty members to provide good technical support and give individual consideration to all the students. The vision of the department is supported by our faculty and students who are dedicated to achieve this goal with zeal and good ethical values. We hope that we will continue to aid the society and expect our students to pass on the skills that they have developed during their tenure in the department.</p>
           <p>Since, its inception, The Department has been giving a great emphasis on the overall development and improvement of its students and staff.We are committed to give our students an outcome based education which provides them an environment to develop critical thinking and problemsolving skills as they advance through the programme. In addition to classroom teaching, the students are guided and motivated to implement practically the principles learnt in classrooms through experimentations in the laboratories and projects which help students gain conﬁdence and become skilled engineering professionals.</p>
           <p>This website provides an overview of the department programs, research activities, various facilities and laboratories and also proﬁles of faculty members. We hope that whether you are a prospective student, or industry personnel, or academician, or a visitor, you will ﬁnd this website inhtmlFormative.</p>
           <p>We welcome you to the Electronics and Communication Engineering Department as undergraduate or research student and we hope to be part of your success.</p>
         </div>
       </div>

      </div>

    </div>
  );
}

export default ECE;