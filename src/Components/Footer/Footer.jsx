import React from "react";
import "./Footer.css";
import footer_logo from "../../Assets/logo.png";
import { FaUser} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>“I am a software engineer and entrepreneur, passionate about building innovative solutions and turning ideas into impactful projects.”</p>          
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser className="contact-icon" />
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Heshani Thenakoon. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;