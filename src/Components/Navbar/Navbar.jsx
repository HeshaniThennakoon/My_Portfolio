import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [active, setActive] = useState("Home");

    const menuItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />

            <ul className="nav-menu">
                {menuItems.map((item) => (
                    <li key={item} className={active === item ? "active" : ""}>
                        <Link
                        to = {item}
                        smooth = {true}
                        duration = {500}
                        spy = {true}
                        offset = {-70}
                        onClick={() => setActive(item)}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-connect"
            >
                Connect with Me
            </Link>
        </div>
    )
}

export default Navbar;