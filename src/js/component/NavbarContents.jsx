import React from "react";
import NavbarBrand from "./NavbarBrand.jsx";
import NavbarItems from "./NavbarItems.jsx";

const NavbarContents = ()=>{
    return(
        <div className="container-fluid">
            <NavbarBrand/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <NavbarItems/>
            </div>
        </div>
    )
}

export default NavbarContents