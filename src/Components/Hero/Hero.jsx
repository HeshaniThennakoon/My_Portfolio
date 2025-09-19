import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
        <img src={profile} alt="" />
        <h1><span>I'm Heshani Thennakoon, </span>software engineer from Sri Lanka.</h1>
        <p>“I am a passionate software engineer specializing in building efficient, scalable, and user-friendly applications with modern technologies.”</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
  
export default Hero;