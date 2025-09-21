import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="Home" name="Home" className="hero">
        <img src={profile} alt="" />
        <h1><span>I'm Heshani Thennakoon, </span>software engineer from Sri Lanka.</h1>
        <p>“I am a passionate software engineer specializing in building efficient, scalable, and user-friendly applications with modern technologies.”</p>
        
        <div className="hero-action">
          <Link
                to="Contact"
                smooth={true}
                duration={500}  
                className="hero-connect"
                >
                Connect with Me
          </Link>
          
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}
  
export default Hero;