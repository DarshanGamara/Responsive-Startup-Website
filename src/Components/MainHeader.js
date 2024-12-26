import { Link } from "react-router-dom";
import "./MainHeader.css";
import Company from "../Assets/Group 1.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

    function MainHeader() {
       const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
          setIsMenuOpen((prevState) => !prevState);
        };

        
        return (
          <header className="header-box">
            <nav className="nav-box">
              <img src={Company} alt="Company Logo" className="company" />
              <span className="dg">D&G</span>
              <div className="toggleMenu">
                <button className="menu-button" onClick={toggleMenu}>
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`ul-div ${isMenuOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/Portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
    };

    export default MainHeader;