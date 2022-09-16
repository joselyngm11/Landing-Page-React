import React from "react";
import PropTypes from "prop-types"
import SmallCardTitle from "./SmallCardTitle.jsx";
import SmallCardParagraph from "./SmallCardParagraph.jsx";

const SmallCardBody = (props)=>{
    return(
            <div className="card-body">
                <SmallCardTitle title={props.title}/>
                <SmallCardParagraph paragraph={props.paragraph}/>
            </div>
    )
}

SmallCardTitle.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default SmallCardBody