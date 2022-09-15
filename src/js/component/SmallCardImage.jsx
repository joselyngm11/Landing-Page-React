import React from "react";
//import imagen from "../../img/img.png"
import PropTypes from "prop-types"

const SmallCardImage = (imagen)=>{
    return(
        <img className="card-img-top" src= {imagen} ></img>
    )
}

SmallCardImage.propTypes = {
    imgagen: PropTypes.string
}

export default SmallCardImage