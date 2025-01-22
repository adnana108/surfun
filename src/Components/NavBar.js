import "./NavBar.scss";
import React, { useState } from "react";
import MenuIcon from "../assets/menu-icon.png";
import TrialButton from "../Components/TrialButton";

const NavBar = () => {
    const [isListVisible, setIsListVisible] = useState(false);

    const handleChange = () => {
        isListVisible ? setIsListVisible(false) : setIsListVisible(true);
    }

    return (
        <nav className="nav-bar">
            <div className="logos-container">
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
            </div>
            {isListVisible && (
                <ul className="nav-list">
                    <li>Home Page</li>
                    <li>Blog</li>
                    <li>Fav spots</li>
                    <li>Photos</li>
                    <li className="trial-nav"><TrialButton /></li>
                    <li>Already part of community?</li>
                    <li><button className="btn-sign-in">Sign in</button></li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar;