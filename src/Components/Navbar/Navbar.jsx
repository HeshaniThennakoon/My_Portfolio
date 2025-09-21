import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (item) => {
        setActive(item);
        setIsOpen(false); // close menu after selecting
    };

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />

            {/* Mobile menu */}
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? 
                    <FaTimes  /> : <FaBars  /> }
            </div>


            <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
                {menuItems.map((item) => (
                    <li key={item} className={active === item ? "active" : ""}>
                        <Link
                            to = {item}
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            offset = {-70}
                            onClick={() => handleClick(item)}
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
                onClick={() => setIsOpen(false)}
            >
                Connect with Me
            </Link>
        </div>
    )
}

export default Navbar;