import React from "react";
import PropTypes from "prop-types"

const SmallCardTitle = (props) => {
    return(
        <h4 className="project-name mt-4">{props.title}</h4>
    )
}

SmallCardTitle.propTypes = {
    title: PropTypes.string
}

export default SmallCardTitle