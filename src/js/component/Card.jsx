import React from "react";
import imagen from "../../img/img.png"
import SmallCard from "./SmallCard.jsx";
import PropTypes from "prop-types"

const Card = ()=>{
    return(
        <div className="row mb-5">
            <SmallCard 
            imagen={imagen} 
            title="Primera Carta" 
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                pellentesque urna varius vitae."/>

            <SmallCard 
            imagen="https://picsum.photos/200/300?random=1" 
            title="Segunda Carta" 
            paragraph="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
            id ligula porta felis euismod semper. Praesent commodo cursus magna."/>

            <SmallCard 
            imagen="https://picsum.photos/200/300?random=2" 
            title="Tercera Carta" 
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                pellentesque urna varius vitae."/>

            <SmallCard 
            imagen="https://picsum.photos/200/300?random=3" 
            title="Cuarta Carta" 
            paragraph="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
            id ligula porta felis euismod semper. Praesent commodo cursus magna."/>
        </div>
    )
}

SmallCard.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    imagen: PropTypes.string
}

export default Card