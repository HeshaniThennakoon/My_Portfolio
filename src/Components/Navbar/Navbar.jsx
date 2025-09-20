import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [active, setActive] = useState("Home");

    const menuItems = ["Home", "About Me", "Services", "Portfolio", "Blog", "Contact"];

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-menu">
                {menuItems.map((item) => (
                    <li 
                        key={item} 
                        className={active === item ? "active" : ""} 
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="nav-connect">Connect with Me</div>
        </div>
    )
}

export default Navbar;