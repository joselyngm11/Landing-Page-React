import React from "react";

const NavbarItems = ()=>{
    return(
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    )
}

export default NavbarItems