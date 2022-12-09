import "./App.css";
import heroimage from "./assets/heroimage.jpeg";
import { useState } from "react";
import Education from "./Education";
import Programming from "./Programming";
import Work from "./Work";
import Projects from "./Projects";
import { Typewriter } from "react-simple-typewriter";
import Testimonials from "./Testimonials";
function App() {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);
  const [programming, setPrograming] = useState(false);
  const [projects, setProjects] = useState(false);

  function setAllFalse() {
    setEducation(false);
    setPrograming(false);
    setWork(false);
    setProjects(false);
  }

  function changeState(function1, state1) {
    setAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="hero-section px-10 py-5">
        <nav className="  d-flex flex-row justify-content-between">
          <span className="brand-name">
            NGOM <span className="brand">DEV.</span>
          </span>
          <div>
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonials</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="herosection2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Khadim NGOM</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                {
                  <Typewriter
                    words={[
                      "Enthusiastic DEV 😎 ",
                      "Full Stack developer 🖥️",
                      "MERN Stack DEV😎 ",
                      "React/React Native DEV 📱 ",
                    ]}
                    loop={Infinity}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                }
              </span>
              <span className="Im-text-subheading">
                Knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                src={heroimage}
                alt="heroimage"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About me</span>
          <span className="why-text-sub">Why Choose Me ?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_tno6cg2w.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-aboutme">
                Full stack web and mobile developer with background knowledge in
                MERN Stack with redux, along with a knack of building
                applications with utmost efficiency. I master the different
                technical stages of the creation of a site or a web and mobile
                application; from understanding user needs, to front-end and
                back-end development, including maintenance…
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full Stack web and mobile development</li>
                    <li>Interactive Front end as per the design</li>
                    <li>React, Next and React Native</li>
                    <li>
                      NodeJS , Express, MongoDB (All backend technologies)
                    </li>
                    <li>JavaScript and TypeScript developer</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i class="fa-solid fa-user-graduate"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-code"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  changeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  work === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  changeState(setWork, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  changeState(setPrograming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  changeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>

          <div className="col-lg-8 col-md-8  resume-right-section">
            {education === true && <Education />}
            {work === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="testimonails-part my-5">
        <div className="testimonails-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">What We Say about me</span>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default App;
