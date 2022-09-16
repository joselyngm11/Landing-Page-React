import React from "react";
//import imagen from "../../img/img.png"
import PropTypes from "prop-types"

const SmallCardImage = (props)=>{
    return(
        <img className="card-img-top imagCard" src= {props.imagen} ></img>
    )
}

SmallCardImage.propTypes = {
    imagen: PropTypes.string
}

export default SmallCardImage