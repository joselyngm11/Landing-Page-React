import React from "react";
import fondo from "../../img/hawaii.jpg"
import TaglineTitle from "./TaglineTitle.jsx";
import TaglineParagraph from "./TaglineParagraph.jsx";
import TaglineButton from "./TaglineButton.jsx";

const Tagline = ()=>{
    return(
        <div className="bg-image pt-5 shadow-1-strong rounded mb-5 text-white" 
            style={{backgroundImage: `url(${fondo})`,
             backgroundSize: "cover",
            height: "600px"}}>
                <TaglineTitle/>
                <TaglineParagraph/>
                <TaglineButton/>
        </div>
    )
}

export default Tagline