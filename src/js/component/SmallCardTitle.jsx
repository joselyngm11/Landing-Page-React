import React from "react";
import PropTypes from "prop-types"

const SmallCardTitle = () => {
    return(
        <h4 className="project-name mt-4">Card Title</h4>
    )
}

SmallCardTitle.propTypes = {
    title: PropTypes.string
}

export default SmallCardTitle