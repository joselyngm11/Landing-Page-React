import React from "react";
import PropTypes from "prop-types"
import SmallCardTitle from "./SmallCardTitle.jsx";
import SmallCardParagraph from "./SmallCardParagraph.jsx";

const SmallCardBody = ()=>{
    return(
            <div className="card-body">
                <SmallCardTitle/>
                <SmallCardParagraph/>
            </div>
    )
}

SmallCardTitle.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default SmallCardBody