import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#011A27" }}>
            <NavLink  className="navbar-brand" to="/" style={{ color: "#F0810F" }}>Christopher Cruzcosa</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation" style={{ color: "#F0810F" }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex flex-row-reverse">
                        <li className="nav-item active">
                        <NavLink  className="nav-link" to="/about" style={{ color: "#F0810F" }}>About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/portfolio" style={{ color: "#F0810F" }}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/contact" style={{ color: "#F0810F" }}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <a  className="nav-link" to="/resume.pdf" href={"/resume.pdf"} style={{ color: "#F0810F" }} rel="noreferrer" target="_blank" >Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;