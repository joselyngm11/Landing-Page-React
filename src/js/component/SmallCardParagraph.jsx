import React from "react";
import PropTypes from "prop-types"

const SmallCardParagraph = ()=>{
    return(
        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
            pellentesque urna varius vitae.
        </p>
    )
}

SmallCardParagraph.propTypes = {
    paragraph: PropTypes.string
}

export default SmallCardParagraph