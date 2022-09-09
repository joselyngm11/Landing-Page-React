import React from "react";
import imagen from "../../img/img.png"
import SmallCard from "./SmallCard.jsx";

const Card = ()=>{
    return(
        <div className="row mb-5">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>

        </div>
    )
}

export default Card