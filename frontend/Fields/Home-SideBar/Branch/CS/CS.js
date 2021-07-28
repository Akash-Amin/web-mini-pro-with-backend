
import "../ECE/ECE.css"
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
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

function CS() {
  
 return (

    <div className="Main">

      {/* *****____________________________________HEADDER__________________________________________***** */}

      <div className="Header">
       <ul><b>COMPUTER SCIENCE</b></ul>
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
           <p> Today, most of the real world activities and ?elds, right from calculations to space exploration are being computerized as the operations can be much faster and error free with the computer applications. This has resulted in an increased demand for skilled and competent professionals in the computer engineering sector. To cater to this, the Department of Computer Science & Engineering was established at SMVITM in 2010, offering Bachelor of Engineering course with an intake of 60 students per year. The intake was raised to 120 students from the academic year 2012-13. The Department aims at training the students to be industry-ready by the end of their course through regular curriculum as prescribed by the University and also with supplementary programs, throughout their study.
 </p>
 <p>The Department of Computer Science & Engineering is one of the much sought after departments at SMVITM. The Department has well quali?ed and motivated faculty members�who are highly committed to the overall development of the students.
 </p>       <p>Along with the regular curriculum, the Department organizes various guestlectures/invited talks by eminent faculty from reputed institutions/industry experts to keep students up-to-date about the latest technological developments. In addition to this, there are some eminent academicians appointed as Adjunct Faculty with the Department to supplement teaching, mentoring and guiding the students as well as the faculty members and also to promote research culture in the Department.
 </p>
 <p>The Department has state-of-the-art laboratories equipped with high-end computers and other required peripherals to meet the academic needs of students. The Department has the most sophisticated and state of the art 
computer labs aimed at giving hands-on training to the students in the most advanced areas in programming and soft ware development. In addition to the existing labs, an internet lab as a central facility is being developed.
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
           <p> To become a centre of excellence, in the ?eld of Computer Science and Engineering education and research, catering the needs of the industry and society 
           </p></div>
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
           <p>	To educate the Computer Science Engineering aspirants with basic and advanced technologies, who can make a difference in competitive environments, continuously improve their technological skills, communicate effectively and be faithful to ethical values.

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
           <p>Greetings from the Department of Computer science and Engineering! On behalf of faculty members, staffs and students of the department of computer science and engineering, SMVITM, I welcome you all for the creative world of CSE. I personally believe that CSE discipline has been generally accepted as an important source and technique for enhancement in all realms of human life, both now and in the future. In the department, every student is given the chance to participate in their academic activities. This is the department where graduates publish articles in the most reputed international journals, while at the same time, students are encouraged to gain some recognition through extra-curricular or co-curricular activities. 
 

 The department is associated with several associations like IEEE, ISTE etc, through that students will get a great platform to exhibit their talents. Students are expected to pursue ambitious assignments and to publish their work in different international journals. All students are taught to pursue an ideology that does not place limitations on their abilities to learn. The submissions of our students to numerous academic forums have demonstrated the earnest efforts of their professors at several stages. The Department puts a great focus on delivering practical education by properly handling the proper lab work to supplement their theoretical understanding. At the department, professors are committed to training students for a more substantial challenge ahead and nurturing them to create a solid base for the next step so that they can even exceed teachers and become more valuable to society. 
</p>    </div>
       </div>

      </div>

    </div>
  );
}

export default CS;