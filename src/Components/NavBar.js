import "./NavBar.scss";
import React, { useState } from "react";
import MenuIcon from "../assets/menu-icon.png";

const NavBar = () => {
    const [isListVisible, setIsListVisible] = useState(false);

    const handleChange = () => {
        isListVisible ? setIsListVisible(false) : setIsListVisible(true);
    }

    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <button
                    className="btn btn-menu-icon"
                    onClick={handleChange}>
                    <img
                        className="menu-icon"
                        src={MenuIcon}
                        alt="Menu-icon"
                    />
                </button>
                <span className="surf-fun-logo">Surfun</span>
            </nav>
            {isListVisible && (
                <ul className="nav-list">
                    <li>Home Page</li>
                    <li>Blog</li>
                    <li>Fav spots</li>
                    <li>Photos</li>
                    <li><button class="btn-free-trial">Start free trial</button></li>
                    <li>Already part of community?</li>
                    <li><button className="btn btn-sign-in">Sign in</button></li>
                </ul>

            )}
        </div>
    )
}

export default NavBar;