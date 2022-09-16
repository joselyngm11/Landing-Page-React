import React from "react";
import PropTypes from "prop-types"
import SmallCardBody from "./SmallCardBody.jsx";
import SmallCardFooter from "./SmallCardFooter.jsx";
import SmallCardImage from "./SmallCardImage.jsx";

const SmallCard = (props)=>{
    return(
        <div className="card">
            <SmallCardImage imagen={props.imagen}/>
            <SmallCardBody title={props.title} paragraph={props.paragraph}/>
            <SmallCardFooter/>
        </div>
    )
}

SmallCardImage.propTypes = {
    imagen: PropTypes.string
}

SmallCardBody.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default SmallCard