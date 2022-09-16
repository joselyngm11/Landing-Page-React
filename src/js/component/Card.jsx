import React from "react";
import imagen from "../../img/img.png"
import SmallCard from "./SmallCard.jsx";
import PropTypes from "prop-types"

const Card = ()=>{
    return(
        <div className="row mb-5">
            <SmallCard imagen={imagen} title="Primera Carta" paragraph="Esto es un ejemplo"/>
            <SmallCard imagen="https://picsum.photos/200/300?random=1" title="Segunda Carta" paragraph="Esto es un ejemplo"/>
            <SmallCard imagen="https://picsum.photos/200/300?random=2" title="Tercera Carta" paragraph="Esto es un ejemplo"/>
            <SmallCard imagen="https://picsum.photos/200/300?random=3" title="Cuarta Carta" paragraph="Esto es un ejemplo"/>
        </div>
    )
}

SmallCard.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    imagen: PropTypes.string
}

export default Card