import React from "react";
import PropTypes from "prop-types"

const SmallCardParagraph = (props)=>{
    return(
        <p className="porfolio-text"> {props.paragraph}
        </p>
    )
}

SmallCardParagraph.propTypes = {
    paragraph: PropTypes.string
}

export default SmallCardParagraph