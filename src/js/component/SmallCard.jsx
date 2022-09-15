import React from "react";
import PropTypes from "prop-types"
import imag from "../../img/img.png"
import SmallCardBody from "./SmallCardBody.jsx";
import SmallCardFooter from "./SmallCardFooter.jsx";
import SmallCardImage from "./SmallCardImage.jsx";

const SmallCard = ()=>{
    return(
        <div className="card">
            <SmallCardImage imagen={imag}/>
            <SmallCardBody/>
            <SmallCardFooter/>
        </div>
    )
}

SmallCardImage.propTypes = {
    imagen: PropTypes.string
}

export default SmallCard