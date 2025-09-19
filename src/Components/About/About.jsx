import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import theme_pattern from "../../assets/theme_pattern.png";

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <img src={theme_pattern} alt="" />
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated software engineer with experience in developing web applications, optimizing backend systems, and creating seamless user experiences.</p>
                    <p>With a passion for problem-solving and continuous learning, I strive to deliver innovative and scalable solutions using modern technologies.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%" }}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width: "70%" }}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "50%" }}/></div>
                    <div className="about-skill"><p>.NET Core</p><hr style={{width: "60%" }}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
  
export default About;