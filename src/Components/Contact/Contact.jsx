import React from "react";
import './Contact.css';
import theme_pattern from '../../Assets/theme_pattern.png';

// Import icons
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="Contact" name="Contact" className="contact">
            <div className="contact-title">
                <img src={theme_pattern} alt="" />
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I will try my best to get back to you!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <MdEmail className="contact-icon" />
                            <p>thennakoonghm@gmail.com</p>                                                        
                        </div>
                        <div className="contact-detail">
                            <FaWhatsapp className="contact-icon" />
                            <p>+94 75 816 74 90</p>                            
                        </div>
                        <div className="contact-detail">
                            <FaLinkedin className="contact-icon" />
                            <p>https://www.linkedin.com/in/heshani-thennakoon-46538a2b7</p>                            
                        </div>
                        <div className="contact-detail">
                            <FaFacebook className="contact-icon" />
                            <p>https://www.facebook.com/heshani.maduwanthi.7568?mibextid=ZbWKwL</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;